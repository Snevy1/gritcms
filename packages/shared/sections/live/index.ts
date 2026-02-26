// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ==========================================================================
   LIVE DATA SECTIONS
   Dynamic sections that display live data from the admin dashboard.
   Each section has a `dataSource` prop that tells the renderer what API
   data to fetch. When no data is available (e.g., in the admin editor
   preview), they show elegant placeholders.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */

/** Gradient palettes for placeholder cards */
const placeholderGradients = [
  "from-violet-500/20 to-indigo-500/20",
  "from-fuchsia-500/20 to-violet-500/20",
  "from-indigo-500/20 to-cyan-500/20",
  "from-rose-500/20 to-orange-500/20",
];

function Stars({ count = 5 }: { count?: number }) {
  return React.createElement(
    "div",
    { className: "flex gap-0.5" },
    ...Array.from({ length: count }, (_, i) =>
      React.createElement(
        "span",
        { key: i, className: "text-amber-400 text-lg" },
        "\u2605"
      )
    )
  );
}

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return React.createElement(
    "div",
    {
      className:
        "w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0",
    },
    initials
  );
}

/* ==========================================================================
   LIVE-001: Live Courses
   Shows course cards in a grid with live data or placeholder cards.
   ========================================================================== */

const LiveCourses: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Our Courses";
  const subheading =
    (props.subheading as string) || "Start learning today with our expert-led courses.";
  const limit = (props.limit as number) || 3;
  const items = (props._liveData as Array<Record<string, unknown>>) || [];

  const placeholders = Array.from({ length: limit }, (_, i) => ({
    title: ["Master Digital Marketing", "Web Development Bootcamp", "Design Fundamentals", "Data Science Essentials"][i % 4],
    description: ["Learn proven strategies to grow your audience and drive conversions.", "Build modern web apps from scratch with HTML, CSS, and JavaScript.", "Core principles of visual design, typography, and layout.", "Analyze data, build models, and make data-driven decisions."][i % 4],
    price: ["$49", "Free", "$79", "$59"][i % 4],
    enrollments: [1240, 3890, 720, 2100][i % 4],
  }));

  const renderCard = (item: Record<string, unknown>, i: number) => {
    const title = (item.title as string) || (item.name as string) || placeholders[i % placeholders.length].title;
    const description = (item.description as string) || (item.short_description as string) || placeholders[i % placeholders.length].description;
    const price = item.price != null ? (Number(item.price) === 0 ? "Free" : `$${item.price}`) : placeholders[i % placeholders.length].price;
    const enrollments = (item.enrollment_count as number) || placeholders[i % placeholders.length].enrollments;
    const image = item.image as string | undefined;

    return React.createElement(
      "div",
      { key: i, className: "group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-violet-500/30 transition-all" },
      React.createElement(
        "div",
        { className: "relative aspect-video overflow-hidden" },
        image
          ? React.createElement("img", { src: image, alt: title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
          : React.createElement("div", {
              className: `w-full h-full bg-gradient-to-br ${placeholderGradients[i % placeholderGradients.length]} flex items-center justify-center`,
            },
            React.createElement(
              "svg",
              { className: "w-12 h-12 text-white/20", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
              React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" })
            )
          ),
        React.createElement(
          "span",
          { className: `absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${price === "Free" ? "bg-emerald-500/90 text-white" : "bg-white/90 text-slate-900"}` },
          price
        )
      ),
      React.createElement(
        "div",
        { className: "p-5" },
        React.createElement("h3", { className: "text-lg font-semibold text-white mb-2 line-clamp-1" }, title),
        React.createElement("p", { className: "text-sm text-slate-400 mb-4 line-clamp-2" }, description),
        React.createElement(
          "div",
          { className: "flex items-center justify-between" },
          React.createElement(
            "span",
            { className: "text-xs text-slate-500" },
            `${enrollments.toLocaleString()} enrolled`
          ),
          React.createElement(
            "span",
            { className: "text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors" },
            "Learn more \u2192"
          )
        )
      )
    );
  };

  const displayItems = items.length > 0 ? items.slice(0, limit) : placeholders.slice(0, limit);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { backgroundImage: "radial-gradient(ellipse at top, rgba(139,92,246,0.1) 0%, transparent 50%)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" },
        ...displayItems.map((item, i) => renderCard(item as Record<string, unknown>, i))
      )
    )
  );
};

