"use client";

import styles from "@/styles/layout/navBar.module.scss";
import { GoHomeFill } from "react-icons/go";
import { FaThList } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();

  return (
    <div className={styles["navBar-container"]}>
      <div className={styles["navBar-element"]}>
        <Link href={"/"} className={styles["navBar-iconWithText-container"]}>
          {/* <GoHomeFill size={35} color="black" /> */}

          {pathName === "/" ? (
            <>
              <GoHomeFill size={35} color="#8bdd9c" />
              <div className={styles["navBar-iconWithText-container-text1"]}>
                HOME
              </div>
            </>
          ) : (
            <>
              <GoHomeFill size={35} color="#e3e3e3" />
              <div className={styles["navBar-iconWithText-container-text2"]}>
                HOME
              </div>
            </>
          )}
        </Link>
        <Link
          href={"/detail"}
          className={styles["navBar-iconWithText-container"]}
        >
          {/* <GoHomeFill size={35} color="black" /> */}

          {pathName === "/detail" ? (
            <>
              <FaThList size={35} color="#8bdd9c" />
              <div className={styles["navBar-iconWithText-container-text1"]}>
                BOARD
              </div>
            </>
          ) : (
            <>
              <FaThList size={35} color="#e3e3e3" />
              <div className={styles["navBar-iconWithText-container-text2"]}>
                BOARD
              </div>
            </>
          )}
        </Link>
      </div>
    </div>
  );
}
