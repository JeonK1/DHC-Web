import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

const GA_MEASUREMENT_ID = "G-J46XSLPDZB";

const SITE_URL = "https://dhc-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // 키보드(IME)가 올라올 때 레이아웃 뷰포트는 유지하고 visual viewport 만 축소시킨다.
  // 하단 고정 버튼은 useKeyboardInset(visualViewport 기반)으로 키보드 위에 위치시키며,
  // 다크 문서가 키보드 뒤에 풀 높이로 남아 키보드 슬라이드업 중 흰색 캔버스 노출을 막는다.
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TRGT36TP');`}
        </Script>
        {/* GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRGT36TP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