const liveCourses: SectionDefinition = {
  id: "live-001",
  category: "live",
  name: "Live Courses",
  description: "Dynamic course grid that displays live course data from your dashboard.",
  tags: ["live", "courses", "dynamic", "grid", "education"],
  defaultProps: {
    heading: "Our Courses",
    subheading: "Start learning today with our expert-led courses.",
    limit: 3,
    dataSource: "courses",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Sub-heading", type: "textarea" },
    { key: "limit", label: "Number of Courses", type: "number" },
    { key: "dataSource", label: "Data Source", type: "select", options: [{ label: "Courses", value: "courses" }] },
  ],
  component: LiveCourses,
};

/* ==========================================================================
   LIVE-002: Live Products
   Product grid with live data or placeholder product cards.
   ========================================================================== */

const LiveProducts: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Shop Our Products";
  const subheading =
    (props.subheading as string) || "Discover handpicked products curated just for you.";
  const limit = (props.limit as number) || 4;
  const items = (props._liveData as Array<Record<string, unknown>>) || [];

  const placeholders = Array.from({ length: limit }, (_, i) => ({
    title: ["Premium Course Bundle", "Digital Toolkit Pro", "Creative Assets Pack", "Membership Pass"][i % 4],
    price: ["$99", "$49", "$29", "$149"][i % 4],
    description: ["Everything you need to level up your skills.", "Professional tools for modern creators.", "High-quality templates and resources.", "Unlimited access to all content."][i % 4],
  }));

  const renderCard = (item: Record<string, unknown>, i: number) => {
    const title = (item.title as string) || (item.name as string) || placeholders[i % placeholders.length].title;
    const price = item.price != null ? `$${item.price}` : placeholders[i % placeholders.length].price;
    const image = item.image as string | undefined;

    return React.createElement(
      "div",
      { key: i, className: "group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-lg hover:border-violet-200 transition-all" },
      React.createElement(
        "div",
        { className: "relative aspect-square overflow-hidden" },
        image
          ? React.createElement("img", { src: image, alt: title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
          : React.createElement("div", {
              className: `w-full h-full bg-gradient-to-br ${placeholderGradients[i % placeholderGradients.length]} flex items-center justify-center`,
            },
            React.createElement(
              "svg",
              { className: "w-12 h-12 text-slate-300", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
              React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" })
            )
          )
      ),
      React.createElement(
        "div",
        { className: "p-5" },
        React.createElement("h3", { className: "text-sm font-semibold text-slate-900 mb-1 line-clamp-1" }, title),
        React.createElement("p", { className: "text-2xl font-bold text-slate-900 mb-4" }, price),
        React.createElement(
          "button",
          { className: "w-full rounded-xl bg-violet-600 py-2.5 text-white text-sm font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" },
          "Add to Cart"
        )
      )
    );
  };

  const displayItems = items.length > 0 ? items.slice(0, limit) : placeholders.slice(0, limit);

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
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
        ...displayItems.map((item, i) => renderCard(item as Record<string, unknown>, i))
      )
    )
  );
};

const liveProducts: SectionDefinition = {
  id: "live-002",
  category: "live",
  name: "Live Products",
  description: "Dynamic product grid that displays live product data from your store.",
  tags: ["live", "products", "dynamic", "grid", "ecommerce", "shop"],
  defaultProps: {
    heading: "Shop Our Products",
    subheading: "Discover handpicked products curated just for you.",
    limit: 4,
    dataSource: "products",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Sub-heading", type: "textarea" },
    { key: "limit", label: "Number of Products", type: "number" },
    { key: "dataSource", label: "Data Source", type: "select", options: [{ label: "Products", value: "products" }] },
  ],
  component: LiveProducts,
};

/* ==========================================================================
   LIVE-003: Live Posts
   Blog post feed with grid or list layout.
   ========================================================================== */

