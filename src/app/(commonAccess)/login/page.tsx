import styles from "@/styles/pages/sign.module.scss";
import LoginBtn from "./_component/LoginBtn";

export default function Page() {
  return (
    <main className={styles["login-layout"]}>
      <div className={styles["login-container"]}>
        <img
          src="/icons/CleanFreeLogo.png"
          alt="Logo"
          style={{ width: "150px", height: "150px" }}
        />
        <LoginBtn />
      </div>
    </main>
  );
}
