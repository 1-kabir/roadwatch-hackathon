// src/app/dashboard/map/page.tsx
'use client';

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  AlertTriangle,
  Clock,
  MapPin,
  ThumbsUp,
} from "lucide-react";

// Dynamically load Leaflet map on client only
const IssueMap = dynamic(() => import("@/components/IssueMap"), {
  ssr: false,
});

interface Issue {
  id: string;
  position: [number, number];
  description: string;
  type: string;
  location: string;
  timestamp: string;
  upvotes: number;
  downvotes: number;
}

const issues: Issue[] = [
  {
    id: "1",
    position: [28.6139, 77.209],
    description: "Pothole on Ring Road",
    type: "Pothole",
    location: "Ring Road, Delhi",
    timestamp: new Date().toISOString(),
    upvotes: 10,
    downvotes: 2,
  },
  {
    id: "2",
    position: [28.5355, 77.391],
    description: "Signal not working",
    type: "Signal",
    location: "Sector 18, Noida",
    timestamp: new Date().toISOString(),
    upvotes: 7,
    downvotes: 3,
  },
];

export default function MapPage() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation([latitude, longitude]);
        },
        (err) => console.warn("Location access denied:", err.message)
      );
    }
  }, []);

  return (
    <section className="flex flex-col md:flex-row gap-6">
      {/* Sidebar Card */}
      <aside className="w-full md:w-1/3 bg-white rounded-xl p-5 shadow-sm border border-gray-200">
        {selectedIssue ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-yellow-500 w-6 h-6" />
              <h2 className="text-xl font-semibold text-black">{selectedIssue.type}</h2>
            </div>

            <dl className="space-y-4 text-sm text-gray-700">
              <div>
                <dt className="font-medium text-black flex items-center gap-2">
                  <MapPin className="text-indigo-600 w-4 h-4" /> Location
                </dt>
                <dd className="ml-6">{selectedIssue.location}</dd>
              </div>

              <div>
                <dt className="font-medium text-black flex items-center gap-2">
                  <MapPin className="text-indigo-600 w-4 h-4" /> Coordinates
                </dt>
                <dd className="ml-6">
                  [{selectedIssue.position[0].toFixed(4)}, {selectedIssue.position[1].toFixed(4)}]
                </dd>
              </div>

              <div>
                <dt className="font-medium text-black flex items-center gap-2">
                  <Clock className="text-pink-600 w-4 h-4" /> Reported
                </dt>
                <dd className="ml-6">
                  {new Date(selectedIssue.timestamp).toLocaleString()}
                </dd>
              </div>

              <div className="border-t pt-4">
                <dt className="font-medium text-black flex items-center gap-2">
                  <ThumbsUp className="text-green-600 w-4 h-4" /> Votes
                </dt>
                <dd className="ml-6 flex gap-4">
                  <span>👍 {selectedIssue.upvotes}</span>
                  <span>👎 {selectedIssue.downvotes}</span>
                </dd>
              </div>
            </dl>
          </div>
        ) : (
          <div className="text-gray-500 italic">Click on a marker to view issue details.</div>
        )}
      </aside>

      {/* Map Area */}
      <div className="w-full md:w-2/3 h-[500px] rounded-lg overflow-hidden">
        <IssueMap
          issues={issues}
          userLocation={userLocation}
          onSelect={setSelectedIssue}
        />
      </div>
    </section>
  );
}
