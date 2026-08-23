"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PackageCheck, PackagePlus, Truck, Building2, Bike, CheckCircle2 } from "lucide-react";

const stages = [
  { label: "Order Created", icon: PackagePlus },
  { label: "Picked Up", icon: PackageCheck },
  { label: "In Transit", icon: Truck },
  { label: "Arrived at Hub", icon: Building2 },
  { label: "Out for Delivery", icon: Bike },
  { label: "Delivered", icon: CheckCircle2 },
];

export default function ShipmentJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % stages.length;
      setActiveIndex(i);
    }, 1400);
    return () => clearInterval(interval);
  }, [inView]);

  const progressPercent = (activeIndex / (stages.length - 1)) * 100;

  return (
    <section ref={containerRef} className="bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
            The shipment lifecycle
          </p>
          <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Every shipment, followed step by step
          </h2>
        </motion.div>

        <div className="relative mt-20">
          {/* base line */}
          <div className="absolute left-0 right-0 top-6 h-0.5 bg-white/10" />
          {/* progress line */}
          <motion.div
            className="absolute left-0 top-6 h-0.5 bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          <div className="relative grid grid-cols-3 gap-y-10 sm:grid-cols-6">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const done = i < activeIndex;
              const active = i === activeIndex;
              return (
                <div key={stage.label} className="flex flex-col items-center text-center">
                  <motion.div
                    animate={{
                      scale: active ? 1.15 : 1,
                      backgroundColor: done || active ? "#D4A94B" : "rgba(255,255,255,0.06)",
                      color: done || active ? "#060D1F" : "rgba(255,255,255,0.4)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10"
                  >
                    <Icon size={18} strokeWidth={1.75} />
                    {active && (
                      <span className="absolute inset-0 animate-glow rounded-full ring-2 ring-gold/50" />
                    )}
                  </motion.div>
                  <span
                    className={`mt-3 max-w-[90px] text-xs font-medium transition-colors duration-300 ${
                      done || active ? "text-white" : "text-white/35"
                    }`}
                  >
                    {stage.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}