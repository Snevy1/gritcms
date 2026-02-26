// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

// ─── Shared schema & defaults ────────────────────────────────────────────────

const blogItemFields = [
  { key: "title", label: "Title", type: "text" as const, required: true },
  { key: "excerpt", label: "Excerpt", type: "textarea" as const },
  { key: "image", label: "Image", type: "image" as const },
  { key: "author", label: "Author", type: "text" as const },
  { key: "date", label: "Date", type: "text" as const },
];

const blogPropsSchema = [
  { key: "heading", label: "Heading", type: "text" as const },
  { key: "subheading", label: "Sub-heading", type: "text" as const },
  {
    key: "items",
    label: "Posts",
    type: "items" as const,
    itemFields: blogItemFields,
  },
];

const defaultPosts = [
  {
    title: "Getting Started with Modern Web Development",
    excerpt:
      "Learn the fundamentals of building fast, responsive web applications with the latest tools and frameworks.",
    image: "",
    author: "Sarah Chen",
    date: "Jan 15, 2026",
  },
  {
    title: "Design Systems That Scale",
    excerpt:
      "How to create and maintain a design system that grows with your product and team.",
    image: "",
    author: "Marcus Johnson",
    date: "Jan 12, 2026",
  },
  {
    title: "The Future of AI in Content Creation",
    excerpt:
      "Exploring how artificial intelligence is transforming the way we produce and consume content.",
    image: "",
    author: "Aisha Patel",
    date: "Jan 10, 2026",
  },
  {
    title: "Optimizing Performance for Core Web Vitals",
    excerpt:
      "Practical strategies to improve your site speed, interactivity, and visual stability scores.",
    image: "",
    author: "David Kim",
    date: "Jan 8, 2026",
  },
  {
    title: "Building Accessible Interfaces from Day One",
    excerpt:
      "Why accessibility matters and how to bake it into your development workflow from the start.",
    image: "",
    author: "Elena Torres",
    date: "Jan 5, 2026",
  },
  {
    title: "Serverless Architecture Best Practices",
    excerpt:
      "A deep dive into designing, deploying, and monitoring serverless applications at scale.",
    image: "",
    author: "James Wright",
    date: "Jan 3, 2026",
  },
];

const categories = ["Technology", "Design", "Business", "Marketing"];

// ─── blog-001  Grid 3-Col ────────────────────────────────────────────────────

const Blog001: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Latest Articles";
  const subheading = (props.subheading as string) || "Insights, tutorials, and updates from our team.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
        ...items.map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden group" },
            React.createElement("div", { className: "aspect-[16/9] overflow-hidden" },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } })
            ),
            React.createElement(
              "div",
              { className: "p-6" },
              React.createElement("span", { className: "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3", style: { background: "rgba(167,139,250,0.1)", color: "#7c3aed" } }, categories[i % categories.length]),
              React.createElement(
                "div",
                { className: "flex items-center text-sm text-slate-400 mb-3" },
                React.createElement("span", null, post.author),
                React.createElement("span", { className: "mx-2" }, "\u00b7"),
                React.createElement("span", null, post.date)
              ),
              React.createElement("h3", { className: "text-lg font-semibold text-slate-900 mb-2" }, post.title),
              React.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, post.excerpt),
              React.createElement("a", { href: "#", className: "inline-block mt-4 text-sm font-semibold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "Read more \u2192")
            )
          )
        )
      )
    )
  );
};

// ─── blog-002  Grid 2-Col ────────────────────────────────────────────────────

const Blog002: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "From the Blog";
  const subheading = (props.subheading as string) || "Stay up to date with our latest stories.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
        ...items.slice(0, 4).map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all group" },
            React.createElement("div", { className: "aspect-[16/9] overflow-hidden" },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } })
            ),
            React.createElement(
              "div",
              { className: "p-8" },
              React.createElement("p", { className: "text-sm font-semibold mb-3", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, post.date),
              React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-3" }, post.title),
              React.createElement("p", { className: "text-slate-600 leading-relaxed" }, post.excerpt),
              React.createElement(
                "div",
                { className: "mt-6 flex items-center" },
                React.createElement("div", { className: "w-9 h-9 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, post.author.charAt(0)),
                React.createElement("span", { className: "text-sm text-slate-700 font-medium" }, post.author)
              )
            )
          )
        )
      )
    )
  );
};

