"use client";

import { useState, useEffect } from "react";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

let stripePromise: Promise<Stripe | null> | null = null;

function getStripe(publishableKey: string): Promise<Stripe | null> {
  if (!stripePromise) {
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
}

interface StripeProviderProps {
  clientSecret: string;
  publishableKey: string;
  children: React.ReactNode;
}

export function StripeProvider({
  clientSecret,
  publishableKey,
  children,
}: StripeProviderProps) {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    getStripe(publishableKey).then(setStripe);
  }, [publishableKey]);

  if (!stripe) return null;

  return (
    <Elements
      stripe={stripe}
      options={{
        clientSecret,
        appearance: {
          theme: "night",
          variables: {
            colorPrimary: "#6c5ce7",
            colorBackground: "#22222e",
            colorText: "#e8e8f0",
            colorTextSecondary: "#9090a8",
            colorTextPlaceholder: "#606078",
            colorDanger: "#ef4444",
            fontFamily: "inherit",
            fontSizeBase: "15px",
            borderRadius: "10px",
            spacingUnit: "5px",
            spacingGridRow: "18px",
            spacingGridColumn: "16px",
          },
          rules: {
            ".Input": {
              backgroundColor: "#1a1a24",
              border: "1px solid #2a2a3a",
              boxShadow: "none",
              padding: "12px 14px",
              transition: "border-color 0.15s ease, box-shadow 0.15s ease",
            },
            ".Input:focus": {
              border: "1px solid #6c5ce7",
              boxShadow: "0 0 0 3px rgba(108, 92, 231, 0.15)",
            },
            ".Input:hover": {
              border: "1px solid #3a3a4a",
            },
            ".Label": {
              color: "#e8e8f0",
              fontWeight: "500",
              fontSize: "14px",
              marginBottom: "6px",
            },
            ".Tab": {
              backgroundColor: "#1a1a24",
              border: "1px solid #2a2a3a",
              color: "#9090a8",
              padding: "12px 16px",
            },
            ".Tab:hover": {
              backgroundColor: "#22222e",
              border: "1px solid #3a3a4a",
              color: "#e8e8f0",
            },
            ".Tab--selected": {
              backgroundColor: "#22222e",
              border: "1px solid #6c5ce7",
              color: "#e8e8f0",
              boxShadow: "0 0 0 2px rgba(108, 92, 231, 0.15)",
            },
            ".TabIcon--selected": {
              fill: "#6c5ce7",
            },
            ".Block": {
              backgroundColor: "#1a1a24",
              border: "1px solid #2a2a3a",
            },
          },
        },
      }}
    >
      {children}
    </Elements>
  );
}
