import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ShoppingCart, Factory, Store, Package } from "lucide-react";

const solutions = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Reliable fulfillment and tracking infrastructure for online stores shipping directly to customers.",
  },
  {
    icon: Factory,
    title: "Manufacturers",
    desc: "Freight and cargo solutions for moving raw materials and finished goods at scale.",
  },
  {
    icon: Store,
    title: "Retailers",
    desc: "Consistent last-mile delivery that keeps shelves stocked and customers informed.",
  },
  {
    icon: Package,
    title: "Individuals",
    desc: "Simple, trackable shipping for one-off packages, gifts, and personal freight.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          eyebrow="Solutions"
          title="Built for how you ship"
          subtitle="Whether you're a growing e-commerce brand or a manufacturer moving freight across borders, Waybound adapts to your shipping profile."
        />

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl border border-navy/10 bg-offwhite p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h2 className="mt-5 font-display text-lg font-semibold text-navy">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}