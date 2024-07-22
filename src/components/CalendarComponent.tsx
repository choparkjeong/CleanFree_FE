"use client";

import Calendar from "react-calendar";
import React from "react";
import "react-calendar/dist/Calendar.css";
import "@/styles/ui/CalendarStyles.css";
import styles from "@/styles/ui/calendarStyles.module.scss";

export default function CalendarComponent() {
  return (
    <div className={styles["calendar-main-container"]}>
      <Calendar locale="ko" />
    </div>
  );
}
