// Types
export type {
  SectionCategory,
  PropFieldType,
  PropField,
  SectionDefinition,
  PageSection,
  TemplateCategory,
  TemplateSectionRef,
  PageTemplate,
  CategoryInfo,
} from "./types";

export { SECTION_CATEGORIES, TEMPLATE_CATEGORIES } from "./types";

// Registry
export {
  registerSection,
  registerSections,
  registerTemplate,
  registerTemplates,
  getSection,
  getSectionsByCategory,
  searchSections,
  getAllSections,
  getTemplate,
  getTemplatesByCategory,
  getAllTemplates,
  getSectionCount,
  getTemplateCount,
} from "./registry";

// Renderer
export { SectionRenderer, PageRenderer } from "./renderer";

// Section registrations - import all categories to auto-register
import "./hero";
import "./features";
import "./cta";
import "./pricing";
import "./testimonials";
import "./faq";
import "./team";
import "./gallery";
import "./stats";
import "./contact";
import "./footer";
import "./header";
import "./blog";
import "./logos";
import "./newsletter";
import "./ecommerce";
import "./video";
import "./about";
import "./banner";
import "./divider";
import "./live";

// Template registrations
import "./templates";
