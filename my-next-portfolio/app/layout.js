// app/layout.js (수정된 코드)

import './globals.css'; 

export const metadata = {
  title: '최상진의 포트폴리오',
  description: '포트폴리오입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}