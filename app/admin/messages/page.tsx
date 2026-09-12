import { createClient } from "@/lib/supabase/server";
import { updateMessageStatus, deleteMessage } from "@/lib/actions/messages";
import Link from "next/link";

export const dynamic = "force-dynamic";

const STATUS_STYLES: Record<string, string> = {
  new: "text-purple border-purple/40 bg-purple/10",
  read: "text-text-dim border-panel-border",
  replied: "text-champagne border-champagne/40 bg-champagne/10",
  archived: "text-text-mute border-panel-border",
};

export default async function AdminMessagesPage() {
  const supabase = await createClient();
  const { data: messages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen px-6 sm:px-16 py-16">
      <Link href="/admin" className="text-xs text-text-dim hover:text-white font-mono">
        ← Dashboard
      </Link>
      <h1 className="font-extrabold text-3xl mt-3 mb-2">Messages</h1>
      <p className="text-text-dim text-sm mb-10">
        Submissions from the Contact page land here once the real form is wired up.
      </p>

      <div className="flex flex-col gap-3">
        {(messages ?? []).map((msg) => (
          <div key={msg.id} className="bg-code-panel border border-panel-border rounded-lg p-5">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <div className="text-white text-sm font-semibold">{msg.name}</div>
                <a
                  href={`mailto:${msg.email}`}
                  className="text-text-dim text-xs hover:text-purple transition-colors"
                >
                  {msg.email}
                </a>
              </div>
              <span
                className={`text-[9px] tracking-widest px-2 py-0.5 rounded border shrink-0 ${
                  STATUS_STYLES[msg.status] ?? STATUS_STYLES.new
                }`}
              >
                {msg.status.toUpperCase()}
              </span>
            </div>

            <p className="text-text-dim text-sm leading-relaxed mb-4 whitespace-pre-line">
              {msg.message}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-text-mute text-[10px] font-mono mr-2">
                {new Date(msg.created_at).toLocaleString()}
              </span>

              {msg.status !== "read" && (
                <form action={updateMessageStatus.bind(null, msg.id, "read")}>
                  <button className="text-[10px] tracking-widest border border-panel-border rounded px-2.5 py-1 hover:text-white transition-colors">
                    MARK READ
                  </button>
                </form>
              )}
              {msg.status !== "replied" && (
                <form action={updateMessageStatus.bind(null, msg.id, "replied")}>
                  <button className="text-[10px] tracking-widest border border-champagne/40 text-champagne rounded px-2.5 py-1 hover:bg-champagne/10 transition-colors">
                    MARK REPLIED
                  </button>
                </form>
              )}
              {msg.status !== "archived" && (
                <form action={updateMessageStatus.bind(null, msg.id, "archived")}>
                  <button className="text-[10px] tracking-widest border border-panel-border rounded px-2.5 py-1 hover:text-white transition-colors">
                    ARCHIVE
                  </button>
                </form>
              )}
              <form action={deleteMessage.bind(null, msg.id)}>
                <button className="text-[10px] tracking-widest border border-red-400/30 text-red-400 rounded px-2.5 py-1 hover:text-red-300 transition-colors">
                  DELETE
                </button>
              </form>
            </div>
          </div>
        ))}

        {(!messages || messages.length === 0) && (
          <p className="text-text-mute text-sm">No messages yet.</p>
        )}
      </div>
    </div>
  );
}
