import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = ({ markers, center }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC2r3IfmT - bc - zZ19GIOKzQLKBBdlcOM_E",
  });

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={15}
      >
        {markers.map((el, i) => {
          return <Marker key={i} position={el} />;
        })}
      </GoogleMap>
    );
  };

  return (
    <div className="flex flex-col p-4 h-full w">
      <div className="flex ">
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
      <div className="h-full w-full">
        {loadError
          ? "Sorry Map cannot be loaded"
          : isLoaded
          ? renderMap()
          : "Loading..."}
      </div>
    </div>
  );
};

export default Map;
