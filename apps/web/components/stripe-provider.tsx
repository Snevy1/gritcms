"use client";

import { useState, useEffect } from "react";
import { loadStripe, type Stripe, type Appearance } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

let stripePromise: Promise<Stripe | null> | null = null;

function getStripe(publishableKey: string): Promise<Stripe | null> {
  if (!stripePromise) {
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
}

function getAppearance(isDark: boolean): Appearance {
  if (isDark) {
    return {
      theme: "night",
      variables: {
        colorPrimary: "#6c5ce7",
        colorBackground: "#111118",
        colorText: "#e8e8f0",
        colorTextSecondary: "#9090a8",
        colorTextPlaceholder: "#606078",
        colorDanger: "#ef4444",
        fontFamily: "Onest, system-ui, sans-serif",
        fontSizeBase: "15px",
        borderRadius: "10px",
        spacingUnit: "5px",
        spacingGridRow: "18px",
        spacingGridColumn: "16px",
      },
      rules: {
        ".Input": {
          backgroundColor: "#0a0a0f",
          border: "1px solid #2a2a3a",
          boxShadow: "none",
          padding: "12px 14px",
          fontSize: "15px",
          color: "#e8e8f0",
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
          color: "#c8c8d8",
          fontWeight: "500",
          fontSize: "13.5px",
          marginBottom: "6px",
        },
        ".Tab": {
          backgroundColor: "#111118",
          border: "1px solid #2a2a3a",
          color: "#9090a8",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        ".Tab:hover": {
          backgroundColor: "#1a1a24",
          border: "1px solid #3a3a4a",
          color: "#e8e8f0",
        },
        ".Tab--selected": {
          backgroundColor: "#1a1a24",
          border: "1px solid #6c5ce7",
          color: "#e8e8f0",
          boxShadow: "0 0 0 2px rgba(108, 92, 231, 0.15)",
        },
        ".TabIcon--selected": {
          fill: "#6c5ce7",
        },
        ".Block": {
          backgroundColor: "#111118",
          border: "1px solid #2a2a3a",
        },
        ".DropdownItem": {
          color: "#e8e8f0",
        },
        ".DropdownItem--highlight": {
          backgroundColor: "#1a1a24",
        },
      },
    };
  }

  // Light mode
  return {
    theme: "stripe",
    variables: {
      colorPrimary: "#6c5ce7",
      colorBackground: "#ffffff",
      colorText: "#1a1a2e",
      colorTextSecondary: "#495057",
      colorTextPlaceholder: "#868e96",
      colorDanger: "#ef4444",
      fontFamily: "Onest, system-ui, sans-serif",
      fontSizeBase: "15px",
      borderRadius: "10px",
      spacingUnit: "5px",
      spacingGridRow: "18px",
      spacingGridColumn: "16px",
    },
    rules: {
      ".Input": {
        backgroundColor: "#ffffff",
        border: "1px solid #dee2e6",
        boxShadow: "none",
        padding: "12px 14px",
        fontSize: "15px",
        color: "#1a1a2e",
        transition: "border-color 0.15s ease, box-shadow 0.15s ease",
      },
      ".Input:focus": {
        border: "1px solid #6c5ce7",
        boxShadow: "0 0 0 3px rgba(108, 92, 231, 0.1)",
      },
      ".Input:hover": {
        border: "1px solid #adb5bd",
      },
      ".Label": {
        color: "#1a1a2e",
        fontWeight: "500",
        fontSize: "13.5px",
        marginBottom: "6px",
      },
      ".Tab": {
        backgroundColor: "#f8f9fa",
        border: "1px solid #dee2e6",
        color: "#495057",
        padding: "12px 16px",
        fontSize: "14px",
        fontWeight: "500",
      },
      ".Tab:hover": {
        backgroundColor: "#ffffff",
        border: "1px solid #adb5bd",
        color: "#1a1a2e",
      },
      ".Tab--selected": {
        backgroundColor: "#ffffff",
        border: "1px solid #6c5ce7",
        color: "#1a1a2e",
        boxShadow: "0 0 0 2px rgba(108, 92, 231, 0.1)",
      },
      ".TabIcon--selected": {
        fill: "#6c5ce7",
      },
      ".Block": {
        backgroundColor: "#f8f9fa",
        border: "1px solid #dee2e6",
      },
    },
  };
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    getStripe(publishableKey).then(setStripe);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, [publishableKey]);

  if (!stripe) return null;

  return (
    <Elements
      stripe={stripe}
      options={{
        clientSecret,
        appearance: getAppearance(isDark),
      }}
    >
      {children}
    </Elements>
  );
}
