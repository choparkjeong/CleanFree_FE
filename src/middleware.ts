import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const authorization = cookies().get("authorization")?.value;

  // 엑세스 토큰이 없을 경우
  if (authorization === undefined) {
    return NextResponse.redirect("https://www.cleanfree.site/login");
    // https://www.cleanfree.site/
  }

  if (!session) {
    return NextResponse.redirect("https://www.cleanfree.site/login");
  }
}

export const config = {
  // matcher: [],
  matcher: ["/result/:path*", "/"],

  // matcher: ["/edit/:path*", "/write/:path*", "/i/flow/detail/:path*", "/"],
};
