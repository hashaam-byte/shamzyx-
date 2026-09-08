import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/admin/SignOutButton";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Middleware already handles this redirect in normal use — this is a
  // second, defensive check in case the page is ever reached another way.
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

      <p className="text-text-dim text-sm max-w-md">
        Signed in as {user.email}. Project, stack, journey, and message
        management screens go here next.
      </p>
    </div>
  );
}
