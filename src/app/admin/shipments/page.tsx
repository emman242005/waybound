import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import SearchBox from "@/components/SearchBox";
import { getAllShipments } from "@/lib/shipments";

export default async function ShipmentsListPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const shipments = await getAllShipments(q);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-white">Shipments</h1>
          <p className="mt-1 text-sm text-white/40">
            {shipments.length} shipment{shipments.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/admin/shipments/new"
          className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:opacity-90"
        >
          + New Shipment
        </Link>
      </div>

      <div className="mt-6">
        <SearchBox />
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-navy-light">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-left text-xs uppercase tracking-wide text-white/35">
              <th className="px-5 py-3 font-medium">Tracking #</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Route</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {shipments.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-white/35">
                  No shipments found.
                </td>
              </tr>
            ) : (
              shipments.map((s) => (
                <tr key={s.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                  <td className="px-5 py-3">
                    <Link
                      href={`/admin/shipments/${s.id}`}
                      className="font-mono text-xs font-medium text-white hover:text-gold"
                    >
                      {s.tracking_number}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-white/80">{s.customer_name}</td>
                  <td className="px-5 py-3 text-white/50">
                    {s.origin} → {s.destination}
                  </td>
                  <td className="px-5 py-3">
                    <StatusBadge status={s.status} />
                  </td>
                  <td className="px-5 py-3 text-xs text-white/35">
                    {new Date(s.updated_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}