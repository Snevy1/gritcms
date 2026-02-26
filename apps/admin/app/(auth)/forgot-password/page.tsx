"use client";

import { useState } from "react";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgotPasswordSchema,
  type ForgotPasswordInput,
} from "@repo/shared/schemas";

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 focus:bg-white/[0.06] transition-all duration-200 text-[15px]";
const errorInputClass =
  "w-full rounded-xl border border-[var(--danger)]/40 bg-[var(--danger)]/[0.04] px-4 py-3.5 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--danger)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--danger)]/20 transition-all duration-200 text-[15px]";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordInput) => {
    setLoading(true);
    try {
      await apiClient.post("/api/auth/forgot-password", data);
      setSent(true);
    } catch {
      setSent(true); // Always show success for security
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel — immersive branding */}
      <div className="hidden lg:flex lg:w-[52%] relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a] via-[#1a1035] to-[#0d0d1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,92,231,0.12),transparent_60%)]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent)]/8 rounded-full blur-[120px] animate-pulse" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/25">
              <span className="text-lg font-bold text-white">G</span>
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              GritCMS
            </span>
          </div>

          <div className="space-y-6 max-w-lg">
            <h1 className="text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Don&apos;t worry,{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-purple-400 bg-clip-text text-transparent">
                we&apos;ve got you
              </span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
              Enter your email and we&apos;ll send you a secure link to reset
              your password and get back into your account.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Secure, encrypted password reset
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 bg-[var(--bg-primary)]">
        <div className="w-full max-w-[420px] space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/25">
              <span className="text-lg font-bold text-white">G</span>
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              GritCMS
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Reset password
            </h2>
            <p className="text-[var(--text-secondary)] text-[15px]">
              Enter your email to receive a reset link
            </p>
          </div>

          {sent ? (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center space-y-5">
              <div className="flex justify-center">
                <div className="h-14 w-14 rounded-2xl bg-[var(--success)]/10 border border-[var(--success)]/20 flex items-center justify-center">
                  <svg
                    className="h-7 w-7 text-[var(--success)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Check your email
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  If an account with that email exists, we&apos;ve sent a
                  password reset link. Check your inbox and spam folder.
                </p>
              </div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium text-sm transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={errors.email ? errorInputClass : inputClass}
                  placeholder="you@example.com"
                  autoFocus
                />
                {errors.email && (
                  <p className="text-xs text-[var(--danger)] mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative w-full rounded-xl bg-[var(--accent)] py-3.5 font-semibold text-white hover:bg-[var(--accent-hover)] disabled:opacity-50 transition-all duration-200 shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30 active:scale-[0.98]"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send reset link"
                )}
              </button>
            </form>
          )}

          <p className="text-center text-sm text-[var(--text-muted)]">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
