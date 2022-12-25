import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from "./content.module.scss";

export const Content = () => {
  const [data, setData] = useState<any[]>();
  const input = useSelector((store: any) => store?.searchInput?.searchInput);

  const getData = async () => {
    const key = "AIzaSyCbnJm23l_LXdtjxkGxdl3xuQFh9nmG_Y8";
    const contentData = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&q=${input}&type=videos&part=snippet&maxResults=30`
    );
    let Data = await contentData.json();
    if (Data) {
      console.log(Data?.items);
      setData(Data?.items);
    }
  };

  useEffect(() => {
    getData();
  }, [input]);
  return (
    <div className={s.root}>
      {data?.map((item) => (
        <div className={s.card} key={item?.id}>
          <div>{item?.snippet?.thumbnails?.high?.url}</div>
        </div>
      ))}
    </div>
  );
};
