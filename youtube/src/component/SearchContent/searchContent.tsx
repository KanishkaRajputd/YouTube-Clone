import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HistoryAction } from "../History/store/action";
import HomeNav from "../HomeNav";
import Sidebar from "../Sidebar";
import s from "./searchContent.module.scss";

type videoTypes = {
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: Date;
    description: string;
  };
  id: {
    videoId: string;
  };
};

export const SearchContent = ({ data }: any) => {
  const [video, setVideo] = useState<videoTypes>();
  const [moreData, setMoreData] = useState<videoTypes[]>([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const videoId = router?.query?.id;

  useEffect(() => {
    const moreData = data.filter((item: any) => item?.id?.videoId !== videoId);
    setMoreData(moreData);
    const video = data.find((item: any) => item?.id?.videoId === videoId);
    setVideo(video);
  }, []);

  return (
    <div className={s.root}>
      <div className={s.leftContent}>
        <Sidebar />
        <div className={s.content}>
          <iframe
            allowFullScreen
            style={{ height: "75%", width: "100%", borderRadius: "20px" }}
            src={`https://www.youtube.com/embed/${videoId}`}
          />

          <div className={s.description}>
            <p>{video?.snippet?.title}</p>
            <p className={s.description}>{video?.snippet?.channelTitle}</p>
          </div>
          <div className={s.contentDescription}>
            <p> {dayjs(video?.snippet?.publishedAt).format(" MMM DD, YYYY")}</p>
            <p style={{ width: "50%" }}> {video?.snippet?.description}</p>
          </div>
        </div>
      </div>

      <div className={s.sideContent}>
        {moreData?.map((item, index) => (
          <div
            className={s.card}
            key={index}
            onClick={() => {
              router.push({
                pathname: `/search/${item?.id?.videoId}`,
              });

              dispatch(HistoryAction(item));
            }}
          >
            <iframe
              allowFullScreen
              style={{ height: "100%", width: "50%", borderRadius: "20px" }}
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
