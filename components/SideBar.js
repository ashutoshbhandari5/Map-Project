import Item from "./Item";

const SideBar = ({ news, loadData }) => {
  console.log(news);
  return (
    <div className="h-sreen">
      <ul className="p-5 flex w-full justify-between">
        <li>News live</li>
        <li>Language</li>
        <li>Time</li>
        <li>Key</li>
        <li>Login</li>
      </ul>
      <div className="p-5 bg-slate-100 relative h-screen">
        <h1>News Live</h1>
        <div className="h-full w-full overflow-y-auto">
          {news?.map((el, i) => {
            return <Item key={i} country={el.country} title={el.title} />;
          })}
          <button
            onClick={() => loadData()}
            className="my-4 ml-28 bg-white py-2 px-6"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
