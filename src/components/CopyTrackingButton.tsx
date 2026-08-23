"use client";

import { useState } from "react";

export default function CopyTrackingButton({
  trackingNumber,
}: {
  trackingNumber: string;
}) {
  const [copied, setCopied] = useState<"number" | "link" | null>(null);

  function copy(text: string, type: "number" | "link") {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1800);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => copy(trackingNumber, "number")}
        className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white/60 hover:border-white/30 hover:text-white transition-colors"
      >
        {copied === "number" ? "Copied ✓" : "Copy tracking number"}
      </button>
      <button
        onClick={() =>
          copy(typeof window !== "undefined" ? window.location.href : "", "link")
        }
        className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white/60 hover:border-white/30 hover:text-white transition-colors"
      >
        {copied === "link" ? "Copied ✓" : "Share tracking link"}
      </button>
      <button
        onClick={() => window.print()}
        className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white/60 hover:border-white/30 hover:text-white transition-colors"
      >
        Print details
      </button>
    </div>
  );
}