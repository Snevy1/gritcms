"use client";

import React from "react";
import { getSection } from "./registry";
import type { PageSection } from "./types";

/** Error boundary that catches render errors in individual sections */
class SectionErrorBoundary extends React.Component<
  { sectionId: string; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { sectionId: string; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error(`Section "${this.props.sectionId}" crashed:`, error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="py-8 text-center text-slate-400">
          <p className="text-sm">This section failed to render.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

interface SectionRendererProps {
  sectionId: string;
  props: Record<string, unknown>;
  customClasses?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export function SectionRenderer({
  sectionId,
  props,
  customClasses,
  onClick,
  isSelected,
}: SectionRendererProps) {
  const def = getSection(sectionId);
  if (!def) {
    return (
      <div className="py-12 text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
        <p className="text-sm">Section not found: {sectionId}</p>
      </div>
    );
  }

  const Component = def.component;
  const mergedProps = { ...def.defaultProps, ...props };

  return (
    <div
      className={`relative ${customClasses || ""} ${isSelected ? "ring-2 ring-indigo-500 ring-offset-2" : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <SectionErrorBoundary sectionId={sectionId}>
        <Component {...mergedProps} />
      </SectionErrorBoundary>
    </div>
  );
}

interface PageRendererProps {
  sections: PageSection[];
  onSectionClick?: (index: number) => void;
  selectedIndex?: number;
}

export function PageRenderer({
  sections,
  onSectionClick,
  selectedIndex,
}: PageRendererProps) {
  if (!sections || sections.length === 0) {
    return (
      <div className="py-24 text-center text-gray-400">
        <p className="text-lg font-medium">No sections yet</p>
        <p className="text-sm mt-2">Add sections to start building your page</p>
      </div>
    );
  }

  return (
    <>
      {sections.map((section, index) => (
        <SectionRenderer
          key={section.id}
          sectionId={section.sectionId}
          props={section.props}
          customClasses={section.customClasses}
          onClick={onSectionClick ? () => onSectionClick(index) : undefined}
          isSelected={selectedIndex === index}
        />
      ))}
    </>
  );
}
