// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

// ─── Shared schema ───────────────────────────────────────────────────────────

const newsletterPropsSchema = [
  { key: "heading", label: "Heading", type: "text" as const },
  { key: "subheading", label: "Sub-heading", type: "text" as const },
  { key: "buttonText", label: "Button Text", type: "text" as const },
  { key: "placeholder", label: "Input Placeholder", type: "text" as const },
];

// ─── newsletter-001  Inline Simple ───────────────────────────────────────────

const Newsletter001: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Stay in the loop";
  const subheading =
    (props.subheading as string) || "Get the latest updates delivered straight to your inbox.";
  const buttonText = (props.buttonText as string) || "Subscribe";
  const placeholder = (props.placeholder as string) || "Enter your email";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8 text-center" },
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4" }, heading),
      React.createElement("p", { className: "text-lg text-slate-600 mb-10" }, subheading),
      React.createElement(
        "form",
        { className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", onSubmit: (e: React.FormEvent) => e.preventDefault() },
        React.createElement("input", {
          type: "email",
          placeholder,
          className: "flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
        }),
        React.createElement(
          "button",
          { type: "submit", className: "rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25 whitespace-nowrap" },
          buttonText
        )
      ),
      React.createElement("p", { className: "text-xs text-slate-500 mt-4" }, "No spam, unsubscribe anytime.")
    )
  );
};

// ─── newsletter-002  Inline Split ────────────────────────────────────────────

const Newsletter002: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Subscribe to our newsletter";
  const subheading =
    (props.subheading as string) || "Join 20,000+ subscribers and get weekly tips on growth, design, and product.";
  const buttonText = (props.buttonText as string) || "Subscribe";
  const placeholder = (props.placeholder as string) || "you@example.com";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl bg-white border border-slate-200 p-8 md:p-12 shadow-sm" },
        React.createElement(
          "div",
          { className: "md:w-1/2" },
          React.createElement("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3" }, heading),
          React.createElement("p", { className: "text-slate-600" }, subheading)
        ),
        React.createElement(
          "form",
          { className: "md:w-1/2 flex flex-col sm:flex-row gap-3 w-full", onSubmit: (e: React.FormEvent) => e.preventDefault() },
          React.createElement("input", {
            type: "email",
            placeholder,
            className: "flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
          }),
          React.createElement(
            "button",
            { type: "submit", className: "rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25 whitespace-nowrap" },
            buttonText
          )
        )
      )
    )
  );
};

// ─── newsletter-003  Centered ────────────────────────────────────────────────

const Newsletter003: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Get notified when we launch";
  const subheading =
    (props.subheading as string) || "We are building something special. Be the first to know when it goes live.";
  const buttonText = (props.buttonText as string) || "Notify me";
  const placeholder = (props.placeholder as string) || "Enter your email address";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { backgroundImage: "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 60%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-xl px-6 lg:px-8 text-center" },
      React.createElement(
        "div",
        { className: "w-14 h-14 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-violet-500/30" },
        React.createElement(
          "svg",
          { className: "w-7 h-7 text-violet-400", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
          React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" })
        )
      ),
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" }, heading),
      React.createElement("p", { className: "text-lg text-slate-400 mb-10 leading-relaxed" }, subheading),
      React.createElement(
        "form",
        { className: "space-y-3", onSubmit: (e: React.FormEvent) => e.preventDefault() },
        React.createElement("input", {
          type: "email",
          placeholder,
          className: "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
        }),
        React.createElement(
          "button",
          { type: "submit", className: "w-full rounded-xl bg-violet-600 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" },
          buttonText
        )
      ),
      React.createElement("p", { className: "text-xs text-slate-500 mt-4" }, "No spam, unsubscribe anytime.")
    )
  );
};

// ─── newsletter-004  With Image ──────────────────────────────────────────────

const Newsletter004: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Stay ahead of the curve";
  const subheading =
    (props.subheading as string) || "Our weekly digest keeps you informed with the latest industry news and actionable insights.";
  const buttonText = (props.buttonText as string) || "Subscribe";
  const placeholder = (props.placeholder as string) || "you@company.com";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row items-center gap-0 rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm" },
        React.createElement("div", {
          className: "w-full md:w-1/2 h-64 md:h-80 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center text-slate-400",
        }, "Image"),
        React.createElement(
          "div",
          { className: "w-full md:w-1/2 p-8 md:p-12" },
          React.createElement("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4" }, heading),
          React.createElement("p", { className: "text-slate-600 mb-8 leading-relaxed" }, subheading),
          React.createElement(
            "form",
            { className: "flex flex-col sm:flex-row gap-3", onSubmit: (e: React.FormEvent) => e.preventDefault() },
            React.createElement("input", {
              type: "email",
              placeholder,
              className: "flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
            }),
            React.createElement(
              "button",
              { type: "submit", className: "rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25 whitespace-nowrap" },
              buttonText
            )
          )
        )
      )
    )
  );
};

