"use client";

import styles from "@/styles/layout/header.module.scss";
import { GoBell } from "react-icons/go";
import MainSlider from "@/components/layout/main/MainSlider";

export default function MainHeader() {
  return (
    <div className={styles["main-header-container"]}>
      <div className={styles["main-header-element"]}>
        <img
          className={styles["main-header-content1-img"]}
          src="/icons/MainLogo.png"
        ></img>
        <div className={styles["main-header-content1-input"]}></div>
        <div className={styles["main-header-content1-alarm"]}>
          <GoBell size={30} />
        </div>
      </div>
      <MainSlider />
    </div>
  );
}
