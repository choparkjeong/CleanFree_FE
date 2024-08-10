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
    <main className={styles.container3}>
      <img src="/dummy/consultant.png" alt="Logo" className={styles.logo3} />
      <div className={styles.searchBarContainer3}>
        {/* <input
          type="text"
          placeholder="종사하고 계시는 업종을 입력해주세요."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Add this line
          className={styles.searchBar3}
        /> */}
        <button onClick={handleSearch} className={styles.searchButton3}>
          사전신청 하러가기
        </button>
      </div>
      <div className={styles.detail3}>
        고객 데이터 분석을 통해, 매출 증대를 도와드립니다.
      </div>
    </main>
  );
};

export default Page;
