"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/pages/result.module.scss";
import ResultHeader from "@/components/layout/ResultHeader.";
import Title from "@/components/ui/Title";

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
          </div>
        </div>
      </div>
      <Title title="성분 분석" />
      <div className={styles["result-container3"]}>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
      </div>
      <Title title="출처" />
      <div className={styles["result-container4"]}>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
        <div>성분내용</div>
      </div>
    </>
  );
};

export default Page;
