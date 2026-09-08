"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-code-panel border border-panel-border rounded-lg p-8"
      >
        <div className="text-purple text-xs tracking-widest mb-2 font-mono">ADMIN</div>
        <h1 className="font-extrabold text-2xl mb-6">Sign in</h1>

        {error && (
          <div className="mb-4 text-xs text-red-400 border border-red-400/30 bg-red-400/10 rounded px-3 py-2">
            {error}
          </div>
        )}

        <label className="block text-xs text-text-dim mb-1.5 font-mono" htmlFor="email">
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 bg-bg border border-panel-border rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-purple"
        />

        <label className="block text-xs text-text-dim mb-1.5 font-mono" htmlFor="password">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 bg-bg border border-panel-border rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-purple"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full border border-purple text-white text-xs tracking-widest px-4 py-3 rounded bg-purple/10 hover:bg-purple/20 transition-colors disabled:opacity-50"
        >
          {loading ? "SIGNING IN..." : "SIGN IN →"}
        </button>
      </form>
    </div>
  );
}