// ─── newsletter-005  Gradient Background ─────────────────────────────────────

const Newsletter005: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Join our community";
  const subheading =
    (props.subheading as string) || "Get exclusive content, early access, and special offers delivered to your inbox.";
  const buttonText = (props.buttonText as string) || "Get started";
  const placeholder = (props.placeholder as string) || "Enter your email";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-700" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8 text-center" },
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" }, heading),
      React.createElement("p", { className: "text-violet-100 mb-10 text-lg leading-relaxed" }, subheading),
      React.createElement(
        "form",
        { className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", onSubmit: (e: React.FormEvent) => e.preventDefault() },
        React.createElement("input", {
          type: "email",
          placeholder,
          className: "flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-violet-200 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 transition",
        }),
        React.createElement(
          "button",
          { type: "submit", className: "rounded-xl bg-white px-6 py-3 text-violet-700 font-semibold hover:bg-violet-50 transition-colors shadow-lg whitespace-nowrap" },
          buttonText
        )
      ),
      React.createElement("p", { className: "text-xs text-violet-200 mt-4" }, "Free forever. No credit card required.")
    )
  );
};

// ─── newsletter-006  Minimal ─────────────────────────────────────────────────

const Newsletter006: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Newsletter";
  const subheading = (props.subheading as string) || "A brief, weekly roundup of the best in tech.";
  const buttonText = (props.buttonText as string) || "\u2192";
  const placeholder = (props.placeholder as string) || "you@email.com";

  return React.createElement(
    "section",
    { className: "py-8 bg-white border-y border-slate-100" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "flex flex-col sm:flex-row items-center gap-6" },
        React.createElement(
          "div",
          { className: "flex-1 text-center sm:text-left" },
          React.createElement("h3", { className: "text-sm font-semibold text-slate-900 uppercase tracking-wider" }, heading),
          React.createElement("p", { className: "text-sm text-slate-500 mt-1" }, subheading)
        ),
        React.createElement(
          "form",
          { className: "flex gap-2 w-full sm:w-auto", onSubmit: (e: React.FormEvent) => e.preventDefault() },
          React.createElement("input", {
            type: "email",
            placeholder,
            className: "flex-1 sm:w-48 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
          }),
          React.createElement(
            "button",
            { type: "submit", className: "rounded-xl bg-violet-600 px-4 py-2.5 text-white text-sm font-medium hover:bg-violet-700 transition-colors" },
            buttonText
          )
        )
      )
    )
  );
};

// ─── newsletter-007  Popup Style ─────────────────────────────────────────────

const Newsletter007: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Don\u2019t miss out!";
  const subheading =
    (props.subheading as string) || "Subscribe now and receive a free guide to boosting your productivity.";
  const buttonText = (props.buttonText as string) || "Claim free guide";
  const placeholder = (props.placeholder as string) || "Your best email";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-lg px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "rounded-2xl bg-white border border-slate-200 shadow-xl p-8 sm:p-10 text-center" },
        React.createElement(
          "div",
          { className: "w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-8" },
          React.createElement(
            "svg",
            { className: "w-8 h-8 text-violet-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" })
          )
        ),
        React.createElement("h2", { className: "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3" }, heading),
        React.createElement("p", { className: "text-slate-600 mb-8 leading-relaxed" }, subheading),
        React.createElement(
          "form",
          { className: "space-y-3", onSubmit: (e: React.FormEvent) => e.preventDefault() },
          React.createElement("input", {
            type: "email",
            placeholder,
            className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
          }),
          React.createElement(
            "button",
            { type: "submit", className: "w-full rounded-xl bg-violet-600 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" },
            buttonText
          )
        ),
        React.createElement("p", { className: "text-xs text-slate-500 mt-4" }, "We respect your privacy. Unsubscribe anytime.")
      )
    )
  );
};

// ─── newsletter-008  Sidebar Widget ──────────────────────────────────────────

