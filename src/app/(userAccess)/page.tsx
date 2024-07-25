"use client";

import CalendarComponent from "@/components/ui/CalendarComponent";
import React, { useEffect, useState } from "react";
import styles from "@/styles/pages/main.module.scss";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import CalendarStatus from "@/components/ui/CalendarStatus";
import Slider from "@/components/layout/Slider";
import Scroll from "@/components/pages/Scroll";
import MainTitle from "@/components/ui/MainTitle";

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);
  const [isSplashChecked, setIsSplashChecked] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasSeenSplash", "true");
        setIsSplashChecked(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsSplashChecked(true);
    }
  }, []);

  if (!isSplashChecked) {
    return (
      <div className={styles["splashScreen"]}>
        <img className={styles["splashContent"]} src="/icons/MainLogo.png" />
      </div>
      // <></>
    );
  }

  const date = new Date();
  console.log(date);

  return (
    <>
      <Header />
      <Slider />

      <main className={styles["main-container"]}>
        {/* <CalendarComponent />
        <CalendarStatus /> */}
        <MainTitle />
        <Scroll />
      </main>
      <NavBar />
    </>
  );
}
