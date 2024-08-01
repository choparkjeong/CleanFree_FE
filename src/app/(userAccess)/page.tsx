"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/pages/main.module.scss";
import MainHeader from "@/components/layout/MainHeader";
import { FaPaperPlane } from "react-icons/fa";
import useAutosizeTextArea from "@/hooks/useAutosizeTextArea";
import Link from "next/link";
import CircleAnimation from "@/components/ui/CircleAnimation";
import { RiInstallLine } from "react-icons/ri";

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const textareaRef = useAutosizeTextArea(inputValue);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height before setting new height
      const scrollHeight = textarea.scrollHeight;
      const maxHeight = 250; // Maximum height

      textarea.style.height =
        scrollHeight > maxHeight ? `${maxHeight}px` : `${scrollHeight}px`;
    }
  }, []);

  // Scroll items data
  const scrollItems = [
    { time: "분석중...", content: "분석중" },
    { time: "3시간 전", content: "내용" },
    { time: "날짜", content: "내용" },
    { time: "하루 전", content: "내용" },
    { time: "2일 전", content: "내용" },
    { time: "한달 전", content: "내용" },
  ];

  /*PWA 유도 하기*/
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleBeforeInstallPrompt = (event: Event) => {
    event.preventDefault();
    setDeferredPrompt(event);
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("사용자가 설치 프롬프트에 동의했습니다.");
        } else {
          console.log("사용자가 설치 프롬프트를 무시했습니다.");
        }

        setDeferredPrompt(null);
      });
    }
  };

  return (
    <>
      {deferredPrompt && (
        <div
          onClick={handleInstallClick}
          style={{ width: "100px", height: "300px", background: "red" }}
        >
          fsdafsd
        </div>
      )}

      <MainHeader />
      <main className={styles["main-layout"]}>
        {/* 로고 이미지 */}
        {/* <div className={styles["logo-container"]}>
          <img
            src="/icons/CleanFreeLogo.png"
            alt="Logo"
            className={styles["logo-image"]}
          />
        </div> */}

        <CircleAnimation />

        {/* <div className={styles["guide-container"]}>
          <div className={styles["top-left"]}>가이드1</div>
          <div className={styles["top-right"]}>가이드2</div>
          <div className={styles["bottom-left"]}>가이드3</div>
          <div className={styles["bottom-right"]}>가이드4</div>
        </div> */}

        <div style={{ width: "100%" }}>
          {/* 스크롤 리스트 */}
          <div className={styles["scroll-container"]}>
            <div className={styles["scroll-list"]}>
              {scrollItems.map((item, index) => (
                <Link
                  href={"/result/1"}
                  key={index}
                  className={styles["scroll-item"]}
                >
                  <div className={styles["scroll-item1"]}>{item.time}</div>
                  <div className={styles["scroll-item2"]}>{item.content}</div>
                </Link>
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
            <button className={styles["search-btn"]}>
              <FaPaperPlane size={20} color="#69cdb5" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
