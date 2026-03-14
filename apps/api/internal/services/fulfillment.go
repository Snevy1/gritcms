package services

import (
	"log"
	"time"

	"gorm.io/gorm"

	"gritcms/apps/api/internal/events"
	"gritcms/apps/api/internal/models"
)

// FulfillOrder handles post-payment fulfillment for a paid order:
// - auto-enrolls contacts in courses linked to purchased products
// - grants access to digital products
// - grants membership access
// - records service purchases
// - emits PurchaseCompleted event
func FulfillOrder(db *gorm.DB, order *models.Order) {
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