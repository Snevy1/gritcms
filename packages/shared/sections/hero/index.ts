// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ==========================================================================
   HERO-001: Centered Hero
   Clean centered layout with heading, subheading, and dual CTA buttons.
   ========================================================================== */

const Hero001: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Build Something Amazing";
  const subheading =
    (props.subheading as string) ||
    "The all-in-one platform to launch, grow, and monetize your online business. No code required.";
  const buttonText = (props.buttonText as string) || "Get Started Free";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const secondaryButtonText = (props.secondaryButtonText as string) || "See How It Works";
  const secondaryButtonUrl = (props.secondaryButtonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-slate-950" },
    // Decorative gradient orbs
    React.createElement("div", {
      style: { position: "absolute", top: "-20%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement("div", {
      style: { position: "absolute", bottom: "-10%", left: "-10%", width: "35%", height: "35%", background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "span",
        { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-8" },
        "The modern creator platform"
      ),
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto" },
        React.createElement("span", null, "Build Something "),
        React.createElement("span", {
          style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
        }, "Amazing")
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10 flex flex-col sm:flex-row justify-center gap-4" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
          },
          buttonText
        ),
        React.createElement(
          "a",
          {
            href: secondaryButtonUrl,
            className: "rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-white font-semibold hover:bg-white/10 transition-all",
          },
          secondaryButtonText
        )
      )
    )
  );
};

const hero001: SectionDefinition = {
  id: "hero-001",
  category: "hero",
  name: "Centered Hero",
  description: "Clean centered hero with heading, subheading, and dual CTA buttons",
  tags: ["centered", "clean", "minimal", "dual-cta"],
  defaultProps: {
    heading: "Build Something Amazing",
    subheading:
      "The all-in-one platform to launch, grow, and monetize your online business. No code required.",
    buttonText: "Get Started Free",
    buttonUrl: "#",
    secondaryButtonText: "See How It Works",
    secondaryButtonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Primary Button Text", type: "text" },
    { key: "buttonUrl", label: "Primary Button URL", type: "url" },
    { key: "secondaryButtonText", label: "Secondary Button Text", type: "text" },
    { key: "secondaryButtonUrl", label: "Secondary Button URL", type: "url" },
  ],
  component: Hero001,
};

/* ==========================================================================
   HERO-002: Split Image Right
   Text on the left, image placeholder on the right.
   ========================================================================== */

const Hero002: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Grow Your Business Online";
  const subheading =
    (props.subheading as string) ||
    "Everything you need to build a thriving digital business, all in one place.";
  const buttonText = (props.buttonText as string) || "Start Building";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16" },
      React.createElement(
        "div",
        { className: "flex-1 text-center lg:text-left" },
        React.createElement(
          "span",
          { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" },
          "All-in-one platform"
        ),
        React.createElement(
          "h1",
          { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-600 max-w-lg leading-relaxed" },
          subheading
        ),
        React.createElement(
          "div",
          { className: "mt-8" },
          React.createElement(
            "a",
            {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
            },
            buttonText
          )
        )
      ),
      React.createElement("div", {
        className: "flex-1 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl w-full h-72 lg:h-96 shadow-sm",
      })
    )
  );
};

const hero002: SectionDefinition = {
  id: "hero-002",
  category: "hero",
  name: "Split Image Right",
  description: "Hero with text on the left and an image on the right",
  tags: ["split", "image", "two-column"],
  defaultProps: {
    heading: "Grow Your Business Online",
    subheading:
      "Everything you need to build a thriving digital business, all in one place.",
    buttonText: "Start Building",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero002,
};

/* ==========================================================================
   HERO-003: Split Image Left
   Image on the left, text on the right.
   ========================================================================== */

const Hero003: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Your Vision, Our Platform";
  const subheading =
    (props.subheading as string) ||
    "Create stunning websites, sell products, and build your community with powerful yet simple tools.";
  const buttonText = (props.buttonText as string) || "Get Started";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const secondaryButtonText = (props.secondaryButtonText as string) || "Learn More";
  const secondaryButtonUrl = (props.secondaryButtonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16" },
      React.createElement("div", {
        className: "flex-1 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl w-full h-72 lg:h-96 shadow-sm",
      }),
      React.createElement(
        "div",
        { className: "flex-1 text-center lg:text-left" },
        React.createElement(
          "h1",
          { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-600 max-w-lg leading-relaxed" },
          subheading
        ),
        React.createElement(
          "div",
          { className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" },
          React.createElement(
            "a",
            {
              href: buttonUrl,
              className: "rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
            },
            buttonText
          ),
          React.createElement(
            "a",
            {
              href: secondaryButtonUrl,
              className: "rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-slate-700 font-semibold hover:bg-slate-50 transition-all",
            },
            secondaryButtonText
          )
        )
      )
    )
  );
};

const hero003: SectionDefinition = {
  id: "hero-003",
  category: "hero",
  name: "Split Image Left",
  description: "Hero with an image on the left and text on the right",
  tags: ["split", "image", "two-column", "reversed"],
  defaultProps: {
    heading: "Your Vision, Our Platform",
    subheading:
      "Create stunning websites, sell products, and build your community with powerful yet simple tools.",
    buttonText: "Get Started",
    buttonUrl: "#",
    secondaryButtonText: "Learn More",
    secondaryButtonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Primary Button Text", type: "text" },
    { key: "buttonUrl", label: "Primary Button URL", type: "url" },
    { key: "secondaryButtonText", label: "Secondary Button Text", type: "text" },
    { key: "secondaryButtonUrl", label: "Secondary Button URL", type: "url" },
  ],
  component: Hero003,
};

/* ==========================================================================
   HERO-004: Gradient Background
   Bold gradient background with white text.
   ========================================================================== */

const Hero004: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Supercharge Your Growth";
  const subheading =
    (props.subheading as string) ||
    "Join thousands of creators who use our platform to build, sell, and scale their businesses.";
  const buttonText = (props.buttonText as string) || "Try It Free";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 lg:py-40", style: { background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)" } },
    React.createElement("div", {
      style: { position: "absolute", top: "10%", left: "-5%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement("div", {
      style: { position: "absolute", bottom: "10%", right: "-5%", width: "25%", height: "25%", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-white px-8 py-3.5 text-violet-600 font-bold hover:bg-white/90 transition-all shadow-xl shadow-black/10",
          },
          buttonText
        )
      )
    )
  );
};

