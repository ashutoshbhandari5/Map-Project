import MapContainer from "../components/MapContainer";

export default function Home({ news }) {
  return (
    <div>
      <MapContainer news={news} />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEWS_API);
  const { data } = await response.json();

  return {
    props: {
      news: data,
    },
  };
};