// ─── blog-003  Featured Large ────────────────────────────────────────────────

const Blog003: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Featured Stories";
  const subheading = (props.subheading as string) || "Our most popular articles and deep dives.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;
  const featured = items[0];
  const rest = items.slice(1, 5);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" },
        React.createElement(
          "article",
          { className: "rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all group" },
          React.createElement("div", { className: "aspect-[16/9] overflow-hidden" },
            featured?.image
              ? React.createElement("img", { src: featured.image, alt: featured?.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
              : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } })
          ),
          React.createElement(
            "div",
            { className: "p-8" },
            React.createElement("p", { className: "text-sm font-semibold mb-3", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, featured?.date),
            React.createElement("h3", { className: "text-2xl font-bold text-white mb-3" }, featured?.title),
            React.createElement("p", { className: "text-slate-400 leading-relaxed" }, featured?.excerpt),
            React.createElement(
              "div",
              { className: "mt-6 flex items-center" },
              React.createElement("div", { className: "w-8 h-8 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, (featured?.author || "").charAt(0)),
              React.createElement("span", { className: "text-sm text-slate-300 font-medium" }, featured?.author)
            )
          )
        ),
        React.createElement(
          "div",
          { className: "flex flex-col gap-4" },
          ...rest.map((post, i) =>
            React.createElement(
              "article",
              { key: i, className: "flex gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 hover:border-white/20 transition-all" },
              React.createElement("div", { className: "w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden" },
                post.image
                  ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover" })
                  : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } })
              ),
              React.createElement(
                "div",
                { className: "flex flex-col justify-center" },
                React.createElement("p", { className: "text-xs text-slate-500 mb-1" }, post.date),
                React.createElement("h3", { className: "text-sm font-semibold text-white mb-1" }, post.title),
                React.createElement("p", { className: "text-xs text-slate-500" }, post.author)
              )
            )
          )
        )
      )
    )
  );
};

// ─── blog-004  List Sidebar ──────────────────────────────────────────────────

const Blog004: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Blog";
  const subheading = (props.subheading as string) || "Read our latest posts.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-2" }, heading),
      React.createElement("p", { className: "text-lg text-slate-600 mb-12" }, subheading),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 lg:grid-cols-3 gap-12" },
        React.createElement(
          "div",
          { className: "lg:col-span-2 space-y-10" },
          ...items.map((post, i) =>
            React.createElement(
              "article",
              { key: i, className: "flex flex-col sm:flex-row gap-6 pb-10 border-b border-slate-100 last:border-0" },
              React.createElement("div", { className: "w-full sm:w-48 h-36 flex-shrink-0 rounded-xl overflow-hidden" },
                post.image
                  ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover" })
                  : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
              ),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "text-sm font-semibold mb-1", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, post.date),
                React.createElement("h3", { className: "text-lg font-semibold text-slate-900 mb-2" }, post.title),
                React.createElement("p", { className: "text-slate-600 text-sm leading-relaxed mb-3" }, post.excerpt),
                React.createElement("span", { className: "text-sm text-slate-500" }, post.author)
              )
            )
          )
        ),
        React.createElement(
          "aside",
          { className: "space-y-8" },
          React.createElement(
            "div",
            { className: "rounded-2xl bg-slate-50 border border-slate-200 p-6" },
            React.createElement("h3", { className: "font-semibold text-slate-900 mb-4" }, "Categories"),
            ...categories.map((cat, i) =>
              React.createElement("a", { key: i, href: "#", className: "block py-2 text-sm text-slate-600 hover:text-violet-600 transition-colors" }, cat)
            )
          ),
          React.createElement(
            "div",
            { className: "rounded-2xl p-6 border border-white/20", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.1), rgba(129,140,248,0.1))" } },
            React.createElement("h3", { className: "font-semibold text-slate-900 mb-2" }, "Subscribe"),
            React.createElement("p", { className: "text-sm text-slate-600 mb-4" }, "Get the latest posts in your inbox."),
            React.createElement("input", { type: "email", placeholder: "you@example.com", className: "w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm mb-3 outline-none focus:border-violet-400 transition-colors" }),
            React.createElement("button", { className: "w-full text-white text-sm font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, "Subscribe")
          )
        )
      )
    )
  );
};

// ─── blog-005  Magazine ──────────────────────────────────────────────────────

