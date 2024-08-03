"use server";

import { cookies } from "next/headers";

export async function getResultData(id: any) {
  console.log(id);
  const authorization = cookies().get("authorization")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/search/result/${id}`,
    {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }
  );

  if (res.ok) {
    const data = await res.json();
    console.log(data.data);
    return data.data;
  }
  return;
}
