"use client";

import styles from "@/styles/testpage/manager.module.scss";
import Image from "next/image";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <main className={styles.container}>
      {/* 상세 설명 */}
      <section className={styles.details}>
        <h1>관리자 페이지</h1>
        <p>
          이 페이지는 관리자 기능을 위한 대시보드입니다. 다양한 기능과 정보를
          제공하여 시스템 관리를 효율적으로 도와줍니다.
        </p>
      </section>

      {/* 표 형식 */}
      <section className={styles.tableSection}>
        <table className={styles.infoTable}>
          <thead>
            <tr>
              <th>로고</th>
              <th>설명</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              imageSrc="/dummy/cozyquick.png"
              description="상품명만 입력해주시면, 기존 직구보다 평균 7일 일찍 집 앞으로
        배송해드립니다."
              link="/cozyquick"
            />
            <TableRow
              imageSrc="/dummy/createvalue.png"
              description="입력하신 능력들을 토대로, 수익 전환 방법들을 찾고 과정을 도와드립니다."
              link="/createvalue"
            />
            <TableRow
              imageSrc="/dummy/consultant.png"
              description="고객 데이터 분석을 통해, 매출 증대를 도와드립니다."
              link="/consultant"
            />
            <TableRow
              imageSrc="/dummy/cookingstation.png"
              description="자취러들 주목! 집에도착하면, 원하는 요리가 있습니다! 현대판 우렁각시,
        집밥 대행 서비스로 건강하게 식사하세요."
              link="/cookingstation"
            />
            <TableRow
              imageSrc="/dummy/curesliver.png"
              description="요양원 노인 데이터 수기 관리, 이제 프로그램으로 간편하게 관리하세요."
              link="/curesilver"
            />
            <TableRow
              imageSrc="/dummy/carrycabin.png"
              description="When you arrive at the airport, we will deliver your luggage directly to your hotel. Enjoy a comfortable trip with us!"
              link="/carrycabin"
            />
            <TableRow
              imageSrc="/dummy/clearvisa.png"
              description="We simplify the visa application process for foreigners, making it hassle-free."
              link="/clearvisa"
            />
            <TableRow
              imageSrc="/dummy/cozyhouse.png"
              description="We assist foreigners with everything about house contract, ensuring a smooth real estate experience."
              link="/cozyhouse"
            />
            {/* 추가적인 항목들 */}
          </tbody>
        </table>
      </section>
    </main>
  );
};

// TableRow 컴포넌트
const TableRow: React.FC<{
  imageSrc: string;
  description: string;
  link: string;
}> = ({ imageSrc, description, link }) => (
  <tr>
    <td>
      <img src={imageSrc} alt={"로고"} style={{ width: "150px" }} />
    </td>
    <td>{description}</td>
    <td>
      <Link href={link} passHref>
        <p className={styles.link}>자세히 보기</p>
      </Link>
    </td>
  </tr>
);

export default Page;
