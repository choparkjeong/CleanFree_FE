"use client";

import React, { useState } from "react";
import styles from "@/styles/layout/header.module.scss";
import { IoArrowBack } from "react-icons/io5";

export default function WriteHeader() {
  return (
    <header className={styles["writeHeader-container"]}>
      <div className={styles["writeHeader-element"]}>
        <IoArrowBack size={30} className={styles["writeHeader-element-e1"]} />
        <div className={styles["writeHeader-element-title"]}>오늘의 피부</div>
        <IoArrowBack size={30} className={styles["writeHeader-element-e2"]} />
      </div>
    </header>
  );
}
