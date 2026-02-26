"use client";

import { useCallback } from "react";
import { getSection, type PropField, type SectionDefinition } from "@repo/shared/sections";
import { Zap, Plus, Trash2, GripVertical } from "@/lib/icons";

interface SectionEditorProps {
  sectionId: string;
  props: Record<string, unknown>;
  customClasses: string;
  onPropsChange: (props: Record<string, unknown>) => void;
  onClassesChange: (classes: string) => void;
  onAIAssist: () => void;
}

export function SectionEditor({
  sectionId,
  props,
  customClasses,
  onPropsChange,
  onClassesChange,
  onAIAssist,
}: SectionEditorProps) {
  const section = getSection(sectionId);

  const updateProp = useCallback(
    (key: string, value: unknown) => {
      onPropsChange({ ...props, [key]: value });
    },
    [props, onPropsChange],
  );

  if (!section) {
    return (
      <div className="flex-1 overflow-y-auto p-4">
        <p className="text-sm text-text-muted">
          Section definition not found: <code className="text-xs">{sectionId}</code>
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-sm font-semibold text-foreground">{section.name}</h3>
        <p className="text-xs text-text-muted capitalize mt-0.5">{section.category}</p>
      </div>

      {/* Props fields */}
      <div className="space-y-4">
        {section.propsSchema.map((field) => (
          <FieldRenderer
            key={field.key}
            field={field}
            value={props[field.key]}
            onChange={(val) => updateProp(field.key, val)}
          />
        ))}
      </div>

      {/* Tailwind Classes */}
      <div className="space-y-1.5 border-t border-border pt-4">
        <label className="block text-sm font-semibold text-foreground">
          Tailwind Classes
        </label>
        <input
          type="text"
          value={customClasses}
          onChange={(e) => onClassesChange(e.target.value)}
          placeholder="e.g. bg-gray-50 py-12"
          className="w-full rounded-lg border border-border bg-bg-tertiary px-3 py-2 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        <p className="text-xs text-text-muted">
          Extra Tailwind utility classes applied to the section wrapper.
        </p>
      </div>

      {/* AI Assist Button */}
      <button
        type="button"
        onClick={onAIAssist}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
      >
        <Zap className="h-4 w-4" />
        AI Assist
      </button>
    </div>
  );
}

/* ================================================================
   FieldRenderer - renders a single PropField based on its type
   ================================================================ */

interface FieldRendererProps {
  field: PropField;
  value: unknown;
  onChange: (value: unknown) => void;
}

function FieldRenderer({ field, value, onChange }: FieldRendererProps) {
  const inputClasses =
    "w-full rounded-lg border border-border bg-bg-tertiary px-3 py-2 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  switch (field.type) {
    /* ---- text ---- */
    case "text":
      return (
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            {field.label}
            {field.required && <span className="text-danger ml-1">*</span>}
          </label>
          <input
            type="text"
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={inputClasses}
          />
        </div>
      );

    /* ---- textarea ---- */
    case "textarea":
      return (
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            {field.label}
            {field.required && <span className="text-danger ml-1">*</span>}
          </label>
          <textarea
            rows={3}
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={inputClasses + " resize-y"}
          />
        </div>
      );

    /* ---- richtext ---- */
    case "richtext":
      return (
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            {field.label}
            {field.required && <span className="text-danger ml-1">*</span>}
          </label>
          <textarea
            rows={4}
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={inputClasses + " resize-y"}
          />
          <p className="text-xs text-text-muted">Rich text supported</p>
        </div>
      );

    /* ---- image ---- */
    case "image":
      return (
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            {field.label}
            {field.required && <span className="text-danger ml-1">*</span>}
          </label>
          <input
            type="text"
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder ?? "https://example.com/image.jpg"}
            className={inputClasses}
          />
        </div>
      );

    /* ---- images ---- */
    case "images":
      return (
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            {field.label}
            {field.required && <span className="text-danger ml-1">*</span>}
          </label>
          <input
            type="text"
            value={
              Array.isArray(value)
                ? (value as string[]).join(", ")
                : (value as string) ?? ""
            }
            onChange={(e) =>
              onChange(
                e.target.value
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean),
              )
            }
            placeholder={
              field.placeholder ?? "https://example.com/a.jpg, https://example.com/b.jpg"
            }
            className={inputClasses}
          />
          <p className="text-xs text-text-muted">Comma-separated image URLs</p>
        </div>
      );

    /* ---- color ---- */
    case "color":
      return (
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            {field.label}
            {field.required && <span className="text-danger ml-1">*</span>}
          </label>
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-5 w-5 rounded-full border border-border flex-shrink-0"
              style={{
                backgroundColor: (value as string) || "#000000",
              }}
            />
            <input
              type="text"
              value={(value as string) ?? ""}
              onChange={(e) => onChange(e.target.value)}
              placeholder={field.placeholder ?? "#3b82f6"}
              className={inputClasses}
            />
          </div>
        </div>
      );

    /* ---- select ---- */
    case "select":
      return (
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            {field.label}
            {field.required && <span className="text-danger ml-1">*</span>}
          </label>
          <select
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            className={inputClasses}
          >
            <option value="">Select...</option>
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      );

    /* ---- toggle ---- */
    case "toggle":
      return (
        <div className="flex items-center justify-between py-1">
          <label className="text-sm font-medium text-foreground">
            {field.label}
          </label>
          <button
            type="button"
            role="switch"
            aria-checked={!!value}
            onClick={() => onChange(!value)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
              value ? "bg-accent" : "bg-border"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                value ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      );

    /* ---- url ---- */
    case "url":
      return (
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            {field.label}
            {field.required && <span className="text-danger ml-1">*</span>}
          </label>
          <input
            type="text"
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder ?? "https://"}
            className={inputClasses}
          />
        </div>
      );

    /* ---- number ---- */
    case "number":
      return (
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            {field.label}
            {field.required && <span className="text-danger ml-1">*</span>}
          </label>
          <input
            type="number"
            value={(value as number) ?? ""}
            onChange={(e) =>
              onChange(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder={field.placeholder}
            className={inputClasses}
          />
        </div>
      );

    /* ---- items (repeatable) ---- */
    case "items":
      return (
        <ItemsField
          field={field}
          value={value as Record<string, unknown>[] | undefined}
          onChange={onChange}
        />
      );

    default:
      return null;
  }
}

