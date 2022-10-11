import React from "react";
import SideBar from "../components/SideBar";
import Map from "./Map";

const MapContainer = ({ news }) => {
  return (
    <div className="flex w-full justify-between h-full">
      <div className="grow text-center">
        <Map />
      </div>
      <div className="basis-1/4 h-full">
        <SideBar news={news} />
      </div>
    </div>
  );
};

export default MapContainer;
