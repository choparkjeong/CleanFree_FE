"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/pages/result.module.scss";
import ResultHeader from "@/components/layout/ResultHeader.";
import Title from "@/components/ui/Title";
import { FaYoutube, FaBlogger, FaLink } from "react-icons/fa";
import Link from "next/link";
import ResultFooter from "@/components/layout/ResultFooter";
import ResultNav from "@/components/layout/ResultNav";
import { getResultData } from "@/services/getResultData";

interface Review {
  score: any;
  summary: string;
}

interface Cosmetic {
  cosmetic: string;
  image: string;
  costRange: string;
  url: string;
  maxReview: Review;
  minReview: Review;
}

interface References {
  youtube: string[];
  blog: string[];
  etc: string[];
}

interface ResultData {
  resultId: string;
  memberUuid: string;
  question: string;
  answer: string;
  cosmetics: Cosmetic[];
  ingredients: string[];
  references: References;
  isAnalyze: boolean;
}

const Page: React.FC = (props) => {
  const pathName: any = props;
  const [resultData, setResultData] = useState<ResultData | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    // 상세 리스트 불러오기
    const handleListData = async () => {
      const data = await getResultData(pathName.params.id);
      setResultData(data);
    };

    handleListData();

    //케러셀 확대 동작
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;

      const containerWidth = container.clientWidth;
      const centerX = containerWidth / 2;
      const items = Array.from(
        container.querySelectorAll(`.${styles["scroll-item"]}`)
      );

      let closestIndex = 0;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const itemCenterX =
          itemRect.left - containerRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      // console.log(`Active index: ${closestIndex}`); // Debugging statement

      setActiveIndex(closestIndex);
    };

    container?.addEventListener("scroll", handleScroll);
    // Trigger scroll handler initially to set the correct index
    handleScroll();

    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  //글 길이
  const truncate = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  return (
    <>
      <ResultHeader />
      <Title title="검색 내용" />
      <div className={styles["result-container1"]}>{resultData?.question}</div>
      <Title title="검색 답변" />
      <div className={styles["result-container1"]}>{resultData?.answer}</div>
      <Title title="화장품 추천" />
      <div className={styles["result-container2"]}>
        <Link
          href={resultData?.cosmetics[activeIndex].url || "#"}
          className={styles["details"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles["details-layout1"]}>
            <img
              src={resultData?.cosmetics[activeIndex].image}
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
            />
          </div>
          <div className={styles["details-layout2"]}>
            <div className={styles["details-layout2-element1"]}>
              {resultData?.cosmetics[activeIndex]?.cosmetic || "Loading..."}
            </div>
            <div className={styles["details-layout2-element2"]}>
              ⓘ 가격 :{" "}
              {resultData?.cosmetics[activeIndex]?.costRange || "Loading..."}
            </div>
            <div className={styles["details-layout2-element3"]}>
              <div className={styles["review1"]}>
                {"★".repeat(resultData?.cosmetics[activeIndex].maxReview.score)}

                <div>
                  {resultData?.cosmetics[activeIndex].maxReview.summary}
                </div>
              </div>
              <div className={styles["review2"]}>
                {"★".repeat(resultData?.cosmetics[activeIndex].minReview.score)}

                <div>
                  {resultData?.cosmetics[activeIndex].minReview.summary}
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className={styles["scroll-container"]} ref={containerRef}>
          <div className={styles["scroll-content"]}>
            <div className={styles["scroll-item-dummy"]}></div>

            {resultData?.cosmetics?.map((product, index) => (
              <div
                key={product.cosmetic + index}
                className={`${styles["scroll-item"]} ${
                  activeIndex === index ? styles["active"] : ""
                }`}
              >
                <img
                  src={product.image}
                  alt="이미지 없음"
                  style={{ width: "55px", height: "55px", borderRadius: "5px" }}
                />
                <div>{truncate(product.cosmetic, 20)}</div>
              </div>
            ))}
            <div className={styles["scroll-item-dummy"]}></div>
          </div>
        </div>
      </div>
      <Title title="성분 분석" />
      <div className={styles["result-container3"]}>
        {resultData?.ingredients.map((ingredient, index) => (
          <div key={index}>{ingredient}</div>
        ))}
      </div>
      <Title title="출처 및 참고" />
      <div className={styles["result-container4"]}>
        {resultData?.references.youtube.map((url, index) => (
          <div key={`youtube-${index}`} className={styles["reference-item1"]}>
            <Link
              href={url}
              className={styles["link1"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube /> 바로가기
            </Link>
          </div>
        ))}
        {resultData?.references.blog.map((url, index) => (
          <div key={`blog-${index}`} className={styles["reference-item2"]}>
            <Link
              href={url}
              className={styles["link2"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBlogger /> 바로가기
            </Link>
          </div>
        ))}
        {resultData?.references.etc.map((url, index) => (
          <div key={`etc-${index}`} className={styles["reference-item3"]}>
            <Link
              href={url}
              className={styles["link3"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink /> 바로가기
            </Link>
          </div>
        ))}
      </div>
      <ResultFooter />
      <ResultNav />
    </>
  );
};

export default Page;
