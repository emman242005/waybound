import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const channels = [
  { label: "Email", value: "support@waybound.com" },
  { label: "Phone", value: "+1 (800) 555-0199" },
  { label: "Head Office", value: "Chicago, IL — United States" },
  { label: "Support Hours", value: "Mon – Sat, 8:00 AM – 7:00 PM CT" },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          eyebrow="Get in touch"
          title="We're here if something looks off"
          subtitle="Question about a shipment, a delay, or setting up a business account — reach out and we'll get back to you."
        />

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Send a message</h2>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/60">Name</label>
                  <input className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/60">Email</label>
                  <input type="email" className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/60">Tracking Number (optional)</label>
                  <input className="w-full rounded-lg border border-navy/15 px-4 py-2.5 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gold" placeholder="TRK-2026-849215" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/60">Message</label>
                  <textarea rows={4} className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" placeholder="How can we help?" />
                </div>
                <button type="submit" className="rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
                  Send Message
                </button>
                <p className="text-xs text-navy/40">
                  This form is a placeholder for now — it doesn&apos;t send yet.
                </p>
              </form>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Other ways to reach us</h2>
              <div className="mt-6 space-y-5">
                {channels.map((c) => (
                  <div key={c.label} className="rounded-xl border border-navy/10 bg-offwhite p-4">
                    <p className="text-xs uppercase tracking-wide text-navy/40">{c.label}</p>
                    <p className="mt-1 text-sm font-medium text-navy">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}