const Blog005: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Magazine";
  const subheading = (props.subheading as string) || "Curated stories and features.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-4 gap-6" },
        React.createElement(
          "article",
          { className: "md:col-span-2 md:row-span-2 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all group" },
          React.createElement("div", { className: "h-64 md:h-80 overflow-hidden" },
            items[0]?.image
              ? React.createElement("img", { src: items[0].image, alt: items[0]?.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
              : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } })
          ),
          React.createElement(
            "div",
            { className: "p-6" },
            React.createElement("span", { className: "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3", style: { background: "rgba(167,139,250,0.1)", color: "#7c3aed" } }, "Featured"),
            React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-2" }, items[0]?.title),
            React.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, items[0]?.excerpt),
            React.createElement(
              "div",
              { className: "mt-4 flex items-center text-sm text-slate-500" },
              React.createElement("span", null, items[0]?.author),
              React.createElement("span", { className: "mx-2" }, "\u00b7"),
              React.createElement("span", null, items[0]?.date)
            )
          )
        ),
        ...items.slice(1, 5).map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all group" },
            React.createElement("div", { className: "h-32 overflow-hidden" },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
            ),
            React.createElement(
              "div",
              { className: "p-4" },
              React.createElement("h3", { className: "text-sm font-semibold text-slate-900 mb-1" }, post.title),
              React.createElement("p", { className: "text-xs text-slate-500" }, `${post.author} \u00b7 ${post.date}`)
            )
          )
        )
      )
    )
  );
};

// ─── blog-006  Minimal ───────────────────────────────────────────────────────

const Blog006: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Recent Posts";
  const subheading = (props.subheading as string) || "";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-3xl px-6 lg:px-8" },
      heading && React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-2" }, heading),
      subheading && React.createElement("p", { className: "text-lg text-slate-600 mb-10" }, subheading),
      React.createElement(
        "div",
        { className: "divide-y divide-slate-100" },
        ...items.map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "py-6 flex justify-between items-start gap-4 group" },
            React.createElement(
              "div",
              null,
              React.createElement("h3", { className: "text-lg font-semibold text-slate-900 group-hover:text-violet-600 transition-colors cursor-pointer" }, post.title),
              React.createElement("p", { className: "text-sm text-slate-400 mt-1" }, `${post.author} \u00b7 ${post.date}`)
            ),
            React.createElement("a", { href: "#", className: "text-sm font-semibold whitespace-nowrap group-hover:translate-x-1 transition-transform", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "Read \u2192")
          )
        )
      )
    )
  );
};

// ─── blog-007  Card Overlay ──────────────────────────────────────────────────

const Blog007: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Latest Stories";
  const subheading = (props.subheading as string) || "Explore our newest content.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.slice(0, 6).map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "relative h-72 rounded-2xl overflow-hidden group cursor-pointer" },
            React.createElement("div", { className: "absolute inset-0", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } }),
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" }),
            React.createElement(
              "div",
              { className: "absolute bottom-0 left-0 right-0 p-6" },
              React.createElement("p", { className: "text-xs font-semibold mb-2", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, post.date),
              React.createElement("h3", { className: "text-lg font-bold text-white mb-1 group-hover:text-violet-300 transition-colors" }, post.title),
              React.createElement("p", { className: "text-sm text-slate-400" }, post.author)
            )
          )
        )
      )
    )
  );
};

// ─── blog-008  Timeline ──────────────────────────────────────────────────────

const Blog008: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Our Journey in Words";
  const subheading = (props.subheading as string) || "A timeline of our latest articles and thoughts.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-4xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "relative" },
        React.createElement("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" }),
        ...items.map((post, i) =>
          React.createElement(
            "div",
            { key: i, className: `relative flex flex-col md:flex-row items-start mb-14 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}` },
            React.createElement("div", { className: "absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 mt-1 z-10 ring-4 ring-white", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }),
            React.createElement(
              "div",
              { className: `ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}` },
              React.createElement("span", { className: "text-xs font-semibold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, post.date),
              React.createElement("h3", { className: "text-lg font-semibold text-slate-900 mt-1 mb-2" }, post.title),
              React.createElement("p", { className: "text-sm text-slate-600 leading-relaxed" }, post.excerpt),
              React.createElement("p", { className: "text-xs text-slate-400 mt-2" }, `By ${post.author}`)
            )
          )
        )
      )
    )
  );
};

