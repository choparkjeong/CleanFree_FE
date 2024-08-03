"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/pages/main.module.scss";
import MainHeader from "@/components/layout/MainHeader";
import { FaPaperPlane } from "react-icons/fa";
import useAutosizeTextArea from "@/hooks/useAutosizeTextArea";
import Link from "next/link";
import CircleAnimation from "@/components/ui/CircleAnimation";
import { postSearchData } from "@/services/postSearchData";
import { getListData } from "@/services/getListData";
import { truncateText } from "@/utils/text/truncateText";

export const revalidate = 60;

const Home: React.FC = () => {
  //test

  const [inputValue, setInputValue] = useState<string>("");
  const [listData, setListData] = useState<any[]>([]);
  const [refresh, setRefresh] = useState(false);
  const textareaRef = useAutosizeTextArea(inputValue);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      const maxHeight = 250;

      textarea.style.height =
        scrollHeight > maxHeight ? `${maxHeight}px` : `${scrollHeight}px`;
    }

    // 리스트 불러오는 API 호출
    const handleListData = async () => {
      const data = await getListData();
      setListData(data);
    };

    handleListData();
  }, [refresh]);

  // 검색 API 호출
  const handleSearchClick = async () => {
    if (inputValue.trim()) {
      await postSearchData(inputValue);
      setInputValue("");
      setRefresh(!refresh);
    }
  };

  const scrollItems = listData
    .slice()
    .reverse()
    .map((item) => ({
      resultId: item.resultId,
      question: item.question,
      time: item.dayDifference,
      content: item.isAnalyze,
    }));

  return (
    <>
      <MainHeader />

      <main className={styles["main-layout"]}>
        <CircleAnimation />
        <div style={{ width: "100%" }}>
          {/* 스크롤 리스트 */}
          <div className={styles["scroll-container"]}>
            <div className={styles["scroll-list"]}>
              {scrollItems.map((item, index) => (
                <div key={index}>
                  {item.content && (
                    <Link
                      href={`/result/${item.resultId}`}
                      className={styles["scroll-item"]}
                    >
                      <div className={styles["scroll-item1"]}>{item.time}</div>
                      <div className={styles["scroll-item2"]}>
                        {truncateText(item.question, 15)}
                      </div>
                    </Link>
                  )}
                  {!item.content && (
                    <div className={styles["scroll-item"]}>
                      <div className={styles["scroll-item1-invalid"]}>
                        분석중
                      </div>
                      <div className={styles["scroll-item2-invalid"]}>
                        {truncateText(item.question, 15)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 검색창 */}
          <div className={styles["search-container"]}>
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="피부 고민을 적어봐요!"
              className={styles["search-input"]}
              rows={1}
            />
            <button
              className={styles["search-btn"]}
              onClick={handleSearchClick}
            >
              <FaPaperPlane size={20} color="#69cdb5" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
