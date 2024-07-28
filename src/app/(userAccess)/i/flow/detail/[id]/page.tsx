"use client";

import Detail from "@/components/pages/Detail";
import { getDiaryInfo } from "@/services/getDiaryInfo";
import { useEffect, useState } from "react";

export default function Page(props: any) {
  const pathName = props.params.id;
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setData(await getDiaryInfo(pathName));
  };
  return (
    <>
      <Detail data={data} pathName={pathName} />
    </>
  );
}
