import React from "react";

const Select = ({ handleSortFilter, key, name }) => {
  return (
    <select
      onChange={(e) => handleSortFilter({ key: e.target.value })}
      className="ml-3"
    ></select>
  );
};

export default Select;
