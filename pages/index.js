import react, { useState } from "react";
import MapContainer from "../components/MapContainer";
import newsJson from "../utils/news.json";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const sortBy = "author";
  const news = newsJson
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    .slice(0, currentPage * 5);

  const loadData = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <MapContainer news={news} loadData={loadData} />
    </div>
  );
}
