import MapContainer from "../components/MapContainer";
import newsJson from "../utils/news.json";
import filterJson from "../utils/filter.json";
import useDataFilter from "../hooks/useDataFilter";

export default function Home() {
  const [data, handleSortFilter, loadData, selectedData, setSelectedData] =
    useDataFilter(newsJson.data, "author");

  const newsFilterJson = filterJson.fields.filter(
    (el) => el.for === "all" || el.for === "news"
  );

  const renderListItem = (newsItem) => {
    return (
      <div
        onClick={() => setSelectedData(newsItem)}
        className="p-2 cursor-pointer hover:bg-white"
      >
        <h1 className="p-2 text-center">{newsItem.author}</h1>
        <p>{newsItem.title}</p>
      </div>
    );
  };

  return (
    <div>
      <MapContainer
        filterJson={newsFilterJson}
        data={data}
        center={newsJson.center}
        handleSortFilter={handleSortFilter}
        renderListItem={renderListItem}
        loadData={loadData}
        selectedDataItem={selectedData}
      />
    </div>
  );
}
