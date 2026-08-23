import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CountUp from "@/components/CountUp";
import { ShieldCheck, Eye, Globe } from "lucide-react";

const values = [
  { icon: Eye, title: "Visibility first", desc: "Every shipment update is logged the moment it happens, not batched or delayed." },
  { icon: ShieldCheck, title: "No accounts required", desc: "Customers shouldn't need to sign up just to know where their package is." },
  { icon: Globe, title: "Built for global scale", desc: "Designed around real international routes, carriers, and facilities." },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          eyebrow="About Waybound"
          title="Logistics you can actually see"
          subtitle="Waybound started with a simple frustration: shipment tracking pages that show a status from three days ago. We built the opposite."
        />

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="font-display text-3xl font-semibold text-navy"><CountUp target={100000} suffix="+" /></p>
              <p className="mt-1 text-xs uppercase tracking-wide text-navy/40">Shipments Delivered</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-navy"><CountUp target={50} suffix="+" /></p>
              <p className="mt-1 text-xs uppercase tracking-wide text-navy/40">Countries Served</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-navy"><CountUp target={99} suffix="%" /></p>
              <p className="mt-1 text-xs uppercase tracking-wide text-navy/40">On-Time Delivery</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-navy">Our story</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/65">
              Waybound was founded to solve a problem familiar to anyone who has shipped or received a package: tracking pages that lag reality by days, and support lines that can only tell you what the page already says. We rebuilt the process from the ground up so that when a package moves, the tracking page moves with it.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/65">
              Today, Waybound handles everything from single parcels to commercial freight, across international borders, with the same commitment: if it happened to your shipment, it&apos;s on your tracking page within moments.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-navy">What we value</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="rounded-2xl border border-navy/10 bg-offwhite p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-navy">{v.title}</h3>
                    <p className="mt-2 text-sm text-navy/55">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}