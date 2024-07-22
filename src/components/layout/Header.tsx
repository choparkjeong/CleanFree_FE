"use client";

import styles from "@/styles/layout/header.module.scss";
import { GoBell } from "react-icons/go";
import Slider from "@/components/layout/Slider";

export default function Header() {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-element"]}>
        <img
          className={styles["header-content1-img"]}
          src="/icons/MainLogo.png"
        ></img>
        <div className={styles["header-content1-input"]}></div>
        <div className={styles["header-content1-alarm"]}>
          <GoBell size={30} />
        </div>
      </div>
      <Slider />
    </div>
  );
}
