import { ShipmentStatus } from '@/lib/status'

export interface Shipment {
  id: string
  tracking_number: string
  customer_name: string
  customer_email: string | null
  customer_phone: string | null
  origin: string
  destination: string
  current_location: string
  status: ShipmentStatus
  estimated_delivery: string | null // ISO date
  shipment_date: string // ISO date
  package_type: string | null
  weight: number | null
  created_at: string
  updated_at: string
}

export interface TrackingEvent {
  id: string
  shipment_id: string
  status: ShipmentStatus
  location: string
  description: string | null
  event_date: string // ISO timestamp
  created_at: string
}

export interface ShipmentWithEvents extends Shipment {
  tracking_events: TrackingEvent[]
}

export interface ShipmentStats {
  total: number
  in_transit: number
  delivered: number
  pending: number
  delayed: number
}

// Payload shape for the "create shipment" admin form
export interface NewShipmentInput {
  customer_name: string
  customer_email?: string
  customer_phone?: string
  origin: string
  destination: string
  current_location: string
  package_type?: string
  weight?: number
  estimated_delivery?: string
  status: ShipmentStatus
}