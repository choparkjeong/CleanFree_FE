"use client";
import styles from "@/styles/pages/detail.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMiniPencilSquare } from "react-icons/hi2";

export default function Detail() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <main className={styles["modal-background"]}>
      <div className={styles["modal-container"]}>
        <div className={styles["modal-element-layout"]}>
          <Link href={"/write"} className={styles["modal-element-edit"]}>
            수정하기 <HiMiniPencilSquare size={20} color="black" />
          </Link>

          <img src="/dummy/test1.jpg" />

          <div className={styles["modal-element-layout-e1"]}>
            피부가 좋았어요!
          </div>
          <div className={styles["modal-element-layout-e2"]}>
            <div>1일전</div>
            <div>음주 X</div>
            <div>운동 O</div>
            <div>8시간 수면</div>
          </div>
          <div className={styles["modal-element-layout-line"]}>
            ⓘ 클렌징 제품 정보
          </div>
          <div className={styles["modal-element-layout-e3"]}>
            <div>닥터지 수분크림</div>
            <div>02샴푸 쿨</div>
            <div>다이소 3000원 바디로션</div>
            <div>알로아 팩</div>
          </div>
          <div className={styles["modal-element-layout-line"]}>ⓘ 기타 정보</div>
          <div className={styles["modal-element-layout-e4"]}>
            수면시간은 지켰지만, 불규칙 적인 시간에 잤다. 그래도 다행히 피부가
            좋은 편이라 행복하다
          </div>
        </div>
        <div className={styles["modal-back"]} onClick={handleBack}>
          돌아가기
        </div>
      </div>
    </main>
  );
}
