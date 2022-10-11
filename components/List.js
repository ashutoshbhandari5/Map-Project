import React from "react";

const List = ({ country, title }) => {
  return (
    <div className="p-2">
      <h1 className="p-2 text-center">{country}</h1>
      <p>{title}</p>
    </div>
  );
};

export default List;
