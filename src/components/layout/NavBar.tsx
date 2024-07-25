"use client";

import styles from "@/styles/layout/navBar.module.scss";
import { GoHomeFill } from "react-icons/go";
import { FaThList } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPencil } from "react-icons/fa6";

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
          href={"/write"}
          className={styles["navBar-iconWithText-container"]}
        >
          {/* <GoHomeFill size={35} color="black" /> */}

          {pathName === "/write" ? (
            <>
              <FaPencil size={35} color="#8bdd9c" />
              <div className={styles["navBar-iconWithText-container-text1"]}>
                WRITE
              </div>
            </>
          ) : (
            <>
              <FaPencil size={35} color="#e3e3e3" />
              <div className={styles["navBar-iconWithText-container-text2"]}>
                WRITE
              </div>
            </>
          )}
        </Link>
      </div>
    </div>
  );
}
