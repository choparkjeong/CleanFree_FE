import styles from "@/styles/pages/main.module.scss";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Slider from "@/components/layout/Slider";
import Scroll from "@/components/pages/Scroll";
import MainTitle from "@/components/ui/MainTitle";
import { getDiaryList } from "@/services/getDiaryList";

export default async function Home() {
  const data = await getDiaryList();
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
