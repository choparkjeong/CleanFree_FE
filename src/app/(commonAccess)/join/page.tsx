import { auth } from "@/auth";
import JoinForm from "@/components/form/JoinForm";
import styles from "@/styles/pages/sign.module.scss";

export default async function Page() {
  const session = await auth();
  console.log("join에서 호출한 auth", session?.user.email);
  return (
    <main className={styles["join-layout"]}>
      <JoinForm snsId={session?.user.email} />
    </main>
  );
}
