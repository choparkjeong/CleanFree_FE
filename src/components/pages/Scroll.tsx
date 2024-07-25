"use client";

import React from "react";
import styles from "@/styles/pages/main.module.scss";
import Link from "next/link";

interface Post {
  id: number;
  image: string;
  title: string;
  temp: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    image: "/dummy/test1.jpg",
    title: "2024-07-26",
    temp: "1일전",
    content: "좋음",
  },
  {
    id: 2,
    image: "/dummy/test2.jpg",
    title: "2024-07-25",
    temp: "2일전",
    content: "보통",
  },
  {
    id: 3,
    image: "/dummy/test3.jpg",
    title: "2024-07-24",
    temp: "3일전",
    content: "나쁨",
  },
  {
    id: 4,
    image: "/dummy/test4.jpg",
    title: "2024-07-23",
    temp: "4일전",
    content: "좋음",
  },
  {
    id: 5,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-22",
    temp: "1일전",
    content: "좋음",
  },
  {
    id: 6,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-21",
    temp: "1일전",
    content: "좋음",
  },
  {
    id: 7,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-20",
    temp: "1일전",
    content: "좋음",
  },
  {
    id: 8,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-19",
    temp: "1일전",
    content: "좋음",
  },
  {
    id: 9,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-18",
    temp: "1일전",
    content: "좋음",
  },
  {
    id: 10,
    image: "/dummy/iuprofile.jpg",
    title: "2024-07-17",
    temp: "1일전",
    content: "좋음",
  },
];

export default function Scroll() {
  return (
    <div className={styles["scroll-container"]}>
      {posts.map((post) => (
        <Link
          href={`/i/flow/detail/${post.id}`}
          key={post.id}
          className={styles["post"]}
        >
          <img src={post.image} />
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
        </Link>
      ))}
    </div>
  );
}
