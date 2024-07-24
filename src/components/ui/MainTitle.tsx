import React from "react";
import styles from "@/styles/pages/main.module.scss";

export default function MainTitle() {
  return (
    <div className={styles["main-title-container"]}>
      <div className={styles["main-title-container-text1"]}>
        피부 & 다이어리 ✏️
      </div>
      <div className={styles["main-title-container-text2"]}>
        매일매일 나의 피부를 기록해요!
      </div>
    </div>
  );
}