const hero004: SectionDefinition = {
  id: "hero-004",
  category: "hero",
  name: "Gradient Background",
  description: "Bold gradient background hero with white text and strong CTA",
  tags: ["gradient", "bold", "colorful", "vibrant"],
  defaultProps: {
    heading: "Supercharge Your Growth",
    subheading:
      "Join thousands of creators who use our platform to build, sell, and scale their businesses.",
    buttonText: "Try It Free",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero004,
};

/* ==========================================================================
   HERO-005: Video Background
   Dark overlay with centered text (video background placeholder).
   ========================================================================== */

const Hero005: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Tell Your Story";
  const subheading =
    (props.subheading as string) ||
    "Captivate your audience with a cinematic experience that brings your brand to life.";
  const buttonText = (props.buttonText as string) || "Watch Demo";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative py-32 sm:py-40 bg-slate-950 overflow-hidden" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { background: "linear-gradient(180deg, rgba(2,6,23,0.7) 0%, rgba(2,6,23,0.9) 100%)" },
    }),
    React.createElement(
      "div",
      { className: "absolute inset-0 flex items-center justify-center" },
      React.createElement("span", { className: "bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 text-slate-500 text-sm" }, "Video Background Placeholder")
    ),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10 flex justify-center gap-4" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-slate-900 font-semibold hover:bg-white/90 transition-all shadow-xl",
          },
          React.createElement(
            "svg",
            { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20" },
            React.createElement("path", {
              d: "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z",
            })
          ),
          buttonText
        )
      )
    )
  );
};

const hero005: SectionDefinition = {
  id: "hero-005",
  category: "hero",
  name: "Video Background",
  description: "Dark overlay hero with video background placeholder and play button CTA",
  tags: ["video", "dark", "cinematic", "overlay"],
  defaultProps: {
    heading: "Tell Your Story",
    subheading:
      "Captivate your audience with a cinematic experience that brings your brand to life.",
    buttonText: "Watch Demo",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero005,
};

/* ==========================================================================
   HERO-006: Parallax
   Large background image with parallax-style overlay.
   ========================================================================== */

const Hero006: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Experience the Difference";
  const subheading =
    (props.subheading as string) ||
    "Immerse yourself in a platform built for creators who demand more.";
  const buttonText = (props.buttonText as string) || "Explore Now";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative py-32 sm:py-40 lg:py-48 overflow-hidden", style: { background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" } },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 50%, rgba(15,23,42,0.7) 100%)" },
    }),
    React.createElement("div", {
      style: { position: "absolute", top: "20%", right: "10%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-lg" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-block rounded-full bg-white px-10 py-4 text-slate-900 font-bold hover:bg-white/90 transition-all shadow-2xl text-lg",
          },
          buttonText
        )
      )
    )
  );
};

const hero006: SectionDefinition = {
  id: "hero-006",
  category: "hero",
  name: "Parallax Hero",
  description: "Large background image with parallax-style overlay and bold typography",
  tags: ["parallax", "background-image", "bold", "immersive"],
  defaultProps: {
    heading: "Experience the Difference",
    subheading: "Immerse yourself in a platform built for creators who demand more.",
    buttonText: "Explore Now",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero006,
};

/* ==========================================================================
   HERO-007: With Form
   Hero with inline email signup form.
   ========================================================================== */

const Hero007: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Start Your Journey Today";
  const subheading =
    (props.subheading as string) ||
    "Enter your email to get early access and a 14-day free trial. No credit card required.";
  const buttonText = (props.buttonText as string) || "Get Early Access";
  const placeholderText = (props.placeholderText as string) || "Enter your email address";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", {
      style: { position: "absolute", top: "-15%", left: "50%", transform: "translateX(-50%)", width: "60%", height: "40%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto" },
        React.createElement("input", {
          type: "email",
          placeholder: placeholderText,
          className: "flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent backdrop-blur-sm",
        }),
        React.createElement(
          "button",
          {
            type: "button",
            className: "rounded-xl bg-violet-600 px-6 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all whitespace-nowrap shadow-lg shadow-violet-500/25",
          },
          buttonText
        )
      ),
      React.createElement(
        "p",
        { className: "mt-4 text-sm text-slate-500" },
        "Free forever for up to 1,000 contacts"
      )
    )
  );
};

const hero007: SectionDefinition = {
  id: "hero-007",
  category: "hero",
  name: "Hero with Form",
  description: "Hero section with inline email signup form",
  tags: ["form", "email", "signup", "lead-capture"],
  defaultProps: {
    heading: "Start Your Journey Today",
    subheading:
      "Enter your email to get early access and a 14-day free trial. No credit card required.",
    buttonText: "Get Early Access",
    placeholderText: "Enter your email address",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "placeholderText", label: "Placeholder Text", type: "text" },
  ],
  component: Hero007,
};

/* ==========================================================================
   HERO-008: Dark Hero
   Dark background, light text, minimal design.
   ========================================================================== */

const Hero008: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Built for the Modern Web";
  const subheading =
    (props.subheading as string) ||
    "A powerful foundation for your next project. Fast, secure, and infinitely customizable.";
  const buttonText = (props.buttonText as string) || "Get Started";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const secondaryButtonText = (props.secondaryButtonText as string) || "Documentation";
  const secondaryButtonUrl = (props.secondaryButtonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-slate-950" },
    React.createElement("div", {
      style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.2) 50%, transparent 100%)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" },
        React.createElement("span", null, "Built for the "),
        React.createElement("span", {
          style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
        }, "Modern Web")
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10 flex flex-col sm:flex-row justify-center gap-4" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
          },
          buttonText
        ),
        React.createElement(
          "a",
          {
            href: secondaryButtonUrl,
            className: "rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-white font-semibold hover:bg-white/10 transition-all",
          },
          secondaryButtonText
        )
      )
    )
  );
};

const hero008: SectionDefinition = {
  id: "hero-008",
  category: "hero",
  name: "Dark Hero",
  description: "Dark background hero with light text and minimal design",
  tags: ["dark", "minimal", "modern", "developer"],
  defaultProps: {
    heading: "Built for the Modern Web",
    subheading:
      "A powerful foundation for your next project. Fast, secure, and infinitely customizable.",
    buttonText: "Get Started",
    buttonUrl: "#",
    secondaryButtonText: "Documentation",
    secondaryButtonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Primary Button Text", type: "text" },
    { key: "buttonUrl", label: "Primary Button URL", type: "url" },
    { key: "secondaryButtonText", label: "Secondary Button Text", type: "text" },
    { key: "secondaryButtonUrl", label: "Secondary Button URL", type: "url" },
  ],
  component: Hero008,
};

/* ==========================================================================
   HERO-009: Light Minimal
   Very clean design with lots of whitespace.
   ========================================================================== */

