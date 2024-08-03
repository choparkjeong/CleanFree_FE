"use server";

import { cookies } from "next/headers";

export async function getListData() {
  const authorization = cookies().get("authorization")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/search/list`,
    {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }
  );
  if (res.ok) {
    const data = await res.json();
    console.log(data.data.result);

    return data.data.results;
  }
  return;
}
