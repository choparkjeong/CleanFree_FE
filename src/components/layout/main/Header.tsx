"use client";

import styles from "@/styles/layout/header.module.scss";

export default function Header() {
  return (
    <div className={styles["main-header-container"]}>
      <div className={styles["main-header-element"]}>
        <div className={styles["main-header-content1"]}>
          <img
            className={styles["main-header-content1-img"]}
            src="/icons/MainLogo.png"
          ></img>
          <div className={styles["main-header-content1-div-container"]}>
            <div>나만의 피부 일지!</div>
            <div>ooo님 어서오세요!</div>
          </div>
        </div>
        <div className={styles["main-header-content2"]}>
          <div className={styles["main-header-content2-e"]}>
            <div className={styles["main-header-content2-e-light1"]}></div>좋음
          </div>
          <div className={styles["main-header-content2-e"]}>
            <div className={styles["main-header-content2-e-light2"]}></div>보통
          </div>
          <div className={styles["main-header-content2-e"]}>
            <div className={styles["main-header-content2-e-light3"]}></div>나쁨
          </div>
        </div>
      </div>
    </div>
  );
}
