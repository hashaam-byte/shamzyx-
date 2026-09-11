import { createClient } from "@/lib/supabase/public";
import {
  projects as staticProjects,
  stack as staticStack,
  journey as staticJourney,
  services as staticServices,
  siteSettings as staticSiteSettings,
  type Project,
  type ProjectVertical,
  type StackItem,
  type JourneyPoint,
  type Service,
  type SiteSettings,
} from "@/lib/content";

// ─────────────────────────────────────────────
// All functions here power PUBLIC pages and use
// the cookie-free public client (lib/supabase/public.ts)
// so these pages can stay static/ISR instead of
// being forced fully dynamic. Admin pages/actions
// use the cookie-based client in server.ts instead,
// since those need to know who's logged in.
// ─────────────────────────────────────────────

export async function getProjects(): Promise<Project[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*, project_verticals(*)")
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("[getProjects] Supabase error, using static fallback:", error.message);
      return staticProjects;
    }
    if (!data || data.length === 0) return staticProjects;

    return data.map((row): Project => ({
      slug: row.slug,
      name: row.name,
      tagline: row.tagline ?? "",
      image: row.image ?? "",
      types: row.types ?? [],
      story: row.story ?? "",
      featured: row.featured ?? false,
      liveUrl: row.live_url ?? undefined,
      verticals: ((row.project_verticals ?? []) as any[])
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((v): ProjectVertical => ({
          name: v.name,
          url: v.url,
          status: v.status,
          image: v.image ?? undefined,
        })),
    }));
  } catch (err) {
    console.error("[getProjects] Unexpected error, using static fallback:", err);
    return staticProjects;
  }
}

export async function getStackItems(): Promise<StackItem[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("stack_items")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("[getStackItems] Supabase error, using static fallback:", error.message);
      return staticStack;
    }
    if (!data || data.length === 0) return staticStack;

    return data.map((row): StackItem => ({ name: row.name, icon: row.icon ?? "" }));
  } catch (err) {
    console.error("[getStackItems] Unexpected error, using static fallback:", err);
    return staticStack;
  }
}

export async function getJourneyPoints(): Promise<JourneyPoint[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("journey_points")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("[getJourneyPoints] Supabase error, using static fallback:", error.message);
      return staticJourney;
    }
    if (!data || data.length === 0) return staticJourney;

    return data.map((row): JourneyPoint => ({
      label: row.label,
      title: row.title,
      description: row.description ?? "",
    }));
  } catch (err) {
    console.error("[getJourneyPoints] Unexpected error, using static fallback:", err);
    return staticJourney;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("[getServices] Supabase error, using static fallback:", error.message);
      return staticServices;
    }
    if (!data || data.length === 0) return staticServices;

    return data.map((row): Service => ({
      title: row.title,
      description: row.description ?? "",
    }));
  } catch (err) {
    console.error("[getServices] Unexpected error, using static fallback:", err);
    return staticServices;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("site_settings")
      .select("*")
      .eq("id", 1)
      .single();

    if (error || !data) {
      if (error) console.error("[getSiteSettings] Supabase error, using static fallback:", error.message);
      return staticSiteSettings;
    }

    return {
      phone: data.phone,
      email: data.email,
      xUrl: data.x_url,
      whatsappUrl: data.whatsapp_url,
      instagramUrl: data.instagram_url,
      githubUrl: data.github_url,
    };
  } catch (err) {
    console.error("[getSiteSettings] Unexpected error, using static fallback:", err);
    return staticSiteSettings;
  }
}
