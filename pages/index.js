import react, { useEffect, useState } from "react";
import MapContainer from "../components/MapContainer";
import newsJson from "../utils/news.json";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);

  const loadData = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setNews(newsJson.slice(0, currentPage * 5));
  });

  return (
    <div>
      <MapContainer news={news} loadData={loadData} />
    </div>
  );
}
