// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  about-001  Story Split                                            */
/* ------------------------------------------------------------------ */
const About001: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Our Story";
  const story =
    (props.story as string) ||
    "What started as a simple idea in a small apartment has grown into a platform trusted by thousands of creators worldwide. We believed that every creator deserves professional tools without the professional price tag. That belief drives everything we do.";
  const highlight =
    (props.highlight as string) ||
    "Founded in 2020, we have helped over 10,000 creators launch their businesses.";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center" },
      React.createElement(
        "div",
        null,
        React.createElement("span", { className: "text-sm font-semibold uppercase tracking-wider", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "About Us"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-3 mb-6" }, heading),
        React.createElement("p", { className: "text-lg text-slate-600 leading-relaxed mb-6" }, story),
        React.createElement("p", { className: "font-semibold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, highlight)
      ),
      React.createElement("div", { className: "aspect-[4/3] rounded-2xl", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-002  Timeline                                               */
/* ------------------------------------------------------------------ */
const About002: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Our Journey";
  const milestones = (props.milestones as Array<{ year: string; title: string; description: string }>) || [
    { year: "2020", title: "The Beginning", description: "Founded with a mission to empower creators everywhere." },
    { year: "2021", title: "1,000 Creators", description: "Reached our first thousand active users in just one year." },
    { year: "2022", title: "Course Platform", description: "Launched integrated course hosting and delivery tools." },
    { year: "2023", title: "Global Expansion", description: "Expanded to serve creators across 50+ countries." },
    { year: "2024", title: "Community Launch", description: "Built-in community spaces for deeper creator engagement." },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white text-center mb-20" }, heading),
      React.createElement(
        "div",
        { className: "relative" },
        React.createElement("div", { className: "absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/10" }),
        React.createElement(
          "div",
          { className: "space-y-16" },
          ...milestones.map((m, i) =>
            React.createElement(
              "div",
              { key: i, className: `relative flex flex-col md:flex-row items-start md:items-center gap-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}` },
              React.createElement(
                "div",
                { className: `md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}` },
                React.createElement("span", { className: "font-bold text-lg", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.year),
                React.createElement("h3", { className: "text-xl font-semibold text-white mt-1" }, m.title),
                React.createElement("p", { className: "text-slate-400 mt-1" }, m.description)
              ),
              React.createElement("div", { className: "absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-900 shadow", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }),
              React.createElement("div", { className: "md:w-1/2" })
            )
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-003  Mission Values                                         */
/* ------------------------------------------------------------------ */
const About003: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Mission & Values";
  const mission =
    (props.mission as string) ||
    "To democratize the creator economy by giving every creator the tools they need to build, grow, and monetize their passion.";
  const values = (props.values as Array<{ title: string; description: string }>) || [
    { title: "Creator First", description: "Every decision starts with what helps creators succeed." },
    { title: "Simplicity", description: "Powerful tools that anyone can use without a learning curve." },
    { title: "Transparency", description: "Honest pricing, open roadmap, and clear communication." },
    { title: "Innovation", description: "Constantly pushing the boundaries of what is possible." },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" }, heading),
        React.createElement("p", { className: "text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto" }, mission)
      ),
      React.createElement(
        "div",
        { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6" },
        ...values.map((v, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center hover:shadow-md transition-all group" },
            React.createElement(
              "div",
              { className: "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } },
              `0${i + 1}`
            ),
            React.createElement("h3", { className: "text-lg font-semibold text-slate-900 mb-2" }, v.title),
            React.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, v.description)
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-004  History                                                */
/* ------------------------------------------------------------------ */
const About004: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Our History";
  const description =
    (props.description as string) ||
    "From a two-person garage project to an international platform, our history is one of relentless focus on helping creators. Every feature was born from real conversations with real creators.";
  const stats = (props.stats as Array<{ value: string; label: string }>) || [
    { value: "2020", label: "Year Founded" },
    { value: "10K+", label: "Active Creators" },
    { value: "50+", label: "Countries" },
    { value: "$2M+", label: "Creator Earnings" },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 gap-16 items-center mb-20" },
        React.createElement("div", { className: "aspect-[4/3] rounded-2xl", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }),
        React.createElement(
          "div",
          null,
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" }, heading),
          React.createElement("p", { className: "text-lg text-slate-600 leading-relaxed" }, description)
        )
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 md:grid-cols-4 gap-6" },
        ...stats.map((s, i) =>
          React.createElement(
            "div",
            { key: i, className: "text-center rounded-2xl bg-white border border-slate-200 p-6 shadow-sm" },
            React.createElement("p", { className: "text-3xl font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.value),
            React.createElement("p", { className: "text-slate-600 mt-2 text-sm font-medium" }, s.label)
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-005  Team Intro                                             */
/* ------------------------------------------------------------------ */
const About005: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Meet the Team Behind It All";
  const description =
    (props.description as string) ||
    "A passionate group of builders, designers, and creators dedicated to making your success possible.";
  const members = (props.members as Array<{ name: string; role: string }>) || [
    { name: "Alex Rivera", role: "CEO & Co-founder" },
    { name: "Jordan Lee", role: "CTO & Co-founder" },
    { name: "Sam Chen", role: "Head of Design" },
    { name: "Morgan Taylor", role: "Head of Growth" },
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
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4" }, heading),
        React.createElement("p", { className: "text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, description)
      ),
      React.createElement(
        "div",
        { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6" },
        ...members.map((m, i) =>
          React.createElement(
            "div",
            { key: i, className: "text-center rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all group" },
            React.createElement("div", { className: "w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("h3", { className: "font-semibold text-white" }, m.name),
            React.createElement("p", { className: "text-sm font-medium mt-1", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role)
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-006  Stats and Story                                        */
/* ------------------------------------------------------------------ */
const About006: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Built by Creators, for Creators";
  const story =
    (props.story as string) ||
    "We understand the creator journey because we have lived it. Our team has launched courses, built audiences, and sold digital products. That firsthand experience shaped every feature in our platform.";
  const stats = (props.stats as Array<{ value: string; label: string }>) || [
    { value: "10K+", label: "Creators" },
    { value: "500K+", label: "Students Served" },
    { value: "99.9%", label: "Uptime" },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32", style: { backgroundImage: "linear-gradient(135deg, #7c3aed, #4f46e5)" } },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center" },
      React.createElement(
        "div",
        null,
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" }, heading),
        React.createElement("p", { className: "text-lg text-white/70 leading-relaxed" }, story)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 gap-4" },
        ...stats.map((s, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center hover:bg-white/15 transition-all" },
            React.createElement("p", { className: "text-4xl font-bold text-white tracking-tight" }, s.value),
            React.createElement("p", { className: "text-white/60 mt-1 font-medium" }, s.label)
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-007  Founder                                                */
/* ------------------------------------------------------------------ */
const About007: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const name = (props.name as string) || "Alex Rivera";
  const title = (props.title as string) || "Founder & CEO";
  const quote =
    (props.quote as string) ||
    "I started this company because I experienced the pain of juggling ten different tools to run my creator business. I knew there had to be a better way. Now, thousands of creators use our platform to focus on what they do best: creating.";
  const bio =
    (props.bio as string) ||
    "Former software engineer turned creator, Alex has been building tools for the creator economy since 2018.";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-6xl px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center" },
      React.createElement("div", { className: "aspect-square rounded-2xl", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }),
      React.createElement(
        "div",
        null,
        React.createElement("span", { className: "text-sm font-semibold uppercase tracking-wider", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "Founder Spotlight"),
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-3 mb-1" }, name),
        React.createElement("p", { className: "text-slate-500 mb-6 font-medium" }, title),
        React.createElement(
          "blockquote",
          { className: "text-lg text-slate-700 italic pl-5 mb-6 leading-relaxed", style: { borderLeft: "3px solid", borderImage: "linear-gradient(to bottom, #a78bfa, #818cf8) 1" } },
          `"${quote}"`
        ),
        React.createElement("p", { className: "text-slate-600 leading-relaxed" }, bio)
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-008  Culture                                                */
/* ------------------------------------------------------------------ */
const About008: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Our Culture";
  const description =
    (props.description as string) ||
    "We work hard, stay curious, and never lose sight of who we are building for.";
  const pillars = (props.pillars as Array<{ title: string; description: string }>) || [
    { title: "Remote First", description: "Our team spans 12 time zones and we would not have it any other way." },
    { title: "Ship Weekly", description: "Small, frequent improvements over big, risky releases." },
    { title: "Creator Hours", description: "Every team member spends time creating content to stay close to users." },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4" }, heading),
        React.createElement("p", { className: "text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, description)
      ),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-3 gap-6" },
        ...pillars.map((p, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all" },
            React.createElement("div", { className: "w-full aspect-video rounded-xl mb-6", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.1), rgba(129,140,248,0.1))" } }),
            React.createElement("h3", { className: "text-xl font-semibold text-slate-900 mb-2" }, p.title),
            React.createElement("p", { className: "text-slate-600 leading-relaxed" }, p.description)
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-009  Awards                                                 */
/* ------------------------------------------------------------------ */
const About009: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Awards & Recognition";
  const subheading =
    (props.subheading as string) ||
    "Honored by industry leaders for innovation and impact.";
  const awards = (props.awards as Array<{ title: string; org: string; year: string }>) || [
    { title: "Best Creator Tool", org: "Creator Awards", year: "2024" },
    { title: "Top 50 Startups", org: "TechCrunch", year: "2023" },
    { title: "Innovation Award", org: "SaaS Weekly", year: "2023" },
    { title: "Editors Choice", org: "ProductHunt", year: "2022" },
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
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4" }, heading),
        React.createElement("p", { className: "text-lg text-slate-400 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4" },
        ...awards.map((a, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl bg-white/5 border border-white/10 p-6 text-center hover:border-white/20 transition-all group" },
            React.createElement("div", { className: "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } },
              React.createElement("span", { className: "text-white text-2xl" }, "\u2605")
            ),
            React.createElement("h3", { className: "font-semibold text-white mb-1" }, a.title),
            React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, a.org),
            React.createElement("p", { className: "text-slate-500 text-sm mt-1" }, a.year)
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-010  Two Column                                             */
/* ------------------------------------------------------------------ */
const About010: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Who We Are";
  const columnOne =
    (props.columnOne as string) ||
    "We are a team of passionate builders who believe the creator economy should be accessible to everyone. Our platform eliminates the need for a dozen different subscriptions by combining everything a creator needs under one roof.";
  const columnTwo =
    (props.columnTwo as string) ||
    "From website building and email marketing to course hosting and payment processing, we handle the technology so you can focus on your craft. Join thousands of creators who have simplified their workflow with our all-in-one solution.";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 text-center mb-16" }, heading),
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 gap-16" },
        React.createElement("p", { className: "text-lg text-slate-600 leading-relaxed" }, columnOne),
        React.createElement("p", { className: "text-lg text-slate-600 leading-relaxed" }, columnTwo)
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-011  Centered                                               */
/* ------------------------------------------------------------------ */
const About011: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "About Us";
  const narrative =
    (props.narrative as string) ||
    "We set out to build the simplest, most powerful platform for creators. Everything we do is guided by a single question: does this help creators succeed? Since our founding we have stayed true to that vision, growing from a small team of two to a company that serves creators in over 50 countries. Our story is still being written, and we want you to be part of it.";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8 text-center" },
      React.createElement("span", { className: "text-sm font-semibold uppercase tracking-wider", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "Our Story"),
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-3 mb-8" }, heading),
      React.createElement("p", { className: "text-lg text-slate-600 leading-relaxed" }, narrative)
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-012  With Image                                             */
/* ------------------------------------------------------------------ */
const About012: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Built With Purpose";
  const description =
    (props.description as string) ||
    "Every line of code, every pixel in our design, and every word in our docs is crafted with one goal: helping creators thrive. We obsess over the details so you do not have to.";
  const buttonText = (props.buttonText as string) || "Learn More";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "grid md:grid-cols-5 gap-16 items-center" },
        React.createElement(
          "div",
          { className: "md:col-span-2" },
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" }, heading),
          React.createElement("p", { className: "text-lg text-slate-600 leading-relaxed mb-8" }, description),
          React.createElement("button", { className: "px-8 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, buttonText)
        ),
        React.createElement("div", { className: "md:col-span-3 aspect-[4/3] rounded-2xl", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-013  Dark Theme                                             */
/* ------------------------------------------------------------------ */
const About013: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Who We Are";
  const description =
    (props.description as string) ||
    "A small team with big ambitions. We are creators ourselves, building the tools we always wished existed. Our platform is designed for independence, giving you full control over your business without relying on algorithms or gatekeepers.";
  const stats = (props.stats as Array<{ value: string; label: string }>) || [
    { value: "10K+", label: "Creators" },
    { value: "1M+", label: "Pages Built" },
    { value: "50+", label: "Countries" },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center" },
      React.createElement(
        "div",
        null,
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" }, heading),
        React.createElement("p", { className: "text-lg text-slate-400 leading-relaxed mb-8" }, description),
        React.createElement(
          "div",
          { className: "flex gap-8" },
          ...stats.map((s, i) =>
            React.createElement(
              "div",
              { key: i },
              React.createElement("p", { className: "text-2xl font-bold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, s.value),
              React.createElement("p", { className: "text-slate-500 text-sm font-medium" }, s.label)
            )
          )
        )
      ),
      React.createElement("div", { className: "aspect-square rounded-2xl bg-white/5 border border-white/10" })
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-014  Card Style                                             */
/* ------------------------------------------------------------------ */
const About014: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "What Sets Us Apart";
  const cards = (props.cards as Array<{ title: string; description: string }>) || [
    { title: "All-in-One Platform", description: "Website, email, courses, payments, community and more under one roof." },
    { title: "Self-Hostable", description: "Own your data. Deploy on your own infrastructure for full control." },
    { title: "Creator Focused", description: "Every feature is designed specifically for creators and their audiences." },
    { title: "Open Roadmap", description: "Our users vote on what gets built next. Your voice shapes our product." },
  ];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 text-center mb-16" }, heading),
      React.createElement(
        "div",
        { className: "grid sm:grid-cols-2 gap-6" },
        ...cards.map((c, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all group" },
            React.createElement(
              "div",
              { className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-sm group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } },
              `0${i + 1}`
            ),
            React.createElement("h3", { className: "text-xl font-semibold text-slate-900 mb-2" }, c.title),
            React.createElement("p", { className: "text-slate-600 leading-relaxed" }, c.description)
          )
        )
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  about-015  With CTA                                               */
/* ------------------------------------------------------------------ */
const About015: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const heading = (props.heading as string) || "Ready to Join Our Story?";
  const description =
    (props.description as string) ||
    "We are building the future of the creator economy and we want you along for the ride. Whether you are a seasoned professional or just getting started, our platform has everything you need.";
  const primaryButton = (props.primaryButton as string) || "Get Started Free";
  const secondaryButton = (props.secondaryButton as string) || "Talk to Us";

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-4xl px-6 lg:px-8 text-center" },
      React.createElement("div", { className: "w-full aspect-[21/9] rounded-2xl mb-12", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } }),
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" }, heading),
      React.createElement("p", { className: "text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10" }, description),
      React.createElement(
        "div",
        { className: "flex flex-col sm:flex-row gap-4 justify-center" },
        React.createElement("button", { className: "px-8 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, primaryButton),
        React.createElement("button", { className: "px-8 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors" }, secondaryButton)
      )
    )
  );
};

/* ================================================================== */
/*  Section Definitions                                               */
/* ================================================================== */
const aboutSections: SectionDefinition[] = [
  {
    id: "about-001",
    category: "about",
    name: "Story Split",
    description: "About story with split image layout.",
    tags: ["about", "story", "split", "image"],
    defaultProps: {
      heading: "Our Story",
      story:
        "What started as a simple idea in a small apartment has grown into a platform trusted by thousands of creators worldwide. We believed that every creator deserves professional tools without the professional price tag. That belief drives everything we do.",
      highlight:
        "Founded in 2020, we have helped over 10,000 creators launch their businesses.",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "story", label: "Story", type: "textarea" },
      { key: "highlight", label: "Highlight", type: "text" },
    ],
    component: About001,
  },
  {
    id: "about-002",
    category: "about",
    name: "Timeline",
    description: "Vertical timeline of company or personal milestones.",
    tags: ["about", "timeline", "milestones", "history"],
    defaultProps: {
      heading: "Our Journey",
      milestones: [
        { year: "2020", title: "The Beginning", description: "Founded with a mission to empower creators everywhere." },
        { year: "2021", title: "1,000 Creators", description: "Reached our first thousand active users in just one year." },
        { year: "2022", title: "Course Platform", description: "Launched integrated course hosting and delivery tools." },
        { year: "2023", title: "Global Expansion", description: "Expanded to serve creators across 50+ countries." },
        { year: "2024", title: "Community Launch", description: "Built-in community spaces for deeper creator engagement." },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      {
        key: "milestones",
        label: "Milestones",
        type: "items",
        itemFields: [
          { key: "year", label: "Year", type: "text" },
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "text" },
        ],
      },
    ],
    component: About002,
  },
  {
    id: "about-003",
    category: "about",
    name: "Mission Values",
    description: "Mission statement with value cards.",
    tags: ["about", "mission", "values", "cards"],
    defaultProps: {
      heading: "Mission & Values",
      mission:
        "To democratize the creator economy by giving every creator the tools they need to build, grow, and monetize their passion.",
      values: [
        { title: "Creator First", description: "Every decision starts with what helps creators succeed." },
        { title: "Simplicity", description: "Powerful tools that anyone can use without a learning curve." },
        { title: "Transparency", description: "Honest pricing, open roadmap, and clear communication." },
        { title: "Innovation", description: "Constantly pushing the boundaries of what is possible." },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "mission", label: "Mission Statement", type: "textarea" },
      {
        key: "values",
        label: "Values",
        type: "items",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "text" },
        ],
      },
    ],
    component: About003,
  },
  {
    id: "about-004",
    category: "about",
    name: "History",
    description: "Company history with image and statistics.",
    tags: ["about", "history", "stats", "company"],
    defaultProps: {
      heading: "Our History",
      description:
        "From a two-person garage project to an international platform, our history is one of relentless focus on helping creators. Every feature was born from real conversations with real creators.",
      stats: [
        { value: "2020", label: "Year Founded" },
        { value: "10K+", label: "Active Creators" },
        { value: "50+", label: "Countries" },
        { value: "$2M+", label: "Creator Earnings" },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      {
        key: "stats",
        label: "Stats",
        type: "items",
        itemFields: [
          { key: "value", label: "Value", type: "text" },
          { key: "label", label: "Label", type: "text" },
        ],
      },
    ],
    component: About004,
  },
  {
    id: "about-005",
    category: "about",
    name: "Team Intro",
    description: "About intro with team member previews.",
    tags: ["about", "team", "members", "intro"],
    defaultProps: {
      heading: "Meet the Team Behind It All",
      description:
        "A passionate group of builders, designers, and creators dedicated to making your success possible.",
      members: [
        { name: "Alex Rivera", role: "CEO & Co-founder" },
        { name: "Jordan Lee", role: "CTO & Co-founder" },
        { name: "Sam Chen", role: "Head of Design" },
        { name: "Morgan Taylor", role: "Head of Growth" },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      {
        key: "members",
        label: "Members",
        type: "items",
        itemFields: [
          { key: "name", label: "Name", type: "text" },
          { key: "role", label: "Role", type: "text" },
        ],
      },
    ],
    component: About005,
  },
  {
    id: "about-006",
    category: "about",
    name: "Stats and Story",
    description: "Story combined with highlighted statistics on an indigo background.",
    tags: ["about", "stats", "story", "numbers"],
    defaultProps: {
      heading: "Built by Creators, for Creators",
      story:
        "We understand the creator journey because we have lived it. Our team has launched courses, built audiences, and sold digital products. That firsthand experience shaped every feature in our platform.",
      stats: [
        { value: "10K+", label: "Creators" },
        { value: "500K+", label: "Students Served" },
        { value: "99.9%", label: "Uptime" },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "story", label: "Story", type: "textarea" },
      {
        key: "stats",
        label: "Stats",
        type: "items",
        itemFields: [
          { key: "value", label: "Value", type: "text" },
          { key: "label", label: "Label", type: "text" },
        ],
      },
    ],
    component: About006,
  },
  {
    id: "about-007",
    category: "about",
    name: "Founder",
    description: "Founder spotlight with photo, quote, and bio.",
    tags: ["about", "founder", "spotlight", "quote"],
    defaultProps: {
      name: "Alex Rivera",
      title: "Founder & CEO",
      quote:
        "I started this company because I experienced the pain of juggling ten different tools to run my creator business. I knew there had to be a better way. Now, thousands of creators use our platform to focus on what they do best: creating.",
      bio:
        "Former software engineer turned creator, Alex has been building tools for the creator economy since 2018.",
    },
    propsSchema: [
      { key: "name", label: "Name", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "quote", label: "Quote", type: "textarea" },
      { key: "bio", label: "Bio", type: "textarea" },
    ],
    component: About007,
  },
  {
    id: "about-008",
    category: "about",
    name: "Culture",
    description: "Company culture showcase with pillar cards.",
    tags: ["about", "culture", "company", "pillars"],
    defaultProps: {
      heading: "Our Culture",
      description:
        "We work hard, stay curious, and never lose sight of who we are building for.",
      pillars: [
        { title: "Remote First", description: "Our team spans 12 time zones and we would not have it any other way." },
        { title: "Ship Weekly", description: "Small, frequent improvements over big, risky releases." },
        { title: "Creator Hours", description: "Every team member spends time creating content to stay close to users." },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      {
        key: "pillars",
        label: "Pillars",
        type: "items",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "text" },
        ],
      },
    ],
    component: About008,
  },
  {
    id: "about-009",
    category: "about",
    name: "Awards",
    description: "Awards and recognition showcase with icon cards.",
    tags: ["about", "awards", "recognition", "achievements"],
    defaultProps: {
      heading: "Awards & Recognition",
      subheading: "Honored by industry leaders for innovation and impact.",
      awards: [
        { title: "Best Creator Tool", org: "Creator Awards", year: "2024" },
        { title: "Top 50 Startups", org: "TechCrunch", year: "2023" },
        { title: "Innovation Award", org: "SaaS Weekly", year: "2023" },
        { title: "Editors Choice", org: "ProductHunt", year: "2022" },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "subheading", label: "Subheading", type: "text" },
      {
        key: "awards",
        label: "Awards",
        type: "items",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "org", label: "Organization", type: "text" },
          { key: "year", label: "Year", type: "text" },
        ],
      },
    ],
    component: About009,
  },
  {
    id: "about-010",
    category: "about",
    name: "Two Column",
    description: "Two column about text with centered heading.",
    tags: ["about", "two-column", "text", "minimal"],
    defaultProps: {
      heading: "Who We Are",
      columnOne:
        "We are a team of passionate builders who believe the creator economy should be accessible to everyone. Our platform eliminates the need for a dozen different subscriptions by combining everything a creator needs under one roof.",
      columnTwo:
        "From website building and email marketing to course hosting and payment processing, we handle the technology so you can focus on your craft. Join thousands of creators who have simplified their workflow with our all-in-one solution.",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "columnOne", label: "Column One", type: "textarea" },
      { key: "columnTwo", label: "Column Two", type: "textarea" },
    ],
    component: About010,
  },
  {
    id: "about-011",
    category: "about",
    name: "Centered",
    description: "Centered about narrative with label.",
    tags: ["about", "centered", "narrative", "simple"],
    defaultProps: {
      heading: "About Us",
      narrative:
        "We set out to build the simplest, most powerful platform for creators. Everything we do is guided by a single question: does this help creators succeed? Since our founding we have stayed true to that vision, growing from a small team of two to a company that serves creators in over 50 countries. Our story is still being written, and we want you to be part of it.",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "narrative", label: "Narrative", type: "textarea" },
    ],
    component: About011,
  },
  {
    id: "about-012",
    category: "about",
    name: "With Image",
    description: "About text with a large image and CTA button.",
    tags: ["about", "image", "cta", "visual"],
    defaultProps: {
      heading: "Built With Purpose",
      description:
        "Every line of code, every pixel in our design, and every word in our docs is crafted with one goal: helping creators thrive. We obsess over the details so you do not have to.",
      buttonText: "Learn More",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "buttonText", label: "Button Text", type: "text" },
    ],
    component: About012,
  },
  {
    id: "about-013",
    category: "about",
    name: "Dark Theme",
    description: "Dark background about section with inline stats.",
    tags: ["about", "dark", "theme", "stats"],
    defaultProps: {
      heading: "Who We Are",
      description:
        "A small team with big ambitions. We are creators ourselves, building the tools we always wished existed. Our platform is designed for independence, giving you full control over your business without relying on algorithms or gatekeepers.",
      stats: [
        { value: "10K+", label: "Creators" },
        { value: "1M+", label: "Pages Built" },
        { value: "50+", label: "Countries" },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      {
        key: "stats",
        label: "Stats",
        type: "items",
        itemFields: [
          { key: "value", label: "Value", type: "text" },
          { key: "label", label: "Label", type: "text" },
        ],
      },
    ],
    component: About013,
  },
  {
    id: "about-014",
    category: "about",
    name: "Card Style",
    description: "About information presented in numbered cards.",
    tags: ["about", "cards", "numbered", "grid"],
    defaultProps: {
      heading: "What Sets Us Apart",
      cards: [
        { title: "All-in-One Platform", description: "Website, email, courses, payments, community and more under one roof." },
        { title: "Self-Hostable", description: "Own your data. Deploy on your own infrastructure for full control." },
        { title: "Creator Focused", description: "Every feature is designed specifically for creators and their audiences." },
        { title: "Open Roadmap", description: "Our users vote on what gets built next. Your voice shapes our product." },
      ],
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      {
        key: "cards",
        label: "Cards",
        type: "items",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "text" },
        ],
      },
    ],
    component: About014,
  },
  {
    id: "about-015",
    category: "about",
    name: "With CTA",
    description: "About section with image, description, and dual CTA buttons.",
    tags: ["about", "cta", "buttons", "action"],
    defaultProps: {
      heading: "Ready to Join Our Story?",
      description:
        "We are building the future of the creator economy and we want you along for the ride. Whether you are a seasoned professional or just getting started, our platform has everything you need.",
      primaryButton: "Get Started Free",
      secondaryButton: "Talk to Us",
    },
    propsSchema: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "primaryButton", label: "Primary Button", type: "text" },
      { key: "secondaryButton", label: "Secondary Button", type: "text" },
    ],
    component: About015,
  },
];

registerSections(aboutSections);
