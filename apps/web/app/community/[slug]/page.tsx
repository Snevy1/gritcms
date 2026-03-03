"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Users,
  Hash,
  Heart,
  Loader2,
  Megaphone,
} from "lucide-react";
import { useState } from "react";
import { usePublicSpace, useThreads, useCreateThread } from "@/hooks/use-community";
import { useAuth } from "@/hooks/use-auth";

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString();
}

export default function SpaceDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const { data: space, isLoading, error } = usePublicSpace(slug);

  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data: threadsData, isLoading: threadsLoading } = useThreads(space?.id);
  const { mutate: createThread, isPending: isCreating } = useCreateThread();

  const handleCreateThread = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !space) return;
    createThread(
      { spaceId: space.id, title, content },
      {
        onSuccess: () => {
          setTitle("");
          setContent("");
          setShowForm(false);
        },
      }
    );
  };

  // -------------------------------------------------------------------------
  // Loading
  // -------------------------------------------------------------------------
  if (isLoading) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Error / not found
  // -------------------------------------------------------------------------
  if (error || !space) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-bg-elevated border border-border">
          <span className="text-2xl text-text-muted">404</span>
        </div>
        <h1 className="text-xl font-semibold text-foreground">Space not found</h1>
        <p className="mt-2 text-sm text-text-muted">
          This community space doesn&apos;t exist or is private.
        </p>
        <Link
          href="/community"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </Link>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Main render
  // -------------------------------------------------------------------------
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-12">

      {/* Back link */}
      <Link
        href="/community"
        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-foreground transition-colors mb-5 sm:mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        All spaces
      </Link>

      {/* ================================================================= */}
      {/* SPACE HEADER                                                      */}
      {/* ================================================================= */}
      <div className="mb-6 sm:mb-8">
        {/* Icon + name row */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${space.color}20`, color: space.color }}
          >
            <Hash className="h-5 w-5 sm:h-7 sm:w-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
            {space.name}
          </h1>
        </div>

        {/* Description */}
        {space.description && (
          <p className="text-sm sm:text-base text-text-secondary mb-3 leading-relaxed">
            {space.description}
          </p>
        )}

        {/* Meta stats + Create Thread button — separate row so button never squishes title */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-text-muted flex-wrap">
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {space.member_count ?? 0} members
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {space.thread_count ?? 0} threads
            </span>
          </div>

          {user && (
            <button
              onClick={() => setShowForm(!showForm)}
              className="rounded-lg bg-accent px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-accent-hover transition-colors shrink-0"
            >
              {showForm ? "Cancel" : "New Thread"}
            </button>
          )}
        </div>
      </div>

      {/* ================================================================= */}
      {/* CREATE THREAD FORM                                                */}
      {/* ================================================================= */}
      {showForm && user && (
        <form
          onSubmit={handleCreateThread}
          className="mb-6 sm:mb-8 rounded-xl border border-border bg-bg-elevated p-4 sm:p-6 animate-in slide-in-from-top-4 fade-in-0"
        >
          <h4 className="text-sm font-semibold text-foreground mb-4">
            Start a new thread
          </h4>

          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-border bg-bg-primary px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
              placeholder="What do you want to discuss?"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">
              Content <span className="text-text-muted font-normal">(optional)</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-lg border border-border bg-bg-primary px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none resize-y"
              placeholder="Add more details..."
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg border border-border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-text-secondary hover:bg-bg-hover transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isCreating || !title.trim()}
              className="flex items-center gap-2 rounded-lg bg-accent px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-accent-hover transition-colors disabled:opacity-50"
            >
              {isCreating && <Loader2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin" />}
              Post Thread
            </button>
          </div>
        </form>
      )}

      {/* ================================================================= */}
      {/* THREAD LIST / STATES                                              */}
      {/* ================================================================= */}
      {!user ? (
        /* Not signed in */
        <div className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-8 text-center">
          <MessageCircle className="h-9 w-9 sm:h-10 sm:w-10 text-text-muted mx-auto mb-3 opacity-60" />
          <h3 className="text-base sm:text-lg font-semibold text-foreground">
            Join the discussion
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-text-muted max-w-sm mx-auto mb-5">
            Sign in to view threads, post discussions, and engage with the community.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Sign In
          </Link>
        </div>
      ) : threadsLoading ? (
        /* Loading threads */
        <div className="flex justify-center py-12">
          <Loader2 className="h-7 w-7 animate-spin text-accent" />
        </div>
      ) : threadsData?.data && threadsData.data.length > 0 ? (
        /* Thread list */
        <div className="space-y-3 sm:space-y-4">
          {threadsData.data.map((thread) => {
            const authorName = [thread.author?.first_name, thread.author?.last_name]
              .filter(Boolean)
              .join(" ") || "Unknown";
            const initial = thread.author?.first_name?.charAt(0)?.toUpperCase() || "?";

            return (
              <Link
                key={thread.id}
                href={`/community/${slug}/thread/${thread.id}`}
                className="group block rounded-xl border border-border bg-bg-elevated p-4 sm:p-5 hover:border-accent/60 hover:bg-bg-hover transition-colors"
              >
                <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-1.5">
                  {String(thread.title)}
                </h3>

                {/* Excerpt */}
                {thread.content && (
                  <p className="text-xs sm:text-sm text-text-muted line-clamp-2 mb-3 leading-relaxed">
                    {typeof thread.content === "string" ? thread.content : "..."}
                  </p>
                )}

                {/* Footer — author + time on left, stats on right */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  {/* Author + time */}
                  <div className="flex items-center gap-1.5 text-xs text-text-muted min-w-0">
                    <div className="h-5 w-5 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-[10px] shrink-0">
                      {initial}
                    </div>
                    <span className="truncate max-w-[120px] sm:max-w-none">{authorName}</span>
                    <span className="shrink-0 text-border">·</span>
                    <span className="shrink-0">{timeAgo(thread.created_at.toString())}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-2.5 shrink-0 text-text-muted">
                    <span className="flex items-center gap-1 text-xs">
                      <Heart className="h-3.5 w-3.5" />
                      {thread.like_count ?? 0}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <MessageCircle className="h-3.5 w-3.5" />
                      {thread.reply_count ?? 0}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        /* Empty state */
        <div className="rounded-xl border border-dashed border-border bg-bg-elevated p-6 sm:p-8 text-center">
          <Megaphone className="h-9 w-9 sm:h-10 sm:w-10 text-text-muted mx-auto mb-3 opacity-60" />
          <h3 className="text-base sm:text-lg font-semibold text-foreground">
            No threads yet
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-text-muted max-w-sm mx-auto mb-5">
            Be the first to start a discussion in this space!
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Start a Thread
          </button>
        </div>
      )}

      {/* ================================================================= */}
      {/* BOTTOM NAV                                                        */}
      {/* ================================================================= */}
      <div className="mt-8 sm:mt-12 pt-5 sm:pt-8 border-t border-border/50">
        <Link
          href="/community"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          All spaces
        </Link>
      </div>
    </div>
  );
}