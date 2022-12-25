import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchInputAction } from "../Search/store/action";
import s from "./sidebar.module.scss";

type DataTypes = {
  imgLink: string;
  name: string;
  redirectionPage: string;
};

export const Sidebar = () => {
  const data = [
    {
      imgLink: "/home.png",
      name: "Home",
      redirectionPage: "a",
    },
    {
      imgLink: "/shorts.png",
      name: "Shorts",
      redirectionPage: "shorts",
    },
    {
      imgLink: "/subscription.png",
      name: "Subscription",
      redirectionPage: "subscription",
    },
    {
      imgLink: "/library.png",
      name: "Library",
      redirectionPage: "library",
    },
    {
      imgLink: "/historyIcon.png",
      name: "History",
      redirectionPage: "a",
    },
    {
      imgLink: "/tranding.png",
      name: "Tranding",
      redirectionPage: "a",
    },
    {
      imgLink: "/music.png",
      name: "Music",
      redirectionPage: "a",
    },
    {
      imgLink: "/newsIcon.png",
      name: "News",
      redirectionPage: "a",
    },
    {
      imgLink: "/game.png",
      name: "Game",
      redirectionPage: "a",
    },
    {
      imgLink: "/sports.png",
      name: "Sports",
      redirectionPage: "a",
    },
    {
      imgLink: "/learning.png",
      name: "Learning",
      redirectionPage: "a",
    },
    {
      imgLink: "/fashion.png",
      name: "Fashion & Beauty",
      redirectionPage: "a",
    },
  ];
  const dispatch = useDispatch();
  const showSidebar = useSelector(
    (store: any) => store?.showSidebar?.showSidebar
  );
  const handleClick = (item: DataTypes) => {
    dispatch(SearchInputAction(item?.redirectionPage));
  };
  return (
    <div>
      {showSidebar ? (
        <div className={s.root}>
          {data?.slice(0, 4)?.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                handleClick(item);
              }}
            >
              <img src={item?.imgLink} style={{ height: "30px" }} />
              <div>{item?.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className={s.root_true}>
          {data?.map((item, index) => {
            index = index + 1;
            return (
              <>
                <div
                  key={index}
                  className={index === 4 ? s.border : ""}
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  <img src={item?.imgLink} style={{ height: "30px" }} />
                  <div style={{ marginTop: "6px" }}>{item?.name}</div>
                </div>
                {index === 4 && <div style={{ marginTop: "5px" }}>Explore</div>}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};