const Hero009: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Simplicity Wins";
  const subheading =
    (props.subheading as string) ||
    "Less noise, more results. Focus on what matters most to your audience.";
  const buttonText = (props.buttonText as string) || "Get Started";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "py-32 md:py-40 lg:py-48 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900" },
        heading
      ),
      React.createElement("div", {
        className: "mt-8 w-16 h-0.5 mx-auto",
        style: { background: "linear-gradient(to right, #8b5cf6, #6366f1)" },
      }),
      React.createElement(
        "p",
        { className: "mt-8 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-12" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-block rounded-full bg-slate-900 px-10 py-3.5 text-white font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
          },
          buttonText
        )
      )
    )
  );
};

const hero009: SectionDefinition = {
  id: "hero-009",
  category: "hero",
  name: "Light Minimal",
  description: "Ultra-clean hero with generous whitespace and light typography",
  tags: ["minimal", "clean", "whitespace", "elegant"],
  defaultProps: {
    heading: "Simplicity Wins",
    subheading: "Less noise, more results. Focus on what matters most to your audience.",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero009,
};

/* ==========================================================================
   HERO-010: App Screenshot
   Centered text above an app screenshot placeholder.
   ========================================================================== */

const Hero010: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "See It in Action";
  const subheading =
    (props.subheading as string) ||
    "A beautiful, intuitive interface that your team will love from day one.";
  const buttonText = (props.buttonText as string) || "Start Free Trial";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden pt-24 sm:pt-32 pb-0 bg-slate-950" },
    React.createElement("div", {
      style: { position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "60%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "span",
        { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" },
        "Product Preview"
      ),
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-8" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
          },
          buttonText
        )
      ),
      React.createElement(
        "div",
        { className: "mt-16 mx-auto max-w-5xl" },
        React.createElement("div", {
          className: "bg-white/5 border border-white/10 rounded-t-2xl w-full h-80 md:h-96 shadow-2xl",
        })
      )
    )
  );
};

const hero010: SectionDefinition = {
  id: "hero-010",
  category: "hero",
  name: "App Screenshot",
  description: "Hero with centered text above a large app screenshot placeholder",
  tags: ["screenshot", "product", "app", "saas"],
  defaultProps: {
    heading: "See It in Action",
    subheading: "A beautiful, intuitive interface that your team will love from day one.",
    buttonText: "Start Free Trial",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero010,
};

/* ==========================================================================
   HERO-011: Floating Cards
   Hero with decorative floating card elements.
   ========================================================================== */

const Hero011: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Everything You Need";
  const subheading =
    (props.subheading as string) ||
    "One platform, endless possibilities. Build websites, sell courses, manage contacts, and automate your business.";
  const buttonText = (props.buttonText as string) || "Start for Free";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative py-24 sm:py-32 lg:py-40 bg-white overflow-hidden" },
    // Floating decorative cards
    React.createElement("div", {
      className: "absolute top-16 left-10 w-40 h-28 rounded-2xl bg-white border border-slate-200 shadow-sm rotate-6 hidden lg:block",
      style: { background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)" },
    }),
    React.createElement("div", {
      className: "absolute top-32 right-16 w-48 h-32 rounded-2xl bg-white border border-slate-200 shadow-sm -rotate-3 hidden lg:block",
      style: { background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)" },
    }),
    React.createElement("div", {
      className: "absolute bottom-20 left-20 w-36 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm -rotate-6 hidden lg:block",
      style: { background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)" },
    }),
    React.createElement("div", {
      className: "absolute bottom-16 right-24 w-44 h-28 rounded-2xl bg-white border border-slate-200 shadow-sm rotate-3 hidden lg:block",
      style: { background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "span",
        { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" },
        "All-in-one solution"
      ),
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
          },
          buttonText
        )
      )
    )
  );
};

const hero011: SectionDefinition = {
  id: "hero-011",
  category: "hero",
  name: "Floating Cards",
  description: "Hero with decorative floating card elements in the background",
  tags: ["cards", "decorative", "floating", "creative"],
  defaultProps: {
    heading: "Everything You Need",
    subheading:
      "One platform, endless possibilities. Build websites, sell courses, manage contacts, and automate your business.",
    buttonText: "Start for Free",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero011,
};

/* ==========================================================================
   HERO-012: Wave Bottom
   Hero with SVG wave divider at the bottom.
   ========================================================================== */

const Hero012: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Ride the Wave of Innovation";
  const subheading =
    (props.subheading as string) ||
    "Stay ahead of the competition with cutting-edge tools designed for modern creators.";
  const buttonText = (props.buttonText as string) || "Join Now";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative pt-24 sm:pt-32 pb-32", style: { background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)" } },
    React.createElement("div", {
      style: { position: "absolute", top: "10%", right: "5%", width: "25%", height: "25%", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-white px-8 py-3.5 text-violet-600 font-bold hover:bg-white/90 transition-all shadow-xl",
          },
          buttonText
        )
      )
    ),
    React.createElement(
      "div",
      { className: "absolute bottom-0 left-0 w-full overflow-hidden leading-none" },
      React.createElement(
        "svg",
        { className: "relative block w-full h-16 md:h-24", viewBox: "0 0 1200 120", preserveAspectRatio: "none", fill: "white" },
        React.createElement("path", {
          d: "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
        })
      )
    )
  );
};

const hero012: SectionDefinition = {
  id: "hero-012",
  category: "hero",
  name: "Wave Bottom",
  description: "Hero with SVG wave divider at the bottom for smooth transitions",
  tags: ["wave", "divider", "svg", "colored-background"],
  defaultProps: {
    heading: "Ride the Wave of Innovation",
    subheading:
      "Stay ahead of the competition with cutting-edge tools designed for modern creators.",
    buttonText: "Join Now",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero012,
};

/* ==========================================================================
   HERO-013: Typed Effect
   Hero with monospace subtitle suggesting a typed text effect.
   ========================================================================== */

const Hero013: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Code. Create. Launch.";
  const subheading =
    (props.subheading as string) || "npx create-gritcms-app my-project";
  const description =
    (props.description as string) ||
    "Go from zero to production in minutes with our developer-first platform.";
  const buttonText = (props.buttonText as string) || "Read the Docs";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-slate-950" },
    React.createElement("div", {
      style: { position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)", width: "50%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" },
        React.createElement("span", {
          style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
        }, heading)
      ),
      React.createElement(
        "div",
        { className: "mt-8 inline-block rounded-2xl bg-white/5 border border-white/10 px-6 py-4 backdrop-blur-sm" },
        React.createElement(
          "code",
          { className: "text-lg md:text-xl font-mono text-emerald-400" },
          React.createElement("span", { className: "text-slate-500" }, "$ "),
          subheading,
          React.createElement("span", { className: "animate-pulse text-emerald-400 ml-1" }, "|")
        )
      ),
      React.createElement(
        "p",
        { className: "mt-8 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed" },
        description
      ),
      React.createElement(
        "div",
        { className: "mt-10" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-block rounded-xl border border-violet-500/50 bg-violet-500/10 px-8 py-3.5 text-violet-400 font-semibold hover:bg-violet-500 hover:text-white transition-all",
          },
          buttonText
        )
      )
    )
  );
};

