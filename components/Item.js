import React from "react";

const Item = ({ author, title }) => {
  return (
    <div className="p-2 ">
      <h1 className="p-2 text-center">{author}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Item;
