"use client";

import React, { useState, ChangeEvent, FocusEvent } from "react";
import styles from "@/styles/pages/write.module.scss";
import QuestionTitle from "@/components/ui/QuestionTitle";

export default function SkinCareDiary() {
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [value1, setValue1] = useState<string>("클렌징 제품");
  const [value2, setValue2] = useState<string>("스킨케어 제품");
  const [value3, setValue3] = useState<string>("기타 제품");
  const [value4, setValue4] = useState<string>("운동 기록");
  const [value5, setValue5] = useState<string>("오늘 먹은 음식");
  const [sleepHours, setSleepHours] = useState<number>(7); // State for sleep hours

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedStatus(value);
    console.log(value);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    } else {
      setPreviewUrl("");
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(event.target.value);
  };

  const handleFocus = (
    event: FocusEvent<HTMLInputElement>,
    defaultValue: string
  ) => {
    if (event.target.value === defaultValue) {
      event.target.value = "";
    }
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    defaultValue: string
  ) => {
    if (event.target.value === "") {
      setValue(defaultValue);
    }
  };

  const handleSleepHoursChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSleepHours(Number(event.target.value));
  };

  return (
    <div className={styles["write-skinCareDiary-container"]}>
      {/* 오늘의 피부 상태 */}
      <div style={{ paddingTop: "15vh" }} />
      <QuestionTitle text="😁 오늘의 상태는?" />
      <div className={styles["write-SkinCareDiary-checkBox"]}>
        <label>
          <input
            type="radio"
            name="status"
            value="좋음"
            checked={selectedStatus === "좋음"}
            onChange={handleChange}
          />
          좋음🟢
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="보통"
            checked={selectedStatus === "보통"}
            onChange={handleChange}
          />
          보통🟡
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="나쁨"
            checked={selectedStatus === "나쁨"}
            onChange={handleChange}
          />
          나쁨🔴
        </label>
      </div>

      {/* 오늘의 피부 일지 */}
      <div style={{ paddingTop: "5vh" }} />
      <QuestionTitle text="✏️ 피부일지를 작성해요!" />
      <textarea className={styles["write-SkinCareDiary-textArea"]} />
      <button className={styles["write-SkinCareDiary-textArea-btn"]}>
        Save
      </button>

      {/* 오늘의 피부 사진 */}
      <div style={{ paddingTop: "5vh" }} />
      <QuestionTitle text="📷 현재 피부를 확인해봐요!" />
      {previewUrl && (
        <div className={styles["write-SkinCareDiary-photoPreview"]}>
          <img
            src={previewUrl}
            alt="Preview"
            className={styles["write-SkinCareDiary-photo-img"]}
          />
        </div>
      )}
      <div className={styles["write-SkinCareDiary-photoBtn-container"]}>
        <label
          className={styles["write-SkinCareDiary-photoBtn"]}
          htmlFor="input-file"
        >
          업로드
        </label>
        <input
          type="file"
          id="input-file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      {/* 오늘의 사용 상품 */}
      <div style={{ paddingTop: "5vh" }} />
      <QuestionTitle text="🧴 현재 사용 제품은 무엇인가요?" />
      <div className={styles["write-SkinCareDiary-input-container"]}>
        <input
          type="text"
          value={value1}
          onChange={(e) => handleInputChange(e, setValue1)}
          onFocus={(e) => handleFocus(e, "클렌징 제품")}
          onBlur={(e) => handleBlur(e, setValue1, "클렌징 제품")}
        />
        <button>저장</button>
      </div>
      <div className={styles["write-SkinCareDiary-input-container"]}>
        <input
          type="text"
          value={value2}
          onChange={(e) => handleInputChange(e, setValue2)}
          onFocus={(e) => handleFocus(e, "스킨케어 제품")}
          onBlur={(e) => handleBlur(e, setValue2, "스킨케어 제품")}
        />
        <button>저장</button>
      </div>
      <div className={styles["write-SkinCareDiary-input-container"]}>
        <input
          type="text"
          value={value3}
          onChange={(e) => handleInputChange(e, setValue3)}
          onFocus={(e) => handleFocus(e, "기타 제품")}
          onBlur={(e) => handleBlur(e, setValue3, "기타 제품")}
        />
        <button>저장</button>
      </div>

      {/* 오늘의 생활습관 */}
      <div style={{ paddingTop: "5vh" }} />
      <QuestionTitle text="🌗 생활습관을 기록해요!" />

      {/* 수면시간 드롭다운 */}
      <div className={styles["write-SkinCareDiary-sleep-container"]}>
        <div>수면 시간</div>
        <select value={sleepHours} onChange={handleSleepHoursChange}>
          {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
            <option key={hour} value={hour}>
              {hour} 시간
            </option>
          ))}
        </select>
      </div>

      <div className={styles["write-SkinCareDiary-input-container"]}>
        <input
          type="text"
          value={value4}
          onChange={(e) => handleInputChange(e, setValue4)}
          onFocus={(e) => handleFocus(e, "운동 기록")}
          onBlur={(e) => handleBlur(e, setValue4, "운동 기록")}
        />
        <button>저장</button>
      </div>
      <div className={styles["write-SkinCareDiary-input-container"]}>
        <input
          type="text"
          value={value5}
          onChange={(e) => handleInputChange(e, setValue5)}
          onFocus={(e) => handleFocus(e, "오늘 먹은 음식")}
          onBlur={(e) => handleBlur(e, setValue5, "오늘 먹은 음식")}
        />
        <button>저장</button>
      </div>
      {/* footer 패딩 */}
      <div style={{ paddingTop: "10vh" }} />
    </div>
  );
}