// ─── blog-009  Category Tabs ─────────────────────────────────────────────────

const Blog009: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Explore Topics";
  const subheading = (props.subheading as string) || "Browse articles by category.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-10" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "flex justify-center gap-2 mb-12 flex-wrap" },
        ...["All", ...categories].map((tab, i) =>
          React.createElement(
            "button",
            { key: i, className: `px-5 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? "text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`, style: i === 0 ? { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } : {} },
            tab
          )
        )
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
        ...items.slice(0, 6).map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all group" },
            React.createElement("div", { className: "aspect-[16/9] overflow-hidden" },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
            ),
            React.createElement(
              "div",
              { className: "p-6" },
              React.createElement(
                "div",
                { className: "flex items-center text-sm text-slate-400 mb-3" },
                React.createElement("span", null, post.author),
                React.createElement("span", { className: "mx-2" }, "\u00b7"),
                React.createElement("span", null, post.date)
              ),
              React.createElement("h3", { className: "text-lg font-semibold text-slate-900 mb-2" }, post.title),
              React.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, post.excerpt)
            )
          )
        )
      )
    )
  );
};

// ─── blog-010  Masonry ───────────────────────────────────────────────────────

const Blog010: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Blog";
  const subheading = (props.subheading as string) || "Fresh ideas and insights.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;
  const heights = ["h-64", "h-48", "h-56", "h-40", "h-60", "h-44"];

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" },
        ...items.map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "break-inside-avoid rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all group" },
            React.createElement("div", { className: `${heights[i % heights.length]} overflow-hidden` },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
            ),
            React.createElement(
              "div",
              { className: "p-5" },
              React.createElement("p", { className: "text-xs font-semibold mb-2", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, post.date),
              React.createElement("h3", { className: "text-base font-semibold text-slate-900 mb-2" }, post.title),
              React.createElement("p", { className: "text-sm text-slate-600 leading-relaxed" }, post.excerpt),
              React.createElement("p", { className: "text-xs text-slate-400 mt-3" }, post.author)
            )
          )
        )
      )
    )
  );
};

// ─── blog-011  Horizontal Scroll ─────────────────────────────────────────────

const Blog011: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Trending Now";
  const subheading = (props.subheading as string) || "Swipe through our latest picks.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "flex items-end justify-between mb-12" },
        React.createElement(
          "div",
          null,
          React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
          React.createElement("p", { className: "mt-2 text-slate-400" }, subheading)
        ),
        React.createElement("a", { href: "#", className: "text-sm font-semibold hidden sm:block", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "View all \u2192")
      )
    ),
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 overflow-x-auto pb-4" },
      React.createElement(
        "div",
        { className: "flex gap-6", style: { minWidth: "max-content" } },
        ...items.map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "w-80 flex-shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all group" },
            React.createElement("div", { className: "aspect-[16/9] overflow-hidden" },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))" } })
            ),
            React.createElement(
              "div",
              { className: "p-5" },
              React.createElement("p", { className: "text-xs text-slate-500 mb-2" }, `${post.author} \u00b7 ${post.date}`),
              React.createElement("h3", { className: "text-base font-semibold text-white mb-2" }, post.title),
              React.createElement("p", { className: "text-sm text-slate-400 line-clamp-2" }, post.excerpt)
            )
          )
        )
      )
    )
  );
};

// ─── blog-012  Dark Theme ────────────────────────────────────────────────────

const Blog012: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "The Dark Side of Our Blog";
  const subheading = (props.subheading as string) || "Late-night reads for the curious mind.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...items.slice(0, 6).map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-violet-500/30 transition-all group" },
            React.createElement("div", { className: "aspect-[16/9] overflow-hidden" },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
            ),
            React.createElement(
              "div",
              { className: "p-6" },
              React.createElement(
                "div",
                { className: "flex items-center text-sm text-slate-500 mb-3" },
                React.createElement("span", null, post.author),
                React.createElement("span", { className: "mx-2" }, "\u00b7"),
                React.createElement("span", null, post.date)
              ),
              React.createElement("h3", { className: "text-lg font-semibold text-white mb-2" }, post.title),
              React.createElement("p", { className: "text-slate-400 text-sm leading-relaxed" }, post.excerpt),
              React.createElement("a", { href: "#", className: "inline-block mt-4 text-sm font-semibold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "Read more \u2192")
            )
          )
        )
      )
    )
  );
};

