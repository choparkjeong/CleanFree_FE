import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const authorization = cookies().get("authorization")?.value;

  // 엑세스 토큰이 없을 경우
  if (authorization === undefined) {
    return NextResponse.redirect("http://localhost:3000/login");
    // https://www.cleanfree.site/
  }

  // 로그인을 안했을때 만 해당
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}

export const config = {
  // matcher: [],
  matcher: ["/"],

  // matcher: ["/edit/:path*", "/write/:path*", "/i/flow/detail/:path*", "/"],
};
