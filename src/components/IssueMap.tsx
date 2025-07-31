// src/components/IssueMap.tsx
"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

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

export default function IssueMap({
  issues,
  userLocation,
  onSelect,
}: {
  issues: Issue[];
  userLocation: [number, number] | null;
  onSelect: (issue: Issue) => void;
}) {
  return (
    <MapContainer
      center={userLocation || [28.6139, 77.209]}
      zoom={12}
      scrollWheelZoom
      className="h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

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
