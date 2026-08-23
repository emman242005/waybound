"use client";

import { motion } from "framer-motion";
import { Package, MapPin, CheckCircle2 } from "lucide-react";

export default function LiveTrackingPreview() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
            See it in action
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A live look at your shipment
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-navy-light"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <Package size={18} className="text-gold" />
              <span className="font-mono text-sm text-white/80">TRK-2026-849215</span>
            </div>
            <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
              In Transit
            </span>
          </div>

          <div className="px-6 py-8 sm:px-8">
            <div className="relative h-1 rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "64%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="h-1 rounded-full bg-gold"
              />
              <motion.div
                initial={{ left: "0%" }}
                whileInView={{ left: "64%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="absolute -top-1.5 h-4 w-4 rounded-full border-2 border-navy-light bg-gold"
              />
            </div>

            <div className="mt-3 flex justify-between font-mono text-xs text-white/40">
              <span>Los Angeles, CA</span>
              <span>New York, NY</span>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-xl bg-white/5 p-4">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="text-sm font-medium text-white">
                  Departed Chicago Distribution Facility
                </p>
                <p className="mt-0.5 font-mono text-xs text-white/40">
                  Today, 10:42 AM
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-start gap-3 rounded-xl p-4 opacity-50">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-white/40" />
              <div>
                <p className="text-sm font-medium text-white/70">
                  Arrived at Chicago Distribution Facility
                </p>
                <p className="mt-0.5 font-mono text-xs text-white/30">
                  Yesterday, 6:15 PM
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}