import React from "react";
import SideBar from "../components/SideBar";
import Map from "./Map";

const MapContainer = ({
  data,
  loadData,
  handleSortFilter,
  filterJson,
  selectedDataItem,
  center,
  renderListItem,
}) => {
  const markers = data.map((el) => el.marker);
  return (
    <div className="flex w-full justify-between h-full">
      <div className="grow text-center">
        <Map center={center} markers={markers} />
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
