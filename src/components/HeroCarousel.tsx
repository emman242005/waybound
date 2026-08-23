"use client";

import { useEffect, useState } from "react";
import TrackingSearchForm from "@/components/TrackingSearchForm";

const slides = [
  {
    eyebrow: "Manifest No. 2026 — Live Tracking",
    headline: ["Track Your Shipment.", "Every Step. Every Time."],
    subtext:
      "Enter your tracking number and see exactly where your package is, where it's been, and when it'll arrive — updated in real time.",
    visual: "route",
  },
  {
    eyebrow: "Freight & Cargo",
    headline: ["From Warehouse", "to Doorstep."],
    subtext:
      "Bulk and commercial cargo moved across borders with full chain-of-custody visibility, at every checkpoint.",
    visual: "plane",
  },
  {
    eyebrow: "Live Visibility",
    headline: ["Zero Guesswork.", "Just Answers."],
    subtext:
      "No accounts, no app downloads. Just your tracking number and a clear picture of where things stand.",
    visual: "pulse",
  },
] as const;

function RouteVisual() {
  return (
    <div className="relative mt-10 h-16 w-full max-w-md overflow-hidden">
      <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 animate-dash" />
      <div className="animate-truck absolute top-1/2 -translate-y-1/2">
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
          <rect x="1" y="6" width="18" height="11" rx="1.5" fill="#FFB020" />
          <path d="M19 10h8l6 5v2h-14z" fill="#FFB020" fillOpacity="0.85" />
          <circle cx="9" cy="19" r="3" fill="#0B1220" />
          <circle cx="27" cy="19" r="3" fill="#0B1220" />
        </svg>
      </div>
    </div>
  );
}

function PlaneVisual() {
  return (
    <div className="relative mt-10 h-16 w-full max-w-md overflow-hidden">
      <div className="animate-plane absolute">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M29 16L4 8l3 8-3 8 25-8z"
            fill="#FFB020"
          />
        </svg>
      </div>
    </div>
  );
}

function PulseVisual() {
  return (
    <div className="relative mt-10 flex h-16 w-full max-w-md items-center">
      <div className="relative h-3 w-3 rounded-full bg-amber">
        <span className="absolute inset-0 rounded-full bg-amber animate-pulse-ring" />
      </div>
      <span className="ml-3 font-mono text-xs text-paper/60">
        Douala Distribution Facility — Live
      </span>
    </div>
  );
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[active];

  return (
    <div>
      <div className="relative min-h-[280px]">
        {slides.map((s, i) => (
          <div key={i} className={`hero-slide ${i === active ? "is-active" : ""}`}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              {s.eyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {s.headline[0]}
              <br />
              {s.headline[1]}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-paper/70">{s.subtext}</p>
            {s.visual === "route" && <RouteVisual />}
            {s.visual === "plane" && <PlaneVisual />}
            {s.visual === "pulse" && <PulseVisual />}
          </div>
        ))}
      </div>

      <div id="track" className="mt-10 max-w-xl">
        <TrackingSearchForm size="large" />
        <p className="mt-3 font-mono text-xs text-paper/40">e.g. TRK-2026-849215</p>
      </div>

      <div className="mt-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-8 bg-amber" : "w-4 bg-paper/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
