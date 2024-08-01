import styles from "@/styles/layout/nav.module.scss";
import { TfiBackLeft } from "react-icons/tfi";

export default function ResultNav() {
  return (
    <nav className={styles["result-nav-layout"]}>
      <TfiBackLeft size={30} color="white" />
    </nav>
  );
}
