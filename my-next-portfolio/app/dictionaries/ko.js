export const ko = {
    about: {
        title: "Introducing about Choi Sangjean",
        subtitle: "About me.",
        description1: "안녕하세요. 하드웨어의 특성을 이해하는 주니어 개발자 최상진입니다.",
        description2: "저는 서울 로봇 마이스터고에서 로봇의 기계, 전자, 제어 원리를 익히며 하드웨어와 산업 현장의 기반을 다졌습니다. 이후 대학에서 소프트웨어 컴퓨팅을 전공하며 IT 시스템 개발, 데이터 처리, 그리고 AI 모델 활용 역량을 전문적으로 길렀습니다.",
        description3: "이러한 저의 이력은 소프트웨어를 설계할 때 하드웨어의 특성까지 고려할 수 있는 저만의 강력한 무기입니다. 하드웨어부터 AI 기반의 소프트웨어 시스템까지 모두 이해하는 융합형 인재로서, 기술로 다양한 문제를 해결하는 개발자가 되겠습니다.",
        educationTitle: "Education.",
        education1: "서울 로봇 마이스터고 로봇 소프트웨어 2015.03 ~ 0217.02",
        education2: "한경대학교 소프트웨어 서비스 컴퓨팅 학과 2022.03 ~ 2026.02 *졸업 예정",
    },
    skills: {
        title: "Keywords:",
        content: "Python | Deep Learning | Generative AI | Computer Vision | TensorFlow | Scikit-Learn | LangChain | Flask | Flutter | Pandas | YOLOv8 | RAG",
    },
    projects: {
        title: "Projects",
        memordo: {
            title: "Memordo : 개인 메모를 활용한 인터렉티브 AI 메모앱",
            description: "개인 메모앱에 LLM을 결합한 프로젝트. 각각의 문서를 임베딩하여 문서간의 유사도, 관련도를 계산하여 Graph를 만드는 기능. 자체 챗봇에 사용자의 메모, 문서들을 연결시켜 RAG기능을 접목. 범용적인 답변뿐만이 아닌 개인화된 챗봇기능을 구현.",
            position: "포지션 : LLM 백엔드, RAG, Graph 생성 등 기능 구현.",
            details1: "Gemini API, Chroma DB 등을 사용하여 연관 노트 그래프 생성기능, 벡터기반 RAG 기능을 구현하였습니다.",
            details2: "답변 과정에서는 Gemini 2.5-flash, Re-Ranking과 쿼리 변환 과정에서는 Gemini 2.5-flash-lite 를 사용하여 최대한 비용을 절감하였습니다.",
            details3: "현재는 NAVER CLOVA X Seed 1.5B 모델을 로컬로 서빙. 이를 쿼리 변환, Knowledge Graph-Guided Retrieval을 구현하는데에 사용하고 있습니다. 이를 통해 비용이 발생하는 외부API 호출을 최소화하는 동시에 성능개선을 시도하는 도중입니다.",
            tags: ["Flutter", "Gemini API", "Python", "LangGraph", "RAG"],
        },
        crawler: {
            title: "학과 전광판 전용 알림판을 위한 자동 크롤러",
            description: "학과 복도에 있는 알림판에 정보를 표시시키기 위한 크롤링 기능을 포함한 프로그램. 학과 사이트의 정보들을 주기적으로 불러와 JSON 형식으로 저장 후 복도를 지나가는 학생들을 위해 정보를 표시.",
            tags: ["Python", "Selenium", "Web Crawler"],
        },
        wildfire: {
            title: "머신러닝을 활용한 산불 수치 계산기",
            description: "경기도의 산불 데이터셋을 4계층 MLP 모델( Backpropagation, ReLU, SGD)에 학습시킨 데이터를 기반으로 입력받은 날씨 조건에 대하여 산불 예측치를 보여주는 웹 앱.",
            tags: ["Python", "Flask", "TensorFlow", "Pandas", "Keras", "Scikit-Learn"],
        },
        flowers: {
            title: "Oxford Flowers Dataset을 YOLO8로 학습시킨 결과를 활용한 꽃 이미지 검색 사이트",
            description: "YOLOv8 모델을 옥스퍼드 꽃 데이터셋(Oxford Flowers Dataset)으로 커스텀 학습시켜, 사용자가 업로드한 이미지에서 꽃의 종류를 실시간으로 탐지하고 식별하는 웹 검색 서비스",
            tags: ["YOLOv8", "Computer Vision", "Naver API", "RoboFlow", "CNN"],
        },
    },
    nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
    }
};
