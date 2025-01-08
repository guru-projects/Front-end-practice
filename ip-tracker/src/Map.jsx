import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, lng }) => {
  console.log(lat, lng);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      {/* MapContainer must have a height; CSS handles the height */}
      <MapContainer
        center={[lat, lng]} // Latitude and Longitude for London
        zoom={13} // Initial zoom level
        style={{ width: "100%", height: "100%" }} // Ensure the map fills its container
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Tile URL for OpenStreetMap
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
