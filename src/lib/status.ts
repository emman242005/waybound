export type ShipmentStatus =
  | "pending"
  | "processing"
  | "picked_up"
  | "in_transit"
  | "arrived_at_facility"
  | "out_for_delivery"
  | "delivered"
  | "delayed"
  | "cancelled";

export interface StatusConfig {
  label: string;
  description: string;
  timelinePosition: number | null;
  badgeClass: string;
  dotClass: string;
}

export const STATUS_CONFIG: Record<ShipmentStatus, StatusConfig> = {
  pending: {
    label: "Order Received",
    description: "Order received and confirmed.",
    timelinePosition: 0,
    badgeClass: "bg-white/5 text-white/70 border-white/15",
    dotClass: "bg-white/40",
  },
  processing: {
    label: "Processing",
    description: "Shipment is being processed.",
    timelinePosition: 1,
    badgeClass: "bg-gold/10 text-gold border-gold/25",
    dotClass: "bg-gold",
  },
  picked_up: {
    label: "Package Picked Up",
    description: "Package picked up from sender.",
    timelinePosition: 1,
    badgeClass: "bg-gold/10 text-gold border-gold/25",
    dotClass: "bg-gold",
  },
  in_transit: {
    label: "In Transit",
    description: "Package is on the move.",
    timelinePosition: 2,
    badgeClass: "bg-blue-400/10 text-blue-300 border-blue-400/25",
    dotClass: "bg-blue-400",
  },
  arrived_at_facility: {
    label: "Arrived at Facility",
    description: "Package arrived at a facility.",
    timelinePosition: 3,
    badgeClass: "bg-blue-400/10 text-blue-300 border-blue-400/25",
    dotClass: "bg-blue-400",
  },
  out_for_delivery: {
    label: "Out for Delivery",
    description: "Package is out for delivery.",
    timelinePosition: 4,
    badgeClass: "bg-violet-400/10 text-violet-300 border-violet-400/25",
    dotClass: "bg-violet-400",
  },
  delivered: {
    label: "Delivered",
    description: "Package has been delivered.",
    timelinePosition: 5,
    badgeClass: "bg-emerald-400/10 text-emerald-300 border-emerald-400/25",
    dotClass: "bg-emerald-400",
  },
  delayed: {
    label: "Delayed",
    description: "Shipment is delayed.",
    timelinePosition: null,
    badgeClass: "bg-red-400/10 text-red-300 border-red-400/25",
    dotClass: "bg-red-400",
  },
  cancelled: {
    label: "Cancelled",
    description: "Shipment has been cancelled.",
    timelinePosition: null,
    badgeClass: "bg-white/5 text-white/40 border-white/10",
    dotClass: "bg-white/30",
  },
};

export const TIMELINE_STEPS: { position: number; label: string }[] = [
  { position: 0, label: "Order Received" },
  { position: 1, label: "Picked Up" },
  { position: 2, label: "In Transit" },
  { position: 3, label: "Arrived at Facility" },
  { position: 4, label: "Out for Delivery" },
  { position: 5, label: "Delivered" },
];

export function getStatusConfig(status: string): StatusConfig {
  return STATUS_CONFIG[status as ShipmentStatus] ?? STATUS_CONFIG.pending;
}

export const ALL_STATUSES = Object.keys(STATUS_CONFIG) as ShipmentStatus[];