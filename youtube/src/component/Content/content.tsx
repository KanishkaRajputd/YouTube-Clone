import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HistoryAction } from "../History/store/action";
import s from "./content.module.scss";

type DataType = {
  data: any[];
};
export const Content = ({ data }: DataType) => {
  const input = useSelector((store: any) => store?.searchInput?.searchInput);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className={s.root}>
      {data?.map((item) => (
        <div
          className={s.card}
          key={item?.id}
          onClick={() => {
            router.push({ ...router, pathname: `search/${item?.id?.videoId}` });
            dispatch(HistoryAction(item));
          }}
        >
          <div>
            <img
              src={item?.snippet?.thumbnails?.high?.url}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className={s.text}>
            <p>{item?.snippet?.title}</p>
            <p>{item?.snippet?.channelTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
