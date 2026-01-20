export const en = {
    hero: {
        greeting: "Hello, I am",
        title: "Choi Sangjean",
        tagline: "Software Engineer",
        description: "From hardware principles to AI systems.\nI bridge the gap between physical computing and intelligent software.",
        cta: "View Projects",
    },
    about: {
        title: "Introducing Choi Sangjean",
        subtitle: "About me.",
        description1: "I am a junior developer with a deep understanding of hardware characteristics.",
        description2: "I built my foundation in industrial mechanics, electronics, and control systems at Seoul Robot High School. Later, I majored in Software Computing at university to master IT systems and AI capabilities.",
        description3: "This 'convergence' background is my unique strength. It allows me to design software while considering hardware constraints and potential. I aspire to be an engineer who solves real-world problems through technology.",
        educationTitle: "Education.",
        education1: "Seoul Robot High School, Robot Software (2015.03 ~ 2017.02)",
        education2: "Hankyong National University, Dept. of Software Service Computing (2022.03 ~ 2026.02 *Expected Graduation)",
    },
    skills: {
        title: "Keywords",
        content: "Python | Deep Learning | Generative AI | Computer Vision | TensorFlow | Scikit-Learn | LangChain | Flask | Flutter | Pandas | YOLOv8 | RAG",
    },
    projects: {
        title: "Projects",
        memordo: {
            title: "Memordo: Interactive AI Note App Utilizing Personal Memos",
            description: "A project combining a personal note app with LLM. Features creating a Graph by calculating similarity and relevance between documents by embedding each document. Implements RAG functionality by connecting user notes and documents to a self-built chatbot. Implements personalized chatbot functions beyond general answers.",
            position: "Position: LLM Backend, RAG, Graph Generation, etc.",
            details1: "Implemented related note graph generation function and vector-based RAG function using Gemini API, Chroma DB, etc.",
            details2: "Used Gemini 2.5-flash for the answer process and Gemini 2.5-flash-lite for Re-Ranking and query transformation processes to minimize costs.",
            details3: "Currently serving NAVER CLOVA X Seed 1.5B model locally. Using it to implement query transformation and Knowledge Graph-Guided Retrieval. Trying to improve performance while minimizing external API calls that incur costs.",
            tags: ["Flutter", "Gemini API", "Python", "LangGraph", "RAG"],
        },
        crawler: {
            title: "Automatic Crawler for Department Bulletin Board",
            description: "A program including crawling functions to display information on the bulletin board in the department hallway. Periodically fetches information from the department site, saves it in JSON format, and displays information for students passing by the hallway.",
            tags: ["Python", "Selenium", "Web Crawler"],
        },
        wildfire: {
            title: "Wildfire Numerical Calculator Using Machine Learning",
            description: "A web app showing wildfire predictions for input weather conditions based on data learned from Gyeonggi-do's wildfire dataset using a 4-layer MLP model (Backpropagation, ReLU, SGD).",
            tags: ["Python", "Flask", "TensorFlow", "Pandas", "Keras", "Scikit-Learn"],
        },
        flowers: {
            title: "Flower Image Search Site Using Results Trained on Oxford Flowers Dataset with YOLOv8",
            description: "A web search service that detects and identifies flower types in real-time from images uploaded by users by custom training the YOLOv8 model with the Oxford Flowers Dataset.",
            tags: ["YOLOv8", "Computer Vision", "Naver API", "RoboFlow", "CNN"],
        },
    },
    nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
    }
};
