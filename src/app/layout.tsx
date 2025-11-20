import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MBTI 검사",
  description: "나의 MBTI를 알아보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
