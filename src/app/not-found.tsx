import Link from "next/link";

import Preset from "@/components/Preset";

export default function NotFoundPage() {
  return (
    <div>
      <main className="min-h-screen bg-white text-black flex items-center justify-center px-4 sm:px-6">
        <Preset>
          <div className="w-full max-w-[360px] space-y-6 text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-base text-gray-600">
              Sorry, the page you’re looking for doesn’t exist.
            </p>
            <Link
              href="/"
              className="inline-block w-full py-2 px-4 bg-black border border-black text-white rounded hover:bg-white hover:text-black transition duration-250"
            >
              Go to Homepage
            </Link>
          </div>
        </Preset>
      </main>
    </div>
  );
}
