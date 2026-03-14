package handlers

import (
	"fmt"
	"log"
	"math"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/stripe/stripe-go/v82"
	"github.com/stripe/stripe-go/v82/paymentintent"
	"github.com/stripe/stripe-go/v82/webhook"
	"gorm.io/gorm"

	"gritcms/apps/api/internal/config"
	"gritcms/apps/api/internal/events"
	"gritcms/apps/api/internal/models"
	"gritcms/apps/api/internal/services"
)

// PaymentHandler handles Stripe checkout and webhook endpoints.
type PaymentHandler struct {
	db  *gorm.DB
	cfg *config.Config
}

// NewPaymentHandler creates a new PaymentHandler.
func NewPaymentHandler(db *gorm.DB, cfg *config.Config) *PaymentHandler {
	// Set Stripe secret key globally
	if cfg.StripeSecretKey != "" {
		stripe.Key = cfg.StripeSecretKey
	}
	return &PaymentHandler{db: db, cfg: cfg}
}

// Checkout creates a pending order and a Stripe PaymentIntent, returning
// the client_secret for the frontend to complete payment via Stripe Elements.
func (h *PaymentHandler) Checkout(c *gin.Context) {
	var input struct {
		Type       string `json:"type" binding:"required"` // "product" or "course"
		ProductID  *uint  `json:"product_id"`
		CourseID   *uint  `json:"course_id"`
		PriceID    uint   `json:"price_id"`
		CouponCode string `json:"coupon_code"`
		Provider   string `json:"provider"` // "stripe", "paypal", "mpesa"
		Phone      string `json:"phone"`    // Required for mpesa
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Resolve authenticated user → contact
	user, _ := c.Get("user")
	u := user.(models.User)

	var contact models.Contact
	if err := h.db.Where("email = ? AND tenant_id = ?", u.Email, 1).First(&contact).Error; err != nil {
		contact = models.Contact{
			TenantID:  1,
			Email:     u.Email,
			FirstName: u.FirstName,
			LastName:  u.LastName,
			Source:    "organic",
			UserID:    &u.ID,
		}
		h.db.Create(&contact)
	} else if contact.UserID == nil {
		contact.UserID = &u.ID
		h.db.Save(&contact)
	}

	// Resolve product and price
	var product models.Product
	var price models.Price
	var currency string

	switch input.Type {
	case "course":
		if input.CourseID == nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "course_id is required"})
			return
		}
		var course models.Course
		if err := h.db.First(&course, *input.CourseID).Error; err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "Course not found"})
			return
		}
		if course.Status != models.CourseStatusPublished {
			c.JSON(http.StatusNotFound, gin.H{"error": "Course not found"})
			return
		}
		if course.AccessType != models.CourseAccessPaid {
			c.JSON(http.StatusBadRequest, gin.H{"error": "This course is free — no payment needed"})
			return
		}
		if course.ProductID != nil {
			if err := h.db.First(&product, *course.ProductID).Error; err != nil {
				c.JSON(http.StatusNotFound, gin.H{"error": "Linked product not found"})
				return
			}
		} else {
			// Auto-create a product + price for the paid course
			cur := course.Currency
			if cur == "" {
				cur = "USD"
			}
			product = models.Product{
				TenantID:    1,
				Name:        course.Title,
				Slug:        course.Slug + "-product",
				Type:        models.ProductTypeCourse,
				Status:      "active",
				Description: course.ShortDescription,
			}
			if err := h.db.Create(&product).Error; err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create product for course"})
				return
			}
			price = models.Price{
				TenantID:  1,
				ProductID: product.ID,
				Amount:    course.Price,
				Currency:  cur,
				Type:      models.PriceTypeOneTime,
				SortOrder: 0,
			}
			if err := h.db.Create(&price).Error; err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create price for course"})
				return
			}
			// Link product back to course
			h.db.Model(&course).Update("product_id", product.ID)
		}
		currency = course.Currency

	case "product":
		if input.ProductID == nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "product_id is required"})
			return
		}
		if err := h.db.First(&product, *input.ProductID).Error; err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
			return
		}

	default:
		c.JSON(http.StatusBadRequest, gin.H{"error": "type must be 'product' or 'course'"})
		return
	}

	if product.Status != "active" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Product is not available"})
		return
	}

	// Load price — auto-resolve default price if not specified
	if input.PriceID > 0 {
		if err := h.db.First(&price, input.PriceID).Error; err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "Price not found"})
			return
		}
		if price.ProductID != product.ID {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Price does not belong to this product"})
			return
		}
	} else {
		// Auto-select the first one_time price for the product
		if err := h.db.Where("product_id = ? AND type = ?", product.ID, models.PriceTypeOneTime).
			Order("sort_order ASC").First(&price).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "No price found for this product"})
			return
		}
	}

	if currency == "" {
		currency = price.Currency
	}
	if currency == "" {
		currency = "USD"
	}

	// Calculate amount
	subtotal := price.Amount
	var discountAmount float64
	var couponID *uint

	if input.CouponCode != "" {
		var coupon models.Coupon
		if err := h.db.Where("code = ? AND status = 'active'", strings.ToUpper(input.CouponCode)).First(&coupon).Error; err == nil {
			if coupon.MaxUses == 0 || coupon.UsedCount < coupon.MaxUses {
				now := time.Now()
				validTime := true
				if coupon.ValidFrom != nil && now.Before(*coupon.ValidFrom) {
					validTime = false
				}
				if coupon.ValidUntil != nil && now.After(*coupon.ValidUntil) {
					validTime = false
				}
				if validTime && subtotal >= coupon.MinOrderAmount {
					if coupon.Type == models.CouponTypePercentage {
						discountAmount = subtotal * (coupon.Amount / 100)
					} else {
						discountAmount = coupon.Amount
					}
					if discountAmount > subtotal {
						discountAmount = subtotal
					}
					couponID = &coupon.ID
				}
			}
		}
	}

	totalAmount := subtotal - discountAmount
	if totalAmount <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Total amount must be greater than zero"})
		return
	}

	// price.Amount is already stored in cents (e.g. 3000 = $30.00)
	amountInCents := int64(math.Round(totalAmount))

	provider := input.Provider
	if provider == "" {
		provider = "stripe"
	}

	// Create pending order
	productID := product.ID // capture for pointer use
	order := models.Order{
		TenantID:        1,
		ContactID:       contact.ID,
		OrderNumber:     generateOrderNumber(),
		Status:          models.OrderStatusPending,
		Subtotal:        subtotal,
		DiscountAmount:  discountAmount,
		TaxAmount:       0,
		Total:           totalAmount,
		Currency:        currency,
		PaymentProvider: provider,
		CouponID:        couponID,
		Items: []models.OrderItem{
			{
				TenantID:  1,
				ProductID: &productID, // ✅ fixed: was product.ID (uint), now &productID (*uint)
				PriceID:   &price.ID,
				Quantity:  1,
				UnitPrice: price.Amount,
				Total:     price.Amount,
			},
		},
	}

	if err := h.db.Create(&order).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create order"})
		return
	}

	// Increment coupon usage
	if couponID != nil {
		h.db.Model(&models.Coupon{}).Where("id = ?", *couponID).UpdateColumn("used_count", gorm.Expr("used_count + 1"))
	}

	// Initialize payment based on provider
	switch provider {
	case "stripe":
		// Create Stripe PaymentIntent
		params := &stripe.PaymentIntentParams{
			Amount:   stripe.Int64(amountInCents),
			Currency: stripe.String(strings.ToLower(currency)),
			AutomaticPaymentMethods: &stripe.PaymentIntentAutomaticPaymentMethodsParams{
				Enabled: stripe.Bool(true),
			},
			Description:  stripe.String(product.Name),
			ReceiptEmail: stripe.String(u.Email),
			Metadata: map[string]string{
				"order_id":   fmt.Sprintf("%d", order.ID),
				"contact_id": fmt.Sprintf("%d", contact.ID),
				"type":       input.Type,
			},
		}

		pi, err := paymentintent.New(params)
		if err != nil {
			log.Printf("[payment] Stripe PaymentIntent creation failed: %v", err)
			h.db.Delete(&order)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to initialize payment"})
			return
		}

		// Store PaymentIntent ID on order
		order.PaymentID = pi.ID
		h.db.Model(&order).Update("payment_id", pi.ID)

		c.JSON(http.StatusOK, gin.H{"data": gin.H{
			"provider":        "stripe",
			"client_secret":   pi.ClientSecret,
			"order_id":        order.ID,
			"order_number":    order.OrderNumber,
			"amount":          amountInCents,
			"currency":        currency,
			"publishable_key": h.cfg.StripePublishableKey,
		}})
		return

	case "paypal":
		paypalSvc := services.NewPayPalService(h.cfg)
		paypalOrder, err := paypalSvc.CreateOrder(product.Name, totalAmount, currency, fmt.Sprintf("%d", order.ID))
		if err != nil {
			log.Printf("[payment] PayPal Order creation failed: %v", err)
			h.db.Delete(&order)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to initialize PayPal payment"})
			return
		}

		order.PaymentID = paypalOrder.ID
		h.db.Model(&order).Update("payment_id", paypalOrder.ID)

		var approvalURL string
		for _, link := range paypalOrder.Links {
			if link.Rel == "approve" {
				approvalURL = link.Href
				break
			}
		}

		c.JSON(http.StatusOK, gin.H{"data": gin.H{
			"provider":        "paypal",
			"order_id":        order.ID,
			"paypal_order_id": paypalOrder.ID,
			"approval_url":    approvalURL,
		}})
		return

	case "mpesa":
		if input.Phone == "" {
			h.db.Delete(&order)
			c.JSON(http.StatusBadRequest, gin.H{"error": "Phone number is required for M-Pesa"})
			return
		}

		mpesaSvc := services.NewMPesaService(h.cfg)
		// For STK Push, CallbackURL must be a public URL
		callbackURL := strings.TrimRight(h.cfg.AppURL, "/") + "/api/callbacks/mpesa"

		checkoutRequestID, err := mpesaSvc.STKPush(input.Phone, totalAmount, order.OrderNumber, product.Name, callbackURL)
		if err != nil {
			log.Printf("[payment] M-Pesa STK Push failed: %v", err)
			h.db.Delete(&order)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to initialize M-Pesa payment: " + err.Error()})
			return
		}

		order.PaymentID = checkoutRequestID
		h.db.Model(&order).Update("payment_id", checkoutRequestID)

		c.JSON(http.StatusOK, gin.H{"data": gin.H{
			"provider":            "mpesa",
			"order_id":            order.ID,
			"checkout_request_id": checkoutRequestID,
			"message":             "STK Push sent to your phone. Please enter your PIN to complete the payment.",
		}})
		return

	default:
		h.db.Delete(&order)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Unsupported payment provider"})
		return
	}
}

