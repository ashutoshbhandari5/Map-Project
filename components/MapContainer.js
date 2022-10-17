import React, { useMemo, useState } from "react";
import ListBar from "./ListBar";
import dynamic from "next/dynamic";
import SideBar from "./SideBar";
import Backdrop from "./Backdrop";
import { setHamburgerMenuClass } from "../utils/helper";

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

  const classNames = useMemo(() => setHamburgerMenuClass(sideBar), [sideBar]);

  const [backDrop, togglebackdrop] = useState(false);

  const backDropVisibility = backDrop ? "visible" : "hidden";

  return (
    <div className="relative flex">
      <Backdrop
        togglebackdrop={togglebackdrop}
        visibility={backDropVisibility}
      />
      <div className={classNames.sideBarClassName}>
        <SideBar />
      </div>
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
            togglebackdrop={togglebackdrop}
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
