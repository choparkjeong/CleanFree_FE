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
  const [sleepHours, setSleepHours] = useState<number | null>(null);
  const [isAlcoholConsumed, setIsAlcoholConsumed] = useState<boolean>(false);
  const [isExercised, setIsExercised] = useState<boolean>(false);
  const [product, setProduct] = useState<string>("");
  const [products, setProducts] = useState<string[]>([]);

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

  const toggleAlcoholConsumption = () => {
    setIsAlcoholConsumed((prev) => !prev);
  };

  const toggleExerciseStatus = () => {
    setIsExercised((prev) => !prev);
  };

  const handleProductChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value);
  };

  const addProduct = () => {
    if (product.trim() !== "") {
      setProducts((prevProducts) => [...prevProducts, product.trim()]);
      setProduct(""); // Clear the input field
    }
  };

  const removeProduct = (index: number) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

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
          value={product}
          onChange={handleProductChange}
          placeholder="제품명을 입력해주세요"
        />
        <button onClick={addProduct}>추가</button>
      </div>
      <div className={styles["write-SkinCareDiary-products-container"]}>
        {products.map((item, index) => (
          <div
            key={index}
            className={styles["product-tag"]}
            onClick={() => removeProduct(index)}
          >
            <div>{item}</div>
            <div className={styles["product-tag-delete"]}>X</div>
          </div>
        ))}
      </div>

      {/* 오늘의 생활습관 */}
      <div style={{ paddingTop: "5vh" }} />
      <QuestionTitle text="🌗 생활습관을 기록해요!" />

      {/* 음주 여부 및 운동 여부 */}
      <div className={styles["write-SkinCareDiary-lifestyle-container"]}>
        <button
          className={`${styles["write-SkinCareDiary-toggleButton1"]} ${
            isAlcoholConsumed ? styles.active : ""
          } ${isAlcoholConsumed ? styles.redBorder : ""}`}
          onClick={toggleAlcoholConsumption}
        >
          {isAlcoholConsumed ? "🍺음주 O" : "어제 술을 마셨으면 클릭해주세요!"}
        </button>
        <button
          className={`${styles["write-SkinCareDiary-toggleButton2"]} ${
            isExercised ? styles.active : ""
          } ${isExercised ? styles.redBorder : ""}`}
          onClick={toggleExerciseStatus}
        >
          {isExercised ? "👟운동 O" : "운동하셨다면 클릭해주세요!"}
        </button>
      </div>

      {/* 수면시간 드롭다운 */}
      <div className={styles["write-SkinCareDiary-sleep-container"]}>
        <select
          value={sleepHours === null ? "" : sleepHours}
          onChange={handleSleepHoursChange}
        >
          <option value="" disabled>
            수면 시간
          </option>
          {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
            <option key={hour} value={hour}>
              {hour} 시간
            </option>
          ))}
        </select>
      </div>

      {/* 오늘의 피부 일지 */}
      <div style={{ paddingTop: "5vh" }} />
      <QuestionTitle text="✏️ 기타 메모" />
      <div className={styles["write-SkinCareDiary-textArea-container"]}>
        <textarea className={styles["write-SkinCareDiary-textArea"]} />
      </div>

      {/* footer 패딩 */}
      <div style={{ paddingTop: "17vh" }} />
    </div>
  );
}