// CheckoutStatus returns the current status of an order for the authenticated user.
func (h *PaymentHandler) CheckoutStatus(c *gin.Context) {
	orderID := c.Param("orderId")
	user, _ := c.Get("user")
	u := user.(models.User)

	var contact models.Contact
	if err := h.db.Where("email = ? AND tenant_id = ?", u.Email, 1).First(&contact).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Contact not found"})
		return
	}

	var order models.Order
	if err := h.db.Where("id = ? AND contact_id = ?", orderID, contact.ID).First(&order).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Order not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": gin.H{
		"order_id":     order.ID,
		"order_number": order.OrderNumber,
		"status":       order.Status,
		"total":        order.Total,
	}})
}

// ConfirmCheckout is called by the frontend after stripe.confirmPayment succeeds.
// It verifies the PaymentIntent via Stripe API and immediately fulfills the order,
// so the user doesn't have to wait for the webhook.
func (h *PaymentHandler) ConfirmCheckout(c *gin.Context) {
	orderID := c.Param("orderId")
	user, _ := c.Get("user")
	u := user.(models.User)

	var contact models.Contact
	if err := h.db.Where("email = ? AND tenant_id = ?", u.Email, 1).First(&contact).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Contact not found"})
		return
	}

	var order models.Order
	if err := h.db.Where("id = ? AND contact_id = ?", orderID, contact.ID).Preload("Items").First(&order).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Order not found"})
		return
	}

	// Idempotency: already paid
	if order.Status == models.OrderStatusPaid {
		c.JSON(http.StatusOK, gin.H{"data": gin.H{"status": "paid"}})
		return
	}

	// Verify PaymentIntent status via provider
	if order.PaymentID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No payment associated with this order"})
		return
	}

	if order.PaymentProvider == "stripe" || order.PaymentProvider == "" {
		pi, err := paymentintent.Get(order.PaymentID, nil)
		if err != nil {
			log.Printf("[confirm] Failed to retrieve PI %s: %v", order.PaymentID, err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to verify payment"})
			return
		}

		if pi.Status != stripe.PaymentIntentStatusSucceeded {
			c.JSON(http.StatusOK, gin.H{"data": gin.H{"status": string(pi.Status)}})
			return
		}
	} else if order.PaymentProvider == "paypal" {
		paypalSvc := services.NewPayPalService(h.cfg)
		err := paypalSvc.CaptureOrder(order.PaymentID)
		if err != nil {
			log.Printf("[confirm] Failed to capture PayPal order %s: %v", order.PaymentID, err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to capture PayPal payment"})
			return
		}
	} else if order.PaymentProvider == "mpesa" {
		if order.Status != models.OrderStatusPaid {
			c.JSON(http.StatusOK, gin.H{"data": gin.H{"status": "pending", "message": "Waiting for M-Pesa confirmation via callback"}})
			return
		}
	}

	// Mark as paid and fulfill
	now := time.Now()
	order.Status = models.OrderStatusPaid
	order.PaidAt = &now
	h.db.Save(&order)

	fulfillOrder(h.db, &order)

	log.Printf("[confirm] Order %d confirmed and fulfilled (PI: %s)", order.ID, order.PaymentID)
	c.JSON(http.StatusOK, gin.H{"data": gin.H{"status": "paid"}})
}

// StripeConfig returns the publishable key for the frontend.
func (h *PaymentHandler) StripeConfig(c *gin.Context) {
	if h.cfg.StripePublishableKey == "" {
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": "Payments not configured"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": gin.H{
		"publishable_key": h.cfg.StripePublishableKey,
	}})
}

