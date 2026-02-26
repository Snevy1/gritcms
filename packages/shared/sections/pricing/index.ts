// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* Helper to parse features that might be array or comma-separated string */
const parseFeatures = (raw: unknown): string[] => {
  if (Array.isArray(raw)) return raw as string[];
  if (typeof raw === "string") return raw.split(",").map((s: string) => s.trim());
  return [];
};

/* ------------------------------------------------------------------ */
/*  pricing-001  Two Tier                                             */
/* ------------------------------------------------------------------ */
const pricing001: SectionDefinition = {
  id: "pricing-001",
  category: "pricing",
  name: "Two Tier",
  description: "Two pricing columns side by side",
  tags: ["pricing", "two-tier", "simple", "plans"],
  defaultProps: {
    heading: "Simple, transparent pricing",
    description: "Choose the plan that works best for you.",
    items: [
      {
        name: "Starter",
        price: "$9",
        period: "/month",
        description: "Perfect for individuals just getting started.",
        features: ["5 projects", "10GB storage", "Email support", "Basic analytics"],
        buttonText: "Get Started",
        buttonUrl: "#",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "For professionals who need more power.",
        features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domain", "API access"],
        buttonText: "Go Pro",
        buttonUrl: "#",
        highlighted: true,
      },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    {
      key: "items",
      label: "Plans",
      type: "items",
      itemFields: [
        { key: "name", label: "Plan Name", type: "text", required: true },
        { key: "price", label: "Price", type: "text", required: true },
        { key: "period", label: "Period", type: "text" },
        { key: "description", label: "Plan Description", type: "textarea" },
        { key: "features", label: "Features (comma separated)", type: "textarea" },
        { key: "buttonText", label: "Button Text", type: "text" },
        { key: "buttonUrl", label: "Button URL", type: "url" },
        { key: "highlighted", label: "Highlighted", type: "toggle" },
      ],
    },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Simple, transparent pricing";
    const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("span", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Pricing"),
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description)
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto" },
          ...items.map((item, i) => {
            const highlighted = item.highlighted as boolean;
            const features = parseFeatures(item.features);
            return React.createElement("div", {
              key: i,
              className: `rounded-2xl p-8 flex flex-col ${highlighted ? "bg-slate-900 text-white ring-2 ring-violet-500 shadow-xl" : "bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"}`,
            },
              React.createElement("h3", { className: `text-xl font-bold mb-2 ${highlighted ? "text-white" : "text-slate-900"}` }, item.name as string),
              item.description && React.createElement("p", { className: `text-sm mb-4 ${highlighted ? "text-slate-400" : "text-slate-500"}` }, item.description as string),
              React.createElement("div", { className: "mb-6" },
                React.createElement("span", { className: `text-5xl font-bold ${highlighted ? "text-white" : "text-slate-900"}` }, item.price as string),
                (item.period) && React.createElement("span", { className: `text-sm ${highlighted ? "text-slate-400" : "text-slate-500"}` }, item.period as string)
              ),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" },
                ...features.map((feat: string, j: number) =>
                  React.createElement("li", { key: j, className: `flex items-center gap-2 text-sm ${highlighted ? "text-slate-300" : "text-slate-600"}` },
                    React.createElement("span", { className: "text-emerald-400 flex-shrink-0 font-bold" }, "\u2713"),
                    feat
                  )
                )
              ),
              React.createElement("a", {
                href: (item.buttonUrl as string) || "#",
                className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/25" : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10"}`,
              }, (item.buttonText as string) || "Get Started")
            );
          })
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-002  Three Tier                                           */
/* ------------------------------------------------------------------ */
const pricing002: SectionDefinition = {
  id: "pricing-002",
  category: "pricing",
  name: "Three Tier",
  description: "Three pricing columns with middle plan highlighted",
  tags: ["pricing", "three-tier", "popular", "plans"],
  defaultProps: {
    heading: "Pricing plans for every stage",
    description: "Start free and scale as you grow. No hidden fees.",
    items: [
      {
        name: "Basic",
        price: "$0",
        period: "/month",
        description: "For hobby projects and experiments.",
        features: ["3 projects", "1GB storage", "Community support"],
        buttonText: "Start Free",
        buttonUrl: "#",
        highlighted: false,
      },
      {
        name: "Professional",
        price: "$19",
        period: "/month",
        description: "For growing businesses and teams.",
        features: ["Unlimited projects", "50GB storage", "Priority support", "Custom domain", "Analytics"],
        buttonText: "Start Trial",
        buttonUrl: "#",
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Enterprise",
        price: "$49",
        period: "/month",
        description: "For large teams with advanced needs.",
        features: ["Everything in Pro", "500GB storage", "24/7 phone support", "SSO", "SLA", "Dedicated account manager"],
        buttonText: "Contact Sales",
        buttonUrl: "#",
        highlighted: false,
      },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    {
      key: "items",
      label: "Plans",
      type: "items",
      itemFields: [
        { key: "name", label: "Plan Name", type: "text", required: true },
        { key: "price", label: "Price", type: "text", required: true },
        { key: "period", label: "Period", type: "text" },
        { key: "description", label: "Plan Description", type: "textarea" },
        { key: "features", label: "Features (comma separated)", type: "textarea" },
        { key: "buttonText", label: "Button Text", type: "text" },
        { key: "buttonUrl", label: "Button URL", type: "url" },
        { key: "highlighted", label: "Highlighted", type: "toggle" },
        { key: "badge", label: "Badge Text", type: "text" },
      ],
    },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Pricing plans for every stage";
    const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
      React.createElement("div", {
        style: { position: "absolute", top: "-15%", left: "50%", transform: "translateX(-50%)", width: "50%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description)
        ),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-8" },
          ...items.map((item, i) => {
            const highlighted = item.highlighted as boolean;
            const features = parseFeatures(item.features);
            const badge = item.badge as string;
            return React.createElement("div", {
              key: i,
              className: `relative rounded-2xl p-8 flex flex-col ${highlighted ? "bg-white/10 border-2 border-violet-500 shadow-xl shadow-violet-500/10 scale-[1.02]" : "bg-white/5 border border-white/10 hover:border-white/20 transition-all"}`,
            },
              badge && React.createElement("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full" }, badge),
              React.createElement("h3", { className: "text-xl font-bold text-white mb-2" }, item.name as string),
              item.description && React.createElement("p", { className: "text-sm text-slate-400 mb-4" }, item.description as string),
              React.createElement("div", { className: "mb-6" },
                React.createElement("span", { className: "text-5xl font-bold text-white" }, item.price as string),
                item.period && React.createElement("span", { className: "text-sm text-slate-400" }, item.period as string)
              ),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" },
                ...features.map((feat: string, j: number) =>
                  React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-300" },
                    React.createElement("span", { className: "text-emerald-400 flex-shrink-0" }, "\u2713"),
                    feat
                  )
                )
              ),
              React.createElement("a", {
                href: (item.buttonUrl as string) || "#",
                className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/25" : "bg-white/10 text-white hover:bg-white/15 border border-white/10"}`,
              }, (item.buttonText as string) || "Get Started")
            );
          })
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-003  Four Tier                                            */
/* ------------------------------------------------------------------ */
const pricing003: SectionDefinition = {
  id: "pricing-003",
  category: "pricing",
  name: "Four Tier",
  description: "Four pricing columns for comprehensive plans",
  tags: ["pricing", "four-tier", "comprehensive", "plans"],
  defaultProps: {
    heading: "Plans for businesses of all sizes",
    description: "Whether you are just starting out or running an enterprise, we have a plan for you.",
    items: [
      { name: "Free", price: "$0", period: "/month", features: ["1 project", "500MB storage", "Community support"], buttonText: "Start Free", buttonUrl: "#", highlighted: false },
      { name: "Starter", price: "$9", period: "/month", features: ["5 projects", "5GB storage", "Email support", "Basic analytics"], buttonText: "Get Started", buttonUrl: "#", highlighted: false },
      { name: "Growth", price: "$29", period: "/month", features: ["25 projects", "50GB storage", "Priority support", "Advanced analytics", "Custom domain"], buttonText: "Start Trial", buttonUrl: "#", highlighted: true },
      { name: "Enterprise", price: "$99", period: "/month", features: ["Unlimited projects", "1TB storage", "24/7 support", "SSO", "SLA", "Dedicated manager"], buttonText: "Contact Sales", buttonUrl: "#", highlighted: false },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    {
      key: "items",
      label: "Plans",
      type: "items",
      itemFields: [
        { key: "name", label: "Plan Name", type: "text", required: true },
        { key: "price", label: "Price", type: "text", required: true },
        { key: "period", label: "Period", type: "text" },
        { key: "features", label: "Features (comma separated)", type: "textarea" },
        { key: "buttonText", label: "Button Text", type: "text" },
        { key: "buttonUrl", label: "Button URL", type: "url" },
        { key: "highlighted", label: "Highlighted", type: "toggle" },
      ],
    },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Plans for businesses of all sizes";
    const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description)
        ),
        React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6" },
          ...items.map((item, i) => {
            const highlighted = item.highlighted as boolean;
            const features = parseFeatures(item.features);
            return React.createElement("div", {
              key: i,
              className: `rounded-2xl p-6 flex flex-col ${highlighted ? "bg-slate-900 text-white ring-2 ring-violet-500 shadow-xl" : "bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"}`,
            },
              React.createElement("h3", { className: `text-lg font-bold mb-1 ${highlighted ? "text-white" : "text-slate-900"}` }, item.name as string),
              React.createElement("div", { className: "mb-4" },
                React.createElement("span", { className: `text-3xl font-bold ${highlighted ? "text-white" : "text-slate-900"}` }, item.price as string),
                item.period && React.createElement("span", { className: `text-sm ${highlighted ? "text-slate-400" : "text-slate-500"}` }, item.period as string)
              ),
              features.length > 0 && React.createElement("ul", { className: "space-y-2 mb-6 flex-1" },
                ...features.map((feat: string, j: number) =>
                  React.createElement("li", { key: j, className: `flex items-center gap-2 text-sm ${highlighted ? "text-slate-300" : "text-slate-600"}` },
                    React.createElement("span", { className: "text-emerald-400 flex-shrink-0" }, "\u2713"),
                    feat
                  )
                )
              ),
              React.createElement("a", {
                href: (item.buttonUrl as string) || "#",
                className: `block text-center px-4 py-2.5 rounded-xl font-semibold text-sm transition-all mt-auto ${highlighted ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/25" : "bg-slate-900 text-white hover:bg-slate-800"}`,
              }, (item.buttonText as string) || "Get Started")
            );
          })
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-004  Toggle Monthly/Yearly                                */
/* ------------------------------------------------------------------ */
const pricing004: SectionDefinition = {
  id: "pricing-004",
  category: "pricing",
  name: "Toggle Monthly/Yearly",
  description: "Pricing with toggle switch for billing period",
  tags: ["pricing", "toggle", "monthly", "yearly", "billing"],
  defaultProps: {
    heading: "Flexible pricing",
    description: "Save 20% with annual billing.",
    monthlyLabel: "Monthly",
    yearlyLabel: "Yearly",
    items: [
      { name: "Starter", monthlyPrice: "$12", yearlyPrice: "$10", period: "/month", features: ["5 projects", "10GB storage", "Email support"], buttonText: "Choose Starter", buttonUrl: "#", highlighted: false },
      { name: "Pro", monthlyPrice: "$29", yearlyPrice: "$24", period: "/month", features: ["Unlimited projects", "100GB storage", "Priority support", "Custom domain", "Analytics"], buttonText: "Choose Pro", buttonUrl: "#", highlighted: true },
      { name: "Team", monthlyPrice: "$59", yearlyPrice: "$49", period: "/month", features: ["Everything in Pro", "Team management", "SSO", "Advanced security"], buttonText: "Choose Team", buttonUrl: "#", highlighted: false },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "monthlyLabel", label: "Monthly Label", type: "text" },
    { key: "yearlyLabel", label: "Yearly Label", type: "text" },
    {
      key: "items",
      label: "Plans",
      type: "items",
      itemFields: [
        { key: "name", label: "Plan Name", type: "text", required: true },
        { key: "monthlyPrice", label: "Monthly Price", type: "text", required: true },
        { key: "yearlyPrice", label: "Yearly Price", type: "text", required: true },
        { key: "period", label: "Period Label", type: "text" },
        { key: "features", label: "Features (comma separated)", type: "textarea" },
        { key: "buttonText", label: "Button Text", type: "text" },
        { key: "buttonUrl", label: "Button URL", type: "url" },
        { key: "highlighted", label: "Highlighted", type: "toggle" },
      ],
    },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Flexible pricing";
    const description = (props.description as string) || "";
    const monthlyLabel = (props.monthlyLabel as string) || "Monthly";
    const yearlyLabel = (props.yearlyLabel as string) || "Yearly";
    const items = (props.items as Array<Record<string, unknown>>) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", {
        style: { position: "absolute", top: "-10%", right: "-5%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description),
          React.createElement("div", { className: "mt-8 inline-flex items-center rounded-full bg-white/5 border border-white/10 p-1" },
            React.createElement("button", { className: "px-5 py-2 rounded-full text-sm font-medium bg-violet-600 text-white shadow-sm" }, monthlyLabel),
            React.createElement("button", { className: "px-5 py-2 rounded-full text-sm font-medium text-slate-400" }, yearlyLabel)
          )
        ),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-8" },
          ...items.map((item, i) => {
            const highlighted = item.highlighted as boolean;
            const features = parseFeatures(item.features);
            return React.createElement("div", {
              key: i,
              className: `rounded-2xl p-8 flex flex-col ${highlighted ? "bg-white/10 border-2 border-violet-500 shadow-xl shadow-violet-500/10" : "bg-white/5 border border-white/10 hover:border-white/20 transition-all"}`,
            },
              React.createElement("h3", { className: "text-xl font-bold text-white mb-4" }, item.name as string),
              React.createElement("div", { className: "mb-6" },
                React.createElement("span", { className: "text-5xl font-bold text-white" }, item.monthlyPrice as string),
                item.period && React.createElement("span", { className: "text-sm text-slate-400" }, item.period as string)
              ),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" },
                ...features.map((feat: string, j: number) =>
                  React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-300" },
                    React.createElement("span", { className: "text-emerald-400 flex-shrink-0" }, "\u2713"),
                    feat
                  )
                )
              ),
              React.createElement("a", {
                href: (item.buttonUrl as string) || "#",
                className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/25" : "bg-white/10 text-white hover:bg-white/15 border border-white/10"}`,
              }, (item.buttonText as string) || "Get Started")
            );
          })
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-005  Comparison Table                                     */
/* ------------------------------------------------------------------ */
const pricing005: SectionDefinition = {
  id: "pricing-005",
  category: "pricing",
  name: "Comparison Table",
  description: "Detailed feature comparison table across plans",
  tags: ["pricing", "comparison", "table", "features"],
  defaultProps: {
    heading: "Compare plans",
    description: "Find the right plan by comparing features side by side.",
    plans: ["Free", "Pro", "Enterprise"],
    planPrices: ["$0", "$29", "$99"],
    rows: [
      { feature: "Projects", values: ["3", "Unlimited", "Unlimited"] },
      { feature: "Storage", values: ["1GB", "100GB", "1TB"] },
      { feature: "Custom domain", values: ["\u2212", "\u2713", "\u2713"] },
      { feature: "Analytics", values: ["Basic", "Advanced", "Advanced"] },
      { feature: "Priority support", values: ["\u2212", "\u2713", "\u2713"] },
      { feature: "SSO", values: ["\u2212", "\u2212", "\u2713"] },
      { feature: "SLA", values: ["\u2212", "\u2212", "\u2713"] },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "plans", label: "Plan Names", type: "items", itemFields: [{ key: "name", label: "Name", type: "text", required: true }] },
    { key: "planPrices", label: "Plan Prices", type: "items", itemFields: [{ key: "price", label: "Price", type: "text", required: true }] },
    { key: "rows", label: "Feature Rows", type: "items", itemFields: [
      { key: "feature", label: "Feature Name", type: "text", required: true },
      { key: "values", label: "Values (comma separated)", type: "textarea", required: true },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Compare plans";
    const description = (props.description as string) || "";
    const plans = (props.plans as string[]) || [];
    const planPrices = (props.planPrices as string[]) || [];
    const rows = (props.rows as Array<{ feature: string; values: string[] }>) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description)
        ),
        React.createElement("div", { className: "overflow-x-auto max-w-5xl mx-auto" },
          React.createElement("table", { className: "w-full" },
            React.createElement("thead", null,
              React.createElement("tr", { className: "border-b border-slate-200" },
                React.createElement("th", { className: "text-left py-4 pr-6 text-sm font-medium text-slate-500 w-1/4" }, "Features"),
                ...plans.map((plan, i) => {
                  const planName = typeof plan === "string" ? plan : (plan as Record<string, string>).name || "";
                  const price = planPrices[i] ? (typeof planPrices[i] === "string" ? planPrices[i] : (planPrices[i] as Record<string, string>).price || "") : "";
                  return React.createElement("th", { key: i, className: "text-center py-4 px-4" },
                    React.createElement("div", { className: "font-bold text-slate-900" }, planName),
                    price && React.createElement("div", { className: "text-sm text-slate-500 mt-1" }, price as string)
                  );
                })
              )
            ),
            React.createElement("tbody", null,
              ...rows.map((row, i) =>
                React.createElement("tr", { key: i, className: "border-b border-slate-100" },
                  React.createElement("td", { className: "py-3 pr-6 text-sm text-slate-700 font-medium" }, row.feature),
                  ...((row.values || []) as string[]).map((val: string, j: number) =>
                    React.createElement("td", { key: j, className: `py-3 px-4 text-center text-sm ${val === "\u2713" ? "text-emerald-500 font-semibold" : val === "\u2212" ? "text-slate-300" : "text-slate-600"}` }, val)
                  )
                )
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-006  FAQ Combo                                            */
/* ------------------------------------------------------------------ */
const pricing006: SectionDefinition = {
  id: "pricing-006",
  category: "pricing",
  name: "FAQ Combo",
  description: "Pricing cards with FAQ section below",
  tags: ["pricing", "faq", "questions", "combo"],
  defaultProps: {
    heading: "Choose your plan",
    description: "All plans include a 14-day free trial.",
    items: [
      { name: "Starter", price: "$15", period: "/month", features: ["5 projects", "10GB storage", "Email support"], buttonText: "Start Trial", buttonUrl: "#", highlighted: false },
      { name: "Pro", price: "$35", period: "/month", features: ["Unlimited projects", "100GB storage", "Priority support", "Custom domain"], buttonText: "Start Trial", buttonUrl: "#", highlighted: true },
    ],
    faqs: [
      { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time. No questions asked." },
      { question: "Is there a free trial?", answer: "All plans come with a 14-day free trial. No credit card required." },
      { question: "Can I change plans later?", answer: "Absolutely! You can upgrade or downgrade your plan at any time." },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "items", label: "Plans", type: "items", itemFields: [
      { key: "name", label: "Plan Name", type: "text", required: true },
      { key: "price", label: "Price", type: "text", required: true },
      { key: "period", label: "Period", type: "text" },
      { key: "features", label: "Features (comma separated)", type: "textarea" },
      { key: "buttonText", label: "Button Text", type: "text" },
      { key: "buttonUrl", label: "Button URL", type: "url" },
      { key: "highlighted", label: "Highlighted", type: "toggle" },
    ] },
    { key: "faqs", label: "FAQs", type: "items", itemFields: [
      { key: "question", label: "Question", type: "text", required: true },
      { key: "answer", label: "Answer", type: "textarea", required: true },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Choose your plan";
    const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || [];
    const faqs = (props.faqs as Array<{ question: string; answer: string }>) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description)
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20" },
          ...items.map((item, i) => {
            const highlighted = item.highlighted as boolean;
            const features = parseFeatures(item.features);
            return React.createElement("div", {
              key: i,
              className: `rounded-2xl p-8 flex flex-col ${highlighted ? "bg-white border-2 border-violet-500 shadow-xl" : "bg-white border border-slate-200 shadow-sm"}`,
            },
              React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-2" }, item.name as string),
              React.createElement("div", { className: "mb-6" },
                React.createElement("span", { className: "text-5xl font-bold text-slate-900" }, item.price as string),
                item.period && React.createElement("span", { className: "text-sm text-slate-500" }, item.period as string)
              ),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" },
                ...features.map((feat: string, j: number) =>
                  React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-600" },
                    React.createElement("span", { className: "text-emerald-500 flex-shrink-0" }, "\u2713"),
                    feat
                  )
                )
              ),
              React.createElement("a", {
                href: (item.buttonUrl as string) || "#",
                className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`,
              }, (item.buttonText as string) || "Get Started")
            );
          })
        ),
        faqs.length > 0 && React.createElement("div", { className: "max-w-2xl mx-auto" },
          React.createElement("h3", { className: "text-2xl font-bold text-slate-900 text-center mb-8" }, "Frequently Asked Questions"),
          React.createElement("div", { className: "space-y-6" },
            ...faqs.map((faq, i) =>
              React.createElement("div", { key: i, className: "border-b border-slate-200 pb-6" },
                React.createElement("h4", { className: "font-semibold text-slate-900 mb-2" }, faq.question),
                React.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, faq.answer)
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-007  Highlighted                                          */
/* ------------------------------------------------------------------ */
const pricing007: SectionDefinition = {
  id: "pricing-007",
  category: "pricing",
  name: "Highlighted",
  description: "Pricing with one plan prominently featured",
  tags: ["pricing", "highlighted", "featured", "prominent"],
  defaultProps: {
    heading: "One plan to rule them all",
    description: "Our most popular plan gives you everything you need.",
    items: [{ name: "Pro Plan", price: "$29", period: "/month", description: "The best value for growing businesses. Includes everything you need to scale.", features: ["Unlimited projects", "100GB storage", "Priority support", "Custom domain", "Advanced analytics", "API access", "Team collaboration"], buttonText: "Start Your Free Trial", buttonUrl: "#", highlighted: true }],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "items", label: "Plans", type: "items", itemFields: [
      { key: "name", label: "Plan Name", type: "text", required: true },
      { key: "price", label: "Price", type: "text", required: true },
      { key: "period", label: "Period", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "features", label: "Features (comma separated)", type: "textarea" },
      { key: "buttonText", label: "Button Text", type: "text" },
      { key: "buttonUrl", label: "Button URL", type: "url" },
      { key: "highlighted", label: "Highlighted", type: "toggle" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "One plan to rule them all";
    const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || [];
    const item = items[0] || {};
    const features = parseFeatures(item.features);

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
      React.createElement("div", {
        style: { position: "absolute", top: "-15%", left: "50%", transform: "translateX(-50%)", width: "50%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12" }, description),
        React.createElement("div", { className: "max-w-xl mx-auto rounded-2xl bg-white/10 border-2 border-violet-500 p-10 md:p-14 shadow-xl shadow-violet-500/10" },
          React.createElement("div", { className: "inline-block bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6" }, "Most Popular"),
          React.createElement("h3", { className: "text-2xl font-bold text-white mb-2" }, item.name as string),
          item.description && React.createElement("p", { className: "text-slate-400 mb-6" }, item.description as string),
          React.createElement("div", { className: "mb-8" },
            React.createElement("span", { className: "text-5xl font-bold text-white" }, item.price as string),
            item.period && React.createElement("span", { className: "text-lg text-slate-400" }, item.period as string)
          ),
          features.length > 0 && React.createElement("div", { className: "grid sm:grid-cols-2 gap-3 mb-10 text-left max-w-md mx-auto" },
            ...features.map((feat: string, j: number) =>
              React.createElement("div", { key: j, className: "flex items-center gap-2 text-sm text-slate-300" },
                React.createElement("span", { className: "text-emerald-400 flex-shrink-0" }, "\u2713"),
                feat
              )
            )
          ),
          React.createElement("a", {
            href: (item.buttonUrl as string) || "#",
            className: "inline-block px-10 py-4 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-500 transition-all text-lg shadow-lg shadow-violet-500/25",
          }, (item.buttonText as string) || "Get Started")
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-008  Minimal                                              */
/* ------------------------------------------------------------------ */
const pricing008: SectionDefinition = {
  id: "pricing-008",
  category: "pricing",
  name: "Minimal",
  description: "Clean minimal pricing layout",
  tags: ["pricing", "minimal", "clean", "simple"],
  defaultProps: {
    heading: "Pricing",
    items: [
      { name: "Basic", price: "$9", period: "/mo", buttonText: "Select", buttonUrl: "#", highlighted: false },
      { name: "Pro", price: "$19", period: "/mo", buttonText: "Select", buttonUrl: "#", highlighted: true },
      { name: "Team", price: "$39", period: "/mo", buttonText: "Select", buttonUrl: "#", highlighted: false },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "items", label: "Plans", type: "items", itemFields: [
      { key: "name", label: "Plan Name", type: "text", required: true },
      { key: "price", label: "Price", type: "text", required: true },
      { key: "period", label: "Period", type: "text" },
      { key: "buttonText", label: "Button Text", type: "text" },
      { key: "buttonUrl", label: "Button URL", type: "url" },
      { key: "highlighted", label: "Highlighted", type: "toggle" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Pricing";
    const items = (props.items as Array<Record<string, unknown>>) || [];

    return React.createElement("section", { className: "py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-16" }, heading),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" },
          ...items.map((item, i) => {
            const highlighted = item.highlighted as boolean;
            return React.createElement("div", {
              key: i,
              className: `text-center p-8 rounded-2xl ${highlighted ? "bg-slate-900 text-white ring-2 ring-violet-500" : "bg-slate-50"}`,
            },
              React.createElement("h3", { className: `text-lg font-semibold mb-4 ${highlighted ? "text-white" : "text-slate-900"}` }, item.name as string),
              React.createElement("div", { className: "mb-6" },
                React.createElement("span", { className: `text-4xl font-bold ${highlighted ? "text-white" : "text-slate-900"}` }, item.price as string),
                item.period && React.createElement("span", { className: `text-sm ${highlighted ? "text-slate-400" : "text-slate-500"}` }, item.period as string)
              ),
              React.createElement("a", {
                href: (item.buttonUrl as string) || "#",
                className: `inline-block px-8 py-2.5 rounded-xl font-semibold text-sm transition-all ${highlighted ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/25" : "bg-slate-900 text-white hover:bg-slate-800"}`,
              }, (item.buttonText as string) || "Select")
            );
          })
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-009  Enterprise                                           */
/* ------------------------------------------------------------------ */
const pricing009: SectionDefinition = {
  id: "pricing-009",
  category: "pricing",
  name: "Enterprise",
  description: "Pricing with enterprise/custom plan option",
  tags: ["pricing", "enterprise", "custom", "contact-sales"],
  defaultProps: {
    heading: "Plans that scale with you",
    description: "From startups to enterprise, we have the right plan.",
    items: [
      { name: "Starter", price: "$12", period: "/month", features: ["5 projects", "10GB storage", "Email support"], buttonText: "Get Started", buttonUrl: "#", highlighted: false },
      { name: "Pro", price: "$39", period: "/month", features: ["Unlimited projects", "100GB storage", "Priority support", "Custom domain"], buttonText: "Start Trial", buttonUrl: "#", highlighted: true },
    ],
    enterpriseName: "Enterprise",
    enterpriseDescription: "Custom solutions for large organizations with dedicated support and SLAs.",
    enterpriseFeatures: ["Dedicated infrastructure", "Custom integrations", "24/7 support", "SLA guarantee", "Onboarding assistance"],
    enterpriseButtonText: "Contact Sales",
    enterpriseButtonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "items", label: "Plans", type: "items", itemFields: [
      { key: "name", label: "Plan Name", type: "text", required: true },
      { key: "price", label: "Price", type: "text", required: true },
      { key: "period", label: "Period", type: "text" },
      { key: "features", label: "Features (comma separated)", type: "textarea" },
      { key: "buttonText", label: "Button Text", type: "text" },
      { key: "buttonUrl", label: "Button URL", type: "url" },
      { key: "highlighted", label: "Highlighted", type: "toggle" },
    ] },
    { key: "enterpriseName", label: "Enterprise Plan Name", type: "text" },
    { key: "enterpriseDescription", label: "Enterprise Description", type: "textarea" },
    { key: "enterpriseFeatures", label: "Enterprise Features (comma separated)", type: "textarea" },
    { key: "enterpriseButtonText", label: "Enterprise Button Text", type: "text" },
    { key: "enterpriseButtonUrl", label: "Enterprise Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Plans that scale with you";
    const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || [];
    const enterpriseName = (props.enterpriseName as string) || "Enterprise";
    const enterpriseDescription = (props.enterpriseDescription as string) || "";
    const enterpriseFeatures = parseFeatures(props.enterpriseFeatures);
    const enterpriseButtonText = (props.enterpriseButtonText as string) || "Contact Sales";
    const enterpriseButtonUrl = (props.enterpriseButtonUrl as string) || "#";

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description)
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12" },
          ...items.map((item, i) => {
            const highlighted = item.highlighted as boolean;
            const features = parseFeatures(item.features);
            return React.createElement("div", {
              key: i,
              className: `rounded-2xl p-8 flex flex-col ${highlighted ? "bg-white border-2 border-violet-500 shadow-xl" : "bg-white border border-slate-200 shadow-sm"}`,
            },
              React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-2" }, item.name as string),
              React.createElement("div", { className: "mb-6" },
                React.createElement("span", { className: "text-5xl font-bold text-slate-900" }, item.price as string),
                item.period && React.createElement("span", { className: "text-sm text-slate-500" }, item.period as string)
              ),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" },
                ...features.map((feat: string, j: number) =>
                  React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-600" },
                    React.createElement("span", { className: "text-emerald-500 flex-shrink-0" }, "\u2713"), feat
                  )
                )
              ),
              React.createElement("a", {
                href: (item.buttonUrl as string) || "#",
                className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`,
              }, (item.buttonText as string) || "Get Started")
            );
          })
        ),
        React.createElement("div", { className: "max-w-3xl mx-auto rounded-2xl bg-slate-950 p-10 md:p-12" },
          React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
            React.createElement("div", null,
              React.createElement("h3", { className: "text-2xl font-bold text-white mb-3" }, enterpriseName),
              enterpriseDescription && React.createElement("p", { className: "text-slate-400 mb-4" }, enterpriseDescription),
              React.createElement("a", {
                href: enterpriseButtonUrl,
                className: "inline-block rounded-xl bg-white px-8 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition-all",
              }, enterpriseButtonText)
            ),
            enterpriseFeatures.length > 0 && React.createElement("ul", { className: "space-y-3" },
              ...enterpriseFeatures.map((feat: string, j: number) =>
                React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-300" },
                  React.createElement("span", { className: "text-violet-400 flex-shrink-0" }, "\u2713"), feat
                )
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-010  Freemium                                             */
/* ------------------------------------------------------------------ */
const pricing010: SectionDefinition = {
  id: "pricing-010", category: "pricing", name: "Freemium", description: "Free plan plus paid plan layout", tags: ["pricing", "freemium", "free", "upgrade"],
  defaultProps: { heading: "Start free, upgrade when ready", description: "No credit card required to get started.", items: [
    { name: "Free Forever", price: "$0", period: "", description: "Everything you need to get started.", features: ["3 projects", "1GB storage", "Community support", "Basic templates"], buttonText: "Start Free", buttonUrl: "#", highlighted: false },
    { name: "Pro", price: "$25", period: "/month", description: "Unlock the full potential of the platform.", features: ["Unlimited projects", "100GB storage", "Priority support", "Premium templates", "Custom domain", "Advanced analytics", "API access"], buttonText: "Upgrade to Pro", buttonUrl: "#", highlighted: true },
  ] },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [
    { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "description", label: "Plan Description", type: "textarea" }, { key: "features", label: "Features (comma separated)", type: "textarea" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" },
  ] } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Start free, upgrade when ready";
    const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || [];
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", { style: { position: "absolute", top: "-15%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", borderRadius: "50%" } }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description)
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" },
          ...items.map((item, i) => {
            const highlighted = item.highlighted as boolean;
            const features = parseFeatures(item.features);
            return React.createElement("div", { key: i, className: `rounded-2xl p-8 flex flex-col ${highlighted ? "bg-violet-600 shadow-xl shadow-violet-500/20" : "bg-white/5 border border-white/10"}` },
              React.createElement("h3", { className: `text-xl font-bold mb-2 ${highlighted ? "text-white" : "text-white"}` }, item.name as string),
              item.description && React.createElement("p", { className: `text-sm mb-4 ${highlighted ? "text-violet-200" : "text-slate-400"}` }, item.description as string),
              React.createElement("div", { className: "mb-6" },
                React.createElement("span", { className: "text-5xl font-bold text-white" }, item.price as string),
                item.period && React.createElement("span", { className: `text-sm ${highlighted ? "text-violet-200" : "text-slate-400"}` }, item.period as string)
              ),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" },
                ...features.map((feat: string, j: number) => React.createElement("li", { key: j, className: `flex items-center gap-2 text-sm ${highlighted ? "text-violet-100" : "text-slate-300"}` },
                  React.createElement("span", { className: "text-emerald-400 flex-shrink-0" }, "\u2713"), feat
                ))
              ),
              React.createElement("a", { href: (item.buttonUrl as string) || "#", className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-white text-violet-600 hover:bg-white/90" : "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/25"}` }, (item.buttonText as string) || "Get Started")
            );
          })
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  pricing-011 to pricing-020: Remaining pricing sections            */
/* ------------------------------------------------------------------ */

const pricing011: SectionDefinition = { id: "pricing-011", category: "pricing", name: "Gradient Cards", description: "Pricing cards with gradient headers", tags: ["pricing", "gradient", "cards", "colorful"],
  defaultProps: { heading: "Pick your perfect plan", description: "Beautiful pricing for beautiful projects.", items: [
    { name: "Starter", price: "$12", period: "/month", gradient: "from-blue-500 to-cyan-500", features: ["5 projects", "10GB storage", "Email support"], buttonText: "Choose Starter", buttonUrl: "#", highlighted: false },
    { name: "Pro", price: "$29", period: "/month", gradient: "from-indigo-500 to-purple-500", features: ["Unlimited projects", "100GB storage", "Priority support", "Custom domain"], buttonText: "Choose Pro", buttonUrl: "#", highlighted: true },
    { name: "Business", price: "$59", period: "/month", gradient: "from-purple-500 to-pink-500", features: ["Everything in Pro", "Team management", "SSO", "Audit logs"], buttonText: "Choose Business", buttonUrl: "#", highlighted: false },
  ] },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [ { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "gradient", label: "Gradient Classes", type: "text" }, { key: "features", label: "Features (comma separated)", type: "textarea" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" } ] } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Pick your perfect plan";
    const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || [];
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description)
        ),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-8" },
          ...items.map((item, i) => {
            const features = parseFeatures(item.features);
            return React.createElement("div", { key: i, className: "rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all" },
              React.createElement("div", { className: "p-6 text-center", style: { background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)" } },
                React.createElement("h3", { className: "text-lg font-bold text-white mb-2" }, item.name as string),
                React.createElement("div", null,
                  React.createElement("span", { className: "text-4xl font-bold text-white" }, item.price as string),
                  item.period && React.createElement("span", { className: "text-sm text-white/80" }, item.period as string)
                )
              ),
              React.createElement("div", { className: "p-6" },
                features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-6" },
                  ...features.map((feat: string, j: number) => React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-600" }, React.createElement("span", { className: "text-emerald-500 flex-shrink-0" }, "\u2713"), feat))
                ),
                React.createElement("a", { href: (item.buttonUrl as string) || "#", className: "block text-center px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" }, (item.buttonText as string) || "Get Started")
              )
            );
          })
        )
      )
    );
  },
};

const pricing012: SectionDefinition = { id: "pricing-012", category: "pricing", name: "Dark Theme", description: "Dark background pricing section", tags: ["pricing", "dark", "modern", "sleek"],
  defaultProps: { heading: "Transparent pricing", description: "No hidden fees. No surprises. Just great value.", items: [
    { name: "Starter", price: "$15", period: "/month", features: ["5 projects", "10GB storage", "Email support"], buttonText: "Get Started", buttonUrl: "#", highlighted: false },
    { name: "Pro", price: "$35", period: "/month", features: ["Unlimited projects", "100GB storage", "Priority support", "Custom domain", "Analytics"], buttonText: "Go Pro", buttonUrl: "#", highlighted: true },
    { name: "Enterprise", price: "$79", period: "/month", features: ["Everything in Pro", "500GB storage", "SSO", "SLA", "Dedicated support"], buttonText: "Contact Sales", buttonUrl: "#", highlighted: false },
  ] },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [ { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "features", label: "Features (comma separated)", type: "textarea" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" } ] } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Transparent pricing";
    const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || [];
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", { style: { position: "absolute", top: "-10%", left: "-5%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%" } }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description)
        ),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-8" },
          ...items.map((item, i) => {
            const highlighted = item.highlighted as boolean;
            const features = parseFeatures(item.features);
            return React.createElement("div", { key: i, className: `rounded-2xl p-8 flex flex-col ${highlighted ? "bg-violet-600 shadow-xl shadow-violet-500/20 ring-2 ring-violet-500" : "bg-white/5 border border-white/10 hover:border-white/20 transition-all"}` },
              React.createElement("h3", { className: "text-xl font-bold text-white mb-2" }, item.name as string),
              React.createElement("div", { className: "mb-6" }, React.createElement("span", { className: "text-5xl font-bold text-white" }, item.price as string), item.period && React.createElement("span", { className: `text-sm ${highlighted ? "text-violet-200" : "text-slate-400"}` }, item.period as string)),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" }, ...features.map((feat: string, j: number) => React.createElement("li", { key: j, className: `flex items-center gap-2 text-sm ${highlighted ? "text-violet-100" : "text-slate-300"}` }, React.createElement("span", { className: "text-emerald-400 flex-shrink-0" }, "\u2713"), feat))),
              React.createElement("a", { href: (item.buttonUrl as string) || "#", className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-white text-violet-600 hover:bg-white/90" : "bg-white/10 text-white hover:bg-white/15 border border-white/10"}` }, (item.buttonText as string) || "Get Started")
            );
          })
        )
      )
    );
  },
};

const pricing013: SectionDefinition = { id: "pricing-013", category: "pricing", name: "With Testimonial", description: "Pricing with customer testimonial quote", tags: ["pricing", "testimonial", "quote", "social-proof"],
  defaultProps: { heading: "Invest in your growth", description: "Trusted by over 10,000 businesses worldwide.", items: [
    { name: "Starter", price: "$10", period: "/month", features: ["5 projects", "5GB storage", "Email support"], buttonText: "Get Started", buttonUrl: "#", highlighted: false },
    { name: "Professional", price: "$25", period: "/month", features: ["Unlimited projects", "50GB storage", "Priority support", "Custom domain", "Analytics"], buttonText: "Go Pro", buttonUrl: "#", highlighted: true },
  ], quote: "Switching to this platform was the best decision we made. Our productivity doubled within a month.", author: "Michael Chen", role: "CTO, Growthly" },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [ { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "features", label: "Features (comma separated)", type: "textarea" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" } ] }, { key: "quote", label: "Testimonial Quote", type: "textarea" }, { key: "author", label: "Author Name", type: "text" }, { key: "role", label: "Author Role", type: "text" } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Invest in your growth"; const description = (props.description as string) || ""; const items = (props.items as Array<Record<string, unknown>>) || [];
    const quote = (props.quote as string) || ""; const author = (props.author as string) || ""; const role = (props.role as string) || "";
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" }, React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading), description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description)),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16" },
          ...items.map((item, i) => { const highlighted = item.highlighted as boolean; const features = parseFeatures(item.features);
            return React.createElement("div", { key: i, className: `rounded-2xl p-8 flex flex-col ${highlighted ? "bg-white border-2 border-violet-500 shadow-xl" : "bg-white border border-slate-200 shadow-sm"}` },
              React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-2" }, item.name as string),
              React.createElement("div", { className: "mb-6" }, React.createElement("span", { className: "text-5xl font-bold text-slate-900" }, item.price as string), item.period && React.createElement("span", { className: "text-sm text-slate-500" }, item.period as string)),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" }, ...features.map((feat: string, j: number) => React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-600" }, React.createElement("span", { className: "text-emerald-500 flex-shrink-0" }, "\u2713"), feat))),
              React.createElement("a", { href: (item.buttonUrl as string) || "#", className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}` }, (item.buttonText as string) || "Get Started")
            ); })
        ),
        quote && React.createElement("div", { className: "max-w-2xl mx-auto rounded-2xl bg-slate-50 p-8 text-center border border-slate-200" },
          React.createElement("p", { className: "text-slate-700 italic text-lg leading-relaxed mb-4" }, "\u201C" + quote + "\u201D"),
          React.createElement("div", null, React.createElement("p", { className: "font-semibold text-slate-900" }, author), role && React.createElement("p", { className: "text-sm text-slate-500" }, role))
        )
      )
    );
  },
};

const pricing014: SectionDefinition = { id: "pricing-014", category: "pricing", name: "Single Plan", description: "Single featured pricing plan display", tags: ["pricing", "single", "one-plan", "featured"],
  defaultProps: { heading: "One simple price", description: "No complicated tiers. One plan with everything included.", items: [{ name: "All-in-One", price: "$39", period: "/month", description: "Everything you need for your business, all in one plan.", features: ["Unlimited projects", "100GB storage", "Priority support", "Custom domain", "Advanced analytics", "API access", "Team collaboration", "White-label option"], buttonText: "Get Started Now", buttonUrl: "#", highlighted: true }] },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [ { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "description", label: "Description", type: "textarea" }, { key: "features", label: "Features (comma separated)", type: "textarea" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" } ] } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "One simple price"; const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || []; const item = items[0] || {}; const features = parseFeatures(item.features);
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12" }, description),
        React.createElement("div", { className: "max-w-xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-lg p-10" },
          React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-2" }, item.name as string),
          item.description && React.createElement("p", { className: "text-slate-500 mb-6" }, item.description as string),
          React.createElement("div", { className: "mb-8" }, React.createElement("span", { className: "text-5xl font-bold text-slate-900" }, item.price as string), item.period && React.createElement("span", { className: "text-lg text-slate-500" }, item.period as string)),
          features.length > 0 && React.createElement("div", { className: "grid grid-cols-2 gap-3 mb-10 text-left" }, ...features.map((feat: string, j: number) => React.createElement("div", { key: j, className: "flex items-center gap-2 text-sm text-slate-600" }, React.createElement("span", { className: "text-emerald-500 flex-shrink-0" }, "\u2713"), feat))),
          React.createElement("a", { href: (item.buttonUrl as string) || "#", className: "inline-block px-10 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all text-lg shadow-lg shadow-slate-900/10" }, (item.buttonText as string) || "Get Started")
        )
      )
    );
  },
};

const pricing015: SectionDefinition = { id: "pricing-015", category: "pricing", name: "Usage Based", description: "Usage/metered pricing display", tags: ["pricing", "usage", "metered", "pay-as-you-go"],
  defaultProps: { heading: "Pay only for what you use", description: "No upfront commitments. Scale your usage up or down at any time.", items: [
    { name: "API Calls", unit: "per 1,000 requests", price: "$0.50", description: "RESTful API access with 99.9% uptime" },
    { name: "Storage", unit: "per GB/month", price: "$0.10", description: "Secure cloud storage with encryption" },
    { name: "Bandwidth", unit: "per GB transferred", price: "$0.08", description: "Global CDN distribution" },
    { name: "Compute", unit: "per hour", price: "$0.05", description: "Serverless function execution" },
  ], buttonText: "Start Building", buttonUrl: "#", note: "Volume discounts available for high usage. Contact us for details." },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Usage Tiers", type: "items", itemFields: [ { key: "name", label: "Resource Name", type: "text", required: true }, { key: "unit", label: "Unit", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "description", label: "Description", type: "text" } ] }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "note", label: "Note", type: "text" } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Pay only for what you use"; const description = (props.description as string) || "";
    const items = (props.items as Array<Record<string, unknown>>) || []; const buttonText = (props.buttonText as string) || "Start Building"; const buttonUrl = (props.buttonUrl as string) || "#"; const note = (props.note as string) || "";
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", { style: { position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)", width: "50%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", borderRadius: "50%" } }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" }, React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading), description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description)),
        React.createElement("div", { className: "grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10" },
          ...items.map((item, i) => React.createElement("div", { key: i, className: "rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-all" },
            React.createElement("div", { className: "flex items-baseline justify-between mb-2" }, React.createElement("h3", { className: "font-bold text-white" }, item.name as string), React.createElement("span", { className: "text-2xl font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, item.price as string)),
            React.createElement("p", { className: "text-sm text-slate-500 mb-2" }, item.unit as string),
            item.description && React.createElement("p", { className: "text-sm text-slate-400" }, item.description as string)
          ))
        ),
        React.createElement("div", { className: "text-center" },
          React.createElement("a", { href: buttonUrl, className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25" }, buttonText),
          note && React.createElement("p", { className: "text-sm text-slate-500 mt-4" }, note)
        )
      )
    );
  },
};

const pricing016: SectionDefinition = { id: "pricing-016", category: "pricing", name: "Stacked Mobile", description: "Horizontal on desktop, stacked on mobile", tags: ["pricing", "stacked", "mobile", "responsive"],
  defaultProps: { heading: "Simple pricing for everyone", description: "Choose the plan that fits your needs.", items: [
    { name: "Basic", price: "$9", period: "/month", features: ["3 projects", "5GB storage", "Community support"], buttonText: "Choose Basic", buttonUrl: "#", highlighted: false },
    { name: "Pro", price: "$24", period: "/month", features: ["Unlimited projects", "50GB storage", "Priority support", "Custom domain"], buttonText: "Choose Pro", buttonUrl: "#", highlighted: true },
    { name: "Business", price: "$49", period: "/month", features: ["Everything in Pro", "Team management", "SSO", "SLA"], buttonText: "Choose Business", buttonUrl: "#", highlighted: false },
  ] },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [ { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "features", label: "Features (comma separated)", type: "textarea" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" } ] } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Simple pricing for everyone"; const description = (props.description as string) || ""; const items = (props.items as Array<Record<string, unknown>>) || [];
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" }, React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading), description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description)),
        React.createElement("div", { className: "space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-8" },
          ...items.map((item, i) => { const highlighted = item.highlighted as boolean; const features = parseFeatures(item.features);
            return React.createElement("div", { key: i, className: `rounded-2xl p-6 md:p-8 flex flex-col ${highlighted ? "bg-white border-2 border-violet-500 shadow-xl" : "bg-white border border-slate-200 shadow-sm"}` },
              React.createElement("div", { className: "flex items-baseline justify-between md:block mb-4 md:mb-0" },
                React.createElement("h3", { className: "text-lg font-bold text-slate-900 md:mb-2" }, item.name as string),
                React.createElement("div", { className: "md:mb-6" }, React.createElement("span", { className: "text-3xl md:text-4xl font-bold text-slate-900" }, item.price as string), item.period && React.createElement("span", { className: "text-sm text-slate-500" }, item.period as string))
              ),
              features.length > 0 && React.createElement("ul", { className: "space-y-2 mb-6 flex-1" }, ...features.map((feat: string, j: number) => React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-600" }, React.createElement("span", { className: "text-emerald-500 flex-shrink-0" }, "\u2713"), feat))),
              React.createElement("a", { href: (item.buttonUrl as string) || "#", className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}` }, (item.buttonText as string) || "Get Started")
            ); })
        )
      )
    );
  },
};