/* ================================================================
   ItemsField - repeatable sub-items with add / remove / reorder
   ================================================================ */

interface ItemsFieldProps {
  field: PropField;
  value: Record<string, unknown>[] | undefined;
  onChange: (value: unknown) => void;
}

function ItemsField({ field, value, onChange }: ItemsFieldProps) {
  const items = Array.isArray(value) ? value : [];
  const itemFields = field.itemFields ?? [];

  const addItem = () => {
    const blank: Record<string, unknown> = {};
    for (const f of itemFields) {
      blank[f.key] = f.type === "toggle" ? false : f.type === "number" ? 0 : "";
    }
    onChange([...items, blank]);
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, key: string, val: unknown) => {
    const updated = items.map((item, i) =>
      i === index ? { ...item, [key]: val } : item,
    );
    onChange(updated);
  };

  const moveItem = (from: number, to: number) => {
    if (to < 0 || to >= items.length) return;
    const updated = [...items];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    onChange(updated);
  };

  const inputClasses =
    "w-full rounded-lg border border-border bg-bg-tertiary px-3 py-2 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-foreground">
        {field.label}
      </label>

      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-border bg-bg-secondary p-3 space-y-2"
        >
          {/* Item header with reorder + delete */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => moveItem(index, index - 1)}
                disabled={index === 0}
                className="p-1 text-text-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                title="Move up"
              >
                <GripVertical className="h-3.5 w-3.5" />
              </button>
              <span className="text-xs font-medium text-text-muted">
                Item {index + 1}
              </span>
            </div>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="p-1 text-text-muted hover:text-danger transition-colors"
              title="Remove item"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Sub-fields */}
          {itemFields.map((subField) => {
            const subValue = item[subField.key];

            if (subField.type === "textarea") {
              return (
                <div key={subField.key} className="space-y-1">
                  <label className="block text-xs font-medium text-text-muted">
                    {subField.label}
                  </label>
                  <textarea
                    rows={2}
                    value={(subValue as string) ?? ""}
                    onChange={(e) =>
                      updateItem(index, subField.key, e.target.value)
                    }
                    placeholder={subField.placeholder}
                    className={inputClasses + " resize-y"}
                  />
                </div>
              );
            }

            if (subField.type === "number") {
              return (
                <div key={subField.key} className="space-y-1">
                  <label className="block text-xs font-medium text-text-muted">
                    {subField.label}
                  </label>
                  <input
                    type="number"
                    value={(subValue as number) ?? ""}
                    onChange={(e) =>
                      updateItem(
                        index,
                        subField.key,
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    placeholder={subField.placeholder}
                    className={inputClasses}
                  />
                </div>
              );
            }

            if (subField.type === "toggle") {
              return (
                <div
                  key={subField.key}
                  className="flex items-center justify-between py-0.5"
                >
                  <label className="text-xs font-medium text-text-muted">
                    {subField.label}
                  </label>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={!!subValue}
                    onClick={() => updateItem(index, subField.key, !subValue)}
                    className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      subValue ? "bg-accent" : "bg-border"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        subValue ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              );
            }

            if (subField.type === "select") {
              return (
                <div key={subField.key} className="space-y-1">
                  <label className="block text-xs font-medium text-text-muted">
                    {subField.label}
                  </label>
                  <select
                    value={(subValue as string) ?? ""}
                    onChange={(e) =>
                      updateItem(index, subField.key, e.target.value)
                    }
                    className={inputClasses}
                  >
                    <option value="">Select...</option>
                    {subField.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              );
            }

            if (subField.type === "image") {
              return (
                <div key={subField.key} className="space-y-1">
                  <label className="block text-xs font-medium text-text-muted">
                    {subField.label}
                  </label>
                  <input
                    type="text"
                    value={(subValue as string) ?? ""}
                    onChange={(e) =>
                      updateItem(index, subField.key, e.target.value)
                    }
                    placeholder={
                      subField.placeholder ?? "https://example.com/image.jpg"
                    }
                    className={inputClasses}
                  />
                </div>
              );
            }

            if (subField.type === "url") {
              return (
                <div key={subField.key} className="space-y-1">
                  <label className="block text-xs font-medium text-text-muted">
                    {subField.label}
                  </label>
                  <input
                    type="text"
                    value={(subValue as string) ?? ""}
                    onChange={(e) =>
                      updateItem(index, subField.key, e.target.value)
                    }
                    placeholder={subField.placeholder ?? "https://"}
                    className={inputClasses}
                  />
                </div>
              );
            }

            if (subField.type === "color") {
              return (
                <div key={subField.key} className="space-y-1">
                  <label className="block text-xs font-medium text-text-muted">
                    {subField.label}
                  </label>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-4 w-4 rounded-full border border-border flex-shrink-0"
                      style={{
                        backgroundColor: (subValue as string) || "#000000",
                      }}
                    />
                    <input
                      type="text"
                      value={(subValue as string) ?? ""}
                      onChange={(e) =>
                        updateItem(index, subField.key, e.target.value)
                      }
                      placeholder={subField.placeholder ?? "#3b82f6"}
                      className={inputClasses}
                    />
                  </div>
                </div>
              );
            }

            // Default: text input for text, richtext, images, and any other type
            return (
              <div key={subField.key} className="space-y-1">
                <label className="block text-xs font-medium text-text-muted">
                  {subField.label}
                </label>
                <input
                  type="text"
                  value={(subValue as string) ?? ""}
                  onChange={(e) =>
                    updateItem(index, subField.key, e.target.value)
                  }
                  placeholder={subField.placeholder}
                  className={inputClasses}
                />
                {subField.type === "richtext" && (
                  <p className="text-xs text-text-muted">Rich text supported</p>
                )}
              </div>
            );
          })}
        </div>
      ))}

      {/* Add Item button */}
      <button
        type="button"
        onClick={addItem}
        className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-border bg-bg-tertiary px-3 py-2 text-sm font-medium text-text-muted hover:text-foreground hover:border-accent/50 transition-colors"
      >
        <Plus className="h-3.5 w-3.5" />
        Add Item
      </button>
    </div>
  );
}
