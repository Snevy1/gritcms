"use client";

import { useState, useEffect } from "react";
import { useSettings, useUpdateSettings } from "@/hooks/use-website";
import {
  Settings,
  Palette,
  Globe,
  Share2,
  Search,
  Type,
  Save,
  Check,
} from "@/lib/icons";
import { Dropzone, type UploadedFile } from "@/components/ui/dropzone";

/* ─── Google Fonts list (popular subset) ──────────────────────── */
const GOOGLE_FONTS = [
  "Onest",
  "Inter",
  "DM Sans",
  "Poppins",
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Nunito",
  "Raleway",
  "Source Sans 3",
  "Work Sans",
  "Outfit",
  "Plus Jakarta Sans",
  "Manrope",
  "Space Grotesk",
  "Sora",
  "Figtree",
  "Geist",
  "Lexend",
  "Bricolage Grotesque",
  "Albert Sans",
  "General Sans",
];

/* ─── Preset brand colors ─────────────────────────────────────── */
const PRESET_COLORS = [
  { label: "Purple", value: "#6c5ce7" },
  { label: "Blue", value: "#3b82f6" },
  { label: "Indigo", value: "#6366f1" },
  { label: "Teal", value: "#14b8a6" },
  { label: "Green", value: "#22c55e" },
  { label: "Orange", value: "#f97316" },
  { label: "Red", value: "#ef4444" },
  { label: "Pink", value: "#ec4899" },
  { label: "Rose", value: "#f43f5e" },
  { label: "Amber", value: "#f59e0b" },
  { label: "Cyan", value: "#06b6d4" },
  { label: "Slate", value: "#64748b" },
];

/* ─── Tabs ─────────────────────────────────────────────────────── */
const tabs = [
  { id: "general", label: "General", icon: Globe },
  { id: "branding", label: "Branding", icon: Palette },
  { id: "social", label: "Social", icon: Share2 },
  { id: "seo", label: "SEO", icon: Search },
];

/* ─── Input component ──────────────────────────────────────────── */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-bg-tertiary px-4 py-2.5 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      {hint && <p className="text-xs text-text-muted">{hint}</p>}
    </div>
  );
}

/* ─── Main Settings Page ───────────────────────────────────────── */
export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  // Load settings from separate groups
  const { data: themeData, isLoading: themeLoading } = useSettings("theme");
  const { data: seoData, isLoading: seoLoading } = useSettings("seo");
  const { mutate: save, isPending: saving } = useUpdateSettings();

  // Local form state
  const [theme, setTheme] = useState<Record<string, string>>({});
  const [seo, setSeo] = useState<Record<string, string>>({});

  // Seed local state once fetched
  useEffect(() => {
    if (themeData) setTheme(themeData);
  }, [themeData]);

  useEffect(() => {
    if (seoData) setSeo(seoData);
  }, [seoData]);

  const updateTheme = (key: string, value: string) =>
    setTheme((prev) => ({ ...prev, [key]: value }));
  const updateSeo = (key: string, value: string) =>
    setSeo((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    if (activeTab === "seo") {
      save({ group: "seo", settings: seo });
    } else {
      save({ group: "theme", settings: theme });
    }
  };

  const isLoading = themeLoading || seoLoading;

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
            <Settings className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-sm text-text-secondary">
              Configure your platform
            </p>
          </div>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-50 transition-colors"
        >
          <Save className="h-4 w-4" />
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 rounded-xl border border-border bg-bg-secondary p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-accent/10 text-accent"
                  : "text-text-secondary hover:bg-bg-hover hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="rounded-xl border border-border bg-bg-secondary p-6">
        {activeTab === "general" && (
          <GeneralTab theme={theme} onChange={updateTheme} />
        )}
        {activeTab === "branding" && (
          <BrandingTab theme={theme} onChange={updateTheme} />
        )}
        {activeTab === "social" && (
          <SocialTab theme={theme} onChange={updateTheme} />
        )}
        {activeTab === "seo" && <SeoTab seo={seo} onChange={updateSeo} />}
      </div>
    </div>
  );
}

