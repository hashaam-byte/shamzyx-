"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// ─────────────────────────────────────────────
// Server Actions — run only on the server, called
// directly as a <form action={...}>. No separate
// API route needed, and the RLS policies from
// schema.sql still apply (these only succeed
// because the request carries an authenticated
// admin session via the cookie).
// ─────────────────────────────────────────────

export async function addStackItem(formData: FormData) {
  const supabase = await createClient();
  const name = (formData.get("name") as string)?.trim();
  const icon = (formData.get("icon") as string)?.trim() ?? "";
  const sortOrder = Number(formData.get("sort_order")) || 0;

  if (!name) return;

  await supabase.from("stack_items").insert({ name, icon, sort_order: sortOrder });

  revalidatePath("/admin/stack");
  revalidatePath("/about");
}

export async function updateStackItem(id: string, formData: FormData) {
  const supabase = await createClient();
  const name = (formData.get("name") as string)?.trim();
  const icon = (formData.get("icon") as string)?.trim() ?? "";
  const sortOrder = Number(formData.get("sort_order")) || 0;

  if (!name) return;

  await supabase.from("stack_items").update({ name, icon, sort_order: sortOrder }).eq("id", id);

  revalidatePath("/admin/stack");
  revalidatePath("/about");
}

export async function deleteStackItem(id: string) {
  const supabase = await createClient();
  await supabase.from("stack_items").delete().eq("id", id);

  revalidatePath("/admin/stack");
  revalidatePath("/about");
}
