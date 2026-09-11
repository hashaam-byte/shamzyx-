import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import SignOutButton from "@/components/admin/SignOutButton";

const SECTIONS = [
  { href: "/admin/stack", label: "Stack", desc: "Add, edit, or remove tech stack items" },
  { href: "/admin/journey", label: "Journey", desc: "Manage your timeline entries" },
  { href: "/admin/messages", label: "Messages", desc: "View contact form submissions" },
  // Projects management intentionally held off for now — see note in dashboard body
];

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen px-6 sm:px-16 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="text-purple text-xs tracking-widest mb-2 font-mono">ADMIN</div>
          <h1 className="font-extrabold text-3xl">Dashboard</h1>
        </div>
        <SignOutButton />
      </div>

      <p className="text-text-dim text-sm max-w-md mb-10">
        Signed in as {user.email}. Projects management is intentionally on
        hold until the project content itself is finalized.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="bg-code-panel border border-panel-border rounded-lg p-5 hover:border-purple/40 transition-colors"
          >
            <div className="font-extrabold text-lg mb-1.5">{section.label}</div>
            <p className="text-text-dim text-xs leading-relaxed">{section.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
