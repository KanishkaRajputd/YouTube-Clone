import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../src/component/Navbar";
import HomeComponent from "../src/component/Home";
import { useSelector } from "react-redux";

type DataType = { contentData: any };

export default function Home({ contentData }: DataType) {
  console.log(contentData);

  return (
    <div>
      <Navbar />
      <HomeComponent data={contentData?.items} />
    </div>
  );
}

export async function getServerSideProps() {
  const key = "AIzaSyAodFipVzqQmr-XgBqU1DQ4AtrELiiURt8";
  const contentData = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=30&q=home&type=video&key=${key}`
  );
  const res = await contentData.json();

  return {
    props: { contentData: res },
  };
}