const hero013: SectionDefinition = {
  id: "hero-013",
  category: "hero",
  name: "Typed Effect",
  description: "Developer-focused hero with monospace typed text effect and terminal-style design",
  tags: ["developer", "code", "terminal", "typed", "monospace"],
  defaultProps: {
    heading: "Code. Create. Launch.",
    subheading: "npx create-gritcms-app my-project",
    description: "Go from zero to production in minutes with our developer-first platform.",
    buttonText: "Read the Docs",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Terminal Command", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero013,
};

/* ==========================================================================
   HERO-014: Full Screen
   100vh hero taking full viewport height.
   ========================================================================== */

const Hero014: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Make an Impact";
  const subheading =
    (props.subheading as string) ||
    "Create memorable experiences that resonate with your audience and drive real results.";
  const buttonText = (props.buttonText as string) || "Get Started";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "min-h-screen flex items-center justify-center relative overflow-hidden bg-white" },
    React.createElement("div", {
      style: { position: "absolute", top: "20%", right: "10%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement("div", {
      style: { position: "absolute", bottom: "20%", left: "10%", width: "25%", height: "25%", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-8 text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-12 flex flex-col sm:flex-row justify-center gap-4" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "rounded-full bg-slate-900 px-10 py-4 text-white font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
          },
          buttonText
        )
      ),
      React.createElement(
        "div",
        { className: "mt-20 animate-bounce" },
        React.createElement(
          "svg",
          { className: "w-6 h-6 text-slate-400 mx-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
          React.createElement("path", {
            strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3",
          })
        )
      )
    )
  );
};

const hero014: SectionDefinition = {
  id: "hero-014",
  category: "hero",
  name: "Full Screen Hero",
  description: "Full viewport height hero with large typography and scroll indicator",
  tags: ["fullscreen", "full-height", "large", "impact"],
  defaultProps: {
    heading: "Make an Impact",
    subheading:
      "Create memorable experiences that resonate with your audience and drive real results.",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero014,
};

/* ==========================================================================
   HERO-015: With Stats
   Hero section with a stats bar below the main content.
   ========================================================================== */

const Hero015: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Trusted by Thousands";
  const subheading =
    (props.subheading as string) ||
    "Join a growing community of creators, entrepreneurs, and businesses who trust our platform.";
  const buttonText = (props.buttonText as string) || "Join Today";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const stat1Value = (props.stat1Value as string) || "10,000+";
  const stat1Label = (props.stat1Label as string) || "Active Users";
  const stat2Value = (props.stat2Value as string) || "50M+";
  const stat2Label = (props.stat2Label as string) || "Pages Served";
  const stat3Value = (props.stat3Value as string) || "99.9%";
  const stat3Label = (props.stat3Label as string) || "Uptime";
  const stat4Value = (props.stat4Value as string) || "4.9/5";
  const stat4Label = (props.stat4Label as string) || "User Rating";

  const stats = [
    { value: stat1Value, label: stat1Label },
    { value: stat2Value, label: stat2Label },
    { value: stat3Value, label: stat3Label },
    { value: stat4Value, label: stat4Label },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", {
      style: { position: "absolute", top: "-10%", right: "-5%", width: "35%", height: "35%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
          "h1",
          { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" },
          subheading
        ),
        React.createElement(
          "div",
          { className: "mt-10" },
          React.createElement(
            "a",
            {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
            },
            buttonText
          )
        )
      ),
      React.createElement(
        "div",
        { className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10" },
        ...stats.map((stat, i) =>
          React.createElement(
            "div",
            { key: i, className: "text-center" },
            React.createElement("div", {
              className: "text-3xl md:text-4xl font-bold",
              style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
            }, stat.value),
            React.createElement(
              "div",
              { className: "mt-2 text-sm text-slate-500 font-medium uppercase tracking-wide" },
              stat.label
            )
          )
        )
      )
    )
  );
};

const hero015: SectionDefinition = {
  id: "hero-015",
  category: "hero",
  name: "Hero with Stats",
  description: "Hero section with a statistics bar showcasing key metrics below the CTA",
  tags: ["stats", "numbers", "trust", "metrics"],
  defaultProps: {
    heading: "Trusted by Thousands",
    subheading:
      "Join a growing community of creators, entrepreneurs, and businesses who trust our platform.",
    buttonText: "Join Today",
    buttonUrl: "#",
    stat1Value: "10,000+",
    stat1Label: "Active Users",
    stat2Value: "50M+",
    stat2Label: "Pages Served",
    stat3Value: "99.9%",
    stat3Label: "Uptime",
    stat4Value: "4.9/5",
    stat4Label: "User Rating",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    { key: "stat1Value", label: "Stat 1 Value", type: "text" },
    { key: "stat1Label", label: "Stat 1 Label", type: "text" },
    { key: "stat2Value", label: "Stat 2 Value", type: "text" },
    { key: "stat2Label", label: "Stat 2 Label", type: "text" },
    { key: "stat3Value", label: "Stat 3 Value", type: "text" },
    { key: "stat3Label", label: "Stat 3 Label", type: "text" },
    { key: "stat4Value", label: "Stat 4 Value", type: "text" },
    { key: "stat4Label", label: "Stat 4 Label", type: "text" },
  ],
  component: Hero015,
};

/* ==========================================================================
   HERO-016: Announcement Bar
   Hero with small announcement badge above the heading.
   ========================================================================== */

