// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

// ─── Shared schema & defaults ────────────────────────────────────────────────

const logoItemFields = [
  { key: "name", label: "Company Name", type: "text" as const, required: true },
  { key: "image", label: "Logo Image", type: "image" as const },
];

const logosPropsSchema = [
  { key: "heading", label: "Heading", type: "text" as const },
  { key: "subheading", label: "Sub-heading", type: "text" as const },
  {
    key: "items",
    label: "Logos",
    type: "items" as const,
    itemFields: logoItemFields,
  },
];

const defaultLogos = [
  { name: "Acme Corp", image: "" },
  { name: "Globex", image: "" },
  { name: "Soylent", image: "" },
  { name: "Initech", image: "" },
  { name: "Umbrella", image: "" },
  { name: "Hooli", image: "" },
  { name: "Vehement", image: "" },
  { name: "Massive Dynamic", image: "" },
];

// ─── logos-001  Row Grayscale ────────────────────────────────────────────────

const Logos001: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Trusted by industry leaders";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-20 sm:py-24 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("p", { className: "text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-12" }, heading),
      React.createElement(
        "div",
        { className: "flex flex-wrap items-center justify-center gap-x-14 gap-y-8" },
        ...items.map((logo, i) =>
          React.createElement(
            "div",
            { key: i, className: "opacity-50 hover:opacity-100 transition-all duration-300" },
            logo.image
              ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-8 object-contain grayscale hover:grayscale-0 transition-all" })
              : React.createElement(
                  "span",
                  { className: "text-2xl font-bold text-slate-400" },
                  logo.name
                )
          )
        )
      )
    )
  );
};

// ─── logos-002  Row Color ────────────────────────────────────────────────────

const Logos002: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Our partners";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-20 sm:py-24 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("p", { className: "text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-12" }, heading),
      React.createElement(
        "div",
        { className: "flex flex-wrap items-center justify-center gap-x-16 gap-y-8" },
        ...items.map((logo, i) =>
          React.createElement(
            "div",
            { key: i, className: "opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300" },
            logo.image
              ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-10 object-contain" })
              : React.createElement(
                  "span",
                  { className: "text-2xl font-bold text-slate-400" },
                  logo.name
                )
          )
        )
      )
    )
  );
};

// ─── logos-003  Grid ─────────────────────────────────────────────────────────

const Logos003: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Companies that trust us";
  const subheading = (props.subheading as string) || "We work with the best teams across the globe.";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" },
        ...items.map((logo, i) =>
          React.createElement(
            "div",
            { key: i, className: "flex items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all" },
            logo.image
              ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-10 object-contain" })
              : React.createElement(
                  "span",
                  { className: "text-2xl font-bold text-slate-400 opacity-50 hover:opacity-100 transition-all" },
                  logo.name
                )
          )
        )
      )
    )
  );
};

// ─── logos-004  Carousel ─────────────────────────────────────────────────────

const Logos004: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Powering the best teams";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-20 sm:py-24 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("p", { className: "text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-12" }, heading)
    ),
    React.createElement(
      "div",
      { className: "relative" },
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" }),
      React.createElement("div", { className: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" }),
      React.createElement(
        "div",
        { className: "flex items-center gap-16 animate-marquee whitespace-nowrap" },
        ...[...items, ...items].map((logo, i) =>
          React.createElement(
            "div",
            { key: i, className: "flex-shrink-0 opacity-50 hover:opacity-100 transition-all" },
            logo.image
              ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-8 object-contain" })
              : React.createElement(
                  "span",
                  { className: "text-2xl font-bold text-slate-400" },
                  logo.name
                )
          )
        )
      )
    )
  );
};

// ─── logos-005  With Testimonial ──────────────────────────────────────────────