const Newsletter008: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Newsletter";
  const subheading = (props.subheading as string) || "Get updates straight to your inbox.";
  const buttonText = (props.buttonText as string) || "Subscribe";
  const placeholder = (props.placeholder as string) || "Email address";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-sm px-6" },
      React.createElement(
        "div",
        { className: "rounded-2xl bg-slate-50 border border-slate-200 p-6" },
        React.createElement("h3", { className: "text-lg font-semibold text-slate-900 mb-2" }, heading),
        React.createElement("p", { className: "text-sm text-slate-600 mb-5" }, subheading),
        React.createElement(
          "form",
          { className: "space-y-3", onSubmit: (e: React.FormEvent) => e.preventDefault() },
          React.createElement("input", {
            type: "email",
            placeholder,
            className: "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
          }),
          React.createElement(
            "button",
            { type: "submit", className: "w-full rounded-xl bg-violet-600 py-2.5 text-white text-sm font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" },
            buttonText
          )
        )
      )
    )
  );
};

// ─── newsletter-009  Dark Theme ──────────────────────────────────────────────

const Newsletter009: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Stay updated";
  const subheading =
    (props.subheading as string) || "Get the best content delivered weekly. No spam, just signal.";
  const buttonText = (props.buttonText as string) || "Subscribe";
  const placeholder = (props.placeholder as string) || "Enter your email";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { backgroundImage: "radial-gradient(ellipse at bottom, rgba(139,92,246,0.1) 0%, transparent 50%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-3xl px-6 lg:px-8 text-center" },
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" }, heading),
      React.createElement("p", { className: "text-lg text-slate-400 mb-10" }, subheading),
      React.createElement(
        "form",
        { className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", onSubmit: (e: React.FormEvent) => e.preventDefault() },
        React.createElement("input", {
          type: "email",
          placeholder,
          className: "flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
        }),
        React.createElement(
          "button",
          { type: "submit", className: "rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/25 whitespace-nowrap" },
          buttonText
        )
      ),
      React.createElement("p", { className: "text-xs text-slate-500 mt-4" }, "No spam. Unsubscribe at any time.")
    )
  );
};

// ─── newsletter-010  With Benefits ───────────────────────────────────────────

const Newsletter010: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Subscribe for exclusive benefits";
  const subheading = (props.subheading as string) || "Join our mailing list and unlock member-only perks.";
  const buttonText = (props.buttonText as string) || "Subscribe now";
  const placeholder = (props.placeholder as string) || "you@email.com";

  const benefits = [
    "Weekly curated industry insights",
    "Early access to new features",
    "Exclusive discounts and offers",
    "Free downloadable resources",
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row items-start gap-12 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-200/50 p-8 md:p-12" },
        React.createElement(
          "div",
          { className: "md:w-1/2" },
          React.createElement("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4" }, heading),
          React.createElement("p", { className: "text-slate-600 mb-8" }, subheading),
          React.createElement(
            "ul",
            { className: "space-y-3" },
            ...benefits.map((b, i) =>
              React.createElement(
                "li",
                { key: i, className: "flex items-center text-sm text-slate-700" },
                React.createElement(
                  "span",
                  { className: "w-5 h-5 bg-violet-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0" },
                  React.createElement(
                    "svg",
                    { className: "w-3 h-3 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3 },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" })
                  )
                ),
                b
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "md:w-1/2 w-full" },
          React.createElement(
            "form",
            { className: "rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4", onSubmit: (e: React.FormEvent) => e.preventDefault() },
            React.createElement("label", { className: "block text-sm font-medium text-slate-700" }, "Email address"),
            React.createElement("input", {
              type: "email",
              placeholder,
              className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
            }),
            React.createElement(
              "button",
              { type: "submit", className: "w-full rounded-xl bg-violet-600 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" },
              buttonText
            ),
            React.createElement("p", { className: "text-xs text-slate-500 text-center" }, "We never share your data. Unsubscribe anytime.")
          )
        )
      )
    )
  );
};

// ─── Section definitions ─────────────────────────────────────────────────────

