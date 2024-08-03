"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getListData() {
  const authorization = cookies().get("authorization")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/search/list`,

    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }
  );

  //유효하지 않은 토큰일 경우 예외처리
  if (!res.ok) {
    redirect("https://www.cleanfree.site/login");
  }

  if (res.ok) {
    const data = await res.json();
    console.log(data.data.result);

    return data.data.results;
  }
  return;
}
