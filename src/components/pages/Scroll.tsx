"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/pages/main.module.scss";
import Link from "next/link";
import { sessionValid } from "@/utils/session/sessionValid";

interface Post {
  id: number;
  image: string;
  title: string;
  temp: string;
  content: string;
}

const Scroll: React.FC = () => {
  const [data, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const valid = await sessionValid();
      console.log(valid);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/diary/list`,
          {
            cache: "no-store",
            headers: {
              Authorization: `Bearer ${valid}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }

        const data: any = await res.json();
        console.log(data);

        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  const posts: Post[] = data.map((diary: any) => ({
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
