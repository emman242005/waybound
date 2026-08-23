import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackingScanner from "@/components/TrackingScanner";

export default function TrackPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-navy-deep">
        <section className="relative overflow-hidden pb-24 pt-40 sm:pt-48">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(18,35,82,0.9) 0%, rgba(6,13,31,1) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl px-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
              Live shipment tracking
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Track Your Shipment
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              Enter your tracking number below to see its current status,
              location, and full shipment history.
            </p>

            <div className="mt-10">
              <TrackingScanner />
            </div>

            <p className="mt-4 font-mono text-xs text-white/30">
              e.g. TRK-2026-849215
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}