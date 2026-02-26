"use client";

import { useState, useCallback, useMemo } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import type { DragEndEvent } from "@dnd-kit/core";
import { getSection, type PageSection, type TemplateSectionRef } from "@repo/shared/sections";

function generateId(): string {
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

export function getSectionLabel(sectionId: string): string {
  const def = getSection(sectionId);
  return def?.name ?? sectionId;
}

interface UsePageBuilderOptions {
  sections: PageSection[];
  onChange: (sections: PageSection[]) => void;
}

export function usePageBuilder({ sections, onChange }: UsePageBuilderOptions) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [templateGalleryOpen, setTemplateGalleryOpen] = useState(false);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);

  const selectedSection = useMemo(
    () => (selectedIndex !== null ? sections[selectedIndex] ?? null : null),
    [sections, selectedIndex]
  );

  const selectedDef = useMemo(
    () => (selectedSection ? getSection(selectedSection.sectionId) : null),
    [selectedSection]
  );

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      if (oldIndex === -1 || newIndex === -1) return;

      const reordered = arrayMove(sections, oldIndex, newIndex);
      onChange(reordered);

      if (selectedIndex === oldIndex) {
        setSelectedIndex(newIndex);
      } else if (selectedIndex !== null) {
        if (oldIndex < selectedIndex && newIndex >= selectedIndex) {
          setSelectedIndex(selectedIndex - 1);
        } else if (oldIndex > selectedIndex && newIndex <= selectedIndex) {
          setSelectedIndex(selectedIndex + 1);
        }
      }
    },
    [sections, onChange, selectedIndex]
  );

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
      setSelectedIndex(updated.length - 1);
    },
    [sections, onChange]
  );

  const handleRemoveSection = useCallback(
    (index: number) => {
      const updated = sections.filter((_, i) => i !== index);
      onChange(updated);

      if (selectedIndex === index) {
        setSelectedIndex(null);
      } else if (selectedIndex !== null && selectedIndex > index) {
        setSelectedIndex(selectedIndex - 1);
      }
    },
    [sections, onChange, selectedIndex]
  );

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

  return {
    selectedIndex,
    setSelectedIndex,
    selectedSection,
    selectedDef,
    sectionIds,
    pickerOpen,
    setPickerOpen,
    templateGalleryOpen,
    setTemplateGalleryOpen,
    aiPanelOpen,
    setAiPanelOpen,
    handleDragEnd,
    handleAddSection,
    handleRemoveSection,
    handlePropsChange,
    handleClassesChange,
    handleApplyTemplate,
    handleAIApply,
  };
}