// StripeWebhook handles incoming Stripe webhook events.
func (h *PaymentHandler) StripeWebhook(c *gin.Context) {
	payload, err := c.GetRawData()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to read body"})
		return
	}

	sig := c.GetHeader("Stripe-Signature")
	event, err := webhook.ConstructEvent(payload, sig, h.cfg.StripeWebhookSecret)
	if err != nil {
		log.Printf("[webhook] Signature verification failed: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid signature"})
		return
	}

	switch event.Type {
	case "payment_intent.succeeded":
		h.handlePaymentSucceeded(event)
	case "payment_intent.payment_failed":
		h.handlePaymentFailed(event)
	}

	c.JSON(http.StatusOK, gin.H{"received": true})
}

// PayPalWebhook handles incoming PayPal webhook events.
func (h *PaymentHandler) PayPalWebhook(c *gin.Context) {
	// A robust implementation would verify the webhook signature here
	// For now, we will just parse it
	var event struct {
		EventType string `json:"event_type"`
		Resource  struct {
			ID string `json:"id"`
		} `json:"resource"`
	}

	if err := c.ShouldBindJSON(&event); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid payload"})
		return
	}

	if event.EventType == "CHECKOUT.ORDER.APPROVED" {
		// Log or trigger capture. We auto-capture in ConfirmCheckout normally,
		// but we could also capture here.
		log.Printf("[paypal] Order approved webhook received for order %s", event.Resource.ID)
	}

	c.JSON(http.StatusOK, gin.H{"received": true})
}

