import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const authorization = cookies().get("authorization")?.value;

  // 엑세스 토큰이랑, uuid가 널일경우
  if (authorization === null) {
    return NextResponse.redirect("https://www.cleanfree.site/login");
  }

  // 로그인을 안했을때 만 해당
  if (!session) {
    return NextResponse.redirect("https://www.cleanfree.site/login");
  }
}

export const config = {
  // 적용이 되는 곳 선정
  matcher: ["/write/:path*", "/i/flow/detail/:path*", "/"],
};
