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

// Define product data with reviews and ratings
const products = [
  {
    id: 1,
    name: "레드 블레미쉬 수딩 업 선1",
    image: "/dummy/productImg.png",
    costRange: "10000 ~ 20000원",
    reviews: [
      { rating: 5, text: "너무 좋아요 그냥 100만원을 해도 살겁니다 ㅋㅋ" },
      { rating: 1, text: "너무 싫어요 그냥 100만원을 줘도 안 살겁니다 ㅋㅋ" },
    ],
  },
  {
    id: 2,
    name: "레드 블레미쉬 수딩 업 선2",
    image: "/dummy/productImg.png",
    costRange: "20000 ~ 30000원",
    reviews: [
      { rating: 4, text: "괜찮아요, 가격도 적당하고 사용할만해요." },
      { rating: 2, text: "별로였어요. 다시는 안 사요." },
    ],
  },
  {
    id: 3,
    name: "레드 블레미쉬 수딩 업 선3",
    image: "/dummy/productImg.png",
    costRange: "30000 ~ 40000원",
    reviews: [
      { rating: 3, text: "그럭저럭 괜찮지만, 기대보다 별로." },
      { rating: 5, text: "매우 만족합니다. 추천해요!" },
    ],
  },
  {
    id: 4,
    name: "레드 블레미쉬 수딩 업 선4",
    image: "/dummy/productImg.png",
    costRange: "40000 ~ 50000원",
    reviews: [
      { rating: 4, text: "전체적으로 만족스럽습니다." },
      { rating: 3, text: "보통이에요. 다시는 안 사요." },
    ],
  },
  {
    id: 5,
    name: "레드 블레미쉬 수딩 업 선5",
    image: "/dummy/productImg.png",
    costRange: "50000 ~ 60000원",
    reviews: [
      { rating: 5, text: "정말 좋습니다. 계속 사용할 예정입니다." },
      { rating: 4, text: "가격 대비 좋은 제품입니다." },
    ],
  },
  {
    id: 6,
    name: "레드 블레미쉬 수딩 업 선6",
    image: "/dummy/productImg.png",
    costRange: "60000 ~ 70000원",
    reviews: [
      { rating: 2, text: "별로였어요. 다시는 안 사요." },
      { rating: 4, text: "나쁘지 않아요. 사용해 볼만 합니다." },
    ],
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
      <div className={styles["result-container1"]}>
        평소에 피부가 간지럽다가, 어쩔때는 좋고 가끔씩 아닐때도 있음 ㅇㅇ
        그래서, 약간 더울때는 밖에나가면 썬크림 바를때도 있고 아닐때도 있어서,
        그냥 아픔 ㅇㅇ 해결좀 아 그냥 뭐써야하는지 ㅇㅇ
      </div>
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
              {products[activeIndex]?.reviews.map((review, index) => (
                <div key={index} className={styles[`review${index + 1}`]}>
                  <div>{"⭐".repeat(review.rating)}</div>
                  <div>{review.text}</div>
                </div>
              ))}
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
