import { useRouter } from "next/router";
import Navbar from "../../src/component/Navbar";
import SearchContent from "../../src/component/SearchContent";

const Id = ({ data }: any) => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <Navbar />
      <SearchContent data={data?.items} />
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
  const text = query?.id || "home";
  const key = "AIzaSyAodFipVzqQmr-XgBqU1DQ4AtrELiiURt8";
  const contentData = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=30&q=${text}&type=video&key=${key}`
  );
  const data = await contentData.json();
  return {
    props: { data },
  };
}

export default Id;
