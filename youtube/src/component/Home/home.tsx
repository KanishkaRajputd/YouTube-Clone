import React from "react";
import Content from "../Content";
import HomeNav from "../HomeNav";
import Sidebar from "../Sidebar";
import s from "./home.module.scss";

type DataType = {
  data: any[];
};

export const HomeComponent = ({ data }: DataType) => {
  return (
    <div className={s.root}>
      <Sidebar />
      <div className={s.content}>
        <HomeNav />
        <Content data={data} />
      </div>
    </div>
  );
};
