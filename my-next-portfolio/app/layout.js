import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css'; // 전역 스타일

// SEO를 위한 메타데이터 (Next.js 13+ 기능)
export const metadata = {
  title: '[내 이름]의 포트폴리오',
  description: 'Next.js로 만든 포트폴리오입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}