const LivePosts: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Latest Posts";
  const subheading =
    (props.subheading as string) || "Insights, tutorials, and stories from our team.";
  const limit = (props.limit as number) || 3;
  const layout = (props.layout as string) || "grid";
  const items = (props._liveData as Array<Record<string, unknown>>) || [];

  const placeholders = Array.from({ length: limit }, (_, i) => ({
    title: ["Getting Started with GritCMS", "10 Tips for Growing Your Audience", "The Future of Online Education"][i % 3],
    excerpt: ["A complete guide to setting up your creator platform and launching your first course.", "Proven strategies to attract, engage, and retain your audience across multiple channels.", "How technology is transforming the way we learn and teach in the digital age."][i % 3],
    author: ["Alex Rivera", "Jordan Lee", "Sam Taylor"][i % 3],
    date: ["Feb 20, 2026", "Feb 15, 2026", "Feb 10, 2026"][i % 3],
  }));

  const renderCard = (item: Record<string, unknown>, i: number) => {
    const title = (item.title as string) || placeholders[i % placeholders.length].title;
    const excerpt = (item.excerpt as string) || (item.description as string) || placeholders[i % placeholders.length].excerpt;
    const author = (item.author as string) || (item.author_name as string) || placeholders[i % placeholders.length].author;
    const date = item.published_at
      ? new Date(item.published_at as string).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      : placeholders[i % placeholders.length].date;
    const image = item.image as string | undefined;
    const isGrid = layout === "grid";

    return React.createElement(
      "div",
      {
        key: i,
        className: isGrid
          ? "group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-violet-500/30 transition-all"
          : "group flex flex-col sm:flex-row gap-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-violet-500/30 transition-all",
      },
      React.createElement(
        "div",
        { className: isGrid ? "relative aspect-video overflow-hidden" : "relative sm:w-72 aspect-video sm:aspect-auto sm:h-auto overflow-hidden flex-shrink-0" },
        image
          ? React.createElement("img", { src: image, alt: title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })
          : React.createElement("div", {
              className: `w-full h-full bg-gradient-to-br ${placeholderGradients[i % placeholderGradients.length]} flex items-center justify-center min-h-[160px]`,
            },
            React.createElement(
              "svg",
              { className: "w-10 h-10 text-white/20", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
              React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" })
            )
          )
      ),
      React.createElement(
        "div",
        { className: "p-5 flex flex-col flex-1" },
        React.createElement(
          "div",
          { className: "flex items-center gap-2 text-xs text-slate-500 mb-3" },
          React.createElement("span", null, author),
          React.createElement("span", null, "\u00B7"),
          React.createElement("span", null, date)
        ),
        React.createElement("h3", { className: "text-lg font-semibold text-white mb-2 line-clamp-2" }, title),
        React.createElement("p", { className: "text-sm text-slate-400 mb-4 line-clamp-2 flex-1" }, excerpt),
        React.createElement(
          "span",
          { className: "text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors" },
          "Read more \u2192"
        )
      )
    );
  };

  const displayItems = items.length > 0 ? items.slice(0, limit) : placeholders.slice(0, limit);

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { backgroundImage: "radial-gradient(ellipse at bottom right, rgba(139,92,246,0.08) 0%, transparent 50%)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: layout === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6" },
        ...displayItems.map((item, i) => renderCard(item as Record<string, unknown>, i))
      )
    )
  );
};

const livePosts: SectionDefinition = {
  id: "live-003",
  category: "live",
  name: "Live Blog Posts",
  description: "Dynamic blog post feed that displays live post data in grid or list layout.",
  tags: ["live", "blog", "posts", "dynamic", "feed", "articles"],
  defaultProps: {
    heading: "Latest Posts",
    subheading: "Insights, tutorials, and stories from our team.",
    limit: 3,
    layout: "grid",
    dataSource: "posts",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Sub-heading", type: "textarea" },
    { key: "limit", label: "Number of Posts", type: "number" },
    { key: "layout", label: "Layout", type: "select", options: [{ label: "Grid", value: "grid" }, { label: "List", value: "list" }] },
    { key: "dataSource", label: "Data Source", type: "select", options: [{ label: "Posts", value: "posts" }] },
  ],
  component: LivePosts,
};

/* ==========================================================================
   LIVE-004: Live Newsletter
   Email signup form with functional state management.
   ========================================================================== */

const LiveNewsletter: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Stay in the Loop";
  const subheading =
    (props.subheading as string) || "Subscribe to our newsletter and never miss an update. Get exclusive content delivered directly to your inbox.";
  const buttonText = (props.buttonText as string) || "Subscribe";
  const placeholder = (props.placeholder as string) || "Enter your email address";
  const onSubmit = props.onSubmit as ((email: string) => Promise<void>) | undefined;

  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      if (onSubmit) {
        await onSubmit(email);
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { backgroundImage: "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 60%)" },
    }),
    React.createElement(
      "div",
      { className: "relative mx-auto max-w-xl px-6 lg:px-8 text-center" },
      React.createElement(
        "div",
        { className: "w-14 h-14 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-violet-500/30" },
        React.createElement(
          "svg",
          { className: "w-7 h-7 text-violet-400", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
          React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" })
        )
      ),
      React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" }, heading),
      React.createElement("p", { className: "text-lg text-slate-400 mb-10 leading-relaxed" }, subheading),
      status === "success"
        ? React.createElement(
            "div",
            { className: "rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6" },
            React.createElement(
              "div",
              { className: "flex items-center justify-center gap-2 text-emerald-400" },
              React.createElement(
                "svg",
                { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
              ),
              React.createElement("span", { className: "font-semibold" }, "You're subscribed!")
            ),
            React.createElement("p", { className: "text-sm text-slate-400 mt-2" }, "Check your inbox to confirm your subscription.")
          )
        : React.createElement(
            "form",
            { className: "space-y-3", onSubmit: handleSubmit },
            React.createElement("input", {
              type: "email",
              placeholder,
              value: email,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
              className: "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition",
              required: true,
            }),
            status === "error" &&
              React.createElement(
                "p",
                { className: "text-sm text-rose-400" },
                "Something went wrong. Please try again."
              ),
            React.createElement(
              "button",
              {
                type: "submit",
                disabled: status === "loading",
                className: `w-full rounded-xl py-3 text-white font-semibold transition-colors shadow-lg shadow-violet-600/25 ${status === "loading" ? "bg-violet-600/50 cursor-wait" : "bg-violet-600 hover:bg-violet-700"}`,
              },
              status === "loading" ? "Subscribing..." : buttonText
            )
          ),
      React.createElement("p", { className: "text-xs text-slate-500 mt-4" }, "No spam, unsubscribe anytime.")
    )
  );
};

