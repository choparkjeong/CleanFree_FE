import CalendarComponent from "@/components/ui/CalendarComponent";
import React from "react";
import styles from "@/styles/pages/main.module.scss";
import Header from "@/components/layout/main/Header";
import Footer from "@/components/layout/main/Footer";

export default function Home() {
  return (
    <main className={styles["main-container"]}>
      <Header />
      <CalendarComponent />
      <Footer />
    </main>
  );
}