const pricing017: SectionDefinition = { id: "pricing-017", category: "pricing", name: "With Badge", description: "Pricing tiers with badge labels", tags: ["pricing", "badge", "labels", "tiers"],
  defaultProps: { heading: "Choose the right plan", description: "All plans include a 30-day money-back guarantee.", items: [
    { name: "Hobby", price: "$0", period: "/month", badge: "Free", badgeColor: "bg-green-100 text-green-700", features: ["2 projects", "1GB storage", "Community support"], buttonText: "Start Free", buttonUrl: "#", highlighted: false },
    { name: "Pro", price: "$19", period: "/month", badge: "Popular", badgeColor: "bg-indigo-100 text-indigo-700", features: ["Unlimited projects", "50GB storage", "Priority support", "Custom domain", "Analytics"], buttonText: "Start Trial", buttonUrl: "#", highlighted: true },
    { name: "Business", price: "$49", period: "/month", badge: "Best Value", badgeColor: "bg-amber-100 text-amber-700", features: ["Everything in Pro", "Team seats", "SSO", "Audit logs", "SLA"], buttonText: "Contact Sales", buttonUrl: "#", highlighted: false },
  ] },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [ { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "badge", label: "Badge Text", type: "text" }, { key: "badgeColor", label: "Badge Color Classes", type: "text" }, { key: "features", label: "Features (comma separated)", type: "textarea" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" } ] } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Choose the right plan"; const description = (props.description as string) || ""; const items = (props.items as Array<Record<string, unknown>>) || [];
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" }, React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading), description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description)),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-8" },
          ...items.map((item, i) => { const highlighted = item.highlighted as boolean; const badge = (item.badge as string) || ""; const features = parseFeatures(item.features);
            return React.createElement("div", { key: i, className: `rounded-2xl p-8 flex flex-col ${highlighted ? "bg-white/10 border-2 border-violet-500 shadow-xl shadow-violet-500/10" : "bg-white/5 border border-white/10 hover:border-white/20 transition-all"}` },
              React.createElement("div", { className: "flex items-center justify-between mb-4" },
                React.createElement("h3", { className: "text-xl font-bold text-white" }, item.name as string),
                badge && React.createElement("span", { className: "bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full" }, badge)
              ),
              React.createElement("div", { className: "mb-6" }, React.createElement("span", { className: "text-5xl font-bold text-white" }, item.price as string), item.period && React.createElement("span", { className: "text-sm text-slate-400" }, item.period as string)),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" }, ...features.map((feat: string, j: number) => React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-300" }, React.createElement("span", { className: "text-emerald-400 flex-shrink-0" }, "\u2713"), feat))),
              React.createElement("a", { href: (item.buttonUrl as string) || "#", className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/25" : "bg-white/10 text-white hover:bg-white/15 border border-white/10"}` }, (item.buttonText as string) || "Get Started")
            ); })
        )
      )
    );
  },
};

