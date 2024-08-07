"use client";

import { useState } from "react";
import styles from "@/styles/layout/header.module.scss";
import Modal from "@/components/ui/Modal";

export default function MainHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles["main-header-layout"]}>
      <ul>
        <li onClick={handleOpenModal} className={styles["text"]}>
          GUIDE
        </li>
      </ul>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </header>
  );
}
