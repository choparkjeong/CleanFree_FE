import styles from "@/styles/ui/title.module.scss";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className={styles["title-layout"]}>
      <div className={styles["line"]}></div>
      <div className={styles["title"]}>ⓘ {title}</div>
    </div>
  );
}