const Logos005: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Loved by thousands";
  const subheading =
    (props.subheading as string) ||
    "\u201cThis product has completely transformed our workflow. We shipped 3x faster within the first month.\u201d";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("p", { className: "text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8" }, heading),
        React.createElement(
          "blockquote",
          { className: "max-w-3xl mx-auto" },
          React.createElement("p", { className: "text-2xl sm:text-3xl font-medium text-slate-900 italic leading-relaxed" }, subheading),
          React.createElement(
            "footer",
            { className: "mt-8" },
            React.createElement("div", { className: "w-12 h-12 rounded-full mx-auto mb-3", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }),
            React.createElement("p", { className: "text-sm text-slate-600 font-medium" }, "\u2014 Alex Rivera, CEO at Globex")
          )
        )
      ),
      React.createElement(
        "div",
        { className: "flex flex-wrap items-center justify-center gap-x-14 gap-y-6 pt-10 border-t border-slate-200" },
        ...items.map((logo, i) =>
          React.createElement(
            "div",
            { key: i, className: "opacity-40 hover:opacity-100 transition-all duration-300" },
            logo.image
              ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-8 object-contain grayscale hover:grayscale-0 transition-all" })
              : React.createElement(
                  "span",
                  { className: "text-2xl font-bold text-slate-400" },
                  logo.name
                )
          )
        )
      )
    )
  );
};

// ─── logos-006  Ticker ───────────────────────────────────────────────────────

const Logos006: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Trusted worldwide";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-16 bg-slate-950" },
    React.createElement("p", { className: "text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-10" }, heading),
    React.createElement(
      "div",
      { className: "relative" },
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" }),
      React.createElement("div", { className: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" }),
      React.createElement(
        "div",
        { className: "flex items-center gap-16 animate-marquee whitespace-nowrap" },
        ...[...items, ...items, ...items].map((logo, i) =>
          React.createElement(
            "div",
            { key: i, className: "flex-shrink-0" },
            logo.image
              ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-7 object-contain brightness-200" })
              : React.createElement(
                  "span",
                  { className: "text-2xl font-bold text-white/30" },
                  logo.name
                )
          )
        )
      )
    )
  );
};

// ─── logos-007  Trust Badges ─────────────────────────────────────────────────

const Logos007: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Certifications & Trust";
  const subheading = (props.subheading as string) || "We meet the highest standards for security and compliance.";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "flex flex-wrap items-center justify-center gap-6" },
        ...items.map((logo, i) =>
          React.createElement(
            "div",
            { key: i, className: "flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 w-40 hover:shadow-md transition-all" },
            logo.image
              ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-12 object-contain" })
              : React.createElement("div", { className: "w-14 h-14 rounded-full flex items-center justify-center text-white text-lg", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, "\u2713"),
            React.createElement("span", { className: "text-xs text-slate-600 font-semibold text-center" }, logo.name)
          )
        )
      )
    )
  );
};

// ─── logos-008  Partner Grid ─────────────────────────────────────────────────

const Logos008: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Our Partners";
  const subheading = (props.subheading as string) || "Collaborating with world-class organizations.";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" },
        ...items.map((logo, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl bg-white/5 border border-white/10 p-10 flex items-center justify-center hover:border-white/20 hover:bg-white/10 transition-all" },
            logo.image
              ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-10 object-contain" })
              : React.createElement(
                  "span",
                  { className: "text-2xl font-bold text-slate-400 opacity-50 hover:opacity-100 transition-all" },
                  logo.name
                )
          )
        )
      )
    )
  );
};

// ─── logos-009  Minimal ──────────────────────────────────────────────────────

const Logos009: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-12 bg-white border-y border-slate-100" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      heading && React.createElement("p", { className: "text-center text-xs text-slate-400 uppercase tracking-wider mb-8" }, heading),
      React.createElement(
        "div",
        { className: "flex items-center justify-between gap-8 overflow-x-auto" },
        ...items.map((logo, i) =>
          React.createElement(
            "div",
            { key: i, className: "flex-shrink-0 opacity-40 hover:opacity-100 transition-all duration-300" },
            logo.image
              ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-6 object-contain" })
              : React.createElement(
                  "span",
                  { className: "text-xl font-bold text-slate-400 whitespace-nowrap" },
                  logo.name
                )
          )
        )
      )
    )
  );
};

// ─── logos-010  With Heading ─────────────────────────────────────────────────

const Logos010: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Join 10,000+ companies already growing with us";
  const subheading = (props.subheading as string) || "";
  const items = (props.items as typeof defaultLogos) || defaultLogos;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "flex flex-col lg:flex-row items-center gap-16" },
        React.createElement(
          "div",
          { className: "lg:w-1/3 text-center lg:text-left" },
          React.createElement("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight" }, heading),
          subheading && React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading)
        ),
        React.createElement(
          "div",
          { className: "lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center" },
          ...items.map((logo, i) =>
            React.createElement(
              "div",
              { key: i, className: "flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300" },
              logo.image
                ? React.createElement("img", { src: logo.image, alt: logo.name, className: "h-9 object-contain grayscale hover:grayscale-0 transition-all" })
                : React.createElement(
                    "span",
                    { className: "text-2xl font-bold text-slate-400" },
                    logo.name
                  )
            )
          )
        )
      )
    )
  );
};

