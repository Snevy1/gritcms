"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Loader2 } from "@/lib/icons";

export default function PageEditorRedirect() {
  const router = useRouter();
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "new";

  useEffect(() => {
    router.replace(`/builder/${id}`);
  }, [router, id]);

  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <Loader2 className="h-6 w-6 animate-spin text-accent" />
    </div>
  );
}
