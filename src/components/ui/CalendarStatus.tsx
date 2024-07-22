"use client";
import React, { useState } from "react";
import styles from "@/styles/ui/calendarStyles.module.scss";

export default function CalendarStatus() {
  return (
    <div className={styles["status-main-container"]}>
      <div className={styles["status-main-container-element"]}>
        <div className={styles["status1"]}></div>
        좋음
      </div>
      <div className={styles["status-main-container-element"]}>
        <div className={styles["status2"]}></div>
        보통
      </div>
      <div className={styles["status-main-container-element"]}>
        <div className={styles["status3"]}></div>
        나쁨
      </div>
    </div>
  );
}
