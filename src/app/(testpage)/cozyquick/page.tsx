"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/testpage/test.module.scss";
import Swal from "sweetalert2"; // Import SweetAlert2
import { postCountData } from "@/services/postCountData";

const Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
      await postCountData({ ip: ipAddress, service: "cozyquick" });
    };

    fetchIpAddress();
  }, [ipAddress]);

  // Handle search function
  const handleSearch = async () => {
    if (!searchQuery) return;

    // Check if IP address is available
    if (!ipAddress) {
      console.warn("IP address not available");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/cozyquick/search`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            search: searchQuery,
            ip: ipAddress,
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
    } catch (error) {
      console.error("Error during search", error);
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
          onKeyDown={handleKeyDown}
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
