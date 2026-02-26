// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const castItems = (raw: unknown): TeamMember[] => {
  if (Array.isArray(raw)) return raw as TeamMember[];
  return [];
};

const str = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v : fallback;

/* ------------------------------------------------------------------ */
/*  Default data                                                       */
/* ------------------------------------------------------------------ */

const defaultMembers: TeamMember[] = [
  { name: "Sarah Chen", role: "CEO & Founder", bio: "Visionary leader with 15 years of experience in building scalable technology companies." },
  { name: "Marcus Johnson", role: "CTO", bio: "Full-stack architect passionate about distributed systems and developer experience." },
  { name: "Emily Rodriguez", role: "Head of Design", bio: "Award-winning designer specializing in user-centered product design and brand strategy." },
  { name: "David Kim", role: "VP of Engineering", bio: "Engineering leader focused on building high-performance teams and reliable infrastructure." },
  { name: "Olivia Brown", role: "Head of Marketing", bio: "Growth strategist with a track record of scaling startups from seed to Series C." },
  { name: "James Wilson", role: "Lead Developer", bio: "Open source contributor and advocate for clean code practices and continuous learning." },
];

const defaultHeading = "Meet Our Team";
const defaultSubheading = "The talented people behind our success";

const teamItemFields = [
  { key: "name", label: "Name", type: "text" as const, required: true },
  { key: "role", label: "Role", type: "text" as const, required: true },
  { key: "bio", label: "Bio", type: "textarea" as const },
];

const baseSchema = [
  { key: "heading", label: "Heading", type: "text" as const, required: true },
  { key: "subheading", label: "Sub-heading", type: "text" as const },
  { key: "items", label: "Team Members", type: "items" as const, itemFields: teamItemFields },
];

