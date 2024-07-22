import CalendarComponent from "@/components/CalendarComponent";
import React from "react";
import styles from "@/styles/pages/main.module.scss";

export default function Home() {
  return (
    <main className={styles["main-container"]}>
      <CalendarComponent />
    </main>
  );
}
