// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

interface GalleryItem {
  image: string;
  caption: string;
}

const castItems = (raw: unknown): GalleryItem[] => {
  if (Array.isArray(raw)) return raw as GalleryItem[];
  return [];
};

const str = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v : fallback;

/* ------------------------------------------------------------------ */
/*  Default data                                                       */
/* ------------------------------------------------------------------ */

const defaultImages: GalleryItem[] = [
  { image: "", caption: "Mountain sunrise with golden light" },
  { image: "", caption: "Coastal landscape at sunset" },
  { image: "", caption: "Urban architecture from above" },
  { image: "", caption: "Forest path in autumn colors" },
  { image: "", caption: "Desert dunes under clear skies" },
  { image: "", caption: "Lakeside reflection at dawn" },
  { image: "", caption: "City skyline at twilight" },
  { image: "", caption: "Wildflower meadow in spring" },
];

const defaultHeading = "Our Gallery";
const defaultSubheading = "A curated collection of our finest work";

const galleryItemFields = [
  { key: "image", label: "Image URL", type: "image" as const },
  { key: "caption", label: "Caption", type: "text" as const },
];

const baseSchema = [
  { key: "heading", label: "Heading", type: "text" as const, required: true },
  { key: "subheading", label: "Sub-heading", type: "text" as const },
  { key: "items", label: "Gallery Images", type: "items" as const, itemFields: galleryItemFields },
];

/* ================================================================== */
/*  gallery-001  Grid 3-Col                                            */
/* ================================================================== */
const Gallery001: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "group overflow-hidden rounded-2xl" },
            React.createElement("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }, "Image ", i + 1)
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-002  Grid 4-Col                                            */
/* ================================================================== */
const Gallery002: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "overflow-hidden rounded-2xl group" },
            React.createElement("div", { className: "aspect-square overflow-hidden rounded-2xl" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }, "Image ", i + 1)
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-003  Masonry                                               */
/* ================================================================== */
const Gallery003: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  const heights = ["h-48", "h-64", "h-56", "h-72", "h-52", "h-60", "h-44", "h-68"];
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "break-inside-avoid overflow-hidden rounded-2xl group" },
            React.createElement("div", { className: `${heights[i % heights.length]} overflow-hidden rounded-2xl` },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-500 text-sm bg-white/5 border border-white/10" }, "Image ", i + 1)
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-004  Carousel                                              */
/* ================================================================== */
const Gallery004: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "flex-shrink-0 w-96 snap-center" },
            React.createElement("div", { className: "aspect-[16/10] rounded-2xl overflow-hidden group" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }, "Image ", i + 1)
            ),
            item.caption ? React.createElement("p", { className: "mt-3 text-center text-slate-600 text-sm font-medium" }, item.caption) : null,
          )
        ),
      ),
      React.createElement("div", { className: "flex justify-center gap-2 mt-8" },
        ...items.map((_, i) =>
          React.createElement("div", { key: i, className: `w-2.5 h-2.5 rounded-full transition-all ${i === 0 ? "" : "bg-slate-300"}`, style: i === 0 ? { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } : {} })
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-005  Lightbox                                              */
/* ================================================================== */
const Gallery005: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-4" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "group relative overflow-hidden rounded-2xl cursor-pointer" },
            React.createElement("div", { className: "aspect-square overflow-hidden" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-500 text-sm bg-white/5" }, "Image ", i + 1)
            ),
            React.createElement("div", { className: "absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" },
              React.createElement("div", { className: "w-14 h-14 rounded-full flex items-center justify-center", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.3), rgba(129,140,248,0.3))", border: "1px solid rgba(255,255,255,0.2)" } },
                React.createElement("span", { className: "text-white text-2xl" }, "+"),
              ),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-006  Portfolio Filter                                      */
/* ================================================================== */
const Gallery006: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  const filters = ["All", "Design", "Photography", "Branding"];
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-12" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "flex justify-center gap-3 mb-12" },
        ...filters.map((f, i) =>
          React.createElement("button", { key: i, className: `px-5 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? "text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`, style: i === 0 ? { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } : {} }, f)
        ),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "group overflow-hidden rounded-2xl" },
            React.createElement("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }, "Image ", i + 1)
            ),
            item.caption ? React.createElement("p", { className: "mt-3 text-slate-700 font-medium text-sm" }, item.caption) : null,
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-007  Before After                                          */
/* ================================================================== */
const Gallery007: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  const pairs: [GalleryItem, GalleryItem][] = [];
  for (let i = 0; i < items.length - 1; i += 2) {
    pairs.push([items[i], items[i + 1]]);
  }
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-6xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "space-y-12" },
        ...pairs.map(([a, b], i) =>
          React.createElement("div", { key: i, className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
            React.createElement("div", null,
              React.createElement("p", { className: "text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3" }, "Before"),
              React.createElement("div", { className: "aspect-[4/3] rounded-2xl overflow-hidden" },
                a.image
                  ? React.createElement("img", { src: a.image, alt: a.caption, className: "w-full h-full object-cover" })
                  : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.1), rgba(129,140,248,0.1))" } }, a.caption || "Before")
              ),
            ),
            React.createElement("div", null,
              React.createElement("p", { className: "text-xs font-semibold uppercase tracking-wider mb-3", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "After"),
              React.createElement("div", { className: "aspect-[4/3] rounded-2xl overflow-hidden" },
                b.image
                  ? React.createElement("img", { src: b.image, alt: b.caption, className: "w-full h-full object-cover" })
                  : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } }, b.caption || "After")
              ),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-008  Instagram Style                                       */
/* ================================================================== */
const Gallery008: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-5xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-3 gap-1 sm:gap-2" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "group relative overflow-hidden rounded-lg" },
            React.createElement("div", { className: "aspect-square overflow-hidden" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }, "Image ", i + 1)
            ),
            React.createElement("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.6), rgba(129,140,248,0.6))" } },
              React.createElement("span", { className: "text-white text-xs font-medium px-3 text-center" }, item.caption),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-009  Full Width                                            */
