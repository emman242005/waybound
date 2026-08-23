"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingSearchForm({
  size = "large",
}: {
  size?: "large" | "compact";
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Enter a tracking number to continue.");
      return;
    }
    setError("");
    router.push(`/track/${encodeURIComponent(trimmed.toUpperCase())}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex flex-col gap-3 sm:flex-row ${
          size === "large" ? "sm:gap-3" : "sm:gap-2"
        }`}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
          placeholder="TRK-2026-849215"
          className={`w-full rounded-xl border border-white/15 bg-white/5 font-mono text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold ${
            size === "large" ? "px-5 py-4 text-base" : "px-4 py-3 text-sm"
          }`}
        />
        <button
          type="submit"
          className={`shrink-0 rounded-xl bg-gold font-display font-semibold text-navy-deep transition-transform hover:scale-[1.02] active:scale-[0.98] ${
            size === "large" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
          }`}
        >
          Track Shipment
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </form>
  );
}