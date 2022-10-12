import react, { useState } from "react";
import MapContainer from "../components/MapContainer";
import newsJson from "../utils/news.json";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ sortBy: "author", order: "asc" });
  const news = newsJson
    .sort((a, b) => {
      return filter.order === "asc"
        ? a[filter.sortBy].localeCompare(b[filter.sortBy])
        : b[filter.sortBy].localeCompare(a[filter.sortBy]);
    })
    .slice(0, currentPage * 5);

  const loadData = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSortFilter = (obj) => {
    setFilter({ ...filter, ...obj });
  };

  return (
    <div>
      <MapContainer
        news={news}
        handleSortFilter={handleSortFilter}
        loadData={loadData}
      />
    </div>
  );
}
