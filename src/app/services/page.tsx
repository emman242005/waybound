import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TrackingSearchForm from "@/components/TrackingSearchForm";
import { Zap, Globe2, Container, Building2, Truck, Network } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Express Shipping",
    tagline: "When the delivery date can't move",
    desc: "Priority routing that skips standard queuing at distribution facilities, with a tighter delivery window for time-sensitive packages.",
    points: ["Priority facility routing", "Tighter delivery windows", "Higher-frequency tracking updates"],
  },
  {
    icon: Globe2,
    title: "International Shipping",
    tagline: "Cross-border, without the guesswork",
    desc: "Reliable international shipping with full customs documentation support and visibility at every border checkpoint.",
    points: ["Customs documentation support", "Real-time cross-border status", "Coverage across 50+ countries"],
  },
  {
    icon: Container,
    title: "Freight & Cargo",
    tagline: "Bulk and commercial cargo, fully accountable",
    desc: "For pallets, containers, and commercial-scale shipments, we manage the full chain of custody from origin to final facility.",
    points: ["Facility-to-facility visibility", "Built for recurring shipments", "Scales with volume"],
  },
  {
    icon: Building2,
    title: "Business Logistics",
    tagline: "Shipping infrastructure that scales with you",
    desc: "A logistics backbone designed for growing businesses — from single orders to high-volume fulfillment.",
    points: ["Volume-based pricing available", "Dedicated account visibility", "API-ready for integration"],
  },
  {
    icon: Truck,
    title: "Last-Mile Delivery",
    tagline: "The final, most important mile",
    desc: "Reliable final-mile delivery that gets packages from the local facility to the doorstep, tracked the whole way.",
    points: ["Local facility handoff", "Delivery window notifications", "Proof of delivery on request"],
  },
  {
    icon: Network,
    title: "Global Logistics",
    tagline: "End-to-end, wherever you operate",
    desc: "Full-scope logistics management across multiple regions, unified under a single tracking system.",
    points: ["Multi-region coordination", "Unified tracking across carriers", "Built for enterprise scale"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          eyebrow="What we move"
          title="Services built for every kind of shipment"
          subtitle="From a single express parcel to multi-region freight, every service comes with the same real-time visibility."
        />

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl border border-navy/10 bg-offwhite p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-navy">{s.title}</h2>
                  <p className="mt-1 text-sm font-medium text-navy/50">{s.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-navy/65">{s.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-navy/55">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-navy/10 bg-offwhite">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-display text-2xl font-semibold text-navy">
              Already have a tracking number?
            </h2>
            <div className="mt-6">
              <TrackingSearchFormLight />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Light-background variant of the dark tracking form, inline to avoid a prop-mode split
function TrackingSearchFormLight() {
  return (
    <div className="mx-auto max-w-md">
      <TrackingSearchForm size="compact" />
    </div>
  );
}