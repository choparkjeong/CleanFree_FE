"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/testpage/test.module.scss";
import Swal from "sweetalert2"; // Import SweetAlert2
import { postCountData } from "@/services/postCountData";

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
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/curesilver/register`,
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
    <main className={styles.container5}>
      <img src="/dummy/curesliver.png" alt="Logo" className={styles.logo5} />
      <div className={styles.searchBarContainer5}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className={styles.form5}
        >
          <div className={styles.inputGroup5}>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input5}
              placeholder="이름"
              required
            />
          </div>
          <div className={styles.inputGroup5}>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input5}
              placeholder="휴대폰 번호"
              required
            />
          </div>
          <button onClick={handleSearch} className={styles.searchButton5}>
            사전신청 하러가기
          </button>
        </form>
      </div>
      <div className={styles.detail5}>
        요양원 노인 데이터 수기 관리, 이제 프로그램으로 간편하게 관리하세요.
      </div>
    </main>
  );
};

export default Page;
