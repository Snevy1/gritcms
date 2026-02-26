// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

interface StatItem {
  value: string;
  label: string;
}

const castItems = (raw: unknown): StatItem[] => {
  if (Array.isArray(raw)) return raw as StatItem[];
  return [];
};

const str = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v : fallback;

/* ------------------------------------------------------------------ */
/*  Default data                                                       */
/* ------------------------------------------------------------------ */

const defaultStats: StatItem[] = [
  { value: "10K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Countries Served" },
  { value: "4.9/5", label: "Customer Rating" },
];

const defaultHeading = "Our Impact in Numbers";
const defaultSubheading = "Measurable results that speak for themselves";

const statsItemFields = [
  { key: "value", label: "Value", type: "text" as const, required: true },
  { key: "label", label: "Label", type: "text" as const, required: true },
];

const baseSchema = [
  { key: "heading", label: "Heading", type: "text" as const, required: true },
  { key: "subheading", label: "Sub-heading", type: "text" as const },
  { key: "items", label: "Stats", type: "items" as const, itemFields: statsItemFields },
];

/* ================================================================== */
/*  stats-001  Counter 4-Col                                           */
/* ================================================================== */
const Stats001: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i, className: "text-center" },
            React.createElement("p", { className: "text-5xl font-bold tracking-tight", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.value),
            React.createElement("div", { className: "w-12 h-0.5 bg-slate-200 mx-auto my-4" }),
            React.createElement("p", { className: "text-slate-600 font-medium" }, s.label),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-002  Counter 3-Col                                           */
/* ================================================================== */
const Stats002: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-5xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8" },
        ...items.slice(0, 3).map((s, i) =>
          React.createElement("div", { key: i, className: "text-center rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all" },
            React.createElement("p", { className: "text-5xl font-bold tracking-tight text-slate-900" }, s.value),
            React.createElement("div", { className: "w-10 h-0.5 mx-auto my-4", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)" } }),
            React.createElement("p", { className: "text-slate-600 font-medium" }, s.label),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-003  With Icons                                              */
/* ================================================================== */
const Stats003: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  const iconSymbols = ["\u2605", "\u2191", "\u2665", "\u2713"];
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i, className: "text-center rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-all" },
            React.createElement("div", { className: "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)", color: "white" } }, iconSymbols[i % iconSymbols.length]),
            React.createElement("p", { className: "text-4xl font-bold text-white tracking-tight" }, s.value),
            React.createElement("p", { className: "mt-2 text-slate-400 text-sm font-medium" }, s.label),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-004  Progress Bars                                           */
/* ================================================================== */
const Stats004: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  const parseWidth = (val: string): string => {
    const num = parseFloat(val.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) return "75%";
    if (num > 100) return "100%";
    return `${num}%`;
  };
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "space-y-10" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i },
            React.createElement("div", { className: "flex justify-between mb-3" },
              React.createElement("span", { className: "text-sm font-semibold text-slate-700" }, s.label),
              React.createElement("span", { className: "text-sm font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.value),
            ),
            React.createElement("div", { className: "h-3 bg-slate-100 rounded-full overflow-hidden" },
              React.createElement("div", { className: "h-full rounded-full transition-all duration-700", style: { width: parseWidth(s.value), backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)" } }),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-005  Comparison                                              */
/* ================================================================== */
const Stats005: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  const pairs: [StatItem, StatItem][] = [];
  for (let i = 0; i < items.length - 1; i += 2) {
    pairs.push([items[i], items[i + 1]]);
  }
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-5xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "space-y-6" },
        ...pairs.map(([a, b], i) =>
          React.createElement("div", { key: i, className: "flex items-center gap-6 rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all" },
            React.createElement("div", { className: "flex-1 text-center" },
              React.createElement("p", { className: "text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold" }, "Before"),
              React.createElement("p", { className: "text-3xl font-bold text-slate-300" }, a.value),
              React.createElement("p", { className: "text-sm text-slate-500 mt-1" }, a.label),
            ),
            React.createElement("div", { className: "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } },
              React.createElement("span", { className: "text-white text-lg" }, "\u2192"),
            ),
            React.createElement("div", { className: "flex-1 text-center" },
              React.createElement("p", { className: "text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold" }, "After"),
              React.createElement("p", { className: "text-3xl font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, b.value),
              React.createElement("p", { className: "text-sm text-slate-600 mt-1" }, b.label),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-006  Milestone Timeline                                      */
/* ================================================================== */
const Stats006: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { className: "mx-auto max-w-5xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "relative" },
        React.createElement("div", { className: "absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" }),
        React.createElement("div", { className: "space-y-16" },
          ...items.map((s, i) =>
            React.createElement("div", { key: i, className: `flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}` },
              React.createElement("div", { className: `flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}` },
                React.createElement("p", { className: "text-4xl font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.value),
                React.createElement("p", { className: "text-slate-400 mt-2" }, s.label),
              ),
              React.createElement("div", { className: "w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10 border-2 border-violet-500/50", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, String(i + 1)),
              React.createElement("div", { className: "flex-1" }),
            )
          ),
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-007  Animated                                                */
/* ================================================================== */
const Stats007: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32", style: { backgroundImage: "linear-gradient(135deg, #7c3aed, #4f46e5, #6366f1)" } },
    React.createElement("div", { className: "absolute inset-0 opacity-10", style: { backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 relative" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-white/70 max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i, className: "text-center" },
            React.createElement("p", { className: "text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tabular-nums tracking-tight" }, s.value),
            React.createElement("p", { className: "mt-3 text-white/60 font-medium text-sm uppercase tracking-wider" }, s.label),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-008  Dark Background                                         */
/* ================================================================== */
const Stats008: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i, className: "text-center rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all" },
            React.createElement("p", { className: "text-4xl font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.value),
            React.createElement("p", { className: "mt-3 text-slate-400 text-sm font-medium" }, s.label),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-009  Card Style                                              */
/* ================================================================== */
const Stats009: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i, className: "rounded-2xl bg-white border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-all group" },
            React.createElement("p", { className: "text-5xl font-bold tracking-tight text-slate-900 group-hover:scale-105 transition-transform" }, s.value),
            React.createElement("div", { className: "w-12 h-0.5 mx-auto my-4", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)" } }),
            React.createElement("p", { className: "text-slate-600 font-medium" }, s.label),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-010  Centered                                                */
/* ================================================================== */
const Stats010: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-4xl px-6 lg:px-8 text-center" },
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
      React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      React.createElement("div", { className: "mt-16 flex flex-wrap justify-center" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i, className: "text-center px-8 sm:px-12 py-4", style: i < items.length - 1 ? { borderRight: "1px solid #e2e8f0" } : {} },
            React.createElement("p", { className: "text-5xl font-bold tracking-tight text-slate-900" }, s.value),
            React.createElement("p", { className: "mt-2 text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.label),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-011  With Description                                        */
/* ================================================================== */
const Stats011: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  const descriptions = [
    "Growing faster than ever before with consistent momentum.",
    "Industry-leading reliability you can count on every day.",
    "Expanding our global reach to serve diverse markets.",
    "Trusted by thousands of satisfied customers worldwide.",
  ];
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i, className: "rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-all" },
            React.createElement("p", { className: "text-4xl font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.value),
            React.createElement("p", { className: "mt-2 text-white font-semibold" }, s.label),
            React.createElement("p", { className: "mt-2 text-slate-500 text-sm leading-relaxed" }, descriptions[i % descriptions.length]),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-012  Gradient                                                */
/* ================================================================== */
const Stats012: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32", style: { backgroundImage: "linear-gradient(135deg, #7c3aed, #4f46e5)" } },
    React.createElement("div", { className: "absolute inset-0 opacity-20", style: { backgroundImage: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 relative" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-white/60 max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i, className: "text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all" },
            React.createElement("p", { className: "text-5xl font-bold text-white tracking-tight" }, s.value),
            React.createElement("p", { className: "mt-3 text-white/60 text-sm font-medium" }, s.label),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-013  Two Column                                              */
/* ================================================================== */
const Stats013: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" },
        React.createElement("div", null,
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, subheading),
        ),
        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          ...items.map((s, i) =>
            React.createElement("div", { key: i, className: "rounded-2xl bg-slate-50 border border-slate-200 p-6 hover:shadow-sm transition-all" },
              React.createElement("p", { className: "text-3xl font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.value),
              React.createElement("p", { className: "mt-2 text-slate-600 text-sm font-medium" }, s.label),
            )
          ),
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-014  Inline                                                  */
/* ================================================================== */
const Stats014: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-16 bg-slate-950" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      heading ? React.createElement("p", { className: "text-center text-sm text-slate-500 mb-8 font-medium uppercase tracking-wider" }, heading) : null,
      React.createElement("div", { className: "flex flex-wrap justify-center items-center" },
        ...items.map((s, i) =>
          React.createElement("div", { key: i, className: "px-8 sm:px-12 py-4 text-center", style: i < items.length - 1 ? { borderRight: "1px solid rgba(255,255,255,0.1)" } : {} },
            React.createElement("span", { className: "text-3xl sm:text-4xl font-bold text-white tracking-tight" }, s.value),
            React.createElement("span", { className: "ml-3 text-slate-500 text-sm font-medium" }, s.label),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  stats-015  With Image                                              */
/* ================================================================== */
const Stats015: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" },
        React.createElement("div", { className: "aspect-[4/3] rounded-2xl overflow-hidden", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } },
          React.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 text-lg font-medium" }, "Image Placeholder"),
        ),
        React.createElement("div", null,
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading),
          React.createElement("div", { className: "mt-10 grid grid-cols-2 gap-8" },
            ...items.map((s, i) =>
              React.createElement("div", { key: i },
                React.createElement("p", { className: "text-3xl font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.value),
                React.createElement("div", { className: "w-8 h-0.5 bg-slate-200 my-2" }),
                React.createElement("p", { className: "text-slate-600 text-sm font-medium" }, s.label),
              )
            ),
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
  items: defaultStats,
};

const statsSections: SectionDefinition[] = [
  {
    id: "stats-001",
    category: "stats",
    name: "Stats Counter 4-Col",
    description: "Four stat counters in a row with large indigo numbers",
    tags: ["stats", "counter", "4-column", "numbers"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats001,
  },
  {
    id: "stats-002",
    category: "stats",
    name: "Stats Counter 3-Col",
    description: "Three stat counters in white cards on gray background",
    tags: ["stats", "counter", "3-column", "cards"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats002,
  },
  {
    id: "stats-003",
    category: "stats",
    name: "Stats With Icons",
    description: "Stats with icon placeholders in indigo-tinted boxes",
    tags: ["stats", "icons", "visual", "numbers"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats003,
  },
  {
    id: "stats-004",
    category: "stats",
    name: "Stats Progress Bars",
    description: "Horizontal progress bars with labels and values",
    tags: ["stats", "progress", "bars", "horizontal"],
    defaultProps: {
      heading: defaultHeading,
      subheading: defaultSubheading,
      items: [
        { value: "95%", label: "Customer Satisfaction" },
        { value: "87%", label: "Revenue Growth" },
        { value: "99%", label: "Uptime Guarantee" },
        { value: "72%", label: "Market Coverage" },
      ],
    },
    propsSchema: baseSchema,
    component: Stats004,
  },
  {
    id: "stats-005",
    category: "stats",
    name: "Stats Comparison",
    description: "Before and after comparison stats shown side by side",
    tags: ["stats", "comparison", "before-after", "pairs"],
    defaultProps: {
      heading: defaultHeading,
      subheading: defaultSubheading,
      items: [
        { value: "2.1s", label: "Page Load Time" },
        { value: "0.4s", label: "Page Load Time" },
        { value: "45%", label: "Conversion Rate" },
        { value: "78%", label: "Conversion Rate" },
      ],
    },
    propsSchema: baseSchema,
    component: Stats005,
  },
  {
    id: "stats-006",
    category: "stats",
    name: "Stats Milestone Timeline",
    description: "Stats displayed along a vertical timeline with numbered milestones",
    tags: ["stats", "timeline", "milestones", "vertical"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats006,
  },
  {
    id: "stats-007",
    category: "stats",
    name: "Stats Animated",
    description: "Large animated-style numbers on indigo background",
    tags: ["stats", "animated", "large", "bold"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats007,
  },
  {
    id: "stats-008",
    category: "stats",
    name: "Stats Dark Background",
    description: "Dark themed stats with indigo accents and bordered cards",
    tags: ["stats", "dark", "theme", "night"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats008,
  },
  {
    id: "stats-009",
    category: "stats",
    name: "Stats Card Style",
    description: "Stats in individual white cards with divider accents",
    tags: ["stats", "cards", "individual", "clean"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats009,
  },
  {
    id: "stats-010",
    category: "stats",
    name: "Stats Centered",
    description: "Centered stat display with large numbers and indigo labels",
    tags: ["stats", "centered", "large", "simple"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats010,
  },
  {
    id: "stats-011",
    category: "stats",
    name: "Stats With Description",
    description: "Stats with descriptive text below each metric",
    tags: ["stats", "description", "text", "detailed"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats011,
  },
  {
    id: "stats-012",
    category: "stats",
    name: "Stats Gradient",
    description: "Gradient background stats with glass-morphism cards",
    tags: ["stats", "gradient", "colorful", "modern"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats012,
  },
  {
    id: "stats-013",
    category: "stats",
    name: "Stats Two Column",
    description: "Two column layout with heading on left and stats grid on right",
    tags: ["stats", "two-column", "asymmetric", "layout"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats013,
  },
  {
    id: "stats-014",
    category: "stats",
    name: "Stats Inline",
    description: "Inline horizontal stats bar with dividers between items",
    tags: ["stats", "inline", "horizontal", "compact"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats014,
  },
  {
    id: "stats-015",
    category: "stats",
    name: "Stats With Image",
    description: "Stats next to an image placeholder in a two-column layout",
    tags: ["stats", "image", "visual", "two-column"],
    defaultProps,
    propsSchema: baseSchema,
    component: Stats015,
  },
];

registerSections(statsSections);
