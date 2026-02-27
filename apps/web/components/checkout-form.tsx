"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Loader2, Lock, Shield, CreditCard } from "lucide-react";

interface CheckoutFormProps {
  amount: number;
  currency: string;
  orderId: number;
  onSuccess: (orderId: number) => void;
  onError: (message: string) => void;
}

export function CheckoutForm({
  amount,
  currency,
  orderId,
  onSuccess,
  onError,
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
  }).format(amount / 100);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success?order_id=${orderId}`,
      },
      redirect: "if_required",
    });

    if (error) {
      onError(error.message ?? "Payment failed");
      setIsProcessing(false);
    } else {
      onSuccess(orderId);
    }
  }

  return (
    <div className="space-y-5">
      {/* Order summary */}
      <div className="rounded-xl border border-border p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-secondary">Total</span>
          <span className="text-xl font-bold text-foreground">
            {formattedAmount}
          </span>
        </div>
      </div>

      {/* Payment form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <PaymentElement
          options={{
            layout: {
              type: "tabs",
              defaultCollapsed: false,
            },
          }}
        />

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover disabled:opacity-50 transition-all flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing payment...
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" />
              Pay {formattedAmount}
            </>
          )}
        </button>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-text-muted">
            <Shield className="h-3.5 w-3.5 text-green-500" />
            Encrypted &amp; secure
          </span>
          <span className="flex items-center gap-1.5 text-xs text-text-muted">
            <CreditCard className="h-3.5 w-3.5" />
            Powered by Stripe
          </span>
        </div>
      </form>
    </div>
  );
}