const Hero016: React.FC<Record<string, unknown>> = (props) => {
  const announcementText = (props.announcementText as string) || "New: AI-powered workflows are here";
  const announcementUrl = (props.announcementUrl as string) || "#";
  const heading = (props.heading as string) || "The Future of Creator Tools";
  const subheading =
    (props.subheading as string) ||
    "We just launched our most powerful update yet. Automate your business with intelligent workflows.";
  const buttonText = (props.buttonText as string) || "Explore Features";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const secondaryButtonText = (props.secondaryButtonText as string) || "View Pricing";
  const secondaryButtonUrl = (props.secondaryButtonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", {
      style: { position: "absolute", top: "-15%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "a",
        {
          href: announcementUrl,
          className: "inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 ring-1 ring-violet-100 hover:bg-violet-100 transition-all",
        },
        React.createElement("span", { className: "inline-block w-2 h-2 rounded-full bg-violet-600 animate-pulse" }),
        announcementText,
        React.createElement(
          "svg",
          { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
          React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })
        )
      ),
      React.createElement(
        "h1",
        { className: "mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10 flex flex-col sm:flex-row justify-center gap-4" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
          },
          buttonText
        ),
        React.createElement(
          "a",
          {
            href: secondaryButtonUrl,
            className: "rounded-xl border border-slate-200 px-8 py-3.5 text-slate-700 font-semibold hover:bg-slate-50 transition-all",
          },
          secondaryButtonText
        )
      )
    )
  );
};

const hero016: SectionDefinition = {
  id: "hero-016",
  category: "hero",
  name: "Announcement Bar",
  description: "Hero with an announcement badge above the main heading for product updates",
  tags: ["announcement", "badge", "product-launch", "update"],
  defaultProps: {
    announcementText: "New: AI-powered workflows are here",
    announcementUrl: "#",
    heading: "The Future of Creator Tools",
    subheading:
      "We just launched our most powerful update yet. Automate your business with intelligent workflows.",
    buttonText: "Explore Features",
    buttonUrl: "#",
    secondaryButtonText: "View Pricing",
    secondaryButtonUrl: "#",
  },
  propsSchema: [
    { key: "announcementText", label: "Announcement Text", type: "text" },
    { key: "announcementUrl", label: "Announcement URL", type: "url" },
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Primary Button Text", type: "text" },
    { key: "buttonUrl", label: "Primary Button URL", type: "url" },
    { key: "secondaryButtonText", label: "Secondary Button Text", type: "text" },
    { key: "secondaryButtonUrl", label: "Secondary Button URL", type: "url" },
  ],
  component: Hero016,
};

/* ==========================================================================
   HERO-017: Two Column Equal
   50/50 split with content on both sides.
   ========================================================================== */

const Hero017: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Two Sides of Success";
  const subheading =
    (props.subheading as string) ||
    "Combine powerful tools with beautiful design to create experiences your customers love.";
  const buttonText = (props.buttonText as string) || "Learn More";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const rightHeading = (props.rightHeading as string) || "Why Choose Us?";
  const feature1 = (props.feature1 as string) || "Lightning-fast page builder with drag and drop";
  const feature2 = (props.feature2 as string) || "Built-in email marketing and automation";
  const feature3 = (props.feature3 as string) || "Integrated payments and commerce tools";
  const feature4 = (props.feature4 as string) || "Advanced analytics and CRM included";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-400 leading-relaxed" },
          subheading
        ),
        React.createElement(
          "div",
          { className: "mt-8" },
          React.createElement(
            "a",
            {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
            },
            buttonText
          )
        )
      ),
      React.createElement(
        "div",
        { className: "rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-10" },
        React.createElement("h2", { className: "text-2xl font-bold text-white" }, rightHeading),
        React.createElement(
          "ul",
          { className: "mt-6 space-y-4" },
          ...[feature1, feature2, feature3, feature4].map((feat, i) =>
            React.createElement(
              "li",
              { key: i, className: "flex items-start gap-3" },
              React.createElement("span", { className: "flex-shrink-0 mt-1 text-violet-400 font-bold" }, "\u2713"),
              React.createElement("span", { className: "text-slate-300" }, feat)
            )
          )
        )
      )
    )
  );
};

const hero017: SectionDefinition = {
  id: "hero-017",
  category: "hero",
  name: "Two Column Equal",
  description: "50/50 split hero with text on left and feature list on right",
  tags: ["two-column", "equal", "features", "split"],
  defaultProps: {
    heading: "Two Sides of Success",
    subheading:
      "Combine powerful tools with beautiful design to create experiences your customers love.",
    buttonText: "Learn More",
    buttonUrl: "#",
    rightHeading: "Why Choose Us?",
    feature1: "Lightning-fast page builder with drag and drop",
    feature2: "Built-in email marketing and automation",
    feature3: "Integrated payments and commerce tools",
    feature4: "Advanced analytics and CRM included",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    { key: "rightHeading", label: "Right Column Heading", type: "text" },
    { key: "feature1", label: "Feature 1", type: "text" },
    { key: "feature2", label: "Feature 2", type: "text" },
    { key: "feature3", label: "Feature 3", type: "text" },
    { key: "feature4", label: "Feature 4", type: "text" },
  ],
  component: Hero017,
};

/* ==========================================================================
   HERO-018: Diagonal Split
   Angled/diagonal background split design.
   ========================================================================== */

const Hero018: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Break the Mold";
  const subheading =
    (props.subheading as string) ||
    "Stand out from the crowd with a platform that lets you express your unique vision.";
  const buttonText = (props.buttonText as string) || "Start Creating";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative py-24 sm:py-32 overflow-hidden" },
    React.createElement("div", { className: "absolute inset-0 bg-slate-950" }),
    React.createElement("div", {
      className: "absolute inset-0 bg-white",
      style: { clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 70%)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "max-w-2xl" },
        React.createElement(
          "span",
          { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" },
          "Be unique"
        ),
        React.createElement(
          "h1",
          { className: "text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-600 leading-relaxed" },
          subheading
        ),
        React.createElement(
          "div",
          { className: "mt-10" },
          React.createElement(
            "a",
            {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
            },
            buttonText
          )
        )
      )
    )
  );
};

