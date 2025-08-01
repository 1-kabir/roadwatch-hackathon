'use client';

import { useRouter } from "next/navigation";
import Preset from '@/components/Preset';
import {
  User,
  Mail,
  ShieldCheck,
  Wrench,
  CheckCircle,
  Lock,
  LogOut,
} from 'lucide-react';

export default function AdminSettingsPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin-logout", { method: "POST" });
    router.push("/adminlogin");
    window.location.reload();
  };
  return (
    <Preset>
      {/* Admin Info */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 space-y-3">
          <div className="flex items-center gap-2">
            <User className="text-indigo-600 w-5 h-5" />
            <h2 className="text-lg font-semibold text-black">Admin Info</h2>
          </div>
          <div className="text-sm text-gray-700 space-y-2">
            <div>
              <label className="block text-gray-500 mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Kabir Singh"
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Email</label>
              <div className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
                admin@cityinfra.gov
              </div>
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Role</label>
              <div className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
                Super Admin
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 space-y-3 mb-6">
        <div className="flex items-center gap-2">
          <CheckCircle className="text-blue-600 w-5 h-5" />
          <h2 className="text-lg font-semibold text-black">Profile Summary</h2>
        </div>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mt-1">
          <li>Admin since: <span className="text-black font-medium">March 2024</span></li>
          <li>Last login: <span className="text-black font-medium">2 hours ago</span></li>
          <li>Privileges: <span className="text-green-600 font-medium">Full Access</span></li>
        </ul>
      </div>

      {/* Logout */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
            <LogOut className="w-5 h-5" />
            Logout
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:text-red-600/60 duration-250 cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </Preset>
  );
}