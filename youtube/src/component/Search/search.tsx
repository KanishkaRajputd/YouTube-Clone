import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./search.module.scss";
import { SearchInputAction } from "./store/action";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };
  const handleClick = () => {
    dispatch(SearchInputAction(searchInput));
    router.push({
      pathname: "/search",
      query: { input: searchInput },
    });
  };
  return (
    <div className={s.root}>
      <input
        type="search"
        className={s.search}
        placeholder="Search"
        onChange={(e) => handleChange(e)}
      />
      <div style={{ padding: "6px" }} onClick={handleClick}>
        <img src="/search.png" />
      </div>
    </div>
  );
};
