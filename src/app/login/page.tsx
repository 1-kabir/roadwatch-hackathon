import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preset from "@/components/Preset";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-black flex items-center justify-center px-4 sm:px-6">
        <Preset>
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
            <form className="space-y-6 lg:w-[30vw]">
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium">
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
                <label htmlFor="password" className="block text-sm font-medium">
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
                className="w-full py-2 px-4 bg-black border border-black text-white rounded hover:bg-white hover:text-black transition duration-250 cursor-pointer"
              >
                Login
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
