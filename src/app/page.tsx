import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import LiveTrackingPreview from "@/components/LiveTrackingPreview";
import FeaturesGrid from "@/components/FeaturesGrid";
import GlobalReach from "@/components/GlobalReach";
import WhyWaybound from "@/components/WhyWaybound";
import ShipmentJourney from "@/components/ShipmentJourney";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />

        <StatsSection />
        <HowItWorks />
        <ServicesSection />
        <LiveTrackingPreview />
        <FeaturesGrid />
        <GlobalReach />
        <WhyWaybound />
        <ShipmentJourney />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}