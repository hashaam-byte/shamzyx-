"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-xs tracking-widest text-text-dim hover:text-white border border-panel-border rounded px-3 py-2 transition-colors"
    >
      SIGN OUT
    </button>
  );
}