/* ─── General Tab ──────────────────────────────────────────────── */
function GeneralTab({
  theme,
  onChange,
}: {
  theme: Record<string, string>;
  onChange: (k: string, v: string) => void;
}) {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1">
          General Settings
        </h2>
        <p className="text-sm text-text-secondary">
          Basic information about your platform.
        </p>
      </div>

      <Input
        label="Site Name"
        value={theme.site_name || ""}
        onChange={(v) => onChange("site_name", v)}
        placeholder="My Creator Hub"
      />
      <Input
        label="Site Tagline"
        value={theme.site_tagline || ""}
        onChange={(v) => onChange("site_tagline", v)}
        placeholder="Empowering creators everywhere"
      />
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-foreground">Logo</label>
        <Dropzone
          variant="avatar"
          maxFiles={1}
          maxSize={2 * 1024 * 1024}
          accept={{ "image/*": [".jpg", ".jpeg", ".png", ".svg", ".webp"] }}
          value={theme.logo_url ? [{ url: theme.logo_url, name: "logo", size: 0, type: "image/png" } as UploadedFile] : []}
          onFilesChange={(files) => onChange("logo_url", files[0]?.url || "")}
        />
        <p className="text-xs text-text-muted">Upload your logo (PNG, SVG, or WebP, max 2MB).</p>
      </div>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-foreground">Favicon</label>
        <Dropzone
          variant="compact"
          maxFiles={1}
          maxSize={1 * 1024 * 1024}
          accept={{ "image/*": [".ico", ".png", ".svg"] }}
          value={theme.favicon_url ? [{ url: theme.favicon_url, name: "favicon", size: 0, type: "image/x-icon" } as UploadedFile] : []}
          onFilesChange={(files) => onChange("favicon_url", files[0]?.url || "")}
        />
        <p className="text-xs text-text-muted">Upload your favicon (ICO, PNG, or SVG).</p>
      </div>
      <Input
        label="Footer Text"
        value={theme.footer_text || ""}
        onChange={(v) => onChange("footer_text", v)}
        placeholder="© 2026 My Creator Hub. All rights reserved."
      />
    </div>
  );
}

