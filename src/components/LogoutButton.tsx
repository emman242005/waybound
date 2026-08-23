"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full rounded-lg border border-white/10 px-4 py-2.5 text-left text-sm font-medium text-white/60 hover:border-white/25 hover:text-white transition-colors"
    >
      Log Out
    </button>
  );
}