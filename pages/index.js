import react, { useEffect, useMemo, useState } from "react";
import MapContainer from "../components/MapContainer";
import newsJson from "../utils/news.json";
import filterJson from "../utils/filter.json";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ sortBy: "author", order: "asc" });
  const [selectedNews, setSelectedNews] = useState(null);
  const news = useMemo(
    () =>
      newsJson
        .sort((a, b) => {
          return filter.order === "asc"
            ? a[filter.sortBy].localeCompare(b[filter.sortBy])
            : b[filter.sortBy].localeCompare(a[filter.sortBy]);
        })
        .slice(0, currentPage * 5),
    [currentPage, filter]
  );

  useEffect(() => {
    setSelectedNews(null);
  }, [news]);

  const loadData = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSortFilter = (obj) => {
    setFilter((previousState) => {
      return { ...previousState, ...obj };
    });
  };

  const renderNewsItem = (newsItem) => {
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

  return (
    <div>
      <MapContainer
        filterJson={filterJson}
        news={news}
        handleSortFilter={handleSortFilter}
        renderNewsItem={renderNewsItem}
        loadData={loadData}
        selectedNews={selectedNews}
      />
    </div>
  );
}
