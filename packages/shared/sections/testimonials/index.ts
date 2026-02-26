// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
}

const testimonialItemFields = [
  { key: "name", label: "Name", type: "text" as const, required: true },
  { key: "role", label: "Role", type: "text" as const },
  { key: "company", label: "Company", type: "text" as const },
  { key: "quote", label: "Quote", type: "textarea" as const, required: true },
];

const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "Acme Corp",
    quote:
      "This platform completely transformed how we approach our marketing strategy. The results speak for themselves - 40% increase in engagement within the first month.",
  },
  {
    name: "James Rodriguez",
    role: "CEO",
    company: "Startify",
    quote:
      "We evaluated dozens of solutions before choosing this one. Best decision we ever made. Our team productivity has skyrocketed.",
  },
  {
    name: "Emily Watson",
    role: "Product Designer",
    company: "DesignHub",
    quote:
      "The intuitive interface and powerful features make my daily workflow so much smoother. I cannot imagine going back to our old tools.",
  },
  {
    name: "Michael Park",
    role: "CTO",
    company: "TechNova",
    quote:
      "Robust, scalable, and beautifully designed. It ticks every box on our requirements list and then some.",
  },
  {
    name: "Lisa Nguyen",
    role: "Operations Manager",
    company: "GrowthLabs",
    quote:
      "Customer support is phenomenal and the product keeps getting better with every update. Truly a partner in our success.",
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "Launchpad.io",
    quote:
      "From onboarding to daily use, everything feels polished. It has become the backbone of our entire operation.",
  },
];

function castItems(raw: unknown): TestimonialItem[] {
  return (Array.isArray(raw) ? raw : defaultTestimonials) as TestimonialItem[];
}

const baseSchema = [
  { key: "heading", label: "Heading", type: "text" as const },
  { key: "subheading", label: "Sub-heading", type: "textarea" as const },
  {
    key: "items",
    label: "Testimonials",
    type: "items" as const,
    itemFields: testimonialItemFields,
  },
];

/* ------------------------------------------------------------------ */
/*  Stars helper                                                       */
/* ------------------------------------------------------------------ */
function Stars({ count = 5 }: { count?: number }) {
  return React.createElement(
    "div",
    { className: "flex gap-0.5" },
    ...Array.from({ length: count }, (_, i) =>
      React.createElement(
        "span",
        { key: i, className: "text-amber-400 text-lg" },
        "\u2605"
      )
    )
  );
}

