"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/pages/result.module.scss";
import ResultHeader from "@/components/layout/ResultHeader.";
import Title from "@/components/ui/Title";
import { FaYoutube, FaBlogger, FaLink } from "react-icons/fa";
import Link from "next/link";
import ResultFooter from "@/components/layout/ResultFooter";
import ResultNav from "@/components/layout/ResultNav";

interface Reference {
  youtube: string[];
  blog: string[];
  etc: string[];
}

const references: Reference = {
  youtube: ["https://youtube.com/xxxx", "https://youtube.com/yyyy"],
  blog: ["https://xxxx"],
  etc: ["https://xxxx"],
};

// Define product data
const products = [
  {
    id: 1,
    name: "레드 블레미쉬 수딩 업 선1",
    image: "/dummy/productImg.png",
    costRange: "10000 ~ 20000원",
  },
  {
    id: 2,
    name: "레드 블레미쉬 수딩 업 선2",
    image: "/dummy/productImg.png",
    costRange: "20000 ~ 30000원",
  },
  {
    id: 3,
    name: "레드 블레미쉬 수딩 업 선3",
    image: "/dummy/productImg.png",
    costRange: "30000 ~ 40000원",
  },
  {
    id: 4,
    name: "레드 블레미쉬 수딩 업 선4",
    image: "/dummy/productImg.png",
    costRange: "40000 ~ 50000원",
  },
  {
    id: 5,
    name: "레드 블레미쉬 수딩 업 선5",
    image: "/dummy/productImg.png",
    costRange: "50000 ~ 60000원",
  },
  {
    id: 6,
    name: "레드 블레미쉬 수딩 업 선6",
    image: "/dummy/productImg.png",
    costRange: "60000 ~ 70000원",
  },
];

const Page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
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

      console.log(`Active index: ${closestIndex}`); // Debugging statement

      setActiveIndex(closestIndex);
    };

    container?.addEventListener("scroll", handleScroll);
    // Trigger scroll handler initially to set the correct index
    handleScroll();

    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ResultHeader />
      <Title title="검색 내용" />
      <div className={styles["result-container1"]}>제목입니다.</div>
      <Title title="화장품 추천" />
      <div className={styles["result-container2"]}>
        <div className={styles["details"]}>
          <div className={styles["details-layout1"]}>
            <img
              src={products[activeIndex].image}
              alt={"이미지"}
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
            />
          </div>
          <div className={styles["details-layout2"]}>
            <div className={styles["details-layout2-element1"]}>
              {products[activeIndex]?.name || "Loading..."}
            </div>
            <div className={styles["details-layout2-element2"]}>
              ⓘ 가격 : {products[activeIndex]?.costRange || "Loading..."}
            </div>
            <div className={styles["details-layout2-element3"]}>
              <div className={styles["review1"]}>
                <div>⭐⭐⭐⭐⭐</div>
                <div>너무 좋아요 그냥 100만원을 해도 살겁니다 ㅋㅋ</div>
              </div>
              <div className={styles["review2"]}>
                {" "}
                <div>⭐</div>
                <div>너무 싫어요 그냥 100만원을 줘도 안 살겁니다 ㅋㅋ</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["scroll-container"]} ref={containerRef}>
          <div className={styles["scroll-content"]}>
            <div className={styles["scroll-item-dummy"]}></div>

            {products.map((product, index) => (
              <div
                key={product.id}
                className={`${styles["scroll-item"]} ${
                  activeIndex === index ? styles["active"] : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "55px", height: "55px", borderRadius: "5px" }}
                />
                <div>{product.name}</div>
              </div>
            ))}
            <div className={styles["scroll-item-dummy"]}></div>
          </div>
        </div>
      </div>
      <Title title="성분 분석" />
      <div className={styles["result-container3"]}>
        <div>글리세린</div>
        <div>히알루론산 (Hyaluronic Acid)</div>
        <div>세라마이드</div>
        <div>비타민 E</div>
        <div>녹차 추출물</div>
        <div>징크 옥사이드</div>
        <div>글리콜산</div>
        <div>티타늄 이산화물 (Titanium Dioxide)</div>
        <div>판테놀</div>
        <div>에센셜 오일 (Essential Oils)</div>
      </div>
      <Title title="출처 및 참고" />
      <div className={styles["result-container4"]}>
        {references.youtube.map((url, index) => (
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
        {references.blog.map((url, index) => (
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
        {references.etc.map((url, index) => (
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