const liveNewsletter: SectionDefinition = {
  id: "live-004",
  category: "live",
  name: "Live Newsletter",
  description: "Functional newsletter signup form with loading, success, and error states.",
  tags: ["live", "newsletter", "email", "signup", "form", "dynamic"],
  defaultProps: {
    heading: "Stay in the Loop",
    subheading: "Subscribe to our newsletter and never miss an update. Get exclusive content delivered directly to your inbox.",
    buttonText: "Subscribe",
    placeholder: "Enter your email address",
    listId: 1,
    dataSource: "newsletter",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Sub-heading", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "placeholder", label: "Input Placeholder", type: "text" },
    { key: "listId", label: "List ID", type: "number" },
    { key: "dataSource", label: "Data Source", type: "select", options: [{ label: "Newsletter", value: "newsletter" }] },
  ],
  component: LiveNewsletter,
};

/* ==========================================================================
   LIVE-005: Live Community
   Community spaces grid with live data or placeholders.
   ========================================================================== */

const LiveCommunity: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Join Our Community";
  const subheading =
    (props.subheading as string) || "Connect with like-minded creators and grow together.";
  const limit = (props.limit as number) || 3;
  const items = (props._liveData as Array<Record<string, unknown>>) || [];

  const placeholders = Array.from({ length: limit }, (_, i) => ({
    name: ["General Discussion", "Show & Tell", "Q&A Support"][i % 3],
    description: ["A place to chat about anything and everything with the community.", "Share your latest projects, wins, and creative work.", "Get help from the community and our team of experts."][i % 3],
    members: [1842, 956, 2310][i % 3],
  }));

  const spaceIcons = [
    "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z",
  ];

  const renderCard = (item: Record<string, unknown>, i: number) => {
    const name = (item.name as string) || placeholders[i % placeholders.length].name;
    const description = (item.description as string) || placeholders[i % placeholders.length].description;
    const members = (item.member_count as number) || placeholders[i % placeholders.length].members;

    return React.createElement(
      "div",
      { key: i, className: "rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-lg hover:border-violet-200 transition-all" },
      React.createElement(
        "div",
        { className: "flex items-start gap-4 mb-4" },
        React.createElement(
          "div",
          { className: "w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0" },
          React.createElement(
            "svg",
            { className: "w-6 h-6 text-violet-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: spaceIcons[i % spaceIcons.length] })
          )
        ),
        React.createElement(
          "div",
          { className: "flex-1 min-w-0" },
          React.createElement("h3", { className: "text-lg font-semibold text-slate-900 mb-1" }, name),
          React.createElement("p", { className: "text-sm text-slate-500" }, `${members.toLocaleString()} members`)
        )
      ),
      React.createElement("p", { className: "text-sm text-slate-600 mb-5 leading-relaxed" }, description),
      React.createElement(
        "button",
        { className: "w-full rounded-xl border border-violet-200 bg-violet-50 py-2.5 text-sm font-semibold text-violet-700 hover:bg-violet-100 transition-colors" },
        "Join Space"
      )
    );
  };

  const displayItems = items.length > 0 ? items.slice(0, limit) : placeholders.slice(0, limit);

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
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...displayItems.map((item, i) => renderCard(item as Record<string, unknown>, i))
      )
    )
  );
};

