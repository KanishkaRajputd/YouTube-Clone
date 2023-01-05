import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { HistoryAction } from "../History/store/action";
import Sidebar from "../Sidebar";
import s from "./shorts.module.scss";

type DataType = {
  data: any[];
};
export const Shorts = ({ data }: DataType) => {
  const dispatch = useDispatch();

  return (
    <div className={s.root}>
      <Sidebar />
      <div className={s.sideContent}>
        {data?.map((item: any, index: number) => (
          <div
            className={s.card}
            key={index}
            onClick={() => {
              dispatch(HistoryAction(item));
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
