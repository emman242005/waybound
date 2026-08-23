export default function StatCard({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-navy-light p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-white/35">
        {label}
      </p>
      <p
        className={`mt-2 font-display text-3xl font-semibold ${
          accent ? "text-red-400" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}