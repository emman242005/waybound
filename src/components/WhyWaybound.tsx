"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Gauge, Globe } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Reliable",
    desc: "Shipments handled with consistency and care.",
  },
  {
    icon: Eye,
    title: "Transparent",
    desc: "Clear shipment visibility from pickup to delivery.",
  },
  {
    icon: Gauge,
    title: "Fast",
    desc: "Efficient logistics built around speed.",
  },
  {
    icon: Globe,
    title: "Global",
    desc: "Shipping solutions designed for international movement.",
  },
];

export default function WhyWaybound() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-navy/40">
            Why Waybound
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Built on the fundamentals that matter
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="bg-white p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/55">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}