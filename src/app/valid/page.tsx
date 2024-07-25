import React from "react";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return <main>로그인 대기</main>;
}
