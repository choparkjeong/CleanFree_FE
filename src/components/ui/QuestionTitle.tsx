import React from "react";
import styles from "@/styles/pages/write.module.scss";

interface QuestionTitleProps {
  text: string;
}

export default function QuestionTitle({ text }: QuestionTitleProps) {
  return (
    <div className={styles["write-question-container"]}>
      <div className={styles["write-question-title"]}>{text}</div>
      <div className={styles["write-question-line"]} />
    </div>
  );
}
