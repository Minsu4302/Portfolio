import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '차민수 — 백엔드 개발자 포트폴리오',
  description: '병목을 발견하고 직접 제거하는 백엔드 개발자 차민수의 포트폴리오. 실서비스 운영 경험과 LLM 자동화 전문.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSans.className}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
