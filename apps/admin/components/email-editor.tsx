"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useCallback, useState } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
  Youtube as YoutubeIcon,
  MousePointerClick,
  AlignLeft,
  AlignCenter,
  AlignRight,
  MinusLine,
  Undo,
  Redo,
} from "@/lib/icons";

interface EmailEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function EmailEditor({ value, onChange, placeholder }: EmailEditorProps) {
  const [showCtaModal, setShowCtaModal] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        horizontalRule: {},
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-accent underline" },
      }),
      Underline,
      Image.configure({
        HTMLAttributes: { class: "max-w-full rounded-lg" },
      }),
      Youtube.configure({
        HTMLAttributes: { class: "w-full rounded-lg" },
        width: 640,
        height: 360,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: placeholder || "Write your email content here...",
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none min-h-[350px] p-5 focus:outline-none text-text-primary " +
          "prose-headings:text-text-primary prose-p:text-text-primary prose-strong:text-text-primary " +
          "prose-em:text-text-primary prose-li:text-text-primary prose-a:text-accent " +
          "prose-blockquote:text-text-secondary prose-blockquote:border-border " +
          "prose-code:text-accent prose-code:bg-bg-hover prose-code:rounded prose-code:px-1 " +
          "prose-pre:bg-bg-primary prose-pre:border prose-pre:border-border prose-pre:rounded-lg " +
          "prose-img:rounded-lg prose-img:mx-auto prose-hr:border-border",
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const addYoutube = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("YouTube video URL");
    if (url) {
      editor.chain().focus().setYoutubeVideo({ src: url }).run();
    }
  }, [editor]);

  const insertCta = useCallback(
    (text: string, url: string) => {
      if (!editor || !text || !url) return;
      const ctaHtml = `<p style="text-align: center; margin: 24px 0;"><a href="${url}" style="display: inline-block; background-color: #6c5ce7; color: #ffffff; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">${text}</a></p>`;
      editor.chain().focus().insertContent(ctaHtml).run();
    },
    [editor]
  );

  if (!editor) return null;

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-border bg-bg-secondary">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-0.5 border-b border-border bg-bg-tertiary p-1.5">
          {/* Text formatting */}
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive("bold")}
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive("italic")}
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive("underline")}
            title="Underline"
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            active={editor.isActive("strike")}
            title="Strikethrough"
          >
            <Strikethrough className="h-4 w-4" />
          </ToolbarButton>

          <Separator />

          {/* Headings */}
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            active={editor.isActive("heading", { level: 1 })}
            title="Heading 1"
          >
            <Heading1 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            active={editor.isActive("heading", { level: 2 })}
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            active={editor.isActive("heading", { level: 3 })}
            title="Heading 3"
          >
            <Heading3 className="h-4 w-4" />
          </ToolbarButton>

          <Separator />

          {/* Alignment */}
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            active={editor.isActive({ textAlign: "left" })}
            title="Align Left"
          >
            <AlignLeft className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            active={editor.isActive({ textAlign: "center" })}
            title="Align Center"
          >
            <AlignCenter className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            active={editor.isActive({ textAlign: "right" })}
            title="Align Right"
          >
            <AlignRight className="h-4 w-4" />
          </ToolbarButton>

          <Separator />

          {/* Lists & blocks */}
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive("bulletList")}
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive("orderedList")}
            title="Ordered List"
          >
            <ListOrdered className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive("blockquote")}
            title="Blockquote"
          >
            <Quote className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            active={editor.isActive("codeBlock")}
            title="Code Block"
          >
            <Code className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Divider"
          >
            <MinusLine className="h-4 w-4" />
          </ToolbarButton>

          <Separator />

          {/* Media & embeds */}
          <ToolbarButton onClick={setLink} active={editor.isActive("link")} title="Insert Link">
            <LinkIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={addImage} title="Insert Image">
            <ImageIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={addYoutube} title="Embed YouTube">
            <YoutubeIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => setShowCtaModal(true)} title="Insert CTA Button">
            <MousePointerClick className="h-4 w-4" />
          </ToolbarButton>

          <Separator />

          {/* Undo / Redo */}
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Undo"
          >
            <Undo className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Redo"
          >
            <Redo className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Bubble menu for links */}
        {editor && (
          <BubbleMenu
            editor={editor}
            tippyOptions={{ duration: 150 }}
            shouldShow={({ editor }) => editor.isActive("link")}
          >
            <div className="flex items-center gap-1 rounded-lg border border-border bg-bg-elevated px-2 py-1 shadow-lg">
              <a
                href={editor.getAttributes("link").href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent underline max-w-[200px] truncate"
              >
                {editor.getAttributes("link").href}
              </a>
              <button
                onClick={setLink}
                className="text-xs text-text-muted hover:text-text-primary px-1"
              >
                Edit
              </button>
              <button
                onClick={() => editor.chain().focus().unsetLink().run()}
                className="text-xs text-red-400 hover:text-red-300 px-1"
              >
                Remove
              </button>
            </div>
          </BubbleMenu>
        )}

        <EditorContent editor={editor} />
      </div>

      {/* CTA Modal */}
      {showCtaModal && (
        <CtaModal
          onInsert={(text, url) => {
            insertCta(text, url);
            setShowCtaModal(false);
          }}
          onClose={() => setShowCtaModal(false)}
        />
      )}
    </div>
  );
}

function Separator() {
  return <div className="mx-1 h-5 w-px bg-border" />;
}

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}

function ToolbarButton({ onClick, active, disabled, title, children }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        flex h-7 w-7 items-center justify-center rounded text-sm transition-colors
        ${active ? "bg-accent/20 text-accent" : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"}
        ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {children}
    </button>
  );
}

function CtaModal({
  onInsert,
  onClose,
}: {
  onInsert: (text: string, url: string) => void;
  onClose: () => void;
}) {
  const [text, setText] = useState("Click Here");
  const [url, setUrl] = useState("https://");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-xl border border-border bg-bg-elevated p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-foreground">Insert CTA Button</h3>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">
            Button Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-lg border border-border bg-bg-secondary px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">
            Button URL
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-lg border border-border bg-bg-secondary px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>
        {/* Preview */}
        <div className="rounded-lg border border-border bg-bg-secondary p-4 text-center">
          <span
            className="inline-block rounded-lg px-8 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#6c5ce7" }}
          >
            {text || "Button"}
          </span>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary hover:bg-bg-hover"
          >
            Cancel
          </button>
          <button
            onClick={() => onInsert(text, url)}
            disabled={!text || !url || url === "https://"}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 disabled:opacity-50"
          >
            Insert
          </button>
        </div>
      </div>
    </div>
  );
}
