"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/testpage/test.module.scss";
import Swal from "sweetalert2"; // Import SweetAlert2
import { postCountData } from "@/services/postCountData";

const Page: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string | null>(null); // Use string | null to handle initial state

  useEffect(() => {
    // Function to fetch IP address
    const fetchIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIpAddress();
  }, []);

  useEffect(() => {
    // Function to fetch IP address
    const fetchIpAddress = async () => {
      await postCountData({ ip: ipAddress, service: "createvalue" });
    };

    fetchIpAddress();
  }, [ipAddress]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (!searchQuery) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/createvalue/search`,
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
    <main className={styles.container2}>
      <img src="/dummy/createvalue.png" alt="Logo" className={styles.logo2} />
      <div className={styles.searchBarContainer2}>
        <input
          type="text"
          placeholder="가지고 있는 능력들을 모두 자유롭게 기입해주세요."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Add this line
          className={styles.searchBar2}
        />
        <button onClick={handleSearch} className={styles.searchButton2}>
          Search
        </button>
      </div>
      <div className={styles.detail2}>
        입력하신 능력들을 토대로, 수익 전환 방법들을 찾고 과정을 도와드립니다.
      </div>
    </main>
  );
};

export default Page;
