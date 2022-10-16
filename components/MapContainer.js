import React, { useMemo, useState } from "react";
import ListBar from "./ListBar";
import dynamic from "next/dynamic";
import SideBar from "./SideBar";

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

  const [sideBar, toggleSideBar] = useState(false);

  const setHamburgerMenuClass = () => {
    let sideBarClassName = "absolute ".split(" ");
    let mapContentClassName =
      "flex w-full justify-between h-full absolute ml-2".split(" ");
    if (sideBar) {
      sideBarClassName.push("left-0");
      mapContentClassName.push("left-44");
    } else {
      sideBarClassName.push("left-[-100%]");
      mapContentClassName.push("left-0");
    }
    return {
      sideBarClassName: sideBarClassName.join(" "),
      mapContentClassName: mapContentClassName.join(" "),
    };
  };

  const classNames = useMemo(() => setHamburgerMenuClass(), [sideBar]);

  return (
    <div className="relative flex">
      <div className={classNames.sideBarClassName}>
        <SideBar />
      </div>
      {/* //"flex w-full justify-between h-full absolute left-44 ml-2" */}
      <div className={classNames.mapContentClassName}>
        <div className="grow text-center h-screen">
          <DynamicMap
            toggleSideBar={toggleSideBar}
            center={center}
            markers={markers}
          />
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
    </div>
  );
};

export default MapContainer;
