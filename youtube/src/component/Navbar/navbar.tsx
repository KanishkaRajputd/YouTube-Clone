/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SidebarAction } from "./store/action";
import s from "./navbar.module.scss";
import Search from "../Search";

export const Navbar = () => {
  const showSidebar = useSelector(
    (store: any) => store?.showSidebar?.showSidebar
  );
  const dispatch = useDispatch();

  return (
    <div className={s.root}>
      <div onClick={() => dispatch(SidebarAction(!showSidebar))}>
        <img src="/menu.png" style={{ height: "30px", margin: "10px 5px" }} />
      </div>
      <div>
        <img src="/youtube.png" style={{ height: "40px", margin: "5px 5px" }} />
      </div>
      <div style={{ padding: "14px" }}>YouTube</div>
      <div className={s.searchbar}>
        <Search />
      </div>
      <div />
      <div style={{ padding: "14px" }}>:</div>
      <div className={s.signin}>
        <div>Sign in</div>
        <div>
          <img src="/user.png" style={{ height: "20px" }} />
        </div>
      </div>
    </div>
  );
};
