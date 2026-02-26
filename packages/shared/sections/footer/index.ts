// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/** Safely parse links prop — handles both array and comma-separated string formats */
function parseLinks(raw: unknown): Array<{ label: string; url: string }> {
  if (Array.isArray(raw)) return raw;
  if (typeof raw === "string" && raw.trim()) {
    return raw.split(",").map((s) => {
      const label = s.trim();
      return { label, url: "/" + label.toLowerCase().replace(/\s+/g, "-") };
    });
  }
  return [];
}

/* ------------------------------------------------------------------ */
/*  footer-001  Four Column                                           */
/* ------------------------------------------------------------------ */
const footer001: SectionDefinition = {
  id: "footer-001",
  category: "footer",
  name: "Four Column",
  description: "Classic four-column links footer with logo and copyright",
  tags: ["footer", "four-column", "links", "classic"],
  defaultProps: {
    logo: "GritCMS",
    description: "Building the future of creator tools, one feature at a time.",
    copyright: "2026 GritCMS. All rights reserved.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", url: "/features" },
          { label: "Pricing", url: "/pricing" },
          { label: "Integrations", url: "/integrations" },
          { label: "Changelog", url: "/changelog" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", url: "/about" },
          { label: "Blog", url: "/blog" },
          { label: "Careers", url: "/careers" },
          { label: "Press", url: "/press" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", url: "/docs" },
          { label: "Help Center", url: "/help" },
          { label: "Community", url: "/community" },
          { label: "Contact", url: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", url: "/privacy" },
          { label: "Terms of Service", url: "/terms" },
          { label: "Cookie Policy", url: "/cookies" },
        ],
      },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "columns", label: "Link Columns", type: "items", itemFields: [
      { key: "title", label: "Column Title", type: "text" },
      { key: "links", label: "Links", type: "items", itemFields: [
        { key: "label", label: "Label", type: "text" },
        { key: "url", label: "URL", type: "url" },
      ] },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const description = (props.description as string) || "";
    const copyright = (props.copyright as string) || "";
    const columns = (props.columns as Array<{ title: string; links: Array<{ label: string; url: string }> }>) || [];

    return React.createElement(
      "footer",
      { className: "bg-slate-950 pt-16 pb-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-2 md:grid-cols-6 gap-8 mb-12" },
          // Logo & description col
          React.createElement(
            "div",
            { className: "col-span-2" },
            React.createElement("h3", { className: "text-xl font-bold text-white mb-3 tracking-tight" }, logo),
            description && React.createElement("p", { className: "text-slate-400 text-sm leading-relaxed" }, description)
          ),
          // Link columns
          ...columns.map((col, i) =>
            React.createElement(
              "div",
              { key: i },
              React.createElement("h4", { className: "text-sm font-semibold text-white uppercase tracking-wider mb-4" }, col.title),
              React.createElement(
                "ul",
                { className: "space-y-3" },
                ...(col.links || []).map((link, j) =>
                  React.createElement(
                    "li",
                    { key: j },
                    React.createElement("a", { href: link.url, className: "text-sm text-slate-400 hover:text-white transition-colors" }, link.label)
                  )
                )
              )
            )
          )
        ),
        // Bottom bar
        React.createElement(
          "div",
          { className: "border-t border-white/10 mt-12 pt-8" },
          React.createElement("p", { className: "text-slate-500 text-sm text-center" }, copyright)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-002  Three Column                                          */
/* ------------------------------------------------------------------ */
const footer002: SectionDefinition = {
  id: "footer-002",
  category: "footer",
  name: "Three Column",
  description: "Three-column links footer",
  tags: ["footer", "three-column", "links"],
  defaultProps: {
    logo: "GritCMS",
    copyright: "2026 GritCMS. All rights reserved.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", url: "/features" },
          { label: "Pricing", url: "/pricing" },
          { label: "Templates", url: "/templates" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", url: "/help" },
          { label: "Documentation", url: "/docs" },
          { label: "Status", url: "/status" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", url: "/about" },
          { label: "Blog", url: "/blog" },
          { label: "Contact", url: "/contact" },
        ],
      },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "columns", label: "Link Columns", type: "items", itemFields: [
      { key: "title", label: "Column Title", type: "text" },
      { key: "links", label: "Links", type: "items", itemFields: [
        { key: "label", label: "Label", type: "text" },
        { key: "url", label: "URL", type: "url" },
      ] },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const copyright = (props.copyright as string) || "";
    const columns = (props.columns as Array<{ title: string; links: Array<{ label: string; url: string }> }>) || [];

    return React.createElement(
      "footer",
      { className: "bg-white border-t border-slate-200 pt-12 pb-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-10" },
          // Logo col
          React.createElement(
            "div",
            null,
            React.createElement("h3", { className: "text-xl font-bold text-slate-900 tracking-tight" }, logo)
          ),
          // Link columns
          ...columns.map((col, i) =>
            React.createElement(
              "div",
              { key: i },
              React.createElement("h4", { className: "text-sm font-semibold text-slate-900 mb-4" }, col.title),
              React.createElement(
                "ul",
                { className: "space-y-3" },
                ...(col.links || []).map((link, j) =>
                  React.createElement(
                    "li",
                    { key: j },
                    React.createElement("a", { href: link.url, className: "text-sm text-slate-600 hover:text-slate-900 transition-colors" }, link.label)
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "border-t border-slate-200 pt-8" },
          React.createElement("p", { className: "text-slate-500 text-sm text-center" }, copyright)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-003  Mega Footer                                           */
/* ------------------------------------------------------------------ */
const footer003: SectionDefinition = {
  id: "footer-003",
  category: "footer",
  name: "Mega Footer",
  description: "Comprehensive mega footer with newsletter, social links, and multiple columns",
  tags: ["footer", "mega", "newsletter", "social", "comprehensive"],
  defaultProps: {
    logo: "GritCMS",
    description: "The all-in-one platform for creators to build, grow, and monetize their audience.",
    newsletterHeading: "Subscribe to our newsletter",
    newsletterPlaceholder: "Enter your email",
    newsletterButton: "Subscribe",
    copyright: "2026 GritCMS. All rights reserved.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Website Builder", url: "/features/website" },
          { label: "Email Marketing", url: "/features/email" },
          { label: "Courses", url: "/features/courses" },
          { label: "Commerce", url: "/features/commerce" },
          { label: "Community", url: "/features/community" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", url: "/docs" },
          { label: "API Reference", url: "/docs/api" },
          { label: "Blog", url: "/blog" },
          { label: "Tutorials", url: "/tutorials" },
          { label: "Help Center", url: "/help" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", url: "/about" },
          { label: "Careers", url: "/careers" },
          { label: "Press Kit", url: "/press" },
          { label: "Partners", url: "/partners" },
          { label: "Contact", url: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", url: "/privacy" },
          { label: "Terms of Service", url: "/terms" },
          { label: "Cookie Policy", url: "/cookies" },
          { label: "GDPR", url: "/gdpr" },
        ],
      },
    ],
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com" },
      { platform: "GitHub", url: "https://github.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "newsletterHeading", label: "Newsletter Heading", type: "text" },
    { key: "newsletterPlaceholder", label: "Newsletter Placeholder", type: "text" },
    { key: "newsletterButton", label: "Newsletter Button", type: "text" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "columns", label: "Link Columns", type: "items", itemFields: [
      { key: "title", label: "Column Title", type: "text" },
      { key: "links", label: "Links", type: "items", itemFields: [
        { key: "label", label: "Label", type: "text" },
        { key: "url", label: "URL", type: "url" },
      ] },
    ] },
    { key: "socialLinks", label: "Social Links", type: "items", itemFields: [
      { key: "platform", label: "Platform", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const description = (props.description as string) || "";
    const newsletterHeading = (props.newsletterHeading as string) || "";
    const newsletterPlaceholder = (props.newsletterPlaceholder as string) || "Enter your email";
    const newsletterButton = (props.newsletterButton as string) || "Subscribe";
    const copyright = (props.copyright as string) || "";
    const columns = (props.columns as Array<{ title: string; links: Array<{ label: string; url: string }> }>) || [];
    const socialLinks = (props.socialLinks as Array<{ platform: string; url: string }>) || [];

    return React.createElement(
      "footer",
      { className: "bg-slate-950 pt-16 pb-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        // Top: logo + newsletter
        React.createElement(
          "div",
          { className: "flex flex-col lg:flex-row justify-between items-start gap-8 mb-12" },
          React.createElement(
            "div",
            { className: "max-w-sm" },
            React.createElement("h3", { className: "text-2xl font-bold text-white mb-3 tracking-tight" }, logo),
            description && React.createElement("p", { className: "text-slate-400 text-sm leading-relaxed" }, description)
          ),
          newsletterHeading && React.createElement(
            "div",
            { className: "w-full lg:w-auto" },
            React.createElement("h4", { className: "font-semibold text-white mb-3 text-sm" }, newsletterHeading),
            React.createElement(
              "form",
              { className: "flex gap-2", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
              React.createElement("input", {
                type: "email",
                className: "px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none w-64 transition-all",
                placeholder: newsletterPlaceholder,
              }),
              React.createElement(
                "button",
                { type: "submit", className: "rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-500 transition-colors" },
                newsletterButton
              )
            )
          )
        ),
        // Columns
        React.createElement(
          "div",
          { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" },
          ...columns.map((col, i) =>
            React.createElement(
              "div",
              { key: i },
              React.createElement("h4", { className: "text-sm font-semibold text-white uppercase tracking-wider mb-4" }, col.title),
              React.createElement(
                "ul",
                { className: "space-y-3" },
                ...(col.links || []).map((link, j) =>
                  React.createElement(
                    "li",
                    { key: j },
                    React.createElement("a", { href: link.url, className: "text-sm text-slate-400 hover:text-white transition-colors" }, link.label)
                  )
                )
              )
            )
          )
        ),
        // Bottom
        React.createElement(
          "div",
          { className: "border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" },
          React.createElement("p", { className: "text-slate-500 text-sm" }, copyright),
          React.createElement(
            "div",
            { className: "flex gap-4" },
            ...socialLinks.map((s, i) =>
              React.createElement(
                "a",
                { key: i, href: s.url, target: "_blank", rel: "noopener noreferrer", className: "text-sm text-slate-400 hover:text-white transition-colors font-medium" },
                s.platform
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-004  Centered                                              */
/* ------------------------------------------------------------------ */
const footer004: SectionDefinition = {
  id: "footer-004",
  category: "footer",
  name: "Centered",
  description: "Centered minimal footer with navigation links",
  tags: ["footer", "centered", "minimal"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "Blog", url: "/blog" },
      { label: "Contact", url: "/contact" },
    ],
    copyright: "2026 GritCMS. All rights reserved.",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "copyright", label: "Copyright", type: "text" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = parseLinks(props.links);
    const copyright = (props.copyright as string) || "";

    return React.createElement(
      "footer",
      { className: "bg-slate-950 py-16" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h3", { className: "text-xl font-bold text-white mb-8 tracking-tight" }, logo),
        React.createElement(
          "nav",
          { className: "flex flex-wrap justify-center gap-8 mb-10" },
          ...links.map((link, i) =>
            React.createElement("a", { key: i, href: link.url, className: "text-sm font-medium text-slate-400 hover:text-white transition-colors" }, link.label)
          )
        ),
        React.createElement("div", { className: "h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" }),
        React.createElement("p", { className: "text-slate-500 text-sm" }, copyright)
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-005  Minimal                                               */
/* ------------------------------------------------------------------ */
const footer005: SectionDefinition = {
  id: "footer-005",
  category: "footer",
  name: "Minimal",
  description: "Ultra-minimal single-line footer",
  tags: ["footer", "minimal", "simple", "single-line"],
  defaultProps: {
    copyright: "2026 GritCMS. All rights reserved.",
    links: [
      { label: "Privacy", url: "/privacy" },
      { label: "Terms", url: "/terms" },
    ],
  },
  propsSchema: [
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "links", label: "Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const copyright = (props.copyright as string) || "";
    const links = parseLinks(props.links);

    return React.createElement(
      "footer",
      { className: "bg-white border-t border-slate-200 py-6" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4" },
        React.createElement("p", { className: "text-slate-500 text-sm" }, copyright),
        React.createElement(
          "div",
          { className: "flex gap-6" },
          ...links.map((link, i) =>
            React.createElement("a", { key: i, href: link.url, className: "text-sm text-slate-500 hover:text-slate-900 transition-colors" }, link.label)
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-006  Dark                                                  */
/* ------------------------------------------------------------------ */
const footer006: SectionDefinition = {
  id: "footer-006",
  category: "footer",
  name: "Dark",
  description: "Dark background footer with link columns",
  tags: ["footer", "dark", "links"],
  defaultProps: {
    logo: "GritCMS",
    description: "Empowering creators worldwide with powerful tools.",
    copyright: "2026 GritCMS. All rights reserved.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", url: "/features" },
          { label: "Pricing", url: "/pricing" },
          { label: "Changelog", url: "/changelog" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", url: "/about" },
          { label: "Blog", url: "/blog" },
          { label: "Careers", url: "/careers" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", url: "/help" },
          { label: "Contact", url: "/contact" },
          { label: "Status", url: "/status" },
        ],
      },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "columns", label: "Link Columns", type: "items", itemFields: [
      { key: "title", label: "Column Title", type: "text" },
      { key: "links", label: "Links", type: "items", itemFields: [
        { key: "label", label: "Label", type: "text" },
        { key: "url", label: "URL", type: "url" },
      ] },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const description = (props.description as string) || "";
    const copyright = (props.copyright as string) || "";
    const columns = (props.columns as Array<{ title: string; links: Array<{ label: string; url: string }> }>) || [];

    return React.createElement(
      "footer",
      { className: "bg-slate-950 pt-16 pb-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-5 gap-8 mb-12" },
          React.createElement(
            "div",
            { className: "md:col-span-2" },
            React.createElement("h3", { className: "text-xl font-bold text-white mb-3 tracking-tight" }, logo),
            description && React.createElement("p", { className: "text-slate-400 text-sm leading-relaxed max-w-sm" }, description)
          ),
          ...columns.map((col, i) =>
            React.createElement(
              "div",
              { key: i },
              React.createElement("h4", { className: "text-sm font-semibold text-white uppercase tracking-wider mb-4" }, col.title),
              React.createElement(
                "ul",
                { className: "space-y-3" },
                ...(col.links || []).map((link, j) =>
                  React.createElement(
                    "li",
                    { key: j },
                    React.createElement("a", { href: link.url, className: "text-sm text-slate-400 hover:text-white transition-colors" }, link.label)
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "border-t border-white/10 mt-12 pt-8" },
          React.createElement("p", { className: "text-slate-500 text-sm text-center" }, copyright)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-007  With Newsletter                                       */
/* ------------------------------------------------------------------ */
const footer007: SectionDefinition = {
  id: "footer-007",
  category: "footer",
  name: "With Newsletter",
  description: "Footer with email newsletter signup",
  tags: ["footer", "newsletter", "email", "signup"],
  defaultProps: {
    logo: "GritCMS",
    newsletterHeading: "Stay up to date",
    newsletterSubtitle: "Get the latest news and updates delivered to your inbox.",
    newsletterPlaceholder: "Enter your email",
    newsletterButton: "Subscribe",
    copyright: "2026 GritCMS. All rights reserved.",
    links: [
      { label: "Privacy", url: "/privacy" },
      { label: "Terms", url: "/terms" },
      { label: "Contact", url: "/contact" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "newsletterHeading", label: "Newsletter Heading", type: "text" },
    { key: "newsletterSubtitle", label: "Newsletter Subtitle", type: "text" },
    { key: "newsletterPlaceholder", label: "Placeholder", type: "text" },
    { key: "newsletterButton", label: "Button Text", type: "text" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "links", label: "Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const newsletterHeading = (props.newsletterHeading as string) || "";
    const newsletterSubtitle = (props.newsletterSubtitle as string) || "";
    const newsletterPlaceholder = (props.newsletterPlaceholder as string) || "Enter your email";
    const newsletterButton = (props.newsletterButton as string) || "Subscribe";
    const copyright = (props.copyright as string) || "";
    const links = parseLinks(props.links);

    return React.createElement(
      "footer",
      { className: "bg-slate-950 pt-12 pb-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        // Newsletter section
        React.createElement(
          "div",
          { className: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6" },
          React.createElement(
            "div",
            null,
            newsletterHeading && React.createElement("h3", { className: "text-lg font-bold text-white mb-1" }, newsletterHeading),
            newsletterSubtitle && React.createElement("p", { className: "text-slate-400 text-sm" }, newsletterSubtitle)
          ),
          React.createElement(
            "form",
            { className: "flex gap-2 w-full md:w-auto", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
            React.createElement("input", {
              type: "email",
              className: "flex-1 md:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all",
              placeholder: newsletterPlaceholder,
            }),
            React.createElement(
              "button",
              { type: "submit", className: "rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-500 transition-colors whitespace-nowrap" },
              newsletterButton
            )
          )
        ),
        // Bottom
        React.createElement(
          "div",
          { className: "flex flex-col sm:flex-row justify-between items-center gap-4" },
          React.createElement("span", { className: "font-bold text-white tracking-tight" }, logo),
          React.createElement(
            "div",
            { className: "flex gap-6" },
            ...links.map((link, i) =>
              React.createElement("a", { key: i, href: link.url, className: "text-sm text-slate-400 hover:text-white transition-colors" }, link.label)
            )
          ),
          React.createElement("p", { className: "text-slate-500 text-sm" }, copyright)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-008  With CTA                                              */
/* ------------------------------------------------------------------ */
const footer008: SectionDefinition = {
  id: "footer-008",
  category: "footer",
  name: "With CTA",
  description: "Footer with a CTA banner above link columns",
  tags: ["footer", "cta", "banner", "links"],
  defaultProps: {
    ctaHeading: "Ready to get started?",
    ctaSubtitle: "Join thousands of creators who trust GritCMS.",
    ctaButtonText: "Start Free Trial",
    ctaButtonUrl: "/signup",
    logo: "GritCMS",
    copyright: "2026 GritCMS. All rights reserved.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", url: "/features" },
          { label: "Pricing", url: "/pricing" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help", url: "/help" },
          { label: "Docs", url: "/docs" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", url: "/privacy" },
          { label: "Terms", url: "/terms" },
        ],
      },
    ],
  },
  propsSchema: [
    { key: "ctaHeading", label: "CTA Heading", type: "text" },
    { key: "ctaSubtitle", label: "CTA Subtitle", type: "text" },
    { key: "ctaButtonText", label: "CTA Button Text", type: "text" },
    { key: "ctaButtonUrl", label: "CTA Button URL", type: "url" },
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "columns", label: "Link Columns", type: "items", itemFields: [
      { key: "title", label: "Column Title", type: "text" },
      { key: "links", label: "Links", type: "items", itemFields: [
        { key: "label", label: "Label", type: "text" },
        { key: "url", label: "URL", type: "url" },
      ] },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const ctaHeading = (props.ctaHeading as string) || "";
    const ctaSubtitle = (props.ctaSubtitle as string) || "";
    const ctaButtonText = (props.ctaButtonText as string) || "Get Started";
    const ctaButtonUrl = (props.ctaButtonUrl as string) || "/signup";
    const logo = (props.logo as string) || "GritCMS";
    const copyright = (props.copyright as string) || "";
    const columns = (props.columns as Array<{ title: string; links: Array<{ label: string; url: string }> }>) || [];

    return React.createElement(
      "footer",
      { className: "bg-slate-950" },
      // CTA Banner
      React.createElement(
        "div",
        { className: "bg-gradient-to-r from-violet-600 to-indigo-600" },
        React.createElement(
          "div",
          { className: "mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center" },
          ctaHeading && React.createElement("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight" }, ctaHeading),
          ctaSubtitle && React.createElement("p", { className: "text-white/80 mb-8 text-lg" }, ctaSubtitle),
          React.createElement(
            "a",
            { href: ctaButtonUrl, className: "inline-flex rounded-xl bg-white px-8 py-3 text-sm font-bold text-violet-700 hover:bg-white/90 transition-colors shadow-lg" },
            ctaButtonText
          )
        )
      ),
      // Footer links
      React.createElement(
        "div",
        { className: "pt-12 pb-8" },
        React.createElement(
          "div",
          { className: "mx-auto max-w-7xl px-6 lg:px-8" },
          React.createElement(
            "div",
            { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-10" },
            React.createElement(
              "div",
              null,
              React.createElement("h3", { className: "text-lg font-bold text-white tracking-tight" }, logo)
            ),
            ...columns.map((col, i) =>
              React.createElement(
                "div",
                { key: i },
                React.createElement("h4", { className: "text-sm font-semibold text-white mb-3" }, col.title),
                React.createElement(
                  "ul",
                  { className: "space-y-2" },
                  ...(col.links || []).map((link, j) =>
                    React.createElement(
                      "li",
                      { key: j },
                      React.createElement("a", { href: link.url, className: "text-sm text-slate-400 hover:text-white transition-colors" }, link.label)
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "border-t border-white/10 pt-8" },
            React.createElement("p", { className: "text-slate-500 text-sm text-center" }, copyright)
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-009  Social Focus                                          */
/* ------------------------------------------------------------------ */
const footer009: SectionDefinition = {
  id: "footer-009",
  category: "footer",
  name: "Social Focus",
  description: "Footer emphasizing social media links",
  tags: ["footer", "social", "links", "media"],
  defaultProps: {
    logo: "GritCMS",
    copyright: "2026 GritCMS. All rights reserved.",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com" },
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "YouTube", url: "https://youtube.com" },
      { platform: "GitHub", url: "https://github.com" },
    ],
    links: [
      { label: "Privacy", url: "/privacy" },
      { label: "Terms", url: "/terms" },
      { label: "Contact", url: "/contact" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "socialLinks", label: "Social Links", type: "items", itemFields: [
      { key: "platform", label: "Platform", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "links", label: "Legal Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const copyright = (props.copyright as string) || "";
    const socialLinks = (props.socialLinks as Array<{ platform: string; url: string }>) || [];
    const links = parseLinks(props.links);

    return React.createElement(
      "footer",
      { className: "bg-slate-950 py-16" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h3", { className: "text-xl font-bold text-white mb-10 tracking-tight" }, logo),
        // Social links
        React.createElement(
          "div",
          { className: "flex justify-center gap-3 mb-10" },
          ...socialLinks.map((s, i) =>
            React.createElement(
              "a",
              { key: i, href: s.url, target: "_blank", rel: "noopener noreferrer", className: "px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all", title: s.platform },
              s.platform
            )
          )
        ),
        // Legal links
        React.createElement(
          "div",
          { className: "flex justify-center gap-8 mb-8" },
          ...links.map((link, i) =>
            React.createElement("a", { key: i, href: link.url, className: "text-sm text-slate-400 hover:text-white transition-colors" }, link.label)
          )
        ),
        React.createElement("div", { className: "h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" }),
        React.createElement("p", { className: "text-slate-500 text-sm" }, copyright)
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-010  App Links                                             */
/* ------------------------------------------------------------------ */
const footer010: SectionDefinition = {
  id: "footer-010",
  category: "footer",
  name: "App Links",
  description: "Footer with app download buttons",
  tags: ["footer", "app", "download", "mobile"],
  defaultProps: {
    logo: "GritCMS",
    description: "Manage your creator business on the go.",
    appStoreUrl: "https://apps.apple.com",
    googlePlayUrl: "https://play.google.com",
    copyright: "2026 GritCMS. All rights reserved.",
    links: [
      { label: "Privacy", url: "/privacy" },
      { label: "Terms", url: "/terms" },
      { label: "Support", url: "/support" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "appStoreUrl", label: "App Store URL", type: "url" },
    { key: "googlePlayUrl", label: "Google Play URL", type: "url" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "links", label: "Footer Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const description = (props.description as string) || "";
    const appStoreUrl = (props.appStoreUrl as string) || "#";
    const googlePlayUrl = (props.googlePlayUrl as string) || "#";
    const copyright = (props.copyright as string) || "";
    const links = parseLinks(props.links);

    return React.createElement(
      "footer",
      { className: "bg-slate-950 pt-12 pb-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex flex-col md:flex-row justify-between items-start gap-8 mb-10" },
          React.createElement(
            "div",
            { className: "max-w-sm" },
            React.createElement("h3", { className: "text-xl font-bold text-white mb-3 tracking-tight" }, logo),
            description && React.createElement("p", { className: "text-slate-400 text-sm leading-relaxed" }, description)
          ),
          React.createElement(
            "div",
            { className: "flex flex-col sm:flex-row gap-3" },
            React.createElement(
              "a",
              { href: appStoreUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all" },
              React.createElement(
                "svg",
                { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" })
              ),
              React.createElement(
                "div",
                null,
                React.createElement("div", { className: "text-xs text-slate-400" }, "Download on the"),
                React.createElement("div", { className: "text-sm font-semibold" }, "App Store")
              )
            ),
            React.createElement(
              "a",
              { href: googlePlayUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all" },
              React.createElement(
                "svg",
                { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.91L19.59 12l-1.87-2.21-2.27 2.27 2.27 2.15zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" })
              ),
              React.createElement(
                "div",
                null,
                React.createElement("div", { className: "text-xs text-slate-400" }, "Get it on"),
                React.createElement("div", { className: "text-sm font-semibold" }, "Google Play")
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" },
          React.createElement("p", { className: "text-slate-500 text-sm" }, copyright),
          React.createElement(
            "div",
            { className: "flex gap-6" },
            ...links.map((link, i) =>
              React.createElement("a", { key: i, href: link.url, className: "text-sm text-slate-400 hover:text-white transition-colors" }, link.label)
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-011  Two Column                                            */
/* ------------------------------------------------------------------ */
const footer011: SectionDefinition = {
  id: "footer-011",
  category: "footer",
  name: "Two Column",
  description: "Simple two-column footer layout",
  tags: ["footer", "two-column", "simple"],
  defaultProps: {
    logo: "GritCMS",
    description: "Building tools for modern creators.",
    copyright: "2026 GritCMS. All rights reserved.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Home", url: "/" },
          { label: "About", url: "/about" },
          { label: "Features", url: "/features" },
          { label: "Pricing", url: "/pricing" },
          { label: "Blog", url: "/blog" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", url: "/help" },
          { label: "Contact", url: "/contact" },
          { label: "Privacy", url: "/privacy" },
          { label: "Terms", url: "/terms" },
        ],
      },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "columns", label: "Link Columns", type: "items", itemFields: [
      { key: "title", label: "Column Title", type: "text" },
      { key: "links", label: "Links", type: "items", itemFields: [
        { key: "label", label: "Label", type: "text" },
        { key: "url", label: "URL", type: "url" },
      ] },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const description = (props.description as string) || "";
    const copyright = (props.copyright as string) || "";
    const columns = (props.columns as Array<{ title: string; links: Array<{ label: string; url: string }> }>) || [];

    return React.createElement(
      "footer",
      { className: "bg-white border-t border-slate-200 pt-12 pb-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-10" },
          React.createElement(
            "div",
            { className: "md:col-span-2" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-3 tracking-tight" }, logo),
            description && React.createElement("p", { className: "text-slate-600 text-sm leading-relaxed max-w-sm" }, description)
          ),
          ...columns.map((col, i) =>
            React.createElement(
              "div",
              { key: i },
              React.createElement("h4", { className: "text-sm font-semibold text-slate-900 mb-4" }, col.title),
              React.createElement(
                "ul",
                { className: "space-y-3" },
                ...(col.links || []).map((link, j) =>
                  React.createElement(
                    "li",
                    { key: j },
                    React.createElement("a", { href: link.url, className: "text-sm text-slate-600 hover:text-slate-900 transition-colors" }, link.label)
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "border-t border-slate-200 pt-8" },
          React.createElement("p", { className: "text-slate-500 text-sm text-center" }, copyright)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-012  With Logo                                             */
/* ------------------------------------------------------------------ */
const footer012: SectionDefinition = {
  id: "footer-012",
  category: "footer",
  name: "With Logo",
  description: "Footer with a prominent logo display",
  tags: ["footer", "logo", "prominent", "brand"],
  defaultProps: {
    logo: "GritCMS",
    logoImage: "",
    tagline: "The Creator Operating System",
    copyright: "2026 GritCMS. All rights reserved.",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
      { label: "Blog", url: "/blog" },
      { label: "Contact", url: "/contact" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "logoImage", label: "Logo Image", type: "image" },
    { key: "tagline", label: "Tagline", type: "text" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "links", label: "Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const logoImage = (props.logoImage as string) || "";
    const tagline = (props.tagline as string) || "";
    const copyright = (props.copyright as string) || "";
    const links = parseLinks(props.links);

    return React.createElement(
      "footer",
      { className: "bg-slate-950 py-16" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        // Logo
        logoImage
          ? React.createElement("img", { src: logoImage, alt: logo, className: "h-12 mx-auto mb-4" })
          : React.createElement("h3", { className: "text-3xl font-bold text-white mb-3 tracking-tight" }, logo),
        tagline && React.createElement("p", { className: "text-slate-400 mb-10 text-lg" }, tagline),
        // Nav links
        React.createElement(
          "nav",
          { className: "flex flex-wrap justify-center gap-8 mb-12" },
          ...links.map((link, i) =>
            React.createElement("a", { key: i, href: link.url, className: "text-sm font-medium text-slate-400 hover:text-white transition-colors" }, link.label)
          )
        ),
        // Divider + copyright
        React.createElement("div", { className: "h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" }),
        React.createElement("p", { className: "text-slate-500 text-sm" }, copyright)
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-013  Gradient                                              */
/* ------------------------------------------------------------------ */
const footer013: SectionDefinition = {
  id: "footer-013",
  category: "footer",
  name: "Gradient",
  description: "Footer with gradient background",
  tags: ["footer", "gradient", "colorful"],
  defaultProps: {
    logo: "GritCMS",
    description: "Create, grow, and monetize with confidence.",
    copyright: "2026 GritCMS. All rights reserved.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", url: "/features" },
          { label: "Pricing", url: "/pricing" },
          { label: "Templates", url: "/templates" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", url: "/about" },
          { label: "Careers", url: "/careers" },
          { label: "Blog", url: "/blog" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", url: "/privacy" },
          { label: "Terms", url: "/terms" },
        ],
      },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "columns", label: "Link Columns", type: "items", itemFields: [
      { key: "title", label: "Column Title", type: "text" },
      { key: "links", label: "Links", type: "items", itemFields: [
        { key: "label", label: "Label", type: "text" },
        { key: "url", label: "URL", type: "url" },
      ] },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const description = (props.description as string) || "";
    const copyright = (props.copyright as string) || "";
    const columns = (props.columns as Array<{ title: string; links: Array<{ label: string; url: string }> }>) || [];

    return React.createElement(
      "footer",
      { className: "bg-gradient-to-br from-violet-600 via-indigo-600 to-violet-800 pt-16 pb-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-5 gap-8 mb-12" },
          React.createElement(
            "div",
            { className: "md:col-span-2" },
            React.createElement("h3", { className: "text-xl font-bold text-white mb-3 tracking-tight" }, logo),
            description && React.createElement("p", { className: "text-white/60 text-sm leading-relaxed" }, description)
          ),
          ...columns.map((col, i) =>
            React.createElement(
              "div",
              { key: i },
              React.createElement("h4", { className: "text-sm font-semibold text-white uppercase tracking-wider mb-4" }, col.title),
              React.createElement(
                "ul",
                { className: "space-y-3" },
                ...(col.links || []).map((link, j) =>
                  React.createElement(
                    "li",
                    { key: j },
                    React.createElement("a", { href: link.url, className: "text-sm text-white/60 hover:text-white transition-colors" }, link.label)
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "border-t border-white/20 mt-12 pt-8" },
          React.createElement("p", { className: "text-white/50 text-sm text-center" }, copyright)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-014  Simple                                                */
/* ------------------------------------------------------------------ */
const footer014: SectionDefinition = {
  id: "footer-014",
  category: "footer",
  name: "Simple",
  description: "Basic footer with inline links and copyright",
  tags: ["footer", "simple", "basic", "inline"],
  defaultProps: {
    logo: "GritCMS",
    copyright: "2026 GritCMS. All rights reserved.",
    links: [
      { label: "About", url: "/about" },
      { label: "Blog", url: "/blog" },
      { label: "Contact", url: "/contact" },
      { label: "Privacy", url: "/privacy" },
      { label: "Terms", url: "/terms" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "links", label: "Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const copyright = (props.copyright as string) || "";
    const links = parseLinks(props.links);

    return React.createElement(
      "footer",
      { className: "bg-slate-50 border-t border-slate-200 py-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex flex-col md:flex-row items-center justify-between gap-4" },
          React.createElement("span", { className: "font-bold text-slate-900 tracking-tight" }, logo),
          React.createElement(
            "nav",
            { className: "flex flex-wrap justify-center gap-6" },
            ...links.map((link, i) =>
              React.createElement("a", { key: i, href: link.url, className: "text-sm text-slate-600 hover:text-slate-900 transition-colors" }, link.label)
            )
          ),
          React.createElement("p", { className: "text-slate-500 text-sm" }, copyright)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  footer-015  With Map                                              */
/* ------------------------------------------------------------------ */
const footer015: SectionDefinition = {
  id: "footer-015",
  category: "footer",
  name: "With Map",
  description: "Footer with a location map placeholder",
  tags: ["footer", "map", "location", "office"],
  defaultProps: {
    logo: "GritCMS",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94107",
    phone: "+1 (555) 123-4567",
    email: "hello@company.com",
    copyright: "2026 GritCMS. All rights reserved.",
    links: [
      { label: "Privacy", url: "/privacy" },
      { label: "Terms", url: "/terms" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "address", label: "Address", type: "textarea" },
    { key: "phone", label: "Phone", type: "text" },
    { key: "email", label: "Email", type: "text" },
    { key: "copyright", label: "Copyright", type: "text" },
    { key: "links", label: "Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const address = (props.address as string) || "";
    const phone = (props.phone as string) || "";
    const email = (props.email as string) || "";
    const copyright = (props.copyright as string) || "";
    const links = parseLinks(props.links);

    return React.createElement(
      "footer",
      { className: "bg-slate-950" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        // Map + info row
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 py-12" },
          // Map placeholder
          React.createElement(
            "div",
            { className: "bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center min-h-[250px] mb-8 md:mb-0" },
            React.createElement(
              "div",
              { className: "text-center text-slate-500" },
              React.createElement(
                "svg",
                { className: "w-10 h-10 mx-auto mb-2 text-slate-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" }),
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" })
              ),
              React.createElement("p", { className: "text-sm font-medium" }, "Map Placeholder")
            )
          ),
          // Contact info
          React.createElement(
            "div",
            { className: "flex flex-col justify-center" },
            React.createElement("h3", { className: "text-xl font-bold text-white mb-6 tracking-tight" }, logo),
            address && React.createElement(
              "div",
              { className: "flex items-start gap-3 mb-4" },
              React.createElement(
                "svg",
                { className: "w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" })
              ),
              React.createElement("p", { className: "text-slate-400 text-sm" }, address)
            ),
            phone && React.createElement(
              "div",
              { className: "flex items-center gap-3 mb-4" },
              React.createElement(
                "svg",
                { className: "w-5 h-5 text-violet-500 flex-shrink-0", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" })
              ),
              React.createElement("p", { className: "text-slate-400 text-sm" }, phone)
            ),
            email && React.createElement(
              "div",
              { className: "flex items-center gap-3" },
              React.createElement(
                "svg",
                { className: "w-5 h-5 text-violet-500 flex-shrink-0", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" })
              ),
              React.createElement("p", { className: "text-slate-400 text-sm" }, email)
            )
          )
        ),
        // Bottom
        React.createElement(
          "div",
          { className: "border-t border-white/10 py-8 flex flex-col sm:flex-row justify-between items-center gap-4" },
          React.createElement("p", { className: "text-slate-500 text-sm" }, copyright),
          React.createElement(
            "div",
            { className: "flex gap-6" },
            ...links.map((link, i) =>
              React.createElement("a", { key: i, href: link.url, className: "text-sm text-slate-400 hover:text-white transition-colors" }, link.label)
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  Register all footer sections                                      */
/* ------------------------------------------------------------------ */
registerSections([
  footer001,
  footer002,
  footer003,
  footer004,
  footer005,
  footer006,
  footer007,
  footer008,
  footer009,
  footer010,
  footer011,
  footer012,
  footer013,
  footer014,
  footer015,
]);
