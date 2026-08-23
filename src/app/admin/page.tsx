import Link from "next/link";
import StatCard from "@/components/StatCard";
import StatusBadge from "@/components/StatusBadge";
import { getShipmentStats, getAllShipments } from "@/lib/shipments";

export default async function AdminDashboardPage() {
  const stats = await getShipmentStats();
  const recent = (await getAllShipments()).slice(0, 5);

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-white">Dashboard</h1>
      <p className="mt-1 text-sm text-white/40">
        Overview of all shipments in the system
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <StatCard label="Total Shipments" value={stats.total} />
        <StatCard label="In Transit" value={stats.in_transit} />
        <StatCard label="Delivered" value={stats.delivered} />
        <StatCard label="Pending" value={stats.pending} />
        <StatCard label="Delayed" value={stats.delayed} accent />
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-white">
            Recent Shipments
          </h2>
          <Link
            href="/admin/shipments"
            className="text-sm font-medium text-gold hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-navy-light">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-left text-xs uppercase tracking-wide text-white/35">
                <th className="px-5 py-3 font-medium">Tracking #</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Route</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recent.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-5 py-8 text-center text-white/35">
                    No shipments yet.{" "}
                    <Link href="/admin/shipments/new" className="text-gold hover:underline">
                      Create one
                    </Link>
                  </td>
                </tr>
              ) : (
                recent.map((s) => (
                  <tr key={s.id} className="border-b border-white/5 last:border-0">
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
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}