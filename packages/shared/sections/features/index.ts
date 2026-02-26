// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ============================================================
   Shared item-field schemas used across most features sections
   ============================================================ */

const basicItemFields = [
  { key: "title", label: "Title", type: "text" as const },
  { key: "description", label: "Description", type: "textarea" as const },
];

const iconItemFields = [
  { key: "title", label: "Title", type: "text" as const },
  { key: "description", label: "Description", type: "textarea" as const },
  { key: "icon", label: "Icon", type: "text" as const },
];

const numberedItemFields = [
  { key: "number", label: "Number", type: "text" as const },
  { key: "title", label: "Title", type: "text" as const },
  { key: "description", label: "Description", type: "textarea" as const },
];

const statItemFields = [
  { key: "title", label: "Title", type: "text" as const },
  { key: "description", label: "Description", type: "textarea" as const },
  { key: "stat", label: "Stat Value", type: "text" as const },
  { key: "statLabel", label: "Stat Label", type: "text" as const },
];

const headingSubheadingSchema = [
  { key: "heading", label: "Heading", type: "text" as const, required: true },
  { key: "subheading", label: "Subheading", type: "textarea" as const },
];

/* ============================================================
   Helper: default 3-item feature set
   ============================================================ */

const defaultFeatures3 = [
  { title: "Fast Performance", description: "Lightning-fast load times ensure your visitors never wait. Optimized for speed at every layer." },
  { title: "Easy to Use", description: "An intuitive interface that anyone on your team can master in minutes, not hours." },
  { title: "Secure by Default", description: "Enterprise-grade security with encryption, backups, and compliance built right in." },
];

const defaultFeatures4 = [
  ...defaultFeatures3,
  { title: "24/7 Support", description: "Our dedicated support team is always ready to help you succeed, around the clock." },
];

const defaultFeatures6 = [
  ...defaultFeatures4,
  { title: "Analytics", description: "Deep insights into your audience with real-time dashboards and custom reports." },
  { title: "Integrations", description: "Connect with hundreds of tools you already use through our powerful API." },
];

const featureIcons = ["\u26A1", "\u2728", "\u26E8\uFE0F", "\u23F0", "\u2728", "\u26A1"];

/* ============================================================
   features-001  Icon Grid 3-Col
   ============================================================ */

