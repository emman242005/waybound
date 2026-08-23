"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    name: "Marcus T.",
    role: "E-commerce Operations Lead",
    text: "Our customer support tickets about \"where's my order\" dropped significantly once we switched to Waybound's tracking.",
  },
  {
    name: "Elena R.",
    role: "Supply Chain Manager",
    text: "The visibility into freight status across facilities has made planning far more predictable for our team.",
  },
  {
    name: "David K.",
    role: "Retail Business Owner",
    text: "Clean tracking experience for our customers, and the admin side makes managing shipments straightforward.",
  },
];

export default function Testimonials() {
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
            Trusted by teams
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Businesses that ship with Waybound
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="rounded-xl border border-navy/10 bg-offwhite p-7"
            >
              <div className="mb-4 flex gap-0.5 text-gold">
                {"★★★★★".split("").map((s, idx) => (
                  <span key={idx} className="text-sm">{s}</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-navy/75">&ldquo;{q.text}&rdquo;</p>
              <p className="mt-5 text-sm font-semibold text-navy">{q.name}</p>
              <p className="text-xs text-navy/40">{q.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}