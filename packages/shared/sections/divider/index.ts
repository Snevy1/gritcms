// @ts-nocheck
import React from "react";
import { registerSections } from "../registry";
import type { SectionDefinition } from "../types";

/* ------------------------------------------------------------------ */
/*  divider-001  Wave                                                 */
/* ------------------------------------------------------------------ */
const Divider001: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const topColor = (props.topColor as string) || "white";
  const bottomColor = (props.bottomColor as string) || "#f9fafb";
  const flip = (props.flip as boolean) || false;

  return React.createElement(
    "section",
    {
      className: `w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`,
      style: { backgroundColor: bottomColor },
    },
    React.createElement(
      "svg",
      {
        viewBox: "0 0 1440 120",
        className: "w-full block",
        preserveAspectRatio: "none",
        style: { display: "block" },
        xmlns: "http://www.w3.org/2000/svg",
      },
      React.createElement("path", {
        d: "M0,64 C480,120 960,0 1440,64 L1440,0 L0,0 Z",
        fill: topColor,
      })
    )
  );
};

/* ------------------------------------------------------------------ */
/*  divider-002  Diagonal                                             */
/* ------------------------------------------------------------------ */
const Divider002: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const topColor = (props.topColor as string) || "white";
  const bottomColor = (props.bottomColor as string) || "#f9fafb";
  const flip = (props.flip as boolean) || false;

  return React.createElement(
    "section",
    {
      className: `w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`,
      style: { backgroundColor: bottomColor },
    },
    React.createElement(
      "svg",
      {
        viewBox: "0 0 1440 80",
        className: "w-full block",
        preserveAspectRatio: "none",
        style: { display: "block" },
        xmlns: "http://www.w3.org/2000/svg",
      },
      React.createElement("path", {
        d: "M0,0 L1440,80 L1440,0 L0,0 Z",
        fill: topColor,
      })
    )
  );
};

/* ------------------------------------------------------------------ */
/*  divider-003  Curved                                               */
/* ------------------------------------------------------------------ */
const Divider003: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const topColor = (props.topColor as string) || "white";
  const bottomColor = (props.bottomColor as string) || "#f9fafb";
  const flip = (props.flip as boolean) || false;

  return React.createElement(
    "section",
    {
      className: `w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`,
      style: { backgroundColor: bottomColor },
    },
    React.createElement(
      "svg",
      {
        viewBox: "0 0 1440 100",
        className: "w-full block",
        preserveAspectRatio: "none",
        style: { display: "block" },
        xmlns: "http://www.w3.org/2000/svg",
      },
      React.createElement("path", {
        d: "M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z",
        fill: topColor,
      })
    )
  );
};

/* ------------------------------------------------------------------ */
/*  divider-004  Gradient Fade                                        */
/* ------------------------------------------------------------------ */
const Divider004: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const fromColor = (props.fromColor as string) || "from-white";
  const toColor = (props.toColor as string) || "to-gray-50";
  const height = (props.height as string) || "h-24";

  return React.createElement("section", {
    className: `w-full bg-gradient-to-b ${fromColor} ${toColor} ${height}`,
  });
};

/* ------------------------------------------------------------------ */
/*  divider-005  Pattern Dots                                         */
/* ------------------------------------------------------------------ */
const Divider005: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const bgColor = (props.bgColor as string) || "bg-white";

  return React.createElement(
    "section",
    { className: `${bgColor} py-8 overflow-hidden` },
    React.createElement(
      "div",
      { className: "mx-auto max-w-7xl px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" }
      )
    )
  );
};

