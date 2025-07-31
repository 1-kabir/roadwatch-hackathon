'use client';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">RoadWatch</h3>
          <p>Your partner for safer roads and smarter routes.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Features</h4>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer duration-250">Traffic Issue Reporting</li>
            <li className="hover:text-white cursor-pointer duration-250">Route Optimization</li>
            <li className="hover:text-white cursor-pointer duration-250">Authority Dashboard</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer duration-250">About</li>
            <li className="hover:text-white cursor-pointer duration-250">Careers</li>
            <li className="hover:text-white cursor-pointer duration-250">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer duration-250">support@roadwatch.app</li>
            <li className="hover:text-white cursor-pointer duration-250">Twitter</li>
            <li className="hover:text-white cursor-pointer duration-250">LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RoadWatch. All rights reserved.
      </div>
    </footer>
  );
}
