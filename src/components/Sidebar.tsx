'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import {
  Home,
  NotepadText,
  Settings,
  Map,
} from 'lucide-react';

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/dashboard/map", icon: Map, label: "Map" },
  { href: "/dashboard/reports", icon: NotepadText, label: "Reports" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-20 bg-black text-white flex-col justify-center items-center py-6 space-y-8 relative">
        <div className="absolute top-6 text-white font-bold text-md rounded-full w-10 h-10 flex items-center justify-center border-2 border-white">
          RW
        </div>

        <nav className="flex flex-col items-center gap-6 mt-16">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}>
                <div
                  className={cn(
                    "p-3 rounded-xl transition-all duration-200",
                    isActive
                      ? "bg-white text-black shadow-md"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile bottom nav */}
        <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-black text-white flex justify-center gap-8 items-center py-2 border-t border-white/10 z-50">
        {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href;
            return (
            <Link key={href} href={href}>
                <div
                className={cn(
                    "p-2 rounded-xl transition-all duration-200",
                    isActive
                    ? "bg-white text-black shadow-md"
                    : "text-white hover:bg-white/10"
                )}
                >
                <Icon className="w-5 h-5" />
                </div>
            </Link>
            );
        })}
        </nav>
    </>
  );
}
