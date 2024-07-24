"use client";

import React from "react";
import styles from "@/styles/layout/slider.module.scss";

const fruits = ["네이버 블로그", "인스타", "네이버카페", "유튜브"];

export default function Slider() {
  return (
    <div className={styles["slider-container"]}>
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
