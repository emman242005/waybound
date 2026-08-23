"use client";

import { useState } from "react";
import { ALL_STATUSES, getStatusConfig } from "@/lib/status";

export default function AddEventForm({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) {
  const [pending, setPending] = useState(false);
  const [open, setOpen] = useState(false);

  const field =
    "w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-gold [color-scheme:dark]";

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/70 hover:border-white/30 hover:text-white"
      >
        + Add Tracking Event
      </button>
    );
  }

  return (
    <form
      action={async (formData) => {
        setPending(true);
        await action(formData);
        setPending(false);
        setOpen(false);
      }}
      className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-white/50">Status</label>
          <select name="status" required className={field} defaultValue="in_transit">
            {ALL_STATUSES.map((s) => (
              <option key={s} value={s} className="bg-navy-light">
                {getStatusConfig(s).label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-white/50">Location</label>
          <input name="location" required className={field} placeholder="Chicago, IL" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-white/50">Description</label>
        <input name="description" className={field} placeholder="Package departed the origin facility." />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-gold px-4 py-2 text-sm font-medium text-navy-deep hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "Adding..." : "Add Event"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/70"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}