const Features001: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Everything you need";
  const subheading = (props.subheading as string) || "Our platform provides all the tools you need to build, launch, and grow.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures3;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { style: { position: "absolute", top: "-200px", right: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Features"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "text-center group" },
            React.createElement("div", { className: "mx-auto h-14 w-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-5 group-hover:from-violet-500/30 group-hover:to-indigo-500/30 transition-all duration-300" },
              React.createElement("span", { className: "text-xl" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-lg font-semibold text-slate-900" }, item.title),
            React.createElement("p", { className: "mt-3 text-slate-600 leading-relaxed" }, item.description),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-002  Icon Grid 4-Col
   ============================================================ */

const Features002: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Built for modern teams";
  const subheading = (props.subheading as string) || "A comprehensive suite of features designed to streamline your workflow.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { style: { position: "absolute", bottom: "-300px", left: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Platform"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md hover:border-violet-200 transition-all duration-300" },
            React.createElement("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-5 group-hover:from-violet-500/30 group-hover:to-indigo-500/30 transition-all duration-300" },
              React.createElement("span", { className: "text-lg" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-base font-semibold text-slate-900" }, item.title),
            React.createElement("p", { className: "mt-2 text-sm text-slate-600 leading-relaxed" }, item.description),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-003  Card Grid
   ============================================================ */

const Features003: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Powerful features";
  const subheading = (props.subheading as string) || "Everything you need to take your business to the next level.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures6;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { style: { position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all duration-300" },
            React.createElement("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" },
              React.createElement("span", { className: "text-lg" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-lg font-semibold text-slate-900" }, item.title),
            React.createElement("p", { className: "mt-3 text-slate-600 leading-relaxed" }, item.description),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-004  Alternating Image
   ============================================================ */

const Features004: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "How it works";
  const subheading = (props.subheading as string) || "A simple three-step process to get you started.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures3;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "1000px", height: "1000px", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-20" },
        React.createElement("div", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" }, "How It Works"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "space-y-24" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: `flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 lg:gap-20` },
            React.createElement("div", { className: "flex-1" },
              React.createElement("div", { className: "aspect-video w-full rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-white/10 flex items-center justify-center" },
                React.createElement("div", { className: "h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500/30 to-indigo-500/30 flex items-center justify-center" },
                  React.createElement("span", { className: "text-3xl" }, featureIcons[i % featureIcons.length]),
                ),
              ),
            ),
            React.createElement("div", { className: "flex-1" },
              React.createElement("div", { className: "inline-flex items-center justify-center h-10 w-10 rounded-full bg-violet-600 text-white font-bold text-sm mb-6" }, String(i + 1)),
              React.createElement("h3", { className: "text-2xl font-bold text-white" }, item.title),
              React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed" }, item.description),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-005  Bento Grid
   ============================================================ */

const Features005: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "All-in-one platform";
  const subheading = (props.subheading as string) || "A unified workspace with every tool you need.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  const sizeClasses = ["md:col-span-2 md:row-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { style: { position: "absolute", top: "-200px", right: "-100px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { style: { position: "absolute", bottom: "-200px", left: "-100px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" }, "Platform"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: `group rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all duration-300 ${sizeClasses[i % sizeClasses.length]}` },
            React.createElement("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-5" },
              React.createElement("span", { className: "text-xl" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-lg font-semibold text-white" }, item.title),
            React.createElement("p", { className: "mt-3 text-slate-400 leading-relaxed" }, item.description),
            i === 0 && React.createElement("div", { className: "mt-6 aspect-video w-full rounded-xl bg-gradient-to-br from-violet-500/5 to-indigo-500/5 border border-white/5" }),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-006  Comparison
   ============================================================ */

const Features006: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Why choose us?";
  const subheading = (props.subheading as string) || "See how we compare to the competition.";
  const leftTitle = (props.leftTitle as string) || "Our Platform";
  const rightTitle = (props.rightTitle as string) || "Others";
  const items = (props.items as Array<{ title: string; description: string }>) || [
    { title: "Unlimited bandwidth", description: "No hidden limits or throttling on any plan." },
    { title: "Built-in analytics", description: "Detailed insights without third-party tools." },
    { title: "Priority support", description: "Get help from real humans within the hour." },
    { title: "No vendor lock-in", description: "Export your data at any time, no questions asked." },
  ];

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-5xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Comparison"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
        React.createElement("div", { className: "rounded-2xl border-2 border-violet-500 bg-violet-50/50 p-8 shadow-lg shadow-violet-500/10" },
          React.createElement("div", { className: "flex items-center gap-3 mb-8" },
            React.createElement("div", { className: "h-10 w-10 rounded-xl bg-violet-600 flex items-center justify-center" },
              React.createElement("span", { className: "text-white text-lg" }, "\u2713"),
            ),
            React.createElement("h3", { className: "text-xl font-bold text-violet-700" }, leftTitle),
          ),
          items.map((item: any, i: number) =>
            React.createElement("div", { key: i, className: "flex items-start gap-3 mb-5 last:mb-0" },
              React.createElement("div", { className: "mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center" },
                React.createElement("span", { className: "text-emerald-600 text-xs font-bold" }, "\u2713"),
              ),
              React.createElement("div", null,
                React.createElement("p", { className: "font-semibold text-slate-900" }, item.title),
                React.createElement("p", { className: "text-sm text-slate-600" }, item.description),
              ),
            ),
          ),
        ),
        React.createElement("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-8" },
          React.createElement("div", { className: "flex items-center gap-3 mb-8" },
            React.createElement("div", { className: "h-10 w-10 rounded-xl bg-slate-300 flex items-center justify-center" },
              React.createElement("span", { className: "text-slate-500 text-lg" }, "\u2212"),
            ),
            React.createElement("h3", { className: "text-xl font-bold text-slate-400" }, rightTitle),
          ),
          items.map((_: any, i: number) =>
            React.createElement("div", { key: i, className: "flex items-start gap-3 mb-5 last:mb-0" },
              React.createElement("div", { className: "mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-slate-200 flex items-center justify-center" },
                React.createElement("span", { className: "text-slate-400 text-xs" }, "\u2212"),
              ),
              React.createElement("div", null,
                React.createElement("p", { className: "font-semibold text-slate-400" }, "Limited"),
                React.createElement("p", { className: "text-sm text-slate-400" }, "Varies by plan or not available."),
              ),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-007  Timeline
   ============================================================ */

const Features007: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Your journey with us";
  const subheading = (props.subheading as string) || "From sign-up to success in four simple stages.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { style: { position: "absolute", top: "50%", left: "-200px", transform: "translateY(-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" }, "Journey"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed" }, subheading),
      ),
      React.createElement("div", { className: "relative" },
        React.createElement("div", { className: "absolute left-6 top-0 bottom-0 w-px", style: { background: "linear-gradient(to bottom, rgba(139,92,246,0.5), rgba(99,102,241,0.2))" } }),
        React.createElement("div", { className: "space-y-12" },
          items.map((item: any, i: number) =>
            React.createElement("div", { key: i, className: "relative flex gap-6" },
              React.createElement("div", { className: "flex-shrink-0 relative z-10 h-12 w-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/25" }, String(i + 1)),
              React.createElement("div", { className: "pt-2" },
                React.createElement("h3", { className: "text-lg font-semibold text-white" }, item.title),
                React.createElement("p", { className: "mt-2 text-slate-400 leading-relaxed" }, item.description),
              ),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-008  Minimal List
   ============================================================ */

const Features008: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "What we offer";
  const subheading = (props.subheading as string) || "Clean, focused features for discerning teams.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement("div", { className: "mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Features"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, subheading),
      ),
      React.createElement("div", { className: "divide-y divide-slate-100" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group py-8 flex gap-5 items-start" },
            React.createElement("div", { className: "flex-shrink-0 h-2 w-2 rounded-full bg-violet-500 mt-3" }),
            React.createElement("div", null,
              React.createElement("h3", { className: "text-lg font-semibold text-slate-900 group-hover:text-violet-700 transition-colors duration-200" }, item.title),
              React.createElement("p", { className: "mt-2 text-slate-600 leading-relaxed" }, item.description),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-009  Tabs Layout
   ============================================================ */

const Features009: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Explore our features";
  const subheading = (props.subheading as string) || "Click on any tab to learn more about what we offer.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-5xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "flex flex-wrap gap-2 mb-8 justify-center" },
        items.map((item: any, i: number) =>
          React.createElement("button", { key: i, className: `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${i === 0 ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25" : "bg-white text-slate-600 hover:bg-violet-50 hover:text-violet-700 border border-slate-200"}` }, item.title),
        ),
      ),
      React.createElement("div", { className: "rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm" },
        React.createElement("div", { className: "flex flex-col md:flex-row gap-8 items-center" },
          React.createElement("div", { className: "flex-1" },
            React.createElement("h3", { className: "text-2xl font-bold text-slate-900" }, items[0]?.title || "Feature"),
            React.createElement("p", { className: "mt-4 text-slate-600 leading-relaxed text-lg" }, items[0]?.description || "Description"),
            React.createElement("div", { className: "mt-6" },
              React.createElement("a", { href: "#", className: "inline-flex items-center text-violet-600 font-semibold hover:text-violet-700 transition-colors" }, "Learn more \u2192"),
            ),
          ),
          React.createElement("div", { className: "flex-1" },
            React.createElement("div", { className: "aspect-video w-full rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center" },
              React.createElement("span", { className: "text-4xl" }, featureIcons[0]),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-010  Large Icons
   ============================================================ */

const Features010: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Core capabilities";
  const subheading = (props.subheading as string) || "Big features deserve big icons.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures3;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { style: { position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "1000px", height: "600px", background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "text-center group" },
            React.createElement("div", { className: "mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center mb-8 shadow-xl shadow-violet-500/20 group-hover:shadow-violet-500/40 group-hover:scale-105 transition-all duration-300" },
              React.createElement("span", { className: "text-4xl" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-xl font-bold text-white" }, item.title),
            React.createElement("p", { className: "mt-3 text-slate-400 leading-relaxed" }, item.description),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-011  Centered Stack
   ============================================================ */

const Features011: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Why teams love us";
  const subheading = (props.subheading as string) || "Simple tools that make a real difference.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { style: { position: "absolute", top: "-200px", right: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-2xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, subheading),
      ),
      React.createElement("div", { className: "space-y-12" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "text-center group" },
            React.createElement("div", { className: "mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500/15 to-indigo-500/15 flex items-center justify-center mb-5 group-hover:from-violet-500/25 group-hover:to-indigo-500/25 transition-all duration-300" },
              React.createElement("span", { className: "text-xl" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-xl font-semibold text-slate-900" }, item.title),
            React.createElement("p", { className: "mt-3 text-slate-600 max-w-lg mx-auto leading-relaxed" }, item.description),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-012  Side by Side
   ============================================================ */

const Features012: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Everything in one place";
  const subheading = (props.subheading as string) || "Manage your entire workflow from a single dashboard.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "flex flex-col lg:flex-row gap-16 items-center" },
        React.createElement("div", { className: "flex-1" },
          React.createElement("div", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Dashboard"),
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, subheading),
          React.createElement("div", { className: "mt-10 space-y-6" },
            items.map((item: any, i: number) =>
              React.createElement("div", { key: i, className: "group flex gap-4 rounded-xl p-4 -ml-4 hover:bg-white hover:shadow-sm transition-all duration-300" },
                React.createElement("div", { className: "flex-shrink-0 h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center" },
                  React.createElement("span", { className: "text-lg" }, featureIcons[i % featureIcons.length]),
                ),
                React.createElement("div", null,
                  React.createElement("h3", { className: "text-base font-semibold text-slate-900" }, item.title),
                  React.createElement("p", { className: "mt-1 text-slate-600 leading-relaxed" }, item.description),
                ),
              ),
            ),
          ),
        ),
        React.createElement("div", { className: "flex-1 w-full" },
          React.createElement("div", { className: "aspect-square rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 border border-violet-200/50 flex items-center justify-center shadow-lg" },
            React.createElement("div", { className: "h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-xl" },
              React.createElement("span", { className: "text-4xl" }, "\u2728"),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-013  Zigzag
   ============================================================ */

const Features013: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Built for scale";
  const subheading = (props.subheading as string) || "From startup to enterprise, we grow with you.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures3;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-20" },
        React.createElement("div", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Scale"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "space-y-0" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: `py-16 ${i % 2 === 0 ? "bg-slate-50" : "bg-white"} -mx-6 px-6 rounded-3xl` },
            React.createElement("div", { className: `mx-auto max-w-7xl flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12` },
              React.createElement("div", { className: "flex-1" },
                React.createElement("div", { className: "aspect-video w-full rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 border border-violet-200/50 flex items-center justify-center" },
                  React.createElement("span", { className: "text-4xl" }, featureIcons[i % featureIcons.length]),
                ),
              ),
              React.createElement("div", { className: "flex-1 max-w-lg" },
                React.createElement("div", { className: "inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold text-sm mb-6 shadow-lg shadow-violet-500/25" }, String(i + 1).padStart(2, "0")),
                React.createElement("h3", { className: "text-2xl font-bold text-slate-900" }, item.title),
                React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, item.description),
              ),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-014  Hover Cards
   ============================================================ */

const Features014: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Feature highlights";
  const subheading = (props.subheading as string) || "Hover over each card to learn more.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures6;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { style: { position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "1000px", height: "600px", background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" }, "Highlights"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-violet-600 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 cursor-pointer" },
            React.createElement("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 group-hover:from-white/20 group-hover:to-white/10 flex items-center justify-center mb-5 transition-all duration-300" },
              React.createElement("span", { className: "text-xl" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-lg font-semibold text-white" }, item.title),
            React.createElement("p", { className: "mt-3 text-slate-400 group-hover:text-violet-100 leading-relaxed transition-colors duration-300" }, item.description),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-015  Numbered
   ============================================================ */

const Features015: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "How it works";
  const subheading = (props.subheading as string) || "Follow these simple steps to get started.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { style: { position: "absolute", bottom: "-200px", right: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Process"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, subheading),
      ),
      React.createElement("div", { className: "space-y-8" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group flex gap-6 items-start rounded-2xl p-6 hover:bg-slate-50 transition-all duration-300" },
            React.createElement("div", { className: "flex-shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20" },
              React.createElement("span", { className: "text-xl font-bold text-white", style: { fontVariantNumeric: "tabular-nums" } }, String(i + 1).padStart(2, "0")),
            ),
            React.createElement("div", { className: "pt-1" },
              React.createElement("h3", { className: "text-lg font-semibold text-slate-900" }, item.title),
              React.createElement("p", { className: "mt-2 text-slate-600 leading-relaxed" }, item.description),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-016  With Screenshot
   ============================================================ */

const Features016: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "See it in action";
  const subheading = (props.subheading as string) || "Our intuitive dashboard puts everything at your fingertips.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures3;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { style: { position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "1200px", height: "600px", background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-12" },
        React.createElement("div", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" }, "Product"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "mb-20" },
        React.createElement("div", { className: "aspect-video w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-white/10 shadow-2xl flex items-center justify-center" },
          React.createElement("div", { className: "h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500/30 to-indigo-500/30 flex items-center justify-center" },
            React.createElement("span", { className: "text-3xl" }, "\u2728"),
          ),
        ),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "text-center" },
            React.createElement("div", { className: "mx-auto h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-4" },
              React.createElement("span", { className: "text-lg" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-base font-semibold text-white" }, item.title),
            React.createElement("p", { className: "mt-2 text-sm text-slate-400 leading-relaxed" }, item.description),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-017  Masonry
   ============================================================ */

const Features017: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Feature overview";
  const subheading = (props.subheading as string) || "A mosaic of capabilities designed for modern teams.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures6;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: `break-inside-avoid group rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-lg hover:border-violet-200 transition-all duration-300 ${i % 3 === 0 ? "pb-16" : i % 3 === 1 ? "pb-12" : "pb-8"}` },
            React.createElement("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/15 to-indigo-500/15 flex items-center justify-center mb-5 group-hover:from-violet-500/25 group-hover:to-indigo-500/25 transition-all duration-300" },
              React.createElement("span", { className: "text-lg" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-lg font-semibold text-slate-900" }, item.title),
            React.createElement("p", { className: "mt-3 text-slate-600 leading-relaxed" }, item.description),
            i % 2 === 0 && React.createElement("div", { className: "mt-5 h-32 w-full rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100" }),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-018  Gradient Cards
   ============================================================ */

const Features018: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Premium features";
  const subheading = (props.subheading as string) || "Beautiful design meets powerful functionality.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures3;

  const gradients = [
    "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)",
    "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
    "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
    "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
  ];

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { style: { position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "1000px", height: "600px", background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" }, "Premium"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl", style: { background: gradients[i % gradients.length] } },
            React.createElement("div", { className: "h-14 w-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6" },
              React.createElement("span", { className: "text-2xl" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-xl font-bold" }, item.title),
            React.createElement("p", { className: "mt-3 text-white/80 leading-relaxed" }, item.description),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-019  Icon Left
   ============================================================ */

const Features019: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "What sets us apart";
  const subheading = (props.subheading as string) || "Features that make a real difference.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { style: { position: "absolute", top: "-200px", right: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group flex gap-5 rounded-2xl p-5 -mx-5 hover:bg-slate-50 transition-all duration-300" },
            React.createElement("div", { className: "flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/30 transition-all duration-300" },
              React.createElement("span", { className: "text-lg" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("div", null,
              React.createElement("h3", { className: "text-base font-semibold text-slate-900" }, item.title),
              React.createElement("p", { className: "mt-2 text-slate-600 leading-relaxed" }, item.description),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-020  Stats Combo
   ============================================================ */

const Features020: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Proven results";
  const subheading = (props.subheading as string) || "Features backed by real numbers.";
  const items = (props.items as Array<{ title: string; description: string; stat: string; statLabel: string }>) || [
    { title: "Fast Performance", description: "Optimized for speed at every layer.", stat: "99.9%", statLabel: "Uptime" },
    { title: "Global Scale", description: "Serve customers across the world.", stat: "150+", statLabel: "Countries" },
    { title: "Trusted by Teams", description: "Organizations rely on us every day.", stat: "10K+", statLabel: "Customers" },
  ];

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-violet-600 to-indigo-700" },
    React.createElement("div", { style: { position: "absolute", top: "-200px", right: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { style: { position: "absolute", bottom: "-200px", left: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-violet-200 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-white/15 transition-all duration-300" },
            React.createElement("div", { className: "text-5xl font-extrabold text-white mb-1" }, item.stat || "99%"),
            React.createElement("p", { className: "text-sm text-violet-200 mb-6 font-medium uppercase tracking-wider" }, item.statLabel || "Metric"),
            React.createElement("div", { className: "h-px w-12 bg-white/20 mx-auto mb-6" }),
            React.createElement("h3", { className: "text-lg font-semibold text-white" }, item.title),
            React.createElement("p", { className: "mt-2 text-violet-200 leading-relaxed" }, item.description),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-021  Checklist
   ============================================================ */

const Features021: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Everything included";
  const subheading = (props.subheading as string) || "No hidden costs, no surprises. Here is what you get.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures6;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-6" }, "All Included"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group flex gap-4 items-start bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-200 hover:shadow-md transition-all duration-300" },
            React.createElement("div", { className: "flex-shrink-0 h-7 w-7 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5" },
              React.createElement("span", { className: "text-emerald-600 text-sm font-bold" }, "\u2713"),
            ),
            React.createElement("div", null,
              React.createElement("h3", { className: "text-base font-semibold text-slate-900" }, item.title),
              React.createElement("p", { className: "mt-1 text-sm text-slate-600 leading-relaxed" }, item.description),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-022  Three Row
   ============================================================ */

const Features022: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Complete toolkit";
  const subheading = (props.subheading as string) || "Three pillars of our platform.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures3;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { style: { position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "1200px", height: "400px", background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 mb-16" },
      React.createElement("div", { className: "text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
    ),
    React.createElement("div", { className: "space-y-0" },
      items.map((item: any, i: number) =>
        React.createElement("div", { key: i, className: `py-16 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}` },
          React.createElement("div", { className: "mx-auto max-w-5xl px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10" },
            React.createElement("div", { className: "flex-shrink-0 h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-violet-500/20" },
              React.createElement("span", { className: "text-3xl" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("div", null,
              React.createElement("h3", { className: "text-2xl font-bold text-white" }, item.title),
              React.createElement("p", { className: "mt-3 text-lg text-slate-400 leading-relaxed" }, item.description),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-023  Grid with Header
   ============================================================ */

const Features023: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "A better way to work";
  const subheading = (props.subheading as string) || "Six essential features that power thousands of businesses worldwide.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures6;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "flex flex-col lg:flex-row gap-16 mb-0" },
        React.createElement("div", { className: "lg:w-1/3 lg:sticky lg:top-24 lg:self-start" },
          React.createElement("div", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Features"),
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, subheading),
        ),
        React.createElement("div", { className: "lg:w-2/3" },
          React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10" },
            items.map((item: any, i: number) =>
              React.createElement("div", { key: i, className: "group" },
                React.createElement("div", { className: "h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500/15 to-indigo-500/15 flex items-center justify-center mb-4 group-hover:from-violet-500/25 group-hover:to-indigo-500/25 transition-all duration-300" },
                  React.createElement("span", { className: "text-lg" }, featureIcons[i % featureIcons.length]),
                ),
                React.createElement("h3", { className: "text-base font-semibold text-slate-900" }, item.title),
                React.createElement("p", { className: "mt-2 text-slate-600 leading-relaxed" }, item.description),
              ),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-024  Expandable (Accordion)
   ============================================================ */

const Features024: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Feature details";
  const subheading = (props.subheading as string) || "Click each item to learn more about our capabilities.";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures4;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { style: { position: "absolute", top: "-200px", right: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" }, "Details"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed" }, subheading),
      ),
      React.createElement("div", { className: "space-y-4" },
        items.map((item: any, i: number) =>
          React.createElement("details", { key: i, className: "group rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300", open: i === 0 },
            React.createElement("summary", { className: "flex items-center justify-between cursor-pointer px-8 py-6 text-lg font-semibold text-white select-none" },
              React.createElement("span", { className: "flex items-center gap-4" },
                React.createElement("span", { className: "flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center" },
                  React.createElement("span", { className: "text-lg" }, featureIcons[i % featureIcons.length]),
                ),
                item.title,
              ),
              React.createElement("span", { className: "ml-4 text-slate-500 group-open:rotate-180 transition-transform duration-300 text-sm" }, "\u25BC"),
            ),
            React.createElement("div", { className: "px-8 pb-8 pt-0" },
              React.createElement("p", { className: "text-slate-400 leading-relaxed pl-14" }, item.description),
            ),
          ),
        ),
      ),
    ),
  );
};

/* ============================================================
   features-025  With CTA
   ============================================================ */

const Features025: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Ready to get started?";
  const subheading = (props.subheading as string) || "Discover the features that make our platform the best choice.";
  const ctaText = (props.ctaText as string) || "Start free trial";
  const ctaUrl = (props.ctaUrl as string) || "#";
  const items = (props.items as Array<{ title: string; description: string }>) || defaultFeatures6;

  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { style: { position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", width: "1200px", height: "600px", background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)", pointerEvents: "none" } }),
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("div", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Get Started"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" },
        items.map((item: any, i: number) =>
          React.createElement("div", { key: i, className: "group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300" },
            React.createElement("div", { className: "h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500/15 to-indigo-500/15 flex items-center justify-center mb-5 group-hover:from-violet-500/25 group-hover:to-indigo-500/25 transition-all duration-300" },
              React.createElement("span", { className: "text-lg" }, featureIcons[i % featureIcons.length]),
            ),
            React.createElement("h3", { className: "text-base font-semibold text-slate-900" }, item.title),
            React.createElement("p", { className: "mt-2 text-slate-600 leading-relaxed" }, item.description),
          ),
        ),
      ),
      React.createElement("div", { className: "relative text-center rounded-2xl overflow-hidden py-16 px-8" },
        React.createElement("div", { style: { position: "absolute", inset: "0", background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #4f46e5 100%)", zIndex: "0" } }),
        React.createElement("div", { style: { position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", pointerEvents: "none", zIndex: "1" } }),
        React.createElement("div", { style: { position: "relative", zIndex: "2" } },
          React.createElement("h3", { className: "text-2xl font-bold text-white mb-4" }, "Start building today"),
          React.createElement("p", { className: "text-violet-200 mb-8 max-w-lg mx-auto leading-relaxed" }, "Join thousands of teams who ship faster with our platform."),
          React.createElement("a", { href: ctaUrl, className: "inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-violet-700 hover:bg-violet-50 transition-all duration-300 shadow-lg" }, ctaText),
        ),
      ),
    ),
  );
};

/* ============================================================
   Section definitions
   ============================================================ */

const featureSections: SectionDefinition[] = [
  // features-001
  {
    id: "features-001",
    category: "features",
    name: "Icon Grid 3-Col",
    description: "Three-column grid with icon placeholders, titles, and descriptions.",
    tags: ["features", "grid", "icons", "three-column", "minimal"],
    defaultProps: {
      heading: "Everything you need",
      subheading: "Our platform provides all the tools you need to build, launch, and grow.",
      items: defaultFeatures3,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features001,
  },
  // features-002
  {
    id: "features-002",
    category: "features",
    name: "Icon Grid 4-Col",
    description: "Four-column icon grid for showcasing many features compactly.",
    tags: ["features", "grid", "icons", "four-column"],
    defaultProps: {
      heading: "Built for modern teams",
      subheading: "A comprehensive suite of features designed to streamline your workflow.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features002,
  },
  // features-003
  {
    id: "features-003",
    category: "features",
    name: "Card Grid",
    description: "Feature cards with shadows and borders in a responsive grid.",
    tags: ["features", "cards", "grid", "shadow", "border"],
    defaultProps: {
      heading: "Powerful features",
      subheading: "Everything you need to take your business to the next level.",
      items: defaultFeatures6,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features003,
  },
  // features-004
  {
    id: "features-004",
    category: "features",
    name: "Alternating Image",
    description: "Alternating left/right image and text rows for storytelling.",
    tags: ["features", "alternating", "image", "storytelling", "visual"],
    defaultProps: {
      heading: "How it works",
      subheading: "A simple three-step process to get you started.",
      items: defaultFeatures3,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features004,
  },
  // features-005
  {
    id: "features-005",
    category: "features",
    name: "Bento Grid",
    description: "Modern bento-box style layout with mixed card sizes on a dark background.",
    tags: ["features", "bento", "grid", "dark", "modern"],
    defaultProps: {
      heading: "All-in-one platform",
      subheading: "A unified workspace with every tool you need.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features005,
  },
  // features-006
  {
    id: "features-006",
    category: "features",
    name: "Comparison",
    description: "Two-column comparison layout highlighting your advantages.",
    tags: ["features", "comparison", "versus", "two-column"],
    defaultProps: {
      heading: "Why choose us?",
      subheading: "See how we compare to the competition.",
      leftTitle: "Our Platform",
      rightTitle: "Others",
      items: [
        { title: "Unlimited bandwidth", description: "No hidden limits or throttling on any plan." },
        { title: "Built-in analytics", description: "Detailed insights without third-party tools." },
        { title: "Priority support", description: "Get help from real humans within the hour." },
        { title: "No vendor lock-in", description: "Export your data at any time, no questions asked." },
      ],
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "leftTitle", label: "Left Column Title", type: "text" },
      { key: "rightTitle", label: "Right Column Title", type: "text" },
      { key: "items", label: "Comparison Points", type: "items", itemFields: basicItemFields },
    ],
    component: Features006,
  },
  // features-007
  {
    id: "features-007",
    category: "features",
    name: "Timeline",
    description: "Vertical timeline with features displayed along a connecting line.",
    tags: ["features", "timeline", "vertical", "steps", "process"],
    defaultProps: {
      heading: "Your journey with us",
      subheading: "From sign-up to success in four simple stages.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Timeline Steps", type: "items", itemFields: basicItemFields },
    ],
    component: Features007,
  },
  // features-008
  {
    id: "features-008",
    category: "features",
    name: "Minimal List",
    description: "Clean, minimal list with dividers and descriptions.",
    tags: ["features", "list", "minimal", "clean", "simple"],
    defaultProps: {
      heading: "What we offer",
      subheading: "Clean, focused features for discerning teams.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features008,
  },
  // features-009
  {
    id: "features-009",
    category: "features",
    name: "Tabs Layout",
    description: "Tabbed interface showing different features with preview area.",
    tags: ["features", "tabs", "interactive", "preview"],
    defaultProps: {
      heading: "Explore our features",
      subheading: "Click on any tab to learn more about what we offer.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Tab Items", type: "items", itemFields: basicItemFields },
    ],
    component: Features009,
  },
  // features-010
  {
    id: "features-010",
    category: "features",
    name: "Large Icons",
    description: "Oversized icon blocks with text on a tinted background.",
    tags: ["features", "icons", "large", "bold", "visual"],
    defaultProps: {
      heading: "Core capabilities",
      subheading: "Big features deserve big icons.",
      items: defaultFeatures3,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features010,
  },
  // features-011
  {
    id: "features-011",
    category: "features",
    name: "Centered Stack",
    description: "Vertically stacked centered features with circular icons.",
    tags: ["features", "centered", "stack", "vertical", "clean"],
    defaultProps: {
      heading: "Why teams love us",
      subheading: "Simple tools that make a real difference.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features011,
  },
  // features-012
  {
    id: "features-012",
    category: "features",
    name: "Side by Side",
    description: "Feature list on one side with a large image on the other.",
    tags: ["features", "side-by-side", "image", "list", "split"],
    defaultProps: {
      heading: "Everything in one place",
      subheading: "Manage your entire workflow from a single dashboard.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features012,
  },
  // features-013
  {
    id: "features-013",
    category: "features",
    name: "Zigzag",
    description: "Alternating full-width rows with numbered features.",
    tags: ["features", "zigzag", "alternating", "full-width", "numbered"],
    defaultProps: {
      heading: "Built for scale",
      subheading: "From startup to enterprise, we grow with you.",
      items: defaultFeatures3,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features013,
  },
  // features-014
  {
    id: "features-014",
    category: "features",
    name: "Hover Cards",
    description: "Dark cards with vibrant hover effects on a dark background.",
    tags: ["features", "hover", "cards", "dark", "interactive", "animated"],
    defaultProps: {
      heading: "Feature highlights",
      subheading: "Hover over each card to learn more.",
      items: defaultFeatures6,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features014,
  },
  // features-015
  {
    id: "features-015",
    category: "features",
    name: "Numbered",
    description: "Numbered feature list with large zero-padded step numbers.",
    tags: ["features", "numbered", "steps", "process", "list"],
    defaultProps: {
      heading: "How it works",
      subheading: "Follow these simple steps to get started.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Steps", type: "items", itemFields: basicItemFields },
    ],
    component: Features015,
  },
  // features-016
  {
    id: "features-016",
    category: "features",
    name: "With Screenshot",
    description: "Features displayed below a prominent product screenshot.",
    tags: ["features", "screenshot", "product", "visual", "hero"],
    defaultProps: {
      heading: "See it in action",
      subheading: "Our intuitive dashboard puts everything at your fingertips.",
      items: defaultFeatures3,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features016,
  },
  // features-017
  {
    id: "features-017",
    category: "features",
    name: "Masonry",
    description: "Masonry-style feature cards with varying heights.",
    tags: ["features", "masonry", "cards", "layout", "asymmetric"],
    defaultProps: {
      heading: "Feature overview",
      subheading: "A mosaic of capabilities designed for modern teams.",
      items: defaultFeatures6,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features017,
  },
  // features-018
  {
    id: "features-018",
    category: "features",
    name: "Gradient Cards",
    description: "Colorful cards with gradient backgrounds on a dark surface.",
    tags: ["features", "gradient", "cards", "colorful", "dark", "bold"],
    defaultProps: {
      heading: "Premium features",
      subheading: "Beautiful design meets powerful functionality.",
      items: defaultFeatures3,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features018,
  },
  // features-019
  {
    id: "features-019",
    category: "features",
    name: "Icon Left",
    description: "Icon on left, text on right in a two-column grid layout.",
    tags: ["features", "icon-left", "grid", "two-column", "horizontal"],
    defaultProps: {
      heading: "What sets us apart",
      subheading: "Features that make a real difference.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features019,
  },
  // features-020
  {
    id: "features-020",
    category: "features",
    name: "Stats Combo",
    description: "Features with integrated stats on a vibrant indigo background.",
    tags: ["features", "stats", "numbers", "metrics", "colorful"],
    defaultProps: {
      heading: "Proven results",
      subheading: "Features backed by real numbers.",
      items: [
        { title: "Fast Performance", description: "Optimized for speed at every layer.", stat: "99.9%", statLabel: "Uptime" },
        { title: "Global Scale", description: "Serve customers across the world.", stat: "150+", statLabel: "Countries" },
        { title: "Trusted by Teams", description: "Organizations rely on us every day.", stat: "10K+", statLabel: "Customers" },
      ],
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Stat Features", type: "items", itemFields: statItemFields },
    ],
    component: Features020,
  },
  // features-021
  {
    id: "features-021",
    category: "features",
    name: "Checklist",
    description: "Checkmark feature list with card-style items.",
    tags: ["features", "checklist", "checkmark", "included", "list"],
    defaultProps: {
      heading: "Everything included",
      subheading: "No hidden costs, no surprises. Here is what you get.",
      items: defaultFeatures6,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Checklist Items", type: "items", itemFields: basicItemFields },
    ],
    component: Features021,
  },
  // features-022
  {
    id: "features-022",
    category: "features",
    name: "Three Row",
    description: "Three full-width rows with alternating backgrounds and large icons.",
    tags: ["features", "rows", "full-width", "alternating", "large"],
    defaultProps: {
      heading: "Complete toolkit",
      subheading: "Three pillars of our platform.",
      items: defaultFeatures3,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features022,
  },
  // features-023
  {
    id: "features-023",
    category: "features",
    name: "Grid with Header",
    description: "Section heading on the left with a six-item feature grid on the right.",
    tags: ["features", "grid", "header", "sidebar", "sticky"],
    defaultProps: {
      heading: "A better way to work",
      subheading: "Six essential features that power thousands of businesses worldwide.",
      items: defaultFeatures6,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features023,
  },
  // features-024
  {
    id: "features-024",
    category: "features",
    name: "Expandable",
    description: "Accordion-style expandable features with icon and toggle.",
    tags: ["features", "accordion", "expandable", "collapsible", "interactive"],
    defaultProps: {
      heading: "Feature details",
      subheading: "Click each item to learn more about our capabilities.",
      items: defaultFeatures4,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "items", label: "Expandable Items", type: "items", itemFields: basicItemFields },
    ],
    component: Features024,
  },
  // features-025
  {
    id: "features-025",
    category: "features",
    name: "With CTA",
    description: "Feature grid followed by a prominent call-to-action section.",
    tags: ["features", "cta", "grid", "action", "conversion"],
    defaultProps: {
      heading: "Ready to get started?",
      subheading: "Discover the features that make our platform the best choice.",
      ctaText: "Start free trial",
      ctaUrl: "#",
      items: defaultFeatures6,
    },
    propsSchema: [
      ...headingSubheadingSchema,
      { key: "ctaText", label: "CTA Button Text", type: "text" },
      { key: "ctaUrl", label: "CTA Button URL", type: "url" },
      { key: "items", label: "Features", type: "items", itemFields: basicItemFields },
    ],
    component: Features025,
  },
];

/* ============================================================
   Register all feature sections
   ============================================================ */

registerSections(featureSections);
