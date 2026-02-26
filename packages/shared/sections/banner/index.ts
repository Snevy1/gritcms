// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  banner-001  Announcement Top                                      */
/* ------------------------------------------------------------------ */
const Banner001: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const text =
    (props.text as string) || "We just launched our brand-new course builder!";
  const linkText = (props.linkText as string) || "Learn more";
  const bgColor = (props.bgColor as string) || "bg-indigo-600";

  return React.createElement(
    "section",
    {
      className: `${bgColor} py-3`,
    },
    React.createElement(
      "div",
      {
        className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-center",
      },
      React.createElement(
        "p",
        { className: "text-sm font-medium text-white" },
        text
      ),
      React.createElement(
        "a",
        {
          href: "#",
          className: "text-sm font-semibold text-white underline underline-offset-2 hover:text-white/80 transition-colors",
        },
        linkText + " \u2192"
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  banner-002  Promo Ribbon                                          */
/* ------------------------------------------------------------------ */
const Banner002: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const badge = (props.badge as string) || "LIMITED TIME";
  const text =
    (props.text as string) || "Get 30% off all annual plans this week only.";
  const buttonText = (props.buttonText as string) || "Claim Offer";

  return React.createElement(
    "section",
    {
      className: "bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5",
    },
    React.createElement(
      "div",
      {
        className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4",
      },
      React.createElement(
        "span",
        {
          className: "bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider",
        },
        badge
      ),
      React.createElement(
        "p",
        { className: "text-sm font-medium text-white" },
        text
      ),
      React.createElement(
        "button",
        {
          className: "rounded-xl bg-white px-4 py-2 text-sm font-semibold text-violet-700 hover:bg-white/90 transition-colors",
        },
        buttonText
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  banner-003  Countdown Sale                                        */
/* ------------------------------------------------------------------ */
const Banner003: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Flash Sale Ends Soon!";
  const description =
    (props.description as string) ||
    "Save up to 50% on all products. Do not miss out on this limited-time deal.";
  const days = (props.days as string) || "02";
  const hours = (props.hours as string) || "14";
  const minutes = (props.minutes as string) || "36";
  const seconds = (props.seconds as string) || "08";
  const buttonText = (props.buttonText as string) || "Shop Now";

  const timeBox = (value: string, label: string) =>
    React.createElement(
      "div",
      { className: "text-center" },
      React.createElement(
        "div",
        {
          className: "bg-white/10 backdrop-blur-sm border border-white/10 text-white font-bold text-2xl w-14 h-14 flex items-center justify-center rounded-xl",
        },
        value
      ),
      React.createElement(
        "p",
        { className: "text-slate-400 text-xs mt-1.5 uppercase tracking-wider" },
        label
      )
    );

  return React.createElement(
    "section",
    { className: "bg-slate-950 py-8" },
    React.createElement(
      "div",
      {
        className: "mx-auto max-w-5xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8",
      },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          { className: "text-2xl font-bold text-white mb-2 tracking-tight" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-slate-400 text-sm" },
          description
        )
      ),
      React.createElement(
        "div",
        { className: "flex items-center gap-3" },
        timeBox(days, "Days"),
        React.createElement(
          "span",
          { className: "text-white/30 text-2xl font-bold" },
          ":"
        ),
        timeBox(hours, "Hours"),
        React.createElement(
          "span",
          { className: "text-white/30 text-2xl font-bold" },
          ":"
        ),
        timeBox(minutes, "Min"),
        React.createElement(
          "span",
          { className: "text-white/30 text-2xl font-bold" },
          ":"
        ),
        timeBox(seconds, "Sec")
      ),
      React.createElement(
        "button",
        {
          className: "rounded-xl bg-violet-600 px-8 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition-colors flex-shrink-0",
        },
        buttonText
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  banner-004  Cookie Consent                                        */
/* ------------------------------------------------------------------ */
const Banner004: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const text =
    (props.text as string) ||
    "We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.";
  const acceptText = (props.acceptText as string) || "Accept All";
  const declineText = (props.declineText as string) || "Decline";

  return React.createElement(
    "section",
    {
      className: "bg-white border-t border-slate-200 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]",
    },
    React.createElement(
      "div",
      {
        className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4",
      },
      React.createElement(
        "div",
        { className: "flex items-center gap-3" },
        React.createElement(
          "div",
          { className: "w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0" },
          React.createElement(
            "svg",
            {
              className: "w-4 h-4 text-violet-600",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
            },
            React.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 15v2m0 0v2m0-2h2m-2 0H10m9.374-7.076A9.957 9.957 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.514-.337-2.95-.94-4.237",
            })
          )
        ),
        React.createElement(
          "p",
          { className: "text-slate-600 text-sm" },
          text
        )
      ),
      React.createElement(
        "div",
        { className: "flex gap-3 flex-shrink-0" },
        React.createElement(
          "button",
          {
            className: "px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors",
          },
          declineText
        ),
        React.createElement(
          "button",
          {
            className: "rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 transition-colors",
          },
          acceptText
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  banner-005  App Download                                          */
/* ------------------------------------------------------------------ */
const Banner005: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Take It Everywhere";
  const description =
    (props.description as string) ||
    "Download our mobile app and manage your creator business on the go.";
  const appStoreText = (props.appStoreText as string) || "App Store";
  const playStoreText = (props.playStoreText as string) || "Google Play";

  return React.createElement(
    "section",
    { className: "bg-gradient-to-r from-violet-600 to-indigo-600 py-6" },
    React.createElement(
      "div",
      {
        className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6",
      },
      React.createElement(
        "div",
        { className: "flex items-center gap-4" },
        React.createElement(
          "div",
          {
            className: "w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20",
          },
          React.createElement(
            "svg",
            {
              className: "w-6 h-6 text-white",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
            },
            React.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
            })
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h3",
            { className: "text-white font-bold text-lg tracking-tight" },
            heading
          ),
          React.createElement(
            "p",
            { className: "text-white/70 text-sm" },
            description
          )
        )
      ),
      React.createElement(
        "div",
        { className: "flex gap-3" },
        React.createElement(
          "button",
          {
            className: "rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-violet-700 hover:bg-white/90 transition-colors",
          },
          appStoreText
        ),
        React.createElement(
          "button",
          {
            className: "rounded-xl bg-white/15 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/25 transition-colors",
          },
          playStoreText
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  banner-006  Seasonal                                              */
/* ------------------------------------------------------------------ */
const Banner006: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Spring Sale Is Here!";
  const description =
    (props.description as string) ||
    "Refresh your creator toolkit with seasonal discounts on all plans.";
  const buttonText = (props.buttonText as string) || "View Deals";
  const emoji = (props.emoji as string) || "\uD83C\uDF38";

  return React.createElement(
    "section",
    {
      className: "bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 py-6",
    },
    React.createElement(
      "div",
      {
        className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left",
      },
      React.createElement(
        "span",
        { className: "text-3xl" },
        emoji
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          { className: "text-white font-bold text-lg tracking-tight" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-white/80 text-sm" },
          description
        )
      ),
      React.createElement(
        "button",
        {
          className: "rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-rose-600 hover:bg-white/90 transition-colors ml-0 sm:ml-4",
        },
        buttonText
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  banner-007  Gradient Wave                                         */
/* ------------------------------------------------------------------ */
const Banner007: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const text =
    (props.text as string) ||
    "Join 10,000+ creators who are building their dream businesses.";
  const buttonText = (props.buttonText as string) || "Get Started";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden" },
    React.createElement(
      "div",
      {
        className: "bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 py-10",
      },
      React.createElement(
        "div",
        {
          className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10",
        },
        React.createElement(
          "p",
          { className: "text-white font-medium text-lg text-center tracking-tight" },
          text
        ),
        React.createElement(
          "button",
          {
            className: "rounded-xl bg-white px-8 py-3 text-sm font-bold text-violet-700 hover:bg-white/90 transition-colors flex-shrink-0 shadow-lg",
          },
          buttonText
        )
      )
    ),
    React.createElement(
      "div",
      { className: "absolute bottom-0 left-0 right-0" },
      React.createElement(
        "svg",
        {
          viewBox: "0 0 1440 60",
          className: "w-full h-auto block",
          preserveAspectRatio: "none",
          style: { display: "block" },
        },
        React.createElement("path", {
          d: "M0,30 C360,60 720,0 1080,30 C1260,45 1350,25 1440,30 L1440,60 L0,60 Z",
          fill: "white",
        })
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  banner-008  Minimal                                               */
/* ------------------------------------------------------------------ */
const Banner008: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const text =
    (props.text as string) || "New: Workflow automation is now available.";
  const linkText = (props.linkText as string) || "Read announcement";

  return React.createElement(
    "section",
    { className: "bg-slate-50 border-b border-slate-200 py-3" },
    React.createElement(
      "div",
      {
        className: "mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center gap-3",
      },
      React.createElement("div", {
        className: "w-1.5 h-1.5 bg-violet-600 rounded-full flex-shrink-0",
      }),
      React.createElement(
        "p",
        { className: "text-slate-700 text-sm" },
        text
      ),
      React.createElement(
        "a",
        {
          href: "#",
          className: "text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors",
        },
        linkText + " \u2192"
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  banner-009  With Icon                                             */
/* ------------------------------------------------------------------ */
const Banner009: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "System Maintenance";
  const description =
    (props.description as string) ||
    "Scheduled maintenance on Saturday, March 1st from 2:00 AM to 4:00 AM UTC.";

  return React.createElement(
    "section",
    { className: "bg-amber-50 border border-amber-200/60 py-4" },
    React.createElement(
      "div",
      {
        className: "mx-auto max-w-7xl px-6 lg:px-8 flex items-start sm:items-center gap-3",
      },
      React.createElement(
        "div",
        { className: "w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0" },
        React.createElement(
          "svg",
          {
            className: "w-4 h-4 text-amber-600",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
          },
          React.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z",
          })
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          { className: "text-amber-900 font-semibold text-sm" },
          heading
        ),
        React.createElement(
          "p",
          { className: "text-amber-700 text-sm" },
          description
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  banner-010  Floating                                              */
/* ------------------------------------------------------------------ */
const Banner010: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const text =
    (props.text as string) || "Your free trial expires in 3 days.";
  const buttonText = (props.buttonText as string) || "Upgrade Now";

  return React.createElement(
    "section",
    { className: "py-4 px-6" },
    React.createElement(
      "div",
      {
        className: "max-w-3xl mx-auto bg-slate-950 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl shadow-slate-950/20 border border-white/10",
      },
      React.createElement(
        "div",
        { className: "flex items-center gap-3" },
        React.createElement(
          "div",
          {
            className: "w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0",
          },
          React.createElement(
            "svg",
            {
              className: "w-4 h-4 text-white",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
            },
            React.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            })
          )
        ),
        React.createElement(
          "p",
          { className: "text-sm font-medium text-white" },
          text
        )
      ),
      React.createElement(
        "button",
        {
          className: "rounded-xl bg-violet-600 px-6 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition-colors flex-shrink-0",
        },
        buttonText
      )
    )
  );
};

/* ================================================================== */
/*  Section Definitions                                               */
/* ================================================================== */
const bannerSections: SectionDefinition[] = [
  {
    id: "banner-001",
    category: "banner",
    name: "Announcement Top",
    description: "Slim top announcement bar with text and link.",
    tags: ["banner", "announcement", "top", "bar"],
    defaultProps: {
      text: "We just launched our brand-new course builder!",
      linkText: "Learn more",
      bgColor: "bg-indigo-600",
    },
    propsSchema: [
      { key: "text", label: "Text", type: "text" },
      { key: "linkText", label: "Link Text", type: "text" },
      {
        key: "bgColor",
        label: "Background Color",
        type: "select",
        options: [
          { label: "Indigo", value: "bg-indigo-600" },
          { label: "Green", value: "bg-green-600" },
          { label: "Red", value: "bg-red-600" },
          { label: "Gray", value: "bg-gray-900" },
        ],
      },
    ],
    component: Banner001,
  },
  {
    id: "banner-002",
    category: "banner",
    name: "Promo Ribbon",
    description: "Gradient promotional ribbon with badge and CTA button.",
    tags: ["banner", "promo", "ribbon", "sale", "gradient"],
    defaultProps: {
      badge: "LIMITED TIME",
      text: "Get 30% off all annual plans this week only.",
      buttonText: "Claim Offer",
    },
    propsSchema: [
      { key: "badge", label: "Badge", type: "text" },
      { key: "text", label: "Text", type: "text" },
      { key: "buttonText", label: "Button Text", type: "text" },
    ],
    component: Banner002,
  },
  {
    id: "banner-003",
    category: "banner",
    name: "Countdown Sale",
    description: "Sale banner with a countdown timer display.",
    tags: ["banner", "countdown", "sale", "timer", "urgency"],
    defaultProps: {
      heading: "Flash Sale Ends Soon!",
      description:
        "Save up to 50% on all products. Do not miss out on this limited-time deal.",
      days: "02",
      hours: "14",
      minutes: "36",
      seconds: "08",
      buttonText: "Shop Now",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "text" },
      { key: "days", label: "Days", type: "text" },
      { key: "hours", label: "Hours", type: "text" },
      { key: "minutes", label: "Minutes", type: "text" },
      { key: "seconds", label: "Seconds", type: "text" },
      { key: "buttonText", label: "Button Text", type: "text" },
    ],
    component: Banner003,
  },
  {
    id: "banner-004",
    category: "banner",
    name: "Cookie Consent",
    description: "Cookie consent banner with accept and decline buttons.",
    tags: ["banner", "cookie", "consent", "privacy", "gdpr"],
    defaultProps: {
      text: "We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.",
      acceptText: "Accept All",
      declineText: "Decline",
    },
    propsSchema: [
      { key: "text", label: "Text", type: "textarea" },
      { key: "acceptText", label: "Accept Button Text", type: "text" },
      { key: "declineText", label: "Decline Button Text", type: "text" },
    ],
    component: Banner004,
  },
  {
    id: "banner-005",
    category: "banner",
    name: "App Download",
    description: "App download promotion banner with store buttons.",
    tags: ["banner", "app", "download", "mobile", "store"],
    defaultProps: {
      heading: "Take It Everywhere",
      description:
        "Download our mobile app and manage your creator business on the go.",
      appStoreText: "App Store",
      playStoreText: "Google Play",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "text" },
      { key: "appStoreText", label: "App Store Text", type: "text" },
      { key: "playStoreText", label: "Play Store Text", type: "text" },
    ],
    component: Banner005,
  },
  {
    id: "banner-006",
    category: "banner",
    name: "Seasonal",
    description: "Seasonal or holiday themed promotional banner.",
    tags: ["banner", "seasonal", "holiday", "promo", "colorful"],
    defaultProps: {
      heading: "Spring Sale Is Here!",
      description:
        "Refresh your creator toolkit with seasonal discounts on all plans.",
      buttonText: "View Deals",
      emoji: "\uD83C\uDF38",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "text" },
      { key: "buttonText", label: "Button Text", type: "text" },
      { key: "emoji", label: "Emoji", type: "text" },
    ],
    component: Banner006,
  },
  {
    id: "banner-007",
    category: "banner",
    name: "Gradient Wave",
    description: "Gradient banner with a decorative wave pattern at the bottom.",
    tags: ["banner", "gradient", "wave", "decorative"],
    defaultProps: {
      text: "Join 10,000+ creators who are building their dream businesses.",
      buttonText: "Get Started",
    },
    propsSchema: [
      { key: "text", label: "Text", type: "text" },
      { key: "buttonText", label: "Button Text", type: "text" },
    ],
    component: Banner007,
  },
  {
    id: "banner-008",
    category: "banner",
    name: "Minimal",
    description: "Minimal text banner with a subtle indicator dot.",
    tags: ["banner", "minimal", "simple", "subtle"],
    defaultProps: {
      text: "New: Workflow automation is now available.",
      linkText: "Read announcement",
    },
    propsSchema: [
      { key: "text", label: "Text", type: "text" },
      { key: "linkText", label: "Link Text", type: "text" },
    ],
    component: Banner008,
  },
  {
    id: "banner-009",
    category: "banner",
    name: "With Icon",
    description: "Banner with a warning or info icon for system notices.",
    tags: ["banner", "icon", "warning", "notice", "alert"],
    defaultProps: {
      heading: "System Maintenance",
      description:
        "Scheduled maintenance on Saturday, March 1st from 2:00 AM to 4:00 AM UTC.",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "text" },
    ],
    component: Banner009,
  },
  {
    id: "banner-010",
    category: "banner",
    name: "Floating",
    description: "Floating notification banner with rounded card style.",
    tags: ["banner", "floating", "notification", "card", "pill"],
    defaultProps: {
      text: "Your free trial expires in 3 days.",
      buttonText: "Upgrade Now",
    },
    propsSchema: [
      { key: "text", label: "Text", type: "text" },
      { key: "buttonText", label: "Button Text", type: "text" },
    ],
    component: Banner010,
  },
];

registerSections(bannerSections);
