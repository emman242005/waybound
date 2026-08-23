"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createShipment,
  updateShipment,
  deleteShipment,
  addTrackingEvent,
} from "@/lib/shipments";
import type { NewShipmentInput } from "@/types/shipment";
import type { ShipmentStatus } from "@/lib/status";

export async function createShipmentAction(formData: FormData) {
  const input: NewShipmentInput = {
    customer_name: String(formData.get("customer_name") || ""),
    customer_email: String(formData.get("customer_email") || ""),
    customer_phone: String(formData.get("customer_phone") || ""),
    origin: String(formData.get("origin") || ""),
    destination: String(formData.get("destination") || ""),
    current_location: String(formData.get("origin") || ""), // starts at origin
    package_type: String(formData.get("package_type") || ""),
    weight: formData.get("weight") ? Number(formData.get("weight")) : undefined,
    estimated_delivery: String(formData.get("estimated_delivery") || "") || undefined,
    status: (String(formData.get("status") || "pending") as ShipmentStatus),
  };

  const { shipment, error } = await createShipment(input);

  if (error || !shipment) {
    throw new Error(error ?? "Failed to create shipment");
  }

  revalidatePath("/admin");
  revalidatePath("/admin/shipments");
  redirect(`/admin/shipments/${shipment.id}`);
}

export async function updateShipmentAction(id: string, formData: FormData) {
  const updates = {
    customer_name: String(formData.get("customer_name") || ""),
    customer_email: String(formData.get("customer_email") || ""),
    customer_phone: String(formData.get("customer_phone") || ""),
    origin: String(formData.get("origin") || ""),
    destination: String(formData.get("destination") || ""),
    current_location: String(formData.get("current_location") || ""),
    package_type: String(formData.get("package_type") || ""),
    weight: formData.get("weight") ? Number(formData.get("weight")) : undefined,
    estimated_delivery: String(formData.get("estimated_delivery") || "") || undefined,
    status: (String(formData.get("status") || "pending") as ShipmentStatus),
  };

  const { error } = await updateShipment(id, updates);
  if (error) throw new Error(error);

  revalidatePath("/admin");
  revalidatePath("/admin/shipments");
  revalidatePath(`/admin/shipments/${id}`);
}

export async function addTrackingEventAction(shipmentId: string, formData: FormData) {
  const status = String(formData.get("status") || "") as ShipmentStatus;
  const location = String(formData.get("location") || "");
  const description = String(formData.get("description") || "");

  const { error } = await addTrackingEvent(shipmentId, { status, location, description });
  if (error) throw new Error(error);

  revalidatePath("/admin");
  revalidatePath(`/admin/shipments/${shipmentId}`);
  revalidatePath("/admin/shipments");
}

export async function deleteShipmentAction(id: string) {
  const { error } = await deleteShipment(id);
  if (error) throw new Error(error);

  revalidatePath("/admin");
  revalidatePath("/admin/shipments");
  redirect("/admin/shipments");
}