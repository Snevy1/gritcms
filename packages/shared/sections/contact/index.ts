// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  contact-001  Split Form Info                                      */
/* ------------------------------------------------------------------ */
const contact001: SectionDefinition = {
  id: "contact-001",
  category: "contact",
  name: "Split Form Info",
  description: "Contact form on the left with contact information on the right",
  tags: ["contact", "form", "split", "info"],
  defaultProps: {
    heading: "Get in Touch",
    subtitle: "We'd love to hear from you. Fill out the form and we'll respond within 24 hours.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    messageLabel: "Message",
    buttonText: "Send Message",
    phone: "+1 (555) 123-4567",
    email: "hello@company.com",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94107",
    bgColor: "white",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "phone", label: "Phone", type: "text" },
    { key: "email", label: "Email", type: "text" },
    { key: "address", label: "Address", type: "textarea" },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Get in Touch";
    const subtitle = (props.subtitle as string) || "";
    const nameLabel = (props.nameLabel as string) || "Full Name";
    const emailLabel = (props.emailLabel as string) || "Email Address";
    const messageLabel = (props.messageLabel as string) || "Message";
    const buttonText = (props.buttonText as string) || "Send Message";
    const phone = (props.phone as string) || "";
    const email = (props.email as string) || "";
    const address = (props.address as string) || "";
    const bgColor = (props.bgColor as string) || "white";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-2 gap-16" },
          React.createElement(
            "div",
            null,
            React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" }, heading),
            subtitle && React.createElement("p", { className: "text-lg text-slate-600 mb-10" }, subtitle),
            React.createElement(
              "form",
              { className: "space-y-6", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
              React.createElement(
                "div",
                null,
                React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, nameLabel),
                React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "John Doe" })
              ),
              React.createElement(
                "div",
                null,
                React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, emailLabel),
                React.createElement("input", { type: "email", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "john@example.com" })
              ),
              React.createElement(
                "div",
                null,
                React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, messageLabel),
                React.createElement("textarea", { rows: 5, className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Tell us about your project..." })
              ),
              React.createElement("button", { type: "submit", className: "w-full rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
            )
          ),
          React.createElement(
            "div",
            { className: "flex flex-col justify-center space-y-8 lg:pl-8" },
            phone && React.createElement(
              "div",
              { className: "flex items-start gap-4" },
              React.createElement(
                "div",
                { className: "flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center" },
                React.createElement("svg", { className: "w-6 h-6 text-violet-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" })
                )
              ),
              React.createElement(
                "div",
                null,
                React.createElement("h3", { className: "font-semibold text-slate-900" }, "Phone"),
                React.createElement("p", { className: "text-slate-600 mt-1" }, phone)
              )
            ),
            email && React.createElement(
              "div",
              { className: "flex items-start gap-4" },
              React.createElement(
                "div",
                { className: "flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center" },
                React.createElement("svg", { className: "w-6 h-6 text-violet-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" })
                )
              ),
              React.createElement(
                "div",
                null,
                React.createElement("h3", { className: "font-semibold text-slate-900" }, "Email"),
                React.createElement("p", { className: "text-slate-600 mt-1" }, email)
              )
            ),
            address && React.createElement(
              "div",
              { className: "flex items-start gap-4" },
              React.createElement(
                "div",
                { className: "flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center" },
                React.createElement("svg", { className: "w-6 h-6 text-violet-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" }),
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" })
                )
              ),
              React.createElement(
                "div",
                null,
                React.createElement("h3", { className: "font-semibold text-slate-900" }, "Address"),
                React.createElement("p", { className: "text-slate-600 mt-1" }, address)
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-002  Full Form                                            */
/* ------------------------------------------------------------------ */
const contact002: SectionDefinition = {
  id: "contact-002",
  category: "contact",
  name: "Full Form",
  description: "Full-width contact form with heading and subtitle",
  tags: ["contact", "form", "full-width"],
  defaultProps: {
    heading: "Contact Us",
    subtitle: "Have a question or a project in mind? Drop us a message and we'll get back to you as soon as possible.",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    subjectLabel: "Subject",
    messageLabel: "Your Message",
    buttonText: "Submit",
    bgColor: "white",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "subjectLabel", label: "Subject Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Contact Us";
    const subtitle = (props.subtitle as string) || "";
    const nameLabel = (props.nameLabel as string) || "Your Name";
    const emailLabel = (props.emailLabel as string) || "Your Email";
    const subjectLabel = (props.subjectLabel as string) || "Subject";
    const messageLabel = (props.messageLabel as string) || "Your Message";
    const buttonText = (props.buttonText as string) || "Submit";
    const bgColor = (props.bgColor as string) || "white";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-3xl px-6 lg:px-8" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 text-center mb-4" }, heading),
        subtitle && React.createElement("p", { className: "text-lg text-slate-600 text-center mb-16" }, subtitle),
        React.createElement(
          "form",
          { className: "space-y-6", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
          React.createElement(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-2 gap-6" },
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, nameLabel),
              React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "John Doe" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, emailLabel),
              React.createElement("input", { type: "email", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "john@example.com" })
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, subjectLabel),
            React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "How can we help?" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, messageLabel),
            React.createElement("textarea", { rows: 6, className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Tell us about your project or question..." })
          ),
          React.createElement("button", { type: "submit", className: "w-full rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-003  With Map                                             */
/* ------------------------------------------------------------------ */
const contact003: SectionDefinition = {
  id: "contact-003",
  category: "contact",
  name: "With Map",
  description: "Contact form alongside a map placeholder",
  tags: ["contact", "form", "map", "location"],
  defaultProps: {
    heading: "Find Us",
    subtitle: "Visit our office or send us a message.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    buttonText: "Send",
    address: "123 Business Ave, San Francisco, CA 94107",
    bgColor: "white",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "address", label: "Address", type: "textarea" },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Find Us";
    const subtitle = (props.subtitle as string) || "";
    const nameLabel = (props.nameLabel as string) || "Name";
    const emailLabel = (props.emailLabel as string) || "Email";
    const messageLabel = (props.messageLabel as string) || "Message";
    const buttonText = (props.buttonText as string) || "Send";
    const address = (props.address as string) || "";
    const bgColor = (props.bgColor as string) || "white";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 text-center mb-4" }, heading),
        subtitle && React.createElement("p", { className: "text-lg text-slate-600 text-center mb-16" }, subtitle),
        React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-2 gap-12" },
          React.createElement(
            "form",
            { className: "space-y-6", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, nameLabel),
              React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "Your name" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, emailLabel),
              React.createElement("input", { type: "email", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "you@email.com" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, messageLabel),
              React.createElement("textarea", { rows: 5, className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Your message..." })
            ),
            React.createElement("button", { type: "submit", className: "rounded-xl bg-violet-600 px-8 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
          ),
          React.createElement(
            "div",
            { className: "flex flex-col" },
            React.createElement(
              "div",
              { className: "flex-1 bg-slate-100 rounded-2xl flex items-center justify-center min-h-[300px] border border-slate-200" },
              React.createElement(
                "div",
                { className: "text-center text-slate-400" },
                React.createElement("svg", { className: "w-12 h-12 mx-auto mb-3 text-slate-300", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" }),
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" })
                ),
                React.createElement("p", { className: "text-sm font-medium" }, "Map Placeholder"),
                address && React.createElement("p", { className: "text-xs mt-1" }, address)
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-004  Cards Only                                           */
/* ------------------------------------------------------------------ */
const contact004: SectionDefinition = {
  id: "contact-004",
  category: "contact",
  name: "Cards Only",
  description: "Contact information displayed in cards without a form",
  tags: ["contact", "cards", "info", "no-form"],
  defaultProps: {
    heading: "Contact Information",
    subtitle: "Reach out to us through any of the channels below.",
    phone: "+1 (555) 123-4567",
    email: "support@company.com",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94107",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    bgColor: "gray",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "phone", label: "Phone", type: "text" },
    { key: "email", label: "Email", type: "text" },
    { key: "address", label: "Address", type: "textarea" },
    { key: "hours", label: "Business Hours", type: "text" },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Contact Information";
    const subtitle = (props.subtitle as string) || "";
    const phone = (props.phone as string) || "";
    const email = (props.email as string) || "";
    const address = (props.address as string) || "";
    const hours = (props.hours as string) || "";
    const bgColor = (props.bgColor as string) || "gray";

    const cards = [
      { icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z", title: "Phone", value: phone },
      { icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75", title: "Email", value: email },
      { icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z", title: "Address", value: address },
      { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", title: "Business Hours", value: hours },
    ].filter((c) => c.value);

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 text-center mb-4" }, heading),
        subtitle && React.createElement("p", { className: "text-lg text-slate-600 text-center mb-16" }, subtitle),
        React.createElement(
          "div",
          { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
          ...cards.map((card, i) =>
            React.createElement(
              "div",
              { key: i, className: "rounded-2xl bg-white border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow" },
              React.createElement(
                "div",
                { className: "w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-5" },
                React.createElement("svg", { className: "w-7 h-7 text-violet-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: card.icon })
                )
              ),
              React.createElement("h3", { className: "font-semibold text-slate-900 mb-2" }, card.title),
              React.createElement("p", { className: "text-slate-600 text-sm" }, card.value)
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-005  Minimal                                              */
/* ------------------------------------------------------------------ */
const contact005: SectionDefinition = {
  id: "contact-005",
  category: "contact",
  name: "Minimal",
  description: "Minimal contact section with email and phone",
  tags: ["contact", "minimal", "simple"],
  defaultProps: {
    heading: "Let's Talk",
    subtitle: "Ready to start your next project? Get in touch.",
    email: "hello@company.com",
    phone: "+1 (555) 123-4567",
    buttonText: "Send us an email",
    bgColor: "white",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "email", label: "Email", type: "text" },
    { key: "phone", label: "Phone", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Let's Talk";
    const subtitle = (props.subtitle as string) || "";
    const email = (props.email as string) || "";
    const phone = (props.phone as string) || "";
    const buttonText = (props.buttonText as string) || "Send us an email";
    const bgColor = (props.bgColor as string) || "white";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-2xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" }, heading),
        subtitle && React.createElement("p", { className: "text-lg text-slate-600 mb-10" }, subtitle),
        React.createElement(
          "div",
          { className: "flex flex-col sm:flex-row items-center justify-center gap-8 mb-10" },
          email && React.createElement(
            "a",
            { href: `mailto:${email}`, className: "text-violet-600 hover:text-violet-700 font-medium flex items-center gap-2 transition-colors" },
            React.createElement("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
              React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" })
            ),
            email
          ),
          phone && React.createElement(
            "a",
            { href: `tel:${phone}`, className: "text-violet-600 hover:text-violet-700 font-medium flex items-center gap-2 transition-colors" },
            React.createElement("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
              React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" })
            ),
            phone
          )
        ),
        React.createElement("button", { className: "rounded-xl bg-violet-600 px-8 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-006  Dark                                                 */
/* ------------------------------------------------------------------ */
const contact006: SectionDefinition = {
  id: "contact-006",
  category: "contact",
  name: "Dark",
  description: "Dark-themed contact section with form",
  tags: ["contact", "dark", "form"],
  defaultProps: {
    heading: "Get in Touch",
    subtitle: "We're here to help and answer any question you might have.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    buttonText: "Send Message",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Get in Touch";
    const subtitle = (props.subtitle as string) || "";
    const nameLabel = (props.nameLabel as string) || "Name";
    const emailLabel = (props.emailLabel as string) || "Email";
    const messageLabel = (props.messageLabel as string) || "Message";
    const buttonText = (props.buttonText as string) || "Send Message";

    return React.createElement(
      "section",
      { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900" },
      React.createElement("div", {
        className: "absolute inset-0",
        style: { backgroundImage: "radial-gradient(ellipse at top, rgba(139,92,246,0.1) 0%, transparent 50%)" },
      }),
      React.createElement(
        "div",
        { className: "relative mx-auto max-w-3xl px-6 lg:px-8" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white text-center mb-4" }, heading),
        subtitle && React.createElement("p", { className: "text-lg text-slate-400 text-center mb-16" }, subtitle),
        React.createElement(
          "form",
          { className: "space-y-6", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
          React.createElement(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-2 gap-6" },
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-300 mb-2" }, nameLabel),
              React.createElement("input", { type: "text", className: "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "John Doe" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-300 mb-2" }, emailLabel),
              React.createElement("input", { type: "email", className: "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "john@example.com" })
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "block text-sm font-medium text-slate-300 mb-2" }, messageLabel),
            React.createElement("textarea", { rows: 6, className: "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Your message..." })
          ),
          React.createElement("button", { type: "submit", className: "w-full rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-007  Floating                                             */
/* ------------------------------------------------------------------ */
const contact007: SectionDefinition = {
  id: "contact-007",
  category: "contact",
  name: "Floating",
  description: "Floating card form on a gradient background",
  tags: ["contact", "floating", "card", "gradient"],
  defaultProps: {
    heading: "Send Us a Message",
    subtitle: "Fill out the form below and we'll get back to you shortly.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    messageLabel: "How can we help?",
    buttonText: "Submit",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Send Us a Message";
    const subtitle = (props.subtitle as string) || "";
    const nameLabel = (props.nameLabel as string) || "Full Name";
    const emailLabel = (props.emailLabel as string) || "Email Address";
    const messageLabel = (props.messageLabel as string) || "How can we help?";
    const buttonText = (props.buttonText as string) || "Submit";

    return React.createElement(
      "section",
      { className: "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-700" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "rounded-2xl bg-white shadow-2xl p-8 md:p-12" },
          React.createElement("h2", { className: "text-2xl md:text-3xl font-bold tracking-tight text-slate-900 text-center mb-3" }, heading),
          subtitle && React.createElement("p", { className: "text-slate-600 text-center mb-10" }, subtitle),
          React.createElement(
            "form",
            { className: "space-y-5", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, nameLabel),
              React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "Jane Smith" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, emailLabel),
              React.createElement("input", { type: "email", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "jane@example.com" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, messageLabel),
              React.createElement("textarea", { rows: 5, className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Tell us about your project..." })
            ),
            React.createElement("button", { type: "submit", className: "w-full rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-008  With FAQ                                             */
/* ------------------------------------------------------------------ */
const contact008: SectionDefinition = {
  id: "contact-008",
  category: "contact",
  name: "With FAQ",
  description: "Contact form with frequently asked questions section",
  tags: ["contact", "faq", "form", "questions"],
  defaultProps: {
    heading: "Contact & FAQ",
    subtitle: "Check our FAQ or send us a message.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    buttonText: "Send",
    faqs: [
      { question: "What are your business hours?", answer: "We're open Monday through Friday, 9 AM to 6 PM EST." },
      { question: "How quickly do you respond?", answer: "We typically respond within 24 hours on business days." },
      { question: "Do you offer free consultations?", answer: "Yes! We offer a free 30-minute introductory consultation." },
    ],
    bgColor: "white",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "faqs", label: "FAQ Items", type: "items", itemFields: [
      { key: "question", label: "Question", type: "text" },
      { key: "answer", label: "Answer", type: "textarea" },
    ] },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Contact & FAQ";
    const subtitle = (props.subtitle as string) || "";
    const nameLabel = (props.nameLabel as string) || "Name";
    const emailLabel = (props.emailLabel as string) || "Email";
    const messageLabel = (props.messageLabel as string) || "Message";
    const buttonText = (props.buttonText as string) || "Send";
    const faqs = (props.faqs as Array<{ question: string; answer: string }>) || [];
    const bgColor = (props.bgColor as string) || "white";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 text-center mb-4" }, heading),
        subtitle && React.createElement("p", { className: "text-lg text-slate-600 text-center mb-16" }, subtitle),
        React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-2 gap-16" },
          React.createElement(
            "form",
            { className: "space-y-6", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
            React.createElement("h3", { className: "text-xl font-semibold text-slate-900 mb-2" }, "Send a Message"),
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, nameLabel),
              React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "Your name" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, emailLabel),
              React.createElement("input", { type: "email", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "you@email.com" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, messageLabel),
              React.createElement("textarea", { rows: 5, className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Your message..." })
            ),
            React.createElement("button", { type: "submit", className: "rounded-xl bg-violet-600 px-8 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
          ),
          React.createElement(
            "div",
            null,
            React.createElement("h3", { className: "text-xl font-semibold text-slate-900 mb-8" }, "Frequently Asked Questions"),
            React.createElement(
              "div",
              { className: "space-y-4" },
              ...faqs.map((faq, i) =>
                React.createElement(
                  "details",
                  { key: i, className: "group rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden" },
                  React.createElement(
                    "summary",
                    { className: "flex cursor-pointer items-center justify-between p-5 text-left font-medium text-slate-900 list-none" },
                    faq.question,
                    React.createElement("span", { className: "ml-4 text-slate-400 group-open:rotate-45 transition-transform text-lg" }, "+")
                  ),
                  React.createElement("div", { className: "px-5 pb-5 text-slate-600 text-sm leading-relaxed" }, faq.answer)
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
/*  contact-009  Office Locations                                     */
/* ------------------------------------------------------------------ */
const contact009: SectionDefinition = {
  id: "contact-009",
  category: "contact",
  name: "Office Locations",
  description: "Multiple office location cards with contact details",
  tags: ["contact", "offices", "locations", "cards"],
  defaultProps: {
    heading: "Our Offices",
    subtitle: "Visit us at one of our locations around the world.",
    offices: [
      { city: "San Francisco", address: "123 Market St, Suite 400, SF, CA 94107", phone: "+1 (555) 100-2000", email: "sf@company.com" },
      { city: "New York", address: "456 Broadway, Floor 12, New York, NY 10013", phone: "+1 (555) 200-3000", email: "nyc@company.com" },
      { city: "London", address: "78 King's Road, Chelsea, London SW3 4NZ", phone: "+44 20 7123 4567", email: "london@company.com" },
    ],
    bgColor: "white",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "offices", label: "Offices", type: "items", itemFields: [
      { key: "city", label: "City", type: "text" },
      { key: "address", label: "Address", type: "textarea" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "email", label: "Email", type: "text" },
    ] },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Our Offices";
    const subtitle = (props.subtitle as string) || "";
    const offices = (props.offices as Array<{ city: string; address: string; phone: string; email: string }>) || [];
    const bgColor = (props.bgColor as string) || "white";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 text-center mb-4" }, heading),
        subtitle && React.createElement("p", { className: "text-lg text-slate-600 text-center mb-16" }, subtitle),
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
          ...offices.map((office, i) =>
            React.createElement(
              "div",
              { key: i, className: "rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow" },
              React.createElement(
                "div",
                { className: "w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6" },
                React.createElement("svg", { className: "w-6 h-6 text-violet-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" }),
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" })
                )
              ),
              React.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-3" }, office.city),
              React.createElement("p", { className: "text-slate-600 text-sm mb-5" }, office.address),
              React.createElement(
                "div",
                { className: "space-y-2 text-sm" },
                React.createElement("p", { className: "text-slate-500" }, "Tel: ", React.createElement("span", { className: "text-violet-600 font-medium" }, office.phone)),
                React.createElement("p", { className: "text-slate-500" }, "Email: ", React.createElement("span", { className: "text-violet-600 font-medium" }, office.email))
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-010  Two Column                                           */
/* ------------------------------------------------------------------ */
const contact010: SectionDefinition = {
  id: "contact-010",
  category: "contact",
  name: "Two Column",
  description: "Two-column contact layout with info and form",
  tags: ["contact", "two-column", "form", "info"],
  defaultProps: {
    heading: "Contact Us",
    subtitle: "We'd love to hear from you.",
    description: "Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    messageLabel: "Message",
    buttonText: "Send",
    bgColor: "gray",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "phoneLabel", label: "Phone Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Contact Us";
    const subtitle = (props.subtitle as string) || "";
    const description = (props.description as string) || "";
    const nameLabel = (props.nameLabel as string) || "Name";
    const emailLabel = (props.emailLabel as string) || "Email";
    const phoneLabel = (props.phoneLabel as string) || "Phone";
    const messageLabel = (props.messageLabel as string) || "Message";
    const buttonText = (props.buttonText as string) || "Send";
    const bgColor = (props.bgColor as string) || "gray";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-2 gap-16" },
          React.createElement(
            "div",
            { className: "flex flex-col justify-center" },
            subtitle && React.createElement("span", { className: "text-sm font-semibold text-violet-600 tracking-wide uppercase mb-3" }, subtitle),
            React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6" }, heading),
            description && React.createElement("p", { className: "text-lg text-slate-600 leading-relaxed" }, description)
          ),
          React.createElement(
            "div",
            { className: "rounded-2xl bg-white border border-slate-200 p-8 shadow-sm" },
            React.createElement(
              "form",
              { className: "space-y-5", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
              React.createElement(
                "div",
                { className: "grid grid-cols-1 sm:grid-cols-2 gap-5" },
                React.createElement(
                  "div",
                  null,
                  React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, nameLabel),
                  React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "John Doe" })
                ),
                React.createElement(
                  "div",
                  null,
                  React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, emailLabel),
                  React.createElement("input", { type: "email", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "john@email.com" })
                )
              ),
              React.createElement(
                "div",
                null,
                React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, phoneLabel),
                React.createElement("input", { type: "tel", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "+1 (555) 000-0000" })
              ),
              React.createElement(
                "div",
                null,
                React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, messageLabel),
                React.createElement("textarea", { rows: 5, className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Tell us how we can help..." })
              ),
              React.createElement("button", { type: "submit", className: "w-full rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-011  Centered                                             */
/* ------------------------------------------------------------------ */
const contact011: SectionDefinition = {
  id: "contact-011",
  category: "contact",
  name: "Centered",
  description: "Centered narrow contact form",
  tags: ["contact", "centered", "narrow", "form"],
  defaultProps: {
    heading: "Drop Us a Line",
    subtitle: "Have a question? We're happy to help.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    buttonText: "Send Message",
    bgColor: "white",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Drop Us a Line";
    const subtitle = (props.subtitle as string) || "";
    const nameLabel = (props.nameLabel as string) || "Name";
    const emailLabel = (props.emailLabel as string) || "Email";
    const messageLabel = (props.messageLabel as string) || "Message";
    const buttonText = (props.buttonText as string) || "Send Message";
    const bgColor = (props.bgColor as string) || "white";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-lg px-6" },
        React.createElement("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-center mb-3" }, heading),
        subtitle && React.createElement("p", { className: "text-slate-600 text-center mb-12" }, subtitle),
        React.createElement(
          "form",
          { className: "space-y-5", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, nameLabel),
            React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "Your name" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, emailLabel),
            React.createElement("input", { type: "email", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "you@email.com" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, messageLabel),
            React.createElement("textarea", { rows: 6, className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Write your message..." })
          ),
          React.createElement("button", { type: "submit", className: "w-full rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-012  With Image                                           */
/* ------------------------------------------------------------------ */
const contact012: SectionDefinition = {
  id: "contact-012",
  category: "contact",
  name: "With Image",
  description: "Contact form next to an image",
  tags: ["contact", "image", "form", "split"],
  defaultProps: {
    heading: "Reach Out to Us",
    subtitle: "We're excited to hear about your project.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    buttonText: "Get in Touch",
    bgColor: "white",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "image", label: "Image URL", type: "image" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Reach Out to Us";
    const subtitle = (props.subtitle as string) || "";
    const image = (props.image as string) || "";
    const nameLabel = (props.nameLabel as string) || "Name";
    const emailLabel = (props.emailLabel as string) || "Email";
    const messageLabel = (props.messageLabel as string) || "Message";
    const buttonText = (props.buttonText as string) || "Get in Touch";
    const bgColor = (props.bgColor as string) || "white";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" },
          React.createElement(
            "div",
            { className: "order-2 lg:order-1" },
            image
              ? React.createElement("img", { src: image, alt: "Contact", className: "w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl" })
              : React.createElement(
                  "div",
                  { className: "w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center" },
                  React.createElement("p", { className: "text-slate-400" }, "Image Placeholder")
                )
          ),
          React.createElement(
            "div",
            { className: "order-1 lg:order-2" },
            React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4" }, heading),
            subtitle && React.createElement("p", { className: "text-lg text-slate-600 mb-10" }, subtitle),
            React.createElement(
              "form",
              { className: "space-y-5", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
              React.createElement(
                "div",
                null,
                React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, nameLabel),
                React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "Your name" })
              ),
              React.createElement(
                "div",
                null,
                React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, emailLabel),
                React.createElement("input", { type: "email", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "you@email.com" })
              ),
              React.createElement(
                "div",
                null,
                React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, messageLabel),
                React.createElement("textarea", { rows: 5, className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Your message..." })
              ),
              React.createElement("button", { type: "submit", className: "rounded-xl bg-violet-600 px-8 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-013  Social Focus                                         */
/* ------------------------------------------------------------------ */
const contact013: SectionDefinition = {
  id: "contact-013",
  category: "contact",
  name: "Social Focus",
  description: "Contact section with emphasis on social media links",
  tags: ["contact", "social", "links", "media"],
  defaultProps: {
    heading: "Connect With Us",
    subtitle: "Follow us on social media or send us a direct message.",
    email: "hello@company.com",
    phone: "+1 (555) 123-4567",
    socials: [
      { platform: "Twitter", url: "https://twitter.com/company" },
      { platform: "LinkedIn", url: "https://linkedin.com/company/company" },
      { platform: "Instagram", url: "https://instagram.com/company" },
      { platform: "Facebook", url: "https://facebook.com/company" },
    ],
    bgColor: "white",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "email", label: "Email", type: "text" },
    { key: "phone", label: "Phone", type: "text" },
    { key: "socials", label: "Social Links", type: "items", itemFields: [
      { key: "platform", label: "Platform", type: "text" },
      { key: "url", label: "URL", type: "url" },
    ] },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Connect With Us";
    const subtitle = (props.subtitle as string) || "";
    const email = (props.email as string) || "";
    const phone = (props.phone as string) || "";
    const socials = (props.socials as Array<{ platform: string; url: string }>) || [];
    const bgColor = (props.bgColor as string) || "white";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-4xl px-6 lg:px-8 text-center" },
        React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4" }, heading),
        subtitle && React.createElement("p", { className: "text-lg text-slate-600 mb-12" }, subtitle),
        React.createElement(
          "div",
          { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12" },
          ...socials.map((social, i) =>
            React.createElement(
              "a",
              { key: i, href: social.url, target: "_blank", rel: "noopener noreferrer", className: "flex flex-col items-center gap-3 rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-all group" },
              React.createElement(
                "div",
                { className: "w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition" },
                React.createElement("svg", { className: "w-6 h-6 text-slate-500 group-hover:text-violet-600 transition", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.914 0a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.343 8.07" })
                )
              ),
              React.createElement("span", { className: "text-sm font-medium text-slate-700 group-hover:text-violet-600 transition" }, social.platform)
            )
          )
        ),
        React.createElement(
          "div",
          { className: "flex flex-col sm:flex-row items-center justify-center gap-8" },
          email && React.createElement(
            "a",
            { href: `mailto:${email}`, className: "flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors font-medium" },
            React.createElement("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
              React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" })
            ),
            email
          ),
          phone && React.createElement(
            "a",
            { href: `tel:${phone}`, className: "flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors font-medium" },
            React.createElement("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
              React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" })
            ),
            phone
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-014  Inline                                               */
/* ------------------------------------------------------------------ */
const contact014: SectionDefinition = {
  id: "contact-014",
  category: "contact",
  name: "Inline",
  description: "Compact inline contact bar",
  tags: ["contact", "inline", "compact", "bar"],
  defaultProps: {
    heading: "Have questions?",
    buttonText: "Contact Us",
    phone: "+1 (555) 123-4567",
    email: "hello@company.com",
    bgColor: "indigo",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "phone", label: "Phone", type: "text" },
    { key: "email", label: "Email", type: "text" },
    { key: "bgColor", label: "Background", type: "select", options: [{ label: "Indigo", value: "indigo" }, { label: "Gray", value: "gray" }, { label: "White", value: "white" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Have questions?";
    const buttonText = (props.buttonText as string) || "Contact Us";
    const phone = (props.phone as string) || "";
    const email = (props.email as string) || "";
    const bgColor = (props.bgColor as string) || "indigo";

    const bgClass = bgColor === "indigo" ? "bg-violet-600" : bgColor === "gray" ? "bg-slate-950" : "bg-white";
    const textClass = bgColor === "white" ? "text-slate-900" : "text-white";
    const subTextClass = bgColor === "white" ? "text-slate-600" : "text-white/80";
    const btnClass = bgColor === "white" ? "bg-violet-600 text-white hover:bg-violet-700" : "bg-white text-violet-600 hover:bg-slate-50";

    return React.createElement(
      "section",
      { className: `py-6 ${bgClass}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "flex flex-col sm:flex-row items-center justify-between gap-4" },
          React.createElement(
            "div",
            { className: "flex items-center gap-6" },
            React.createElement("span", { className: `font-semibold ${textClass}` }, heading),
            email && React.createElement("span", { className: `text-sm ${subTextClass} hidden md:inline` }, email),
            phone && React.createElement("span", { className: `text-sm ${subTextClass} hidden md:inline` }, phone)
          ),
          React.createElement("button", { className: `py-2.5 px-6 rounded-xl font-semibold text-sm transition ${btnClass}` }, buttonText)
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  contact-015  With Testimonial                                     */
/* ------------------------------------------------------------------ */
const contact015: SectionDefinition = {
  id: "contact-015",
  category: "contact",
  name: "With Testimonial",
  description: "Contact form alongside a customer testimonial",
  tags: ["contact", "testimonial", "form", "social-proof"],
  defaultProps: {
    heading: "Get Started Today",
    subtitle: "Fill out the form and join hundreds of satisfied customers.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "How can we help?",
    buttonText: "Send Message",
    testimonialQuote: "Working with this team has been a game-changer for our business. They were responsive, professional, and delivered outstanding results.",
    testimonialAuthor: "Sarah Johnson",
    testimonialRole: "CEO, TechStart Inc.",
    testimonialImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    bgColor: "gray",
  },
  propsSchema: [
    { key: "heading", label: "Heading", type: "text", required: true },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "nameLabel", label: "Name Label", type: "text" },
    { key: "emailLabel", label: "Email Label", type: "text" },
    { key: "messageLabel", label: "Message Label", type: "text" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "testimonialQuote", label: "Testimonial Quote", type: "textarea" },
    { key: "testimonialAuthor", label: "Author Name", type: "text" },
    { key: "testimonialRole", label: "Author Role", type: "text" },
    { key: "testimonialImage", label: "Author Image", type: "image" },
    { key: "bgColor", label: "Background Color", type: "select", options: [{ label: "White", value: "white" }, { label: "Gray", value: "gray" }] },
  ],
  component: (props: Record<string, unknown>) => {
    const heading = (props.heading as string) || "Get Started Today";
    const subtitle = (props.subtitle as string) || "";
    const nameLabel = (props.nameLabel as string) || "Name";
    const emailLabel = (props.emailLabel as string) || "Email";
    const messageLabel = (props.messageLabel as string) || "How can we help?";
    const buttonText = (props.buttonText as string) || "Send Message";
    const testimonialQuote = (props.testimonialQuote as string) || "";
    const testimonialAuthor = (props.testimonialAuthor as string) || "";
    const testimonialRole = (props.testimonialRole as string) || "";
    const testimonialImage = (props.testimonialImage as string) || "";
    const bgColor = (props.bgColor as string) || "gray";

    return React.createElement(
      "section",
      { className: `relative overflow-hidden py-24 sm:py-32 ${bgColor === "gray" ? "bg-slate-50" : "bg-white"}` },
      React.createElement(
        "div",
        { className: "mx-auto max-w-7xl px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" },
          React.createElement(
            "div",
            null,
            React.createElement("h2", { className: "text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4" }, heading),
            subtitle && React.createElement("p", { className: "text-lg text-slate-600 mb-10" }, subtitle),
            React.createElement(
              "form",
              { className: "space-y-5", onSubmit: (e: { preventDefault: () => void }) => e.preventDefault() },
              React.createElement(
                "div",
                { className: "grid grid-cols-1 sm:grid-cols-2 gap-5" },
                React.createElement(
                  "div",
                  null,
                  React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, nameLabel),
                  React.createElement("input", { type: "text", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "Your name" })
                ),
                React.createElement(
                  "div",
                  null,
                  React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, emailLabel),
                  React.createElement("input", { type: "email", className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition", placeholder: "you@email.com" })
                )
              ),
              React.createElement(
                "div",
                null,
                React.createElement("label", { className: "block text-sm font-medium text-slate-700 mb-2" }, messageLabel),
                React.createElement("textarea", { rows: 5, className: "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none", placeholder: "Tell us about your needs..." })
              ),
              React.createElement("button", { type: "submit", className: "w-full rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/25" }, buttonText)
            )
          ),
          React.createElement(
            "div",
            { className: "rounded-2xl bg-white border border-slate-200 p-8 md:p-10 shadow-sm" },
            React.createElement(
              "div",
              { className: "flex gap-1 mb-6" },
              ...[0, 1, 2, 3, 4].map((i) =>
                React.createElement("svg", { key: i, className: "w-5 h-5 text-amber-400", fill: "currentColor", viewBox: "0 0 20 20" },
                  React.createElement("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
                )
              )
            ),
            testimonialQuote && React.createElement("blockquote", { className: "text-slate-700 text-lg leading-relaxed mb-8" }, React.createElement("em", null, `"${testimonialQuote}"`)),
            React.createElement(
              "div",
              { className: "flex items-center gap-4" },
              testimonialImage
                ? React.createElement("img", { src: testimonialImage, alt: testimonialAuthor, className: "w-12 h-12 rounded-full object-cover" })
                : React.createElement("div", { className: "w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold" }, testimonialAuthor.charAt(0)),
              React.createElement(
                "div",
                null,
                React.createElement("p", { className: "font-semibold text-slate-900" }, testimonialAuthor),
                testimonialRole && React.createElement("p", { className: "text-sm text-slate-500" }, testimonialRole)
              )
            )
          )
        )
      )
    );
  },
};

/* ------------------------------------------------------------------ */
/*  Register all contact sections                                     */
/* ------------------------------------------------------------------ */
registerSections([
  contact001,
  contact002,
  contact003,
  contact004,
  contact005,
  contact006,
  contact007,
  contact008,
  contact009,
  contact010,
  contact011,
  contact012,
  contact013,
  contact014,
  contact015,
]);
