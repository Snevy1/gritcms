"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { usePublicProducts } from "@/hooks/use-commerce";
import type { Product, Price } from "@repo/shared/types";

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
  }).format(amount / 100);
}

const typeLabels: Record<string, string> = {
  digital: "Digital",
  physical: "Physical",
  course: "Course",
  membership: "Membership",
  service: "Service",
};

const typeColors: Record<string, string> = {
  digital: "bg-accent/10 text-accent",
  physical: "bg-orange-500/10 text-orange-400",
  course: "bg-purple-500/10 text-purple-400",
  membership: "bg-green-500/10 text-green-400",
  service: "bg-blue-500/10 text-blue-400",
};

export default function ProductCatalogPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = usePublicProducts({ page, pageSize: 12 });
  const products: Product[] = data?.products ?? [];
  const meta = data?.meta;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Products</h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl mx-auto">
          Browse our collection of digital products, courses, and memberships.
        </p>
      </div>

      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-bg-elevated overflow-hidden animate-pulse"
            >
              <div className="h-48 bg-bg-hover" />
              <div className="p-5 space-y-3">
                <div className="h-3 bg-bg-hover rounded w-1/4" />
                <div className="h-5 bg-bg-hover rounded w-3/4" />
                <div className="h-3 bg-bg-hover rounded w-full" />
                <div className="h-3 bg-bg-hover rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      ) : products.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product: Product) => {
              const firstImage: string | undefined = product.images?.[0];
              const firstPrice: Price | undefined = product.prices?.[0];
              const colorClass = typeColors[product.type] ?? "bg-accent/10 text-accent";

              return (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-bg-elevated overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-bg-hover overflow-hidden">
                    {firstImage ? (
                      <img
                        src={firstImage}
                        alt={product.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5">
                        <ShoppingBag className="h-12 w-12 text-accent/20" />
                      </div>
                    )}
                    {/* Type badge overlaid on image */}
                    <span
                      className={`absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm ${colorClass}`}
                    >
                      {typeLabels[product.type] ?? product.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <h2 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h2>

                    {product.description && (
                      <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed flex-1">
                        {product.description}
                      </p>
                    )}

                    {/* Price row */}
                    <div className="mt-4 flex items-center justify-between gap-2">
                      {firstPrice ? (
                        <span className="text-lg font-bold text-foreground">
                          {formatPrice(firstPrice.amount, firstPrice.currency)}
                          {firstPrice.type === "subscription" && (
                            <span className="text-sm font-normal text-text-muted ml-0.5">
                              /{firstPrice.interval ?? "mo"}
                            </span>
                          )}
                        </span>
                      ) : (
                        <span className="text-sm text-text-muted italic">Contact for pricing</span>
                      )}
                      <span className="shrink-0 text-xs font-medium text-accent group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                        View details
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {meta && meta.pages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="flex items-center gap-1 rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-text-secondary hover:bg-bg-hover hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: meta.pages }).map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = page === pageNum;
                  // Show first, last, current, and neighbours — collapse others to ellipsis
                  const show =
                    pageNum === 1 ||
                    pageNum === meta.pages ||
                    Math.abs(pageNum - page) <= 1;
                  if (!show) {
                    // Only render one ellipsis per gap
                    if (pageNum === 2 || pageNum === meta.pages - 1) {
                      return (
                        <span key={pageNum} className="px-1 text-text-muted text-sm">
                          …
                        </span>
                      );
                    }
                    return null;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`h-8 w-8 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-accent text-white shadow-sm"
                          : "text-text-secondary hover:bg-bg-hover hover:text-foreground"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(meta.pages, p + 1))}
                disabled={page >= meta.pages}
                className="flex items-center gap-1 rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-text-secondary hover:bg-bg-hover hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-24">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-bg-elevated border border-border">
            <ShoppingBag className="h-8 w-8 text-text-muted" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">No products available</h3>
          <p className="mt-1 text-sm text-text-muted">Check back soon for new products.</p>
        </div>
      )}
    </div>
  );
}