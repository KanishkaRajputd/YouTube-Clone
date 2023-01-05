import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowSize from "../../../hooks/useWindowSize";
import { SearchInputAction } from "../Search/store/action";
import s from "./sidebar.module.scss";

type sizetypes = {
  width: number;
  height: number;
};
type DataTypes = {
  imgLink: string;
  name: string;
  redirectionPage: string;
};

export const Sidebar = () => {
  const router = useRouter();
  const size = useWindowSize();
  const data = [
    {
      imgLink: "/home.png",
      name: "Home",
      redirectionPage: "",
    },
    {
      imgLink: "/shorts.png",
      name: "Shorts",
      redirectionPage: "shorts videos",
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
      redirectionPage: "history",
    },
    {
      imgLink: "/tranding.png",
      name: "Tranding",
      redirectionPage: "tranding",
    },
    {
      imgLink: "/music.png",
      name: "Music",
      redirectionPage: "music",
    },
    {
      imgLink: "/newsIcon.png",
      name: "News",
      redirectionPage: "news",
    },
    {
      imgLink: "/game.png",
      name: "Game",
      redirectionPage: "game",
    },
    {
      imgLink: "/sports.png",
      name: "Sports",
      redirectionPage: "sports",
    },
    {
      imgLink: "/learning.png",
      name: "Learning",
      redirectionPage: "learning",
    },
    {
      imgLink: "/fashion.png",
      name: "Fashion & Beauty",
      redirectionPage: "fashion",
    },
  ];
  const dispatch = useDispatch();
  const showSidebar = useSelector(
    (store: any) => store?.showSidebar?.showSidebar
  );
  const handleClick = (item: DataTypes) => {
    dispatch(SearchInputAction(item?.redirectionPage));
    router.push({
      pathname: "/search",
      query: { input: item?.redirectionPage },
    });
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
        size?.width > 300 &&
        !router?.query?.id && (
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
                  {index === 4 && (
                    <div style={{ marginTop: "5px" }}>Explore</div>
                  )}
                </>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};
