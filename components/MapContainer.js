import React from "react";
import SideBar from "../components/SideBar";
import Map from "./Map";

const MapContainer = ({
  data,
  loadData,
  handleSortFilter,
  filterJson,
  selectedDataItem,
  renderListItem,
}) => {
  return (
    <div className="flex w-full justify-between h-full">
      <div className="grow text-center">
        <Map selectedDataItem={selectedDataItem} />
      </div>
      <div className="basis-1/4 h-full">
        <SideBar
          renderListItem={renderListItem}
          handleSortFilter={handleSortFilter}
          loadData={loadData}
          data={data}
          filterJson={filterJson}
        />
      </div>
    </div>
  );
};

export default MapContainer;
