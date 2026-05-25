import type { Viewport } from "next";

import { HideScrollbar } from "./_components/HideScrollbar";

// 모바일 OS/브라우저의 자동 다크모드(force-dark) 변형 차단용 color-scheme 선언
export const viewport: Viewport = {
  colorScheme: "light",
};

export default function WorthTestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ colorScheme: "light" }}>
      <HideScrollbar />
      {children}
    </div>
  );
}