const pricing018: SectionDefinition = { id: "pricing-018", category: "pricing", name: "Centered", description: "Centered single column pricing layout", tags: ["pricing", "centered", "single-column", "focused"],
  defaultProps: { heading: "Pick a plan", description: "Simple plans, simple prices.", items: [
    { name: "Free", price: "$0", period: "/month", description: "For getting started", buttonText: "Start Free", buttonUrl: "#", highlighted: false },
    { name: "Pro", price: "$20", period: "/month", description: "For professionals", buttonText: "Go Pro", buttonUrl: "#", highlighted: true },
    { name: "Enterprise", price: "Custom", period: "", description: "For large organizations", buttonText: "Contact Us", buttonUrl: "#", highlighted: false },
  ] },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [ { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "description", label: "Description", type: "text" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" } ] } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Pick a plan"; const description = (props.description as string) || ""; const items = (props.items as Array<Record<string, unknown>>) || [];
    return React.createElement("section", { className: "py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-lg px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-10" }, React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading), description && React.createElement("p", { className: "mt-6 text-lg text-slate-600" }, description)),
        React.createElement("div", { className: "space-y-4" },
          ...items.map((item, i) => { const highlighted = item.highlighted as boolean;
            return React.createElement("div", { key: i, className: `flex items-center justify-between rounded-2xl p-5 ${highlighted ? "bg-slate-900 text-white shadow-lg" : "bg-slate-50 border border-slate-200"}` },
              React.createElement("div", null, React.createElement("h3", { className: `font-bold ${highlighted ? "text-white" : "text-slate-900"}` }, item.name as string), item.description && React.createElement("p", { className: `text-sm ${highlighted ? "text-slate-400" : "text-slate-500"}` }, item.description as string)),
              React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("div", { className: "text-right" }, React.createElement("span", { className: `text-2xl font-bold ${highlighted ? "text-white" : "text-slate-900"}` }, item.price as string), item.period && React.createElement("span", { className: `text-xs ${highlighted ? "text-slate-400" : "text-slate-500"}` }, item.period as string)),
                React.createElement("a", { href: (item.buttonUrl as string) || "#", className: `px-4 py-2 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${highlighted ? "bg-violet-600 text-white hover:bg-violet-500" : "bg-slate-900 text-white hover:bg-slate-800"}` }, (item.buttonText as string) || "Select")
              )
            ); })
        )
      )
    );
  },
};

