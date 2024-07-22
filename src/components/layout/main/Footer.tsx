"use client";

import styles from "@/styles/layout/footer.module.scss";
import confetti from "canvas-confetti";

export default function Footer() {
  const MoveContentsPage = () => {
    confetti({
      particleCount: 130,
      spread: 60,
    });
  };
  return (
    <div className={styles["main-footer-container"]}>
      <div className={styles["main-footer-element"]} onClick={MoveContentsPage}>
        오늘 내 피부에 필요한 컨텐츠는?🎉
      </div>
    </div>
  );
}
