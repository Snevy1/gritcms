
package handlers

import (
	"crypto/rand"
	"encoding/json"
	"fmt"
	"math"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"gritcms/apps/api/internal/events"
	"gritcms/apps/api/internal/models"
)


func (h *StudentHandler) GetPurchases(c *gin.Context) {
    user, _ := c.Get("user")
    u := user.(models.User)

    var contact models.Contact
    if err := h.db.Where("email = ? AND tenant_id = ?", u.Email, 1).First(&contact).Error; err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Contact not found"})
        return
    }

    var orders []models.Order
    h.db.Where("contact_id = ? AND status = ?", contact.ID, models.OrderStatusPaid).
        Preload("Items").
        Find(&orders)

    c.JSON(http.StatusOK, gin.H{"data": orders})
}