/* ─── Branding Tab ─────────────────────────────────────────────── */
function BrandingTab({
  theme,
  onChange,
}: {
  theme: Record<string, string>;
  onChange: (k: string, v: string) => void;
}) {
  const currentFont = theme.body_font || "Onest";
  const currentColor = theme.accent_color || "#6c5ce7";

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1">
          Brand Identity
        </h2>
        <p className="text-sm text-text-secondary">
          Customize the font and color of your public-facing website.
        </p>
      </div>

      {/* ── Brand Font ── */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Type className="h-4 w-4 text-accent" />
          <label className="text-sm font-medium text-foreground">
            Brand Font
          </label>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {GOOGLE_FONTS.map((font) => {
            const selected = currentFont === font;
            return (
              <button
                key={font}
                onClick={() => {
                  onChange("body_font", font);
                  onChange("heading_font", font);
                }}
                className={`relative flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-all ${
                  selected
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border bg-bg-tertiary text-text-secondary hover:bg-bg-hover hover:text-foreground"
                }`}
              >
                <span className="truncate">{font}</span>
                {selected && (
                  <Check className="h-3.5 w-3.5 text-accent ml-auto shrink-0" />
                )}
              </button>
            );
          })}
        </div>
        <Input
          label="Or enter a custom Google Font name"
          value={currentFont}
          onChange={(v) => {
            onChange("body_font", v);
            onChange("heading_font", v);
          }}
          placeholder="e.g. Roboto Slab"
          hint="Must be a valid Google Fonts name. The font will be loaded dynamically on your public site."
        />
      </div>

      {/* ── Brand Color ── */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Palette className="h-4 w-4 text-accent" />
          <label className="text-sm font-medium text-foreground">
            Brand Color
          </label>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESET_COLORS.map((c) => {
            const selected =
              currentColor.toLowerCase() === c.value.toLowerCase();
            return (
              <button
                key={c.value}
                onClick={() => onChange("accent_color", c.value)}
                title={c.label}
                className={`group relative h-10 w-10 rounded-lg border-2 transition-all ${
                  selected
                    ? "border-foreground scale-110"
                    : "border-transparent hover:border-text-muted hover:scale-105"
                }`}
                style={{ backgroundColor: c.value }}
              >
                {selected && (
                  <Check className="h-4 w-4 text-white absolute inset-0 m-auto drop-shadow-md" />
                )}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={currentColor}
            onChange={(e) => onChange("accent_color", e.target.value)}
            className="h-10 w-14 rounded-lg border border-border bg-bg-tertiary cursor-pointer"
          />
          <input
            type="text"
            value={currentColor}
            onChange={(e) => onChange("accent_color", e.target.value)}
            placeholder="#6c5ce7"
            className="w-32 rounded-lg border border-border bg-bg-tertiary px-3 py-2 text-sm text-foreground font-mono focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <span className="text-xs text-text-muted">
            Pick or enter a hex color
          </span>
        </div>
      </div>

      {/* ── Live Preview ── */}
      <div className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-4">
          Preview
        </p>
        <div className="space-y-3">
          <h3
            className="text-xl font-bold"
            style={{ color: currentColor }}
          >
            {theme.site_name || "Your Site Name"}
          </h3>
          <p className="text-sm text-text-secondary">
            This is how your brand color will appear on headings, links, and
            buttons across your public website.
          </p>
          <div className="flex gap-2">
            <span
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: currentColor }}
            >
              Primary Button
            </span>
            <span
              className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-semibold"
              style={{ borderColor: currentColor, color: currentColor }}
            >
              Outline Button
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Social Tab ───────────────────────────────────────────────── */
function SocialTab({
  theme,
  onChange,
}: {
  theme: Record<string, string>;
  onChange: (k: string, v: string) => void;
}) {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1">
          Social Links
        </h2>
        <p className="text-sm text-text-secondary">
          Add your social media profiles. These appear in your site footer and
          metadata.
        </p>
      </div>

      <Input
        label="Twitter / X"
        value={theme.social_twitter || ""}
        onChange={(v) => onChange("social_twitter", v)}
        placeholder="https://twitter.com/yourhandle"
      />
      <Input
        label="GitHub"
        value={theme.social_github || ""}
        onChange={(v) => onChange("social_github", v)}
        placeholder="https://github.com/yourhandle"
      />
      <Input
        label="LinkedIn"
        value={theme.social_linkedin || ""}
        onChange={(v) => onChange("social_linkedin", v)}
        placeholder="https://linkedin.com/in/yourprofile"
      />
      <Input
        label="YouTube"
        value={theme.social_youtube || ""}
        onChange={(v) => onChange("social_youtube", v)}
        placeholder="https://youtube.com/@yourchannel"
      />
    </div>
  );
}

/* ─── SEO Tab ──────────────────────────────────────────────────── */
function SeoTab({
  seo,
  onChange,
}: {
  seo: Record<string, string>;
  onChange: (k: string, v: string) => void;
}) {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1">
          SEO Settings
        </h2>
        <p className="text-sm text-text-secondary">
          Improve your search engine visibility.
        </p>
      </div>

      <Input
        label="Meta Title"
        value={seo.meta_title || ""}
        onChange={(v) => onChange("meta_title", v)}
        placeholder="My Creator Hub — Build & Grow"
        hint="Appears as the page title in search results (50-60 characters recommended)."
      />

      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-foreground">
          Meta Description
        </label>
        <textarea
          value={seo.meta_description || ""}
          onChange={(e) => onChange("meta_description", e.target.value)}
          placeholder="A brief description of your platform for search engines..."
          rows={3}
          className="w-full rounded-lg border border-border bg-bg-tertiary px-4 py-2.5 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
        />
        <p className="text-xs text-text-muted">
          150-160 characters recommended for best search results.
        </p>
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-foreground">OG Image</label>
        <Dropzone
          variant="compact"
          maxFiles={1}
          maxSize={5 * 1024 * 1024}
          accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }}
          value={seo.og_image ? [{ url: seo.og_image, name: "og-image", size: 0, type: "image/jpeg" } as UploadedFile] : []}
          onFilesChange={(files) => onChange("og_image", files[0]?.url || "")}
        />
        <p className="text-xs text-text-muted">Shared image for social media previews (1200x630 recommended).</p>
      </div>

      <Input
        label="Google Analytics ID"
        value={seo.google_analytics_id || ""}
        onChange={(v) => onChange("google_analytics_id", v)}
        placeholder="G-XXXXXXXXXX"
        hint="Your Google Analytics 4 measurement ID."
      />
    </div>
  );
}
