import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preset from "@/components/Preset";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">
        <Preset>
          <div className="w-[360px] space-y-8">
            <h1 className="text-3xl font-bold text-center">Create an Account</h1>
            <form className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium w-full">
                  Email address
                </label>
                <Input
                  type="email"
                  id="email"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium w-full">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  required
                  className="w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-black border border-black text-white rounded hover:bg-white hover:text-black duration-250 cursor-pointer transition"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="underline hover:text-black duration-250">
                Login
              </Link>
            </p>
          </div>
        </Preset>
      </main>
      <Footer />
    </div>
  );
}
