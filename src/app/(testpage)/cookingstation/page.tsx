"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/testpage/test.module.scss";
import Swal from "sweetalert2"; // Import SweetAlert2

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
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/cookingstation/register`,
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
        icon: "success",
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
    <main className={styles.container4}>
      <img
        src="/dummy/cookingstation.png"
        alt="Logo"
        className={styles.logo4}
      />
      <div className={styles.searchBarContainer4}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className={styles.form4}
        >
          <div className={styles.inputGroup4}>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input4}
              placeholder="이름"
              required
            />
          </div>
          <div className={styles.inputGroup4}>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input4}
              placeholder="휴대폰 번호"
              required
            />
          </div>
          <button onClick={handleSearch} className={styles.searchButton4}>
            사전신청 하러가기
          </button>
        </form>
      </div>
      <div className={styles.detail4}>
        자취러들 주목! 집에도착하면, 원하는 요리가 있습니다! 현대판 우렁각시,
        집밥 대행 서비스로 건강하게 식사하세요.
      </div>
    </main>
  );
};

export default Page;
