"use client";

import React, { useState, ChangeEvent, FocusEvent } from "react";
import styles from "@/styles/pages/write.module.scss";
import QuestionTitle from "@/components/ui/QuestionTitle";

export default function SkinCareDiary() {
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [value1, setValue1] = useState<string>(
    "클렌징 제품 (Ex. 엠퀴리 클렌징 오일, 독도 클렌징 폼)"
  );
  const [value2, setValue2] = useState<string>(
    "스킨케어 제품 (Ex. 독도 토너, 에스네이처 스쿠알란크림)"
  );
  const [value3, setValue3] = useState<string>(
    "기타 제품 (Ex. 브링그린 알로에 팩)"
  );
  const [value4, setValue4] = useState<string>(
    "운동 기록 (Ex. 유산소 30분, 헬스 1시간)"
  );
  const [value5, setValue5] = useState<string>(
    "오늘 먹은 음식 (Ex. 된장찌개, 돈까스)"
  );
  const [sleepHours, setSleepHours] = useState<number | null>(null); // 초기값을 null로 설정

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

  console.log(sleepHours);

  return (
    <div className={styles["write-skinCareDiary-container"]}>
      {/* 오늘의 피부 상태 */}
      <div style={{ paddingTop: "15vh" }} />
      <QuestionTitle text="😁 오늘의 피부 상태는?" />
      <div className={styles["write-SkinCareDiary-checkBox"]}>
        <label>
          <input
            type="radio"
            name="status"
            value="좋음"
            checked={selectedStatus === "좋음"}
            onChange={handleChange}
          />
          <div>좋음🟢</div>
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="보통"
            checked={selectedStatus === "보통"}
            onChange={handleChange}
          />
          <div>보통🟡</div>
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="나쁨"
            checked={selectedStatus === "나쁨"}
            onChange={handleChange}
          />
          <div>나쁨🔴</div>
        </label>
      </div>

      {/* 오늘의 피부 일지 */}
      <div style={{ paddingTop: "5vh" }} />
      <QuestionTitle text="✏️ 피부일지를 작성해요!" />
      <textarea className={styles["write-SkinCareDiary-textArea"]} />

      {/* 오늘의 피부 사진 */}
      <div style={{ paddingTop: "5vh" }} />
      <QuestionTitle text="📷 현재 피부를 사진으로 기록해봐요!" />
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
          onFocus={(e) =>
            handleFocus(
              e,
              "클렌징 제품 (Ex. 엠퀴리 클렌징 오일, 독도 클렌징 폼)"
            )
          }
          onBlur={(e) =>
            handleBlur(
              e,
              setValue1,
              "클렌징 제품 (Ex. 엠퀴리 클렌징 오일, 독도 클렌징 폼)"
            )
          }
        />
      </div>
      <div className={styles["write-SkinCareDiary-input-container"]}>
        <input
          type="text"
          value={value2}
          onChange={(e) => handleInputChange(e, setValue2)}
          onFocus={(e) =>
            handleFocus(
              e,
              "스킨케어 제품 (Ex. 독도 토너, 에스네이처 스쿠알란크림)"
            )
          }
          onBlur={(e) =>
            handleBlur(
              e,
              setValue2,
              "스킨케어 제품 (Ex. 독도 토너, 에스네이처 스쿠알란크림)"
            )
          }
        />
      </div>
      <div className={styles["write-SkinCareDiary-input-container"]}>
        <input
          type="text"
          value={value3}
          onChange={(e) => handleInputChange(e, setValue3)}
          onFocus={(e) => handleFocus(e, "기타 제품 (Ex. 브링그린 알로에 팩)")}
          onBlur={(e) =>
            handleBlur(e, setValue3, "기타 제품 (Ex. 브링그린 알로에 팩)")
          }
        />
      </div>

      {/* 오늘의 생활습관 */}
      <div style={{ paddingTop: "5vh" }} />
      <QuestionTitle text="🌗 생활습관을 기록해요!" />

      {/* 수면시간 드롭다운 */}
      <div className={styles["write-SkinCareDiary-sleep-container"]}>
        <select
          value={sleepHours === null ? "" : sleepHours}
          onChange={handleSleepHoursChange}
        >
          <option value="" disabled>
            수면 시간
          </option>{" "}
          {/* 기본 옵션 */}
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
          onFocus={(e) =>
            handleFocus(e, "운동 기록 (Ex. 유산소 30분, 헬스 1시간)")
          }
          onBlur={(e) =>
            handleBlur(e, setValue4, "운동 기록 (Ex. 유산소 30분, 헬스 1시간)")
          }
        />
      </div>
      <div className={styles["write-SkinCareDiary-input-container"]}>
        <input
          type="text"
          value={value5}
          onChange={(e) => handleInputChange(e, setValue5)}
          onFocus={(e) =>
            handleFocus(e, "오늘 먹은 음식 (Ex. 된장찌개, 돈까스)")
          }
          onBlur={(e) =>
            handleBlur(e, setValue5, "오늘 먹은 음식 (Ex. 된장찌개, 돈까스)")
          }
        />
      </div>
      {/* footer 패딩 */}
      <div style={{ paddingTop: "17vh" }} />
    </div>
  );
}
