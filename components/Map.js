import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = ({ markers, center, toggleSideBar }) => {
  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  const renderMap = () => {
    return (
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={customMarker} position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  };

  return (
    <div className="flex flex-col p-4 h-full w relative">
      <div className="flex mb-4">
        <div
          onClick={() => toggleSideBar((prevState) => !prevState)}
          class="space-y-2 pr-2 cursor-pointer"
        >
          <div class="w-8 h-0.5 bg-gray-600"></div>
          <div class="w-8 h-0.5 bg-gray-600"></div>
          <div class="w-8 h-0.5 bg-gray-600"></div>
        </div>

        <p className="pr-3">Logo</p>
        <p className="pr-2">Date</p>
        <ul className="flex w-80 justify-between">
          <li>Ukraine</li>
          <li>USA</li>
          <li>Syria</li>
          <li>Israel-Palestine</li>
        </ul>
        <p className="px-2">Select region</p>
      </div>
      <div className="h-full w-full z-10">{renderMap()}</div>
    </div>
  );
};

export default Map;
