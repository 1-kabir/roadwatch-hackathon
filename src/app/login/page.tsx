"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preset from "@/components/Preset";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-black flex items-center justify-center px-4 sm:px-6">
        <Preset>
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
            <form onSubmit={handleLogin} className="space-y-6 lg:w-[30vw]">
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-black border border-black text-white rounded hover:bg-white hover:text-black transition duration-250 cursor-pointer"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link href="/signup" className="underline hover:text-black transition duration-250">
                Sign up
              </Link>
            </p>
          </div>
        </Preset>
      </main>
      <Footer />
    </div>
  );
}