/* ------------------------------------------------------------------ */
/*  Avatar placeholder helper                                          */
/* ------------------------------------------------------------------ */
function AvatarPlaceholder({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg"
      ? "w-16 h-16 text-xl"
      : size === "md"
        ? "w-12 h-12 text-base"
        : "w-10 h-10 text-sm";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return React.createElement(
    "div",
    {
      className: `${sizeClass} rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-white flex items-center justify-center font-semibold shrink-0`,
    },
    initials
  );
}

/* ================================================================== */
/*  testimonials-001  Carousel                                         */
/* ================================================================== */
const Testimonials001: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "What Our Customers Say";
  const subheading =
    (props.subheading as string) ||
    "Trusted by thousands of happy customers worldwide.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-4xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h2",
        { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-16 relative rounded-2xl bg-slate-50 border border-slate-200 p-10 md:p-14 shadow-sm" },
        React.createElement(
          "span",
          { className: "text-6xl text-violet-500/20 font-serif leading-none absolute top-6 left-8 select-none" },
          "\u201C"
        ),
        React.createElement(
          "blockquote",
          { className: "text-xl md:text-2xl text-slate-700 italic leading-relaxed mt-4" },
          items[0]?.quote
        ),
        React.createElement(
          "div",
          { className: "mt-8 flex items-center justify-center gap-4" },
          React.createElement(AvatarPlaceholder, { name: items[0]?.name || "", size: "md" }),
          React.createElement(
            "div",
            { className: "text-left" },
            React.createElement(
              "p",
              { className: "font-semibold text-slate-900" },
              items[0]?.name
            ),
            React.createElement(
              "p",
              { className: "text-sm text-slate-500" },
              `${items[0]?.role}, ${items[0]?.company}`
            )
          )
        ),
        React.createElement(
          "div",
          { className: "flex justify-center gap-3 mt-10" },
          React.createElement(
            "button",
            {
              className: "w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-600 transition-all",
              "aria-label": "Previous",
            },
            React.createElement(
              "svg",
              { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
              React.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 19l-7-7 7-7",
              })
            )
          ),
          ...items.map((_, i) =>
            React.createElement("span", {
              key: i,
              className: `w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-violet-600" : "bg-slate-300"} inline-block mt-3`,
            })
          ),
          React.createElement(
            "button",
            {
              className: "w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-600 transition-all",
              "aria-label": "Next",
            },
            React.createElement(
              "svg",
              { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
              React.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 5l7 7-7 7",
              })
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-002  Grid 3-Col                                       */
/* ================================================================== */
const Testimonials002: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Loved by Businesses Worldwide";
  const subheading =
    (props.subheading as string) ||
    "See what our customers have to say about their experience.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    {
      className: "relative overflow-hidden py-24 sm:py-32",
      style: { background: "linear-gradient(to bottom, #020617, #0f172a)" },
    },
    React.createElement("div", {
      className: "absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30",
      style: { background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all",
            },
            React.createElement(
              "div",
              { className: "flex gap-0.5 mb-4" },
              ...Array.from({ length: 5 }, (_, si) =>
                React.createElement("span", { key: si, className: "text-amber-400 text-sm" }, "\u2605")
              )
            ),
            React.createElement(
              "p",
              { className: "text-slate-300 leading-relaxed mb-6" },
              `"${item.quote}"`
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-3" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-white text-sm" }, item.name),
                React.createElement("p", { className: "text-xs text-slate-500" }, `${item.role}, ${item.company}`)
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-003  Single Featured                                  */
/* ================================================================== */
const Testimonials003: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "A Story of Transformation";
  const items = castItems(props.items);
  const item = items[0] || defaultTestimonials[0];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", {
      className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl",
      style: { background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-4xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h2",
        { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-12" },
        heading
      ),
      React.createElement(
        "div",
        { className: "rounded-2xl bg-white border border-slate-200 p-10 md:p-16 shadow-sm" },
        React.createElement(
          "span",
          { className: "text-7xl text-violet-500/20 font-serif leading-none select-none" },
          "\u201C"
        ),
        React.createElement(
          "blockquote",
          { className: "text-2xl md:text-3xl text-slate-700 italic leading-relaxed mt-4 mb-10" },
          item.quote
        ),
        React.createElement(
          "div",
          { className: "flex items-center justify-center gap-4" },
          React.createElement(AvatarPlaceholder, { name: item.name, size: "lg" }),
          React.createElement(
            "div",
            { className: "text-left" },
            React.createElement("p", { className: "font-bold text-xl text-slate-900" }, item.name),
            React.createElement(
              "p",
              {
                style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
                className: "font-medium",
              },
              `${item.role} at ${item.company}`
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-004  With Avatar                                      */
/* ================================================================== */
const Testimonials004: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Trusted by Industry Leaders";
  const subheading =
    (props.subheading as string) ||
    "Real feedback from real people who use our product every day.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all",
            },
            React.createElement(
              "div",
              { className: "flex items-center gap-4 mb-5" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "md" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-slate-900" }, item.name),
                React.createElement("p", { className: "text-sm text-slate-500" }, `${item.role}, ${item.company}`)
              )
            ),
            React.createElement(
              "p",
              { className: "text-slate-600 leading-relaxed" },
              `"${item.quote}"`
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-005  Star Rating                                      */
/* ================================================================== */
const Testimonials005: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "5-Star Reviews from Real Users";
  const subheading =
    (props.subheading as string) ||
    "Our customers consistently rate us at the top.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all",
            },
            React.createElement(Stars, {}),
            React.createElement(
              "p",
              { className: "text-slate-700 mt-4 mb-6 leading-relaxed" },
              `"${item.quote}"`
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-3 pt-4 border-t border-slate-100" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-slate-900 text-sm" }, item.name),
                React.createElement("p", { className: "text-xs text-slate-500" }, `${item.role}, ${item.company}`)
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-006  Logo Bar                                         */
/* ================================================================== */
const Testimonials006: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "What Industry Leaders Say";
  const subheading =
    (props.subheading as string) ||
    "Hear from the companies that trust us most.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    {
      className: "relative overflow-hidden py-24 sm:py-32",
      style: { background: "linear-gradient(to bottom, #020617, #0f172a)" },
    },
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-12" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "flex flex-wrap justify-center gap-8 items-center mb-16" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-400",
            },
            item.company
          )
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-3 gap-6" },
        ...items.slice(0, 3).map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:border-white/20 transition-all",
            },
            React.createElement("span", { className: "text-5xl text-violet-500/20 font-serif select-none" }, "\u201C"),
            React.createElement(
              "p",
              { className: "text-slate-300 italic leading-relaxed mt-2 mb-6" },
              item.quote
            ),
            React.createElement("p", { className: "font-semibold text-white" }, item.name),
            React.createElement("p", { className: "text-sm text-slate-500" }, `${item.role}, ${item.company}`)
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-007  Video Style                                      */
/* ================================================================== */
const Testimonials007: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Watch What Our Customers Say";
  const subheading =
    (props.subheading as string) ||
    "Real stories from real users, in their own words.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.slice(0, 3).map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all",
            },
            React.createElement(
              "div",
              {
                className: "aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative",
              },
              React.createElement(
                "div",
                {
                  className: "w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/25",
                },
                React.createElement(
                  "svg",
                  {
                    className: "w-6 h-6 text-white ml-1",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                  },
                  React.createElement("path", { d: "M8 5v14l11-7z" })
                )
              )
            ),
            React.createElement(
              "div",
              { className: "p-6" },
              React.createElement(
                "p",
                { className: "text-slate-700 leading-relaxed mb-4" },
                `"${item.quote}"`
              ),
              React.createElement(
                "div",
                { className: "flex items-center gap-3 pt-4 border-t border-slate-100" },
                React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
                React.createElement(
                  "div",
                  null,
                  React.createElement("p", { className: "font-semibold text-slate-900 text-sm" }, item.name),
                  React.createElement("p", { className: "text-xs text-slate-500" }, `${item.role}, ${item.company}`)
                )
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-008  Tweet Style                                      */
/* ================================================================== */
const Testimonials008: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "What People Are Saying";
  const subheading =
    (props.subheading as string) ||
    "Join the conversation and see why people love us.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all",
            },
            React.createElement(
              "div",
              { className: "flex items-start justify-between mb-3" },
              React.createElement(
                "div",
                { className: "flex items-center gap-3" },
                React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
                React.createElement(
                  "div",
                  null,
                  React.createElement("p", { className: "font-semibold text-slate-900 text-sm" }, item.name),
                  React.createElement(
                    "p",
                    { className: "text-xs text-slate-400" },
                    `@${item.name.toLowerCase().replace(/\s+/g, "")}`
                  )
                )
              ),
              React.createElement(
                "svg",
                { className: "w-5 h-5 text-sky-400", fill: "currentColor", viewBox: "0 0 24 24" },
                React.createElement("path", {
                  d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                })
              )
            ),
            React.createElement(
              "p",
              { className: "text-slate-700 text-sm leading-relaxed" },
              item.quote
            ),
            React.createElement(
              "p",
              { className: "text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100" },
              `${item.role} at ${item.company}`
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-009  Card Stack                                       */
/* ================================================================== */
const Testimonials009: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Stacks of Positive Feedback";
  const subheading =
    (props.subheading as string) ||
    "Our customers keep coming back for more.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    {
      className: "relative overflow-hidden py-24 sm:py-32",
      style: { background: "linear-gradient(to bottom, #020617, #0f172a)" },
    },
    React.createElement("div", {
      className: "absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl",
      style: { background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-3xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h2",
        { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-4 text-lg text-slate-400 leading-relaxed mb-16" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "relative" },
        ...items.slice(0, 3).map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: `rounded-2xl p-8 ${
                i === 0
                  ? "relative z-30 bg-white/10 backdrop-blur-sm border border-white/20"
                  : i === 1
                    ? "absolute inset-x-4 top-4 z-20 bg-white/5 border border-white/10 opacity-60"
                    : "absolute inset-x-8 top-8 z-10 bg-white/[0.03] border border-white/5 opacity-30"
              }`,
              style: i === 0 ? {} : { transform: `translateY(${i * 14}px)` },
            },
            React.createElement(
              "p",
              { className: "text-slate-300 text-lg italic leading-relaxed mb-6" },
              `"${item.quote}"`
            ),
            React.createElement(
              "div",
              { className: "flex items-center justify-center gap-3" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                { className: "text-left" },
                React.createElement("p", { className: "font-semibold text-white text-sm" }, item.name),
                React.createElement("p", { className: "text-xs text-slate-500" }, `${item.role}, ${item.company}`)
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-010  Large Quote                                      */
/* ================================================================== */
const Testimonials010: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "In Their Own Words";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "h2",
        { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-16 text-center" },
        heading
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 gap-10" },
        ...items.slice(0, 4).map((item, i) =>
          React.createElement(
            "div",
            { key: i, className: "relative pl-14" },
            React.createElement(
              "span",
              { className: "absolute top-0 left-0 text-8xl font-serif text-violet-500/20 leading-none select-none" },
              "\u201C"
            ),
            React.createElement(
              "p",
              { className: "text-xl text-slate-700 italic leading-relaxed mb-6" },
              item.quote
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-3" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-bold text-slate-900" }, item.name),
                React.createElement(
                  "p",
                  {
                    className: "text-sm font-medium",
                    style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
                  },
                  `${item.role}, ${item.company}`
                )
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-011  Minimal                                          */
/* ================================================================== */
const Testimonials011: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Testimonials";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    {
      className: "relative overflow-hidden py-24 sm:py-32",
      style: { background: "linear-gradient(to bottom, #020617, #0f172a)" },
    },
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement(
        "h2",
        { className: "text-3xl sm:text-4xl font-bold tracking-tight text-white mb-14 text-center" },
        heading
      ),
      React.createElement(
        "div",
        { className: "space-y-0 divide-y divide-white/10" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            { key: i, className: "py-8" },
            React.createElement(
              "p",
              { className: "text-slate-400 leading-relaxed mb-4 text-lg" },
              `"${item.quote}"`
            ),
            React.createElement(
              "p",
              { className: "text-sm text-white font-medium" },
              `${item.name} \u2014 `,
              React.createElement(
                "span",
                { className: "text-slate-500" },
                `${item.role}, ${item.company}`
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-012  Two Column                                       */
/* ================================================================== */
const Testimonials012: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Hear from Our Customers";
  const subheading =
    (props.subheading as string) ||
    "Thousands of happy users sharing their experiences.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-6xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 gap-6" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all",
            },
            React.createElement(
              "p",
              { className: "text-slate-700 italic leading-relaxed mb-6" },
              `"${item.quote}"`
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-4 pt-6 border-t border-slate-100" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-slate-900" }, item.name),
                React.createElement("p", { className: "text-sm text-slate-500" }, `${item.role}, ${item.company}`)
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-013  With Image                                       */
/* ================================================================== */
const Testimonials013: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Success Stories";
  const subheading =
    (props.subheading as string) ||
    "See the faces behind the feedback.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "space-y-16" },
        ...items.slice(0, 3).map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: `flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10`,
            },
            React.createElement("div", {
              className: "w-full md:w-1/3 aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex-shrink-0",
            }),
            React.createElement(
              "div",
              { className: "flex-1" },
              React.createElement(
                "span",
                { className: "text-6xl text-violet-500/20 font-serif leading-none select-none" },
                "\u201C"
              ),
              React.createElement(
                "p",
                { className: "text-xl text-slate-700 italic leading-relaxed mt-2 mb-6" },
                item.quote
              ),
              React.createElement(
                "div",
                { className: "flex items-center gap-3" },
                React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
                React.createElement(
                  "div",
                  null,
                  React.createElement("p", { className: "font-bold text-slate-900" }, item.name),
                  React.createElement(
                    "p",
                    {
                      className: "text-sm font-medium",
                      style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
                    },
                    `${item.role}, ${item.company}`
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-014  Slider                                           */
/* ================================================================== */
const Testimonials014: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Customer Spotlight";
  const subheading =
    (props.subheading as string) ||
    "Slide through feedback from our amazing customers.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    {
      className: "relative overflow-hidden py-24 sm:py-32",
      style: { background: "linear-gradient(to bottom, #020617, #0f172a)" },
    },
    React.createElement("div", {
      className: "absolute top-1/3 left-0 w-80 h-80 rounded-full blur-3xl",
      style: { background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        {
          className: "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory",
          style: { scrollbarWidth: "none" },
        },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "min-w-[320px] md:min-w-[400px] snap-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 flex-shrink-0 hover:border-white/20 transition-all",
            },
            React.createElement(Stars, {}),
            React.createElement(
              "p",
              { className: "text-slate-300 mt-4 mb-6 leading-relaxed" },
              `"${item.quote}"`
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-3 pt-4 border-t border-white/10" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-white text-sm" }, item.name),
                React.createElement("p", { className: "text-xs text-slate-500" }, `${item.role}, ${item.company}`)
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-015  Masonry                                          */
/* ================================================================== */
const Testimonials015: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Wall of Love";
  const subheading =
    (props.subheading as string) ||
    "A mosaic of kind words from our community.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "break-inside-avoid rounded-2xl bg-slate-50 border border-slate-200 p-6 hover:shadow-md transition-all",
            },
            React.createElement(
              "div",
              { className: "flex gap-0.5 mb-3" },
              ...Array.from({ length: 5 }, (_, si) =>
                React.createElement("span", { key: si, className: "text-amber-400 text-sm" }, "\u2605")
              )
            ),
            React.createElement(
              "p",
              { className: "text-slate-700 leading-relaxed mb-4" },
              `"${item.quote}"`
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-3 pt-4 border-t border-slate-200" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-slate-900 text-sm" }, item.name),
                React.createElement("p", { className: "text-xs text-slate-500" }, `${item.role}, ${item.company}`)
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-016  Dark Theme                                       */
/* ================================================================== */
const Testimonials016: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Trusted by the Best";
  const subheading =
    (props.subheading as string) ||
    "Discover why leading teams choose our platform.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    {
      className: "relative overflow-hidden py-24 sm:py-32",
      style: { background: "linear-gradient(to bottom, #020617, #0f172a)" },
    },
    React.createElement("div", {
      className: "absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl",
      style: { background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-violet-500/30 transition-all",
            },
            React.createElement(Stars, {}),
            React.createElement(
              "p",
              { className: "text-slate-300 mt-4 mb-6 leading-relaxed" },
              `"${item.quote}"`
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-3 pt-4 border-t border-white/10" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-white text-sm" }, item.name),
                React.createElement("p", { className: "text-xs text-slate-500" }, `${item.role}, ${item.company}`)
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-017  With Stats                                       */
/* ================================================================== */
const Testimonials017: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "The Numbers Speak for Themselves";
  const subheading =
    (props.subheading as string) ||
    "Our customers share their results and satisfaction.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    {
      className: "relative overflow-hidden py-24 sm:py-32",
      style: { background: "linear-gradient(to bottom, #020617, #0f172a)" },
    },
    React.createElement("div", {
      className: "absolute bottom-0 left-1/3 w-96 h-96 rounded-full blur-3xl",
      style: { background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" },
        ...[
          { stat: "10,000+", label: "Happy Users" },
          { stat: "4.9/5", label: "Average Rating" },
          { stat: "98%", label: "Satisfaction" },
          { stat: "50+", label: "Countries" },
        ].map((s, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "text-center p-6 rounded-2xl bg-white/5 border border-white/10",
            },
            React.createElement(
              "p",
              {
                className: "text-3xl sm:text-4xl font-bold",
                style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
              },
              s.stat
            ),
            React.createElement("p", { className: "text-sm text-slate-400 mt-2" }, s.label)
          )
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-3 gap-6" },
        ...items.slice(0, 3).map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all",
            },
            React.createElement(Stars, {}),
            React.createElement(
              "p",
              { className: "text-slate-300 mt-4 mb-6 leading-relaxed" },
              `"${item.quote}"`
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-3 pt-4 border-t border-white/10" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-white text-sm" }, item.name),
                React.createElement("p", { className: "text-xs text-slate-500" }, `${item.role}, ${item.company}`)
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-018  Centered                                         */
/* ================================================================== */
const Testimonials018: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Words That Inspire Us";
  const subheading =
    (props.subheading as string) ||
    "Every review motivates us to build something even better.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", {
      className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl",
      style: { background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-2xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-600 leading-relaxed" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "space-y-8" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "rounded-2xl bg-slate-50 border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-all",
            },
            React.createElement(
              "div",
              { className: "flex justify-center mb-4" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "lg" })
            ),
            React.createElement(
              "p",
              { className: "text-slate-700 italic leading-relaxed mb-4" },
              `"${item.quote}"`
            ),
            React.createElement("p", { className: "font-semibold text-slate-900" }, item.name),
            React.createElement(
              "p",
              {
                className: "text-sm font-medium",
                style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
              },
              `${item.role}, ${item.company}`
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-019  Bubble                                           */
/* ================================================================== */
const Testimonials019: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Customer Conversations";
  const subheading =
    (props.subheading as string) ||
    "Direct quotes from people who use our product.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    {
      className: "relative overflow-hidden py-24 sm:py-32",
      style: { background: "linear-gradient(to bottom, #020617, #0f172a)" },
    },
    React.createElement("div", {
      className: "absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl",
      style: { background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            { key: i },
            React.createElement(
              "div",
              {
                className: "rounded-2xl rounded-bl-sm bg-white/5 backdrop-blur-sm border border-white/10 p-6 mb-4 relative hover:border-white/20 transition-all",
              },
              React.createElement(
                "p",
                { className: "text-slate-300 leading-relaxed" },
                item.quote
              ),
              React.createElement("div", {
                className: "absolute bottom-0 left-6 translate-y-full w-0 h-0",
                style: {
                  borderLeft: "12px solid transparent",
                  borderRight: "12px solid transparent",
                  borderTop: "12px solid rgba(255,255,255,0.05)",
                },
              })
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-3 mt-5 ml-4" },
              React.createElement(AvatarPlaceholder, { name: item.name, size: "sm" }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-white text-sm" }, item.name),
                React.createElement("p", { className: "text-xs text-slate-500" }, `${item.role}, ${item.company}`)
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  testimonials-020  Grid 2-Col                                       */
/* ================================================================== */
const Testimonials020: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Real Feedback, Real Results";
  const subheading =
    (props.subheading as string) ||
    "Read genuine reviews from our satisfied customers.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-6xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 gap-6" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "flex gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all",
            },
            React.createElement(AvatarPlaceholder, { name: item.name, size: "md" }),
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "flex items-center gap-2 mb-2" },
                React.createElement("p", { className: "font-semibold text-slate-900" }, item.name),
                React.createElement("span", { className: "text-xs text-slate-300" }, "\u2022"),
                React.createElement("p", { className: "text-sm text-slate-500" }, item.company)
              ),
              React.createElement(
                "p",
                {
                  className: "text-sm font-medium mb-3",
                  style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
                },
                item.role
              ),
              React.createElement(
                "p",
                { className: "text-slate-600 leading-relaxed" },
                `"${item.quote}"`
              )
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  Section Definitions                                                */
/* ------------------------------------------------------------------ */

const defaultProps = {
  heading: "What Our Customers Say",
  subheading: "Trusted by thousands of happy customers worldwide.",
  items: defaultTestimonials,
};

const sections: SectionDefinition[] = [
  {
    id: "testimonials-001",
    category: "testimonials",
    name: "Carousel",
    description: "Single testimonial carousel with navigation arrows and dot indicators.",
    tags: ["testimonials", "carousel", "slider", "review"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials001,
  },
  {
    id: "testimonials-002",
    category: "testimonials",
    name: "Grid 3-Col",
    description: "Three-column testimonial card grid layout.",
    tags: ["testimonials", "grid", "cards", "3-column"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials002,
  },
  {
    id: "testimonials-003",
    category: "testimonials",
    name: "Single Featured",
    description: "Large single featured testimonial with prominent styling.",
    tags: ["testimonials", "featured", "single", "hero"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials003,
  },
  {
    id: "testimonials-004",
    category: "testimonials",
    name: "With Avatar",
    description: "Testimonial cards with circular avatar placeholders.",
    tags: ["testimonials", "avatar", "cards", "photo"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials004,
  },
  {
    id: "testimonials-005",
    category: "testimonials",
    name: "Star Rating",
    description: "Testimonials with five-star rating indicators.",
    tags: ["testimonials", "stars", "rating", "review"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials005,
  },
  {
    id: "testimonials-006",
    category: "testimonials",
    name: "Logo Bar",
    description: "Testimonials accompanied by company logo placeholders.",
    tags: ["testimonials", "logos", "company", "trust"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials006,
  },
  {
    id: "testimonials-007",
    category: "testimonials",
    name: "Video Style",
    description: "Testimonials with video placeholder thumbnails.",
    tags: ["testimonials", "video", "multimedia", "play"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials007,
  },
  {
    id: "testimonials-008",
    category: "testimonials",
    name: "Tweet Style",
    description: "Testimonials styled as social media posts.",
    tags: ["testimonials", "social", "twitter", "tweet"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials008,
  },
  {
    id: "testimonials-009",
    category: "testimonials",
    name: "Card Stack",
    description: "Overlapping stacked card design with depth effect.",
    tags: ["testimonials", "stack", "cards", "layered"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials009,
  },
  {
    id: "testimonials-010",
    category: "testimonials",
    name: "Large Quote",
    description: "Big quotation mark design with prominent typography.",
    tags: ["testimonials", "quote", "typography", "large"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials010,
  },
  {
    id: "testimonials-011",
    category: "testimonials",
    name: "Minimal",
    description: "Clean minimal testimonials with simple dividers.",
    tags: ["testimonials", "minimal", "clean", "simple"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials011,
  },
  {
    id: "testimonials-012",
    category: "testimonials",
    name: "Two Column",
    description: "Two-column testimonial card layout with avatars.",
    tags: ["testimonials", "two-column", "cards", "grid"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials012,
  },
  {
    id: "testimonials-013",
    category: "testimonials",
    name: "With Image",
    description: "Testimonials with alternating side image placeholders.",
    tags: ["testimonials", "image", "photo", "alternating"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials013,
  },
  {
    id: "testimonials-014",
    category: "testimonials",
    name: "Slider",
    description: "Horizontally scrolling testimonial slider with snap points.",
    tags: ["testimonials", "slider", "horizontal", "scroll"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials014,
  },
  {
    id: "testimonials-015",
    category: "testimonials",
    name: "Masonry",
    description: "Pinterest-style masonry grid testimonials.",
    tags: ["testimonials", "masonry", "grid", "pinterest"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials015,
  },
  {
    id: "testimonials-016",
    category: "testimonials",
    name: "Dark Theme",
    description: "Testimonials on dark background with accent borders.",
    tags: ["testimonials", "dark", "theme", "contrast"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials016,
  },
  {
    id: "testimonials-017",
    category: "testimonials",
    name: "With Stats",
    description: "Testimonials paired with satisfaction statistics.",
    tags: ["testimonials", "stats", "numbers", "metrics"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials017,
  },
  {
    id: "testimonials-018",
    category: "testimonials",
    name: "Centered",
    description: "Centered single-column testimonials with avatars.",
    tags: ["testimonials", "centered", "column", "focused"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials018,
  },
  {
    id: "testimonials-019",
    category: "testimonials",
    name: "Bubble",
    description: "Speech bubble styled testimonials with tail indicators.",
    tags: ["testimonials", "bubble", "speech", "chat"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials019,
  },
  {
    id: "testimonials-020",
    category: "testimonials",
    name: "Grid 2-Col",
    description: "Two-column grid with avatar and company details.",
    tags: ["testimonials", "grid", "2-column", "detailed"],
    defaultProps,
    propsSchema: baseSchema,
    component: Testimonials020,
  },
];

registerSections(sections);
