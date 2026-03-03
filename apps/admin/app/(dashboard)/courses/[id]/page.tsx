"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Loader2,
  Plus,
  Trash2,
  Pencil,
  ChevronDown,
  ChevronRight,
  GripVertical,
  Play,
  FileText,
  Music,
  File,
  Code,
  Eye,
  BarChart3,
  Users,
  X,
} from "@/lib/icons";
import { Dropzone, type UploadedFile } from "@/components/ui/dropzone";
import {
  useCourse,
  useUpdateCourse,
  usePublishCourse,
  useCourseAnalytics,
  useCreateModule,
  useUpdateModule,
  useDeleteModule,
  useCreateLesson,
  useUpdateLesson,
  useDeleteLesson,
  useCourseEnrollments,
  useEnrollInCourse,
  useUnenrollContact,
} from "@/hooks/use-courses";
import { useContacts } from "@/hooks/use-contacts";
import type { CourseModule, Lesson } from "@repo/shared/types";

// ---------------------------------------------------------------------------
// Types for local form state
// ---------------------------------------------------------------------------

type Tab = "details" | "curriculum" | "students";

interface ModuleForm {
  title: string;
  description: string;
}

interface LessonForm {
  title: string;
  type: "video" | "text" | "audio" | "pdf" | "embed";
  video_url: string;
  content: string;
  duration_minutes: number;
  is_free_preview: boolean;
}

