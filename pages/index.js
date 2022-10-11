import react, { useState } from "react";
import MapContainer from "../components/MapContainer";
import newsJson from "../utils/news.json";

export default function Home() {
  const [news, setNews] = useState(newsJson.slice(0, 5));

  const loadData = () => {
    const currentDataLength = news.length;
    setNews(newsJson.slice(0, currentDataLength + 5));
  };

  return (
    <div>
      <MapContainer news={news} loadData={loadData} />
    </div>
  );
}
