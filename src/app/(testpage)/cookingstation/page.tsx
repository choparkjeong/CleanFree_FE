"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/testpage/test.module.scss";
import Swal from "sweetalert2"; // Import SweetAlert2

const Page: React.FC = () => {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    // IP 주소를 가져오는 API 호출
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);

  const handleSearch = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/cookingstation/register`,
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
    <main className={styles.container4}>
      <img
        src="/dummy/cookingstation.png"
        alt="Logo"
        className={styles.logo4}
      />
      <div className={styles.searchBarContainer4}>
        <button onClick={handleSearch} className={styles.searchButton4}>
          사전신청 하러가기
        </button>
      </div>
      <div className={styles.detail4}>
        자취러들 주목! 집에도착하면, 원하는 요리가 있습니다! 현대판 우렁각시,
        집밥 대행 서비스로 건강하게 식사하세요.
      </div>
    </main>
  );
};

export default Page;
