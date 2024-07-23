"use client";

import React from "react";
import styles from "@/styles/layout/navBar.module.scss";

export default function WriteNavBar() {
  return (
    <div className={styles["writeNavBar-container"]}>
      <div className={styles["writeNavBar-container-btn"]}>저장하기</div>
    </div>
  );
}
