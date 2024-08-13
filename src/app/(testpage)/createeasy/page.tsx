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
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/createeasy/register`,
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
    <main className={styles.container10}>
      <img src="/dummy/createeasy.png" alt="Logo" className={styles.logo10} />
      <div className={styles.searchBarContainer10}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className={styles.form10}
        >
          <div className={styles.inputGroup10}>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input10}
              placeholder="이름을 입력하세요"
              required
            />
          </div>
          <div className={styles.inputGroup10}>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input10}
              placeholder="번호를 입력하세요"
              required
            />
          </div>
          <button type="submit" className={styles.searchButton10}>
            사전신청 하러가기
          </button>
        </form>
      </div>
      <div className={styles.detail10}>
        트렌드에 맞는 콘텐츠 기획하기 어려우신가요? 저희가 도와드릴게요.
      </div>
    </main>
  );
};

export default Page;
