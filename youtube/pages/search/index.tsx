import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Content from "../../src/component/Content";
import History from "../../src/component/History";
import HomeComponent from "../../src/component/Home";
import Navbar from "../../src/component/Navbar";
import SearchContent from "../../src/component/SearchContent";
import Shorts from "../../src/component/Shorts";

const Search = ({ data, query }: any) => {
  const input = query?.input;
  return (
    <div>
      <Navbar />
      {input === "history" && <History />}
      {input === "shorts videos" && <Shorts data={data?.items} />}
      {input !== "shorts videos" && input !== "history" && (
        <HomeComponent data={data?.items} />
      )}
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
  const key = "AIzaSyAodFipVzqQmr-XgBqU1DQ4AtrELiiURt8";
  const contentData = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=30&q=${query?.input}&type=video&key=${key}`
  );
  const data = await contentData.json();
  return {
    props: { data, query },
  };
}

export default Search;
