import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Scroll from "@/components/pages/Scroll";
import CategorySlider from "@/components/ui/CategorySlider";
import styles from "@/styles/pages/detail.module.scss";

export default function Page() {
  return (
    <>
      <main>
        <Header />
      </main>
      <CategorySlider />
      <article className={styles["detail-scroll-container"]}>
        <Scroll />
      </article>
      <NavBar />
    </>
  );
}