const liveCommunity: SectionDefinition = {
  id: "live-005",
  category: "live",
  name: "Live Community",
  description: "Dynamic community spaces grid showing live space data with member counts.",
  tags: ["live", "community", "spaces", "dynamic", "social"],
  defaultProps: {
    heading: "Join Our Community",
    subheading: "Connect with like-minded creators and grow together.",
    limit: 3,
    dataSource: "community",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Sub-heading", type: "textarea" },
    { key: "limit", label: "Number of Spaces", type: "number" },
    { key: "dataSource", label: "Data Source", type: "select", options: [{ label: "Community", value: "community" }] },
  ],
  component: LiveCommunity,
};

/* ==========================================================================
   LIVE-006: Live Booking
   Event types list with booking buttons.
   ========================================================================== */

const LiveBooking: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Book a Session";
  const subheading =
    (props.subheading as string) || "Choose a time that works for you and let's connect.";
  const items = (props._liveData as Array<Record<string, unknown>>) || [];

  const placeholders = [
    { name: "Discovery Call", duration: 15, description: "A quick intro call to learn about your goals and see if we're a good fit." },
    { name: "Strategy Session", duration: 30, description: "Deep-dive into your business strategy with personalized recommendations." },
    { name: "Mentoring Hour", duration: 60, description: "One-on-one mentoring session covering any topic of your choice." },
  ];

  const durationIcons: Record<number, string> = {
    15: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    30: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    60: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  };

  const renderCard = (item: Record<string, unknown>, i: number) => {
    const name = (item.name as string) || placeholders[i % placeholders.length].name;
    const duration = (item.duration as number) || placeholders[i % placeholders.length].duration;
    const description = (item.description as string) || placeholders[i % placeholders.length].description;

    return React.createElement(
      "div",
      { key: i, className: "flex flex-col sm:flex-row items-start gap-6 rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-violet-500/30 transition-all" },
      React.createElement(
        "div",
        { className: "w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0 border border-violet-500/30" },
        React.createElement(
          "svg",
          { className: "w-6 h-6 text-violet-400", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
          React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" })
        )
      ),
      React.createElement(
        "div",
        { className: "flex-1 min-w-0" },
        React.createElement(
          "div",
          { className: "flex items-center gap-3 mb-2" },
          React.createElement("h3", { className: "text-lg font-semibold text-white" }, name),
          React.createElement(
            "span",
            { className: "text-xs font-medium text-slate-400 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5" },
            `${duration} min`
          )
        ),
        React.createElement("p", { className: "text-sm text-slate-400 leading-relaxed" }, description)
      ),
      React.createElement(
        "button",
        { className: "rounded-xl bg-violet-600 px-6 py-2.5 text-white text-sm font-semibold hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/25 whitespace-nowrap flex-shrink-0" },
        "Book Now"
      )
    );
  };

  const displayItems = items.length > 0 ? items : placeholders;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { backgroundImage: "radial-gradient(ellipse at top left, rgba(139,92,246,0.1) 0%, transparent 50%)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-3xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "flex flex-col gap-4" },
        ...displayItems.map((item, i) => renderCard(item as Record<string, unknown>, i))
      )
    )
  );
};

const liveBooking: SectionDefinition = {
  id: "live-006",
  category: "live",
  name: "Live Booking",
  description: "Dynamic booking section showing available event types with duration and booking buttons.",
  tags: ["live", "booking", "calendar", "scheduling", "dynamic"],
  defaultProps: {
    heading: "Book a Session",
    subheading: "Choose a time that works for you and let's connect.",
    dataSource: "booking",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Sub-heading", type: "textarea" },
    { key: "dataSource", label: "Data Source", type: "select", options: [{ label: "Booking", value: "booking" }] },
  ],
  component: LiveBooking,
};

/* ==========================================================================
   LIVE-007: Live YouTube
   Grid of YouTube video embeds from user-provided URLs.
   ========================================================================== */

const LiveYouTube: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Watch Our Videos";
  const subheading =
    (props.subheading as string) || "Catch up on our latest video content.";
  const videos = (props.videos as Array<{ url: string; title: string }>) || [
    { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Getting Started Guide" },
    { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Advanced Tips & Tricks" },
    { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Community Highlights" },
  ];

  /** Extract YouTube video ID from various URL formats */
  const getEmbedUrl = (url: string): string => {
    let videoId = "";
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) {
        videoId = parsed.pathname.slice(1);
      } else if (parsed.hostname.includes("youtube.com")) {
        videoId = parsed.searchParams.get("v") || parsed.pathname.split("/").pop() || "";
      }
    } catch {
      videoId = url;
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

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
        React.createElement("p", { className: "mt-4 text-lg text-slate-600 max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" },
        ...videos.map((video, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl overflow-hidden bg-slate-900 shadow-xl ring-1 ring-slate-900/10" },
            React.createElement(
              "div",
              { className: "relative aspect-video" },
              React.createElement("iframe", {
                src: getEmbedUrl(video.url),
                title: video.title || `Video ${i + 1}`,
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true,
                className: "absolute inset-0 w-full h-full",
                style: { border: "none" },
              })
            ),
            video.title &&
              React.createElement(
                "div",
                { className: "p-4" },
                React.createElement("h3", { className: "text-sm font-semibold text-white" }, video.title)
              )
          )
        )
      )
    )
  );
};