const emptyModuleForm: ModuleForm = { title: "", description: "" };
const emptyLessonForm: LessonForm = {
  title: "",
  type: "video",
  video_url: "",
  content: "",
  duration_minutes: 0,
  is_free_preview: false,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function lessonIcon(type: Lesson["type"]) {
  switch (type) {
    case "video":
      return <Play className="h-4 w-4" />;
    case "text":
      return <FileText className="h-4 w-4" />;
    case "audio":
      return <Music className="h-4 w-4" />;
    case "pdf":
      return <File className="h-4 w-4" />;
    case "embed":
      return <Code className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
}

function lessonTypeBadge(type: Lesson["type"]) {
  const map: Record<string, string> = {
    video: "bg-accent/10 text-accent",
    text: "bg-success/10 text-success",
    audio: "bg-warning/10 text-warning",
    pdf: "bg-danger/10 text-danger",
    embed: "bg-purple-500/10 text-purple-400",
  };
  return map[type] ?? "bg-bg-elevated text-text-muted";
}

function statusColor(status: string) {
  switch (status) {
    case "published":
      return "bg-success/10 text-success";
    case "archived":
      return "bg-danger/10 text-danger";
    case "draft":
    default:
      return "bg-bg-elevated text-text-muted";
  }
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------

export default function CourseEditorPage() {
  const params = useParams();
  const courseId = Number(params.id);

  // Data fetching
  const { data: course, isLoading } = useCourse(courseId);
  const { data: analytics } = useCourseAnalytics(courseId);

  // Mutations
  const { mutate: updateCourse, isPending: savingCourse } = useUpdateCourse();
  const { mutate: publishCourse, isPending: publishing } = usePublishCourse();
  const { mutate: createModule } = useCreateModule();
  const { mutate: updateModule } = useUpdateModule();
  const { mutate: deleteModule } = useDeleteModule();
  const { mutate: createLesson } = useCreateLesson();
  const { mutate: updateLesson } = useUpdateLesson();
  const { mutate: deleteLesson } = useDeleteLesson();

  // Tab state
  const [activeTab, setActiveTab] = useState<Tab>("details");

  // Details form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [accessType, setAccessType] = useState<"free" | "paid" | "membership">("free");
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [initialized, setInitialized] = useState(false);

  // Curriculum state
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set());
  const [showModuleModal, setShowModuleModal] = useState(false);
  const [editingModuleId, setEditingModuleId] = useState<number | null>(null);
  const [moduleForm, setModuleForm] = useState<ModuleForm>(emptyModuleForm);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState<number | null>(null);
  const [lessonParentModuleId, setLessonParentModuleId] = useState<number | null>(null);
  const [lessonForm, setLessonForm] = useState<LessonForm>(emptyLessonForm);

  // Initialize form from fetched data
  if (course && !initialized) {
    setTitle(course.title ?? "");
    setSlug(course.slug ?? "");
    setDescription(course.description ?? "");
    setShortDescription(course.short_description ?? "");
    setThumbnail(course.thumbnail ?? "");
    setAccessType(course.access_type ?? "free");
    setPrice(course.price ?? 0);
    setCurrency(course.currency ?? "USD");
    setInitialized(true);
  }

  // -------------------------------------------------------------------------
  // Handlers - Details
  // -------------------------------------------------------------------------

  const handleSaveCourse = () => {
    updateCourse({
      id: courseId,
      title,
      slug,
      description,
      short_description: shortDescription,
      thumbnail,
      access_type: accessType,
      price,
      currency,
    });
  };

  const handlePublish = (status: "draft" | "published" | "archived") => {
    publishCourse({ id: courseId, status });
  };

  // -------------------------------------------------------------------------
  // Handlers - Modules
  // -------------------------------------------------------------------------

  const toggleModule = (modId: number) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(modId)) next.delete(modId);
      else next.add(modId);
      return next;
    });
  };

  const openAddModule = () => {
    setModuleForm(emptyModuleForm);
    setEditingModuleId(null);
    setShowModuleModal(true);
  };

  const openEditModule = (mod: CourseModule) => {
    setModuleForm({ title: mod.title, description: mod.description ?? "" });
    setEditingModuleId(mod.id);
    setShowModuleModal(true);
  };

  const handleModuleSubmit = () => {
    if (editingModuleId) {
      updateModule(
        { courseId, modId: editingModuleId, title: moduleForm.title, description: moduleForm.description },
        {
          onSuccess: () => {
            setShowModuleModal(false);
            setEditingModuleId(null);
            setModuleForm(emptyModuleForm);
          },
        }
      );
    } else {
      const sortOrder = (course?.modules?.length ?? 0) + 1;
      createModule(
        { courseId, title: moduleForm.title, description: moduleForm.description, sort_order: sortOrder },
        {
          onSuccess: () => {
            setShowModuleModal(false);
            setModuleForm(emptyModuleForm);
          },
        }
      );
    }
  };

  const handleDeleteModule = (modId: number) => {
    if (confirm("Delete this module and all its lessons?")) {
      deleteModule({ courseId, modId });
    }
  };

  // -------------------------------------------------------------------------
  // Handlers - Lessons
  // -------------------------------------------------------------------------

  const openAddLesson = (modId: number) => {
    setLessonForm(emptyLessonForm);
    setEditingLessonId(null);
    setLessonParentModuleId(modId);
    setShowLessonModal(true);
  };

  const openEditLesson = (lesson: Lesson, modId: number) => {
    setLessonForm({
      title: lesson.title,
      type: lesson.type,
      video_url: lesson.video_url ?? "",
      content: typeof lesson.content === "string" ? lesson.content : JSON.stringify(lesson.content ?? ""),
      duration_minutes: lesson.duration_minutes ?? 0,
      is_free_preview: lesson.is_free_preview ?? false,
    });
    setEditingLessonId(lesson.id);
    setLessonParentModuleId(modId);
    setShowLessonModal(true);
  };

  const handleLessonSubmit = () => {
    if (!lessonParentModuleId) return;
    if (editingLessonId) {
      updateLesson(
        {
          courseId,
          lessonId: editingLessonId,
          title: lessonForm.title,
          type: lessonForm.type,
          video_url: lessonForm.video_url,
          content: lessonForm.content,
          duration_minutes: lessonForm.duration_minutes,
          is_free_preview: lessonForm.is_free_preview,
        },
        {
          onSuccess: () => {
            setShowLessonModal(false);
            setEditingLessonId(null);
            setLessonForm(emptyLessonForm);
          },
        }
      );
    } else {
      const mod = course?.modules?.find((m) => m.id === lessonParentModuleId);
      const sortOrder = (mod?.lessons?.length ?? 0) + 1;
      createLesson(
        {
          courseId,
          modId: lessonParentModuleId,
          title: lessonForm.title,
          type: lessonForm.type,
          video_url: lessonForm.video_url,
          content: lessonForm.content,
          duration_minutes: lessonForm.duration_minutes,
          is_free_preview: lessonForm.is_free_preview,
          sort_order: sortOrder,
        },
        {
          onSuccess: () => {
            setShowLessonModal(false);
            setLessonForm(emptyLessonForm);
          },
        }
      );
    }
  };

  const handleDeleteLesson = (lessonId: number) => {
    if (confirm("Delete this lesson?")) {
      deleteLesson({ courseId, lessonId });
    }
  };

  // -------------------------------------------------------------------------
  // Sorted data
  // -------------------------------------------------------------------------

  const sortedModules = [...(course?.modules ?? [])].sort((a, b) => a.sort_order - b.sort_order);

  // -------------------------------------------------------------------------
  // Loading state
  // -------------------------------------------------------------------------

  if (isLoading) {
    return (
      <div className="flex justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-4">
        <p className="text-text-secondary">Course not found.</p>
        <Link href="/courses" className="text-accent hover:underline text-sm">
          Back to courses
        </Link>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* ================================================================= */}
      {/* HEADER                                                            */}
      {/* ================================================================= */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
        {/* Back + title row */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <Link
            href="/courses"
            className="rounded-lg p-1.5 hover:bg-bg-hover text-text-muted transition-colors shrink-0 mt-0.5"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground break-words leading-tight">
              {course.title}
            </h1>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusColor(course.status)}`}
              >
                {course.status}
              </span>
              <span className="text-text-muted text-xs sm:text-sm">
                {sortedModules.length} module{sortedModules.length !== 1 ? "s" : ""}
                {" / "}
                {sortedModules.reduce((acc, m) => acc + (m.lessons?.length ?? 0), 0)} lesson
                {sortedModules.reduce((acc, m) => acc + (m.lessons?.length ?? 0), 0) !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        {/* Status action buttons — wrap on mobile */}
        <div className="flex items-center gap-2 flex-wrap pl-9 sm:pl-0 sm:shrink-0">
          {course.status === "draft" && (
            <button
              onClick={() => handlePublish("published")}
              disabled={publishing}
              className="flex items-center gap-1.5 rounded-lg border border-success/30 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-success hover:bg-success/10 disabled:opacity-50 transition-colors"
            >
              <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Publish
            </button>
          )}
          {course.status === "published" && (
            <button
              onClick={() => handlePublish("draft")}
              disabled={publishing}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-text-secondary hover:bg-bg-hover disabled:opacity-50 transition-colors"
            >
              Unpublish
            </button>
          )}
          {course.status !== "archived" && (
            <button
              onClick={() => handlePublish("archived")}
              disabled={publishing}
              className="flex items-center gap-1.5 rounded-lg border border-danger/30 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-danger hover:bg-danger/10 disabled:opacity-50 transition-colors"
            >
              Archive
            </button>
          )}
          {course.status === "archived" && (
            <button
              onClick={() => handlePublish("draft")}
              disabled={publishing}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-text-secondary hover:bg-bg-hover disabled:opacity-50 transition-colors"
            >
              Restore to Draft
            </button>
          )}
        </div>
      </div>

      {/* ================================================================= */}
      {/* TABS                                                              */}
      {/* ================================================================= */}
      <div className="border-b border-border overflow-x-auto">
        <nav className="flex gap-4 sm:gap-6 min-w-max">
          {(["details", "curriculum", "students"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-sm font-medium capitalize transition-colors whitespace-nowrap ${
                activeTab === tab ? "text-accent" : "text-text-muted hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-accent" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* ================================================================= */}
      {/* TAB 1: DETAILS                                                    */}
      {/* ================================================================= */}
      {activeTab === "details" && (
        <div className="space-y-6">
          {/* Analytics cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-bg-secondary p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-accent/10 shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-text-muted leading-tight">Total Enrollments</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{analytics?.total_enrollments ?? 0}</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-secondary p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-success/10 shrink-0">
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-success" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-text-muted leading-tight">Completed</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{analytics?.completed_enrollments ?? 0}</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-secondary p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-warning/10 shrink-0">
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-warning" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-text-muted leading-tight">Completion Rate</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">
                    {analytics?.completion_rate != null ? `${Math.round(analytics.completion_rate)}%` : "0%"}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-secondary p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-purple-500/10 shrink-0">
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-text-muted leading-tight">Avg Progress</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">
                    {analytics?.avg_progress != null ? `${Math.round(analytics.avg_progress)}%` : "0%"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course form */}
          <div className="rounded-xl border border-border bg-bg-secondary p-4 sm:p-6 space-y-5">
            <h2 className="text-lg font-semibold text-foreground">Course Details</h2>

            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Course title"
                  className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-text-secondary mb-1">Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="course-slug"
                  className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-text-secondary mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Full course description..."
                  rows={5}
                  className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none resize-y"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-text-secondary mb-1">Short Description</label>
                <input
                  type="text"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  placeholder="A brief summary shown in listings"
                  className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-text-secondary mb-1">Thumbnail</label>
                <Dropzone
                  variant="default"
                  maxFiles={1}
                  maxSize={5 * 1024 * 1024}
                  accept={{ "image/*": [".jpg", ".jpeg", ".png", ".gif", ".webp"] }}
                  value={
                    thumbnail
                      ? [{ url: thumbnail, name: "thumbnail", size: 0, type: "image/jpeg" } as UploadedFile]
                      : []
                  }
                  onFilesChange={(files) => setThumbnail(files[0]?.url || "")}
                  description="Upload a course thumbnail image (max 5MB)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Access Type</label>
                <select
                  value={accessType}
                  onChange={(e) => setAccessType(e.target.value as "free" | "paid" | "membership")}
                  className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                  <option value="membership">Membership</option>
                </select>
              </div>

              {accessType === "paid" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Price</label>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={price}
                      onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                      className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Currency</label>
                    <input
                      type="text"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value.toUpperCase())}
                      placeholder="USD"
                      maxLength={3}
                      className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleSaveCourse}
                disabled={savingCourse || !title.trim()}
                className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-medium text-white hover:bg-accent/90 disabled:opacity-50 transition-colors"
              >
                <Save className="h-4 w-4" />
                {savingCourse ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* TAB 2: CURRICULUM                                                 */}
      {/* ================================================================= */}
      {activeTab === "curriculum" && (
        <div className="space-y-4">
          {/* Curriculum header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-foreground">Curriculum Builder</h2>
              <p className="text-sm text-text-muted mt-0.5">
                Organize your course into modules and lessons.
              </p>
            </div>
            <button
              onClick={openAddModule}
              className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 sm:px-4 text-sm font-medium text-white hover:bg-accent/90 transition-colors shrink-0"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden xs:inline">Add Module</span>
              <span className="xs:hidden">Add</span>
            </button>
          </div>

          {/* Modules list */}
          {sortedModules.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-bg-secondary p-8 sm:p-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <GripVertical className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">No modules yet</h3>
              <p className="text-sm text-text-muted mb-5">
                Start building your curriculum by adding the first module.
              </p>
              <button
                onClick={openAddModule}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Add Module
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedModules.map((mod, modIdx) => {
                const isExpanded = expandedModules.has(mod.id);
                const sortedLessons = [...(mod.lessons ?? [])].sort((a, b) => a.sort_order - b.sort_order);
                const lessonCount = sortedLessons.length;
                const totalDuration = sortedLessons.reduce((acc, l) => acc + (l.duration_minutes ?? 0), 0);

                return (
                  <div key={mod.id} className="rounded-xl border border-border bg-bg-secondary overflow-hidden">
                    {/* Module header */}
                    <div
                      className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 cursor-pointer hover:bg-bg-hover transition-colors"
                      onClick={() => toggleModule(mod.id)}
                    >
                      {/* Chevron */}
                      <div className="flex items-center justify-center text-text-muted shrink-0">
                        <GripVertical className="h-4 w-4 opacity-40 hidden sm:block" />
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </div>

                      {/* Module number badge + title */}
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-accent/10 text-accent text-xs font-bold shrink-0">
                          {modIdx + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">{mod.title}</h3>
                          {mod.description && (
                            <p className="text-xs text-text-muted truncate mt-0.5 hidden sm:block">{mod.description}</p>
                          )}
                        </div>
                      </div>

                      {/* Meta + actions */}
                      <div className="flex items-center gap-1 sm:gap-3 shrink-0">
                        {/* Lesson count — hidden on very small screens */}
                        <span className="text-xs text-text-muted hidden sm:block whitespace-nowrap">
                          {lessonCount} lesson{lessonCount !== 1 ? "s" : ""}
                          {totalDuration > 0 && ` / ${totalDuration} min`}
                        </span>
                        {/* Tiny lesson count pill on mobile */}
                        <span className="text-[10px] bg-bg-elevated text-text-muted rounded-full px-1.5 py-0.5 sm:hidden whitespace-nowrap">
                          {lessonCount}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openEditModule(mod);
                          }}
                          className="rounded-lg p-1.5 text-text-muted hover:bg-bg-elevated hover:text-foreground transition-colors"
                          title="Edit module"
                        >
                          <Pencil className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteModule(mod.id);
                          }}
                          className="rounded-lg p-1.5 text-text-muted hover:bg-danger/10 hover:text-danger transition-colors"
                          title="Delete module"
                        >
                          <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Expanded lessons */}
                    {isExpanded && (
                      <div className="border-t border-border">
                        {sortedLessons.length === 0 ? (
                          <div className="px-4 py-6 text-center text-text-muted text-sm">
                            No lessons in this module yet.
                          </div>
                        ) : (
                          <div className="divide-y divide-border/50">
                            {sortedLessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:pl-14 hover:bg-bg-hover transition-colors group"
                              >
                                {/* Lesson icon */}
                                <div
                                  className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg shrink-0 ${lessonTypeBadge(lesson.type)}`}
                                >
                                  {lessonIcon(lesson.type)}
                                </div>

                                {/* Lesson info */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <p className="font-medium text-foreground text-sm truncate">{lesson.title}</p>
                                    {lesson.is_free_preview && (
                                      <span className="shrink-0 inline-flex items-center rounded-full bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold text-accent uppercase tracking-wide">
                                        Free
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span
                                      className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium capitalize ${lessonTypeBadge(lesson.type)}`}
                                    >
                                      {lesson.type}
                                    </span>
                                    {lesson.duration_minutes > 0 && (
                                      <span className="text-xs text-text-muted">{lesson.duration_minutes} min</span>
                                    )}
                                  </div>
                                </div>

                                {/* Lesson actions — always visible on mobile, hover on desktop */}
                                <div className="flex items-center gap-1 shrink-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                  <button
                                    onClick={() => openEditLesson(lesson, mod.id)}
                                    className="rounded-lg p-1.5 text-text-muted hover:bg-bg-elevated hover:text-foreground transition-colors"
                                    title="Edit lesson"
                                  >
                                    <Pencil className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteLesson(lesson.id)}
                                    className="rounded-lg p-1.5 text-text-muted hover:bg-danger/10 hover:text-danger transition-colors"
                                    title="Delete lesson"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add lesson button */}
                        <div className="border-t border-border/50 px-3 sm:px-4 py-2.5">
                          <button
                            onClick={() => openAddLesson(mod.id)}
                            className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            Add Lesson
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ================================================================= */}
      {/* TAB 3: STUDENTS                                                   */}
      {/* ================================================================= */}
      {activeTab === "students" && (
        <StudentsTab
          courseId={course.id}
          enrollmentCount={course.enrollment_count ?? analytics?.total_enrollments ?? 0}
        />
      )}

      {/* ================================================================= */}
      {/* MODULE MODAL                                                      */}
      {/* ================================================================= */}
      {showModuleModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4">
          <div className="w-full sm:max-w-lg rounded-t-2xl sm:rounded-xl border border-border bg-bg-secondary p-5 sm:p-6 shadow-2xl">
            {/* Drag handle on mobile */}
            <div className="flex justify-center mb-4 sm:hidden">
              <div className="h-1 w-10 rounded-full bg-border" />
            </div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-foreground">
                {editingModuleId ? "Edit Module" : "Add Module"}
              </h2>
              <button
                onClick={() => {
                  setShowModuleModal(false);
                  setEditingModuleId(null);
                  setModuleForm(emptyModuleForm);
                }}
                className="rounded-lg p-1.5 text-text-muted hover:bg-bg-hover transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                <input
                  type="text"
                  value={moduleForm.title}
                  onChange={(e) => setModuleForm({ ...moduleForm, title: e.target.value })}
                  placeholder="Module title"
                  className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Description</label>
                <textarea
                  value={moduleForm.description}
                  onChange={(e) => setModuleForm({ ...moduleForm, description: e.target.value })}
                  placeholder="Brief description of this module (optional)"
                  rows={3}
                  className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none resize-y"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => {
                  setShowModuleModal(false);
                  setEditingModuleId(null);
                  setModuleForm(emptyModuleForm);
                }}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary hover:bg-bg-hover transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleModuleSubmit}
                disabled={!moduleForm.title.trim()}
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 disabled:opacity-50 transition-colors"
              >
                {editingModuleId ? "Update Module" : "Add Module"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* LESSON MODAL                                                      */}
      {/* ================================================================= */}
      {showLessonModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4">
          <div className="w-full sm:max-w-lg rounded-t-2xl sm:rounded-xl border border-border bg-bg-secondary p-5 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Drag handle on mobile */}
            <div className="flex justify-center mb-4 sm:hidden">
              <div className="h-1 w-10 rounded-full bg-border" />
            </div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-foreground">
                {editingLessonId ? "Edit Lesson" : "Add Lesson"}
              </h2>
              <button
                onClick={() => {
                  setShowLessonModal(false);
                  setEditingLessonId(null);
                  setLessonForm(emptyLessonForm);
                }}
                className="rounded-lg p-1.5 text-text-muted hover:bg-bg-hover transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                <input
                  type="text"
                  value={lessonForm.title}
                  onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })}
                  placeholder="Lesson title"
                  className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Type</label>
                <select
                  value={lessonForm.type}
                  onChange={(e) => setLessonForm({ ...lessonForm, type: e.target.value as LessonForm["type"] })}
                  className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="video">Video</option>
                  <option value="text">Text</option>
                  <option value="audio">Audio</option>
                  <option value="pdf">PDF</option>
                  <option value="embed">Embed</option>
                </select>
              </div>

              {editingLessonId && (
                <>
                  <div>
                    {lessonForm.type === "video" && (
                      <>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Video</label>
                        <Dropzone
                          variant="compact"
                          maxFiles={1}
                          maxSize={500 * 1024 * 1024}
                          accept={{ "video/*": [".mp4", ".webm", ".mov"] }}
                          value={
                            lessonForm.video_url
                              ? [{ url: lessonForm.video_url, name: "video", size: 0, type: "video/mp4" } as UploadedFile]
                              : []
                          }
                          onFilesChange={(files) => setLessonForm({ ...lessonForm, video_url: files[0]?.url || "" })}
                          description="Upload lesson video (max 500MB)"
                        />
                      </>
                    )}
                    {lessonForm.type === "pdf" && (
                      <>
                        <label className="block text-sm font-medium text-text-secondary mb-1">PDF File</label>
                        <Dropzone
                          variant="compact"
                          maxFiles={1}
                          maxSize={50 * 1024 * 1024}
                          accept={{ "application/pdf": [".pdf"] }}
                          value={
                            lessonForm.video_url
                              ? [{ url: lessonForm.video_url, name: "document", size: 0, type: "application/pdf" } as UploadedFile]
                              : []
                          }
                          onFilesChange={(files) => setLessonForm({ ...lessonForm, video_url: files[0]?.url || "" })}
                          description="Upload PDF file (max 50MB)"
                        />
                      </>
                    )}
                    {lessonForm.type === "audio" && (
                      <>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Audio File</label>
                        <Dropzone
                          variant="compact"
                          maxFiles={1}
                          maxSize={100 * 1024 * 1024}
                          accept={{ "audio/*": [".mp3", ".wav", ".ogg", ".m4a"] }}
                          value={
                            lessonForm.video_url
                              ? [{ url: lessonForm.video_url, name: "audio", size: 0, type: "audio/mpeg" } as UploadedFile]
                              : []
                          }
                          onFilesChange={(files) => setLessonForm({ ...lessonForm, video_url: files[0]?.url || "" })}
                          description="Upload audio file (max 100MB)"
                        />
                      </>
                    )}
                    {lessonForm.type === "embed" && (
                      <>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Embed URL</label>
                        <input
                          type="url"
                          value={lessonForm.video_url}
                          onChange={(e) => setLessonForm({ ...lessonForm, video_url: e.target.value })}
                          placeholder="https://www.youtube.com/embed/..."
                          className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                        />
                      </>
                    )}

                    <label className="block text-sm font-medium text-text-secondary mb-1 mt-4">Text Content</label>
                    <textarea
                      value={lessonForm.content}
                      onChange={(e) => setLessonForm({ ...lessonForm, content: e.target.value })}
                      placeholder="Add any text reading materials here..."
                      rows={5}
                      className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none resize-y"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Duration (minutes)</label>
                    <input
                      type="number"
                      min={0}
                      value={lessonForm.duration_minutes}
                      onChange={(e) => setLessonForm({ ...lessonForm, duration_minutes: parseInt(e.target.value) || 0 })}
                      className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                </>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setLessonForm({ ...lessonForm, is_free_preview: !lessonForm.is_free_preview })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    lessonForm.is_free_preview ? "bg-accent" : "bg-bg-elevated border border-border"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                      lessonForm.is_free_preview ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <label className="text-sm font-medium text-text-secondary">Free Preview</label>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => {
                  setShowLessonModal(false);
                  setEditingLessonId(null);
                  setLessonForm(emptyLessonForm);
                }}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary hover:bg-bg-hover transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLessonSubmit}
                disabled={!lessonForm.title.trim()}
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 disabled:opacity-50 transition-colors"
              >
                {editingLessonId ? "Update Lesson" : "Add Lesson"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================================================================= */
/* StudentsTab                                                        */
/* ================================================================= */

function StudentsTab({ courseId, enrollmentCount }: { courseId: number; enrollmentCount: number }) {
  const [page, setPage] = useState(1);
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  const { data: enrollmentData, isLoading } = useCourseEnrollments({ courseId, page, pageSize: 20 });
  const { mutate: unenroll } = useUnenrollContact();

  const enrollments = enrollmentData?.data ?? [];
  const meta = enrollmentData?.meta;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-bg-secondary p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-accent/10 shrink-0">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-foreground">Student Enrollments</h2>
              <p className="text-xs sm:text-sm text-text-muted">
                {meta?.total ?? enrollmentCount} student
                {(meta?.total ?? enrollmentCount) !== 1 ? "s" : ""} enrolled
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowEnrollModal(true)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 sm:px-4 text-xs sm:text-sm font-semibold text-white hover:bg-accent-hover transition-colors shrink-0"
          >
            <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Enroll Student</span>
            <span className="xs:hidden">Enroll</span>
          </button>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-accent" />
          </div>
        )}

        {/* Empty state */}
        {!isLoading && enrollments.length === 0 && (
          <div className="rounded-lg border border-border/50 bg-bg-elevated p-8 text-center">
            <Users className="h-10 w-10 text-text-muted mx-auto mb-3" />
            <p className="text-sm text-text-secondary mb-1">No students enrolled yet.</p>
            <p className="text-xs text-text-muted">
              Click &ldquo;Enroll Student&rdquo; to manually add a contact to this course.
            </p>
          </div>
        )}

        {/* Table */}
        {!isLoading && enrollments.length > 0 && (
          <>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-elevated text-left">
                    <th className="px-3 sm:px-4 py-3 font-medium text-text-secondary">Student</th>
                    <th className="px-3 sm:px-4 py-3 font-medium text-text-secondary">Status</th>
                    {/* Progress — hidden on small mobile */}
                    <th className="px-3 sm:px-4 py-3 font-medium text-text-secondary hidden sm:table-cell">Progress</th>
                    {/* Enrolled date — hidden on small mobile */}
                    <th className="px-3 sm:px-4 py-3 font-medium text-text-secondary hidden md:table-cell">Enrolled</th>
                    <th className="px-3 sm:px-4 py-3 font-medium text-text-secondary w-10 sm:w-16" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {enrollments.map((enrollment) => {
                    const contact = enrollment.contact;
                    const name = contact
                      ? `${contact.first_name || ""} ${contact.last_name || ""}`.trim() || contact.email
                      : `Contact #${enrollment.contact_id}`;
                    const email = contact?.email || "";
                    const initials = contact
                      ? `${(contact.first_name || "?")[0]}${(contact.last_name || "?")[0]}`
                      : "?";
                    const progress = enrollment.progress_percentage ?? 0;

                    return (
                      <tr key={enrollment.id} className="hover:bg-bg-hover/50 transition-colors">
                        <td className="px-3 sm:px-4 py-3">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent uppercase shrink-0">
                              {initials}
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium text-foreground text-xs sm:text-sm truncate">{name}</p>
                              {email && <p className="text-xs text-text-muted truncate hidden sm:block">{email}</p>}
                            </div>
                          </div>
                        </td>
                        <td className="px-3 sm:px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-1.5 sm:px-2 py-0.5 text-xs font-medium whitespace-nowrap ${
                              enrollment.status === "active"
                                ? "bg-green-500/10 text-green-600"
                                : enrollment.status === "completed"
                                ? "bg-accent/10 text-accent"
                                : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                            }`}
                          >
                            {enrollment.status}
                          </span>
                        </td>
                        {/* Progress — hidden on small mobile */}
                        <td className="px-3 sm:px-4 py-3 hidden sm:table-cell">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-16 sm:w-20 rounded-full bg-border overflow-hidden">
                              <div
                                className="h-full rounded-full bg-accent transition-all"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                              />
                            </div>
                            <span className="text-xs text-text-muted">{progress}%</span>
                          </div>
                        </td>
                        {/* Enrolled date — hidden on small mobile */}
                        <td className="px-3 sm:px-4 py-3 text-xs text-text-muted whitespace-nowrap hidden md:table-cell">
                          {new Date(enrollment.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-3 sm:px-4 py-3">
                          <button
                            onClick={() => unenroll({ courseId, enrollId: enrollment.id })}
                            className="rounded-lg p-1.5 text-text-muted hover:bg-red-500/10 hover:text-red-500 transition-colors"
                            title="Unenroll"
                          >
                            <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {meta && meta.pages > 1 && (
              <div className="flex items-center justify-between mt-4 gap-2">
                <p className="text-xs text-text-muted">
                  Page {meta.page} of {meta.pages} ({meta.total} total)
                </p>
                <div className="flex gap-1">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page <= 1}
                    className="rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-medium border border-border text-text-secondary hover:bg-bg-hover disabled:opacity-40 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.min(meta.pages, p + 1))}
                    disabled={page >= meta.pages}
                    className="rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-medium border border-border text-text-secondary hover:bg-bg-hover disabled:opacity-40 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Enroll Student Modal */}
      {showEnrollModal && (
        <EnrollStudentModal
          courseId={courseId}
          onClose={() => setShowEnrollModal(false)}
        />
      )}
    </div>
  );
}

/* ================================================================= */
/* EnrollStudentModal                                                  */
/* ================================================================= */

function EnrollStudentModal({ courseId, onClose }: { courseId: number; onClose: () => void }) {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data: contactsData, isLoading: searching } = useContacts({ search, pageSize: 10 });
  const { mutate: enrollContact, isPending: enrolling } = useEnrollInCourse();

  const contacts = contactsData?.data ?? [];

  function handleEnroll() {
    if (!selectedId) return;
    enrollContact({ courseId, contactId: selectedId, source: "admin" }, { onSuccess: () => onClose() });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4">
      <div className="w-full sm:max-w-md rounded-t-2xl sm:rounded-xl border border-border bg-bg-secondary p-5 sm:p-6 shadow-2xl">
        {/* Drag handle on mobile */}
        <div className="flex justify-center mb-4 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-border" />
        </div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-foreground">Enroll Student</h2>
          <button onClick={onClose} className="rounded-lg p-1.5 text-text-muted hover:bg-bg-hover transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedId(null);
          }}
          placeholder="Search contacts by name or email..."
          className="w-full rounded-lg border border-border bg-bg-elevated px-3 py-2.5 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none mb-3"
          autoFocus
        />

        {/* Results */}
        <div className="max-h-56 sm:max-h-60 overflow-y-auto rounded-lg border border-border divide-y divide-border">
          {searching && (
            <div className="flex justify-center py-6">
              <Loader2 className="h-5 w-5 animate-spin text-accent" />
            </div>
          )}
          {!searching && contacts.length === 0 && (
            <div className="py-6 text-center text-sm text-text-muted">
              {search ? "No contacts found." : "Type to search contacts."}
            </div>
          )}
          {!searching &&
            contacts.map((c) => {
              const name = `${c.first_name || ""} ${c.last_name || ""}`.trim() || c.email;
              const selected = selectedId === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedId(selected ? null : c.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors ${
                    selected ? "bg-accent/10" : "hover:bg-bg-hover"
                  }`}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent uppercase shrink-0">
                    {(c.first_name || "?")[0]}
                    {(c.last_name || "?")[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground truncate">{name}</p>
                    <p className="text-xs text-text-muted truncate">{c.email}</p>
                  </div>
                  {selected && (
                    <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary hover:bg-bg-hover transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleEnroll}
            disabled={!selectedId || enrolling}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-50 transition-colors"
          >
            {enrolling ? "Enrolling..." : "Enroll"}
          </button>
        </div>
      </div>
    </div>
  );
}