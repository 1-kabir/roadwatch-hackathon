'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { AlertTriangle } from 'lucide-react';
import Preset from '@/components/Preset';
import { Input } from '@/components/ui/input';

const IssueMap = dynamic(() => import('@/components/IssueMap'), { ssr: false });

interface Issue {
  id: string;
  position: [number, number];
  type: string;
  description: string;
  location: string;
  landmark?: string;
  timestamp: string;
  upvotes: number;
  downvotes: number;
}

export default function MapPage() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [creating, setCreating] = useState(false);
  const [newPos, setNewPos] = useState<[number, number] | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [form, setForm] = useState({
    type: '',
    description: '',
    location: '',
    landmark: '',
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, []);

  const handleMapClick = (latlng: [number, number]) => {
    if (creating) {
      setNewPos(latlng);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    if (!newPos || !form.type || !form.description) {
      alert('Please fill in all required fields and select a location on the map.');
      return;
    }

    const newIssue: Issue = {
      id: Date.now().toString(),
      position: newPos,
      type: form.type,
      description: form.description,
      location: form.location || '',
      landmark: form.landmark || '',
      timestamp: new Date().toISOString(),
      upvotes: 0,
      downvotes: 0,
    };

    setIssues((prev) => [...prev, newIssue]);
    setSelectedIssue(newIssue);
    setCreating(false);
    setNewPos(null);
    setForm({ type: '', description: '', location: '', landmark: '' });
  };

  return (
    <Preset>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 bg-white rounded-xl p-5 shadow-sm border border-gray-200">
          {creating ? (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-black">Create New Issue</h2>
              <p className="text-sm text-gray-600">Click on the map to select a location.</p>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium">Type *</dt>
                  <dd>
                    <Input
                      name="type"
                      value={form.type}
                      onChange={handleInputChange}
                      placeholder="Pothole, Signal..."
                    />
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Description *</dt>
                  <dd>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
                      placeholder="Describe the issue"
                    />
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Location</dt>
                  <dd>
                    <Input name="location" value={form.location} onChange={handleInputChange} />
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Landmark</dt>
                  <dd>
                    <Input name="landmark" value={form.landmark} onChange={handleInputChange} />
                  </dd>
                </div>
              </dl>
              {newPos && (
                <p className="text-sm text-green-600">
                  Selected Position: [{newPos[0].toFixed(4)}, {newPos[1].toFixed(4)}]
                </p>
              )}
              <button
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-600/80 duration-250 transition cursor-pointer"
                onClick={handleCreate}
              >
                Save Issue
              </button>
              <button
                className="mt-2 px-4 py-1 text-sm text-gray-600 hover:text-gray-800/60 duration-250 cursor-pointer"
                onClick={() => {
                  setCreating(false);
                  setNewPos(null);
                }}
              >
                Cancel
              </button>
            </div>
          ) : selectedIssue ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-yellow-500 w-6 h-6" />
                <h2 className="text-xl font-semibold">{selectedIssue.type}</h2>
              </div>
              <p className="text-sm text-gray-700">{selectedIssue.description}</p>
              <p className="text-sm"><strong>Location:</strong> {selectedIssue.location}</p>
              <p className="text-sm"><strong>Landmark:</strong> {selectedIssue.landmark}</p>
              <p className="text-sm">
                <strong>Coordinates:</strong> [{selectedIssue.position[0].toFixed(4)}, {selectedIssue.position[1].toFixed(4)}]
              </p>
            </div>
          ) : (
            <div className="text-gray-500 italic">Select or create an issue</div>
          )}
          {!creating && (
            <button
              className="mt-4 w-full py-2 bg-black cursor-pointer text-white rounded hover:bg-black/80 duration-250"
              onClick={() => {
                setCreating(true);
                setSelectedIssue(null);
                setNewPos(null);
                setForm({ type: '', description: '', location: '', landmark: '' });
              }}
            >
              Create Issue
            </button>
          )}
        </aside>

        {/* Map */}
        <div className="w-full md:w-2/3 h-[600px] rounded-lg overflow-hidden">
          <IssueMap
            issues={[
              ...issues.map((issue) => ({
                ...issue,
                location: issue.location ?? '',
                landmark: issue.landmark ?? '',
              })),
              ...(newPos
                ? [
                    {
                      id: 'preview',
                      position: newPos,
                      type: form.type || 'New Issue',
                      description: form.description || '',
                      location: form.location || '',
                      landmark: form.landmark || '',
                      timestamp: '',
                      upvotes: 0,
                      downvotes: 0,
                    },
                  ]
                : []),
            ]}
            userLocation={userLocation}
            onSelect={(i) =>
              setSelectedIssue({
                ...i,
                location: i.location ?? '',
                landmark: i.landmark ?? '',
                timestamp: i.timestamp ?? '',
                upvotes: i.upvotes ?? 0,
                downvotes: i.downvotes ?? 0,
              })
            }
            onMapClick={handleMapClick}
          />
        </div>
      </div>
    </Preset>
  );
}