/* ================================================================== */
const Gallery009: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 mb-16" },
      React.createElement("div", { className: "text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
    ),
    React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4" },
      ...items.map((item, i) =>
        React.createElement("div", { key: i, className: "group overflow-hidden" },
          React.createElement("div", { className: "aspect-square overflow-hidden" },
            item.image
              ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" })
              : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-500 text-sm bg-white/5" }, "Image ", i + 1)
          ),
        )
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-010  Two Column                                            */
/* ================================================================== */
const Gallery010: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-6xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "overflow-hidden rounded-2xl group" },
            React.createElement("div", { className: `${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"} overflow-hidden rounded-2xl` },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }, "Image ", i + 1)
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-011  With Caption                                          */
/* ================================================================== */
const Gallery011: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "group" },
            React.createElement("div", { className: "aspect-[4/3] rounded-2xl overflow-hidden" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }, "Image ", i + 1)
            ),
            React.createElement("div", { className: "mt-3" },
              React.createElement("p", { className: "text-slate-900 font-medium text-sm" }, item.caption),
              React.createElement("p", { className: "text-xs mt-1", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, `Photo ${i + 1} of ${items.length}`),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-012  Minimal                                               */
/* ================================================================== */
const Gallery012: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-5xl px-6 lg:px-8" },
      React.createElement("div", { className: "mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "group" },
            React.createElement("div", { className: "aspect-[4/3] rounded-xl overflow-hidden" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm bg-slate-50 border border-slate-200" }, "Image ", i + 1)
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-013  Dark Theme                                            */
/* ================================================================== */
const Gallery013: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-4" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "group overflow-hidden rounded-2xl" },
            React.createElement("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-500 text-sm bg-white/5 border border-white/10" }, "Image ", i + 1)
            ),
            item.caption ? React.createElement("p", { className: "mt-3 text-slate-400 text-sm text-center" }, item.caption) : null,
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-014  Grid 2-Col                                            */
/* ================================================================== */
const Gallery014: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-5xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
        ...items.map((item, i) =>
          React.createElement("div", { key: i, className: "overflow-hidden rounded-2xl group" },
            React.createElement("div", { className: "aspect-[16/10] overflow-hidden rounded-2xl" },
              item.image
                ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }, "Image ", i + 1)
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  gallery-015  Featured                                              */
/* ================================================================== */
const Gallery015: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  const featured = items[0];
  const rest = items.slice(1);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" },
        featured ? React.createElement("div", { className: "lg:row-span-2 overflow-hidden rounded-2xl group" },
          React.createElement("div", { className: "aspect-square lg:h-full overflow-hidden rounded-2xl" },
            featured.image
              ? React.createElement("img", { src: featured.image, alt: featured.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
              : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-lg", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } }, "Featured")
          ),
          featured.caption ? React.createElement("p", { className: "mt-3 text-slate-900 font-semibold" }, featured.caption) : null,
        ) : null,
        React.createElement("div", { className: "grid grid-cols-2 gap-4" },
          ...rest.slice(0, 4).map((item, i) =>
            React.createElement("div", { key: i, className: "overflow-hidden rounded-2xl group" },
              React.createElement("div", { className: "aspect-square overflow-hidden rounded-2xl" },
                item.image
                  ? React.createElement("img", { src: item.image, alt: item.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })
                  : React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-sm", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }, "Image ", i + 2)
              ),
            )
          ),
        ),
      ),
    ),
  );
};

/* ------------------------------------------------------------------ */
/*  Definitions & registration                                         */
/* ------------------------------------------------------------------ */

const defaultProps = {
  heading: defaultHeading,
  subheading: defaultSubheading,
  items: defaultImages,
};

const gallerySections: SectionDefinition[] = [
  {
    id: "gallery-001",
    category: "gallery",
    name: "Gallery Grid 3-Col",
    description: "Three column image grid with hover zoom effect",
    tags: ["gallery", "grid", "3-column", "images"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery001,
  },
  {
    id: "gallery-002",
    category: "gallery",
    name: "Gallery Grid 4-Col",
    description: "Four column square image grid",
    tags: ["gallery", "grid", "4-column", "square"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery002,
  },
  {
    id: "gallery-003",
    category: "gallery",
    name: "Gallery Masonry",
    description: "Masonry layout with varied image heights using CSS columns",
    tags: ["gallery", "masonry", "varied", "pinterest"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery003,
  },
  {
    id: "gallery-004",
    category: "gallery",
    name: "Gallery Carousel",
    description: "Horizontally scrollable image carousel with captions",
    tags: ["gallery", "carousel", "slider", "scroll"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery004,
  },
  {
    id: "gallery-005",
    category: "gallery",
    name: "Gallery Lightbox",
    description: "Image grid with lightbox-style hover overlay and zoom icon",
    tags: ["gallery", "lightbox", "overlay", "zoom"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery005,
  },
  {
    id: "gallery-006",
    category: "gallery",
    name: "Gallery Portfolio Filter",
    description: "Filterable portfolio grid with category filter buttons",
    tags: ["gallery", "portfolio", "filter", "categories"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery006,
  },
  {
    id: "gallery-007",
    category: "gallery",
    name: "Gallery Before After",
    description: "Side-by-side before and after comparison pairs",
    tags: ["gallery", "before-after", "comparison", "pairs"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery007,
  },
  {
    id: "gallery-008",
    category: "gallery",
    name: "Gallery Instagram Style",
    description: "Square grid layout like Instagram with hover caption overlay",
    tags: ["gallery", "instagram", "square", "social"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery008,
  },
  {
    id: "gallery-009",
    category: "gallery",
    name: "Gallery Full Width",
    description: "Edge-to-edge gallery with no gaps and hover zoom",
    tags: ["gallery", "full-width", "edge-to-edge", "seamless"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery009,
  },
  {
    id: "gallery-010",
    category: "gallery",
    name: "Gallery Two Column",
    description: "Two column layout with alternating portrait and landscape sizes",
    tags: ["gallery", "two-column", "alternating", "varied"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery010,
  },
  {
    id: "gallery-011",
    category: "gallery",
    name: "Gallery With Caption",
    description: "Image grid with text captions and photo count below each image",
    tags: ["gallery", "captions", "text", "descriptions"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery011,
  },
  {
    id: "gallery-012",
    category: "gallery",
    name: "Gallery Minimal",
    description: "Clean minimal gallery with subtle rounded corners",
    tags: ["gallery", "minimal", "clean", "simple"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery012,
  },
  {
    id: "gallery-013",
    category: "gallery",
    name: "Gallery Dark Theme",
    description: "Dark background gallery with light captions",
    tags: ["gallery", "dark", "theme", "night"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery013,
  },
  {
    id: "gallery-014",
    category: "gallery",
    name: "Gallery Grid 2-Col",
    description: "Simple two column grid with large rounded images",
    tags: ["gallery", "grid", "2-column", "simple"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery014,
  },
  {
    id: "gallery-015",
    category: "gallery",
    name: "Gallery Featured",
    description: "One large featured image alongside a smaller grid of thumbnails",
    tags: ["gallery", "featured", "hero", "highlight"],
    defaultProps,
    propsSchema: baseSchema,
    component: Gallery015,
  },
];

registerSections(gallerySections);
