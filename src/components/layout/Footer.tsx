import styles from "@/styles/layout/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer-layout"]}>
      <div className={styles["footer-text1"]}>
        Firstmover에서 서비스 되는 정보는 법원경매정보 홈페이지에서 제공되는
        정보를 사용하고 있습니다. Firstmover에서 서비스하는 정보만으로 참여한
        입찰과 관련하여 발생하는 문제에 대해서 자사는 책임을 지지 않습니다.
      </div>
      <div className={styles["footer-text2"]}>사업자 등록번호</div>
      <div className={styles["footer-text1"]}>398-44-00992</div>
    </footer>
  );
}
