"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/testpage/test.module.scss";
import Swal from "sweetalert2";
import { postCountData } from "@/services/postCountData";

const Page: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string | null>(null);

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
      await postCountData({ ip: ipAddress, service: "cozyhouse" });
    };

    fetchIpAddress();
  }, [ipAddress]);

  const handleSearch = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/cozyhouse/register`,
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
        title: "We have a high volume of applications at the moment.",
        text: "Please check back later",
      });
    }
  };

  return (
    <main className={styles.container8}>
      <img src="/dummy/cozyhouse.png" alt="Logo" className={styles.logo8} />
      <div className={styles.searchBarContainer8}>
        <button onClick={handleSearch} className={styles.searchButton8}>
          Apply now
        </button>
      </div>
      <div className={styles.detail8}>
        We assist foreigners with everything about house contract, ensuring a
        smooth real estate experience.
      </div>
    </main>
  );
};

export default Page;
