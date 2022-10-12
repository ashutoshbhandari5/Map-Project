import Item from "./Item";

const SideBar = ({
  news,
  loadData,
  handleSortFilter,
  filterJson,
  setSelectedNews,
}) => {
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
        <div className="flex">
          <h1>News Live</h1>
          {filterJson?.fields.map((el, i) => (
            <select
              key={i}
              onChange={(e) =>
                handleSortFilter({ [el.filterType]: e.target.value })
              }
              className="ml-3"
            >
              {el.options.map((option, i) => (
                <option disabled={option.disabled} value={option.type} key={i}>
                  {option.type}
                </option>
              ))}
            </select>
          ))}
        </div>
        <div className="h-full w-full overflow-y-auto">
          {news?.map((el, i) => {
            return (
              <Item setSelectedNews={setSelectedNews} key={i} newsItem={el} />
            );
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
