'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// Fix for default marker icon in React/Next.js
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface TwoMarkerMapProps {
  coord: [number, number];
}

export default function TwoMarkerMap({ coord }: TwoMarkerMapProps) {
  return (
    <MapContainer
      center={coord}
      zoom={15}
      scrollWheelZoom
      className="h-full w-full"
      style={{ minHeight: 300, minWidth: 300 }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={coord} />
    </MapContainer>
  );
}