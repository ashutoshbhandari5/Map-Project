import React from "react";
import List from "./List";

const SideBar = ({ news }) => {
  console.log(news);
  return (
    <div>
      <ul className="p-5 flex w-full justify-between">
        <li>News live</li>
        <li>Language</li>
        <li>Time</li>
        <li>Key</li>
        <li>Login</li>
      </ul>
      <div className="p-5 bg-slate-100 h-full overflow-y-scroll">
        <h1>News Live</h1>
        <div>
          {news.map((el, i) => {
            return <List key={i} country={el.country} title={el.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