// MPesaCallback handles Safaricom Lipa Na M-Pesa Online callbacks.
func (h *PaymentHandler) MPesaCallback(c *gin.Context) {
	var payload struct {
		Body struct {
			StkCallback struct {
				MerchantRequestID string `json:"MerchantRequestID"`
				CheckoutRequestID string `json:"CheckoutRequestID"`
				ResultCode        int    `json:"ResultCode"`
				ResultDesc        string `json:"ResultDesc"`
				CallbackMetadata  struct {
					Item []struct {
						Name  string      `json:"Name"`
						Value interface{} `json:"Value"`
					} `json:"Item"`
				} `json:"CallbackMetadata"`
			} `json:"stkCallback"`
		} `json:"Body"`
	}

	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid payload"})
		return
	}

	cb := payload.Body.StkCallback

	var order models.Order
	if err := h.db.Where("payment_id = ?", cb.CheckoutRequestID).Preload("Items").First(&order).Error; err != nil {
		log.Printf("[mpesa] Order not found for CheckoutRequestID: %s", cb.CheckoutRequestID)
		c.JSON(http.StatusOK, gin.H{"status": "ignored"})
		return
	}

	if order.Status == models.OrderStatusPaid {
		c.JSON(http.StatusOK, gin.H{"status": "already_paid"})
		return
	}

	if cb.ResultCode == 0 {
		// Payment success
		now := time.Now()
		order.Status = models.OrderStatusPaid
		order.PaidAt = &now
		h.db.Save(&order)

		fulfillOrder(h.db, &order)
		log.Printf("[mpesa] Order %d marked as paid (M-Pesa: %s)", order.ID, cb.CheckoutRequestID)
	} else {
		// Payment failed/cancelled
		order.Status = models.OrderStatusFailed
		h.db.Save(&order)
		log.Printf("[mpesa] Order %d payment failed: %s", order.ID, cb.ResultDesc)
	}

	c.JSON(http.StatusOK, gin.H{"status": "received"})
}

