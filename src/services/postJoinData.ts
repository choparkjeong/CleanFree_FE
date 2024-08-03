"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function postJoinData(
  snsId: any,
  name: string,
  email: string,
  birthdate: string,
  selectedGender?: string
) {
  console.log("받은값", snsId, name, email, birthdate, selectedGender);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        snsId: snsId,
        name: name,
        email: email,
        birthDate: birthdate,
        gender: selectedGender,
      }),
    }
  );
  console.log(res);
  if (res.ok) {
    const authorization: any = res.headers.get("authorization");
    cookies().set("authorization", authorization, {
      maxAge: 30 * 24 * 60 * 60,
    });
    redirect("/");
  }
}