// ─── blog-013  With Author ───────────────────────────────────────────────────

const Blog013: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Written by Our Experts";
  const subheading = (props.subheading as string) || "Insights from the people who know best.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
        ...items.slice(0, 6).map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all group" },
            React.createElement("div", { className: "aspect-[16/9] overflow-hidden" },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
            ),
            React.createElement(
              "div",
              { className: "p-6" },
              React.createElement("p", { className: "text-sm font-semibold mb-2", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, post.date),
              React.createElement("h3", { className: "text-lg font-semibold text-slate-900 mb-2" }, post.title),
              React.createElement("p", { className: "text-slate-600 text-sm leading-relaxed mb-4" }, post.excerpt),
              React.createElement(
                "div",
                { className: "flex items-center pt-4 border-t border-slate-100" },
                React.createElement("div", { className: "w-10 h-10 rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold", style: { backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" } }, post.author.charAt(0)),
                React.createElement(
                  "div",
                  null,
                  React.createElement("p", { className: "text-sm font-medium text-slate-900" }, post.author),
                  React.createElement("p", { className: "text-xs text-slate-500" }, "Contributing Writer")
                )
              )
            )
          )
        )
      )
    )
  );
};

// ─── blog-014  Centered ──────────────────────────────────────────────────────

const Blog014: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Our Blog";
  const subheading = (props.subheading as string) || "Thoughtful writing on the topics that matter.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-50" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-2xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "space-y-14" },
        ...items.map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "text-center" },
            React.createElement("div", { className: "aspect-[16/9] rounded-xl overflow-hidden mb-6 group" },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
            ),
            React.createElement("p", { className: "text-sm font-semibold mb-2", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, `${post.author} \u00b7 ${post.date}`),
            React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-3" }, post.title),
            React.createElement("p", { className: "text-slate-600 leading-relaxed" }, post.excerpt),
            React.createElement("a", { href: "#", className: "inline-block mt-4 text-sm font-semibold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "Continue reading \u2192"),
            i < items.length - 1 ? React.createElement("hr", { className: "mt-14 border-slate-200" }) : null
          )
        )
      )
    )
  );
};

// ─── blog-015  Full Width ────────────────────────────────────────────────────

