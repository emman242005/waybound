import { createClient as createServerClient } from '@/lib/supabase/server'
import { createClient as createBrowserClient } from '@/lib/supabase/client'
import { generateTrackingNumber } from '@/lib/tracking-number'
import type {
  Shipment,
  ShipmentWithEvents,
  ShipmentStats,
  NewShipmentInput,
} from '@/types/shipment'
import type { ShipmentStatus } from '@/lib/status'

// ---------- PUBLIC: used by the customer tracking page (Server Component) ----------

export async function getShipmentByTrackingNumber(
  trackingNumber: string
): Promise<ShipmentWithEvents | null> {
  const supabase = await createServerClient()

  const normalized = trackingNumber.trim().toUpperCase()

  const { data: shipment, error } = await supabase
    .from('shipments')
    .select('*')
    .eq('tracking_number', normalized)
    .single()

  if (error || !shipment) return null

  const { data: events } = await supabase
    .from('tracking_events')
    .select('*')
    .eq('shipment_id', shipment.id)
    .order('event_date', { ascending: true })

  return {
    ...(shipment as Shipment),
    tracking_events: events ?? [],
  }
}

// ---------- ADMIN: used inside /admin (Server Components + Server Actions) ----------

export async function getShipmentStats(): Promise<ShipmentStats> {
  const supabase = await createServerClient()

  const { data, error } = await supabase.from('shipments').select('status')

  if (error || !data) {
    return { total: 0, in_transit: 0, delivered: 0, pending: 0, delayed: 0 }
  }

  return {
    total: data.length,
    in_transit: data.filter((s) => s.status === 'in_transit').length,
    delivered: data.filter((s) => s.status === 'delivered').length,
    pending: data.filter((s) => s.status === 'pending').length,
    delayed: data.filter((s) => s.status === 'delayed').length,
  }
}

export async function getAllShipments(searchQuery?: string): Promise<Shipment[]> {
  const supabase = await createServerClient()

  let query = supabase.from('shipments').select('*').order('created_at', { ascending: false })

  if (searchQuery && searchQuery.trim()) {
    const q = searchQuery.trim()
    query = query.or(
      `tracking_number.ilike.%${q}%,customer_name.ilike.%${q}%,customer_email.ilike.%${q}%`
    )
  }

  const { data, error } = await query

  if (error) return []
  return data as Shipment[]
}

export async function getShipmentById(id: string): Promise<ShipmentWithEvents | null> {
  const supabase = await createServerClient()

  const { data: shipment, error } = await supabase
    .from('shipments')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !shipment) return null

  const { data: events } = await supabase
    .from('tracking_events')
    .select('*')
    .eq('shipment_id', id)
    .order('event_date', { ascending: true })

  return {
    ...(shipment as Shipment),
    tracking_events: events ?? [],
  }
}

// ---------- ADMIN: mutations (called from Server Actions, see Step 10) ----------

export async function createShipment(input: NewShipmentInput): Promise<{
  shipment: Shipment | null
  error: string | null
}> {
  const supabase = await createServerClient()

  // Ensure the generated tracking number is actually unique
  let trackingNumber = generateTrackingNumber()
  for (let i = 0; i < 5; i++) {
    const { data: existing } = await supabase
      .from('shipments')
      .select('id')
      .eq('tracking_number', trackingNumber)
      .maybeSingle()
    if (!existing) break
    trackingNumber = generateTrackingNumber()
  }

  const { data, error } = await supabase
    .from('shipments')
    .insert({
      tracking_number: trackingNumber,
      customer_name: input.customer_name,
      customer_email: input.customer_email || null,
      customer_phone: input.customer_phone || null,
      origin: input.origin,
      destination: input.destination,
      current_location: input.current_location,
      status: input.status,
      package_type: input.package_type || null,
      weight: input.weight || null,
      estimated_delivery: input.estimated_delivery || null,
    })
    .select()
    .single()

  if (error || !data) {
    return { shipment: null, error: error?.message ?? 'Failed to create shipment' }
  }

  // Seed the first tracking event so the timeline isn't empty
  await supabase.from('tracking_events').insert({
    shipment_id: data.id,
    status: input.status,
    location: input.current_location,
    description: 'Order received and confirmed.',
  })

  return { shipment: data as Shipment, error: null }
}

export async function updateShipment(
  id: string,
  updates: Partial<Shipment>
): Promise<{ error: string | null }> {
  const supabase = await createServerClient()

  const { error } = await supabase.from('shipments').update(updates).eq('id', id)

  return { error: error?.message ?? null }
}

export async function deleteShipment(id: string): Promise<{ error: string | null }> {
  const supabase = await createServerClient()
  const { error } = await supabase.from('shipments').delete().eq('id', id)
  return { error: error?.message ?? null }
}

export async function addTrackingEvent(
  shipmentId: string,
  event: { status: ShipmentStatus; location: string; description?: string }
): Promise<{ error: string | null }> {
  const supabase = await createServerClient()

  const { error: eventError } = await supabase.from('tracking_events').insert({
    shipment_id: shipmentId,
    status: event.status,
    location: event.location,
    description: event.description || null,
  })

  if (eventError) return { error: eventError.message }

  // Keep the shipment row's status/current_location in sync with the latest event
  const { error: updateError } = await supabase
    .from('shipments')
    .update({ status: event.status, current_location: event.location })
    .eq('id', shipmentId)

  return { error: updateError?.message ?? null }
}

// exported for client components that need a browser-side Supabase instance (e.g. login form)
export { createBrowserClient }