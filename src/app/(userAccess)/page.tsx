"use client";

import styles from "@/styles/pages/main.module.scss";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Slider from "@/components/layout/Slider";
import Scroll from "@/components/pages/Scroll";
import MainTitle from "@/components/ui/MainTitle";
import { getDiaryList } from "@/services/getDiaryList";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setA] = useState([]);

  useEffect(() => {
    temp();
    console.log("마운트");
  }, []);

  const temp = async () => {
    setA(await getDiaryList());
  };
  // const data = await getDiaryList();
  console.log(data);

  return (
    <>
      <Header />
      <Slider />

      <main className={styles["main-container"]}>
        <MainTitle />
        <Scroll data={data} />
      </main>
      <NavBar />
    </>
  );
}
