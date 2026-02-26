"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { Search, X } from "@/lib/icons";
import {
  getAllSections,
  getSectionsByCategory,
  searchSections,
  SECTION_CATEGORIES,
  type SectionDefinition,
  type SectionCategory,
} from "@repo/shared/sections";

interface SectionPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (sectionId: string) => void;
}

const CATEGORY_COLORS: Record<SectionCategory, string> = {
  hero: "bg-blue-500/15 text-blue-400",
  features: "bg-purple-500/15 text-purple-400",
  cta: "bg-orange-500/15 text-orange-400",
  pricing: "bg-green-500/15 text-green-400",
  testimonials: "bg-pink-500/15 text-pink-400",
  faq: "bg-yellow-500/15 text-yellow-400",
  team: "bg-indigo-500/15 text-indigo-400",
  gallery: "bg-rose-500/15 text-rose-400",
  stats: "bg-cyan-500/15 text-cyan-400",
  contact: "bg-teal-500/15 text-teal-400",
  footer: "bg-slate-500/15 text-slate-400",
  header: "bg-sky-500/15 text-sky-400",
  blog: "bg-amber-500/15 text-amber-400",
  logos: "bg-violet-500/15 text-violet-400",
  newsletter: "bg-emerald-500/15 text-emerald-400",
  ecommerce: "bg-lime-500/15 text-lime-400",
  video: "bg-red-500/15 text-red-400",
  about: "bg-fuchsia-500/15 text-fuchsia-400",
  banner: "bg-orange-500/15 text-orange-400",
  divider: "bg-neutral-500/15 text-neutral-400",
  live: "bg-emerald-500/15 text-emerald-400",
};

export function SectionPicker({ open, onClose, onSelect }: SectionPickerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<SectionCategory | "all">("all");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setSearchQuery("");
      setActiveCategory("all");
      // Focus search input after animation
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Close on escape key
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

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

  const filteredSections = useMemo(() => {
    let sections: SectionDefinition[];

    if (searchQuery.trim()) {
      sections = searchSections(searchQuery.trim());
      // If a category is also active, further filter
      if (activeCategory !== "all") {
        sections = sections.filter((s) => s.category === activeCategory);
      }
    } else if (activeCategory === "all") {
      sections = getAllSections();
    } else {
      sections = getSectionsByCategory(activeCategory);
    }

    return sections;
  }, [searchQuery, activeCategory]);

  const handleSelect = useCallback(
    (sectionId: string) => {
      onSelect(sectionId);
      onClose();
    },
    [onSelect, onClose]
  );

  const getCategoryLabel = useCallback((category: SectionCategory): string => {
    const cat = SECTION_CATEGORIES.find((c) => c.id === category);
    return cat?.label ?? category;
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Bottom sheet panel */}
      <div className="relative z-10 flex w-full max-h-[80vh] flex-col rounded-t-2xl border border-b-0 border-border bg-bg-secondary shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold text-foreground">Add Section</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:bg-bg-hover hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search */}
        <div className="shrink-0 border-b border-border px-6 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sections by name, description, or tags..."
              className="w-full rounded-lg border border-border bg-bg-secondary py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="shrink-0 border-b border-border px-6 py-2">
          <div
            ref={tabsRef}
            className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1"
          >
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
            {SECTION_CATEGORIES.map((cat) => (
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

        {/* Section grid */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {filteredSections.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Search className="mb-3 h-10 w-10 text-text-muted/50" />
              <p className="text-sm font-medium text-foreground">No sections found</p>
              <p className="mt-1 text-xs text-text-muted">
                {searchQuery
                  ? "Try a different search term or clear filters"
                  : "No sections available in this category"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSelect(section.id)}
                  className="group flex flex-col items-start rounded-xl border border-border p-4 text-left transition-all hover:border-accent hover:shadow-md"
                >
                  {/* Name + category badge */}
                  <div className="flex w-full items-start justify-between gap-2">
                    <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                      {section.name}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        CATEGORY_COLORS[section.category] ?? "bg-neutral-500/15 text-neutral-400"
                      }`}
                    >
                      {getCategoryLabel(section.category)}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-muted">
                    {section.description}
                  </p>

                  {/* Tags */}
                  {section.tags.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {section.tags.map((tag) => (
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
            {filteredSections.length} section{filteredSections.length !== 1 ? "s" : ""} available
          </p>
        </div>
      </div>
    </div>
  );
}