func (h *PaymentHandler) handlePaymentSucceeded(event stripe.Event) {
	pi, ok := event.Data.Object["id"].(string)
	if !ok {
		log.Println("[webhook] Missing payment_intent ID")
		return
	}

	var order models.Order
	if err := h.db.Where("payment_id = ?", pi).Preload("Items").First(&order).Error; err != nil {
		log.Printf("[webhook] Order not found for PI %s: %v", pi, err)
		return
	}

	// Idempotency: skip if already paid
	if order.Status == models.OrderStatusPaid {
		log.Printf("[webhook] Order %d already paid, skipping", order.ID)
		return
	}

	// Mark as paid
	now := time.Now()
	order.Status = models.OrderStatusPaid
	order.PaidAt = &now
	h.db.Save(&order)

	// Fulfill order (auto-enroll in courses, etc.)
	fulfillOrder(h.db, &order)

	log.Printf("[webhook] Order %d marked as paid (PI: %s)", order.ID, pi)
}

func (h *PaymentHandler) handlePaymentFailed(event stripe.Event) {
	pi, ok := event.Data.Object["id"].(string)
	if !ok {
		return
	}

	var order models.Order
	if err := h.db.Where("payment_id = ?", pi).First(&order).Error; err != nil {
		return
	}

	if order.Status != models.OrderStatusPending {
		return
	}

	order.Status = models.OrderStatusFailed
	h.db.Save(&order)
	log.Printf("[webhook] Order %d payment failed (PI: %s)", order.ID, pi)
}

// fulfillOrder is a local wrapper to avoid circular imports.
// It duplicates the logic from services.FulfillOrder.