const Blog015: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Latest Posts";
  const subheading = (props.subheading as string) || "Everything you need to know, in one place.";
  const items = (props.items as typeof defaultPosts) || defaultPosts;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "space-y-6" },
        ...items.map((post, i) =>
          React.createElement(
            "article",
            { key: i, className: "flex flex-col md:flex-row gap-8 rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden hover:shadow-md transition-all group" },
            React.createElement("div", { className: "w-full md:w-96 h-56 md:h-auto flex-shrink-0 overflow-hidden" },
              post.image
                ? React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
                : React.createElement("div", { className: "w-full h-full", style: { backgroundImage: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))" } })
            ),
            React.createElement(
              "div",
              { className: "flex flex-col justify-center p-8 md:py-10" },
              React.createElement(
                "div",
                { className: "flex items-center text-sm text-slate-400 mb-3" },
                React.createElement("span", { className: "font-semibold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, post.date),
                React.createElement("span", { className: "mx-3" }, "\u00b7"),
                React.createElement("span", null, post.author)
              ),
              React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-3" }, post.title),
              React.createElement("p", { className: "text-slate-600 leading-relaxed mb-4" }, post.excerpt),
              React.createElement("a", { href: "#", className: "text-sm font-semibold", style: { backgroundImage: "linear-gradient(to right, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "Read full article \u2192")
            )
          )
        )
      )
    )
  );
};

// ─── Section definitions ─────────────────────────────────────────────────────

const blogSections: SectionDefinition[] = [
  {
    id: "blog-001",
    category: "blog",
    name: "Blog Grid 3-Col",
    description: "Three-column grid of blog post cards with images, excerpts, and author info.",
    tags: ["blog", "grid", "cards", "3-column"],
    defaultProps: { heading: "Latest Articles", subheading: "Insights, tutorials, and updates from our team.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog001,
  },
  {
    id: "blog-002",
    category: "blog",
    name: "Blog Grid 2-Col",
    description: "Two-column grid of blog cards with larger images and author avatars.",
    tags: ["blog", "grid", "cards", "2-column"],
    defaultProps: { heading: "From the Blog", subheading: "Stay up to date with our latest stories.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog002,
  },
  {
    id: "blog-003",
    category: "blog",
    name: "Blog Featured Large",
    description: "One large featured post alongside a column of smaller post cards.",
    tags: ["blog", "featured", "highlight", "mixed"],
    defaultProps: { heading: "Featured Stories", subheading: "Our most popular articles and deep dives.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog003,
  },
  {
    id: "blog-004",
    category: "blog",
    name: "Blog List Sidebar",
    description: "Blog post list layout with a sidebar containing categories and newsletter signup.",
    tags: ["blog", "list", "sidebar", "categories"],
    defaultProps: { heading: "Blog", subheading: "Read our latest posts.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog004,
  },
  {
    id: "blog-005",
    category: "blog",
    name: "Blog Magazine",
    description: "Magazine-style mixed layout with a large featured post and smaller cards.",
    tags: ["blog", "magazine", "mixed", "editorial"],
    defaultProps: { heading: "Magazine", subheading: "Curated stories and features.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog005,
  },
  {
    id: "blog-006",
    category: "blog",
    name: "Blog Minimal",
    description: "Clean, minimal blog post list with titles, dates, and read links.",
    tags: ["blog", "minimal", "clean", "list"],
    defaultProps: { heading: "Recent Posts", subheading: "", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog006,
  },
  {
    id: "blog-007",
    category: "blog",
    name: "Blog Card Overlay",
    description: "Dark-themed blog cards with gradient overlays on images.",
    tags: ["blog", "overlay", "dark", "gradient", "cards"],
    defaultProps: { heading: "Latest Stories", subheading: "Explore our newest content.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog007,
  },
  {
    id: "blog-008",
    category: "blog",
    name: "Blog Timeline",
    description: "Blog posts arranged on a vertical timeline with alternating layout.",
    tags: ["blog", "timeline", "chronological", "vertical"],
    defaultProps: { heading: "Our Journey in Words", subheading: "A timeline of our latest articles and thoughts.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog008,
  },
  {
    id: "blog-009",
    category: "blog",
    name: "Blog Category Tabs",
    description: "Blog grid with category filter tabs at the top.",
    tags: ["blog", "tabs", "categories", "filter", "grid"],
    defaultProps: { heading: "Explore Topics", subheading: "Browse articles by category.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog009,
  },
  {
    id: "blog-010",
    category: "blog",
    name: "Blog Masonry",
    description: "Masonry grid of blog cards with varying image heights.",
    tags: ["blog", "masonry", "grid", "pinterest"],
    defaultProps: { heading: "Blog", subheading: "Fresh ideas and insights.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog010,
  },
  {
    id: "blog-011",
    category: "blog",
    name: "Blog Horizontal Scroll",
    description: "Horizontally scrolling blog post cards in a carousel-like layout.",
    tags: ["blog", "horizontal", "scroll", "carousel"],
    defaultProps: { heading: "Trending Now", subheading: "Swipe through our latest picks.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog011,
  },
  {
    id: "blog-012",
    category: "blog",
    name: "Blog Dark Theme",
    description: "Dark background blog grid with glowing hover borders.",
    tags: ["blog", "dark", "night", "grid"],
    defaultProps: { heading: "The Dark Side of Our Blog", subheading: "Late-night reads for the curious mind.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog012,
  },
  {
    id: "blog-013",
    category: "blog",
    name: "Blog With Author",
    description: "Blog cards featuring prominent author avatars and bios.",
    tags: ["blog", "author", "avatar", "cards"],
    defaultProps: { heading: "Written by Our Experts", subheading: "Insights from the people who know best.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog013,
  },
  {
    id: "blog-014",
    category: "blog",
    name: "Blog Centered",
    description: "Single-column centered blog list with large images.",
    tags: ["blog", "centered", "single-column", "clean"],
    defaultProps: { heading: "Our Blog", subheading: "Thoughtful writing on the topics that matter.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog014,
  },
  {
    id: "blog-015",
    category: "blog",
    name: "Blog Full Width",
    description: "Full-width blog post previews with side-by-side image and text.",
    tags: ["blog", "full-width", "wide", "preview"],
    defaultProps: { heading: "Latest Posts", subheading: "Everything you need to know, in one place.", items: defaultPosts },
    propsSchema: blogPropsSchema,
    component: Blog015,
  },
];

registerSections(blogSections);
