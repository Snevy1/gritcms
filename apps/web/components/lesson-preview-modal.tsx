"use client";

import { X } from "lucide-react";
import type { Lesson } from "@repo/shared/types";

function isYouTube(url: string) {
  return /youtube\.com|youtu\.be/.test(url);
}
function isVimeo(url: string) {
  return /vimeo\.com/.test(url);
}
function getYouTubeId(url: string) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return m ? m[1] : "";
}
function getVimeoId(url: string) {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? m[1] : "";
}

interface LessonPreviewModalProps {
  lesson: Lesson;
  open: boolean;
  onClose: () => void;
}

export function LessonPreviewModal({ lesson, open, onClose }: LessonPreviewModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl mx-auto rounded-xl border border-border bg-bg-elevated overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-secondary shrink-0">
          <div>
            <p className="text-xs text-accent font-medium mb-0.5">Free Preview</p>
            <h3 className="text-sm font-semibold text-foreground">{lesson.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-text-muted hover:bg-bg-hover hover:text-foreground transition-colors shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="overflow-y-auto bg-black p-4 sm:p-6 space-y-6 sm:space-y-8 flex-1 min-h-0">
          {!!lesson.video_url && (
            <>
              {lesson.type === "video" && (
                <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-black shadow-lg">
                  {isYouTube(lesson.video_url) ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(lesson.video_url)}?rel=0`}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : isVimeo(lesson.video_url) ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${getVimeoId(lesson.video_url)}`}
                      className="w-full h-full"
                      allowFullScreen
                      allow="autoplay; fullscreen; picture-in-picture"
                    />
                  ) : (
                    <video
                      src={lesson.video_url}
                      controls
                      className="w-full h-full"
                    />
                  )}
                </div>
              )}

              {lesson.type === "audio" && (
                <div className="p-4 sm:p-6 rounded-xl bg-bg-primary border border-border shadow-sm">
                  <audio src={lesson.video_url} controls className="w-full" />
                </div>
              )}

              {lesson.type === "pdf" && (
                <div className="rounded-xl overflow-hidden border border-border shadow-sm min-h-[50vh] sm:min-h-[70vh]">
                  <iframe src={lesson.video_url} className="w-full h-full min-h-[50vh] sm:min-h-[70vh]" />
                </div>
              )}

              {lesson.type === "embed" && (
                <div className="aspect-video rounded-xl overflow-hidden border border-border bg-white shadow-sm">
                  <iframe src={lesson.video_url} className="w-full h-full" allowFullScreen />
                </div>
              )}
            </>
          )}

          {!!lesson.content && (
            <div className="bg-bg-elevated p-4 sm:p-6 rounded-xl border border-border shadow-sm">
              <div
                className="prose prose-sm sm:prose prose-invert max-w-none
                  prose-a:text-accent hover:prose-a:text-accent-hover
                  prose-headings:text-foreground
                  prose-p:text-text-secondary
                  prose-li:text-text-secondary"
                dangerouslySetInnerHTML={{
                  __html:
                    typeof lesson.content === "string"
                      ? lesson.content
                      : JSON.stringify(lesson.content),
                }}
              />
            </div>
          )}

          {!lesson.video_url && !lesson.content && (
            <div className="py-12 flex items-center justify-center text-text-muted">
              <p>No preview content available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
