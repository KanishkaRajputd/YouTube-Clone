import React from "react";
import Content from "../Content";
import HomeNav from "../HomeNav";
import Sidebar from "../Sidebar";
import s from "./home.module.scss";

export const HomeComponent = () => {
  return (
    <div className={s.root}>
      <Sidebar />

      <div className={s.content}>
        <HomeNav />
        <Content />
      </div>
    </div>
  );
};
