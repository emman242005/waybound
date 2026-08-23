"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Globe2,
  Container,
  Building2,
  Truck,
  Network,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Express Shipping",
    desc: "Fast delivery for time-sensitive packages.",
  },
  {
    icon: Globe2,
    title: "International Shipping",
    desc: "Reliable cross-border shipping solutions.",
  },
  {
    icon: Container,
    title: "Freight & Cargo",
    desc: "Scalable logistics for larger shipments and commercial cargo.",
  },
  {
    icon: Building2,
    title: "Business Logistics",
    desc: "Shipping infrastructure designed for growing businesses.",
  },
  {
    icon: Truck,
    title: "Last-Mile Delivery",
    desc: "Reliable final-mile delivery solutions.",
  },
  {
    icon: Network,
    title: "Global Logistics",
    desc: "End-to-end logistics across multiple regions.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
            What we move
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Services built for every kind of shipment
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-light p-7"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(320px circle at var(--x,50%) var(--y,0%), rgba(212,169,75,0.10), transparent 70%)",
                  }}
                  onMouseMove={(e) => {
                    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                  }}
                />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                <h3 className="relative mt-5 font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/50">
                  {s.desc}
                </p>

                <div className="relative mt-5 h-px w-full bg-white/5">
                  <div className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}