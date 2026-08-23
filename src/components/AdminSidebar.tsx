import Link from "next/link";
import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";

export default function AdminSidebar() {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col justify-between border-r border-white/10 bg-navy-deep p-6">
      <div>
        <Link href="/admin" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Waybound" width={32} height={32} className="rounded-md" />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Waybound
          </span>
        </Link>

        <nav className="mt-10 flex flex-col gap-1 text-sm font-medium">
          <Link
            href="/admin"
            className="rounded-lg px-3 py-2 text-white/60 hover:bg-white/5 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/shipments"
            className="rounded-lg px-3 py-2 text-white/60 hover:bg-white/5 hover:text-white transition-colors"
          >
            Shipments
          </Link>
          <Link
            href="/admin/shipments/new"
            className="rounded-lg px-3 py-2 text-white/60 hover:bg-white/5 hover:text-white transition-colors"
          >
            + New Shipment
          </Link>
        </nav>
      </div>

      <LogoutButton />
    </aside>
  );
}