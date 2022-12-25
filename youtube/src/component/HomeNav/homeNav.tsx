import React from "react";
import { useDispatch } from "react-redux";
import { SearchInputAction } from "../Search/store/action";
import s from "./homeNav.module.scss";

type SuggestionsTypes = {
  id: number;
  name: string;
};

export const HomeNav = () => {
  const suggetions: SuggestionsTypes[] = [
    { id: 1, name: "All" },
    { id: 2, name: "Music" },
    { id: 3, name: "Gaming" },
    { id: 4, name: "neha kakkar" },
    { id: 5, name: "songs" },
    { id: 7, name: "amit badhana" },
    { id: 8, name: "arman malik" },
    { id: 9, name: "jubin" },
    { id: 10, name: "kanishka rajput" },
    { id: 10, name: "guitar" },
    { id: 10, name: "food " },
    { id: 10, name: "travel" },
    { id: 10, name: "love" },
    { id: 10, name: "sad" },
  ];
  const dispatch = useDispatch();
  const handleClick = (item: SuggestionsTypes) => {
    dispatch(SearchInputAction(item?.name));
  };
  return (
    <div className={s.root}>
      {suggetions?.map((item) => (
        <div key={item?.id} onClick={() => handleClick(item)}>
          {item?.name}
        </div>
      ))}
    </div>
  );
};
