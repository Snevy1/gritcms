// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  header-001  Transparent                                           */
/* ------------------------------------------------------------------ */
const header001: SectionDefinition = {
  id: "header-001",
  category: "header",
  name: "Transparent",
  description: "Transparent header that overlays content",
  tags: ["header", "transparent", "overlay", "navigation"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
      { label: "Contact", url: "/contact" },
    ],
    ctaText: "Get Started",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "absolute top-0 left-0 right-0 z-50 bg-transparent" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          // Logo
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-white tracking-tight" },
            logo
          ),
          // Nav links
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-white/70 hover:text-white transition-colors" },
                link.label
              )
            )
          ),
          // Right side
          React.createElement(
            "div",
            { className: "flex items-center gap-4" },
            ctaText && React.createElement(
              "a",
              { href: ctaUrl, className: "hidden md:inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90 transition-colors" },
              ctaText
            ),
            // Mobile hamburger
            React.createElement(
              "button",
              { className: "md:hidden text-white/80 hover:text-white transition-colors" },
              "\u2630"
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-002  Solid                                                 */
/* ------------------------------------------------------------------ */
const header002: SectionDefinition = {
  id: "header-002",
  category: "header",
  name: "Solid",
  description: "Solid white background header",
  tags: ["header", "solid", "white", "clean"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
      { label: "Blog", url: "/blog" },
    ],
    ctaText: "Sign Up",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "bg-white border-b border-slate-200" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-slate-900 tracking-tight" },
            logo
          ),
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" },
                link.label
              )
            )
          ),
          React.createElement(
            "div",
            { className: "flex items-center gap-4" },
            ctaText && React.createElement(
              "a",
              { href: ctaUrl, className: "hidden md:inline-flex rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 transition-colors shadow-sm" },
              ctaText
            ),
            React.createElement(
              "button",
              { className: "md:hidden text-slate-600 hover:text-slate-900 transition-colors" },
              "\u2630"
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-003  Sticky                                                */
/* ------------------------------------------------------------------ */
const header003: SectionDefinition = {
  id: "header-003",
  category: "header",
  name: "Sticky",
  description: "Sticky header that stays at the top on scroll",
  tags: ["header", "sticky", "fixed", "navigation"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "Docs", url: "/docs" },
      { label: "Contact", url: "/contact" },
    ],
    ctaText: "Get Started",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-slate-900 tracking-tight" },
            logo
          ),
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" },
                link.label
              )
            )
          ),
          React.createElement(
            "div",
            { className: "flex items-center gap-4" },
            ctaText && React.createElement(
              "a",
              { href: ctaUrl, className: "hidden md:inline-flex rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 transition-colors shadow-sm" },
              ctaText
            ),
            React.createElement(
              "button",
              { className: "md:hidden text-slate-600 hover:text-slate-900 transition-colors" },
              "\u2630"
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-004  Mega Menu                                             */
/* ------------------------------------------------------------------ */
const header004: SectionDefinition = {
  id: "header-004",
  category: "header",
  name: "Mega Menu",
  description: "Header with expanded dropdown menu areas",
  tags: ["header", "mega", "dropdown", "menu"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Products", url: "/products" },
      { label: "Solutions", url: "/solutions" },
      { label: "Resources", url: "/resources" },
      { label: "Pricing", url: "/pricing" },
    ],
    ctaText: "Start Free",
    ctaUrl: "/signup",
    megaItems: [
      { title: "Website Builder", description: "Create beautiful pages with drag & drop", url: "/features/website" },
      { title: "Email Marketing", description: "Engage your audience with email campaigns", url: "/features/email" },
      { title: "Online Courses", description: "Build and sell courses with ease", url: "/features/courses" },
      { title: "Commerce", description: "Sell digital and physical products", url: "/features/commerce" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
    { key: "megaItems", label: "Mega Menu Items", type: "items", itemFields: [
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";
    const megaItems = (props.megaItems as Array<{ title: string; description: string; url: string }>) || [];

    return React.createElement(
      "header",
      { className: "bg-slate-950 border-b border-white/10" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-white tracking-tight" },
            logo
          ),
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1" },
                link.label,
                i === 0 && React.createElement(
                  "svg",
                  { className: "w-3.5 h-3.5 opacity-50", fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "flex items-center gap-4" },
            ctaText && React.createElement(
              "a",
              { href: ctaUrl, className: "hidden md:inline-flex rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition-colors" },
              ctaText
            ),
            React.createElement(
              "button",
              { className: "md:hidden text-slate-400 hover:text-white transition-colors" },
              "\u2630"
            )
          )
        )
      ),
      // Mega dropdown area (always visible as preview)
      megaItems.length > 0 && React.createElement(
        "div",
        { className: "hidden md:block border-t border-white/5" },
        React.createElement(
          "div",
          { className: "mx-auto max-w-7xl px-6 lg:px-8 py-6" },
          React.createElement(
            "div",
            { className: "grid grid-cols-2 lg:grid-cols-4 gap-4" },
            ...megaItems.map((item, i) =>
              React.createElement(
                "a",
                { key: i, href: item.url, className: "group p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/10 transition-all" },
                React.createElement(
                  "h4",
                  { className: "font-semibold text-white text-sm mb-1 group-hover:text-violet-400 transition-colors" },
                  item.title
                ),
                React.createElement(
                  "p",
                  { className: "text-slate-500 text-xs leading-relaxed" },
                  item.description
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
/*  header-005  Hamburger                                             */
/* ------------------------------------------------------------------ */
const header005: SectionDefinition = {
  id: "header-005",
  category: "header",
  name: "Hamburger",
  description: "Mobile-style header with hamburger menu icon",
  tags: ["header", "hamburger", "mobile", "menu"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
      { label: "Contact", url: "/contact" },
    ],
    ctaText: "Sign Up",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "bg-slate-950 border-b border-white/10" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          // Hamburger icon
          React.createElement(
            "button",
            { className: "text-slate-400 hover:text-white transition-colors text-xl" },
            "\u2630"
          ),
          // Logo centered
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-white tracking-tight" },
            logo
          ),
          // CTA
          ctaText
            ? React.createElement(
                "a",
                { href: ctaUrl, className: "rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition-colors" },
                ctaText
              )
            : React.createElement("div", { className: "w-6" })
        )
      ),
      // Collapsed nav preview
      React.createElement(
        "div",
        { className: "hidden border-t border-white/5" },
        React.createElement(
          "div",
          { className: "mx-auto max-w-7xl px-6 lg:px-8 py-4 space-y-1" },
          ...links.map((link, i) =>
            React.createElement(
              "a",
              { key: i, href: link.url, className: "block text-slate-400 hover:text-white font-medium transition-colors py-2 px-3 rounded-lg hover:bg-white/5" },
              link.label
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-006  Centered Logo                                         */
/* ------------------------------------------------------------------ */
const header006: SectionDefinition = {
  id: "header-006",
  category: "header",
  name: "Centered Logo",
  description: "Centered logo with navigation links on either side",
  tags: ["header", "centered", "logo", "symmetrical"],
  defaultProps: {
    logo: "GritCMS",
    leftLinks: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
    ],
    rightLinks: [
      { label: "About", url: "/about" },
      { label: "Blog", url: "/blog" },
      { label: "Contact", url: "/contact" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "leftLinks", label: "Left Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "rightLinks", label: "Right Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const leftLinks = (props.leftLinks as Array<{ label: string; url: string }>) || [];
    const rightLinks = (props.rightLinks as Array<{ label: string; url: string }>) || [];

    return React.createElement(
      "header",
      { className: "bg-white border-b border-slate-200" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          // Left nav
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8 flex-1" },
            ...leftLinks.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" },
                link.label
              )
            )
          ),
          // Center logo
          React.createElement(
            "a",
            { href: "/", className: "text-2xl font-bold text-slate-900 tracking-tight mx-8" },
            logo
          ),
          // Right nav
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8 flex-1 justify-end" },
            ...rightLinks.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" },
                link.label
              )
            )
          ),
          // Mobile hamburger
          React.createElement(
            "button",
            { className: "md:hidden text-slate-600 hover:text-slate-900 transition-colors" },
            "\u2630"
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-007  With Topbar                                           */
/* ------------------------------------------------------------------ */
const header007: SectionDefinition = {
  id: "header-007",
  category: "header",
  name: "With Topbar",
  description: "Header with an announcement or info top bar",
  tags: ["header", "topbar", "announcement", "bar"],
  defaultProps: {
    topbarText: "New: Check out our latest features release!",
    topbarLinkText: "Learn more",
    topbarLinkUrl: "/changelog",
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
    ],
    ctaText: "Get Started",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "topbarText", label: "Top Bar Text", type: "text" },
    { key: "topbarLinkText", label: "Top Bar Link Text", type: "text" },
    { key: "topbarLinkUrl", label: "Top Bar Link URL", type: "url" },
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const topbarText = (props.topbarText as string) || "";
    const topbarLinkText = (props.topbarLinkText as string) || "";
    const topbarLinkUrl = (props.topbarLinkUrl as string) || "#";
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      null,
      // Top bar
      topbarText && React.createElement(
        "div",
        { className: "bg-gradient-to-r from-violet-600 to-indigo-600 py-2.5" },
        React.createElement(
          "div",
          { className: "mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center gap-3 text-sm" },
          React.createElement(
            "span",
            { className: "text-white/90 font-medium" },
            topbarText
          ),
          topbarLinkText && React.createElement(
            "a",
            { href: topbarLinkUrl, className: "text-white font-semibold underline underline-offset-2 hover:text-white/80 transition-colors" },
            topbarLinkText + " \u2192"
          )
        )
      ),
      // Main header
      React.createElement(
        "div",
        { className: "bg-white border-b border-slate-200" },
        React.createElement(
          "div",
          { className: "mx-auto max-w-7xl px-6 lg:px-8" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between py-4" },
            React.createElement(
              "a",
              { href: "/", className: "text-xl font-bold text-slate-900 tracking-tight" },
              logo
            ),
            React.createElement(
              "nav",
              { className: "hidden md:flex items-center gap-8" },
              ...links.map((link, i) =>
                React.createElement(
                  "a",
                  { key: i, href: link.url, className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" },
                  link.label
                )
              )
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-4" },
              ctaText && React.createElement(
                "a",
                { href: ctaUrl, className: "hidden md:inline-flex rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 transition-colors shadow-sm" },
                ctaText
              ),
              React.createElement(
                "button",
                { className: "md:hidden text-slate-600 hover:text-slate-900 transition-colors" },
                "\u2630"
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-008  With CTA                                              */
/* ------------------------------------------------------------------ */
const header008: SectionDefinition = {
  id: "header-008",
  category: "header",
  name: "With CTA",
  description: "Header with a prominent call-to-action button",
  tags: ["header", "cta", "prominent", "button"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
    ],
    loginText: "Log in",
    loginUrl: "/login",
    ctaText: "Start Free Trial",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "loginText", label: "Login Text", type: "text" },
    { key: "loginUrl", label: "Login URL", type: "url" },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const loginText = (props.loginText as string) || "Log in";
    const loginUrl = (props.loginUrl as string) || "/login";
    const ctaText = (props.ctaText as string) || "Start Free Trial";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "bg-white border-b border-slate-200" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-slate-900 tracking-tight" },
            logo
          ),
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" },
                link.label
              )
            )
          ),
          React.createElement(
            "div",
            { className: "hidden md:flex items-center gap-3" },
            React.createElement(
              "a",
              { href: loginUrl, className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2" },
              loginText
            ),
            React.createElement(
              "a",
              { href: ctaUrl, className: "rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/20" },
              ctaText
            )
          ),
          React.createElement(
            "button",
            { className: "md:hidden text-slate-600 hover:text-slate-900 transition-colors" },
            "\u2630"
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-009  Minimal                                               */
/* ------------------------------------------------------------------ */
const header009: SectionDefinition = {
  id: "header-009",
  category: "header",
  name: "Minimal",
  description: "Ultra-minimal header with logo and few links",
  tags: ["header", "minimal", "clean", "simple"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "About", url: "/about" },
      { label: "Work", url: "/work" },
      { label: "Contact", url: "/contact" },
    ],
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];

    return React.createElement(
      "header",
      { className: "bg-white" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-6" },
          React.createElement(
            "a",
            { href: "/", className: "text-lg font-semibold text-slate-900 tracking-tight" },
            logo
          ),
          React.createElement(
            "nav",
            { className: "flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm text-slate-500 hover:text-slate-900 transition-colors" },
                link.label
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-010  Dark                                                  */
/* ------------------------------------------------------------------ */
const header010: SectionDefinition = {
  id: "header-010",
  category: "header",
  name: "Dark",
  description: "Dark themed header with light text",
  tags: ["header", "dark", "navigation"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
      { label: "Contact", url: "/contact" },
    ],
    ctaText: "Get Started",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "bg-slate-950 border-b border-white/10" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-white tracking-tight" },
            logo
          ),
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-400 hover:text-white transition-colors" },
                link.label
              )
            )
          ),
          React.createElement(
            "div",
            { className: "flex items-center gap-4" },
            ctaText && React.createElement(
              "a",
              { href: ctaUrl, className: "hidden md:inline-flex rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition-colors" },
              ctaText
            ),
            React.createElement(
              "button",
              { className: "md:hidden text-slate-400 hover:text-white transition-colors" },
              "\u2630"
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-011  Two Row                                               */
/* ------------------------------------------------------------------ */
const header011: SectionDefinition = {
  id: "header-011",
  category: "header",
  name: "Two Row",
  description: "Two-row header with logo row on top and navigation row below",
  tags: ["header", "two-row", "stacked", "navigation"],
  defaultProps: {
    logo: "GritCMS",
    tagline: "The Creator Operating System",
    phone: "+1 (555) 123-4567",
    email: "hello@company.com",
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
    { key: "tagline", label: "Tagline", type: "text" },
    { key: "phone", label: "Phone", type: "text" },
    { key: "email", label: "Email", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const tagline = (props.tagline as string) || "";
    const phone = (props.phone as string) || "";
    const email = (props.email as string) || "";
    const links = (props.links as Array<{ label: string; url: string }>) || [];

    return React.createElement(
      "header",
      { className: "bg-white" },
      // Top row: logo + contact info
      React.createElement(
        "div",
        { className: "border-b border-slate-100" },
        React.createElement(
          "div",
          { className: "mx-auto max-w-7xl px-6 lg:px-8 py-4" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "a",
                { href: "/", className: "text-2xl font-bold text-slate-900 tracking-tight" },
                logo
              ),
              tagline && React.createElement(
                "p",
                { className: "text-slate-500 text-xs mt-0.5" },
                tagline
              )
            ),
            React.createElement(
              "div",
              { className: "hidden md:flex items-center gap-6 text-sm text-slate-500" },
              phone && React.createElement(
                "span",
                { className: "flex items-center gap-2" },
                React.createElement(
                  "svg",
                  { className: "w-4 h-4 text-violet-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" })
                ),
                phone
              ),
              email && React.createElement(
                "span",
                { className: "flex items-center gap-2" },
                React.createElement(
                  "svg",
                  { className: "w-4 h-4 text-violet-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" })
                ),
                email
              )
            )
          )
        )
      ),
      // Bottom row: navigation
      React.createElement(
        "div",
        { className: "border-b border-slate-200" },
        React.createElement(
          "div",
          { className: "mx-auto max-w-7xl px-6 lg:px-8" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between h-12" },
            React.createElement(
              "nav",
              { className: "hidden md:flex items-center gap-8" },
              ...links.map((link, i) =>
                React.createElement(
                  "a",
                  { key: i, href: link.url, className: "text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors" },
                  link.label
                )
              )
            ),
            React.createElement(
              "button",
              { className: "md:hidden text-slate-600 hover:text-slate-900 transition-colors" },
              "\u2630"
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-012  Bordered                                              */
/* ------------------------------------------------------------------ */
const header012: SectionDefinition = {
  id: "header-012",
  category: "header",
  name: "Bordered",
  description: "Header with a distinct bottom border",
  tags: ["header", "bordered", "border", "clean"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
      { label: "Contact", url: "/contact" },
    ],
    ctaText: "Sign Up Free",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "bg-white border-b-2 border-slate-900" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-slate-900 tracking-tight" },
            logo
          ),
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" },
                link.label
              )
            )
          ),
          React.createElement(
            "div",
            { className: "flex items-center gap-4" },
            ctaText && React.createElement(
              "a",
              { href: ctaUrl, className: "hidden md:inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors" },
              ctaText
            ),
            React.createElement(
              "button",
              { className: "md:hidden text-slate-600 hover:text-slate-900 transition-colors" },
              "\u2630"
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-013  With Search                                           */
/* ------------------------------------------------------------------ */
const header013: SectionDefinition = {
  id: "header-013",
  category: "header",
  name: "With Search",
  description: "Header with a search input field",
  tags: ["header", "search", "input", "navigation"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "Docs", url: "/docs" },
    ],
    searchPlaceholder: "Search...",
    ctaText: "Sign Up",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "searchPlaceholder", label: "Search Placeholder", type: "text" },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const searchPlaceholder = (props.searchPlaceholder as string) || "Search...";
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "bg-slate-950 border-b border-white/10" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4 gap-6" },
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-white tracking-tight flex-shrink-0" },
            logo
          ),
          React.createElement(
            "nav",
            { className: "hidden lg:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-400 hover:text-white transition-colors whitespace-nowrap" },
                link.label
              )
            )
          ),
          // Search input
          React.createElement(
            "div",
            { className: "hidden md:flex items-center flex-1 max-w-xs" },
            React.createElement(
              "div",
              { className: "relative w-full" },
              React.createElement(
                "svg",
                { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" })
              ),
              React.createElement("input", {
                type: "text",
                className: "w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white/10 outline-none transition-all",
                placeholder: searchPlaceholder,
              })
            )
          ),
          React.createElement(
            "div",
            { className: "flex items-center gap-3" },
            ctaText && React.createElement(
              "a",
              { href: ctaUrl, className: "hidden md:inline-flex rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition-colors" },
              ctaText
            ),
            React.createElement(
              "button",
              { className: "lg:hidden text-slate-400 hover:text-white transition-colors" },
              "\u2630"
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-014  Gradient                                              */
/* ------------------------------------------------------------------ */
const header014: SectionDefinition = {
  id: "header-014",
  category: "header",
  name: "Gradient",
  description: "Header with gradient background",
  tags: ["header", "gradient", "colorful"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
      { label: "Contact", url: "/contact" },
    ],
    ctaText: "Get Started",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "bg-gradient-to-r from-violet-600 to-indigo-600" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center justify-between py-4" },
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-white tracking-tight" },
            logo
          ),
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-white/75 hover:text-white transition-colors" },
                link.label
              )
            )
          ),
          React.createElement(
            "div",
            { className: "flex items-center gap-4" },
            ctaText && React.createElement(
              "a",
              { href: ctaUrl, className: "hidden md:inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-violet-700 hover:bg-white/90 transition-colors" },
              ctaText
            ),
            React.createElement(
              "button",
              { className: "md:hidden text-white/80 hover:text-white transition-colors" },
              "\u2630"
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  header-015  Side Logo                                             */
/* ------------------------------------------------------------------ */
const header015: SectionDefinition = {
  id: "header-015",
  category: "header",
  name: "Side Logo",
  description: "Logo on the far left with navigation pushed to the far right",
  tags: ["header", "side", "logo", "right-nav"],
  defaultProps: {
    logo: "GritCMS",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
      { label: "About", url: "/about" },
      { label: "Blog", url: "/blog" },
    ],
    ctaText: "Sign Up",
    ctaUrl: "/signup",
  },
  propsSchema: [
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "links", label: "Navigation Links", type: "items", itemFields: [
      { key: "label", label: "Label", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "ctaText", label: "CTA Button Text", type: "text" },
    { key: "ctaUrl", label: "CTA Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const logo = (props.logo as string) || "GritCMS";
    const links = (props.links as Array<{ label: string; url: string }>) || [];
    const ctaText = (props.ctaText as string) || "";
    const ctaUrl = (props.ctaUrl as string) || "/signup";

    return React.createElement(
      "header",
      { className: "bg-slate-50 border-b border-slate-200" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex items-center py-4" },
          // Logo far left
          React.createElement(
            "a",
            { href: "/", className: "text-xl font-bold text-slate-900 tracking-tight mr-auto" },
            logo
          ),
          // Nav + CTA far right
          React.createElement(
            "nav",
            { className: "hidden md:flex items-center gap-8" },
            ...links.map((link, i) =>
              React.createElement(
                "a",
                { key: i, href: link.url, className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" },
                link.label
              )
            ),
            ctaText && React.createElement(
              "a",
              { href: ctaUrl, className: "ml-4 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 transition-colors shadow-sm" },
              ctaText
            )
          ),
          // Mobile hamburger
          React.createElement(
            "button",
            { className: "md:hidden text-slate-600 hover:text-slate-900 transition-colors ml-4" },
            "\u2630"
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  Register all header sections                                      */
/* ------------------------------------------------------------------ */
registerSections([
  header001,
  header002,
  header003,
  header004,
  header005,
  header006,
  header007,
  header008,
  header009,
  header010,
  header011,
  header012,
  header013,
  header014,
  header015,
]);
