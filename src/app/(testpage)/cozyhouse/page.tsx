"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/testpage/test.module.scss";
import Swal from "sweetalert2";

const Page: React.FC = () => {
  const [name, setName] = useState<string>(""); // State for the name
  const [phoneNumber, setPhoneNumber] = useState<string>(""); // State for the phone number

  const handleSearch = async () => {
    if (!name || !phoneNumber) {
      Swal.fire({
        icon: "error",
        title: "입력 오류",
        text: "이름과 번호를 모두 입력해 주세요.",
      });
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/cozyhouse/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phoneNumber,
        }),
      }
    );
    if (res.ok) {
      Swal.fire({
        icon: "warning",
        title: "접수되었습니다.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "서버 오류",
        text: "서버에 문제가 발생했습니다. 나중에 다시 시도해 주세요.",
      });
    }
  };

  return (
    <main className={styles.container8}>
      <img src="/dummy/cozyhouse.png" alt="Logo" className={styles.logo8} />
      <div className={styles.searchBarContainer8}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className={styles.form8}
        >
          <div className={styles.inputGroup8}>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input8}
              placeholder="name"
              required
            />
          </div>
          <div className={styles.inputGroup8}>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input8}
              placeholder="phone number"
              required
            />
          </div>
          <button type="submit" className={styles.searchButton8}>
            Apply Now
          </button>
        </form>
      </div>
      <div className={styles.detail8}>
        We assist foreigners with everything about house contract, ensuring a
        smooth real estate experience.
      </div>
    </main>
  );
};

export default Page;
