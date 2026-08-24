import ShipmentForm from "@/components/ShipmentForm";
import { createShipmentAction } from "@/app/admin/(protected)/shipments/actions";

export default function NewShipmentPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-2xl font-semibold text-white">New Shipment</h1>
      <p className="mt-1 text-sm text-white/40">
        A tracking number is generated automatically on save.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-navy-light p-8">
        <ShipmentForm action={createShipmentAction} submitLabel="Create Shipment" />
      </div>
    </div>
  );
}