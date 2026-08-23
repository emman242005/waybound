"use client";

import { useState } from "react";
import { ALL_STATUSES, getStatusConfig } from "@/lib/status";
import type { Shipment } from "@/types/shipment";

export default function ShipmentForm({
  action,
  shipment,
  submitLabel = "Create Shipment",
}: {
  action: (formData: FormData) => Promise<void>;
  shipment?: Shipment;
  submitLabel?: string;
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setError("");
    try {
      await action(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setPending(false);
    }
  }

  const field =
    "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-gold";
  const label = "mb-1.5 block text-sm font-medium text-white/60";

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label}>Customer Name *</label>
          <input name="customer_name" required defaultValue={shipment?.customer_name} className={field} />
        </div>
        <div>
          <label className={label}>Customer Email</label>
          <input name="customer_email" type="email" defaultValue={shipment?.customer_email ?? ""} className={field} />
        </div>
        <div>
          <label className={label}>Customer Phone</label>
          <input name="customer_phone" defaultValue={shipment?.customer_phone ?? ""} className={field} />
        </div>
        <div>
          <label className={label}>Package Type</label>
          <input
            name="package_type"
            defaultValue={shipment?.package_type ?? ""}
            placeholder="Parcel, Pallet, Envelope..."
            className={field}
          />
        </div>
        <div>
          <label className={label}>Origin *</label>
          <input name="origin" required defaultValue={shipment?.origin} className={field} />
        </div>
        <div>
          <label className={label}>Destination *</label>
          <input name="destination" required defaultValue={shipment?.destination} className={field} />
        </div>

        {shipment && (
          <div>
            <label className={label}>Current Location *</label>
            <input name="current_location" required defaultValue={shipment.current_location} className={field} />
          </div>
        )}

        <div>
          <label className={label}>Weight (kg)</label>
          <input name="weight" type="number" step="0.1" defaultValue={shipment?.weight ?? ""} className={field} />
        </div>
        <div>
          <label className={label}>Estimated Delivery</label>
          <input
            name="estimated_delivery"
            type="date"
            defaultValue={shipment?.estimated_delivery ?? ""}
            className={`${field} [color-scheme:dark]`}
          />
        </div>
        <div>
          <label className={label}>Status *</label>
          <select
            name="status"
            required
            defaultValue={shipment?.status ?? "pending"}
            className={`${field} [color-scheme:dark]`}
          >
            {ALL_STATUSES.map((s) => (
              <option key={s} value={s} className="bg-navy-light">
                {getStatusConfig(s).label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}