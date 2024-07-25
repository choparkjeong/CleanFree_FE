"use client";

import SkinCareDiary from "@/components/pages/SkinCareDiary";
import WriteHeader from "@/components/layout/WriteHeader";
import WriteNavBar from "@/components/layout/WirteNavBar";

export default function Page() {
  return (
    <main>
      <WriteHeader />
      <SkinCareDiary />
      <WriteNavBar />
    </main>
  );
}
