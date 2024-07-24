"use client";

import React from "react";
import styles from "@/styles/pages/main.module.scss";
import Link from "next/link";

interface Post {
  id: number;
  image: string;
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-26",
    content: "좋음",
  },
  {
    id: 2,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-25",
    content: "보통",
  },
  {
    id: 3,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-24",
    content: "나쁨",
  },
  {
    id: 4,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-23",
    content: "좋음",
  },
  {
    id: 5,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-22",
    content: "좋음",
  },
  {
    id: 6,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-21",
    content: "좋음",
  },
];

export default function Scroll() {
  return (
    <div className={styles["scroll-container"]}>
      {posts.map((post) => (
        <div key={post.id} className={styles["post"]}>
          <img src={post.image} />
          <div className={styles["title-layout"]}>
            <h2>1일전</h2>
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
        </div>
      ))}
    </div>
  );
}
