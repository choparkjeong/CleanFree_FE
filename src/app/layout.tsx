import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import AuthSession from "@/AuthSession";

// 뷰포트 수정
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1, // 초기 확대 배율
  maximumScale: 1, // 확대 막기
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "CleanFree",
  description: "클린프리(CleanFree) - 나에게 맞는 화장품을 보여줘!",
};

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={noto.className}>
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
