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
      await postCountData({ ip: ipAddress, service: "consultant" });
    };

    fetchIpAddress();
  }, [ipAddress]);

  const handleSearch = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/consultant/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