/* ================================================================== */
/*  team-001  Grid 3-Col                                               */
/* ================================================================== */
const Team001: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "text-center group" },
            React.createElement("div", { className: "w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("h3", { className: "text-lg font-semibold text-slate-900" }, m.name),
            React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
            React.createElement("p", { className: "mt-3 text-slate-600 text-sm leading-relaxed" }, m.bio),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-002  Grid 4-Col                                               */
/* ================================================================== */
const Team002: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "rounded-2xl bg-white border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition-all group" },
            React.createElement("div", { className: "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("h3", { className: "text-base font-semibold text-slate-900" }, m.name),
            React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
            React.createElement("p", { className: "mt-3 text-slate-500 text-xs leading-relaxed" }, m.bio),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-003  Carousel                                                 */
/* ================================================================== */
const Team003: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "flex-shrink-0 w-80 snap-center rounded-2xl bg-white/5 border border-white/10 p-8 text-center hover:border-white/20 transition-all" },
            React.createElement("div", { className: "w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("h3", { className: "text-xl font-semibold text-white" }, m.name),
            React.createElement("p", { className: "font-medium mt-1", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
            React.createElement("p", { className: "mt-4 text-slate-400 text-sm leading-relaxed" }, m.bio),
          )
        ),
      ),
      React.createElement("div", { className: "flex justify-center gap-2 mt-8" },
        ...items.map((_, i) =>
          React.createElement("div", { key: i, className: `w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-violet-500" : "bg-white/20"}` })
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-004  List                                                     */
/* ================================================================== */
const Team004: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "space-y-4" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "flex items-center gap-6 p-5 rounded-2xl hover:bg-slate-50 transition-all group" },
            React.createElement("div", { className: "w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("div", { className: "flex-1 min-w-0" },
              React.createElement("h3", { className: "text-lg font-semibold text-slate-900" }, m.name),
              React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
            ),
            React.createElement("p", { className: "hidden md:block text-slate-500 text-sm max-w-xs leading-relaxed" }, m.bio),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-005  Cards Hover                                              */
/* ================================================================== */
const Team005: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "group relative overflow-hidden rounded-2xl h-80" },
            React.createElement("div", { className: "absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } }, m.name.charAt(0)),
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" },
              React.createElement("h3", { className: "text-xl font-semibold text-white" }, m.name),
              React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
              React.createElement("p", { className: "mt-2 text-slate-300 text-sm leading-relaxed" }, m.bio),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-006  Bento                                                    */
/* ================================================================== */
const Team006: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  const bentoClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: `${bentoClasses[i % bentoClasses.length]} rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-end shadow-sm hover:shadow-md transition-all overflow-hidden relative group` },
            React.createElement("div", { className: "absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("h3", { className: "text-lg font-semibold text-slate-900" }, m.name),
            React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
            React.createElement("p", { className: "mt-1 text-slate-500 text-xs leading-relaxed line-clamp-2" }, m.bio),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-007  Minimal                                                  */
/* ================================================================== */
const Team007: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement("div", { className: "mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading),
      ),
      React.createElement("div", { className: "divide-y divide-slate-100" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "py-6 flex items-center justify-between group hover:px-2 transition-all" },
            React.createElement("div", null,
              React.createElement("h3", { className: "text-base font-semibold text-slate-900" }, m.name),
              React.createElement("p", { className: "text-sm text-slate-500" }, m.role),
            ),
            React.createElement("span", { className: "text-sm font-medium group-hover:translate-x-1 transition-transform", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "\u2192"),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-008  With Social                                              */
/* ================================================================== */
const Team008: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "rounded-2xl bg-white/5 border border-white/10 p-6 text-center hover:border-white/20 transition-all group" },
            React.createElement("div", { className: "w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("h3", { className: "text-lg font-semibold text-white" }, m.name),
            React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
            React.createElement("p", { className: "mt-3 text-slate-400 text-sm leading-relaxed" }, m.bio),
            React.createElement("div", { className: "mt-5 flex justify-center gap-3" },
              React.createElement("span", { className: "w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-xs hover:bg-violet-500/20 hover:text-violet-400 hover:border-violet-500/30 transition-all cursor-pointer" }, "in"),
              React.createElement("span", { className: "w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-xs hover:bg-violet-500/20 hover:text-violet-400 hover:border-violet-500/30 transition-all cursor-pointer" }, "tw"),
              React.createElement("span", { className: "w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-xs hover:bg-violet-500/20 hover:text-violet-400 hover:border-violet-500/30 transition-all cursor-pointer" }, "gh"),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-009  Leadership                                               */
/* ================================================================== */
const Team009: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "space-y-16" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: `flex flex-col md:flex-row items-center gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}` },
            React.createElement("div", { className: "w-48 h-48 rounded-2xl flex-shrink-0 flex items-center justify-center text-white text-5xl font-bold", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("div", { className: `flex-1 ${i % 2 === 1 ? "md:text-right" : ""}` },
              React.createElement("h3", { className: "text-2xl font-bold text-slate-900" }, m.name),
              React.createElement("p", { className: "font-medium mt-1", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
              React.createElement("p", { className: "mt-4 text-slate-600 leading-relaxed" }, m.bio),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-010  Circular                                                 */
/* ================================================================== */
const Team010: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "flex flex-wrap justify-center gap-14" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "text-center w-40 group" },
            React.createElement("div", { className: "w-32 h-32 rounded-full mx-auto mb-4 ring-4 ring-white shadow-lg flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("h3", { className: "text-base font-semibold text-slate-900" }, m.name),
            React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-011  Two Column                                               */
/* ================================================================== */
const Team011: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", { className: "mx-auto max-w-6xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "flex items-start gap-5 rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-all group" },
            React.createElement("div", { className: "w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("div", null,
              React.createElement("h3", { className: "text-lg font-semibold text-white" }, m.name),
              React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
              React.createElement("p", { className: "mt-2 text-slate-400 text-sm leading-relaxed" }, m.bio),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-012  Card Flip                                                */
/* ================================================================== */
const Team012: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden" },
            React.createElement("div", { className: "h-48 flex items-center justify-center text-white text-5xl font-bold", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } },
              React.createElement("span", { style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.name.charAt(0)),
            ),
            React.createElement("div", { className: "p-6" },
              React.createElement("h3", { className: "text-lg font-semibold text-slate-900" }, m.name),
              React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
              React.createElement("div", { className: "mt-4 pt-4 border-t border-slate-100" },
                React.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, m.bio),
              ),
            ),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-013  Centered                                                 */
/* ================================================================== */
const Team013: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement("div", { className: "mx-auto max-w-4xl px-6 lg:px-8 text-center" },
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
      React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      React.createElement("div", { className: "mt-16 space-y-12" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "flex flex-col items-center" },
            React.createElement("div", { className: "w-24 h-24 rounded-full mb-5 flex items-center justify-center text-white text-2xl font-bold", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("h3", { className: "text-xl font-semibold text-slate-900" }, m.name),
            React.createElement("p", { className: "font-medium mt-1", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
            React.createElement("p", { className: "mt-3 text-slate-600 text-sm max-w-md leading-relaxed" }, m.bio),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-014  Dark Theme                                               */
/* ================================================================== */
const Team014: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "rounded-2xl bg-white/5 border border-white/10 p-6 text-center hover:border-white/20 transition-all group" },
            React.createElement("div", { className: "w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("h3", { className: "text-lg font-semibold text-white" }, m.name),
            React.createElement("p", { className: "text-sm font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
            React.createElement("p", { className: "mt-3 text-slate-400 text-sm leading-relaxed" }, m.bio),
          )
        ),
      ),
    ),
  );
};

/* ================================================================== */
/*  team-015  With Bio                                                 */
/* ================================================================== */
const Team015: React.FC<Record<string, unknown>> = (props) => {
  const heading = str(props.heading, defaultHeading);
  const subheading = str(props.subheading, defaultSubheading);
  const items = castItems(props.items);
  return React.createElement("section", { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading),
      ),
      React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" },
        ...items.map((m, i) =>
          React.createElement("div", { key: i, className: "flex flex-col sm:flex-row gap-6 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group" },
            React.createElement("div", { className: "w-28 h-28 rounded-2xl flex-shrink-0 flex items-center justify-center text-white text-3xl font-bold group-hover:scale-105 transition-transform", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, m.name.charAt(0)),
            React.createElement("div", { className: "flex-1" },
              React.createElement("h3", { className: "text-xl font-bold text-slate-900" }, m.name),
              React.createElement("p", { className: "font-medium", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, m.role),
              React.createElement("p", { className: "mt-3 text-slate-600 text-sm leading-relaxed" }, m.bio),
              React.createElement("div", { className: "mt-4 flex gap-2" },
                React.createElement("span", { className: "inline-block px-3 py-1 rounded-full text-xs font-medium", style: { background: "rgba(167,139,250,0.1)", color: "#7c3aed" } }, "Leadership"),
                React.createElement("span", { className: "inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium" }, "Strategy"),
              ),
            ),
          )
        ),
      ),
    ),
  );
};

/* ------------------------------------------------------------------ */
/*  Definitions & registration                                         */
/* ------------------------------------------------------------------ */

const defaultProps = {
  heading: defaultHeading,
  subheading: defaultSubheading,
  items: defaultMembers,
};

const teamSections: SectionDefinition[] = [
  {
    id: "team-001",
    category: "team",
    name: "Team Grid 3-Col",
    description: "Three column grid of team member cards with avatars and bios",
    tags: ["team", "grid", "3-column", "cards"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team001,
  },
  {
    id: "team-002",
    category: "team",
    name: "Team Grid 4-Col",
    description: "Four column compact team grid with shadow cards",
    tags: ["team", "grid", "4-column", "compact"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team002,
  },
  {
    id: "team-003",
    category: "team",
    name: "Team Carousel",
    description: "Horizontally scrollable team member carousel with dot indicators",
    tags: ["team", "carousel", "slider", "scroll"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team003,
  },
  {
    id: "team-004",
    category: "team",
    name: "Team List",
    description: "Horizontal list rows showing team members in a clean layout",
    tags: ["team", "list", "rows", "horizontal"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team004,
  },
  {
    id: "team-005",
    category: "team",
    name: "Team Cards Hover",
    description: "Team cards with hover overlay effects revealing info",
    tags: ["team", "hover", "overlay", "interactive"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team005,
  },
  {
    id: "team-006",
    category: "team",
    name: "Team Bento",
    description: "Bento grid layout with varied card sizes for team members",
    tags: ["team", "bento", "grid", "asymmetric"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team006,
  },
  {
    id: "team-007",
    category: "team",
    name: "Team Minimal",
    description: "Clean minimal team list with simple dividers",
    tags: ["team", "minimal", "clean", "simple"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team007,
  },
  {
    id: "team-008",
    category: "team",
    name: "Team With Social",
    description: "Team cards with social link placeholders for LinkedIn, Twitter, GitHub",
    tags: ["team", "social", "links", "cards"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team008,
  },
  {
    id: "team-009",
    category: "team",
    name: "Team Leadership",
    description: "Large alternating cards for leadership team with prominent bios",
    tags: ["team", "leadership", "large", "alternating"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team009,
  },
  {
    id: "team-010",
    category: "team",
    name: "Team Circular",
    description: "Circular avatar images with ring borders in a flex wrap layout",
    tags: ["team", "circular", "avatars", "round"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team010,
  },
  {
    id: "team-011",
    category: "team",
    name: "Team Two Column",
    description: "Two column layout with avatar and info side by side",
    tags: ["team", "two-column", "side-by-side"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team011,
  },
  {
    id: "team-012",
    category: "team",
    name: "Team Card Flip",
    description: "Cards with large image area and detailed bio section below",
    tags: ["team", "card", "flip", "detailed"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team012,
  },
  {
    id: "team-013",
    category: "team",
    name: "Team Centered",
    description: "Centered team section with vertically stacked members",
    tags: ["team", "centered", "stacked", "vertical"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team013,
  },
  {
    id: "team-014",
    category: "team",
    name: "Team Dark Theme",
    description: "Dark background team section with light text and indigo accents",
    tags: ["team", "dark", "theme", "night"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team014,
  },
  {
    id: "team-015",
    category: "team",
    name: "Team With Bio",
    description: "Expanded bio cards with tags and large avatar in a two-column grid",
    tags: ["team", "bio", "expanded", "detailed"],
    defaultProps,
    propsSchema: baseSchema,
    component: Team015,
  },
];

registerSections(teamSections);
