"use client";

import Calendar from "react-calendar";
import React, { useState } from "react";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "@/styles/ui/CalendarStyles.css";
import styles from "@/styles/ui/calendarStyles.module.scss";
import { useRouter } from "next/navigation";

export default function CalendarComponent() {
  const router = useRouter();

  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜

  const handleDayClick = (value: Date) => {
    console.log("Selected date:", value);
    router.push(`/write/${value}`);
  };

  // 특정 날짜에 따라 다른 CSS 클래스를 적용하는 함수
  const tileClassName = ({ date }: { date: Date }) => {
    const currentDate = moment(date).format("YYYY-MM-DD");
    const dateStyles: { [key: string]: string } = {
      "2024-07-15": styles.highlight1,
      "2024-07-16": styles.highlight2,
      "2024-07-17": styles.highlight1,
      "2024-07-03": styles.highlight1,
      "2024-07-22": styles.highlight2,
      "2024-07-01": styles.highlight1,
      "2024-07-18": styles.highlight1,
      "2024-07-19": styles.highlight1,
      "2024-07-20": styles.highlight1,
      "2024-07-21": styles.highlight3,
    };

    return dateStyles[currentDate] || null;
  };

  return (
    <div className={styles["calendar-main-container"]}>
      <Calendar
        locale="ko"
        onClickDay={handleDayClick}
        value={value}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format("D")}
        showNeighboringMonth={false}
        tileClassName={tileClassName}
      />
    </div>
  );
}
