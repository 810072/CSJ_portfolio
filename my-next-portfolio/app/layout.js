// app/layout.js (수정된 코드)

import './globals.css'; // 전역 스타일만 남깁니다.

export const metadata = {
  title: '최상진의 포트폴리오', // 이름 수정
  description: 'Next.js로 만든 포트폴리오입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {/* <Header />  <-- 삭제 */}
        <main>{children}</main> {/* page.jsx의 내용이 여기에 들어갑니다. */}
        {/* <Footer />  <-- 삭제 */}
      </body>
    </html>
  );
}