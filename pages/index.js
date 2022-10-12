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

  return (
    <div>
      <MapContainer
        filterJson={filterJson}
        news={news}
        handleSortFilter={handleSortFilter}
        loadData={loadData}
        setSelectedNews={setSelectedNews}
        selectedNews={selectedNews}
      />
    </div>
  );
}
