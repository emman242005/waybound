"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import RouteBackground from "@/components/RouteBackground";

export default function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -14 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.25"
      )
      .fromTo(
        line1Ref.current,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.15"
      )
      .fromTo(
        line2Ref.current,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.35"
      )
      .fromTo(
        bgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 },
        "-=0.6"
      );
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(18,35,82,0.9) 0%, rgba(6,13,31,1) 70%)",
        }}
      />
      <div ref={bgRef} className="absolute inset-0">
        <RouteBackground />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 sm:pt-40">
        <div ref={logoRef} className="mb-8 flex items-center gap-2.5">
          <Image src="/logo.png" alt="Waybound" width={40} height={40} className="rounded-md" />
          <span className="font-display text-base font-semibold tracking-tight text-white/90">
            Waybound
          </span>
        </div>

        <p
          ref={eyebrowRef}
          className="font-mono text-xs uppercase tracking-[0.35em] text-gold"
        >
          Global Shipping &amp; Logistics
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
          <span ref={line1Ref} className="block overflow-hidden">
            Shipping Without
          </span>
          <span ref={line2Ref} className="block overflow-hidden text-gold">
            Boundaries.
          </span>
        </h1>

        <p ref={subRef} className="mt-7 max-w-xl text-lg leading-relaxed text-white/60">
          Reliable shipping and logistics solutions built to move your packages,
          freight, and business forward â€” anywhere in the world.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/track"
            className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03]"
          >
            Track a Shipment
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* subtle scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/30">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" />
          <circle className="animate-glow" cx="10" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}