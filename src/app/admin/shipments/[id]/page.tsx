import { notFound } from "next/navigation";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import ShipmentForm from "@/components/ShipmentForm";
import AddEventForm from "@/components/AddEventForm";
import DeleteShipmentButton from "@/components/DeleteShipmentButton";
import ShipmentTimeline from "@/components/ShipmentTimeline";
import { getShipmentById } from "@/lib/shipments";
import {
  updateShipmentAction,
  addTrackingEventAction,
  deleteShipmentAction,
} from "@/app/admin/shipments/actions";

export default async function ShipmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shipment = await getShipmentById(id);

  if (!shipment) notFound();

  const boundUpdate = updateShipmentAction.bind(null, id);
  const boundAddEvent = addTrackingEventAction.bind(null, id);
  const boundDelete = deleteShipmentAction.bind(null, id);

  return (
    <div className="max-w-3xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href="/admin/shipments" className="text-sm text-white/35 hover:text-white">
            ← All Shipments
          </Link>
          <h1 className="mt-1 font-mono text-2xl font-semibold tracking-tight text-white">
            {shipment.tracking_number}
          </h1>
        </div>
        <StatusBadge status={shipment.status} />
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-navy-light p-8">
        <h2 className="font-display text-lg font-semibold text-white">Shipment Details</h2>
        <div className="mt-6">
          <ShipmentForm action={boundUpdate} shipment={shipment} submitLabel="Save Changes" />
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-navy-light p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-white">Tracking Events</h2>
          <AddEventForm action={boundAddEvent} />
        </div>
        <div className="mt-6">
          <ShipmentTimeline currentStatus={shipment.status} events={shipment.tracking_events} />
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-red-400/20 bg-navy-light p-8">
        <h2 className="font-display text-lg font-semibold text-red-400">Danger Zone</h2>
        <p className="mt-1 text-sm text-white/40">
          Deleting a shipment is permanent and removes all its tracking events.
        </p>
        <div className="mt-4">
          <DeleteShipmentButton action={boundDelete} />
        </div>
      </div>
    </div>
  );
}