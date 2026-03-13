package services

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"gritcms/apps/api/internal/config"
)

type MPesaService struct {
	cfg *config.Config
}

func NewMPesaService(cfg *config.Config) *MPesaService {
	return &MPesaService{cfg: cfg}
}

func (s *MPesaService) getBaseURL() string {
	if s.cfg.MPesaEnvironment == "production" {
		return "https://api.safaricom.co.ke"
	}
	return "https://sandbox.safaricom.co.ke"
}

// GenerateAccessToken generates an OAuth token from Daraja API
func (s *MPesaService) GenerateAccessToken() (string, error) {
	if s.cfg.MPesaConsumerKey == "" || s.cfg.MPesaConsumerSecret == "" {
		return "", fmt.Errorf("M-Pesa credentials not configured")
	}

	baseURL := s.getBaseURL()
	reqURL := baseURL + "/oauth/v1/generate?grant_type=client_credentials"
	req, err := http.NewRequest("GET", reqURL, nil)
	if err != nil {
		return "", err
	}

	auth := base64.StdEncoding.EncodeToString([]byte(s.cfg.MPesaConsumerKey + ":" + s.cfg.MPesaConsumerSecret))
	req.Header.Add("Authorization", "Basic "+auth)

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return "", fmt.Errorf("M-Pesa auth failed: %s %s", resp.Status, string(body))
	}

	var result struct {
		AccessToken string `json:"access_token"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return "", err
	}

	return result.AccessToken, nil
}

func generatePassword(shortcode, passkey string, timestamp string) string {
	str := shortcode + passkey + timestamp
	return base64.StdEncoding.EncodeToString([]byte(str))
}

// STKPush initiates a Lipa Na M-Pesa Online prompt
func (s *MPesaService) STKPush(phoneNumber string, amount float64, accountReference string, transactionDesc string, callbackURL string) (string, error) {
	token, err := s.GenerateAccessToken()
	if err != nil {
		return "", err
	}

	timestamp := time.Now().Format("20060102150405")
	password := generatePassword(s.cfg.MPesaShortcode, s.cfg.MPesaPasskey, timestamp)

	// Clean up phone number: Make sure it starts with 254
	if phoneNumber[0] == '+' {
		phoneNumber = phoneNumber[1:]
	}
	if phoneNumber[0] == '0' {
		phoneNumber = "254" + phoneNumber[1:]
	}

	payload := map[string]interface{}{
		"BusinessShortCode": s.cfg.MPesaShortcode,
		"Password":          password,
		"Timestamp":         timestamp,
		"TransactionType":   "CustomerPayBillOnline", // Or "CustomerBuyGoodsOnline"
		"Amount":            int(amount),             // M-Pesa expects integer amount in KES usually, so cast to int
		"PartyA":            phoneNumber,
		"PartyB":            s.cfg.MPesaShortcode,
		"PhoneNumber":       phoneNumber,
		"CallBackURL":       callbackURL,
		"AccountReference":  accountReference,
		"TransactionDesc":   transactionDesc,
	}

	payloadBytes, _ := json.Marshal(payload)
	baseURL := s.getBaseURL()
	reqURL := baseURL + "/mpesa/stkpush/v1/processrequest"
	
	req, err := http.NewRequest("POST", reqURL, bytes.NewReader(payloadBytes))
	if err != nil {
		return "", err
	}

	req.Header.Add("Authorization", "Bearer "+token)
	req.Header.Add("Content-Type", "application/json")

	client := &http.Client{Timeout: 15 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("M-Pesa STK Push failed: %s %s", resp.Status, string(body))
	}

	var result struct {
		CheckoutRequestID string `json:"CheckoutRequestID"`
		ResponseCode      string `json:"ResponseCode"`
		CustomerMessage   string `json:"CustomerMessage"`
	}
	if err := json.Unmarshal(body, &result); err != nil {
		return "", err
	}

	if result.ResponseCode != "0" {
		return "", fmt.Errorf("STK Push error: %s", result.CustomerMessage)
	}

	return result.CheckoutRequestID, nil
}
