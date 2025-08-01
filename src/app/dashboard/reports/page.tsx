'use client';

import { useState } from 'react';
import { MapPin, ThumbsUp, ThumbsDown, Clock, Search, Eye, CheckCircle, XCircle } from 'lucide-react';
import Preset from '@/components/Preset';
import dynamic from "next/dynamic";

// Dynamically import TwoMarkerMap with SSR disabled
const TwoMarkerMap = dynamic(() => import('@/components/TwoMarkerMap'), { ssr: false });

const mockReports = [
  {
    id: 1,
    landmark: 'The Heritage School',
    coordinates: '22.4752° N, 88.4176° E',
    location: 'Kolkata, India',
    type: 'Large Pothole',
    upvotes: 23,
    downvotes: 1,
    createdAt: '2025-07-30T09:15:00Z',
    status: 'Unresolved',
    position: [22.4752, 88.4176],
  },
  {
    id: 2,
    landmark: 'Don Bosco School, Park Circus',
    coordinates: '22.5411° N, 88.3706° E',
    location: 'Park Circus, Kolkata, India',
    type: 'Broken Street Light',
    upvotes: 12,
    downvotes: 0,
    createdAt: '2025-07-29T20:45:00Z',
    status: 'Resolved',
    position: [22.5411, 88.3706],
  },
  {
    id: 3,
    landmark: 'Sector 22 Crossing',
    coordinates: '28.5355° N, 77.3910° E',
    location: 'Noida, India',
    type: 'Road Blockage',
    upvotes: 8,
    downvotes: 2,
    createdAt: '2025-07-28T16:30:00Z',
    status: 'Unresolved',
    position: [28.5355, 77.3910],
  },
];

export default function ReportsPage() {
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredReports = mockReports.filter((report) =>
    report.landmark.toLowerCase().includes(query.toLowerCase()) ||
    report.location.toLowerCase().includes(query.toLowerCase()) ||
    report.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Preset>
      <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm max-w-md w-full mb-6">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search reports..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 space-y-2"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-black">{report.type}</h2>
                {report.status === 'Resolved' ? (
                  <span className="flex items-center gap-1 text-green-600 text-xs font-medium bg-green-100 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-4 h-4" /> Resolved
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-red-600 text-xs font-medium bg-red-100 px-2 py-0.5 rounded-full">
                    <XCircle className="w-4 h-4" /> Unresolved
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                }).format(new Date(report.createdAt))}
              </span>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p><span className="font-medium text-black">Landmark:</span> {report.landmark}</p>
              <p><span className="font-medium text-black">Coordinates:</span> {report.coordinates}</p>
              <p><span className="font-medium text-black">Location:</span> {report.location}</p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-4 text-sm text-gray-700">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4 text-green-600" /> {report.upvotes}
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsDown className="w-4 h-4 text-red-600" /> {report.downvotes}
                </span>
              </div>
              <button
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-600/60 duration-250 cursor-pointer"
                onClick={() => setExpandedId(expandedId === report.id ? null : report.id)}
              >
                <Eye className="w-4 h-4" />
                {expandedId === report.id ? "Hide Map" : "View on Map"}
              </button>
            </div>

            {expandedId === report.id && (
              <div className="mt-4 h-64 w-full rounded-lg overflow-hidden border border-gray-200">
                <TwoMarkerMap coord={report.position as [number, number]} />
              </div>
            )}
          </div>
        ))}
      </div>
    </Preset>
  );
}