import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusBadge from "@/components/StatusBadge";
import ShipmentTimeline from "@/components/ShipmentTimeline";
import CopyTrackingButton from "@/components/CopyTrackingButton";
import TrackingSearchForm from "@/components/TrackingSearchForm";
import { getShipmentByTrackingNumber } from "@/lib/shipments";

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ trackingNumber: string }>;
}) {
  const { trackingNumber } = await params;
  const shipment = await getShipmentByTrackingNumber(trackingNumber);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-navy-deep">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(18,35,82,0.7) 0%, rgba(6,13,31,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-32 sm:pt-40">
          {!shipment ? (
            <div className="rounded-2xl border border-white/10 bg-navy-light p-10 text-center">
              <h1 className="font-display text-2xl font-semibold text-white">
                Shipment Not Found
              </h1>
              <p className="mx-auto mt-3 max-w-md text-white/50">
                We couldn&apos;t find a shipment associated with{" "}
                <span className="font-mono text-white">{trackingNumber}</span>.
                Please check the number and try again.
              </p>
              <div className="mx-auto mt-8 max-w-md">
                <TrackingSearchForm size="compact" />
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                    Tracking Number
                  </p>
                  <h1 className="mt-1 font-mono text-2xl font-semibold tracking-tight text-white">
                    {shipment.tracking_number}
                  </h1>
                </div>
                <StatusBadge status={shipment.status} />
              </div>

              <div className="mt-4">
                <CopyTrackingButton trackingNumber={shipment.tracking_number} />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                {[
                  { label: "Origin", value: shipment.origin },
                  { label: "Destination", value: shipment.destination },
                  { label: "Current Location", value: shipment.current_location },
                  { label: "Package Type", value: shipment.package_type ?? "—" },
                  { label: "Shipment Date", value: formatDate(shipment.shipment_date) },
                  {
                    label: "Estimated Delivery",
                    value: formatDate(shipment.estimated_delivery),
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-navy-light p-4">
                    <p className="text-xs text-white/35">{item.label}</p>
                    <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-navy-light p-6 sm:p-8">
                <ShipmentTimeline
                  currentStatus={shipment.status}
                  events={shipment.tracking_events}
                />
              </div>

              <p className="mt-6 text-center text-xs text-white/25">
                Last updated{" "}
                {new Date(shipment.updated_at).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}