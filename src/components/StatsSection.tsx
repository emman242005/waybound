"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

// Editable placeholders — swap with real Waybound figures when available
const stats = [
  { label: "Countries Served", value: 50, suffix: "+" },
  { label: "Shipments Delivered", value: 100000, suffix: "+" },
  { label: "On-Time Delivery", value: 99, suffix: "%" },
  { label: "Shipment Visibility", value: 24, suffix: "/7" },
];

export default function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-navy py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-xs uppercase tracking-wide text-white/40">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}