import React from "react";
import ListBar from "./ListBar";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

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
      <div className="grow text-center h-screen">
        <DynamicMap center={center} markers={markers} />
      </div>
      <div className="basis-1/4 h-full">
        <ListBar
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
