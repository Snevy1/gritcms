package services

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	"gorm.io/datatypes"
	"gorm.io/gorm"

	"gritcms/apps/api/internal/events"
	"gritcms/apps/api/internal/models"
)

// RegisterActivityListeners wires up event listeners that create ContactActivity
// records whenever key actions happen across modules.
func RegisterActivityListeners(db *gorm.DB) {
	bus := events.Default()

	// --- Contact events ---
	bus.On(events.ContactCreated, func(data interface{}) {
		contact, ok := data.(models.Contact)
		if !ok {
			return
		}
		logActivity(db, contact.ID, contact.TenantID, "contacts", "created", "Contact created", nil)
	})

	bus.On(events.ContactTagged, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			return
		}
		contactID, _ := m["contact_id"].(uint)
		tagName, _ := m["tag_name"].(string)
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "contacts", "tagged", fmt.Sprintf("Tagged with \"%s\"", tagName), m)
	})

	// --- Email events ---
	bus.On(events.EmailSubscribed, func(data interface{}) {
		sub, ok := data.(models.EmailSubscription)
		if !ok {
			return
		}
		var list models.EmailList
		db.First(&list, sub.EmailListID)
		logActivity(db, sub.ContactID, sub.TenantID, "email", "subscribed",
			fmt.Sprintf("Subscribed to \"%s\"", list.Name),
			map[string]interface{}{"list_id": sub.EmailListID, "list_name": list.Name})
	})

	bus.On(events.EmailUnsubscribed, func(data interface{}) {
		sub, ok := data.(models.EmailSubscription)
		if !ok {
			return
		}
		var list models.EmailList
		db.First(&list, sub.EmailListID)
		logActivity(db, sub.ContactID, sub.TenantID, "email", "unsubscribed",
			fmt.Sprintf("Unsubscribed from \"%s\"", list.Name),
			map[string]interface{}{"list_id": sub.EmailListID, "list_name": list.Name})
	})

	bus.On(events.EmailOpened, func(data interface{}) {
		send, ok := data.(models.EmailSend)
		if !ok {
			return
		}
		if send.ContactID == 0 {
			return
		}
		logActivity(db, send.ContactID, send.TenantID, "email", "opened",
			"Opened an email", map[string]interface{}{"send_id": send.ID, "campaign_id": send.CampaignID})
	})

	bus.On(events.EmailClicked, func(data interface{}) {
		send, ok := data.(models.EmailSend)
		if !ok {
			return
		}
		if send.ContactID == 0 {
			return
		}
		logActivity(db, send.ContactID, send.TenantID, "email", "clicked",
			"Clicked a link in email", map[string]interface{}{"send_id": send.ID, "campaign_id": send.CampaignID})
	})

	bus.On(events.EmailSequenceEnrolled, func(data interface{}) {
		enrollment, ok := data.(models.EmailSequenceEnrollment)
		if !ok {
			return
		}
		var seq models.EmailSequence
		db.First(&seq, enrollment.SequenceID)
		logActivity(db, enrollment.ContactID, enrollment.TenantID, "email", "sequence_enrolled",
			fmt.Sprintf("Enrolled in sequence \"%s\"", seq.Name),
			map[string]interface{}{"sequence_id": enrollment.SequenceID, "sequence_name": seq.Name})
	})

	// --- Course events ---
	bus.On(events.CourseEnrolled, func(data interface{}) {
		enrollment, ok := data.(models.CourseEnrollment)
		if !ok {
			return
		}
		var course models.Course
		db.First(&course, enrollment.CourseID)
		logActivity(db, enrollment.ContactID, enrollment.TenantID, "courses", "enrolled",
			fmt.Sprintf("Enrolled in \"%s\"", course.Title),
			map[string]interface{}{"course_id": enrollment.CourseID, "course_title": course.Title})
	})

	bus.On(events.CourseLessonCompleted, func(data interface{}) {
		progress, ok := data.(models.LessonProgress)
		if !ok {
			return
		}
		var lesson models.Lesson
		db.First(&lesson, progress.LessonID)
		// Find the enrollment to get contact_id
		var enrollment models.CourseEnrollment
		if err := db.Where("id = ?", progress.EnrollmentID).First(&enrollment).Error; err != nil {
			return
		}
		logActivity(db, enrollment.ContactID, enrollment.TenantID, "courses", "lesson_completed",
			fmt.Sprintf("Completed lesson \"%s\"", lesson.Title),
			map[string]interface{}{"lesson_id": progress.LessonID, "lesson_title": lesson.Title})
	})

	bus.On(events.CourseCompleted, func(data interface{}) {
		enrollment, ok := data.(models.CourseEnrollment)
		if !ok {
			return
		}
		var course models.Course
		db.First(&course, enrollment.CourseID)
		logActivity(db, enrollment.ContactID, enrollment.TenantID, "courses", "completed",
			fmt.Sprintf("Completed course \"%s\"", course.Title),
			map[string]interface{}{"course_id": enrollment.CourseID, "course_title": course.Title})
	})

	// --- Commerce events ---
	bus.On(events.PurchaseCompleted, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			return
		}
		contactID := toUint(m["contact_id"])
		orderID := toUint(m["order_id"])
		total, _ := m["total"].(float64)
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "commerce", "purchased",
			fmt.Sprintf("Completed purchase #%d ($%.2f)", orderID, total), m)
	})

	bus.On(events.PurchaseRefunded, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			return
		}
		contactID := toUint(m["contact_id"])
		orderID := toUint(m["order_id"])
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "commerce", "refunded",
			fmt.Sprintf("Refunded order #%d", orderID), m)
	})

	bus.On(events.SubscriptionCancelled, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			return
		}
		contactID := toUint(m["contact_id"])
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "commerce", "subscription_cancelled",
			"Cancelled subscription", m)
	})

	// --- Community events ---
	bus.On(events.CommunityMemberJoined, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			// Try direct model
			member, mok := data.(models.CommunityMember)
			if !mok {
				return
			}
			var space models.Space
			db.First(&space, member.SpaceID)
			logActivity(db, member.ContactID, member.TenantID, "community", "joined",
				fmt.Sprintf("Joined community \"%s\"", space.Name),
				map[string]interface{}{"space_id": member.SpaceID, "space_name": space.Name})
			return
		}
		contactID := toUint(m["contact_id"])
		spaceName, _ := m["space_name"].(string)
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "community", "joined",
			fmt.Sprintf("Joined community \"%s\"", spaceName), m)
	})

	// --- Booking events ---
	bus.On(events.BookingConfirmed, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			return
		}
		contactID := toUint(m["contact_id"])
		eventType, _ := m["event_type"].(string)
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "booking", "confirmed",
			fmt.Sprintf("Booked \"%s\"", eventType), m)
	})

	bus.On(events.BookingCancelled, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			return
		}
		contactID := toUint(m["contact_id"])
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "booking", "cancelled", "Cancelled booking", m)
	})

	bus.On(events.BookingRescheduled, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			return
		}
		contactID := toUint(m["contact_id"])
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "booking", "rescheduled", "Rescheduled booking", m)
	})

	// --- Funnel events ---
	bus.On(events.FunnelConverted, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			return
		}
		contactID := toUint(m["contact_id"])
		funnelName, _ := m["funnel_name"].(string)
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "funnels", "converted",
			fmt.Sprintf("Converted on funnel \"%s\"", funnelName), m)
	})

	// --- Affiliate events ---
	bus.On(events.AffiliateReferral, func(data interface{}) {
		m, ok := data.(map[string]interface{})
		if !ok {
			return
		}
		contactID := toUint(m["contact_id"])
		if contactID == 0 {
			return
		}
		logActivity(db, contactID, 1, "affiliates", "referral", "Referred a new visitor", m)
	})

	log.Println("[activity] Registered contact activity listeners")
}

// logActivity creates a ContactActivity record and updates the contact's LastActivityAt.
func logActivity(db *gorm.DB, contactID, tenantID uint, module, action, details string, metadata interface{}) {
	var metaJSON datatypes.JSON
	if metadata != nil {
		if b, err := json.Marshal(metadata); err == nil {
			metaJSON = datatypes.JSON(b)
		}
	}

	activity := models.ContactActivity{
		TenantID:  tenantID,
		ContactID: contactID,
		Module:    module,
		Action:    action,
		Details:   details,
		Metadata:  metaJSON,
	}

	if err := db.Create(&activity).Error; err != nil {
		log.Printf("[activity] Failed to log activity for contact %d: %v", contactID, err)
		return
	}

	// Update contact's LastActivityAt
	now := time.Now()
	db.Model(&models.Contact{}).Where("id = ?", contactID).Update("last_activity_at", now)
}

// toUint safely converts interface{} to uint.
func toUint(v interface{}) uint {
	switch val := v.(type) {
	case uint:
		return val
	case uint64:
		return uint(val)
	case int:
		return uint(val)
	case int64:
		return uint(val)
	case float64:
		return uint(val)
	default:
		return 0
	}
}
