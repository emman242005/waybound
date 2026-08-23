// Generates tracking numbers like TRK-2026-849215
export function generateTrackingNumber(): string {
  const year = new Date().getFullYear()
  const random = Math.floor(100000 + Math.random() * 900000) // 6 digits
  return `TRK-${year}-${random}`
}