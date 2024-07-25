"use client";

import styles from "@/styles/pages/login.module.scss";
import LoginBtn from "@/app/login/_component/LoginBtn";
import React from "react";

export default function Page() {
  return (
    <main className={styles["login-container"]}>
      <LoginBtn />
    </main>
  );
}
