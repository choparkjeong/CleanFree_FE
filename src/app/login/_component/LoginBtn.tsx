"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/pages/login.module.scss";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const onClickKaKaoSignIn = async () => {
    await signIn("kakao", {
      redirect: true,
      callbackUrl: "/valid",
    });
  };

  return (
    <div className={styles["login-main-btn-container"]}>
      <img src="/icons/MainLogo.png" className={styles["login-logo"]} />

      <button className={styles["login-main-btn"]} onClick={onClickKaKaoSignIn}>
        <img src="/icons/kakaoIcon.png" />
        Get started with KaKao
      </button>
    </div>
  );
}
