"use client";

import { motion } from "framer-motion";
import { PackagePlus, Truck, MapPin } from "lucide-react";

const steps = [
  {
    icon: PackagePlus,
    title: "Book",
    desc: "Submit your shipment details and we generate a unique tracking number instantly.",
  },
  {
    icon: Truck,
    title: "Ship",
    desc: "Your package moves through pickup, transit, and facility checkpoints.",
  },
  {
    icon: MapPin,
    title: "Track",
    desc: "Watch its journey update live, from origin to your doorstep.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-navy/40">
            The process
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            How it works
          </h2>
        </motion.div>

        <div className="relative mt-16 grid gap-12 sm:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-navy/10 sm:block" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/55">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}