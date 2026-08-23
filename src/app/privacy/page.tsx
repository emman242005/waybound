import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <PageHero eyebrow="Legal" title="Privacy Policy" />
        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="space-y-8 text-sm leading-relaxed text-navy/65">
            <p className="text-xs text-navy/40">Placeholder policy — replace with your actual legal text before launch.</p>
            <div>
              <h2 className="font-display text-lg font-semibold text-navy">Information We Collect</h2>
              <p className="mt-2">
                We collect shipment details, contact information, and tracking data necessary to provide our shipping and logistics services.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-navy">How We Use Information</h2>
              <p className="mt-2">
                Information is used solely to process, track, and deliver shipments, and to communicate shipment status to customers.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-navy">Data Security</h2>
              <p className="mt-2">
                We implement reasonable technical and organizational measures to protect shipment and customer data from unauthorized access.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-navy">Contact</h2>
              <p className="mt-2">
                Questions about this policy can be sent to support@waybound.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}