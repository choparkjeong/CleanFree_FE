"use client";

import styles from "@/styles/pages/login.module.scss";
import LoginBtn from "@/app/login/_component/LoginBtn";
import React, { useEffect, useState } from "react";

export default function Page() {
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

  return (
    <main className={styles["login-container"]}>
      <LoginBtn />
    </main>
  );
}
