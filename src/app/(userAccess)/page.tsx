import styles from "@/styles/pages/main.module.scss";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Slider from "@/components/layout/Slider";
import Scroll from "@/components/pages/Scroll";
import MainTitle from "@/components/ui/MainTitle";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />

      <main className={styles["main-container"]}>
        <MainTitle />
        <Scroll />
      </main>
      <NavBar />
      <Footer />
    </>
  );
}
