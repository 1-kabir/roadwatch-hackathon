'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Preset from '@/components/Preset';
import {
  Mail, Lock, User, MapPin, ThumbsUp, ThumbsDown,
  AlertTriangle, CheckCircle, LogOut,
} from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("John Doe");
  const [location, setLocation] = useState("Lat: 22.54432, Lng: 88.37130");
  const [geoLoading, setGeoLoading] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const handleSave = () => {
    // No actual save functionality, just a placeholder
    alert("Full name saved!");
  };

  const handleChangeLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`);
        setGeoLoading(false);
      },
      () => {
        alert("Unable to retrieve your location.");
        setGeoLoading(false);
      }
    );
  };

  return (
    <Preset>
      {/* Account Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 space-y-3">
          <div className="flex items-center gap-2">
            <User className="text-indigo-600 w-5 h-5" />
            <h2 className="text-lg font-semibold text-black">Account Info</h2>
          </div>
          <div className="text-sm text-gray-700 space-y-2">
            <div>
              <label className="block text-gray-500 mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
              <button
                onClick={handleSave}
                className="mt-2 px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm"
              >
                Save
              </button>
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Email</label>
              <div className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
                johndoe@email.com
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 space-y-3">
          <div className="flex items-center gap-2">
            <Lock className="text-pink-600 w-5 h-5" />
            <h2 className="text-lg font-semibold text-black">Password</h2>
          </div>
          <div className="text-sm text-gray-700">
            <p>If you've forgotten your password, you can reset it below.</p>
            <button className="mt-3 text-sm text-blue-600 hover:underline">
              Reset Password
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-yellow-600 w-5 h-5" />
            <h2 className="text-lg font-semibold text-black">Reporting Stats</h2>
          </div>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mt-1">
            <li><span className="text-black font-medium">18</span> road issues reported</li>
            <li><span className="text-black font-medium">11</span> resolved</li>
            <li><span className="text-black font-medium">22</span> upvotes received</li>
            <li><span className="text-black font-medium">3</span> downvotes received</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="text-green-600 w-5 h-5" />
            <h2 className="text-lg font-semibold text-black">Location</h2>
          </div>
          <p className="text-sm text-gray-700 mb-2">{location}</p>
          <button
            onClick={handleChangeLocation}
            className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
            disabled={geoLoading}
          >
            {geoLoading ? "Detecting..." : "Change my Location"}
          </button>
        </div>
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