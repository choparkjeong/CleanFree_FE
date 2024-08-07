// Modal.js
import styles from "@/styles/ui/modal.module.scss";

export default function Modal({ onClose }: any) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <img src="/dummy/guide.png" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