const pricing019: SectionDefinition = { id: "pricing-019", category: "pricing", name: "Split", description: "Two column large pricing cards", tags: ["pricing", "split", "two-column", "large-cards"],
  defaultProps: { heading: "Two plans. Zero confusion.", description: "We kept it simple so you can focus on building.", items: [
    { name: "Creator", price: "$15", period: "/month", description: "Everything a solo creator needs to build and grow their audience.", features: ["Unlimited content", "50GB storage", "Email marketing", "Landing pages", "Analytics dashboard"], buttonText: "Start Creating", buttonUrl: "#", highlighted: false },
    { name: "Business", price: "$45", period: "/month", description: "Built for teams and businesses that need collaboration and scale.", features: ["Everything in Creator", "Team collaboration", "Advanced integrations", "Priority support", "Custom branding", "API access"], buttonText: "Scale Your Business", buttonUrl: "#", highlighted: true },
  ] },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [ { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "description", label: "Plan Description", type: "textarea" }, { key: "features", label: "Features (comma separated)", type: "textarea" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" } ] } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Two plans. Zero confusion."; const description = (props.description as string) || ""; const items = (props.items as Array<Record<string, unknown>>) || [];
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" }, React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading), description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description)),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" },
          ...items.map((item, i) => { const highlighted = item.highlighted as boolean; const features = parseFeatures(item.features);
            return React.createElement("div", { key: i, className: `rounded-2xl p-10 flex flex-col ${highlighted ? "bg-violet-600 shadow-xl shadow-violet-500/20" : "bg-white/5 border border-white/10"}` },
              React.createElement("h3", { className: "text-2xl font-bold text-white mb-2" }, item.name as string),
              item.description && React.createElement("p", { className: `text-sm mb-6 ${highlighted ? "text-violet-200" : "text-slate-400"}` }, item.description as string),
              React.createElement("div", { className: "mb-8" }, React.createElement("span", { className: "text-5xl font-bold text-white" }, item.price as string), item.period && React.createElement("span", { className: `text-lg ${highlighted ? "text-violet-200" : "text-slate-400"}` }, item.period as string)),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-10 flex-1" }, ...features.map((feat: string, j: number) => React.createElement("li", { key: j, className: `flex items-center gap-2 text-sm ${highlighted ? "text-violet-100" : "text-slate-300"}` }, React.createElement("span", { className: "text-emerald-400 flex-shrink-0" }, "\u2713"), feat))),
              React.createElement("a", { href: (item.buttonUrl as string) || "#", className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-white text-violet-600 hover:bg-white/90" : "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/25"}` }, (item.buttonText as string) || "Get Started")
            ); })
        )
      )
    );
  },
};

