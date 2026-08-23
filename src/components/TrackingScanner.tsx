"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export default function TrackingScanner() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [scanning, setScanning] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Enter a tracking number to continue.");
      return;
    }
    setError("");
    setScanning(true);
    setTimeout(() => {
      router.push(`/track/${encodeURIComponent(trimmed.toUpperCase())}`);
    }, 900);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-light">
        <div className="flex flex-col gap-3 p-2 sm:flex-row">
          <div className="relative flex flex-1 items-center">
            <Search size={18} className="absolute left-4 text-white/30" />
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter tracking number — e.g. TRK-2026-849215"
              disabled={scanning}
              className="w-full rounded-xl bg-transparent py-4 pl-11 pr-4 font-mono text-sm text-white placeholder:text-white/30 focus:outline-none disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={scanning}
            className="shrink-0 rounded-xl bg-gold px-8 py-4 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
          >
            {scanning ? "Scanning..." : "Track Shipment"}
          </button>
        </div>

        <AnimatePresence>
          {scanning && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
            />
          )}
        </AnimatePresence>
      </div>

      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
    </form>
  );
}