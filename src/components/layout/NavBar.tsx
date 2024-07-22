"use client";

import styles from "@/styles/layout/navBar.module.scss";
// import confetti from "canvas-confetti";
import { GoHomeFill } from "react-icons/go";
import { FaThList } from "react-icons/fa";
import Link from "next/link";
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
        <Link href={"/"}>
          <GoHomeFill size={35} color="black" />
        </Link>
        <Link href={"/detail"}>
          <FaThList size={35} color="black" />
        </Link>
        {/* <IoChatbubbleSharp size={35} color="white" />
        <IoSettingsSharp size={35} color="white" /> */}
      </div>
    </div>
  );
}
