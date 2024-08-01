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
          <p>Details for item {activeIndex + 1}</p>
        </div>
        <div className={styles["scroll-container"]} ref={containerRef}>
          <div className={styles["scroll-content"]}>
            <div className={styles["scroll-item-dummy"]}></div>

            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={index}
                className={`${styles["scroll-item"]} ${
                  activeIndex === index ? styles["active"] : ""
                }`}
              >
                Item {index + 1}
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
