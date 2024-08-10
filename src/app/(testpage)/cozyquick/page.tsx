"use client";

import React, { useState } from "react";
import styles from "@/styles/testpage/test.module.scss";
import Swal from "sweetalert2"; // Import SweetAlert2

const Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (!searchQuery) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/cozyquick/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search: searchQuery,
        }),
      }
    );

    if (res.ok) {
      Swal.fire({
        icon: "warning",
        title: "접수자가 많습니다.!",
        text: "나중에 다시 이용해주세요",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action if necessary
      handleSearch();
    }
  };

  return (
    <main className={styles.container1}>
      <img src="/dummy/cozyquick.png" alt="Logo" className={styles.logo1} />
      <div className={styles.searchBarContainer1}>
        <input
          type="text"
          placeholder="직구를 희망하는 상품명을 입력해주세요."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Add this line
          className={styles.searchBar1}
        />
        <button onClick={handleSearch} className={styles.searchButton1}>
          Search
        </button>
      </div>
      <div className={styles.detail1}>
        상품명만 입력해주시면, 기존 직구보다 평균 7일 일찍 집 앞으로
        배송해드립니다.{" "}
      </div>
    </main>
  );
};

export default Page;
