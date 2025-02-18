import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Component to update the map center dynamically
const ChangeView = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13); // Update map view with new coordinates
  }, [lat, lng, map]);
  return null;
};

const Map = ({ lat, lng }) => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
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
        <Marker position={[lat, lng]}>
          <Popup>
            A marker at latitude {lat} and longitude {lng}.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