/* ------------------------------------------------------------------ */
/*  divider-006  Illustration                                         */
/* ------------------------------------------------------------------ */
const Divider006: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const topColor = (props.topColor as string) || "white";
  const bottomColor = (props.bottomColor as string) || "#f9fafb";
  const flip = (props.flip as boolean) || false;

  return React.createElement(
    "section",
    {
      className: `w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`,
      style: { backgroundColor: bottomColor },
    },
    React.createElement(
      "svg",
      {
        viewBox: "0 0 1440 100",
        className: "w-full block",
        preserveAspectRatio: "none",
        style: { display: "block" },
        xmlns: "http://www.w3.org/2000/svg",
      },
      React.createElement("path", {
        d: "M0,0 L0,40 Q120,80 240,40 Q360,0 480,40 Q600,80 720,40 Q840,0 960,40 Q1080,80 1200,40 Q1320,0 1440,40 L1440,0 Z",
        fill: topColor,
      }),
      React.createElement("circle", {
        cx: "360",
        cy: "20",
        r: "4",
        fill: "#7c3aed",
        opacity: "0.4",
      }),
      React.createElement("circle", {
        cx: "720",
        cy: "60",
        r: "3",
        fill: "#7c3aed",
        opacity: "0.3",
      }),
      React.createElement("circle", {
        cx: "1080",
        cy: "20",
        r: "5",
        fill: "#7c3aed",
        opacity: "0.25",
      })
    )
  );
};

/* ------------------------------------------------------------------ */
/*  divider-007  Angled                                               */
/* ------------------------------------------------------------------ */
const Divider007: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const topColor = (props.topColor as string) || "white";
  const bottomColor = (props.bottomColor as string) || "#f9fafb";
  const flip = (props.flip as boolean) || false;

  return React.createElement(
    "section",
    {
      className: `w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`,
      style: { backgroundColor: bottomColor },
    },
    React.createElement(
      "svg",
      {
        viewBox: "0 0 1440 80",
        className: "w-full block",
        preserveAspectRatio: "none",
        style: { display: "block" },
        xmlns: "http://www.w3.org/2000/svg",
      },
      React.createElement("path", {
        d: "M0,0 L720,80 L1440,0 L1440,0 L0,0 Z",
        fill: topColor,
      })
    )
  );
};

/* ------------------------------------------------------------------ */
/*  divider-008  Blob                                                 */
/* ------------------------------------------------------------------ */
const Divider008: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const topColor = (props.topColor as string) || "white";
  const bottomColor = (props.bottomColor as string) || "#f9fafb";
  const flip = (props.flip as boolean) || false;

  return React.createElement(
    "section",
    {
      className: `w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`,
      style: { backgroundColor: bottomColor },
    },
    React.createElement(
      "svg",
      {
        viewBox: "0 0 1440 120",
        className: "w-full block",
        preserveAspectRatio: "none",
        style: { display: "block" },
        xmlns: "http://www.w3.org/2000/svg",
      },
      React.createElement("path", {
        d: "M0,0 C180,0 180,80 360,80 C540,80 540,20 720,20 C900,20 900,100 1080,100 C1260,100 1260,0 1440,0 L1440,0 L0,0 Z",
        fill: topColor,
      })
    )
  );
};

/* ------------------------------------------------------------------ */
/*  divider-009  Mountain                                             */
/* ------------------------------------------------------------------ */
const Divider009: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const topColor = (props.topColor as string) || "white";
  const bottomColor = (props.bottomColor as string) || "#f9fafb";
  const mountainColor = (props.mountainColor as string) || "#e5e7eb";
  const flip = (props.flip as boolean) || false;

  return React.createElement(
    "section",
    {
      className: `w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`,
      style: { backgroundColor: bottomColor },
    },
    React.createElement(
      "svg",
      {
        viewBox: "0 0 1440 120",
        className: "w-full block",
        preserveAspectRatio: "none",
        style: { display: "block" },
        xmlns: "http://www.w3.org/2000/svg",
      },
      React.createElement("rect", {
        x: "0",
        y: "0",
        width: "1440",
        height: "120",
        fill: topColor,
      }),
      React.createElement("path", {
        d: "M0,120 L200,60 L400,90 L600,30 L800,70 L1000,20 L1200,80 L1440,40 L1440,120 Z",
        fill: mountainColor,
      }),
      React.createElement("path", {
        d: "M0,120 L300,70 L500,100 L700,50 L900,85 L1100,40 L1300,90 L1440,60 L1440,120 Z",
        fill: bottomColor,
      })
    )
  );
};