const hero018: SectionDefinition = {
  id: "hero-018",
  category: "hero",
  name: "Diagonal Split",
  description: "Hero with an angled diagonal background split for a dynamic look",
  tags: ["diagonal", "angled", "creative", "dynamic"],
  defaultProps: {
    heading: "Break the Mold",
    subheading:
      "Stand out from the crowd with a platform that lets you express your unique vision.",
    buttonText: "Start Creating",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero018,
};

/* ==========================================================================
   HERO-019: Illustrated
   Hero with an illustration placeholder on the right.
   ========================================================================== */

const Hero019: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Bring Ideas to Life";
  const subheading =
    (props.subheading as string) ||
    "Transform your creative vision into a thriving online business with our intuitive platform.";
  const buttonText = (props.buttonText as string) || "Get Started";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const secondaryButtonText = (props.secondaryButtonText as string) || "See Examples";
  const secondaryButtonUrl = (props.secondaryButtonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16" },
      React.createElement(
        "div",
        { className: "flex-1 text-center lg:text-left" },
        React.createElement(
          "span",
          { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" },
          "For creators"
        ),
        React.createElement(
          "h1",
          { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-600 max-w-lg leading-relaxed" },
          subheading
        ),
        React.createElement(
          "div",
          { className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" },
          React.createElement(
            "a",
            {
              href: buttonUrl,
              className: "rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
            },
            buttonText
          ),
          React.createElement(
            "a",
            {
              href: secondaryButtonUrl,
              className: "rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-slate-700 font-semibold hover:bg-slate-50 transition-all",
            },
            secondaryButtonText
          )
        )
      ),
      React.createElement(
        "div",
        { className: "flex-1" },
        React.createElement(
          "div",
          { className: "rounded-3xl w-full h-72 lg:h-96 flex items-center justify-center", style: { background: "linear-gradient(135deg, #ede9fe 0%, #e0e7ff 100%)" } },
          React.createElement(
            "svg",
            { className: "w-24 h-24 text-violet-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
            React.createElement("path", {
              strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1,
              d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
            })
          )
        )
      )
    )
  );
};

const hero019: SectionDefinition = {
  id: "hero-019",
  category: "hero",
  name: "Illustrated Hero",
  description: "Hero with text on left and illustration placeholder on right",
  tags: ["illustration", "creative", "colorful", "friendly"],
  defaultProps: {
    heading: "Bring Ideas to Life",
    subheading:
      "Transform your creative vision into a thriving online business with our intuitive platform.",
    buttonText: "Get Started",
    buttonUrl: "#",
    secondaryButtonText: "See Examples",
    secondaryButtonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Primary Button Text", type: "text" },
    { key: "buttonUrl", label: "Primary Button URL", type: "url" },
    { key: "secondaryButtonText", label: "Secondary Button Text", type: "text" },
    { key: "secondaryButtonUrl", label: "Secondary Button URL", type: "url" },
  ],
  component: Hero019,
};

/* ==========================================================================
   HERO-020: Glassmorphism
   Frosted glass card overlay on a gradient background.
   ========================================================================== */

const Hero020: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "The Next Generation";
  const subheading =
    (props.subheading as string) ||
    "A beautifully crafted platform where design meets functionality. Build without limits.";
  const buttonText = (props.buttonText as string) || "Try It Now";
  const buttonUrl = (props.buttonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 lg:py-40", style: { background: "linear-gradient(135deg, #581c87 0%, #4f46e5 50%, #2563eb 100%)" } },
    React.createElement("div", {
      style: { position: "absolute", top: "10%", left: "10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)" },
    }),
    React.createElement("div", {
      style: { position: "absolute", bottom: "10%", right: "10%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center" },
      React.createElement(
        "div",
        {
          className: "rounded-3xl p-10 md:p-16 text-center max-w-2xl border border-white/20 shadow-2xl",
          style: { background: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" },
        },
        React.createElement(
          "h1",
          { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-white/80 leading-relaxed" },
          subheading
        ),
        React.createElement(
          "div",
          { className: "mt-10" },
          React.createElement(
            "a",
            {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-white px-8 py-3.5 text-violet-600 font-bold hover:bg-white/90 transition-all shadow-xl",
            },
            buttonText
          )
        )
      )
    )
  );
};

const hero020: SectionDefinition = {
  id: "hero-020",
  category: "hero",
  name: "Glassmorphism Hero",
  description: "Frosted glass card hero with gradient background and decorative blobs",
  tags: ["glassmorphism", "frosted", "modern", "gradient"],
  defaultProps: {
    heading: "The Next Generation",
    subheading:
      "A beautifully crafted platform where design meets functionality. Build without limits.",
    buttonText: "Try It Now",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: Hero020,
};

/* ==========================================================================
   HERO-021: Startup
   Bold startup-style with large typography.
   ========================================================================== */

const Hero021: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "We Help Startups Scale";
  const highlightedWord = (props.highlightedWord as string) || "Scale";
  const subheading =
    (props.subheading as string) ||
    "From MVP to market leader. Our platform gives you everything you need to grow fast and stay lean.";
  const buttonText = (props.buttonText as string) || "Apply for Early Access";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const socialProof = (props.socialProof as string) || "Backed by Y Combinator, a16z, and Sequoia";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-32 sm:py-40 bg-white" },
    React.createElement("div", {
      style: { position: "absolute", top: "30%", right: "0", width: "20%", height: "40%", background: "linear-gradient(180deg, rgba(139,92,246,0.05) 0%, transparent 100%)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement(
        "h1",
        { className: "text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-none" },
        heading
      ),
      React.createElement(
        "p",
        { className: "mt-8 text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light" },
        subheading
      ),
      React.createElement(
        "div",
        { className: "mt-10" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-block rounded-full bg-slate-900 px-10 py-4 text-white font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
          },
          buttonText
        )
      ),
      React.createElement(
        "p",
        { className: "mt-8 text-sm text-slate-400 font-medium" },
        socialProof
      )
    )
  );
};

const hero021: SectionDefinition = {
  id: "hero-021",
  category: "hero",
  name: "Startup Hero",
  description: "Bold startup-style hero with oversized typography and social proof",
  tags: ["startup", "bold", "large-text", "venture"],
  defaultProps: {
    heading: "We Help Startups Scale",
    highlightedWord: "Scale",
    subheading:
      "From MVP to market leader. Our platform gives you everything you need to grow fast and stay lean.",
    buttonText: "Apply for Early Access",
    buttonUrl: "#",
    socialProof: "Backed by Y Combinator, a16z, and Sequoia",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "highlightedWord", label: "Highlighted Word", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    { key: "socialProof", label: "Social Proof Text", type: "text" },
  ],
  component: Hero021,
};

/* ==========================================================================
   HERO-022: SaaS Product
   Product-focused hero with feature highlights.
   ========================================================================== */

const Hero022: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Your All-in-One SaaS Platform";
  const subheading =
    (props.subheading as string) ||
    "Streamline operations, delight customers, and accelerate growth with one unified platform.";
  const buttonText = (props.buttonText as string) || "Start Free Trial";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const secondaryButtonText = (props.secondaryButtonText as string) || "Book a Demo";
  const secondaryButtonUrl = (props.secondaryButtonUrl as string) || "#";
  const feature1 = (props.feature1 as string) || "No credit card required";
  const feature2 = (props.feature2 as string) || "14-day free trial";
  const feature3 = (props.feature3 as string) || "Cancel anytime";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", {
      style: { position: "absolute", top: "-20%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
          "span",
          { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" },
          "SaaS Platform"
        ),
        React.createElement(
          "h1",
          { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" },
          subheading
        ),
        React.createElement(
          "div",
          { className: "mt-10 flex flex-col sm:flex-row justify-center gap-4" },
          React.createElement(
            "a",
            {
              href: buttonUrl,
              className: "rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
            },
            buttonText
          ),
          React.createElement(
            "a",
            {
              href: secondaryButtonUrl,
              className: "rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-white font-semibold hover:bg-white/10 transition-all",
            },
            secondaryButtonText
          )
        ),
        React.createElement(
          "div",
          { className: "mt-8 flex flex-wrap justify-center gap-6" },
          ...[feature1, feature2, feature3].map((feat, i) =>
            React.createElement(
              "span",
              { key: i, className: "inline-flex items-center gap-2 text-sm text-slate-400" },
              React.createElement("span", { className: "text-emerald-400" }, "\u2713"),
              feat
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "mt-16 mx-auto max-w-5xl" },
        React.createElement("div", {
          className: "bg-white/5 border border-white/10 rounded-2xl w-full h-64 md:h-80 shadow-2xl",
        })
      )
    )
  );
};

const hero022: SectionDefinition = {
  id: "hero-022",
  category: "hero",
  name: "SaaS Product Hero",
  description: "Product-focused SaaS hero with feature highlights and screenshot placeholder",
  tags: ["saas", "product", "features", "trial"],
  defaultProps: {
    heading: "Your All-in-One SaaS Platform",
    subheading:
      "Streamline operations, delight customers, and accelerate growth with one unified platform.",
    buttonText: "Start Free Trial",
    buttonUrl: "#",
    secondaryButtonText: "Book a Demo",
    secondaryButtonUrl: "#",
    feature1: "No credit card required",
    feature2: "14-day free trial",
    feature3: "Cancel anytime",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Primary Button Text", type: "text" },
    { key: "buttonUrl", label: "Primary Button URL", type: "url" },
    { key: "secondaryButtonText", label: "Secondary Button Text", type: "text" },
    { key: "secondaryButtonUrl", label: "Secondary Button URL", type: "url" },
    { key: "feature1", label: "Feature 1", type: "text" },
    { key: "feature2", label: "Feature 2", type: "text" },
    { key: "feature3", label: "Feature 3", type: "text" },
  ],
  component: Hero022,
};

/* ==========================================================================
   HERO-023: Mobile App
   App-focused hero with phone mockup placeholder.
   ========================================================================== */

const Hero023: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Your Business in Your Pocket";
  const subheading =
    (props.subheading as string) ||
    "Manage everything on the go. Our mobile app puts the power of your entire business at your fingertips.";
  const buttonText = (props.buttonText as string) || "Download App";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const secondaryButtonText = (props.secondaryButtonText as string) || "View on Web";
  const secondaryButtonUrl = (props.secondaryButtonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", {
      style: { position: "absolute", top: "20%", left: "-5%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16" },
      React.createElement(
        "div",
        { className: "flex-1 text-center lg:text-left" },
        React.createElement(
          "span",
          { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" },
          "Mobile App"
        ),
        React.createElement(
          "h1",
          { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-400 max-w-lg leading-relaxed" },
          subheading
        ),
        React.createElement(
          "div",
          { className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" },
          React.createElement(
            "a",
            {
              href: buttonUrl,
              className: "inline-flex items-center gap-3 rounded-xl bg-white/10 border border-white/10 px-6 py-3.5 text-white font-semibold hover:bg-white/15 transition-all",
            },
            React.createElement(
              "svg",
              { className: "w-7 h-7", fill: "currentColor", viewBox: "0 0 24 24" },
              React.createElement("path", {
                d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z",
              })
            ),
            React.createElement("div", null,
              React.createElement("div", { className: "text-xs text-slate-400" }, "Download on the"),
              React.createElement("div", { className: "text-sm font-bold" }, "App Store")
            )
          ),
          React.createElement(
            "a",
            {
              href: secondaryButtonUrl,
              className: "inline-flex items-center gap-3 rounded-xl bg-white/10 border border-white/10 px-6 py-3.5 text-white font-semibold hover:bg-white/15 transition-all",
            },
            React.createElement(
              "svg",
              { className: "w-7 h-7", fill: "currentColor", viewBox: "0 0 24 24" },
              React.createElement("path", {
                d: "M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z",
              })
            ),
            React.createElement("div", null,
              React.createElement("div", { className: "text-xs text-slate-400" }, "Get it on"),
              React.createElement("div", { className: "text-sm font-bold" }, "Google Play")
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "flex-1 flex justify-center" },
        React.createElement(
          "div",
          { className: "relative w-64 h-[500px] bg-slate-800 rounded-[3rem] p-3 shadow-2xl border border-white/10" },
          React.createElement("div", { className: "w-full h-full bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2.4rem] overflow-hidden" }),
          React.createElement("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl" })
        )
      )
    )
  );
};

const hero023: SectionDefinition = {
  id: "hero-023",
  category: "hero",
  name: "Mobile App Hero",
  description: "App-focused hero with phone mockup and app store download buttons",
  tags: ["mobile", "app", "phone", "download"],
  defaultProps: {
    heading: "Your Business in Your Pocket",
    subheading:
      "Manage everything on the go. Our mobile app puts the power of your entire business at your fingertips.",
    buttonText: "Download App",
    buttonUrl: "#",
    secondaryButtonText: "View on Web",
    secondaryButtonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "App Store Button Text", type: "text" },
    { key: "buttonUrl", label: "App Store URL", type: "url" },
    { key: "secondaryButtonText", label: "Play Store Button Text", type: "text" },
    { key: "secondaryButtonUrl", label: "Play Store URL", type: "url" },
  ],
  component: Hero023,
};

/* ==========================================================================
   HERO-024: Personal Brand
   Personal hero with avatar placeholder and social links.
   ========================================================================== */

const Hero024: React.FC<Record<string, unknown>> = (props) => {
  const name = (props.name as string) || "Jane Smith";
  const title = (props.title as string) || "Creator, Entrepreneur & Speaker";
  const bio =
    (props.bio as string) ||
    "I help people build profitable online businesses. Featured in Forbes, TechCrunch, and Entrepreneur Magazine.";
  const buttonText = (props.buttonText as string) || "Work With Me";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const twitterUrl = (props.twitterUrl as string) || "#";
  const linkedinUrl = (props.linkedinUrl as string) || "#";
  const youtubeUrl = (props.youtubeUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", {
      style: { position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "50%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      React.createElement("div", {
        className: "mx-auto w-28 h-28 rounded-full shadow-lg ring-4 ring-white",
        style: { background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)" },
      }),
      React.createElement(
        "h1",
        { className: "mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900" },
        name
      ),
      React.createElement(
        "p",
        { className: "mt-2 text-lg font-medium", style: { backgroundImage: "linear-gradient(to right, #8b5cf6, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } },
        title
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed" },
        bio
      ),
      React.createElement(
        "div",
        { className: "mt-8" },
        React.createElement(
          "a",
          {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
          },
          buttonText
        )
      ),
      React.createElement(
        "div",
        { className: "mt-8 flex justify-center gap-5" },
        React.createElement(
          "a",
          { href: twitterUrl, className: "text-slate-400 hover:text-slate-600 transition-colors" },
          React.createElement(
            "svg",
            { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" },
            React.createElement("path", {
              d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
            })
          )
        ),
        React.createElement(
          "a",
          { href: linkedinUrl, className: "text-slate-400 hover:text-slate-600 transition-colors" },
          React.createElement(
            "svg",
            { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" },
            React.createElement("path", {
              d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            })
          )
        ),
        React.createElement(
          "a",
          { href: youtubeUrl, className: "text-slate-400 hover:text-slate-600 transition-colors" },
          React.createElement(
            "svg",
            { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" },
            React.createElement("path", {
              d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
            })
          )
        )
      )
    )
  );
};

const hero024: SectionDefinition = {
  id: "hero-024",
  category: "hero",
  name: "Personal Brand",
  description: "Personal brand hero with avatar, bio, CTA, and social media links",
  tags: ["personal", "brand", "avatar", "social", "creator"],
  defaultProps: {
    name: "Jane Smith",
    title: "Creator, Entrepreneur & Speaker",
    bio: "I help people build profitable online businesses. Featured in Forbes, TechCrunch, and Entrepreneur Magazine.",
    buttonText: "Work With Me",
    buttonUrl: "#",
    twitterUrl: "#",
    linkedinUrl: "#",
    youtubeUrl: "#",
  },
  propsSchema: [
    { key: "name", label: "Name", type: "text" },
    { key: "title", label: "Title / Tagline", type: "text" },
    { key: "bio", label: "Bio", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    { key: "twitterUrl", label: "Twitter URL", type: "url" },
    { key: "linkedinUrl", label: "LinkedIn URL", type: "url" },
    { key: "youtubeUrl", label: "YouTube URL", type: "url" },
  ],
  component: Hero024,
};

/* ==========================================================================
   HERO-025: Creative Agency
   Bold, creative, asymmetric layout for agencies.
   ========================================================================== */

const Hero025: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "We Create Bold Digital Experiences";
  const subheading =
    (props.subheading as string) ||
    "A creative agency that blends strategy, design, and technology to build brands that matter.";
  const buttonText = (props.buttonText as string) || "View Our Work";
  const buttonUrl = (props.buttonUrl as string) || "#";
  const secondaryButtonText = (props.secondaryButtonText as string) || "Get in Touch";
  const secondaryButtonUrl = (props.secondaryButtonUrl as string) || "#";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", {
      style: { position: "absolute", bottom: "0", right: "0", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", borderRadius: "50%" },
    }),
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" },
        React.createElement(
          "div",
          { className: "lg:col-span-7" },
          React.createElement(
            "span",
            { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6 uppercase tracking-widest" },
            "Creative Agency"
          ),
          React.createElement(
            "h1",
            { className: "text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none" },
            React.createElement("span", null, "We Create "),
            React.createElement("span", {
              style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
            }, "Bold"),
            React.createElement("br", null),
            "Digital Experiences"
          ),
          React.createElement(
            "p",
            { className: "mt-8 text-lg text-slate-400 max-w-lg leading-relaxed" },
            subheading
          ),
          React.createElement(
            "div",
            { className: "mt-10 flex flex-col sm:flex-row gap-4" },
            React.createElement(
              "a",
              {
                href: buttonUrl,
                className: "rounded-none bg-violet-600 px-8 py-4 text-white font-bold uppercase tracking-wider text-sm hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
              },
              buttonText
            ),
            React.createElement(
              "a",
              {
                href: secondaryButtonUrl,
                className: "rounded-none border-2 border-white/20 px-8 py-4 text-white font-bold uppercase tracking-wider text-sm hover:border-white/50 transition-all",
              },
              secondaryButtonText
            )
          )
        ),
        React.createElement(
          "div",
          { className: "lg:col-span-5 hidden lg:block" },
          React.createElement(
            "div",
            { className: "grid grid-cols-2 gap-4" },
            React.createElement("div", {
              className: "rounded-2xl h-48 col-span-2 bg-white/5 border border-white/10",
            }),
            React.createElement("div", {
              className: "rounded-2xl h-36 bg-white/5 border border-white/10",
            }),
            React.createElement("div", {
              className: "rounded-2xl h-36",
              style: { background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.1) 100%)", border: "1px solid rgba(255,255,255,0.1)" },
            })
          )
        )
      )
    )
  );
};

const hero025: SectionDefinition = {
  id: "hero-025",
  category: "hero",
  name: "Creative Agency",
  description: "Bold, creative agency hero with asymmetric layout and image grid",
  tags: ["agency", "creative", "bold", "asymmetric", "dark"],
  defaultProps: {
    heading: "We Create Bold Digital Experiences",
    subheading:
      "A creative agency that blends strategy, design, and technology to build brands that matter.",
    buttonText: "View Our Work",
    buttonUrl: "#",
    secondaryButtonText: "Get in Touch",
    secondaryButtonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "textarea" },
    { key: "buttonText", label: "Primary Button Text", type: "text" },
    { key: "buttonUrl", label: "Primary Button URL", type: "url" },
    { key: "secondaryButtonText", label: "Secondary Button Text", type: "text" },
    { key: "secondaryButtonUrl", label: "Secondary Button URL", type: "url" },
  ],
  component: Hero025,
};

/* ==========================================================================
   REGISTER ALL HERO SECTIONS
   ========================================================================== */

registerSections([
  hero001,
  hero002,
  hero003,
  hero004,
  hero005,
  hero006,
  hero007,
  hero008,
  hero009,
  hero010,
  hero011,
  hero012,
  hero013,
  hero014,
  hero015,
  hero016,
  hero017,
  hero018,
  hero019,
  hero020,
  hero021,
  hero022,
  hero023,
  hero024,
  hero025,
]);
