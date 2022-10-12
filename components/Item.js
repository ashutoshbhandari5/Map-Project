import React from "react";

const Item = ({ newsItem, setSelectedNews }) => {
  return (
    <div
      onClick={() => setSelectedNews(newsItem)}
      className="p-2 cursor-pointer hover:bg-white"
    >
      <h1 className="p-2 text-center">{newsItem.author}</h1>
      <p>{newsItem.title}</p>
    </div>
  );
};

export default Item;
