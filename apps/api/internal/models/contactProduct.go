package models

import (
	"time"

	"gorm.io/gorm"
)

// --- Contact Products ---

const (
	ContactProductStatusActive    = "active"
	ContactProductStatusExpired   = "expired"
	ContactProductStatusSuspended = "suspended"
	ContactProductStatusRevoked   = "revoked"
)

// ContactProduct tracks a contact's access to a purchased product
// (digital downloads, memberships, services, etc.)
// For course products, use CourseEnrollment instead.
type ContactProduct struct {
	ID        uint           `gorm:"primarykey" json:"id"`
	TenantID  uint           `gorm:"index;not null;default:1" json:"tenant_id"`
	ContactID uint           `gorm:"uniqueIndex:idx_contact_product;not null" json:"contact_id"`
	ProductID uint           `gorm:"uniqueIndex:idx_contact_product;not null" json:"product_id"`
	OrderID   uint           `gorm:"index;not null" json:"order_id"`
	Status    string         `gorm:"size:20;default:'active';index" json:"status"`
	Source    string         `gorm:"size:50;default:'purchase'" json:"source"` // purchase, manual, gift
	StartedAt *time.Time     `json:"started_at"`
	ExpiresAt *time.Time     `json:"expires_at"` // nil = lifetime access
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`

	Contact Contact `gorm:"foreignKey:ContactID" json:"contact,omitempty"`
	Product Product `gorm:"foreignKey:ProductID" json:"product,omitempty"`
	Order   Order   `gorm:"foreignKey:OrderID" json:"order,omitempty"`
}