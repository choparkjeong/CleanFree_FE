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
      await postCountData({ ip: ipAddress, service: "carrycabin" });
    };

    fetchIpAddress();
  }, [ipAddress]);

  const handleSearch = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/carrycabin/register`,
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
    <main className={styles.container6}>
      <img src="/dummy/carrycabin.png" alt="Logo" className={styles.logo6} />
      <div className={styles.searchBarContainer6}>
        <button onClick={handleSearch} className={styles.searchButton6}>
          Apply now
        </button>
      </div>
      <div className={styles.detail6}>
        When you arrive at the airport, we will deliver your luggage directly to
        your hotel. Enjoy a comfortable trip with us!
      </div>
    </main>
  );
};

export default Page;
