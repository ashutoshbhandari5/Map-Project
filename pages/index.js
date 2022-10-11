import react, { useEffect, useState } from "react";
import MapContainer from "../components/MapContainer";
import newsJson from "../utils/news.json";

export default function Home() {
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState([]);

  const loadData = () => {
    const currentDataLength = currentNews.length;
    setCurrentNews(news.slice(0, currentDataLength + 5));
  };

  useEffect(() => {
    setNews(newsJson);
    setCurrentNews(newsJson.slice(0, 5));
  }, []);

  return (
    <div>
      <MapContainer news={currentNews} loadData={loadData} />
    </div>
  );
}
