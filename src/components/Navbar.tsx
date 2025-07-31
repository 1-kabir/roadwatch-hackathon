"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { LogIn, UserPlus, LayoutDashboard, LogOut } from "lucide-react";

export default function Navbar() {
  const [authenticated, setAuthenticated] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check Supabase session
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setAuthenticated(!!data.session);
    };

    // Check localStorage for signup flag
    const checkSignupFlag = () => {
      const signedUp = localStorage.getItem("hasSignedUp") === "true";
      setHasSignedUp(signedUp);
    };

    checkSession();
    checkSignupFlag();

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setAuthenticated(!!session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className="w-full bg-black border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          RoadWatch
        </Link>

        <div className="space-x-6 hidden md:flex items-center">
          <Link href="#features" className="text-gray-300 hover:text-white transition duration-200">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white transition duration-200">
            Testimonials
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition duration-200">
            Contact
          </Link>

          {authenticated ? (
            <>
              <Link
                href="/dashboard"
                className="flex items-center text-black bg-white border border-white hover:text-white hover:bg-black transition duration-250 py-1 px-2 rounded-sm"
              >
                <LayoutDashboard className="w-4 h-4 mr-1" /> Dashboard
              </Link>
            </>
          ) : hasSignedUp ? (
            <Link
              href="/login"
              className="flex items-center text-black bg-white border border-white hover:text-white hover:bg-black transition duration-250 py-1 px-2 rounded-sm"
            >
              <LogIn className="w-4 h-4 mr-1" /> Login
            </Link>
          ) : (
            <Link
              href="/signup"
              className="flex items-center text-black bg-white border border-white hover:text-white hover:bg-black transition duration-250 py-1 px-2 rounded-sm"
            >
              <UserPlus className="w-4 h-4 mr-1" /> Sign Up
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