const newsletterSections: SectionDefinition[] = [
  {
    id: "newsletter-001",
    category: "newsletter",
    name: "Newsletter Inline Simple",
    description: "Simple centered newsletter signup with inline email input and button.",
    tags: ["newsletter", "inline", "simple", "email", "signup"],
    defaultProps: {
      heading: "Stay in the loop",
      subheading: "Get the latest updates delivered straight to your inbox.",
      buttonText: "Subscribe",
      placeholder: "Enter your email",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter001,
  },
  {
    id: "newsletter-002",
    category: "newsletter",
    name: "Newsletter Inline Split",
    description: "Split layout with heading text on the left and signup form on the right.",
    tags: ["newsletter", "split", "inline", "email"],
    defaultProps: {
      heading: "Subscribe to our newsletter",
      subheading: "Join 20,000+ subscribers and get weekly tips on growth, design, and product.",
      buttonText: "Subscribe",
      placeholder: "you@example.com",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter002,
  },
  {
    id: "newsletter-003",
    category: "newsletter",
    name: "Newsletter Centered",
    description: "Centered newsletter signup with icon, stacked input, and full-width button.",
    tags: ["newsletter", "centered", "stacked", "icon"],
    defaultProps: {
      heading: "Get notified when we launch",
      subheading: "We are building something special. Be the first to know when it goes live.",
      buttonText: "Notify me",
      placeholder: "Enter your email address",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter003,
  },
  {
    id: "newsletter-004",
    category: "newsletter",
    name: "Newsletter With Image",
    description: "Newsletter signup form next to a large placeholder image.",
    tags: ["newsletter", "image", "split", "visual"],
    defaultProps: {
      heading: "Stay ahead of the curve",
      subheading: "Our weekly digest keeps you informed with the latest industry news and actionable insights.",
      buttonText: "Subscribe",
      placeholder: "you@company.com",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter004,
  },
  {
    id: "newsletter-005",
    category: "newsletter",
    name: "Newsletter Gradient Background",
    description: "Newsletter signup with a bold indigo-to-purple gradient background.",
    tags: ["newsletter", "gradient", "colored", "bold"],
    defaultProps: {
      heading: "Join our community",
      subheading: "Get exclusive content, early access, and special offers delivered to your inbox.",
      buttonText: "Get started",
      placeholder: "Enter your email",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter005,
  },
  {
    id: "newsletter-006",
    category: "newsletter",
    name: "Newsletter Minimal",
    description: "Ultra-minimal compact newsletter strip with inline form.",
    tags: ["newsletter", "minimal", "compact", "strip"],
    defaultProps: {
      heading: "Newsletter",
      subheading: "A brief, weekly roundup of the best in tech.",
      buttonText: "\u2192",
      placeholder: "you@email.com",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter006,
  },
  {
    id: "newsletter-007",
    category: "newsletter",
    name: "Newsletter Popup Style",
    description: "Card-style popup newsletter signup with icon and shadow.",
    tags: ["newsletter", "popup", "card", "modal"],
    defaultProps: {
      heading: "Don\u2019t miss out!",
      subheading: "Subscribe now and receive a free guide to boosting your productivity.",
      buttonText: "Claim free guide",
      placeholder: "Your best email",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter007,
  },
  {
    id: "newsletter-008",
    category: "newsletter",
    name: "Newsletter Sidebar Widget",
    description: "Compact sidebar-sized newsletter widget with a subtle border.",
    tags: ["newsletter", "sidebar", "widget", "compact"],
    defaultProps: {
      heading: "Newsletter",
      subheading: "Get updates straight to your inbox.",
      buttonText: "Subscribe",
      placeholder: "Email address",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter008,
  },
  {
    id: "newsletter-009",
    category: "newsletter",
    name: "Newsletter Dark Theme",
    description: "Dark-themed newsletter signup with glowing input and dark background.",
    tags: ["newsletter", "dark", "night", "email"],
    defaultProps: {
      heading: "Stay updated",
      subheading: "Get the best content delivered weekly. No spam, just signal.",
      buttonText: "Subscribe",
      placeholder: "Enter your email",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter009,
  },
  {
    id: "newsletter-010",
    category: "newsletter",
    name: "Newsletter With Benefits",
    description: "Newsletter signup with a checklist of subscriber benefits alongside the form.",
    tags: ["newsletter", "benefits", "checklist", "perks"],
    defaultProps: {
      heading: "Subscribe for exclusive benefits",
      subheading: "Join our mailing list and unlock member-only perks.",
      buttonText: "Subscribe now",
      placeholder: "you@email.com",
    },
    propsSchema: newsletterPropsSchema,
    component: Newsletter010,
  },
];

registerSections(newsletterSections);
