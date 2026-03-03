"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Heart, Loader2 } from "lucide-react";
import { useState } from "react";
import { useThread, useCreateReply, useToggleReaction } from "@/hooks/use-community";
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

function Avatar({ name, size = "md" }: { name?: string; size?: "sm" | "md" }) {
    const initial = name?.charAt(0)?.toUpperCase() || "?";
    return (
        <div
            className={`rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold shrink-0 ${size === "sm" ? "h-7 w-7 text-xs" : "h-9 w-9 text-sm"
                }`}
        >
            {initial}
        </div>
    );
}

export default function ThreadDetailPage() {
    const params = useParams();
    const slug = typeof params.slug === "string" ? params.slug : "";
    const threadId =
        typeof params.threadId === "string" ? parseInt(params.threadId, 10) : 0;

    const { data: thread, isLoading, error } = useThread(threadId);
    const { user } = useAuth();

    const [content, setContent] = useState("");
    const { mutate: createReply, isPending: isReplying } = useCreateReply();
    const { mutate: toggleReaction } = useToggleReaction();

    const handleReply = (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim() || !thread) return;
        createReply(
            { threadId: thread.id, content },
            { onSuccess: () => setContent("") }
        );
    };

    const handleToggleReaction = (type: "thread" | "reply", id: number) => {
        if (!user) return;
        toggleReaction({ reactable_type: type, reactable_id: id, type: "like" });
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
    if (error || !thread) {
        return (
            <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16 text-center">
                <h1 className="text-xl font-semibold text-foreground">Thread not found</h1>
                <Link
                    href={`/community/${slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Space
                </Link>
            </div>
        );
    }

    const authorName =
        [thread.author?.first_name, thread.author?.last_name].filter(Boolean).join(" ") || "Unknown";

    // -------------------------------------------------------------------------
    // Main render
    // -------------------------------------------------------------------------
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-12">

            {/* Back link */}
            <Link
                href={`/community/${slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-foreground transition-colors mb-6 sm:mb-8"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to space
            </Link>

            {/* ================================================================= */}
            {/* MAIN THREAD CARD                                                  */}
            {/* ================================================================= */}
            <div className="rounded-xl border border-border bg-bg-elevated p-4 sm:p-6 mb-6 sm:mb-8">

                {/* Title */}
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4 leading-snug">
                    {String(thread.title)}
                </h1>

                {/* Author row — wraps gracefully on small screens */}
                <div className="flex items-center gap-2.5 flex-wrap mb-5">
                    <Avatar name={thread.author?.first_name} size="md" />
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium text-foreground leading-tight">
                            {authorName}
                        </span>
                        <span className="text-xs text-text-muted">
                            {timeAgo(thread.created_at)}
                        </span>
                    </div>
                </div>

                {/* Thread content */}
                {!!thread.content && (
                    <div className="text-sm sm:text-base text-text-secondary whitespace-pre-wrap leading-relaxed mb-6">
                        {typeof thread.content === "string"
                            ? thread.content
                            : JSON.stringify(thread.content)}
                    </div>
                )}

                {/* Reaction bar */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <button
                        onClick={() => handleToggleReaction("thread", thread.id)}
                        className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors group"
                    >
                        <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span>{thread.like_count || 0}</span>
                    </button>
                    <div className="flex items-center gap-1.5 text-sm text-text-muted">
                        <MessageCircle className="h-4 w-4" />
                        <span>{thread.reply_count || 0}</span>
                    </div>
                </div>
            </div>

            {/* ================================================================= */}
            {/* REPLIES                                                           */}
            {/* ================================================================= */}
            <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
                    Replies ({thread.reply_count || 0})
                </h3>

                {thread.replies && thread.replies.length > 0 ? (
                    <div className="space-y-3 sm:space-y-4">
                        {thread.replies.map((reply: any) => {
                            const replyAuthorName =
                                [reply.author?.first_name, reply.author?.last_name]
                                    .filter(Boolean)
                                    .join(" ") || "Unknown";

                            return (
                                <div
                                    key={reply.id}
                                    className="rounded-xl border border-border bg-bg-primary p-4 sm:p-5"
                                >
                                    {/* Reply author row */}
                                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                                        <Avatar name={reply.author?.first_name} size="sm" />
                                        <span className="text-sm font-medium text-foreground">
                                            {replyAuthorName}
                                        </span>
                                        <span className="text-xs text-text-muted">
                                            {timeAgo(reply.created_at)}
                                        </span>
                                    </div>

                                    {/* Reply content — no ml-8 on mobile */}
                                    <div className="text-sm text-text-secondary whitespace-pre-wrap leading-relaxed sm:ml-9 mb-3">
                                        {typeof reply.content === "string"
                                            ? reply.content
                                            : JSON.stringify(reply.content)}
                                    </div>

                                    {/* Reply reaction */}
                                    <div className="sm:ml-9">
                                        <button
                                            onClick={() => handleToggleReaction("reply", reply.id)}
                                            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors group"
                                        >
                                            <Heart className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                                            <span>{reply.like_count || 0}</span>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-10 text-text-muted text-sm border border-dashed border-border rounded-xl">
                        <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-40" />
                        No replies yet. Be the first to share your thoughts!
                    </div>
                )}
            </div>

            {/* ================================================================= */}
            {/* REPLY FORM / SIGN IN PROMPT                                       */}
            {/* ================================================================= */}
            {user ? (
                <form
                    onSubmit={handleReply}
                    className="rounded-xl border border-border bg-bg-elevated p-4 sm:p-6"
                >
                    {/* Form header with user avatar */}
                    <div className="flex items-center gap-2.5 mb-4">
                        <Avatar name={user.first_name} size="sm" />
                        <h4 className="text-sm font-medium text-foreground">Add a reply</h4>
                    </div>

                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full rounded-lg border border-border bg-bg-primary px-3 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none resize-y min-h-[100px] mb-3 placeholder:text-text-muted"
                        placeholder="Write your reply..."
                        required
                    />

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isReplying || !content.trim()}
                            className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors disabled:opacity-50"
                        >
                            {isReplying && <Loader2 className="h-4 w-4 animate-spin" />}
                            Post Reply
                        </button>
                    </div>
                </form>
            ) : (
                <div className="rounded-xl border border-border bg-bg-elevated p-6 text-center">
                    <MessageCircle className="h-8 w-8 text-text-muted mx-auto mb-3 opacity-50" />
                    <p className="text-sm text-text-secondary mb-4">
                        Sign in to join the conversation
                    </p>
                    <Link
                        href="/login"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
                    >
                        Sign In
                    </Link>
                </div>
            )}
        </div>
    );
}