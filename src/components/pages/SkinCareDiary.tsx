"use client";

import React, { useState } from "react";
import "./SkinCareDiary.scss";

// 초기 상태 정의
const initialProductsState = {
  cleansing: "",
  skincare: "",
  others: "",
};

const SkinCareDiary: React.FC = () => {
  const [date] = useState(new Date().toLocaleDateString());
  const [skinCondition, setSkinCondition] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [skinPhoto, setSkinPhoto] = useState<File | null>(null);
  const [products, setProducts] = useState(initialProductsState);
  const [editMode, setEditMode] = useState({
    cleansing: false,
    skincare: false,
    others: false,
  });
  const [lifestyle, setLifestyle] = useState({
    sleep: 0,
    exercise: "",
    food: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSkinPhoto(e.target.files[0]);
    }
  };

  const handleEditMode = (field: "cleansing" | "skincare" | "others") => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const handleProductChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "cleansing" | "skincare" | "others"
  ) => {
    setProducts({ ...products, [field]: e.target.value });
  };

  const handleLifestyleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: "sleep" | "exercise" | "food"
  ) => {
    setLifestyle({ ...lifestyle, [field]: e.target.value });
  };

  return (
    <main className="skin-care-diary-container">
      <div className="skin-care-diary">
        <h2>오늘 날짜: {date}</h2>
        <div className="section">
          <h3>오늘 피부상태</h3>
          <div className="skin-condition">
            <label>
              <input
                type="radio"
                name="skinCondition"
                value="좋음"
                onChange={() => setSkinCondition("좋음")}
              />{" "}
              좋음
            </label>
            <label>
              <input
                type="radio"
                name="skinCondition"
                value="보통"
                onChange={() => setSkinCondition("보통")}
              />{" "}
              보통
            </label>
            <label>
              <input
                type="radio"
                name="skinCondition"
                value="나쁨"
                onChange={() => setSkinCondition("나쁨")}
              />{" "}
              나쁨
            </label>
          </div>
          <div className="diary-entry">
            <h4>피부 일지(기록)</h4>
            <textarea
              value={diaryEntry}
              onChange={(e) => setDiaryEntry(e.target.value)}
            />
          </div>
          <div className="photo-upload">
            <h4>현재 피부 사진 업로드</h4>
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>
        <div className="section">
          <h3>현재 사용 제품</h3>
          <div className="product">
            <h4>클렌징 제품</h4>
            {editMode.cleansing ? (
              <input
                type="text"
                value={products.cleansing}
                onChange={(e) => handleProductChange(e, "cleansing")}
              />
            ) : (
              <p>{products.cleansing}</p>
            )}
            <button onClick={() => handleEditMode("cleansing")}>
              {editMode.cleansing ? "저장" : "수정"}
            </button>
          </div>
          <div className="product">
            <h4>스킨케어 제품</h4>
            {editMode.skincare ? (
              <input
                type="text"
                value={products.skincare}
                onChange={(e) => handleProductChange(e, "skincare")}
              />
            ) : (
              <p>{products.skincare}</p>
            )}
            <button onClick={() => handleEditMode("skincare")}>
              {editMode.skincare ? "저장" : "수정"}
            </button>
          </div>
          <div className="product">
            <h4>기타 제품</h4>
            {editMode.others ? (
              <input
                type="text"
                value={products.others}
                onChange={(e) => handleProductChange(e, "others")}
              />
            ) : (
              <p>{products.others}</p>
            )}
            <button onClick={() => handleEditMode("others")}>
              {editMode.others ? "저장" : "수정"}
            </button>
          </div>
        </div>
        <div className="section">
          <h3>생활습관</h3>
          <div className="lifestyle">
            <label>수면 시간: </label>
            <select
              value={lifestyle.sleep}
              onChange={(e) => handleLifestyleChange(e, "sleep")}
            >
              {/* {[...Array(13).keys()].map((i) => (
              <option key={i} value={i}>
                {i}시간
              </option>
            ))} */}
            </select>
          </div>
          <div className="lifestyle">
            <label>운동: </label>
            <input
              type="text"
              value={lifestyle.exercise}
              onChange={(e) => handleLifestyleChange(e, "exercise")}
            />
          </div>
          <div className="lifestyle">
            <label>오늘 먹은 음식: </label>
            <input
              type="text"
              value={lifestyle.food}
              onChange={(e) => handleLifestyleChange(e, "food")}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkinCareDiary;
