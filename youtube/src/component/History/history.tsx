import dayjs from "dayjs";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import s from "./history.module.scss";

export const History = () => {
  const history = useSelector((store: any) => store?.history?.history);
  const router = useRouter();
  return (
    <div className={s.root}>
      <Sidebar />
      <div className={s.sideContent}>
        {history?.map((item: any, index: number) => (
          <div
            className={s.card}
            key={index}
            onClick={() => {
              router.push({
                pathname: `/search/${item?.id?.videoId}`,
              });
            }}
          >
            <iframe
              allowFullScreen
              className={s.iframe}
              src={`https://www.youtube.com/embed/${item?.id?.videoId}`}
            />
            <div className={s.text}>
              <p>{item?.snippet?.title}</p>
              <p style={{ color: "grey", marginTop: "10px" }}>
                {item?.snippet?.channelTitle}
              </p>
              <p style={{ color: "grey", marginTop: "5px", fontSize: "12px" }}>
                {dayjs(item?.snippet?.publishedAt).format(" MMM DD, YYYY")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
