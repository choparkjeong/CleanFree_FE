"use client";

import styles from "@/styles/layout/navBar.module.scss";
// import confetti from "canvas-confetti";
import { GoHomeFill } from "react-icons/go";
import { FaThList } from "react-icons/fa";
// import { IoChatbubbleSharp } from "react-icons/io5";

// import { IoSettingsSharp } from "react-icons/io5";

export default function NavBar() {
  // const MoveContentsPage = () => {
  //   confetti({
  //     particleCount: 130,
  //     spread: 60,
  //   });
  // };
  return (
    <div className={styles["navBar-container"]}>
      <div className={styles["navBar-element"]}>
        <GoHomeFill size={35} color="black" />
        <FaThList size={35} color="black" />
        {/* <IoChatbubbleSharp size={35} color="white" />
        <IoSettingsSharp size={35} color="white" /> */}
      </div>
    </div>
  );
}
