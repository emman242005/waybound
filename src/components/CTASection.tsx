"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-28">
      {/* animated glow backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-3xl animate-glow" />
        <svg viewBox="0 0 1000 300" className="absolute inset-0 h-full w-full opacity-40">
          <path
            className="route-line"
            d="M0,200 C200,120 350,260 550,150 C700,70 850,180 1000,100"
            stroke="#D4A94B"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
            Ready when you are
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Wherever you&apos;re going, we&apos;re Waybound.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
            Move your packages, products, and business with a logistics partner
            built for a connected world.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/track"
              className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03]"
            >
              Track a Shipment
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Contact Waybound
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}