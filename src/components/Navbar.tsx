"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-black border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          RoadWatch
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="#features" className="text-gray-300 hover:text-white duration-250 cursor-pointer">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white duration-250 cursor-pointer">
            Testimonials
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white duration-250 cursor-pointer">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
