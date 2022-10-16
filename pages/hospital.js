import React from "react";
import hospitalJson from "../utils/hospital.json";
import MapContainer from "../components/MapContainer";
import filterJson from "../utils/filter.json";
import useDataFilter from "../hooks/useDataFilter";

const hospital = () => {
  const [data, handleSortFilter, loadData, selectedData, setSelectedData] =
    useDataFilter(hospitalJson.data, "name");

  const hospitalFilterJson = filterJson.fields.filter(
    (el) => el.for === "all" || el.for === "hospital"
  );

  const renderListItem = (listItem) => {
    return (
      <div
        onClick={() => setSelectedData(listItem)}
        className="p-2 cursor-pointer hover:bg-white"
      >
        <p>Name : {listItem.name}</p>
        <p>Speciality : {listItem.speciality}</p>
      </div>
    );
  };

  return (
    <div>
      <MapContainer
        filterJson={hospitalFilterJson}
        data={data}
        center={hospitalJson.center}
        handleSortFilter={handleSortFilter}
        renderListItem={renderListItem}
        loadData={loadData}
        selectedDataItem={selectedData}
      />
    </div>
  );
};

export default hospital;
