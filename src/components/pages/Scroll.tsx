"use client";

import React from "react";
import styles from "@/styles/pages/detail.module.scss";
import Link from "next/link";

export default function Scroll() {
  function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  }

  const longText =
    "안녕하세요. 피부 여드름, 피부 흉터로 인해 스트레스를 받는 사람들을 위한 카페장 클린프리입니다. 클린프리는 Clean (깔끔한) Free (자유로운, ~ 없는)이라는 두 가지의 뜻을 가진 단어로 만들어졌습니다.";

  return (
    <>
      <Link
        href="https://m.blog.naver.com/zerotoone_1/223517300425"
        className={styles["detail-scroll-element"]}
      >
        <div className={styles["detail-scroll-element-cover"]}>
          <div className={styles["detail-scroll-element-cover-date"]}>
            2024.07.18
          </div>
          <img
            className={styles["detail-scroll-element-cover-img"]}
            src="/dummy/thumnail.png"
          ></img>
          <div className={styles["detail-scroll-element-cover-title"]}>
            클린프리가 피부 여드름, 피부 흉터 문제를 가장 잘 풀수밖에 없는 이유
          </div>
          <div className={styles["detail-scroll-element-cover-content"]}>
            {truncateText(longText, 60)}
          </div>
        </div>
      </Link>

      <Link
        href="https://m.blog.naver.com/zerotoone_1/223517300425"
        className={styles["detail-scroll-element"]}
      >
        <div className={styles["detail-scroll-element-cover"]}>
          <div className={styles["detail-scroll-element-cover-date"]}>
            2024.07.18
          </div>

          <img
            className={styles["detail-scroll-element-cover-img"]}
            src="/dummy/thumnail.png"
          ></img>
          <div className={styles["detail-scroll-element-cover-title"]}>
            클린프리가 피부 여드름, 피부 흉터 문제를 가장 잘 풀수밖에 없는 이유
          </div>
          <div className={styles["detail-scroll-element-cover-content"]}>
            {truncateText(longText, 60)}
          </div>
        </div>
      </Link>

      <Link
        href="https://m.blog.naver.com/zerotoone_1/223517300425"
        className={styles["detail-scroll-element"]}
      >
        <div className={styles["detail-scroll-element-cover"]}>
          <div className={styles["detail-scroll-element-cover-date"]}>
            2024.07.18
          </div>
          <img
            className={styles["detail-scroll-element-cover-img"]}
            src="/dummy/thumnail.png"
          ></img>
          <div className={styles["detail-scroll-element-cover-title"]}>
            클린프리가 피부 여드름, 피부 흉터 문제를 가장 잘 풀수밖에 없는 이유
          </div>
          <div className={styles["detail-scroll-element-cover-content"]}>
            {truncateText(longText, 60)}
          </div>
        </div>
      </Link>
    </>
  );
}
