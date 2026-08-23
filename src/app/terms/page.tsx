import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <PageHero eyebrow="Legal" title="Terms & Conditions" />
        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="space-y-8 text-sm leading-relaxed text-navy/65">
            <p className="text-xs text-navy/40">Placeholder terms — replace with your actual legal text before launch.</p>
            <div>
              <h2 className="font-display text-lg font-semibold text-navy">Service Use</h2>
              <p className="mt-2">
                By using Waybound&apos;s tracking and shipping services, you agree to provide accurate shipment and contact information.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-navy">Liability</h2>
              <p className="mt-2">
                Waybound is not liable for delays caused by customs, weather, or other circumstances outside our reasonable control.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-navy">Tracking Accuracy</h2>
              <p className="mt-2">
                While we strive for real-time accuracy, tracking information reflects the most recent status update available at time of viewing.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-navy">Changes to Terms</h2>
              <p className="mt-2">
                These terms may be updated periodically; continued use of our services constitutes acceptance of the current terms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}