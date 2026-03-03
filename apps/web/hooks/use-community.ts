"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { api } from "@/lib/api";
import type { Space, Thread, Reply, Reaction } from "@repo/shared/types";

export function usePublicSpaces() {
  return useQuery({
    queryKey: ["public-spaces"],
    queryFn: async () => {
      const { data } = await api.get("/api/p/community/spaces");
      return data.data as Space[];
    },
  });
}

export function usePublicSpace(slug: string) {
  return useQuery({
    queryKey: ["public-spaces", slug],
    queryFn: async () => {
      const { data } = await api.get(`/api/p/community/spaces/${slug}`);
      return data.data as Space;
    },
    enabled: !!slug,
  });
}

// --- Threads ---

export function useThreads(spaceId?: number, page = 1) {
  return useQuery({
    queryKey: ["community", "space", spaceId, "threads", { page }],
    queryFn: async () => {
      const { data } = await api.get(`/api/community/spaces/${spaceId}/threads?page=${page}&page_size=20`);
      return data as { data: Thread[]; meta: { total: number; page: number; pages: number } };
    },
    enabled: !!spaceId,
  });
}

export function useThread(threadId?: number) {
  return useQuery({
    queryKey: ["community", "thread", threadId],
    queryFn: async () => {
      const { data } = await api.get(`/api/community/threads/${threadId}`);
      return data.data as Thread;
    },
    enabled: !!threadId,
  });
}

export function useCreateThread() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ spaceId, ...body }: Partial<Thread> & { spaceId: number }) => {
      const { data } = await api.post(`/api/community/spaces/${spaceId}/threads`, body);
      return data.data as Thread;
    },
    onSuccess: (_d, vars) => {
      qc.invalidateQueries({ queryKey: ["community", "space", vars.spaceId, "threads"] });
      toast.success("Thread posted successfully");
    },
    onError: () => toast.error("Failed to post thread"),
  });
}

export function useCreateReply() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ threadId, ...body }: Partial<Reply> & { threadId: number }) => {
      const { data } = await api.post(`/api/community/threads/${threadId}/replies`, body);
      return data.data as Reply;
    },
    onSuccess: (_d, vars) => {
      qc.invalidateQueries({ queryKey: ["community", "thread", vars.threadId] });
      toast.success("Reply posted successfully");
    },
    onError: () => toast.error("Failed to post reply"),
  });
}

export function useToggleReaction() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (body: { reactable_type: string; reactable_id: number; type: string }) => {
      const { data } = await api.post(`/api/community/reactions`, body);
      return data as { action: string; data?: Reaction };
    },
    onSuccess: (_d, vars) => {
      if (vars.reactable_type === "thread") {
        qc.invalidateQueries({ queryKey: ["community", "thread", vars.reactable_id] });
      } else {
        // Broad invalidation, or thread id can be passed if we want to be specific
        qc.invalidateQueries({ queryKey: ["community", "thread"] });
      }
    },
  });
}
