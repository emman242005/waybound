"use client";

import { useState } from "react";

export default function DeleteShipmentButton({
  action,
}: {
  action: () => Promise<void>;
}) {
  const [confirming, setConfirming] = useState(false);
  const [pending, setPending] = useState(false);

  if (!confirming) {
    return (
      <button
        onClick={() => setConfirming(true)}
        className="rounded-lg border border-red-400/25 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-400/10"
      >
        Delete Shipment
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border border-red-400/25 bg-red-400/5 p-3">
      <span className="text-sm text-red-300">Delete permanently?</span>
      <button
        onClick={async () => {
          setPending(true);
          await action();
        }}
        disabled={pending}
        className="rounded-md bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600 disabled:opacity-50"
      >
        {pending ? "Deleting..." : "Yes, delete"}
      </button>
      <button
        onClick={() => setConfirming(false)}
        className="rounded-md border border-red-400/25 px-3 py-1.5 text-xs font-medium text-red-300"
      >
        Cancel
      </button>
    </div>
  );
}