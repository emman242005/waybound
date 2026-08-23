import { TIMELINE_STEPS, getStatusConfig } from "@/lib/status";
import type { TrackingEvent } from "@/types/shipment";

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function ShipmentTimeline({
  currentStatus,
  events,
}: {
  currentStatus: string;
  events: TrackingEvent[];
}) {
  const currentPosition = getStatusConfig(currentStatus).timelinePosition ?? 0;

  return (
    <div className="space-y-10">
      <div className="hidden sm:block">
        <div className="flex items-center">
          {TIMELINE_STEPS.map((step, i) => {
            const done = step.position < currentPosition;
            const active = step.position === currentPosition;
            return (
              <div key={step.label} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold ${
                      done
                        ? "border-gold bg-gold text-navy-deep"
                        : active
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-white/15 bg-transparent text-white/25"
                    }`}
                  >
                    {done ? "✓" : active ? "●" : "○"}
                  </div>
                  <span
                    className={`mt-2 max-w-[80px] text-center text-[11px] font-medium ${
                      done || active ? "text-white" : "text-white/30"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < TIMELINE_STEPS.length - 1 && (
                  <div
                    className={`mx-1 h-0.5 flex-1 ${
                      step.position < currentPosition ? "bg-gold" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/35">
          Shipment History
        </p>
        <div className="space-y-0">
          {[...events].reverse().map((event, i) => {
            const config = getStatusConfig(event.status);
            const isLatest = i === 0;
            return (
              <div key={event.id} className="relative flex gap-4 pb-8 last:pb-0">
                {i !== events.length - 1 && (
                  <div className="absolute left-[7px] top-4 h-full w-0.5 bg-white/10" />
                )}
                <div
                  className={`relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 ${
                    isLatest ? `${config.dotClass} border-transparent` : "border-white/20 bg-navy"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-semibold text-white">
                      {config.label}
                    </span>
                    {isLatest && (
                      <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-white/50">{event.location}</p>
                  <p className="mt-0.5 font-mono text-xs text-white/30">
                    {formatDateTime(event.event_date)}
                  </p>
                  {event.description && (
                    <p className="mt-1 text-sm text-white/60">{event.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}