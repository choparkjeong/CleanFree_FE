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
      await postCountData({ ip: ipAddress, service: "clearvisa" });
    };

    fetchIpAddress();
  }, [ipAddress]);

  const handleSearch = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/clearvisa/register`,
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
    <main className={styles.container7}>
      <img src="/dummy/clearvisa.png" alt="Logo" className={styles.logo7} />
      <div className={styles.searchBarContainer7}>
        <button onClick={handleSearch} className={styles.searchButton7}>
          Apply now
        </button>
      </div>
      <div className={styles.detail7}>
        We simplify the visa application process for foreigners, making it
        hassle-free.
      </div>
    </main>
  );
};

export default Page;
