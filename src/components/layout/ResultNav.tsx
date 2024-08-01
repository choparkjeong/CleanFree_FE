import styles from "@/styles/layout/nav.module.scss";
import Link from "next/link";
import { TfiBackLeft } from "react-icons/tfi";

export default function ResultNav() {
  return (
    <Link href={"/"} className={styles["result-nav-layout"]}>
      <TfiBackLeft size={30} color="white" />
    </Link>
  );
}
