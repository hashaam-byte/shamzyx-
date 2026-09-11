"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function addJourneyPoint(formData: FormData) {
  const supabase = await createClient();
  const label = (formData.get("label") as string)?.trim();
  const title = (formData.get("title") as string)?.trim();
  const description = (formData.get("description") as string)?.trim() ?? "";
  const sortOrder = Number(formData.get("sort_order")) || 0;

  if (!label || !title) return;

  await supabase.from("journey_points").insert({ label, title, description, sort_order: sortOrder });

  revalidatePath("/admin/journey");
  revalidatePath("/journey");
}

export async function updateJourneyPoint(id: string, formData: FormData) {
  const supabase = await createClient();
  const label = (formData.get("label") as string)?.trim();
  const title = (formData.get("title") as string)?.trim();
  const description = (formData.get("description") as string)?.trim() ?? "";
  const sortOrder = Number(formData.get("sort_order")) || 0;

  if (!label || !title) return;

  await supabase
    .from("journey_points")
    .update({ label, title, description, sort_order: sortOrder })
    .eq("id", id);

  revalidatePath("/admin/journey");
  revalidatePath("/journey");
}

export async function deleteJourneyPoint(id: string) {
  const supabase = await createClient();
  await supabase.from("journey_points").delete().eq("id", id);

  revalidatePath("/admin/journey");
  revalidatePath("/journey");
}
