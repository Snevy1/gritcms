import type { SectionDefinition, SectionCategory, PageTemplate, TemplateCategory } from "./types";

const sectionMap = new Map<string, SectionDefinition>();
const templateMap = new Map<string, PageTemplate>();

export function registerSection(def: SectionDefinition) {
  sectionMap.set(def.id, def);
}

export function registerSections(defs: SectionDefinition[]) {
  for (const def of defs) {
    sectionMap.set(def.id, def);
  }
}

export function registerTemplate(tpl: PageTemplate) {
  templateMap.set(tpl.id, tpl);
}

export function registerTemplates(tpls: PageTemplate[]) {
  for (const tpl of tpls) {
    templateMap.set(tpl.id, tpl);
  }
}

export function getSection(id: string): SectionDefinition | undefined {
  return sectionMap.get(id);
}

export function getSectionsByCategory(category: SectionCategory): SectionDefinition[] {
  return Array.from(sectionMap.values()).filter((s) => s.category === category);
}

export function searchSections(query: string): SectionDefinition[] {
  const q = query.toLowerCase();
  return Array.from(sectionMap.values()).filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function getAllSections(): SectionDefinition[] {
  return Array.from(sectionMap.values());
}

export function getTemplate(id: string): PageTemplate | undefined {
  return templateMap.get(id);
}

export function getTemplatesByCategory(category: TemplateCategory): PageTemplate[] {
  return Array.from(templateMap.values()).filter((t) => t.category === category);
}

export function getAllTemplates(): PageTemplate[] {
  return Array.from(templateMap.values());
}

export function getSectionCount(): number {
  return sectionMap.size;
}

export function getTemplateCount(): number {
  return templateMap.size;
}
