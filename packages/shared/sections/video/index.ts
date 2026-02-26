// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  Helper: Play Button SVG                                           */
/* ------------------------------------------------------------------ */
const PlayIcon = () =>
  React.createElement(
    "svg",
    {
      className: "w-8 h-8 text-violet-600 ml-1",
      fill: "currentColor",
      viewBox: "0 0 24 24",
    },
    React.createElement("path", { d: "M8 5v14l11-7z" })
  );

const PlayIconSmall = () =>
  React.createElement(
    "svg",
    {
      className: "w-5 h-5 text-violet-600 ml-0.5",
      fill: "currentColor",
      viewBox: "0 0 24 24",
    },
    React.createElement("path", { d: "M8 5v14l11-7z" })
  );

/* ------------------------------------------------------------------ */
/*  video-001  Centered Player                                        */
/* ------------------------------------------------------------------ */
const Video001: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Watch Our Story";
  const subheading =
    (props.subheading as string) || "See how we help creators build and grow.";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-3xl text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-600" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "mx-auto max-w-4xl" },
        React.createElement(
          "div",
          {
            className:
              "relative aspect-video rounded-2xl bg-slate-900 overflow-hidden shadow-2xl ring-1 ring-slate-900/10",
          },
          React.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20",
          }),
          React.createElement(
            "div",
            { className: "absolute inset-0 flex items-center justify-center" },
            React.createElement(
              "button",
              {
                className:
                  "w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl hover:scale-105 transform duration-200",
              },
              React.createElement(
                "svg",
                {
                  className: "w-10 h-10 text-violet-600 ml-1",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                },
                React.createElement("path", { d: "M8 5v14l11-7z" })
              )
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  video-002  Split Text Video                                       */
/* ------------------------------------------------------------------ */
const Video002: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "See It In Action";
  const description =
    (props.description as string) ||
    "Our platform empowers creators to launch courses, build communities, and sell products from one unified dashboard. Watch this quick overview to see everything you can accomplish.";
  const buttonText = (props.buttonText as string) || "Get Started";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "grid lg:grid-cols-2 gap-16 items-center" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "span",
            { className: "inline-block text-sm font-semibold text-violet-600 tracking-wide uppercase mb-4" },
            "Platform Overview"
          ),
          React.createElement(
            "h2",
            { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" },
            heading
          ),
          React.createElement(
            "p",
            { className: "text-lg text-slate-600 leading-relaxed mb-10" },
            description
          ),
          React.createElement(
            "button",
            {
              className:
                "rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25",
            },
            buttonText
          )
        ),
        React.createElement(
          "div",
          {
            className:
              "relative aspect-video rounded-2xl bg-slate-900 overflow-hidden shadow-2xl ring-1 ring-slate-900/10",
          },
          React.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent",
          }),
          React.createElement(
            "div",
            { className: "absolute inset-0 flex items-center justify-center" },
            React.createElement(
              "button",
              {
                className:
                  "w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl hover:scale-105 transform duration-200",
              },
              React.createElement(PlayIcon)
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  video-003  Background Video                                       */
/* ------------------------------------------------------------------ */
const Video003: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Immerse Yourself";
  const subheading =
    (props.subheading as string) ||
    "A cinematic experience that shows what we are all about.";
  const buttonText = (props.buttonText as string) || "Play Video";

  return React.createElement(
    "section",
    { className: "relative min-h-[600px] flex items-center justify-center overflow-hidden" },
    React.createElement("div", {
      className: "absolute inset-0 bg-slate-950",
    }),
    React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/80",
    }),
    React.createElement("div", {
      className: "absolute inset-0",
      style: {
        backgroundImage: "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
      },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 text-center px-6 max-w-3xl mx-auto" },
      React.createElement(
        "h2",
        { className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6" },
        heading
      ),
      React.createElement(
        "p",
        { className: "text-xl text-slate-300 mb-12 max-w-2xl mx-auto" },
        subheading
      ),
      React.createElement(
        "button",
        {
          className:
            "inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-xl",
        },
        React.createElement(
          "svg",
          {
            className: "w-6 h-6 text-violet-600",
            fill: "currentColor",
            viewBox: "0 0 24 24",
          },
          React.createElement("path", { d: "M8 5v14l11-7z" })
        ),
        buttonText
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  video-004  Video Gallery                                          */
/* ------------------------------------------------------------------ */
const Video004: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Video Library";
  const subheading =
    (props.subheading as string) || "Browse our collection of videos and tutorials.";
  const videos = (props.videos as Array<{ title: string; duration: string }>) || [
    { title: "Getting Started Guide", duration: "5:32" },
    { title: "Advanced Features", duration: "12:10" },
    { title: "Tips & Tricks", duration: "8:45" },
    { title: "Customer Success Story", duration: "4:20" },
    { title: "Live Workshop Recording", duration: "45:00" },
    { title: "Product Update Recap", duration: "6:15" },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" },
          heading
        ),
        React.createElement(
          "p",
          { className: "mt-6 text-lg text-slate-400 max-w-2xl mx-auto" },
          subheading
        )
      ),
      React.createElement(
        "div",
        { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...videos.map((video, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className:
                "group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-violet-500/30 transition-colors",
            },
            React.createElement(
              "div",
              {
                className:
                  "relative aspect-video bg-slate-800 flex items-center justify-center",
              },
              React.createElement("div", {
                className: "absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10",
              }),
              React.createElement(
                "button",
                {
                  className:
                    "w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-200 shadow-lg",
                },
                React.createElement(PlayIconSmall)
              ),
              React.createElement(
                "span",
                {
                  className:
                    "absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-lg font-medium",
                },
                video.duration
              )
            ),
            React.createElement(
              "div",
              { className: "p-5" },
              React.createElement(
                "h3",
                { className: "font-semibold text-white group-hover:text-violet-400 transition-colors" },
                video.title
              )
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  video-005  Testimonial Video                                      */
/* ------------------------------------------------------------------ */
const Video005: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Hear From Our Customers";
  const name = (props.name as string) || "Sarah Johnson";
  const role = (props.role as string) || "Founder, Creative Academy";
  const quote =
    (props.quote as string) ||
    "This platform completely transformed how I deliver courses to my students. The all-in-one approach saved me hours every week.";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "grid lg:grid-cols-2 gap-16 items-center" },
        React.createElement(
          "div",
          {
            className:
              "relative aspect-video rounded-2xl bg-slate-900 overflow-hidden shadow-2xl ring-1 ring-slate-900/10",
          },
          React.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-br from-violet-600/15 to-indigo-600/10",
          }),
          React.createElement(
            "div",
            { className: "absolute inset-0 flex items-center justify-center" },
            React.createElement(
              "button",
              {
                className:
                  "w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl hover:scale-105 transform duration-200",
              },
              React.createElement(PlayIcon)
            )
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-8" },
            heading
          ),
          React.createElement(
            "svg",
            {
              className: "w-12 h-12 text-violet-200 mb-6",
              fill: "currentColor",
              viewBox: "0 0 24 24",
            },
            React.createElement("path", {
              d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z",
            })
          ),
          React.createElement(
            "blockquote",
            { className: "text-xl text-slate-700 leading-relaxed mb-8" },
            React.createElement("em", null, `"${quote}"`)
          ),
          React.createElement(
            "div",
            { className: "flex items-center gap-4" },
            React.createElement("div", {
              className: "w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500",
            }),
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                { className: "font-semibold text-slate-900" },
                name
              ),
              React.createElement("p", { className: "text-sm text-slate-500" }, role)
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  video-006  Demo Showcase                                          */
/* ------------------------------------------------------------------ */
const Video006: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Product Demo";
  const description =
    (props.description as string) ||
    "Take a guided tour of every feature. From page builder to analytics, see how simple it is to manage your entire creator business.";
  const features = (props.features as string[]) || [
    "Drag-and-drop page builder",
    "Built-in email marketing",
    "Course hosting & delivery",
    "Integrated payments",
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "grid lg:grid-cols-2 gap-16 items-center" },
        React.createElement(
          "div",
          {
            className:
              "relative aspect-video rounded-2xl bg-slate-800 overflow-hidden border border-white/10 shadow-2xl order-2 lg:order-1",
          },
          React.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-tr from-violet-600/15 to-indigo-600/10",
          }),
          React.createElement(
            "div",
            { className: "absolute inset-0 flex flex-col items-center justify-center" },
            React.createElement(
              "button",
              {
                className:
                  "w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl hover:scale-105 transform duration-200 mb-4",
              },
              React.createElement(PlayIcon)
            ),
            React.createElement(
              "p",
              { className: "text-white/60 text-sm font-medium" },
              "3 min demo"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "order-1 lg:order-2" },
          React.createElement(
            "span",
            {
              className:
                "inline-block text-sm font-semibold uppercase tracking-wide mb-4",
              style: {
                backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            },
            "Live Demo"
          ),
          React.createElement(
            "h2",
            { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" },
            heading
          ),
          React.createElement(
            "p",
            { className: "text-lg text-slate-400 mb-10 leading-relaxed" },
            description
          ),
          React.createElement(
            "ul",
            { className: "space-y-4" },
            ...features.map((f, i) =>
              React.createElement(
                "li",
                { key: i, className: "flex items-center gap-3 text-slate-300" },
                React.createElement(
                  "div",
                  { className: "w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0" },
                  React.createElement(
                    "svg",
                    {
                      className: "w-3.5 h-3.5 text-violet-400",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2.5,
                    },
                    React.createElement("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M5 13l4 4L19 7",
                    })
                  )
                ),
                f
              )
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  video-007  Full Width                                             */
/* ------------------------------------------------------------------ */
const Video007: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "The Full Picture";
  const subheading =
    (props.subheading as string) ||
    "Explore a complete overview of what makes our platform special.";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-12" },
        React.createElement(
          "h2",
          { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4" },
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
        {
          className:
            "relative aspect-[21/9] rounded-2xl bg-slate-900 overflow-hidden shadow-2xl ring-1 ring-slate-900/10",
        },
        React.createElement("div", {
          className:
            "absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-indigo-600/20",
        }),
        React.createElement(
          "div",
          { className: "absolute inset-0 flex items-center justify-center" },
          React.createElement(
            "button",
            {
              className:
                "w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl hover:scale-105 transform duration-200",
            },
            React.createElement(
              "svg",
              {
                className: "w-10 h-10 text-violet-600 ml-1",
                fill: "currentColor",
                viewBox: "0 0 24 24",
              },
              React.createElement("path", { d: "M8 5v14l11-7z" })
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  video-008  With Features                                          */
/* ------------------------------------------------------------------ */
const Video008: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Why Creators Love Us";
  const features = (props.features as Array<{ title: string; description: string }>) || [
    {
      title: "Lightning Fast Setup",
      description: "Go from sign-up to live in under 10 minutes.",
    },
    {
      title: "All-in-One Platform",
      description: "Courses, email, payments and community in one place.",
    },
    {
      title: "No Code Required",
      description: "Build beautiful pages with our drag-and-drop editor.",
    },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "grid lg:grid-cols-5 gap-16 items-center" },
        React.createElement(
          "div",
          { className: "lg:col-span-3" },
          React.createElement(
            "div",
            {
              className:
                "relative aspect-video rounded-2xl bg-slate-900 overflow-hidden shadow-2xl ring-1 ring-slate-900/10",
            },
            React.createElement("div", {
              className: "absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent",
            }),
            React.createElement(
              "div",
              { className: "absolute inset-0 flex items-center justify-center" },
              React.createElement(
                "button",
                {
                  className:
                    "w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl hover:scale-105 transform duration-200",
                },
                React.createElement(PlayIcon)
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "lg:col-span-2" },
          React.createElement(
            "h2",
            { className: "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10" },
            heading
          ),
          React.createElement(
            "div",
            { className: "space-y-8" },
            ...features.map((feat, i) =>
              React.createElement(
                "div",
                { key: i, className: "flex gap-4" },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0",
                  },
                  React.createElement(
                    "span",
                    { className: "text-violet-600 font-bold text-sm" },
                    `0${i + 1}`
                  )
                ),
                React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "h3",
                    { className: "font-semibold text-slate-900 mb-1" },
                    feat.title
                  ),
                  React.createElement(
                    "p",
                    { className: "text-slate-600 text-sm leading-relaxed" },
                    feat.description
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  video-009  Dark Theme                                             */
/* ------------------------------------------------------------------ */
const Video009: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Watch the Walkthrough";
  const subheading =
    (props.subheading as string) ||
    "A detailed look at every tool and workflow available to you.";
  const buttonText = (props.buttonText as string) || "Start Free Trial";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: {
        backgroundImage: "radial-gradient(ellipse at top right, rgba(139,92,246,0.1) 0%, transparent 50%)",
      },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "grid lg:grid-cols-2 gap-16 items-center" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" },
            heading
          ),
          React.createElement(
            "p",
            { className: "text-lg text-slate-400 mb-10 leading-relaxed" },
            subheading
          ),
          React.createElement(
            "button",
            {
              className:
                "rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25",
            },
            buttonText
          )
        ),
        React.createElement(
          "div",
          {
            className:
              "relative aspect-video rounded-2xl bg-white/5 overflow-hidden border border-white/10 shadow-2xl",
          },
          React.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10",
          }),
          React.createElement(
            "div",
            { className: "absolute inset-0 flex items-center justify-center" },
            React.createElement(
              "button",
              {
                className:
                  "w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl hover:scale-105 transform duration-200",
              },
              React.createElement(PlayIcon)
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  video-010  Mini Player                                            */
/* ------------------------------------------------------------------ */
const Video010: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Quick Tip";
  const description =
    (props.description as string) ||
    "Learn a new trick in under 60 seconds. Quick tips to boost your productivity.";
  const duration = (props.duration as string) || "0:58";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement(
        "div",
        {
          className:
            "flex flex-col sm:flex-row gap-8 items-center rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8",
        },
        React.createElement(
          "div",
          {
            className:
              "relative w-full sm:w-72 flex-shrink-0 aspect-video rounded-xl bg-slate-800 overflow-hidden flex items-center justify-center",
          },
          React.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-br from-violet-500/15 to-indigo-500/10",
          }),
          React.createElement(
            "button",
            {
              className:
                "relative z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg hover:scale-105 transform duration-200",
            },
            React.createElement(PlayIconSmall)
          ),
          React.createElement(
            "span",
            {
              className:
                "absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-lg font-medium",
            },
            duration
          )
        ),
        React.createElement(
          "div",
          { className: "text-center sm:text-left" },
          React.createElement(
            "span",
            {
              className: "inline-block text-xs font-semibold uppercase tracking-wider mb-2",
              style: {
                backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            },
            "Quick Tip"
          ),
          React.createElement(
            "h3",
            { className: "text-xl font-bold text-white mt-1 mb-3" },
            heading
          ),
          React.createElement(
            "p",
            { className: "text-slate-400 text-sm leading-relaxed" },
            description
          )
        )
      )
    )
  );
};

/* ================================================================== */
/*  Section Definitions                                               */
/* ================================================================== */
const videoSections: SectionDefinition[] = [
  {
    id: "video-001",
    category: "video",
    name: "Centered Player",
    description: "Centered video player placeholder with a prominent play button.",
    tags: ["video", "centered", "player", "play"],
    defaultProps: {
      heading: "Watch Our Story",
      subheading: "See how we help creators build and grow.",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "subheading", label: "Subheading", type: "text" },
    ],
    component: Video001,
  },
  {
    id: "video-002",
    category: "video",
    name: "Split Text Video",
    description: "Text content on the left with a video player on the right.",
    tags: ["video", "split", "text", "side-by-side"],
    defaultProps: {
      heading: "See It In Action",
      description:
        "Our platform empowers creators to launch courses, build communities, and sell products from one unified dashboard. Watch this quick overview to see everything you can accomplish.",
      buttonText: "Get Started",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "buttonText", label: "Button Text", type: "text" },
    ],
    component: Video002,
  },
  {
    id: "video-003",
    category: "video",
    name: "Background Video",
    description:
      "Full-width dark video background with overlay text and play button.",
    tags: ["video", "background", "fullwidth", "cinematic"],
    defaultProps: {
      heading: "Immerse Yourself",
      subheading:
        "A cinematic experience that shows what we are all about.",
      buttonText: "Play Video",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "subheading", label: "Subheading", type: "text" },
      { key: "buttonText", label: "Button Text", type: "text" },
    ],
    component: Video003,
  },
  {
    id: "video-004",
    category: "video",
    name: "Video Gallery",
    description: "Grid of video thumbnails with titles and durations.",
    tags: ["video", "gallery", "grid", "thumbnails", "library"],
    defaultProps: {
      heading: "Video Library",
      subheading: "Browse our collection of videos and tutorials.",
      videos: [
        { title: "Getting Started Guide", duration: "5:32" },
        { title: "Advanced Features", duration: "12:10" },
        { title: "Tips & Tricks", duration: "8:45" },
        { title: "Customer Success Story", duration: "4:20" },
        { title: "Live Workshop Recording", duration: "45:00" },
        { title: "Product Update Recap", duration: "6:15" },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "subheading", label: "Subheading", type: "text" },
      {
        key: "videos",
        label: "Videos",
        type: "items",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "duration", label: "Duration", type: "text" },
        ],
      },
    ],
    component: Video004,
  },
  {
    id: "video-005",
    category: "video",
    name: "Testimonial Video",
    description: "Video testimonial with customer quote beside the player.",
    tags: ["video", "testimonial", "review", "quote"],
    defaultProps: {
      heading: "Hear From Our Customers",
      name: "Sarah Johnson",
      role: "Founder, Creative Academy",
      quote:
        "This platform completely transformed how I deliver courses to my students. The all-in-one approach saved me hours every week.",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "name", label: "Customer Name", type: "text" },
      { key: "role", label: "Customer Role", type: "text" },
      { key: "quote", label: "Quote", type: "textarea" },
    ],
    component: Video005,
  },
  {
    id: "video-006",
    category: "video",
    name: "Demo Showcase",
    description: "Product demo video paired with a feature checklist.",
    tags: ["video", "demo", "showcase", "product", "features"],
    defaultProps: {
      heading: "Product Demo",
      description:
        "Take a guided tour of every feature. From page builder to analytics, see how simple it is to manage your entire creator business.",
      features: [
        "Drag-and-drop page builder",
        "Built-in email marketing",
        "Course hosting & delivery",
        "Integrated payments",
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      {
        key: "features",
        label: "Features",
        type: "items",
        itemFields: [{ key: "value", label: "Feature", type: "text" }],
      },
    ],
    component: Video006,
  },
  {
    id: "video-007",
    category: "video",
    name: "Full Width",
    description: "Full-width ultra-wide video section with centered play button.",
    tags: ["video", "fullwidth", "wide", "cinematic"],
    defaultProps: {
      heading: "The Full Picture",
      subheading:
        "Explore a complete overview of what makes our platform special.",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "subheading", label: "Subheading", type: "text" },
    ],
    component: Video007,
  },
  {
    id: "video-008",
    category: "video",
    name: "With Features",
    description: "Video player alongside a numbered feature list.",
    tags: ["video", "features", "numbered", "list"],
    defaultProps: {
      heading: "Why Creators Love Us",
      features: [
        {
          title: "Lightning Fast Setup",
          description: "Go from sign-up to live in under 10 minutes.",
        },
        {
          title: "All-in-One Platform",
          description: "Courses, email, payments and community in one place.",
        },
        {
          title: "No Code Required",
          description: "Build beautiful pages with our drag-and-drop editor.",
        },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      {
        key: "features",
        label: "Features",
        type: "items",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "text" },
        ],
      },
    ],
    component: Video008,
  },
  {
    id: "video-009",
    category: "video",
    name: "Dark Theme",
    description: "Dark background video section with CTA button.",
    tags: ["video", "dark", "theme", "cta"],
    defaultProps: {
      heading: "Watch the Walkthrough",
      subheading:
        "A detailed look at every tool and workflow available to you.",
      buttonText: "Start Free Trial",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "subheading", label: "Subheading", type: "text" },
      { key: "buttonText", label: "Button Text", type: "text" },
    ],
    component: Video009,
  },
  {
    id: "video-010",
    category: "video",
    name: "Mini Player",
    description: "Compact inline video section for quick tips and short content.",
    tags: ["video", "mini", "compact", "tip", "short"],
    defaultProps: {
      heading: "Quick Tip",
      description:
        "Learn a new trick in under 60 seconds. Quick tips to boost your productivity.",
      duration: "0:58",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "duration", label: "Duration", type: "text" },
    ],
    component: Video010,
  },
];

registerSections(videoSections);
