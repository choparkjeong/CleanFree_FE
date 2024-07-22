"use client";

import React from "react";
import styles from "@/styles/layout/slider.module.scss";

const fruits = [
  "사과",
  "바나나",
  "오렌지",
  "포도",
  "딸기",
  "키위",
  "복숭아",
  "파인애플",
  "망고",
  "수박",
  "망고",
];

export default function MainSlider() {
  return (
    <div className={styles["main-slider-container"]}>
      <div className={styles.slider}>
        {fruits.map((fruit, index) => (
          <div key={index} className={styles.slide}>
            {fruit}
          </div>
        ))}
      </div>
    </div>
  );
}