const liveYouTube: SectionDefinition = {
  id: "live-007",
  category: "live",
  name: "Live YouTube Videos",
  description: "Grid of embedded YouTube videos with titles.",
  tags: ["live", "youtube", "video", "embed", "media"],
  defaultProps: {
    heading: "Watch Our Videos",
    subheading: "Catch up on our latest video content.",
    videos: [
      { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Getting Started Guide" },
      { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Advanced Tips & Tricks" },
      { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Community Highlights" },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Sub-heading", type: "textarea" },
    {
      key: "videos",
      label: "Videos",
      type: "items",
      itemFields: [
        { key: "url", label: "YouTube URL", type: "url", required: true },
        { key: "title", label: "Video Title", type: "text" },
      ],
    },
  ],
  component: LiveYouTube,
};

/* ==========================================================================
   LIVE-008: Live Courses Featured
   Featured course spotlight - large hero-style card for a single course.
   ========================================================================== */

const LiveCoursesFeatured: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Featured Course";
  const subheading =
    (props.subheading as string) || "Our top recommended course to get you started.";
  const items = (props._liveData as Array<Record<string, unknown>>) || [];

  const placeholder = {
    title: "The Complete Creator Masterclass",
    description: "Everything you need to know to build, launch, and scale your online creator business. From content strategy to monetization, this comprehensive course covers it all.",
    modules: 12,
    enrollments: 4850,
    price: "$99",
  };

  const course = items.length > 0 ? items[0] : null;
  const title = course ? ((course.title as string) || (course.name as string) || placeholder.title) : placeholder.title;
  const description = course ? ((course.description as string) || (course.short_description as string) || placeholder.description) : placeholder.description;
  const modules = course ? ((course.module_count as number) || (course.modules_count as number) || placeholder.modules) : placeholder.modules;
  const enrollments = course ? ((course.enrollment_count as number) || placeholder.enrollments) : placeholder.enrollments;
  const price = course ? (Number(course.price) === 0 ? "Free" : `$${course.price}`) : placeholder.price;
  const image = course ? (course.image as string | undefined) : undefined;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { backgroundImage: "radial-gradient(ellipse at bottom left, rgba(139,92,246,0.15) 0%, transparent 60%)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-12" },
        React.createElement(
          "span",
          { className: "inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400 mb-6" },
          heading
        ),
        subheading && React.createElement("p", { className: "text-lg text-slate-400 max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-16" },
        React.createElement(
          "div",
          { className: "w-full lg:w-1/2" },
          React.createElement(
            "div",
            { className: "relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10" },
            image
              ? React.createElement("img", { src: image, alt: title, className: "w-full h-full object-cover" })
              : React.createElement(
                  "div",
                  { className: "w-full h-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center" },
                  React.createElement(
                    "svg",
                    { className: "w-20 h-20 text-white/10", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1", stroke: "currentColor" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" })
                  )
                )
          )
        ),
        React.createElement(
          "div",
          { className: "w-full lg:w-1/2" },
          React.createElement("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6" }, title),
          React.createElement("p", { className: "text-lg text-slate-400 leading-relaxed mb-8" }, description),
          React.createElement(
            "div",
            { className: "flex flex-wrap gap-4 mb-8" },
            React.createElement(
              "div",
              { className: "flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5" },
              React.createElement(
                "svg",
                { className: "w-5 h-5 text-violet-400", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" })
              ),
              React.createElement("span", { className: "text-sm text-slate-300" }, `${modules} modules`)
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5" },
              React.createElement(
                "svg",
                { className: "w-5 h-5 text-violet-400", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" })
              ),
              React.createElement("span", { className: "text-sm text-slate-300" }, `${enrollments.toLocaleString()} enrolled`)
            ),
            React.createElement(
              "div",
              { className: "flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5" },
              React.createElement("span", { className: "text-sm font-bold text-white" }, price)
            )
          ),
          React.createElement(
            "button",
            { className: "rounded-xl bg-violet-600 px-8 py-3.5 text-white font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/25" },
            "Enroll Now"
          )
        )
      )
    )
  );
};

