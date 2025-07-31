'use client';

import { useState } from 'react';
import { MapPin, ThumbsUp, ThumbsDown, Clock, Search, Eye, CheckCircle, XCircle } from 'lucide-react';
import Preset from '@/components/Preset';

const mockReports = [
  {
    id: 1,
    landmark: 'Main Street Bridge',
    coordinates: '28.6139° N, 77.2090° E',
    location: 'New Delhi, India',
    type: 'Pothole',
    upvotes: 14,
    downvotes: 2,
    createdAt: '2025-07-30T14:32:00Z',
    status: 'Resolved',
  },
  {
    id: 2,
    landmark: 'Sector 22 Crossing',
    coordinates: '28.5355° N, 77.3910° E',
    location: 'Noida, India',
    type: 'Broken Traffic Light',
    upvotes: 8,
    downvotes: 1,
    createdAt: '2025-07-30T12:15:00Z',
    status: 'Unresolved',
  },
  {
    id: 3,
    landmark: 'Near Elm Park Mall',
    coordinates: '28.4595° N, 77.0266° E',
    location: 'Gurgaon, India',
    type: 'Road Blockage',
    upvotes: 5,
    downvotes: 0,
    createdAt: '2025-07-29T18:45:00Z',
    status: 'Resolved',
  },
];

export default function ReportsPage() {
  const [query, setQuery] = useState('');

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
                onClick={() => alert(`Map popover for ${report.landmark}`)}
              >
                <Eye className="w-4 h-4" />
                View on Map
              </button>
            </div>
          </div>
        ))}
      </div>
    </Preset>
  );
}
