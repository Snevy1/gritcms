"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ShoppingBag,
  Check,
  Shield,
  Zap,
  Download,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { usePublicProduct } from "@/hooks/use-commerce";
import { useAuth } from "@/hooks/use-auth";
import { useCreateCheckout, useConfirmCheckout, useCheckoutStatus } from "@/hooks/use-checkout";
import { StripeProvider } from "@/components/stripe-provider";
import { CheckoutForm } from "@/components/checkout-form";
import type { CheckoutResponse, Product, Price, Variant } from "@repo/shared/types";

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
  }).format(amount / 100);
}

const typeLabels: Record<string, string> = {
  digital: "Digital Product",
  physical: "Physical Product",
  course: "Online Course",
  membership: "Membership",
  service: "Service",
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const router = useRouter();
  const { data: product, isLoading, error } = usePublicProduct(slug);
  const { isAuthenticated } = useAuth();
  const { mutate: createCheckout, isPending: checkingOut } = useCreateCheckout();
  const { mutateAsync: confirmCheckout } = useConfirmCheckout();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkoutData, setCheckoutData] = useState<CheckoutResponse | null>(null);
  const [selectedPriceId, setSelectedPriceId] = useState<number | null>(null);
  const [provider, setProvider] = useState<"stripe" | "paypal" | "mpesa">("stripe");
  const [phone, setPhone] = useState("");

  const { data: statusData } = useCheckoutStatus(checkoutData?.order_id ?? null);

  useEffect(() => {
    if (statusData?.status === "paid" && checkoutData?.order_id) {
      toast.success("Payment successful!");
      router.push(`/checkout/success?order_id=${checkoutData.order_id}`);
    }
  }, [statusData?.status, router, checkoutData?.order_id]);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 animate-pulse">
        <div className="h-4 bg-bg-hover rounded w-24 mb-8" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="aspect-square bg-bg-hover rounded-xl" />
          <div className="space-y-4">
            <div className="h-3 bg-bg-hover rounded w-1/4" />
            <div className="h-8 bg-bg-hover rounded w-3/4" />
            <div className="h-4 bg-bg-hover rounded w-full" />
            <div className="h-4 bg-bg-hover rounded w-5/6" />
            <div className="h-12 bg-bg-hover rounded w-full mt-8" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-bg-elevated border border-border">
          <span className="text-2xl text-text-muted">404</span>
        </div>
        <h1 className="text-xl font-semibold text-foreground">Product not found</h1>
        <p className="mt-2 text-sm text-text-muted">
          The product you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
      </div>
    );
  }

  const typedProduct = product as Product;
  const images: string[] = typedProduct.images ?? [];
  const prices: Price[] = typedProduct.prices ?? [];
  const variants: Variant[] = typedProduct.variants ?? [];
  const primaryPrice: Price | undefined = prices[0];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Back */}
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        All products
      </Link>

      <div className={`grid gap-10 ${checkoutData ? "lg:grid-cols-1 max-w-2xl mx-auto" : "lg:grid-cols-2"}`}>
        {/* Images */}
        <div className={checkoutData ? "hidden" : ""}>
          <div className="aspect-square rounded-xl border border-border overflow-hidden bg-bg-elevated">
            {images.length > 0 ? (
              <img
                src={images[selectedImage] ?? images[0]}
                alt={typedProduct.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5">
                <ShoppingBag className="h-20 w-20 text-accent/20" />
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {images.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`h-16 w-16 shrink-0 rounded-lg border overflow-hidden transition-colors ${
                    selectedImage === i ? "border-accent" : "border-border hover:border-accent/40"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${typedProduct.name} ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {typeLabels[typedProduct.type] ?? typedProduct.type}
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight">{typedProduct.name}</h1>

          {/* Price */}
          {primaryPrice && (
            <div className="mt-4">
              <span className="text-3xl font-bold text-foreground">
                {formatPrice(primaryPrice.amount, primaryPrice.currency ?? "USD")}
              </span>
              {primaryPrice.type === "subscription" && (
                <span className="text-lg text-text-muted ml-1">
                  /{primaryPrice.interval ?? "month"}
                </span>
              )}
              {primaryPrice.trial_days > 0 && (
                <span className="ml-3 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  {primaryPrice.trial_days}-day free trial
                </span>
              )}
            </div>
          )}

          {/* Additional prices */}
          {prices.length > 1 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {prices.slice(1).map((price: Price) => (
                <span
                  key={String(price.id)}
                  className="rounded-lg border border-border bg-bg-secondary px-3 py-1.5 text-sm text-text-secondary"
                >
                  {formatPrice(price.amount, price.currency ?? "USD")}
                  {price.type === "subscription" && `/${price.interval ?? "mo"}`}
                </span>
              ))}
            </div>
          )}

          {/* Variants */}
          {variants.length > 0 && (
            <div className="mt-6">
              <label className="text-sm font-medium text-text-secondary mb-2 block">
                Options
              </label>
              <div className="flex flex-wrap gap-2">
                {variants.map((v: Variant) => (
                  <button
                    key={String(v.id)}
                    className="rounded-lg border border-border bg-bg-secondary px-4 py-2 text-sm text-foreground hover:border-accent/40 transition-colors"
                  >
                    {v.name}
                    {v.price_override != null && (
                      <span className="ml-1 text-text-muted">
                        ({formatPrice(v.price_override, primaryPrice?.currency ?? "USD")})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {checkoutData ? (
            <div className="mt-8">
              {checkoutData.provider === "mpesa" ? (
                <div className="rounded-xl border border-border bg-bg-elevated p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Pending Payment</h3>
                  <p className="mt-2 text-text-secondary">{checkoutData.message}</p>
                  <p className="mt-4 text-sm text-text-muted animate-pulse">Waiting for M-Pesa confirmation...</p>
                </div>
              ) : checkoutData.provider === "paypal" ? (
                <div className="rounded-xl border border-border bg-bg-elevated p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Redirecting to PayPal...</h3>
                  <p className="text-text-secondary mb-4">If you are not redirected automatically, click the button below.</p>
                  {checkoutData.approval_url && (
                    
                      href={checkoutData.approval_url}
                      className="inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600 transition-colors"
                    >
                      Continue to PayPal
                    </a>
                  )}
                </div>
              ) : (
                <StripeProvider
                  clientSecret={checkoutData.client_secret!}
                  publishableKey={checkoutData.publishable_key!}
                >
                  <CheckoutForm
                    amount={checkoutData.amount!}
                    currency={checkoutData.currency!}
                    orderId={checkoutData.order_id}
                    onSuccess={async (orderId: number) => {
                      toast.success("Payment successful!");
                      try {
                        await confirmCheckout(orderId);
                      } catch {
                        // Webhook will handle it as fallback
                      }
                      router.push(`/checkout/success?order_id=${orderId}`);
                    }}
                    onError={(msg: string) => {
                      toast.error(msg);
                      setCheckoutData(null);
                    }}
                  />
                </StripeProvider>
              )}
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setProvider("stripe")}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                      provider === "stripe"
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border text-text-secondary hover:border-accent/40"
                    }`}
                  >
                    Card (Stripe)
                  </button>
                  <button
                    onClick={() => setProvider("mpesa")}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                      provider === "mpesa"
                        ? "border-green-500 bg-green-500/10 text-green-500"
                        : "border-border text-text-secondary hover:border-green-500/40"
                    }`}
                  >
                    M-Pesa
                  </button>
                  <button
                    onClick={() => setProvider("paypal")}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                      provider === "paypal"
                        ? "border-blue-500 bg-blue-500/10 text-blue-500"
                        : "border-border text-text-secondary hover:border-blue-500/40"
                    }`}
                  >
                    PayPal
                  </button>
                </div>
              </div>

              {provider === "mpesa" && (
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. 254712345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <p className="mt-1 text-xs text-text-muted">Enter your M-Pesa registered phone number.</p>
                </div>
              )}

              <button
                onClick={() => {
                  if (!isAuthenticated) {
                    window.location.href = `/auth/login?redirect=/products/${slug}`;
                    return;
                  }
                  if (provider === "mpesa" && !phone) {
                    toast.error("Please enter your M-Pesa phone number");
                    return;
                  }
                  createCheckout(
                    {
                      type: "product",
                      product_id: typedProduct.id,
                      price_id: selectedPriceId ?? primaryPrice?.id,
                      provider: provider,
                      phone: provider === "mpesa" ? phone : undefined,
                    },
                    {
                      onSuccess: (data) => {
                        if (data.provider === "paypal" && data.approval_url) {
                          window.location.href = data.approval_url;
                        } else {
                          setCheckoutData(data);
                        }
                      },
                    }
                  );
                }}
                disabled={checkingOut}
                className="w-full rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent/90 disabled:opacity-50 transition-colors"
              >
                {checkingOut
                  ? "Preparing checkout..."
                  : typedProduct.type === "membership"
                  ? "Join Now"
                  : typedProduct.type === "service"
                  ? "Book Now"
                  : "Buy Now"}
              </button>
            </div>
          )}

          {/* Trust signals */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Shield className="h-4 w-4 text-green-400" />
              Secure checkout
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Zap className="h-4 w-4 text-accent" />
              Instant delivery
            </div>
            {typedProduct.type === "digital" && (
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <Download className="h-4 w-4 text-accent" />
                Downloadable files
              </div>
            )}
            {primaryPrice?.type === "subscription" && (
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <RefreshCw className="h-4 w-4 text-accent" />
                Cancel anytime
              </div>
            )}
          </div>

          {/* Description */}
          {typedProduct.description && (
            <div className="mt-8 pt-8 border-t border-border/50">
              <h2 className="text-lg font-semibold text-foreground mb-3">Description</h2>
              <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                {typedProduct.description}
              </div>
            </div>
          )}

          {/* Downloadable files */}
          {typedProduct.downloadable_files && typedProduct.downloadable_files.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border/50">
              <h3 className="text-sm font-semibold text-foreground mb-2">Included Files</h3>
              <div className="space-y-1">
                {typedProduct.downloadable_files.map((file, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Download className="h-3.5 w-3.5 text-accent" />
                    {file.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="mt-12 pt-8 border-t border-border/50">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          All products
        </Link>
      </div>
    </div>
  );
}