const liveCoursesFeatured: SectionDefinition = {
  id: "live-008",
  category: "live",
  name: "Live Featured Course",
  description: "Featured course spotlight with a large hero card highlighting a single course.",
  tags: ["live", "courses", "featured", "spotlight", "dynamic", "hero"],
  defaultProps: {
    heading: "Featured Course",
    subheading: "Our top recommended course to get you started.",
    limit: 1,
    dataSource: "courses",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Sub-heading", type: "textarea" },
    { key: "dataSource", label: "Data Source", type: "select", options: [{ label: "Courses", value: "courses" }] },
  ],
  component: LiveCoursesFeatured,
};

/* ==========================================================================
   LIVE-009: Live Testimonials
   Modern testimonial section with star ratings, avatars, and quotes.
   ========================================================================== */

const LiveTestimonials: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "What People Are Saying";
  const subheading =
    (props.subheading as string) || "Hear from creators who have transformed their business with our platform.";

  const defaultTestimonials = [
    { name: "Sarah Chen", role: "Content Creator", quote: "This platform completely changed how I run my business. The course builder is incredibly intuitive and my students love the experience.", rating: 5 },
    { name: "James Rodriguez", role: "Online Coach", quote: "I went from struggling with tech to launching my first course in under a week. The community features are a game-changer.", rating: 5 },
    { name: "Emily Watson", role: "Digital Artist", quote: "Beautiful design, powerful features, and amazing support. Everything I need to sell my digital products in one place.", rating: 5 },
    { name: "Michael Park", role: "Fitness Instructor", quote: "My members love the community spaces. It keeps them engaged between sessions and the booking system saves me hours every week.", rating: 5 },
    { name: "Lisa Nguyen", role: "Business Coach", quote: "The email marketing tools alone are worth it. I have seen a 3x increase in my course sales since switching.", rating: 5 },
    { name: "David Kim", role: "YouTuber", quote: "Finally a platform that understands creators. The funnel builder and analytics help me understand exactly what is working.", rating: 5 },
  ];

  const testimonials = (props.testimonials as typeof defaultTestimonials) || defaultTestimonials;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-24 sm:py-32 bg-slate-950" },
    React.createElement("div", {
      className: "absolute inset-0",
      style: { backgroundImage: "radial-gradient(ellipse at center top, rgba(139,92,246,0.08) 0%, transparent 50%)" },
    }),
    React.createElement(
      "div",
      { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white" }, heading),
        React.createElement("p", { className: "mt-4 text-lg text-slate-400 max-w-2xl mx-auto" }, subheading)
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
        ...testimonials.map((t, i) =>
          React.createElement(
            "div",
            { key: i, className: "rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-violet-500/20 transition-all" },
            React.createElement(Stars, { count: (t as Record<string, unknown>).rating as number || 5 }),
            React.createElement(
              "p",
              { className: "mt-4 text-slate-300 leading-relaxed text-sm" },
              `\u201C${(t as Record<string, unknown>).quote}\u201D`
            ),
            React.createElement(
              "div",
              { className: "mt-6 flex items-center gap-3" },
              React.createElement(AvatarPlaceholder, { name: (t as Record<string, unknown>).name as string }),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "text-sm font-semibold text-white" }, (t as Record<string, unknown>).name),
                React.createElement("p", { className: "text-xs text-slate-500" }, (t as Record<string, unknown>).role)
              )
            )
          )
        )
      )
    )
  );
};

const liveTestimonials: SectionDefinition = {
  id: "live-009",
  category: "live",
  name: "Live Testimonials",
  description: "Modern testimonial grid with star ratings, avatar placeholders, and quotes.",
  tags: ["live", "testimonials", "reviews", "social-proof", "quotes"],
  defaultProps: {
    heading: "What People Are Saying",
    subheading: "Hear from creators who have transformed their business with our platform.",
    testimonials: [
      { name: "Sarah Chen", role: "Content Creator", quote: "This platform completely changed how I run my business. The course builder is incredibly intuitive and my students love the experience.", rating: 5 },
      { name: "James Rodriguez", role: "Online Coach", quote: "I went from struggling with tech to launching my first course in under a week. The community features are a game-changer.", rating: 5 },
      { name: "Emily Watson", role: "Digital Artist", quote: "Beautiful design, powerful features, and amazing support. Everything I need to sell my digital products in one place.", rating: 5 },
      { name: "Michael Park", role: "Fitness Instructor", quote: "My members love the community spaces. It keeps them engaged between sessions and the booking system saves me hours every week.", rating: 5 },
      { name: "Lisa Nguyen", role: "Business Coach", quote: "The email marketing tools alone are worth it. I have seen a 3x increase in my course sales since switching.", rating: 5 },
      { name: "David Kim", role: "YouTuber", quote: "Finally a platform that understands creators. The funnel builder and analytics help me understand exactly what is working.", rating: 5 },
    ],
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Sub-heading", type: "textarea" },
    {
      key: "testimonials",
      label: "Testimonials",
      type: "items",
      itemFields: [
        { key: "name", label: "Name", type: "text" as const, required: true },
        { key: "role", label: "Role", type: "text" as const },
        { key: "quote", label: "Quote", type: "textarea" as const, required: true },
        { key: "rating", label: "Rating (1-5)", type: "number" as const },
      ],
    },
  ],
  component: LiveTestimonials,
};

