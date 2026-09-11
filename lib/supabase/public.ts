import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// ─────────────────────────────────────────────
// For PUBLIC, read-only data ONLY — projects,
// stack, journey, services, site_settings. No
// cookies, no session awareness, safe to call
// during static generation.
//
// This is what lets /about, /projects, /journey
// stay static + revalidate-on-a-timer (ISR)
// instead of becoming fully dynamic on every
// single request. The cookie-based client in
// server.ts is still correct for anything that
// needs to know who's logged in (admin pages,
// admin actions) — this one is deliberately
// "dumber" so public pages can be fast and cached.
// ─────────────────────────────────────────────

export function createClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