/* ------------------------------------------------------------------ */
/*  divider-010  Zigzag                                               */
/* ------------------------------------------------------------------ */
const Divider010: React.FC<Record<string, unknown>> = (raw) => {
  const props = raw as Record<string, unknown>;
  const topColor = (props.topColor as string) || "white";
  const bottomColor = (props.bottomColor as string) || "#f9fafb";
  const flip = (props.flip as boolean) || false;

  const points: string[] = [];
  const segments = 20;
  const segWidth = 1440 / segments;
  for (let i = 0; i <= segments; i++) {
    const x = i * segWidth;
    const y = i % 2 === 0 ? 0 : 40;
    points.push(`${x},${y}`);
  }
  points.push("1440,0", "0,0");

  return React.createElement(
    "section",
    {
      className: `w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`,
      style: { backgroundColor: bottomColor },
    },
    React.createElement(
      "svg",
      {
        viewBox: "0 0 1440 40",
        className: "w-full block",
        preserveAspectRatio: "none",
        style: { display: "block" },
        xmlns: "http://www.w3.org/2000/svg",
      },
      React.createElement("polygon", {
        points: points.join(" "),
        fill: topColor,
      })
    )
  );
};

/* ================================================================== */
/*  Section Definitions                                               */
/* ================================================================== */
const dividerSections: SectionDefinition[] = [
  {
    id: "divider-001",
    category: "divider",
    name: "Wave",
    description: "Smooth SVG wave divider between sections.",
    tags: ["divider", "wave", "svg", "smooth"],
    defaultProps: {
      topColor: "white",
      bottomColor: "#f9fafb",
      flip: false,
    },
    propsSchema: [
      { key: "topColor", label: "Top Color", type: "color" },
      { key: "bottomColor", label: "Bottom Color", type: "color" },
      { key: "flip", label: "Flip", type: "toggle" },
    ],
    component: Divider001,
  },
  {
    id: "divider-002",
    category: "divider",
    name: "Diagonal",
    description: "Diagonal angle divider between sections.",
    tags: ["divider", "diagonal", "angle", "slant"],
    defaultProps: {
      topColor: "white",
      bottomColor: "#f9fafb",
      flip: false,
    },
    propsSchema: [
      { key: "topColor", label: "Top Color", type: "color" },
      { key: "bottomColor", label: "Bottom Color", type: "color" },
      { key: "flip", label: "Flip", type: "toggle" },
    ],
    component: Divider002,
  },
  {
    id: "divider-003",
    category: "divider",
    name: "Curved",
    description: "Curved arc divider between sections.",
    tags: ["divider", "curved", "arc", "smooth"],
    defaultProps: {
      topColor: "white",
      bottomColor: "#f9fafb",
      flip: false,
    },
    propsSchema: [
      { key: "topColor", label: "Top Color", type: "color" },
      { key: "bottomColor", label: "Bottom Color", type: "color" },
      { key: "flip", label: "Flip", type: "toggle" },
    ],
    component: Divider003,
  },
  {
    id: "divider-004",
    category: "divider",
    name: "Gradient Fade",
    description: "Gradient fade transition between section backgrounds.",
    tags: ["divider", "gradient", "fade", "transition"],
    defaultProps: {
      fromColor: "from-white",
      toColor: "to-gray-50",
      height: "h-24",
    },
    propsSchema: [
      {
        key: "fromColor",
        label: "From Color",
        type: "select",
        options: [
          { label: "White", value: "from-white" },
          { label: "Gray 50", value: "from-gray-50" },
          { label: "Indigo 50", value: "from-indigo-50" },
          { label: "Gray 900", value: "from-gray-900" },
        ],
      },
      {
        key: "toColor",
        label: "To Color",
        type: "select",
        options: [
          { label: "White", value: "to-white" },
          { label: "Gray 50", value: "to-gray-50" },
          { label: "Indigo 50", value: "to-indigo-50" },
          { label: "Gray 900", value: "to-gray-900" },
        ],
      },
      {
        key: "height",
        label: "Height",
        type: "select",
        options: [
          { label: "Small", value: "h-16" },
          { label: "Medium", value: "h-24" },
          { label: "Large", value: "h-32" },
          { label: "Extra Large", value: "h-48" },
        ],
      },
    ],
    component: Divider004,
  },
  {
    id: "divider-005",
    category: "divider",
    name: "Pattern Dots",
    description: "Horizontal dotted pattern divider.",
    tags: ["divider", "dots", "pattern", "decorative"],
    defaultProps: {
      bgColor: "bg-white",
    },
    propsSchema: [
      {
        key: "bgColor",
        label: "Background Color",
        type: "select",
        options: [
          { label: "White", value: "bg-white" },
          { label: "Gray 50", value: "bg-gray-50" },
          { label: "Gray 900", value: "bg-gray-900" },
        ],
      },
    ],
    component: Divider005,
  },
  {
    id: "divider-006",
    category: "divider",
    name: "Illustration",
    description: "Decorative wavy divider with floating dot accents.",
    tags: ["divider", "illustration", "decorative", "dots"],
    defaultProps: {
      topColor: "white",
      bottomColor: "#f9fafb",
      flip: false,
    },
    propsSchema: [
      { key: "topColor", label: "Top Color", type: "color" },
      { key: "bottomColor", label: "Bottom Color", type: "color" },
      { key: "flip", label: "Flip", type: "toggle" },
    ],
    component: Divider006,
  },
  {
    id: "divider-007",
    category: "divider",
    name: "Angled",
    description: "Sharp angled V-shape divider.",
    tags: ["divider", "angled", "sharp", "v-shape"],
    defaultProps: {
      topColor: "white",
      bottomColor: "#f9fafb",
      flip: false,
    },
    propsSchema: [
      { key: "topColor", label: "Top Color", type: "color" },
      { key: "bottomColor", label: "Bottom Color", type: "color" },
      { key: "flip", label: "Flip", type: "toggle" },
    ],
    component: Divider007,
  },
  {
    id: "divider-008",
    category: "divider",
    name: "Blob",
    description: "Organic blob-shaped divider.",
    tags: ["divider", "blob", "organic", "freeform"],
    defaultProps: {
      topColor: "white",
      bottomColor: "#f9fafb",
      flip: false,
    },
    propsSchema: [
      { key: "topColor", label: "Top Color", type: "color" },
      { key: "bottomColor", label: "Bottom Color", type: "color" },
      { key: "flip", label: "Flip", type: "toggle" },
    ],
    component: Divider008,
  },
  {
    id: "divider-009",
    category: "divider",
    name: "Mountain",
    description: "Mountain silhouette layered divider with depth.",
    tags: ["divider", "mountain", "silhouette", "layered", "nature"],
    defaultProps: {
      topColor: "white",
      bottomColor: "#f9fafb",
      mountainColor: "#e5e7eb",
      flip: false,
    },
    propsSchema: [
      { key: "topColor", label: "Top Color", type: "color" },
      { key: "bottomColor", label: "Bottom Color", type: "color" },
      { key: "mountainColor", label: "Mountain Color", type: "color" },
      { key: "flip", label: "Flip", type: "toggle" },
    ],
    component: Divider009,
  },
  {
    id: "divider-010",
    category: "divider",
    name: "Zigzag",
    description: "Zigzag saw-tooth pattern divider.",
    tags: ["divider", "zigzag", "sawtooth", "pattern"],
    defaultProps: {
      topColor: "white",
      bottomColor: "#f9fafb",
      flip: false,
    },
    propsSchema: [
      { key: "topColor", label: "Top Color", type: "color" },
      { key: "bottomColor", label: "Bottom Color", type: "color" },
      { key: "flip", label: "Flip", type: "toggle" },
    ],
    component: Divider010,
  },
];

registerSections(dividerSections);
