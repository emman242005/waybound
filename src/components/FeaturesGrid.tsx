import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { title: "Real-Time Updates", desc: "Status changes reflect instantly, no refresh needed." },
  { title: "No Account Needed", desc: "Track with just your tracking number, nothing to sign up for." },
  { title: "Secure by Design", desc: "Your shipment data is protected end-to-end." },
  { title: "Mobile-First", desc: "Built to work perfectly on the phone in your pocket." },
];

export default function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/40">
          Why Waybound
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          Built for clarity
        </h2>
      </ScrollReveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <div className="animate-float h-8 w-8 rounded-full bg-amber/20" />
              <h3 className="mt-4 font-display text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
