import styles from "@/styles/ui/label.module.scss";

interface LabelProps {
  title: string;
}

export default function Label({ title }: LabelProps) {
  return (
    <div className={styles["label-layout"]}>
      <div className={styles["label"]}>{title}</div>
      <div className={styles["label-star"]}>*</div>
    </div>
  );
}
