import { createClient } from "@/lib/supabase/server";
import { addStackItem, updateStackItem, deleteStackItem } from "@/lib/actions/stack";
import Link from "next/link";

export const dynamic = "force-dynamic"; // admin always shows live data, never cached

export default async function AdminStackPage() {
  const supabase = await createClient();
  const { data: stack } = await supabase
    .from("stack_items")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div className="min-h-screen px-6 sm:px-16 py-16">
      <Link href="/admin" className="text-xs text-text-dim hover:text-white font-mono">
        ← Dashboard
      </Link>
      <h1 className="font-extrabold text-3xl mt-3 mb-10">Manage Stack</h1>

      {/* Add new */}
      <form
        action={addStackItem}
        className="flex flex-wrap items-end gap-3 mb-10 bg-code-panel border border-panel-border rounded-lg p-5"
      >
        <div className="flex flex-col gap-1 flex-1 min-w-[160px]">
          <label className="text-[10px] text-text-mute font-mono">NAME</label>
          <input
            name="name"
            placeholder="e.g. Next.js"
            required
            className="bg-bg border border-panel-border rounded px-3 py-2 text-sm focus:outline-none focus:border-purple"
          />
        </div>
        <div className="flex flex-col gap-1 w-28">
          <label className="text-[10px] text-text-mute font-mono">ICON</label>
          <input
            name="icon"
            placeholder="N or ⚛"
            className="bg-bg border border-panel-border rounded px-3 py-2 text-sm focus:outline-none focus:border-purple"
          />
        </div>
        <div className="flex flex-col gap-1 w-24">
          <label className="text-[10px] text-text-mute font-mono">ORDER</label>
          <input
            name="sort_order"
            type="number"
            defaultValue={stack?.length ?? 0}
            className="bg-bg border border-panel-border rounded px-3 py-2 text-sm focus:outline-none focus:border-purple"
          />
        </div>
        <button
          type="submit"
          className="border border-purple text-white text-xs tracking-widest px-4 py-2.5 rounded bg-purple/10 hover:bg-purple/20 transition-colors"
        >
          ADD
        </button>
      </form>

      {/* Existing items */}
      <div className="flex flex-col gap-3">
        {(stack ?? []).map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center gap-3 bg-code-panel border border-panel-border rounded-lg p-4"
          >
            <form
              action={updateStackItem.bind(null, item.id)}
              className="flex flex-1 flex-wrap items-center gap-3"
            >
              <input
                name="name"
                defaultValue={item.name}
                className="bg-bg border border-panel-border rounded px-3 py-1.5 text-sm flex-1 min-w-[120px] focus:outline-none focus:border-purple"
              />
              <input
                name="icon"
                defaultValue={item.icon ?? ""}
                className="bg-bg border border-panel-border rounded px-3 py-1.5 text-sm w-20 focus:outline-none focus:border-purple"
              />
              <input
                name="sort_order"
                type="number"
                defaultValue={item.sort_order}
                className="bg-bg border border-panel-border rounded px-3 py-1.5 text-sm w-16 focus:outline-none focus:border-purple"
              />
              <button
                type="submit"
                className="text-xs text-purple hover:text-white border border-panel-border rounded px-3 py-1.5 transition-colors"
              >
                SAVE
              </button>
            </form>
            <form action={deleteStackItem.bind(null, item.id)}>
              <button
                type="submit"
                className="text-xs text-red-400 hover:text-red-300 border border-red-400/30 rounded px-3 py-1.5 transition-colors"
              >
                DELETE
              </button>
            </form>
          </div>
        ))}

        {(!stack || stack.length === 0) && (
          <p className="text-text-mute text-sm">No stack items yet — add one above.</p>
        )}
      </div>
    </div>
  );
}
