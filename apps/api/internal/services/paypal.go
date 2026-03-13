package services

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"gritcms/apps/api/internal/config"
)

// PayPalOrder represents a structured Create Order request response.
type PayPalOrder struct {
	ID            string `json:"id"`
	Status        string `json:"status"`
	Intent        string `json:"intent"`
	Links         []Link `json:"links"`
}

type Link struct {
	Href   string `json:"href"`
	Rel    string `json:"rel"`
	Method string `json:"method"`
}

type PayPalService struct {
	cfg *config.Config
}

func NewPayPalService(cfg *config.Config) *PayPalService {
	return &PayPalService{cfg: cfg}
}

// GenerateAccessToken generates the OAuth2 access token
func (s *PayPalService) GenerateAccessToken() (string, error) {
	if s.cfg.PayPalClientID == "" || s.cfg.PayPalSecret == "" {
		return "", fmt.Errorf("PayPal credentials not configured")
	}

	baseURL := "https://api-m.sandbox.paypal.com"
	if s.cfg.PayPalMode == "live" {
		baseURL = "https://api-m.paypal.com"
	}

	req, err := http.NewRequest("POST", baseURL+"/v1/oauth2/token", strings.NewReader("grant_type=client_credentials"))
	if err != nil {
		return "", err
	}

	auth := base64.StdEncoding.EncodeToString([]byte(s.cfg.PayPalClientID + ":" + s.cfg.PayPalSecret))
	req.Header.Add("Authorization", "Basic "+auth)
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return "", fmt.Errorf("PayPal auth failed: %s %s", resp.Status, string(body))
	}

	var result struct {
		AccessToken string `json:"access_token"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return "", err
	}

	return result.AccessToken, nil
}

// CreateOrder creates an order and returns the approval link and ID
func (s *PayPalService) CreateOrder(productName string, amount float64, currency string, orderID string) (*PayPalOrder, error) {
	token, err := s.GenerateAccessToken()
	if err != nil {
		return nil, err
	}

	baseURL := "https://api-m.sandbox.paypal.com"
	if s.cfg.PayPalMode == "live" {
		baseURL = "https://api-m.paypal.com"
	}

	payload := map[string]interface{}{
		"intent": "CAPTURE",
		"purchase_units": []map[string]interface{}{
			{
				"reference_id": orderID,
				"description":  productName,
				"amount": map[string]interface{}{
					"currency_code": strings.ToUpper(currency),
					"value":         fmt.Sprintf("%.2f", amount),
				},
			},
		},
	}

	payloadBytes, _ := json.Marshal(payload)
	req, err := http.NewRequest("POST", baseURL+"/v2/checkout/orders", bytes.NewReader(payloadBytes))
	if err != nil {
		return nil, err
	}

	req.Header.Add("Authorization", "Bearer "+token)
	req.Header.Add("Content-Type", "application/json")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusCreated && resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("PayPal create order failed: %s %s", resp.Status, string(body))
	}

	var order PayPalOrder
	if err := json.NewDecoder(resp.Body).Decode(&order); err != nil {
		return nil, err
	}

	return &order, nil
}

// CaptureOrder captures a previously approved order
func (s *PayPalService) CaptureOrder(paypalOrderID string) error {
	token, err := s.GenerateAccessToken()
	if err != nil {
		return err
	}

	baseURL := "https://api-m.sandbox.paypal.com"
	if s.cfg.PayPalMode == "live" {
		baseURL = "https://api-m.paypal.com"
	}

	req, err := http.NewRequest("POST", baseURL+"/v2/checkout/orders/"+paypalOrderID+"/capture", nil)
	if err != nil {
		return err
	}

	req.Header.Add("Authorization", "Bearer "+token)
	req.Header.Add("Content-Type", "application/json")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusCreated && resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		// For idempotency, if already captured, paypal might return an error or different status
		// "ORDER_ALREADY_CAPTURED"
		if strings.Contains(string(body), "ORDER_ALREADY_CAPTURED") {
			return nil
		}
		return fmt.Errorf("PayPal capture order failed: %s %s", resp.Status, string(body))
	}

	return nil
}
