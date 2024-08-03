"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/pages/sign.module.scss";
import { signIn, signOut } from "next-auth/react";
import { sessionValid } from "@/utils/session/sessionValid";

export default function LoginBtn() {
  const onClickKaKaoSignIn = async () => {
    await signIn("kakao", {
      redirect: true,
      callbackUrl: "/join",
    });
  };

  return (
    <div className={styles["login-btn-container"]}>
      <button className={styles["login-btn"]} onClick={onClickKaKaoSignIn}>
        <img
          src="/icons/kakaoIcon.png"
          style={{ width: "35px", height: "35px" }}
        />
        카카오톡으로 로그인
      </button>
    </div>
  );
}
