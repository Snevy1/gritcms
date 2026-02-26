// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

interface FaqItem {
  question: string;
  answer: string;
}

const faqItemFields = [
  { key: "question", label: "Question", type: "text" as const, required: true },
  { key: "answer", label: "Answer", type: "textarea" as const, required: true },
];

const defaultFaqItems: FaqItem[] = [
  {
    question: "How do I get started with the platform?",
    answer:
      "Getting started is easy. Simply create an account, choose a plan that fits your needs, and follow our step-by-step onboarding guide. You can be up and running in under five minutes.",
  },
  {
    question: "Can I try it for free before committing?",
    answer:
      "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can upgrade, downgrade, or cancel at any time during the trial.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards including Visa, Mastercard, and American Express. We also support PayPal and bank transfers for annual plans.",
  },
  {
    question: "Is my data secure on your platform?",
    answer:
      "Security is our top priority. We use industry-standard AES-256 encryption, conduct regular security audits, and comply with GDPR and SOC 2 Type II standards. Your data is always protected.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term contracts. Your access continues until the end of your current billing period.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "We provide 24/7 customer support via live chat and email. Pro and Enterprise customers also receive priority phone support and a dedicated account manager.",
  },
];

function castItems(raw: unknown): FaqItem[] {
  return (Array.isArray(raw) ? raw : defaultFaqItems) as FaqItem[];
}

const baseSchema = [
  { key: "heading", label: "Heading", type: "text" as const },
  { key: "subheading", label: "Sub-heading", type: "textarea" as const },
  {
    key: "items",
    label: "FAQ Items",
    type: "items" as const,
    itemFields: faqItemFields,
  },
];

