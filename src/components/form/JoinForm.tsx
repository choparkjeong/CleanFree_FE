"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/pages/sign.module.scss";
import Label from "@/components/ui/Label";
import { useRouter } from "next/navigation";
import { postJoinData } from "@/services/postJoinData";

interface JoinFormProps {
  snsId?: any;
}

export default function JoinForm({ snsId }: JoinFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  useEffect(() => {
    const isValidMember = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auth/is-member`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            snsId: snsId,
          }),
        }
      );

      const data = await res.json();

      //로그인 기존 유저라면
      if (data.data) {
        router.push("/");
      }

      return;
    };

    isValidMember();
  }, []);

  const handleGenderSelect = (gender: any) => {
    setSelectedGender(gender);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await postJoinData(snsId, name, email, birthdate, selectedGender);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["join-title1"]}>클린프리</div>
      <div className={styles["join-title2"]}>정보를 입력하고 사용해봐요!</div>

      <Label title="이름" />
      <input
        className={styles["input"]}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Label title="이메일" />
      <input
        className={styles["input"]}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label title="생년월일" />
      <input
        className={styles["input"]}
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />

      <Label title="성별" />
      <div className={styles["gender-options"]}>
        <button
          type="button"
          className={`${styles["gender-button"]} ${
            selectedGender === "male" ? styles["selected"] : ""
          }`}
          onClick={() => handleGenderSelect("male")}
        >
          남
        </button>
        <button
          type="button"
          className={`${styles["gender-button"]} ${
            selectedGender === "female" ? styles["selected"] : ""
          }`}
          onClick={() => handleGenderSelect("female")}
        >
          여
        </button>
      </div>

      <button type="submit" className={styles["submit-button"]}>
        제출하기
      </button>
    </form>
  );
}
