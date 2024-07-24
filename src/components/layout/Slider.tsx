"use client";

import React from "react";
import styles from "@/styles/layout/slider.module.scss";

const sliderData = [
  {
    textSmall: "피부가 좋아지는 법?",
    textMedium: "꿀팁 대방출",
    textBold: "블로그",
    linkText: "지금 보러가기 →",
    image: "사진",
  },
  {
    textSmall: "클린프리 더 알아보기!",
    textMedium: "소통해요",
    textBold: "인스타",
    linkText: "지금 보러가기 →",
    image: "사진",
  },
  {
    textSmall: "커뮤티니를 이뤄요!",
    textMedium: "함께하자",
    textBold: "카페",
    linkText: "지금 보러가기 →",
    image: "사진",
  },
  {
    textSmall: "영상으로 볼까요?",
    textMedium: "클린프리",
    textBold: "유튜브",
    linkText: "지금 보러가기 →",
    image: "사진",
  },
];

export default function Slider() {
  return (
    <div className={styles["slider-container"]}>
      <div className={styles.slider}>
        {sliderData.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles["slider-container-layout"]}>
              <div className={styles["slider-container-e1"]}>
                <div className={styles["slider-container-e1-t1"]}>
                  <div className={styles["text-small"]}>{slide.textSmall}</div>
                  <div className={styles["text-medium"]}>
                    {slide.textMedium}
                    <div className={styles["text-bold"]}>{slide.textBold}</div>
                  </div>
                </div>
                <div className={styles["slider-container-e1-t2"]}>
                  {slide.linkText}
                </div>
              </div>
              <div className={styles["slider-container-e2"]}>{slide.image}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
