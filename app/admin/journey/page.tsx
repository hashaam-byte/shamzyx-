import { createClient } from "@/lib/supabase/server";
import { addJourneyPoint, updateJourneyPoint, deleteJourneyPoint } from "@/lib/actions/journey";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminJourneyPage() {
  const supabase = await createClient();
  const { data: journey } = await supabase
    .from("journey_points")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div className="min-h-screen px-6 sm:px-16 py-16">
      <Link href="/admin" className="text-xs text-text-dim hover:text-white font-mono">
        ← Dashboard
      </Link>
      <h1 className="font-extrabold text-3xl mt-3 mb-10">Manage Journey</h1>

      {/* Add new */}
      <form
        action={addJourneyPoint}
        className="flex flex-wrap items-end gap-3 mb-10 bg-code-panel border border-panel-border rounded-lg p-5"
      >
        <div className="flex flex-col gap-1 w-32">
          <label className="text-[10px] text-text-mute font-mono">LABEL</label>
          <input
            name="label"
            placeholder="e.g. JSS3"
            required
            className="bg-bg border border-panel-border rounded px-3 py-2 text-sm focus:outline-none focus:border-purple"
          />
        </div>
        <div className="flex flex-col gap-1 w-40">
          <label className="text-[10px] text-text-mute font-mono">TITLE</label>
          <input
            name="title"
            placeholder="e.g. Curiosity"
            required
            className="bg-bg border border-panel-border rounded px-3 py-2 text-sm focus:outline-none focus:border-purple"
          />
        </div>
        <div className="flex flex-col gap-1 flex-1 min-w-[220px]">
          <label className="text-[10px] text-text-mute font-mono">DESCRIPTION</label>
          <input
            name="description"
            placeholder="One sentence about this stage"
            className="bg-bg border border-panel-border rounded px-3 py-2 text-sm focus:outline-none focus:border-purple"
          />
        </div>
        <div className="flex flex-col gap-1 w-24">
          <label className="text-[10px] text-text-mute font-mono">ORDER</label>
          <input
            name="sort_order"
            type="number"
            defaultValue={journey?.length ?? 0}
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

      {/* Existing entries */}
      <div className="flex flex-col gap-3">
        {(journey ?? []).map((point) => (
          <div
            key={point.id}
            className="flex flex-col gap-3 bg-code-panel border border-panel-border rounded-lg p-4"
          >
            <form
              action={updateJourneyPoint.bind(null, point.id)}
              className="flex flex-1 flex-wrap items-center gap-3"
            >
              <input
                name="label"
                defaultValue={point.label}
                className="bg-bg border border-panel-border rounded px-3 py-1.5 text-sm w-28 focus:outline-none focus:border-purple"
              />
              <input
                name="title"
                defaultValue={point.title}
                className="bg-bg border border-panel-border rounded px-3 py-1.5 text-sm w-40 focus:outline-none focus:border-purple"
              />
              <input
                name="description"
                defaultValue={point.description ?? ""}
                className="bg-bg border border-panel-border rounded px-3 py-1.5 text-sm flex-1 min-w-[200px] focus:outline-none focus:border-purple"
              />
              <input
                name="sort_order"
                type="number"
                defaultValue={point.sort_order}
                className="bg-bg border border-panel-border rounded px-3 py-1.5 text-sm w-16 focus:outline-none focus:border-purple"
              />
              <button
                type="submit"
                className="text-xs text-purple hover:text-white border border-panel-border rounded px-3 py-1.5 transition-colors"
              >
                SAVE
              </button>
            </form>
            <form action={deleteJourneyPoint.bind(null, point.id)}>
              <button
                type="submit"
                className="text-xs text-red-400 hover:text-red-300 border border-red-400/30 rounded px-3 py-1.5 transition-colors"
              >
                DELETE
              </button>
            </form>
          </div>
        ))}

        {(!journey || journey.length === 0) && (
          <p className="text-text-mute text-sm">No journey entries yet — add one above.</p>
        )}
      </div>
    </div>
  );
}
