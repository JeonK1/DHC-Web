import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "내 썸녀와 잘될 수 있을까?",
  description: "두 사람의 운명적인 궁합을 확인해보세요",
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
