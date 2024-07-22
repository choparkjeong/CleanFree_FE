"use client";

import React from "react";
import styles from "@/styles/ui/categorySlider.module.scss";

const fruits = ["제품 추천", "생활 습관", "피부관리팁", "개별맞춤팁"];

export default function CategorySlider() {
  return (
    <div className={styles["categorySlider-container"]}>
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
