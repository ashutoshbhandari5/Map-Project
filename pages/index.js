import react, { useEffect, useState } from "react";
import MapContainer from "../components/MapContainer";

export default function Home() {
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState([]);

  const loadData = () => {
    const currentDataLength = news.length;
    setNews(data.slice(0, currentDataLength + 5));
  };

  useEffect(() => {
    const getNewsData = async () => {
      const response = await fetch(
        "http://api.mediastack.com/v1/news?access_key=30423a44d095bbaf1f3946b4eff22277"
      );
      const { data } = await response.json();
      if (typeof window !== "undefined") {
        localStorage.setItem("data", data);
      }
      return data;
    };

    if (typeof window !== "undefined") {
      const data = localStorage.getItem("data");
      if (data) {
        setNews(data);
        setCurrentNews(data.slice(0, 5));
      }
    } else {
      getNewsData().catch(console.error);
    }
  }, []);

  return (
    <div>
      <MapContainer news={currentNews} loadData={loadData} />
    </div>
  );
}