/* ==========================================================================
   LIVE-010: Live Social Links
   Row of social media buttons with SVG icons.
   ========================================================================== */

const LiveSocialLinks: React.FC<Record<string, unknown>> = (props) => {
  const heading = (props.heading as string) || "Follow Us";
  const youtube = (props.youtube as string) || "";
  const twitter = (props.twitter as string) || "";
  const instagram = (props.instagram as string) || "";
  const tiktok = (props.tiktok as string) || "";
  const linkedin = (props.linkedin as string) || "";
  const github = (props.github as string) || "";

  const socials: Array<{ key: string; label: string; url: string; icon: string; hoverColor: string }> = [
    {
      key: "youtube",
      label: "YouTube",
      url: youtube,
      icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
      hoverColor: "hover:bg-red-600 hover:border-red-600",
    },
    {
      key: "twitter",
      label: "X (Twitter)",
      url: twitter,
      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
      hoverColor: "hover:bg-slate-700 hover:border-slate-700",
    },
    {
      key: "instagram",
      label: "Instagram",
      url: instagram,
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
      hoverColor: "hover:bg-pink-600 hover:border-pink-600",
    },
    {
      key: "tiktok",
      label: "TikTok",
      url: tiktok,
      icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
      hoverColor: "hover:bg-slate-800 hover:border-slate-800",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      url: linkedin,
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      hoverColor: "hover:bg-blue-700 hover:border-blue-700",
    },
    {
      key: "github",
      label: "GitHub",
      url: github,
      icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
      hoverColor: "hover:bg-slate-700 hover:border-slate-700",
    },
  ];

  const activeSocials = socials.filter((s) => s.url);
  const displaySocials = activeSocials.length > 0 ? activeSocials : socials;

  return React.createElement(
    "section",
    { className: "relative overflow-hidden py-16 sm:py-20 bg-white" },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8 text-center" },
      heading && React.createElement("h2", { className: "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8" }, heading),
      React.createElement(
        "div",
        { className: "flex flex-wrap items-center justify-center gap-4" },
        ...displaySocials.map((social) =>
          React.createElement(
            "a",
            {
              key: social.key,
              href: social.url || "#",
              target: "_blank",
              rel: "noopener noreferrer",
              className: `inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all ${social.hoverColor} hover:text-white shadow-sm hover:shadow-lg`,
              title: social.label,
            },
            React.createElement(
              "svg",
              { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" },
              React.createElement("path", { d: social.icon })
            ),
            social.label
          )
        )
      )
    )
  );
};

const liveSocialLinks: SectionDefinition = {
  id: "live-010",
  category: "live",
  name: "Live Social Links",
  description: "Row of social media buttons with platform icons for YouTube, X, Instagram, TikTok, LinkedIn, and GitHub.",
  tags: ["live", "social", "links", "youtube", "twitter", "instagram", "tiktok", "linkedin", "github"],
  defaultProps: {
    heading: "Follow Us",
    youtube: "https://youtube.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "youtube", label: "YouTube URL", type: "url" },
    { key: "twitter", label: "X (Twitter) URL", type: "url" },
    { key: "instagram", label: "Instagram URL", type: "url" },
    { key: "tiktok", label: "TikTok URL", type: "url" },
    { key: "linkedin", label: "LinkedIn URL", type: "url" },
    { key: "github", label: "GitHub URL", type: "url" },
  ],
  component: LiveSocialLinks,
};

/* ==========================================================================
   Register all live sections
   ========================================================================== */

registerSections([
  liveCourses,
  liveProducts,
  livePosts,
  liveNewsletter,
  liveCommunity,
  liveBooking,
  liveYouTube,
  liveCoursesFeatured,
  liveTestimonials,
  liveSocialLinks,
]);