func fulfillOrder(db *gorm.DB, order *models.Order) {
	for _, item := range order.Items {
		var product models.Product
		if err := db.First(&product, item.ProductID).Error; err != nil {
			log.Printf("[fulfillment] Product %v not found for order %d: %v", item.ProductID, order.ID, err)
			continue
		}

		switch product.Type {

		case models.ProductTypeCourse:
			// Auto-enroll contact in any courses linked to this product
			var courses []models.Course
			db.Where("product_id = ?", product.ID).Find(&courses)
			for _, course := range courses {
				enrollment := models.CourseEnrollment{
					TenantID:  1,
					ContactID: order.ContactID,
					CourseID:  course.ID,
					Status:    "active",
					Source:    "purchase",
				}
				if err := db.FirstOrCreate(&enrollment, models.CourseEnrollment{
					ContactID: order.ContactID,
					CourseID:  course.ID,
				}).Error; err != nil {
					log.Printf("[fulfillment] Failed to enroll contact %d in course %d: %v", order.ContactID, course.ID, err)
				} else {
					log.Printf("[fulfillment] Contact %d enrolled in course %d", order.ContactID, course.ID)
				}
			}

		case models.ProductTypeDigital:
			// Grant access to the digital product
			access := models.ContactProduct{
				TenantID:  1,
				ContactID: order.ContactID,
				ProductID: product.ID,
				OrderID:   order.ID,
				Status:    "active",
			}
			if err := db.FirstOrCreate(&access, models.ContactProduct{
				ContactID: order.ContactID,
				ProductID: product.ID,
			}).Error; err != nil {
				log.Printf("[fulfillment] Failed to grant digital access to contact %d for product %d: %v", order.ContactID, product.ID, err)
			} else {
				log.Printf("[fulfillment] Contact %d granted access to digital product %d", order.ContactID, product.ID)
			}

		case models.ProductTypeMembership:
			// Grant or extend membership access
			now := time.Now()
			var expiresAt *time.Time

			// Check if product has a duration defined (e.g. 30 days, 365 days)
			if product.MembershipDays > 0 {
				exp := now.AddDate(0, 0, product.MembershipDays)
				expiresAt = &exp
			}

			var existing models.ContactProduct
			err := db.Where("contact_id = ? AND product_id = ?", order.ContactID, product.ID).First(&existing).Error
			if err == gorm.ErrRecordNotFound {
				// New membership
				membership := models.ContactProduct{
					TenantID:   1,
					ContactID:  order.ContactID,
					ProductID:  product.ID,
					OrderID:    order.ID,
					Status:     "active",
					StartedAt:  &now,
					ExpiresAt:  expiresAt,
				}
				if err := db.Create(&membership).Error; err != nil {
					log.Printf("[fulfillment] Failed to create membership for contact %d, product %d: %v", order.ContactID, product.ID, err)
				} else {
					log.Printf("[fulfillment] Contact %d granted membership product %d", order.ContactID, product.ID)
				}
			} else if err == nil {
				// Extend existing membership
				updates := map[string]interface{}{"status": "active", "order_id": order.ID}
				if expiresAt != nil {
					// If already has an expiry in the future, extend from that; otherwise extend from now
					base := now
					if existing.ExpiresAt != nil && existing.ExpiresAt.After(now) {
						base = *existing.ExpiresAt
					}
					exp := base.AddDate(0, 0, product.MembershipDays)
					updates["expires_at"] = exp
				}
				if err := db.Model(&existing).Updates(updates).Error; err != nil {
					log.Printf("[fulfillment] Failed to extend membership for contact %d, product %d: %v", order.ContactID, product.ID, err)
				} else {
					log.Printf("[fulfillment] Contact %d membership extended for product %d", order.ContactID, product.ID)
				}
			}

		case models.ProductTypeService:
			// Record that the contact purchased this service
			access := models.ContactProduct{
				TenantID:  1,
				ContactID: order.ContactID,
				ProductID: product.ID,
				OrderID:   order.ID,
				Status:    "active",
			}
			if err := db.FirstOrCreate(&access, models.ContactProduct{
				ContactID: order.ContactID,
				ProductID: product.ID,
			}).Error; err != nil {
				log.Printf("[fulfillment] Failed to record service purchase for contact %d, product %d: %v", order.ContactID, product.ID, err)
			} else {
				log.Printf("[fulfillment] Contact %d service purchase recorded for product %d", order.ContactID, product.ID)
			}

		case models.ProductTypePhysical:
			// Physical products require shipping — just log for now.
			// You can extend this to trigger a fulfillment/shipping workflow.
			log.Printf("[fulfillment] Physical product %d (order %d) — shipping fulfillment required for contact %d", product.ID, order.ID, order.ContactID)

		default:
			log.Printf("[fulfillment] Unknown product type '%s' for product %d, skipping", product.Type, product.ID)
		}
	}

	events.Emit(events.PurchaseCompleted, map[string]interface{}{
		"order_id":   order.ID,
		"contact_id": order.ContactID,
		"total":      order.Total,
	})

	log.Printf("[fulfillment] Order %d fulfilled (contact=%d, total=%.2f)", order.ID, order.ContactID, order.Total)
}