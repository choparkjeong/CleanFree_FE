"use client";

import styles from "@/styles/pages/detail.module.scss";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { HiMiniPencilSquare } from "react-icons/hi2";

interface DetailProps {
  data: {
    diaryId: string;
    skinStatus: string | null;
    thumbnailUrl: string;
    cosmetics: string[];
    sleepTime: string;
    memo: string;
    writeTime: string;
    alcohol: boolean;
    exercise: boolean;
  };
  pathName?: any;
}

export default function Detail({ data, pathName }: DetailProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  // Convert sleep time to a readable format

  // const sleepText = `${data.sleepTime}시간 수면`;

  // Format skin status
  const skinStatusText = data.skinStatus
    ? data.skinStatus === "GOOD"
      ? "피부가 좋았어요!"
      : data.skinStatus === "NORMAL"
      ? "피부가 보통이에요."
      : "피부가 나쁩니다."
    : "피부 상태 정보 없음";

  // Format alcohol and exercise information

  return (
    <main className={styles["modal-background"]}>
      <div className={styles["modal-container"]}>
        <div className={styles["modal-element-layout"]}>
          <Link
            href={`/edit/${pathName}`}
            className={styles["modal-element-edit"]}
          >
            수정하기 <HiMiniPencilSquare size={20} color="black" />
          </Link>
          <div className={styles["modal-element-scroll-container"]}>
            <img src={data.thumbnailUrl} alt="Diary Thumbnail" />

            <div className={styles["modal-element-layout-e1"]}>
              {skinStatusText}
            </div>
            <div className={styles["modal-element-layout-e2"]}>
              <div>{data.writeTime}</div>
              {data.alcohol && <div>음주 O</div>}
              {data.exercise && <div>운동 O</div>}

              {data.sleepTime !== null && <div>{data.sleepTime}시간 수면</div>}
            </div>
            <div className={styles["modal-element-layout-line"]}>
              ⓘ 클렌징 제품 정보
            </div>
            <div className={styles["modal-element-layout-e3"]}>
              {data.cosmetics.length > 0 ? (
                data.cosmetics.map((item, index) => (
                  <div key={index}>{item}</div>
                ))
              ) : (
                <div>정보 없음</div>
              )}
            </div>
            <div className={styles["modal-element-layout-line"]}>
              ⓘ 기타 정보
            </div>
            <div className={styles["modal-element-layout-e4"]}>{data.memo}</div>
          </div>
        </div>
        <div className={styles["modal-back"]} onClick={handleBack}>
          돌아가기
        </div>
      </div>
    </main>
  );
}
