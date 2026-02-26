"use client";

import { useState, useCallback, useMemo } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  SectionRenderer,
  getSection,
  type PageSection,
  type TemplateSectionRef,
} from "@repo/shared/sections";
import { GripVertical, Trash2, Plus, Layers, Zap } from "@/lib/icons";
import { SectionPicker } from "./section-picker";
import { SectionEditor } from "./section-editor";
import { AIPanel } from "./ai-panel";
import { TemplateGallery } from "./template-gallery";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function generateId(): string {
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

function getSectionLabel(sectionId: string): string {
  const def = getSection(sectionId);
  return def?.name ?? sectionId;
}

// ---------------------------------------------------------------------------
// SortableItem (left-panel section entry)
// ---------------------------------------------------------------------------

interface SortableItemProps {
  section: PageSection;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
}

function SortableItem({ section, isSelected, onSelect, onRemove }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group flex items-center gap-2 rounded-lg border px-2 py-2 text-sm transition-colors cursor-pointer ${
        isSelected
          ? "border-accent bg-accent/10 text-foreground"
          : "border-transparent hover:border-border hover:bg-bg-hover text-text-muted"
      }`}
      onClick={onSelect}
    >
      {/* Drag handle */}
      <button
        type="button"
        className="shrink-0 cursor-grab touch-none text-text-muted hover:text-foreground"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="h-4 w-4" />
      </button>

      {/* Section name */}
      <span className="flex-1 truncate font-medium">
        {getSectionLabel(section.sectionId)}
      </span>

      {/* Delete button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="shrink-0 rounded p-1 text-text-muted opacity-0 transition-opacity hover:bg-red-500/15 hover:text-red-400 group-hover:opacity-100"
        title="Remove section"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// PageBuilder (main component)
// ---------------------------------------------------------------------------

interface PageBuilderProps {
  sections: PageSection[];
  onChange: (sections: PageSection[]) => void;
}

export function PageBuilder({ sections, onChange }: PageBuilderProps) {
  // Selection state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Panel visibility
  const [pickerOpen, setPickerOpen] = useState(false);
  const [templateGalleryOpen, setTemplateGalleryOpen] = useState(false);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);

  // Derived: selected section
  const selectedSection = useMemo(
    () => (selectedIndex !== null ? sections[selectedIndex] ?? null : null),
    [sections, selectedIndex]
  );

  const selectedDef = useMemo(
    () => (selectedSection ? getSection(selectedSection.sectionId) : null),
    [selectedSection]
  );

  // Section IDs for sortable context
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  // ---------------------------------------------------------------------------
  // DnD sensors
  // ---------------------------------------------------------------------------

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 5 },
  });
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(pointerSensor, keyboardSensor);

  // ---------------------------------------------------------------------------
  // Handlers
  // ---------------------------------------------------------------------------

  /** Reorder after drag end */
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      if (oldIndex === -1 || newIndex === -1) return;

      const reordered = arrayMove(sections, oldIndex, newIndex);
      onChange(reordered);

      // Keep selection following the moved item
      if (selectedIndex === oldIndex) {
        setSelectedIndex(newIndex);
      } else if (selectedIndex !== null) {
        // Adjust selection if it shifted
        if (oldIndex < selectedIndex && newIndex >= selectedIndex) {
          setSelectedIndex(selectedIndex - 1);
        } else if (oldIndex > selectedIndex && newIndex <= selectedIndex) {
          setSelectedIndex(selectedIndex + 1);
        }
      }
    },
    [sections, onChange, selectedIndex]
  );

  /** Add a new section from the picker */
  const handleAddSection = useCallback(
    (sectionId: string) => {
      const def = getSection(sectionId);
      if (!def) return;

      const newSection: PageSection = {
        id: generateId(),
        sectionId,
        props: { ...def.defaultProps },
      };

      const updated = [...sections, newSection];
      onChange(updated);
      // Auto-select the newly added section
      setSelectedIndex(updated.length - 1);
    },
    [sections, onChange]
  );

  /** Remove a section by index */
  const handleRemoveSection = useCallback(
    (index: number) => {
      const updated = sections.filter((_, i) => i !== index);
      onChange(updated);

      // Adjust selection
      if (selectedIndex === index) {
        setSelectedIndex(null);
      } else if (selectedIndex !== null && selectedIndex > index) {
        setSelectedIndex(selectedIndex - 1);
      }
    },
    [sections, onChange, selectedIndex]
  );

  /** Update a section's props */
  const handlePropsChange = useCallback(
    (props: Record<string, unknown>) => {
      if (selectedIndex === null) return;
      const updated = sections.map((s, i) =>
        i === selectedIndex ? { ...s, props } : s
      );
      onChange(updated);
    },
    [sections, onChange, selectedIndex]
  );

  /** Update a section's custom classes */
  const handleClassesChange = useCallback(
    (customClasses: string) => {
      if (selectedIndex === null) return;
      const updated = sections.map((s, i) =>
        i === selectedIndex ? { ...s, customClasses } : s
      );
      onChange(updated);
    },
    [sections, onChange, selectedIndex]
  );

  /** Apply a full template (array of TemplateSectionRef) */
  const handleApplyTemplate = useCallback(
    (templateSections: TemplateSectionRef[]) => {
      const newSections: PageSection[] = templateSections
        .map((ref) => {
          const def = getSection(ref.sectionId);
          if (!def) return null;
          return {
            id: generateId(),
            sectionId: ref.sectionId,
            props: { ...def.defaultProps, ...(ref.props ?? {}) },
          } satisfies PageSection;
        })
        .filter((s): s is PageSection => s !== null);

      onChange(newSections);
      setSelectedIndex(null);
      setTemplateGalleryOpen(false);
    },
    [onChange]
  );

  /** AI assist: apply updated props to the selected section */
  const handleAIApply = useCallback(
    (updatedProps: Record<string, unknown>) => {
      if (selectedIndex === null) return;
      const updated = sections.map((s, i) =>
        i === selectedIndex ? { ...s, props: { ...s.props, ...updatedProps } } : s
      );
      onChange(updated);
      setAiPanelOpen(false);
    },
    [sections, onChange, selectedIndex]
  );

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div className="flex h-full overflow-hidden rounded-xl border border-border bg-bg-secondary">
      {/* ----------------------------------------------------------------- */}
      {/* LEFT PANEL - Section structure list                               */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex w-64 shrink-0 flex-col border-r border-border">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <Layers className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold text-foreground">Sections</span>
          <span className="ml-auto rounded-full bg-bg-hover px-2 py-0.5 text-[10px] font-medium text-text-muted">
            {sections.length}
          </span>
        </div>

        {/* Sortable section list */}
        <div className="flex-1 overflow-y-auto px-2 py-2">
          {sections.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Layers className="mb-2 h-8 w-8 text-text-muted/40" />
              <p className="text-xs text-text-muted">No sections yet</p>
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={sectionIds}
                strategy={verticalListSortingStrategy}
              >
                <div className="flex flex-col gap-1">
                  {sections.map((section, index) => (
                    <SortableItem
                      key={section.id}
                      section={section}
                      isSelected={selectedIndex === index}
                      onSelect={() => setSelectedIndex(index)}
                      onRemove={() => handleRemoveSection(index)}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </div>

        {/* Bottom actions */}
        <div className="flex flex-col gap-2 border-t border-border px-3 py-3">
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent/90"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Section
          </button>
          <button
            type="button"
            onClick={() => setTemplateGalleryOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium text-text-muted transition-colors hover:bg-bg-hover hover:text-foreground"
          >
            <Layers className="h-3.5 w-3.5" />
            Browse Templates
          </button>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* CENTER PANEL - Preview canvas                                     */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Canvas toolbar */}
        <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-2">
          <span className="text-xs font-medium text-text-muted">Preview</span>
        </div>

        {/* Canvas body */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <div className="mx-auto max-w-[1200px] rounded-lg bg-white text-gray-900 shadow-sm ring-1 ring-gray-200">
            {sections.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <Layers className="mb-3 h-12 w-12 text-gray-300" />
                <p className="text-lg font-semibold text-gray-400">
                  Add your first section
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Use the panel on the left to add sections or browse templates
                </p>
                <button
                  type="button"
                  onClick={() => setPickerOpen(true)}
                  className="mt-5 flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  <Plus className="h-4 w-4" />
                  Add Section
                </button>
              </div>
            ) : (
              sections.map((section, index) => (
                <SectionRenderer
                  key={section.id}
                  sectionId={section.sectionId}
                  props={section.props}
                  customClasses={section.customClasses}
                  onClick={() => setSelectedIndex(index)}
                  isSelected={selectedIndex === index}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* RIGHT PANEL - Section editor                                      */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex w-80 shrink-0 flex-col border-l border-border">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-sm font-semibold text-foreground">
            {selectedSection ? "Edit Section" : "Properties"}
          </span>
          {selectedSection && (
            <button
              type="button"
              onClick={() => setAiPanelOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-accent/10 px-2.5 py-1.5 text-[11px] font-semibold text-accent transition-colors hover:bg-accent/20"
              title="AI Assist"
            >
              <Zap className="h-3.5 w-3.5" />
              AI Assist
            </button>
          )}
        </div>

        {/* Editor body */}
        <div className="flex-1 overflow-y-auto">
          {selectedSection && selectedDef ? (
            <SectionEditor
              sectionId={selectedSection.sectionId}
              props={selectedSection.props}
              customClasses={selectedSection.customClasses || ""}
              onPropsChange={handlePropsChange}
              onClassesChange={handleClassesChange}
              onAIAssist={() => setAiPanelOpen(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center px-6">
              <Layers className="mb-3 h-8 w-8 text-text-muted/40" />
              <p className="text-sm font-medium text-text-muted">
                Select a section to edit
              </p>
              <p className="mt-1 text-xs text-text-muted/70">
                Click on a section in the list or the preview to start editing its properties
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* OVERLAYS                                                          */}
      {/* ----------------------------------------------------------------- */}

      {/* Section Picker */}
      <SectionPicker
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={handleAddSection}
      />

      {/* Template Gallery */}
      <TemplateGallery
        open={templateGalleryOpen}
        onClose={() => setTemplateGalleryOpen(false)}
        onApply={handleApplyTemplate}
      />

      {/* AI Panel */}
      <AIPanel
        open={aiPanelOpen}
        onClose={() => setAiPanelOpen(false)}
        sectionId={selectedSection?.sectionId || ""}
        currentProps={selectedSection?.props || {}}
        onApply={handleAIApply}
      />
    </div>
  );
}