/* ================================================================== */
/*  faq-001  Accordion                                                 */
/* ================================================================== */
const Faq001: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Frequently Asked Questions";
  const subheading =
    (props.subheading as string) ||
    "Find answers to the most common questions about our platform.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "space-y-4" },
        ...items.map((item, i) =>
          React.createElement(
            "details",
            {
              key: i,
              className: "group rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden",
              open: i === 0,
            },
            React.createElement(
              "summary",
              { className: "flex cursor-pointer items-center justify-between py-5 px-6 text-left font-medium text-slate-900 list-none" },
              React.createElement("span", null, item.question),
              React.createElement("span", { className: "ml-4 text-slate-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0" }, "+")
            ),
            React.createElement("div", { className: "px-6 pb-5 text-slate-600 leading-relaxed" }, item.answer)
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-002  Two Column                                                */
/* ================================================================== */
const Faq002: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Got Questions? We Have Answers";
  const subheading =
    (props.subheading as string) ||
    "Browse our most frequently asked questions below.";
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
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600 max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 gap-x-16 gap-y-12" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            { key: i },
            React.createElement(
              "h3",
              { className: "text-lg font-semibold text-slate-900 mb-3" },
              item.question
            ),
            React.createElement(
              "p",
              { className: "text-slate-600 leading-relaxed" },
              item.answer
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-003  Searchable                                                */
/* ================================================================== */
const Faq003: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "How Can We Help?";
  const subheading =
    (props.subheading as string) ||
    "Search our knowledge base or browse common questions.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { backgroundImage: "radial-gradient(ellipse at top, rgba(139,92,246,0.1) 0%, transparent 50%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-12" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-400" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "relative mb-12" },
        React.createElement(
          "div",
          { className: "absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500" },
          React.createElement(
            "svg",
            { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
            React.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
            })
          )
        ),
        React.createElement("input", {
          type: "text",
          placeholder: "Type your question...",
          className: "w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
          readOnly: true,
        })
      ),
      React.createElement(
        "div",
        { className: "space-y-4" },
        ...items.map((item, i) =>
          React.createElement(
            "details",
            {
              key: i,
              className: "group rounded-2xl bg-white/5 border border-white/10 overflow-hidden",
            },
            React.createElement(
              "summary",
              { className: "flex cursor-pointer items-center justify-between py-5 px-6 text-left font-medium text-white list-none" },
              React.createElement("span", null, item.question),
              React.createElement("span", { className: "ml-4 text-slate-500 group-open:rotate-45 transition-transform text-lg flex-shrink-0" }, "+")
            ),
            React.createElement("div", { className: "px-6 pb-5 text-slate-400 leading-relaxed" }, item.answer)
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-004  Categorized                                               */
/* ================================================================== */
const Faq004: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Frequently Asked Questions";
  const subheading =
    (props.subheading as string) ||
    "Organized by topic for easy browsing.";
  const items = castItems(props.items);

  const half = Math.ceil(items.length / 2);
  const categories = [
    { label: "Getting Started", items: items.slice(0, half) },
    { label: "Billing & Plans", items: items.slice(half) },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "space-y-14" },
        ...categories.map((cat, ci) =>
          React.createElement(
            "div",
            { key: ci },
            React.createElement(
              "h3",
              {
                className: "text-lg font-bold mb-6 pb-3 border-b-2 border-violet-200",
                style: {
                  backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              },
              cat.label
            ),
            React.createElement(
              "div",
              { className: "space-y-3" },
              ...cat.items.map((item, i) =>
                React.createElement(
                  "details",
                  {
                    key: i,
                    className: "group rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden",
                  },
                  React.createElement(
                    "summary",
                    { className: "flex cursor-pointer items-center justify-between py-5 px-6 text-left font-medium text-slate-900 list-none" },
                    React.createElement("span", null, item.question),
                    React.createElement("span", { className: "ml-4 text-slate-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0" }, "+")
                  ),
                  React.createElement("div", { className: "px-6 pb-5 text-slate-600 leading-relaxed" }, item.answer)
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
/*  faq-005  With Sidebar                                              */
/* ================================================================== */
const Faq005: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Help Center";
  const subheading =
    (props.subheading as string) ||
    "Browse by category or search for specific topics.";
  const items = castItems(props.items);

  const sidebarCategories = ["General", "Billing", "Support"];

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
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600 max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row gap-8" },
        React.createElement(
          "aside",
          { className: "md:w-56 shrink-0" },
          React.createElement(
            "nav",
            { className: "rounded-2xl bg-white border border-slate-200 p-4 shadow-sm" },
            React.createElement(
              "p",
              { className: "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3" },
              "Categories"
            ),
            ...sidebarCategories.map((cat, i) =>
              React.createElement(
                "button",
                {
                  key: i,
                  className: `block w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition ${
                    i === 0
                      ? "bg-violet-50 text-violet-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`,
                },
                cat
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "flex-1 space-y-4" },
          ...items.map((item, i) =>
            React.createElement(
              "details",
              {
                key: i,
                className: "group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm",
                open: i === 0,
              },
              React.createElement(
                "summary",
                { className: "flex cursor-pointer items-center justify-between py-5 px-6 text-left font-medium text-slate-900 list-none" },
                React.createElement("span", null, item.question),
                React.createElement("span", { className: "ml-4 text-slate-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0" }, "+")
              ),
              React.createElement("div", { className: "px-6 pb-5 text-slate-600 leading-relaxed" }, item.answer)
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-006  Minimal                                                   */
/* ================================================================== */
const Faq006: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Questions & Answers";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement(
        "h2",
        { className: "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-14 text-center" },
        heading
      ),
      React.createElement(
        "div",
        { className: "divide-y divide-slate-100" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            { key: i, className: "py-8" },
            React.createElement(
              "h3",
              { className: "text-slate-900 font-medium mb-3" },
              item.question
            ),
            React.createElement(
              "p",
              { className: "text-slate-500 leading-relaxed text-sm" },
              item.answer
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-007  Boxed                                                     */
/* ================================================================== */
const Faq007: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Common Questions";
  const subheading =
    (props.subheading as string) ||
    "Everything you need to know, neatly organized.";
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
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600 max-w-2xl mx-auto" },
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
              className: "rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-violet-200 transition-all",
            },
            React.createElement(
              "div",
              { className: "w-10 h-10 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center font-bold text-sm mb-4" },
              "Q"
            ),
            React.createElement(
              "h3",
              { className: "text-slate-900 font-semibold mb-3" },
              item.question
            ),
            React.createElement(
              "p",
              { className: "text-slate-600 text-sm leading-relaxed" },
              item.answer
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-008  Alternating                                               */
/* ================================================================== */
const Faq008: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Frequently Asked Questions";
  const subheading =
    (props.subheading as string) ||
    "Quick answers to questions you may have.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "rounded-2xl overflow-hidden border border-slate-200 shadow-sm" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: `px-8 py-7 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} ${i < items.length - 1 ? "border-b border-slate-200" : ""}`,
            },
            React.createElement(
              "h3",
              { className: "text-slate-900 font-semibold mb-2" },
              item.question
            ),
            React.createElement(
              "p",
              { className: "text-slate-600 leading-relaxed" },
              item.answer
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-009  With CTA                                                  */
/* ================================================================== */
const Faq009: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Frequently Asked Questions";
  const subheading =
    (props.subheading as string) ||
    "Can't find what you're looking for? Reach out to our support team.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "space-y-4 mb-16" },
        ...items.map((item, i) =>
          React.createElement(
            "details",
            {
              key: i,
              className: "group rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden",
            },
            React.createElement(
              "summary",
              { className: "flex cursor-pointer items-center justify-between py-5 px-6 text-left font-medium text-slate-900 list-none" },
              React.createElement("span", null, item.question),
              React.createElement("span", { className: "ml-4 text-slate-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0" }, "+")
            ),
            React.createElement("div", { className: "px-6 pb-5 text-slate-600 leading-relaxed" }, item.answer)
          )
        )
      ),
      React.createElement(
        "div",
        { className: "rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-8 md:p-12 text-center" },
        React.createElement(
          "h3",
          { className: "text-xl font-bold text-white mb-3" },
          "Still have questions?"
        ),
        React.createElement(
          "p",
          { className: "text-violet-100 mb-8" },
          "Our friendly support team is here to help you 24/7."
        ),
        React.createElement(
          "button",
          { className: "inline-flex items-center px-8 py-3 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition-colors shadow-lg" },
          "Contact Support"
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-010  Large                                                     */
/* ================================================================== */
const Faq010: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "FAQ";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement(
        "h2",
        {
          className: "text-5xl sm:text-6xl font-bold tracking-tight text-center mb-20",
          style: {
            backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        },
        heading
      ),
      React.createElement(
        "div",
        { className: "space-y-14" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            { key: i },
            React.createElement(
              "h3",
              { className: "text-xl md:text-2xl font-bold text-white mb-4" },
              item.question
            ),
            React.createElement(
              "p",
              { className: "text-lg text-slate-400 leading-relaxed" },
              item.answer
            ),
            i < items.length - 1
              ? React.createElement("hr", { className: "mt-14 border-white/10" })
              : null
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-011  Numbered                                                  */
/* ================================================================== */
const Faq011: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Top Questions Answered";
  const subheading =
    (props.subheading as string) ||
    "We compiled the most popular questions for your convenience.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "space-y-8" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            { key: i, className: "flex gap-5" },
            React.createElement(
              "div",
              {
                className:
                  "w-10 h-10 bg-violet-600 text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0 mt-1",
              },
              String(i + 1).padStart(2, "0")
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "h3",
                { className: "text-slate-900 font-semibold mb-2" },
                item.question
              ),
              React.createElement(
                "p",
                { className: "text-slate-600 leading-relaxed" },
                item.answer
              )
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-012  Grid                                                      */
/* ================================================================== */
const Faq012: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Have Questions?";
  const subheading =
    (props.subheading as string) ||
    "Find the answers you need in our FAQ cards below.";
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
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600 max-w-2xl mx-auto" },
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
              className: "rounded-2xl bg-slate-50 border border-slate-200 p-6 hover:shadow-md transition-shadow",
            },
            React.createElement(
              "div",
              { className: "flex items-start gap-3 mb-3" },
              React.createElement(
                "span",
                {
                  className: "text-violet-600 font-bold text-lg shrink-0",
                  style: {
                    backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                },
                "Q."
              ),
              React.createElement(
                "h3",
                { className: "text-slate-900 font-semibold" },
                item.question
              )
            ),
            React.createElement(
              "p",
              { className: "text-slate-600 text-sm leading-relaxed pl-8" },
              item.answer
            )
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-013  Dark Theme                                                */
/* ================================================================== */
const Faq013: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Frequently Asked Questions";
  const subheading =
    (props.subheading as string) ||
    "Everything you need to know about our product and services.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-400" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "space-y-4" },
        ...items.map((item, i) =>
          React.createElement(
            "details",
            {
              key: i,
              className: "group border-b border-white/10",
              open: i === 0,
            },
            React.createElement(
              "summary",
              { className: "flex cursor-pointer items-center justify-between py-5 text-left font-medium text-white list-none" },
              item.question,
              React.createElement("span", { className: "ml-4 text-slate-500 group-open:rotate-45 transition-transform text-lg flex-shrink-0" }, "+")
            ),
            React.createElement("div", { className: "pb-5 text-slate-400 leading-relaxed" }, item.answer)
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-014  Centered                                                  */
/* ================================================================== */
const Faq014: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Questions? Answers.";
  const subheading =
    (props.subheading as string) ||
    "We believe in transparency. Here are our most asked questions.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-2xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "span",
          { className: "inline-block px-4 py-1.5 bg-violet-100 text-violet-600 text-sm font-semibold rounded-full mb-4" },
          "FAQ"
        ),
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-lg text-slate-600" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "space-y-10" },
        ...items.map((item, i) =>
          React.createElement(
            "div",
            { key: i, className: "text-center" },
            React.createElement(
              "h3",
              { className: "text-lg font-semibold text-slate-900 mb-3" },
              item.question
            ),
            React.createElement(
              "p",
              { className: "text-slate-600 leading-relaxed" },
              item.answer
            ),
            i < items.length - 1
              ? React.createElement("hr", { className: "mt-10 border-slate-100" })
              : null
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  faq-015  With Image                                                */
/* ================================================================== */
const Faq015: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Got Questions?";
  const subheading =
    (props.subheading as string) ||
    "We are here to help you every step of the way.";
  const items = castItems(props.items);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "flex flex-col lg:flex-row items-start gap-16" },
        React.createElement(
          "div",
          { className: "lg:w-2/5 lg:sticky lg:top-8" },
          React.createElement(
            "h2",
            { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
            heading
          ),
          React.createElement(
            "p",
            { className: "text-lg text-slate-600 mb-10" },
            subheading
          ),
          React.createElement("div", {
            className: "aspect-[4/3] bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-2xl hidden lg:block border border-violet-200/50",
          })
        ),
        React.createElement(
          "div",
          { className: "flex-1 space-y-4" },
          ...items.map((item, i) =>
            React.createElement(
              "details",
              {
                key: i,
                className: "group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm",
                open: i === 0,
              },
              React.createElement(
                "summary",
                { className: "flex cursor-pointer items-center justify-between py-5 px-6 text-left font-medium text-slate-900 list-none" },
                React.createElement("span", null, item.question),
                React.createElement("span", { className: "ml-4 text-slate-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0" }, "+")
              ),
              React.createElement("div", { className: "px-6 pb-5 text-slate-600 leading-relaxed" }, item.answer)
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
  heading: "Frequently Asked Questions",
  subheading:
    "Find answers to the most common questions about our platform.",
  items: defaultFaqItems,
};

const sections: SectionDefinition[] = [
  {
    id: "faq-001",
    category: "faq",
    name: "Accordion",
    description:
      "Expandable accordion FAQ with details/summary toggle interaction.",
    tags: ["faq", "accordion", "expandable", "toggle"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq001,
  },
  {
    id: "faq-002",
    category: "faq",
    name: "Two Column",
    description: "Questions displayed side by side in a two-column layout.",
    tags: ["faq", "two-column", "grid", "side-by-side"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq002,
  },
  {
    id: "faq-003",
    category: "faq",
    name: "Searchable",
    description:
      "FAQ with a visual search input above accordion questions.",
    tags: ["faq", "search", "filter", "input"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq003,
  },
  {
    id: "faq-004",
    category: "faq",
    name: "Categorized",
    description: "FAQ items grouped under category headings.",
    tags: ["faq", "categorized", "grouped", "organized"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq004,
  },
  {
    id: "faq-005",
    category: "faq",
    name: "With Sidebar",
    description: "FAQ layout with category navigation sidebar.",
    tags: ["faq", "sidebar", "navigation", "categories"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq005,
  },
  {
    id: "faq-006",
    category: "faq",
    name: "Minimal",
    description: "Clean minimal FAQ list with simple dividers.",
    tags: ["faq", "minimal", "clean", "simple"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq006,
  },
  {
    id: "faq-007",
    category: "faq",
    name: "Boxed",
    description: "FAQ items displayed in individual card boxes.",
    tags: ["faq", "boxed", "cards", "grid"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq007,
  },
  {
    id: "faq-008",
    category: "faq",
    name: "Alternating",
    description: "FAQ with alternating background row colors.",
    tags: ["faq", "alternating", "zebra", "striped"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq008,
  },
  {
    id: "faq-009",
    category: "faq",
    name: "With CTA",
    description: "FAQ accordion with a call-to-action section below.",
    tags: ["faq", "cta", "support", "contact"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq009,
  },
  {
    id: "faq-010",
    category: "faq",
    name: "Large",
    description: "Large typography FAQ with prominent questions.",
    tags: ["faq", "large", "typography", "bold"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq010,
  },
  {
    id: "faq-011",
    category: "faq",
    name: "Numbered",
    description: "FAQ items with numbered circle indicators.",
    tags: ["faq", "numbered", "ordered", "list"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq011,
  },
  {
    id: "faq-012",
    category: "faq",
    name: "Grid",
    description: "FAQ displayed in a responsive card grid layout.",
    tags: ["faq", "grid", "cards", "responsive"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq012,
  },
  {
    id: "faq-013",
    category: "faq",
    name: "Dark Theme",
    description: "FAQ on a dark background with light text.",
    tags: ["faq", "dark", "theme", "contrast"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq013,
  },
  {
    id: "faq-014",
    category: "faq",
    name: "Centered",
    description: "Centered narrow-column FAQ with badge and dividers.",
    tags: ["faq", "centered", "narrow", "focused"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq014,
  },
  {
    id: "faq-015",
    category: "faq",
    name: "With Image",
    description: "FAQ with a sticky side image and accordion questions.",
    tags: ["faq", "image", "sidebar", "sticky"],
    defaultProps,
    propsSchema: baseSchema,
    component: Faq015,
  },
];

registerSections(sections);
