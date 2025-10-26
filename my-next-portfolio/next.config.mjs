/** @type {import('next').NextConfig} */

const repoName = 'CSJ_portfolio'; // 1. GitHub 저장소 이름

const nextConfig = {
  // 2. (필수) 정적 사이트로 빌드(export)하도록 설정
  output: 'export',

  // 3. (필수) GitHub Pages 경로 설정
  // assets(JS, CSS 파일 등)을 올바른 경로에서 불러오기 위함
  // basePath: `/${repoName}`,

  // 4. (필수) Link, Image 컴포넌트 등이 basePath를 인지하도록 설정
  assetPrefix: `/${repoName}`,

  // 5. (선택) Next.js Image 태그 대신 <img> 태그 사용 시
  // (Image 태그 최적화가 정적 export에서 잘 안될 수 있음)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;