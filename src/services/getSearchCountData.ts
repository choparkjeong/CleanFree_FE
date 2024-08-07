"use server";

import { cookies } from "next/headers";

export async function getSearchCountData() {
  const authorization = cookies().get("authorization")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/search/count`,
    {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }
  );

  if (res.ok) {
    const data = await res.json();
    console.log(1 - data.data);
    return 1 - data.data;
  }
  return;
}
