// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  cta-001  Banner Simple                                            */
/* ------------------------------------------------------------------ */
const cta001: SectionDefinition = {
  id: "cta-001",
  category: "cta",
  name: "Banner Simple",
  description: "Simple centered CTA with heading and button",
  tags: ["cta", "banner", "simple", "centered"],
  defaultProps: {
    heading: "Ready to get started?",
    description: "Join thousands of creators already using our platform to grow their audience.",
    buttonText: "Get Started Free",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Ready to get started?";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Get Started";
    const buttonUrl = (props.buttonUrl as string) || "#";

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
      React.createElement("div", {
        style: { position: "absolute", top: "-20%", right: "-10%", width: "35%", height: "35%", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description),
        React.createElement("div", { className: "mt-10" },
          React.createElement("a", {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
          }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-002  Banner Gradient                                          */
/* ------------------------------------------------------------------ */
const cta002: SectionDefinition = {
  id: "cta-002",
  category: "cta",
  name: "Banner Gradient",
  description: "Gradient background CTA banner",
  tags: ["cta", "banner", "gradient", "colorful"],
  defaultProps: {
    heading: "Transform your workflow today",
    description: "Start building something amazing with our powerful tools and resources.",
    buttonText: "Start Now",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Transform your workflow today";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Start Now";
    const buttonUrl = (props.buttonUrl as string) || "#";

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32", style: { background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)" } },
      React.createElement("div", {
        style: { position: "absolute", top: "10%", right: "5%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed" }, description),
        React.createElement("div", { className: "mt-10" },
          React.createElement("a", {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-white px-8 py-3.5 text-violet-600 font-bold hover:bg-white/90 transition-all shadow-xl",
          }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-003  Split Image                                              */
/* ------------------------------------------------------------------ */
const cta003: SectionDefinition = {
  id: "cta-003",
  category: "cta",
  name: "Split Image",
  description: "CTA with image on one side and text on the other",
  tags: ["cta", "split", "image", "two-column"],
  defaultProps: {
    heading: "Build your dream project",
    description: "Our platform gives you everything you need to launch, grow, and monetize your online presence.",
    buttonText: "Learn More",
    buttonUrl: "#",
    imageUrl: "",
    imageAlt: "CTA illustration",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    { key: "imageUrl", label: "Image", type: "image" },
    { key: "imageAlt", label: "Image Alt Text", type: "text" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Build your dream project";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Learn More";
    const buttonUrl = (props.buttonUrl as string) || "#";
    const imageUrl = props.imageUrl as string;
    const imageAlt = (props.imageAlt as string) || "CTA illustration";

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center" },
        React.createElement("div", null,
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, description),
          React.createElement("div", { className: "mt-8" },
            React.createElement("a", {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
            }, buttonText)
          )
        ),
        imageUrl
          ? React.createElement("img", { src: imageUrl, alt: imageAlt, className: "w-full h-80 object-cover rounded-2xl shadow-sm" })
          : React.createElement("div", { className: "w-full h-80 rounded-2xl flex items-center justify-center", style: { background: "linear-gradient(135deg, #f5f3ff 0%, #eef2ff 100%)" } },
              React.createElement("span", { className: "text-slate-400 text-sm" }, "Image placeholder")
            )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-004  With Stats                                               */
/* ------------------------------------------------------------------ */
const cta004: SectionDefinition = {
  id: "cta-004",
  category: "cta",
  name: "With Stats",
  description: "CTA section with supporting statistics",
  tags: ["cta", "stats", "numbers", "social-proof"],
  defaultProps: {
    heading: "Trusted by teams worldwide",
    description: "Join the growing community of professionals who rely on our tools every day.",
    buttonText: "Join Now",
    buttonUrl: "#",
    stats: [
      { value: "10K+", label: "Active Users" },
      { value: "99.9%", label: "Uptime" },
      { value: "50M+", label: "Tasks Completed" },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    {
      key: "stats",
      label: "Stats",
      type: "items",
      itemFields: [
        { key: "value", label: "Value", type: "text", required: true },
        { key: "label", label: "Label", type: "text", required: true },
      ],
    },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Trusted by teams worldwide";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Join Now";
    const buttonUrl = (props.buttonUrl as string) || "#";
    const stats = (props.stats as Array<{ value: string; label: string }>) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", {
        style: { position: "absolute", top: "-15%", left: "-5%", width: "35%", height: "35%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description),
        stats.length > 0 && React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 mb-12" },
          ...stats.map((stat, i) =>
            React.createElement("div", { key: i },
              React.createElement("div", {
                className: "text-3xl md:text-4xl font-bold",
                style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
              }, stat.value),
              React.createElement("div", { className: "text-slate-500 text-sm mt-1 font-medium uppercase tracking-wide" }, stat.label)
            )
          )
        ),
        React.createElement("a", {
          href: buttonUrl,
          className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
        }, buttonText)
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-005  Countdown                                                */
/* ------------------------------------------------------------------ */
const cta005: SectionDefinition = {
  id: "cta-005",
  category: "cta",
  name: "Countdown",
  description: "CTA with countdown timer display",
  tags: ["cta", "countdown", "timer", "urgency"],
  defaultProps: {
    heading: "Limited Time Offer",
    description: "Don't miss out on this exclusive deal. Act now before time runs out!",
    buttonText: "Claim Your Spot",
    buttonUrl: "#",
    days: "03",
    hours: "12",
    minutes: "45",
    seconds: "30",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    { key: "days", label: "Days", type: "text" },
    { key: "hours", label: "Hours", type: "text" },
    { key: "minutes", label: "Minutes", type: "text" },
    { key: "seconds", label: "Seconds", type: "text" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Limited Time Offer";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Claim Your Spot";
    const buttonUrl = (props.buttonUrl as string) || "#";
    const days = (props.days as string) || "00";
    const hours = (props.hours as string) || "00";
    const minutes = (props.minutes as string) || "00";
    const seconds = (props.seconds as string) || "00";

    const timerBlock = (value: string, label: string) =>
      React.createElement("div", { className: "flex flex-col items-center" },
        React.createElement("div", { className: "text-4xl md:text-5xl font-bold text-white rounded-2xl bg-white/5 border border-white/10 px-5 py-4 min-w-[80px]" }, value),
        React.createElement("span", { className: "text-slate-500 text-sm mt-2 font-medium uppercase tracking-wide" }, label)
      );

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", {
        style: { position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "50%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("span", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" }, "Hurry up"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description),
        React.createElement("div", { className: "flex justify-center gap-4 md:gap-6 mt-10 mb-10" },
          timerBlock(days, "Days"),
          timerBlock(hours, "Hours"),
          timerBlock(minutes, "Minutes"),
          timerBlock(seconds, "Seconds")
        ),
        React.createElement("a", {
          href: buttonUrl,
          className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
        }, buttonText)
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-006  Newsletter Combo                                         */
/* ------------------------------------------------------------------ */
const cta006: SectionDefinition = {
  id: "cta-006",
  category: "cta",
  name: "Newsletter Combo",
  description: "CTA combined with email signup form",
  tags: ["cta", "newsletter", "email", "signup"],
  defaultProps: {
    heading: "Stay in the loop",
    description: "Subscribe to our newsletter and never miss an update. No spam, unsubscribe anytime.",
    buttonText: "Subscribe",
    placeholder: "Enter your email address",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "placeholder", label: "Input Placeholder", type: "text" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Stay in the loop";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Subscribe";
    const placeholder = (props.placeholder as string) || "Enter your email address";

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
      React.createElement("div", {
        style: { position: "absolute", bottom: "-10%", right: "-5%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description),
        React.createElement("div", { className: "mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" },
          React.createElement("input", {
            type: "email",
            placeholder,
            className: "flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent backdrop-blur-sm",
          }),
          React.createElement("button", {
            type: "button",
            className: "rounded-xl bg-violet-600 px-6 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all whitespace-nowrap shadow-lg shadow-violet-500/25",
          }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-007  Dark Background                                          */
/* ------------------------------------------------------------------ */
const cta007: SectionDefinition = {
  id: "cta-007",
  category: "cta",
  name: "Dark Background",
  description: "Dark themed CTA section",
  tags: ["cta", "dark", "modern"],
  defaultProps: {
    heading: "Take your business to the next level",
    description: "Powerful tools and expert support to help you succeed. Get started in minutes.",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Take your business to the next level";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Get Started";
    const buttonUrl = (props.buttonUrl as string) || "#";

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", {
        style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.2) 50%, transparent 100%)" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" },
          React.createElement("span", null, "Take your business to the "),
          React.createElement("span", {
            style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
          }, "next level")
        ),
        description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description),
        React.createElement("div", { className: "mt-10" },
          React.createElement("a", {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
          }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-008  App Download                                             */
/* ------------------------------------------------------------------ */
const cta008: SectionDefinition = {
  id: "cta-008",
  category: "cta",
  name: "App Download",
  description: "CTA with app store download buttons",
  tags: ["cta", "app", "download", "mobile"],
  defaultProps: {
    heading: "Download our mobile app",
    description: "Access everything on the go. Available for iOS and Android devices.",
    appStoreUrl: "#",
    playStoreUrl: "#",
    imageUrl: "",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "appStoreUrl", label: "App Store URL", type: "url" },
    { key: "playStoreUrl", label: "Play Store URL", type: "url" },
    { key: "imageUrl", label: "Phone Mockup Image", type: "image" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Download our mobile app";
    const description = (props.description as string) || "";
    const appStoreUrl = (props.appStoreUrl as string) || "#";
    const playStoreUrl = (props.playStoreUrl as string) || "#";
    const imageUrl = props.imageUrl as string;

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", {
        style: { position: "absolute", top: "-15%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center" },
        React.createElement("div", null,
          React.createElement("span", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 mb-6" }, "Mobile App"),
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed" }, description),
          React.createElement("div", { className: "mt-8 flex flex-wrap gap-4" },
            React.createElement("a", {
              href: appStoreUrl,
              className: "inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 transition-all",
            },
              React.createElement("span", { className: "text-xl" }, "\u{f8ff}"),
              React.createElement("span", null, "App Store")
            ),
            React.createElement("a", {
              href: playStoreUrl,
              className: "inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 transition-all",
            },
              React.createElement("span", { className: "text-xl" }, "\u25B6"),
              React.createElement("span", null, "Google Play")
            )
          )
        ),
        imageUrl
          ? React.createElement("img", { src: imageUrl, alt: "App mockup", className: "w-full max-w-xs mx-auto" })
          : React.createElement("div", { className: "w-64 h-[420px] rounded-[2rem] mx-auto flex items-center justify-center bg-white/5 border border-white/10" },
              React.createElement("span", { className: "text-slate-500 text-sm" }, "Phone mockup")
            )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-009  Free Trial                                               */
/* ------------------------------------------------------------------ */
const cta009: SectionDefinition = {
  id: "cta-009",
  category: "cta",
  name: "Free Trial",
  description: "CTA focused on free trial signup",
  tags: ["cta", "trial", "free", "signup"],
  defaultProps: {
    heading: "Start your free 14-day trial",
    description: "No credit card required. Full access to all features. Cancel anytime.",
    buttonText: "Start Free Trial",
    buttonUrl: "#",
    features: ["No credit card required", "14-day free trial", "Cancel anytime"],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    {
      key: "features",
      label: "Feature Bullets",
      type: "items",
      itemFields: [
        { key: "text", label: "Text", type: "text", required: true },
      ],
    },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Start your free 14-day trial";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Start Free Trial";
    const buttonUrl = (props.buttonUrl as string) || "#";
    const features = (props.features as string[]) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("span", { className: "inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6" }, "Free Trial"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" }, description),
        features.length > 0 && React.createElement("div", { className: "flex flex-wrap justify-center gap-6 mt-8" },
          ...features.map((feat, i) => {
            const text = typeof feat === "string" ? feat : (feat as Record<string, string>).text || "";
            return React.createElement("span", { key: i, className: "flex items-center gap-2 text-slate-600" },
              React.createElement("span", { className: "text-emerald-500 font-bold" }, "\u2713"),
              text
            );
          })
        ),
        React.createElement("div", { className: "mt-10" },
          React.createElement("a", {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
          }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-010  Minimal                                                  */
/* ------------------------------------------------------------------ */
const cta010: SectionDefinition = {
  id: "cta-010",
  category: "cta",
  name: "Minimal",
  description: "Ultra-clean minimal CTA section",
  tags: ["cta", "minimal", "clean", "simple"],
  defaultProps: {
    heading: "Ready to dive in?",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Ready to dive in?";
    const buttonText = (props.buttonText as string) || "Get Started";
    const buttonUrl = (props.buttonUrl as string) || "#";

    return React.createElement("section", { className: "py-20 sm:py-24 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200 pt-12" },
        React.createElement("h2", { className: "text-2xl md:text-3xl font-bold text-slate-900" }, heading),
        React.createElement("a", {
          href: buttonUrl,
          className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 shrink-0",
        }, buttonText)
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-011  Card Style                                               */
/* ------------------------------------------------------------------ */
const cta011: SectionDefinition = {
  id: "cta-011",
  category: "cta",
  name: "Card Style",
  description: "CTA inside a card container",
  tags: ["cta", "card", "contained", "boxed"],
  defaultProps: {
    heading: "Upgrade to Pro",
    description: "Unlock advanced features, priority support, and much more with our Pro plan.",
    buttonText: "Upgrade Now",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Upgrade to Pro";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Upgrade Now";
    const buttonUrl = (props.buttonUrl as string) || "#";

    return React.createElement("section", { className: "py-24 sm:py-32 bg-slate-50" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "max-w-3xl mx-auto rounded-2xl bg-white border border-slate-200 p-10 md:p-14 text-center shadow-sm hover:shadow-md transition-all" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, description),
          React.createElement("div", { className: "mt-10" },
            React.createElement("a", {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
            }, buttonText)
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-012  Full Width                                               */
/* ------------------------------------------------------------------ */
const cta012: SectionDefinition = {
  id: "cta-012",
  category: "cta",
  name: "Full Width",
  description: "Edge-to-edge full width CTA banner",
  tags: ["cta", "full-width", "banner", "wide"],
  defaultProps: {
    heading: "Start creating today",
    description: "Everything you need, all in one place.",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Start creating today";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Get Started";
    const buttonUrl = (props.buttonUrl as string) || "#";

    return React.createElement("section", { className: "relative overflow-hidden py-16 sm:py-20 w-full", style: { background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)" } },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6" },
        React.createElement("div", null,
          React.createElement("h2", { className: "text-2xl md:text-3xl font-bold text-white" }, heading),
          description && React.createElement("p", { className: "text-white/70 mt-2" }, description)
        ),
        React.createElement("a", {
          href: buttonUrl,
          className: "inline-block rounded-xl bg-white px-8 py-3.5 text-violet-600 font-bold hover:bg-white/90 transition-all shadow-xl shrink-0",
        }, buttonText)
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-013  With Testimonial                                         */
/* ------------------------------------------------------------------ */
const cta013: SectionDefinition = {
  id: "cta-013",
  category: "cta",
  name: "With Testimonial",
  description: "CTA with a testimonial quote",
  tags: ["cta", "testimonial", "quote", "social-proof"],
  defaultProps: {
    heading: "Join thousands of happy customers",
    buttonText: "Start Free Trial",
    buttonUrl: "#",
    quote: "This platform completely transformed how I run my business. Highly recommended!",
    author: "Sarah Johnson",
    role: "Founder, TechStart",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    { key: "quote", label: "Testimonial Quote", type: "textarea", required: true },
    { key: "author", label: "Author Name", type: "text", required: true },
    { key: "role", label: "Author Role", type: "text" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Join thousands of happy customers";
    const buttonText = (props.buttonText as string) || "Start Free Trial";
    const buttonUrl = (props.buttonUrl as string) || "#";
    const quote = (props.quote as string) || "";
    const author = (props.author as string) || "";
    const role = (props.role as string) || "";

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", {
        style: { position: "absolute", bottom: "-15%", left: "-5%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "text-center mb-12" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
          React.createElement("div", { className: "mt-8" },
            React.createElement("a", {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
            }, buttonText)
          )
        ),
        quote && React.createElement("div", { className: "mt-10 max-w-2xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-8" },
          React.createElement("p", { className: "text-slate-300 text-lg italic leading-relaxed" }, "\u201C" + quote + "\u201D"),
          React.createElement("div", { className: "mt-4" },
            React.createElement("p", { className: "font-semibold text-white" }, author),
            role && React.createElement("p", { className: "text-sm text-slate-500" }, role)
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-014  Stacked                                                  */
/* ------------------------------------------------------------------ */
const cta014: SectionDefinition = {
  id: "cta-014",
  category: "cta",
  name: "Stacked",
  description: "Vertically stacked CTA elements",
  tags: ["cta", "stacked", "vertical", "layered"],
  defaultProps: {
    eyebrow: "Get started today",
    heading: "The all-in-one platform for creators",
    description: "Build, launch, and grow your online business with powerful tools designed for modern creators.",
    buttonText: "Create Your Account",
    buttonUrl: "#",
    note: "Free forever. No credit card required.",
  },
  propsSchema: [
    { key: "eyebrow", label: "Eyebrow Text", type: "text" },
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    { key: "note", label: "Note Below Button", type: "text" },
  ],
  component: (props: Record<string, unknown>) => {
    const eyebrow = (props.eyebrow as string) || "";
    const heading = (props.heading as string) || "The all-in-one platform for creators";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Create Your Account";
    const buttonUrl = (props.buttonUrl as string) || "#";
    const note = (props.note as string) || "";

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("div", { className: "max-w-2xl mx-auto space-y-6" },
          eyebrow && React.createElement("p", {
            className: "text-sm font-semibold uppercase tracking-widest",
            style: { backgroundImage: "linear-gradient(to right, #8b5cf6, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
          }, eyebrow),
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight" }, heading),
          description && React.createElement("p", { className: "text-lg text-slate-600 leading-relaxed" }, description),
          React.createElement("div", { className: "pt-4" },
            React.createElement("a", {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-slate-900 px-10 py-4 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 text-lg",
            }, buttonText)
          ),
          note && React.createElement("p", { className: "text-sm text-slate-400" }, note)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-015  Two Buttons                                              */
/* ------------------------------------------------------------------ */
const cta015: SectionDefinition = {
  id: "cta-015",
  category: "cta",
  name: "Two Buttons",
  description: "CTA with primary and secondary buttons",
  tags: ["cta", "two-buttons", "dual", "options"],
  defaultProps: {
    heading: "Ready to grow your audience?",
    description: "Choose how you want to get started with our platform.",
    primaryText: "Start Free Trial",
    primaryUrl: "#",
    secondaryText: "Watch Demo",
    secondaryUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "primaryText", label: "Primary Button Text", type: "text", required: true },
    { key: "primaryUrl", label: "Primary Button URL", type: "url" },
    { key: "secondaryText", label: "Secondary Button Text", type: "text", required: true },
    { key: "secondaryUrl", label: "Secondary Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Ready to grow your audience?";
    const description = (props.description as string) || "";
    const primaryText = (props.primaryText as string) || "Start Free Trial";
    const primaryUrl = (props.primaryUrl as string) || "#";
    const secondaryText = (props.secondaryText as string) || "Watch Demo";
    const secondaryUrl = (props.secondaryUrl as string) || "#";

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
      React.createElement("div", {
        style: { position: "absolute", top: "-10%", right: "-5%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" }, description),
        React.createElement("div", { className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center" },
          React.createElement("a", {
            href: primaryUrl,
            className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
          }, primaryText),
          React.createElement("a", {
            href: secondaryUrl,
            className: "inline-block rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-white font-semibold hover:bg-white/10 transition-all",
          }, secondaryText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-016  With Features                                            */
/* ------------------------------------------------------------------ */
const cta016: SectionDefinition = {
  id: "cta-016",
  category: "cta",
  name: "With Features",
  description: "CTA with feature checklist",
  tags: ["cta", "features", "checklist", "benefits"],
  defaultProps: {
    heading: "Everything you need to succeed",
    description: "Our platform includes all the tools you need, with no hidden fees.",
    buttonText: "Get Started",
    buttonUrl: "#",
    features: [
      { text: "Unlimited projects" },
      { text: "Custom domains" },
      { text: "Advanced analytics" },
      { text: "Priority support" },
      { text: "API access" },
      { text: "Team collaboration" },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    {
      key: "features",
      label: "Features",
      type: "items",
      itemFields: [
        { key: "text", label: "Feature Text", type: "text", required: true },
      ],
    },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Everything you need to succeed";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Get Started";
    const buttonUrl = (props.buttonUrl as string) || "#";
    const features = (props.features as Array<{ text: string }>) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center" },
        React.createElement("div", null,
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, description),
          React.createElement("div", { className: "mt-8" },
            React.createElement("a", {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
            }, buttonText)
          )
        ),
        features.length > 0 && React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
          ...features.map((feat, i) =>
            React.createElement("div", { key: i, className: "flex items-center gap-3 rounded-xl bg-slate-50 p-4" },
              React.createElement("span", { className: "w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm flex-shrink-0 font-bold" }, "\u2713"),
              React.createElement("span", { className: "text-slate-700" }, feat.text)
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-017  Bordered                                                 */
/* ------------------------------------------------------------------ */
const cta017: SectionDefinition = {
  id: "cta-017",
  category: "cta",
  name: "Bordered",
  description: "CTA in a bordered container",
  tags: ["cta", "bordered", "outlined", "contained"],
  defaultProps: {
    heading: "Want to learn more?",
    description: "Schedule a demo with our team to see how we can help your business grow.",
    buttonText: "Schedule Demo",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Want to learn more?";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Schedule Demo";
    const buttonUrl = (props.buttonUrl as string) || "#";

    return React.createElement("section", { className: "py-24 sm:py-32 bg-white" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "max-w-4xl mx-auto border-2 border-violet-200 rounded-2xl p-10 md:p-14 text-center", style: { background: "linear-gradient(135deg, rgba(245,243,255,0.5) 0%, rgba(238,242,255,0.5) 100%)" } },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, description),
          React.createElement("div", { className: "mt-10" },
            React.createElement("a", {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
            }, buttonText)
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-018  Diagonal                                                 */
/* ------------------------------------------------------------------ */
const cta018: SectionDefinition = {
  id: "cta-018",
  category: "cta",
  name: "Diagonal",
  description: "CTA with diagonal background split",
  tags: ["cta", "diagonal", "angled", "creative"],
  defaultProps: {
    heading: "Level up your workflow",
    description: "Streamline operations and boost productivity with our integrated suite of tools.",
    buttonText: "Try It Free",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Level up your workflow";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Try It Free";
    const buttonUrl = (props.buttonUrl as string) || "#";

    return React.createElement("section", { className: "relative py-24 sm:py-32 overflow-hidden" },
      React.createElement("div", {
        className: "absolute inset-0",
        style: { background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)", clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        description && React.createElement("p", { className: "mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed" }, description),
        React.createElement("div", { className: "mt-10" },
          React.createElement("a", {
            href: buttonUrl,
            className: "inline-block rounded-xl bg-white px-8 py-3.5 text-violet-600 font-bold hover:bg-white/90 transition-all shadow-xl",
          }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-019  Floating                                                 */
/* ------------------------------------------------------------------ */
const cta019: SectionDefinition = {
  id: "cta-019",
  category: "cta",
  name: "Floating",
  description: "CTA card floating over gradient background",
  tags: ["cta", "floating", "card", "elevated"],
  defaultProps: {
    heading: "Launch your next big idea",
    description: "From concept to launch in record time. Build, iterate, and scale with confidence.",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Launch your next big idea";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Get Started";
    const buttonUrl = (props.buttonUrl as string) || "#";

    return React.createElement("section", { className: "py-24 sm:py-32 bg-slate-50" },
      React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("div", { className: "max-w-3xl mx-auto relative" },
          React.createElement("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-full", style: { background: "linear-gradient(to right, #8b5cf6, #6366f1)" } }),
          React.createElement("div", { className: "rounded-2xl bg-white border border-slate-200 shadow-lg p-10 md:p-14 text-center" },
            React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
            description && React.createElement("p", { className: "mt-6 text-lg text-slate-600 leading-relaxed" }, description),
            React.createElement("div", { className: "mt-10" },
              React.createElement("a", {
                href: buttonUrl,
                className: "inline-block rounded-xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10",
              }, buttonText)
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  cta-020  With Image Grid                                          */
/* ------------------------------------------------------------------ */
const cta020: SectionDefinition = {
  id: "cta-020",
  category: "cta",
  name: "With Image Grid",
  description: "CTA with small image grid",
  tags: ["cta", "images", "grid", "visual"],
  defaultProps: {
    heading: "See what others have built",
    description: "Join a community of creators building amazing projects with our platform.",
    buttonText: "Start Building",
    buttonUrl: "#",
    images: [
      { url: "", alt: "Project 1" },
      { url: "", alt: "Project 2" },
      { url: "", alt: "Project 3" },
      { url: "", alt: "Project 4" },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text", required: true },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    {
      key: "images",
      label: "Grid Images",
      type: "items",
      itemFields: [
        { key: "url", label: "Image URL", type: "image" },
        { key: "alt", label: "Alt Text", type: "text" },
      ],
    },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "See what others have built";
    const description = (props.description as string) || "";
    const buttonText = (props.buttonText as string) || "Start Building";
    const buttonUrl = (props.buttonUrl as string) || "#";
    const images = (props.images as Array<{ url: string; alt: string }>) || [];

    return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
      React.createElement("div", {
        style: { position: "absolute", bottom: "-10%", right: "-5%", width: "30%", height: "30%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", borderRadius: "50%" },
      }),
      React.createElement("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center" },
        React.createElement("div", null,
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
          description && React.createElement("p", { className: "mt-6 text-lg text-slate-400 leading-relaxed" }, description),
          React.createElement("div", { className: "mt-8" },
            React.createElement("a", {
              href: buttonUrl,
              className: "inline-block rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25",
            }, buttonText)
          )
        ),
        React.createElement("div", { className: "grid grid-cols-2 gap-3" },
          ...images.map((img, i) =>
            img.url
              ? React.createElement("img", { key: i, src: img.url, alt: img.alt || "", className: "w-full h-36 object-cover rounded-2xl" })
              : React.createElement("div", { key: i, className: "w-full h-36 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center" },
                  React.createElement("span", { className: "text-slate-500 text-xs" }, img.alt || "Image " + (i + 1))
                )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  Register all CTA sections                                         */
/* ------------------------------------------------------------------ */
registerSections([
  cta001,
  cta002,
  cta003,
  cta004,
  cta005,
  cta006,
  cta007,
  cta008,
  cta009,
  cta010,
  cta011,
  cta012,
  cta013,
  cta014,
  cta015,
  cta016,
  cta017,
  cta018,
  cta019,
  cta020,
]);