const pricing020: SectionDefinition = { id: "pricing-020", category: "pricing", name: "With CTA", description: "Pricing section with bottom CTA section", tags: ["pricing", "cta", "call-to-action", "combo"],
  defaultProps: { heading: "Find your perfect fit", description: "Every plan includes core features. Upgrade anytime.", items: [
    { name: "Starter", price: "$12", period: "/month", features: ["5 projects", "10GB storage", "Email support", "Basic analytics"], buttonText: "Get Started", buttonUrl: "#", highlighted: false },
    { name: "Growth", price: "$29", period: "/month", features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domain"], buttonText: "Start Trial", buttonUrl: "#", highlighted: true },
    { name: "Scale", price: "$59", period: "/month", features: ["Everything in Growth", "Team management", "SSO", "SLA", "Dedicated support"], buttonText: "Contact Sales", buttonUrl: "#", highlighted: false },
  ], ctaHeading: "Not sure which plan is right for you?", ctaDescription: "Our team is happy to help you find the perfect plan for your needs.", ctaButtonText: "Talk to Sales", ctaButtonUrl: "#" },
  propsSchema: [ { key: "heading", label: "Heading", type: "text", required: true }, { key: "description", label: "Description", type: "textarea" }, { key: "items", label: "Plans", type: "items", itemFields: [ { key: "name", label: "Plan Name", type: "text", required: true }, { key: "price", label: "Price", type: "text", required: true }, { key: "period", label: "Period", type: "text" }, { key: "features", label: "Features (comma separated)", type: "textarea" }, { key: "buttonText", label: "Button Text", type: "text" }, { key: "buttonUrl", label: "Button URL", type: "url" }, { key: "highlighted", label: "Highlighted", type: "toggle" } ] }, { key: "ctaHeading", label: "CTA Heading", type: "text" }, { key: "ctaDescription", label: "CTA Description", type: "textarea" }, { key: "ctaButtonText", label: "CTA Button Text", type: "text" }, { key: "ctaButtonUrl", label: "CTA Button URL", type: "url" } ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Find your perfect fit"; const description = (props.description as string) || ""; const items = (props.items as Array<Record<string, unknown>>) || [];
    const ctaHeading = (props.ctaHeading as string) || "Not sure which plan is right for you?"; const ctaDescription = (props.ctaDescription as string) || ""; const ctaButtonText = (props.ctaButtonText as string) || "Talk to Sales"; const ctaButtonUrl = (props.ctaButtonUrl as string) || "#";
    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-16" }, React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading), description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description)),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-8 mb-16" },
          ...items.map((item, i) => { const highlighted = item.highlighted as boolean; const features = parseFeatures(item.features);
            return React.createElement("div", { key: i, className: `rounded-2xl p-8 flex flex-col ${highlighted ? "bg-white border-2 border-violet-500 shadow-xl" : "bg-white border border-slate-200 shadow-sm"}` },
              React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-2" }, item.name as string),
              React.createElement("div", { className: "mb-6" }, React.createElement("span", { className: "text-5xl font-bold text-slate-900" }, item.price as string), item.period && React.createElement("span", { className: "text-sm text-slate-500" }, item.period as string)),
              features.length > 0 && React.createElement("ul", { className: "space-y-3 mb-8 flex-1" }, ...features.map((feat: string, j: number) => React.createElement("li", { key: j, className: "flex items-center gap-2 text-sm text-slate-600" }, React.createElement("span", { className: "text-emerald-500 flex-shrink-0" }, "\u2713"), feat))),
              React.createElement("a", { href: (item.buttonUrl as string) || "#", className: `block text-center px-6 py-3 rounded-xl font-semibold transition-all mt-auto ${highlighted ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}` }, (item.buttonText as string) || "Get Started")
            ); })
        ),
        React.createElement("div", { className: "rounded-2xl p-10 md:p-14 text-center", style: { background: "linear-gradient(135deg, #f5f3ff 0%, #eef2ff 100%)" } },
          React.createElement("h3", { className: "text-2xl font-bold text-slate-900 mb-3" }, ctaHeading),
          ctaDescription && React.createElement("p", { className: "text-slate-600 mb-6" }, ctaDescription),
          React.createElement("a", { href: ctaButtonUrl, className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" }, ctaButtonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  Register all Pricing sections                                     */
/* ------------------------------------------------------------------ */
registerSections([
  pricing001,
  pricing002,
  pricing003,
  pricing004,
  pricing005,
  pricing006,
  pricing007,
  pricing008,
  pricing009,
  pricing010,
  pricing011,
  pricing012,
  pricing013,
  pricing014,
  pricing015,
  pricing016,
  pricing017,
  pricing018,
  pricing019,
  pricing020,
]);
