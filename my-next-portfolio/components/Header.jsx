// (중요) next/link를 import할 필요가 없습니다.

export default function Header() {
  return (
    <header>
      <h1>
        {/* 로고 클릭 시 맨 위로 이동 */}
        <a href="#hero">[내 이름] 포트폴리오</a>
      </h1>
      <nav>
        <ul>
          {/* 각 섹션의 ID로 연결되는 링크를 만듭니다. */}
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}