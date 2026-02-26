"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { X, ChevronLeft, Layers, Check } from "@/lib/icons";
import {
  getAllTemplates,
  getTemplatesByCategory,
  getSection,
  TEMPLATE_CATEGORIES,
  type PageTemplate,
  type TemplateSectionRef,
} from "@repo/shared/sections";

interface TemplateGalleryProps {
  open: boolean;
  onClose: () => void;
  onApply: (sections: TemplateSectionRef[]) => void;
}

export function TemplateGallery({
  open,
  onClose,
  onApply,
}: TemplateGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedTemplate, setSelectedTemplate] = useState<PageTemplate | null>(
    null
  );

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setActiveCategory("all");
      setSelectedTemplate(null);
    }
  }, [open]);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (selectedTemplate) {
          setSelectedTemplate(null);
        } else {
          onClose();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, selectedTemplate]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const filteredTemplates = useMemo(() => {
    if (activeCategory === "all") {
      return getAllTemplates();
    }
    return getTemplatesByCategory(activeCategory as PageTemplate["category"]);
  }, [activeCategory]);

  const handleApplyTemplate = useCallback(
    (template: PageTemplate) => {
      onApply(template.sections);
      onClose();
    },
    [onApply, onClose]
  );

  const handleStartBlank = useCallback(() => {
    onApply([]);
    onClose();
  }, [onApply, onClose]);

  // Resolve section names for the preview
  const resolvedSections = useMemo(() => {
    if (!selectedTemplate) return [];
    return selectedTemplate.sections.map((ref) => {
      const section = getSection(ref.sectionId);
      return {
        sectionId: ref.sectionId,
        name: section?.name ?? ref.sectionId,
        category: section?.category ?? "unknown",
        description: section?.description ?? "",
      };
    });
  }, [selectedTemplate]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 animate-in fade-in duration-200"
        onClick={() => {
          if (selectedTemplate) {
            setSelectedTemplate(null);
          } else {
            onClose();
          }
        }}
      />

      {/* Full-screen modal */}
      <div className="relative z-10 flex h-[90vh] w-[90vw] max-w-5xl flex-col rounded-2xl border border-border bg-bg-secondary shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            {selectedTemplate ? (
              <button
                type="button"
                onClick={() => setSelectedTemplate(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:bg-bg-hover hover:text-foreground transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            ) : (
              <Layers className="h-5 w-5 text-accent" />
            )}
            <h2 className="text-lg font-semibold text-foreground">
              {selectedTemplate ? selectedTemplate.name : "Choose a Template"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:bg-bg-hover hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {selectedTemplate ? (
          /* ── Template preview view ── */
          <>
            <div className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
              {/* Template meta */}
              <div className="mb-4">
                <p className="text-sm text-text-muted">
                  {selectedTemplate.description}
                </p>
                {selectedTemplate.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedTemplate.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-bg-hover px-2 py-0.5 text-[10px] font-medium text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Section list */}
              <div className="mb-2">
                <p className="text-xs font-medium text-text-muted">
                  Sections included ({resolvedSections.length})
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {resolvedSections.map((section, index) => (
                  <div
                    key={`${section.sectionId}-${index}`}
                    className="flex items-center gap-3 rounded-lg border border-border p-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/15 text-xs font-bold text-accent">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {section.name}
                      </p>
                      <p className="truncate text-xs text-text-muted">
                        {section.description}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-bg-hover px-2 py-0.5 text-[10px] font-medium text-text-muted">
                      {section.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview footer */}
            <div className="flex shrink-0 items-center justify-between border-t border-border px-6 py-3">
              <button
                type="button"
                onClick={() => setSelectedTemplate(null)}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-bg-hover hover:text-foreground"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => handleApplyTemplate(selectedTemplate)}
                className="flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
              >
                <Check className="h-4 w-4" />
                Use Template
              </button>
            </div>
          </>
        ) : (
          /* ── Gallery grid view ── */
          <>
            {/* Start Blank option */}
            <div className="shrink-0 border-b border-border px-6 py-3">
              <button
                type="button"
                onClick={handleStartBlank}
                className="flex w-full items-center gap-3 rounded-lg border border-dashed border-border p-3 text-left transition-colors hover:border-accent hover:bg-accent/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-hover">
                  <Layers className="h-5 w-5 text-text-muted" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Start Blank
                  </p>
                  <p className="text-xs text-text-muted">
                    Begin with an empty page and add sections manually
                  </p>
                </div>
              </button>
            </div>

            {/* Category tabs */}
            <div className="shrink-0 border-b border-border px-6 py-2">
              <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeCategory === "all"
                      ? "bg-accent text-white"
                      : "text-text-muted hover:bg-bg-hover hover:text-foreground"
                  }`}
                >
                  All
                </button>
                {TEMPLATE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeCategory === cat.id
                        ? "bg-accent text-white"
                        : "text-text-muted hover:bg-bg-hover hover:text-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Template grid */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {filteredTemplates.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <Layers className="mb-3 h-10 w-10 text-text-muted/50" />
                  <p className="text-sm font-medium text-foreground">
                    No templates found
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    No templates available in this category yet
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredTemplates.map((template) => (
                    <button
                      key={template.id}
                      type="button"
                      onClick={() => setSelectedTemplate(template)}
                      className="group flex flex-col items-start rounded-xl border border-border p-4 text-left transition-all hover:border-accent hover:shadow-md"
                    >
                      {/* Name */}
                      <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                        {template.name}
                      </span>

                      {/* Description */}
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-muted">
                        {template.description}
                      </p>

                      {/* Section count */}
                      <div className="mt-3 flex items-center gap-1.5">
                        <Layers className="h-3 w-3 text-text-muted" />
                        <span className="text-[11px] font-medium text-text-muted">
                          {template.sections.length} section
                          {template.sections.length !== 1 ? "s" : ""}
                        </span>
                      </div>

                      {/* Tags */}
                      {template.tags.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {template.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-bg-hover px-1.5 py-0.5 text-[10px] font-medium text-text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer count */}
            <div className="shrink-0 border-t border-border px-6 py-2.5">
              <p className="text-xs text-text-muted">
                {filteredTemplates.length} template
                {filteredTemplates.length !== 1 ? "s" : ""} available
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
