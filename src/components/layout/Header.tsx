"use client";

import styles from "@/styles/layout/header.module.scss";
import { GoBell } from "react-icons/go";
// import Slider from "@/components/layout/Slider";

export default function Header() {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-element"]}>
        <div className={styles["header-element-title1"]}>
          <div>클린프리</div>와 함께
        </div>
        <div className={styles["header-element-title2"]}>
          피부 일지를 기록해보세요! 🎯
        </div>
      </div>
    </div>
  );
}
