"use client";

import React from "react";
import styles from "@/styles/pages/main.module.scss";
import Link from "next/link";

// Define the shape of the raw data
interface Diary {
  diaryId: number;
  thumbnailUrl?: string;
  writeTime: string;
  dayDifference: string;
  skinStatus: string;
}

// Define the shape of a post
interface Post {
  id: number;
  image: string;
  title: string;
  temp: string;
  content: string;
}

// Update ScrollProps to accept raw data
interface ScrollProps {
  data: Diary[];
}

const Scroll: React.FC<ScrollProps> = ({ data }) => {
  // Transform the raw data into the desired format
  const posts: Post[] = data.map((diary) => ({
    id: diary.diaryId,
    image: diary.thumbnailUrl || "/dummy/defaultProfile.png",
    title: diary.writeTime,
    temp: diary.dayDifference, // Assuming dayDifference is a string like "1일전"
    content:
      diary.skinStatus === "GOOD"
        ? "좋음"
        : diary.skinStatus === "NORMAL"
        ? "보통"
        : diary.skinStatus === "BAD"
        ? "나쁨"
        : "피부상태 없음",
  }));

  return (
    <div className={styles["scroll-container"]}>
      {posts.map((post) => (
        <Link
          href={`/i/flow/detail/${post.id}`}
          key={post.id}
          className={styles["post"]}
          prefetch={false}
        >
          <img src={post.image} alt={`Image for post ${post.id}`} />
          <div className={styles["title-layout"]}>
            <h2>{post.temp}</h2>
            <h4>{post.title}</h4>
          </div>
          {post.content === "좋음" && (
            <div className={styles["status1"]}>피부가 좋았어요!</div>
          )}
          {post.content === "보통" && (
            <div className={styles["status2"]}>무난한 날이에요</div>
          )}
          {post.content === "나쁨" && (
            <div className={styles["status3"]}>고민좀 해볼까요?</div>
          )}
          {post.content === "피부상태 없음" && (
            <div className={styles["status4"]}>피부상태가 없어요</div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Scroll;
