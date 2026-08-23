import { getStatusConfig } from "@/lib/status";

export default function StatusBadge({ status }: { status: string }) {
  const config = getStatusConfig(status);
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${config.badgeClass}`}
    >
      <span className={`h-2 w-2 rounded-full ${config.dotClass}`} />
      {config.label}
    </span>
  );
}