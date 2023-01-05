import React from "react";
import s from "./shimmer.module.scss";

export const Shimmer = () => {
  console.log(1);

  return (
    <div className={s.root}>
      {/* {data?.map((item) => (
        <div className={s.card} key={item?.id}>
          <div style={{ height: "200px" }}></div>

          <div className={s.text}>
            <p>{item?.snippet?.title}</p>
            <p>{item?.snippet?.channelTitle}</p>
          </div>
        </div>
      ))} */}
      {/* {console.log(data)} */}
    </div>
  );
};
