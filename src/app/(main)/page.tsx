import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main>
      <img
        src="/icons/PwaLogo.png"
        style={{
          width: "300px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </main>
  );
}
