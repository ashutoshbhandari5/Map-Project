import React from "react";
import SideBar from "../components/SideBar";
import Map from "./Map";

const MapContainer = ({
  news,
  loadData,
  handleSortFilter,
  filterJson,
  setSelectedNews,
  selectedNews,
  renderNewsItem,
}) => {
  return (
    <div className="flex w-full justify-between h-full">
      <div className="grow text-center">
        <Map selectedNews={selectedNews} />
      </div>
      <div className="basis-1/4 h-full">
        <SideBar
          renderNewsItem={renderNewsItem}
          handleSortFilter={handleSortFilter}
          loadData={loadData}
          news={news}
          filterJson={filterJson}
          setSelectedNews={setSelectedNews}
        />
      </div>
    </div>
  );
};

export default MapContainer;
