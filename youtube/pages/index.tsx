import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../src/component/Navbar";
import HomeComponent from "../src/component/Home";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeComponent />
    </div>
  );
}
