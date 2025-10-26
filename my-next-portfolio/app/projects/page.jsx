import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      {/* 1. 영웅(Hero) 섹션: 맨 처음 보이는 화면 */}
      <Hero />
      
      {/* 2. 자기소개 섹션 */}
      <About />
      
      {/* 3. 프로젝트 섹션 */}
      <Projects />
      
      {/* 4. 연락처 섹션 */}
      <Contact />
    </div>
  );
}