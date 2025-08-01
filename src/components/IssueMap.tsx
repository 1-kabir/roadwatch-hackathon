'use client';

import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface Issue {
  id: string;
  position: [number, number];
  type: string;
  description: string;
  location?: string;
  landmark?: string;
  timestamp?: string;
  upvotes?: number;
  downvotes?: number;
}

function MapClickHandler({ onMapClick }: { onMapClick?: (latlng: [number, number]) => void }) {
  useMapEvent('click', (e) => {
    if (onMapClick) onMapClick([e.latlng.lat, e.latlng.lng]);
  });
  return null;
}

export default function IssueMap({
  issues,
  userLocation,
  onSelect,
  onMapClick,
}: {
  issues: Issue[];
  userLocation: [number, number] | null;
  onSelect: (issue: Issue) => void;
  onMapClick?: (latlng: [number, number]) => void;
}) {
  return (
    <MapContainer
      center={userLocation || [22.5744, 88.3629]}
      zoom={13}
      scrollWheelZoom
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MapClickHandler onMapClick={onMapClick} />
      {issues.map((issue) => (
        <Marker
          key={issue.id}
          position={issue.position}
          eventHandlers={{ click: () => onSelect(issue) }}
        />
      ))}
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>You are here!</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}