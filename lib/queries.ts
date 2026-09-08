import { createClient } from "@/lib/supabase/server";
import {
  projects as staticProjects,
  stack as staticStack,
  journey as staticJourney,
  type Project,
  type ProjectVertical,
  type StackItem,
  type JourneyPoint,
} from "@/lib/content";

export async function getProjects(): Promise<Project[]> {
  try {
    const supabase = await createClient();
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
        .map((v): ProjectVertical => ({ name: v.name, url: v.url, status: v.status })),
    }));
  } catch (err) {
    console.error("[getProjects] Unexpected error, using static fallback:", err);
    return staticProjects;
  }
}

export async function getStackItems(): Promise<StackItem[]> {
  try {
    const supabase = await createClient();
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
    const supabase = await createClient();
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