// ─── Section definitions ─────────────────────────────────────────────────────

const logosSections: SectionDefinition[] = [
  {
    id: "logos-001",
    category: "logos",
    name: "Logos Row Grayscale",
    description: "A single row of grayscale client logos that reveal color on hover.",
    tags: ["logos", "grayscale", "row", "clients"],
    defaultProps: { heading: "Trusted by industry leaders", subheading: "", items: defaultLogos },
    propsSchema: logosPropsSchema,
    component: Logos001,
  },
  {
    id: "logos-002",
    category: "logos",
    name: "Logos Row Color",
    description: "A row of full-color partner logos with hover scale effect.",
    tags: ["logos", "color", "row", "partners"],
    defaultProps: { heading: "Our partners", subheading: "", items: defaultLogos },
    propsSchema: logosPropsSchema,
    component: Logos002,
  },
  {
    id: "logos-003",
    category: "logos",
    name: "Logos Grid",
    description: "A responsive grid of logos in rounded containers with heading.",
    tags: ["logos", "grid", "companies"],
    defaultProps: { heading: "Companies that trust us", subheading: "We work with the best teams across the globe.", items: defaultLogos },
    propsSchema: logosPropsSchema,
    component: Logos003,
  },
  {
    id: "logos-004",
    category: "logos",
    name: "Logos Carousel",
    description: "Scrolling logo carousel with fade edges for a seamless loop.",
    tags: ["logos", "carousel", "scroll", "marquee"],
    defaultProps: { heading: "Powering the best teams", subheading: "", items: defaultLogos },
    propsSchema: logosPropsSchema,
    component: Logos004,
  },
  {
    id: "logos-005",
    category: "logos",
    name: "Logos With Testimonial",
    description: "Client logos paired with a prominent testimonial quote above.",
    tags: ["logos", "testimonial", "quote", "social-proof"],
    defaultProps: {
      heading: "Loved by thousands",
      subheading: "\u201cThis product has completely transformed our workflow. We shipped 3x faster within the first month.\u201d",
      items: defaultLogos,
    },
    propsSchema: logosPropsSchema,
    component: Logos005,
  },
  {
    id: "logos-006",
    category: "logos",
    name: "Logos Ticker",
    description: "Continuous scrolling logo ticker on a bold indigo background.",
    tags: ["logos", "ticker", "scroll", "colored-bg"],
    defaultProps: { heading: "Trusted worldwide", subheading: "", items: defaultLogos },
    propsSchema: logosPropsSchema,
    component: Logos006,
  },
  {
    id: "logos-007",
    category: "logos",
    name: "Trust Badges",
    description: "Trust and certification badges in card containers with labels.",
    tags: ["logos", "trust", "badges", "certifications"],
    defaultProps: { heading: "Certifications & Trust", subheading: "We meet the highest standards for security and compliance.", items: defaultLogos },
    propsSchema: logosPropsSchema,
    component: Logos007,
  },
  {
    id: "logos-008",
    category: "logos",
    name: "Partner Grid",
    description: "Partner logos in a clean grid with bordered cards.",
    tags: ["logos", "partners", "grid", "bordered"],
    defaultProps: { heading: "Our Partners", subheading: "Collaborating with world-class organizations.", items: defaultLogos },
    propsSchema: logosPropsSchema,
    component: Logos008,
  },
  {
    id: "logos-009",
    category: "logos",
    name: "Logos Minimal",
    description: "Ultra-minimal single-row logo strip with subtle opacity.",
    tags: ["logos", "minimal", "subtle", "strip"],
    defaultProps: { heading: "", subheading: "", items: defaultLogos },
    propsSchema: logosPropsSchema,
    component: Logos009,
  },
  {
    id: "logos-010",
    category: "logos",
    name: "Logos With Heading",
    description: "Logos section with a bold heading on the left and logo grid on the right.",
    tags: ["logos", "heading", "split", "cta"],
    defaultProps: { heading: "Join 10,000+ companies already growing with us", subheading: "", items: defaultLogos },
    propsSchema: logosPropsSchema,
    component: Logos010,
  },
];

registerSections(logosSections);
