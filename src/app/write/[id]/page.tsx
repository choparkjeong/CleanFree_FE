"use client";

import styles from "@/styles/pages/write.module.scss";
import SkinCareDiary from "@/components/pages/SkinCareDiary";
import WriteHeader from "@/components/layout/WriteHeader";

export default function Page() {
  return (
    <main>
      <WriteHeader />
      <SkinCareDiary />
    </main>
  );
}
