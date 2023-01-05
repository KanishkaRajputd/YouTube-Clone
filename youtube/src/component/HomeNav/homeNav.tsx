import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useWindowSize from "../../../hooks/useWindowSize";
import { SearchInputAction } from "../Search/store/action";
import s from "./homeNav.module.scss";

type SuggestionsTypes = {
  id: number;
  name: string;
};

export const HomeNav = () => {
  const router = useRouter();
  const suggetions: SuggestionsTypes[] = [
    { id: 1, name: "All" },
    { id: 2, name: "music" },
    { id: 3, name: "gaming" },
    { id: 4, name: "neha kakkar" },
    { id: 5, name: "songs" },
    { id: 7, name: "amit" },
    { id: 8, name: "arman" },
    { id: 9, name: "jubin" },
    { id: 10, name: "kanishka" },
  ];
  const dispatch = useDispatch();
  const handleClick = (item: SuggestionsTypes) => {
    dispatch(SearchInputAction(item?.name));
    router.push({ pathname: "/search", query: { input: item?.name } });
  };
  const size = useWindowSize();

  return (
    <div className={s.root}>
      {size?.width ||
        (0 > 1010 &&
          suggetions?.map((item) => (
            <div key={item?.id} onClick={() => handleClick(item)}>
              {item?.name}
            </div>
          )))}
      {size?.width ||
        (0 > 790 && size?.width) ||
        (0 < 1011 &&
          suggetions?.slice(0, 7).map((item) => (
            <div key={item?.id} onClick={() => handleClick(item)}>
              {item?.name}
            </div>
          )))}
      {size?.width ||
        (0 > 20 && size?.width) ||
        (0 < 791 &&
          suggetions?.slice(0, 1).map((item) => (
            <div key={item?.id} onClick={() => handleClick(item)}>
              {item?.name}
            </div>
          )))}
    </div>
  );
};
