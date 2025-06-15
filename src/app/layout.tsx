import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import './globals.css';

/**
 * @description
 * Google Fonts 설정
 */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

/**
 * @description
 * 로컬 폰트 설정 - public 폴더 기준 경로
 * display: swap 폰트 로딩 중에 텍스트가 먼저 표시되도록 하여
 * 폰트 로딩 지연으로 인한 레이아웃 변경을 최소화
 */
const neueHaasGrotesk = LocalFont({
  src: '../../public/fonts/NeueHaasGroteskDisplay-Roman.woff2',
  display: 'swap',
  weight: '400 500 600 700',
  variable: '--font-neue-haas-grotesk',
});

const pretendard = LocalFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '400 500 600 700',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Multi Wallet',
  description: 'Multi Wallet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${pretendard.variable} ${neueHaasGrotesk.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
