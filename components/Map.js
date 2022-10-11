import React from "react";

const Map = () => {
  return (
    <div className="flex flex-col p-4">
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
      <div>Map here</div>
    </div>
  );
};

export default Map;
