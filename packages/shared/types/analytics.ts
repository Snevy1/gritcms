import type { Contact, ContactActivity } from "./contact";
import type { Order } from "./commerce";

export interface AnalyticsDashboard {
  total_contacts: number;
  new_contacts_30d: number;
  total_subscribers: number;
  total_revenue: number;
  monthly_revenue: number;
  total_orders: number;
  mrr: number;
  active_students: number;
  completed_courses: number;
  total_emails_sent: number;
  total_campaigns: number;
  recent_contacts: Contact[];
  recent_orders: Order[];
}

export interface RevenueDataPoint {
  date: string;
  revenue: number;
  orders: number;
}

export interface SubscriberGrowthPoint {
  date: string;
  new_subscribers: number;
  new_contacts: number;
}

export interface ProductStat {
  product_id: number;
  name: string;
  sales: number;
  revenue: number;
}

export interface ProfileSubscription {
  id: number;
  contact_id: number;
  email_list_id: number;
  list_id: number;
  status: string;
  source: string;
  subscribed_at: string | null;
  unsubscribed_at: string | null;
  list?: { id: number; name: string };
}

export interface ProfileEnrollment {
  id: number;
  contact_id: number;
  course_id: number;
  status: string;
  enrolled_at: string;
  completed_at: string | null;
  progress_percentage: number;
  course?: { id: number; title: string; thumbnail: string };
}

export interface ProfileCertificate {
  id: number;
  enrollment_id: number;
  certificate_number: string;
  issued_at: string;
  course?: { id: number; title: string };
}

export interface ProfileActiveSubscription {
  id: number;
  contact_id: number;
  status: string;
  product?: { id: number; name: string };
  price?: { amount: number; currency: string; interval: string };
}

export interface ContactProfile {
  contact: Contact;
  subscriptions: ProfileSubscription[];
  enrollments: ProfileEnrollment[];
  orders: Order[];
  lifetime_value: number;
  active_subs: ProfileActiveSubscription[];
  certificates: ProfileCertificate[];
  activities: ContactActivity[];
}
