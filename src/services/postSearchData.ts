"use server";

import { cookies } from "next/headers";

export async function postSearchData(inputValue: any) {
  const authorization = cookies().get("authorization")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/search`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authorization}`,
      },
      body: JSON.stringify({
        question: inputValue,
      }),
    }
  );
  console.log(res);

  if (res.ok) {
    console.log("새로고침");
    return;
  }
}
