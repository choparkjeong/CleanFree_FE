"use server";

import { auth } from "@/auth";
import { cookies } from "next/headers";

export async function sessionValid() {
  const authorization = cookies().get("authorization")?.value;

  const session = await auth();
  if (!session) {
    return false;
  }
  return authorization;
}
