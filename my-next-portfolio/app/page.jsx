// app/page.jsx

"use client"; 

import Image from 'next/image';
import { motion } from 'framer-motion'; 

export default function Home() {

  const fadeFromLeft = {
    initial: { opacity: 0, x: -100 }, 
    whileInView: { opacity: 1, x: 0 }, 
    transition: { duration: 0.7, ease: "easeOut" }, 
    viewport: { once: true }, 
  };

  return (
    <div className="main-container">

      {/* --- 소개 (About Me) --- */}
      <motion.section 
        id="about" 
        className="section"
        {...fadeFromLeft} 
      >
        <h2>Introducing about Choi Sangjean</h2>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
          About me.

          안녕하세요. 주니어 개발자 최상진의 포트폴리오 페이지입니다.
        </p>
      </motion.section>

      {/* --- 기술 스택 (Skills) --- */}
      <motion.section 
        id="skills" 
        className="section"
        {...fadeFromLeft} 
      >
        <h3>Keyworlds:</h3>
        <p>
          Python | Deep Learning | 
          Generative AI | Computer Vision | 
          TensorFlow | Scikit-Learn | LangChain | Flask | 
          Flutter | Pandas | YOLOv8 | RAG
        </p>
      </motion.section>

      {/* --- 프로젝트 (Projects) --- */}
      <motion.section 
        id="projects" 
        className="section"
        {...fadeFromLeft} 
      >
        <h2>Projects</h2>

        {/* --- 프로젝트 1 (비디오로 변경) --- */}
        <motion.article 
          className="project-card"
          {...fadeFromLeft} 
        >
          <a 
    href="https://github.com/810072/Memordo" // 2. 여기에 깃허브 URL을 입력합니다.
    target="_blank" // 3. 새 탭에서 열기
    rel="noopener noreferrer" // 4. 보안 설정
  >
            <video 
            src="/CSJ_portfolio/project_memordo.mp4" 
            width="100%" 
            autoPlay 
            loop 
            muted 
            playsInline // (모바일 자동재생)
            style={{ display: 'block', objectFit: 'cover' }} 
          />
          </a>
          <div className="project-content">
            <h3>Memordo : 개인 메모를 활용한 인터렉티브 AI 메모앱</h3>
            <p>
              개인 메모앱에 LLM을 결합한 프로젝트. 
              각각의 문서를 임베딩하여 문서간의 유사도, 관련도를 계산하여 Graph를 만드는 기능. 
              자체 챗봇에 사용자의 메모, 문서들을 연결시켜 RAG기능을 접목. 
              범용적인 답변뿐만이 아닌 개인화된 챗봇기능을 구현.
            </p>
            <div>
              <span className="keyword-tag">Flutter</span>
              <span className="keyword-tag">Gemini API</span>
              <span className="keyword-tag">Python</span>
              <span className="keyword-tag">LangChain</span>
              <span className="keyword-tag">RAG</span>
            </div>
          </div>
        </motion.article>

        {/* --- 프로젝트 2 (Image 태그 수정) --- */}
        <motion.article 
          className="project-card"
          {...fadeFromLeft} 
        >
          <a 
    href="https://github.com/810072/HKNU_CS_Info-master" // 2. 여기에 깃허브 URL을 입력합니다.
    target="_blank" // 3. 새 탭에서 열기
    rel="noopener noreferrer" // 4. 보안 설정
  >
          <Image 
            src="/CSJ_portfolio/project_report.png" 
            alt="크롤러러" 
            width={800} 
            height={450} 
            // 'layout' 경고 해결
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
          />
          </a>
          <div className="project-content">
            <h3>학과 전광판 전용 알림판을 위한 자동 크롤러</h3>
            <p>
              학과 복도에 있는 알림판에 정보를 표시시키기 위한 크롤링 기능을 포함한 프로그램. 
              학과 사이트의 정보들을 주기적으로 불러와 JSON 형식으로 저장 후 복도를 지나가는 학생들을 위해 정보를 표시.
            </p>
            <div>
              <span className="keyword-tag">Python</span>
              <span className="keyword-tag">Selenium</span>
              <span className="keyword-tag">Web Crawler</span>
            </div>
          </div>
        </motion.article>
        
        {/* --- 프로젝트 3 (Image 태그 수정) --- */}
        <motion.article 
          className="project-card"
          {...fadeFromLeft} 
        >
          <a 
    href="https://github.com/810072/Project-1_sanbul" // 2. 여기에 깃허브 URL을 입력합니다.
    target="_blank" // 3. 새 탭에서 열기
    rel="noopener noreferrer" // 4. 보안 설정
  >
          <Image 
            src="/CSJ_portfolio/project_ml.png" 
            alt="산불 예측 프로그램" 
            width={800} 
            height={450} 
            // 'layout' 경고 해결
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
          </a>
          <div className="project-content">
            <h3>머신러닝을 활용한 산불 수치 계산기</h3>
            <p>
              경기도의 산불 데이터셋을 4계층 MLP 모델( Backpropagation, ReLU, SGD)에 학습시킨 데이터를 기반으로 입력받은 날씨 조건에 대하여 산불 예측치를 보여주는 웹 앱.
            </p>
            <div>
              <span className="keyword-tag">Python</span>
              <span className="keyword-tag">Flask</span>
              <span className="keyword-tag">TensorFlow</span>
              <span className="keyword-tag">Pandas</span>
              <span className="keyword-tag">Keras</span>
              <span className="keyword-tag">Scikit-Learn</span>
            </div>
          </div>
        </motion.article>

        {/* --- 프로젝트 4 (Image 태그 수정) --- */}
        <motion.article 
          className="project-card"
          {...fadeFromLeft} 
        >
          <Image 
            src="/CSJ_portfolio/project_yolo.png" 
            alt="꽃 이미지 검색 사이트" 
            width={800} 
            height={450} 
            // 'layout' 경고 해결
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
          <div className="project-content">
            <h3>Oxford Flowers Dataset을 YOLO8로 학습시킨 결과를 활용한 꽃 이미지 검색 사이트</h3>
            <p>
              YOLOv8 모델을 옥스퍼드 꽃 데이터셋(Oxford Flowers Dataset)으로 커스텀 학습시켜, 사용자가 업로드한 이미지에서 꽃의 종류를 실시간으로 탐지하고 식별하는 웹 검색 서비스
            </p>
            <div>
              <span className="keyword-tag">YOLOv8</span>
              <span className="keyword-tag">Computer Vision</span>
              <span className="keyword-tag">Naver API</span>
              <span className="keyword-tag">RoboFlow</span>
              <span className="keyword-tag">CNN</span>
            </div>
          </div>
        </motion.article>
        
      </motion.section>

    </div>
  );
}