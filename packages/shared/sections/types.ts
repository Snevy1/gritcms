// Section type system for GritCMS Page Builder

export type SectionCategory =
  | "hero"
  | "features"
  | "cta"
  | "pricing"
  | "testimonials"
  | "faq"
  | "team"
  | "gallery"
  | "stats"
  | "contact"
  | "footer"
  | "header"
  | "blog"
  | "logos"
  | "newsletter"
  | "ecommerce"
  | "video"
  | "about"
  | "banner"
  | "divider"
  | "live";

export type PropFieldType =
  | "text"
  | "textarea"
  | "richtext"
  | "image"
  | "images"
  | "color"
  | "select"
  | "toggle"
  | "url"
  | "number"
  | "items";

export interface PropField {
  key: string;
  label: string;
  type: PropFieldType;
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
  /** For "items" type: define the shape of each item */
  itemFields?: PropField[];
}

export interface SectionDefinition {
  id: string;
  category: SectionCategory;
  name: string;
  description: string;
  tags: string[];
  defaultProps: Record<string, unknown>;
  propsSchema: PropField[];
  component: React.FC<Record<string, unknown>>;
}

/** A section instance as stored in a page's content */
export interface PageSection {
  id: string;
  sectionId: string;
  props: Record<string, unknown>;
  customClasses?: string;
}

export type TemplateCategory =
  | "creator"
  | "content-creator"
  | "coach"
  | "course-creator"
  | "author"
  | "musician"
  | "saas"
  | "agency"
  | "business"
  | "portfolio"
  | "landing"
  | "ecommerce"
  | "blog"
  | "personal"
  | "restaurant"
  | "realestate"
  | "health"
  | "education"
  | "event";

export interface TemplateSectionRef {
  sectionId: string;
  props?: Record<string, unknown>;
}

export interface PageTemplate {
  id: string;
  category: TemplateCategory;
  name: string;
  description: string;
  tags: string[];
  sections: TemplateSectionRef[];
}

export interface CategoryInfo {
  id: SectionCategory;
  label: string;
  description: string;
}

export const SECTION_CATEGORIES: CategoryInfo[] = [
  { id: "hero", label: "Hero", description: "Hero sections with headlines and CTAs" },
  { id: "features", label: "Features", description: "Showcase features and services" },
  { id: "cta", label: "Call to Action", description: "Drive user action" },
  { id: "pricing", label: "Pricing", description: "Pricing tables and plans" },
  { id: "testimonials", label: "Testimonials", description: "Customer reviews and quotes" },
  { id: "faq", label: "FAQ", description: "Frequently asked questions" },
  { id: "team", label: "Team", description: "Team member profiles" },
  { id: "gallery", label: "Gallery", description: "Image galleries and portfolios" },
  { id: "stats", label: "Stats", description: "Numbers and statistics" },
  { id: "contact", label: "Contact", description: "Contact forms and info" },
  { id: "footer", label: "Footer", description: "Page footers" },
  { id: "header", label: "Header", description: "Navigation headers" },
  { id: "blog", label: "Blog", description: "Blog post layouts" },
  { id: "logos", label: "Logos", description: "Client and partner logos" },
  { id: "newsletter", label: "Newsletter", description: "Email signup forms" },
  { id: "ecommerce", label: "E-commerce", description: "Product displays" },
  { id: "video", label: "Video", description: "Video showcases" },
  { id: "about", label: "About", description: "About and story sections" },
  { id: "banner", label: "Banner", description: "Announcement banners" },
  { id: "divider", label: "Divider", description: "Visual section dividers" },
  { id: "live", label: "Live Data", description: "Dynamic sections that display real data from your dashboard" },
];

export const TEMPLATE_CATEGORIES: { id: TemplateCategory; label: string }[] = [
  { id: "creator", label: "Creator" },
  { id: "content-creator", label: "Content Creator" },
  { id: "coach", label: "Coach & Consultant" },
  { id: "course-creator", label: "Course Creator" },
  { id: "author", label: "Author & Writer" },
  { id: "musician", label: "Musician & Artist" },
  { id: "saas", label: "SaaS / Tech" },
  { id: "agency", label: "Agency" },
  { id: "business", label: "Business" },
  { id: "portfolio", label: "Portfolio" },
  { id: "landing", label: "Landing Page" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "blog", label: "Blog" },
  { id: "personal", label: "Personal" },
  { id: "restaurant", label: "Restaurant" },
  { id: "realestate", label: "Real Estate" },
  { id: "health", label: "Health" },
  { id: "education", label: "Education" },
  { id: "event", label: "Event" },
];
