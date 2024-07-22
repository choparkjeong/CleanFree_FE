import CalendarComponent from "@/components/ui/CalendarComponent";
import React from "react";
import styles from "@/styles/pages/main.module.scss";
import MainHeader from "@/components/layout/main/MainHeader";
// import Footer from "@/components/layout/main/Footer";
import NavBar from "@/components/layout/NavBar";
import CalendarStatus from "@/components/ui/CalendarStatus";
// import MainSlider from "@/components/layout/main/MainSlider";
// import CircleAnimation from "@/components/ui/CircleAnimation";

export default function Home() {
  return (
    <>
      <MainHeader />
      {/* 배너 저작권 표시
      https://kr.freepik.com/free-vector/desk-calendar-with-marked-dates-3d-cartoon-style-icon-planning-time-and-meeting-scheduling-flat-vector-illustration-appointment-deadline-agenda-reminder-time-management-concept_29119114.htm#page=2&query=%EC%A2%85%203d&position=39&from_view=keyword&track=ais_user&uuid=32c1f6c5-459d-453e-b083-07ad8a0e3f05"작가 pch.vector출처 Freepik */}
      <img
        src="/banner/MainBanner.png"
        className={styles["main-banner-img"]}
      ></img>
      <main className={styles["main-container"]}>
        <CalendarComponent />
        <CalendarStatus />
      </main>
      <NavBar />
    </>
  );
}
