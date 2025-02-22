import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import Leaflet for custom icon
import iconLocation from "./images/icon-location.svg"; // Import your icon image

// Component to update the map center dynamically
const ChangeView = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13); // Update map view with new coordinates
  }, [lat, lng, map]);
  return null;
};

// Define a custom Leaflet icon
const customIcon = L.icon({
  iconUrl: iconLocation, // Use imported icon
  iconSize: [40, 50], // Adjust size as needed
  iconAnchor: [20, 50], // Adjust anchor to place marker correctly
  popupAnchor: [0, -50], // Adjust popup position
});

const Map = ({ lat, lng }) => {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <ChangeView lat={lat} lng={lng} /> {/* Ensures the map updates */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>
            A marker at latitude {lat} and longitude {lng}.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
