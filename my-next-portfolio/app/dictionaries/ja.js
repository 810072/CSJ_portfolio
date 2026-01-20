export const ja = {
    about: {
        title: "Introducing about Choi Sangjean",
        subtitle: "About me.",
        description1: "こんにちは。ハードウェアの特性を理解するジュニア開発者、チェ・サンジンです。",
        description2: "私はソウルロボットマイスター高校でロボットの機械、電子、制御原理を学び、ハードウェアと産業現場の基盤を築きました。その後、大学でソフトウェアコンピューティングを専攻し、ITシステム開発、データ処理、そしてAIモデル活用能力を専門的に養いました。",
        description3: "このような私の経歴は、ソフトウェアを設計する際にハードウェアの特性まで考慮できる私だけの強力な武器です。ハードウェアからAIベースのソフトウェアシステムまで全てを理解する融合型人材として、技術で様々な問題を解決する開発者になります。",
        educationTitle: "Education.",
        education1: "ソウルロボットマイスター高校 ロボットソフトウェア 2015.03 ~ 2017.02",
        education2: "ハンギョン国立大学 ソフトウェアサービスコンピューティング学科 2022.03 ~ 2026.02 *卒業予定",
    },
    skills: {
        title: "Keywords:",
        content: "Python | Deep Learning | Generative AI | Computer Vision | TensorFlow | Scikit-Learn | LangChain | Flask | Flutter | Pandas | YOLOv8 | RAG",
    },
    projects: {
        title: "Projects",
        memordo: {
            title: "Memordo : 個人メモを活用したインタラクティブAIメモアプリ",
            description: "個人メモアプリにLLMを結合したプロジェクト。各ドキュメントを埋め込み、ドキュメント間の類似度や関連度を計算してGraphを作成する機能。独自のチャットボットにユーザーのメモやドキュメントを接続し、RAG機能を統合。一般的な回答だけでなく、パーソナライズされたチャットボット機能を実装。",
            position: "ポジション : LLMバックエンド, RAG, Graph生成などの機能実装。",
            details1: "Gemini API, Chroma DBなどを使用して関連ノートグラフ生成機能、ベクトルベースRAG機能を実装しました。",
            details2: "回答プロセスではGemini 2.5-flash、Re-Rankingとクエリ変換プロセスではGemini 2.5-flash-liteを使用してコストを最大限に削減しました。",
            details3: "現在はNAVER CLOVA X Seed 1.5Bモデルをローカルで提供中。これをクエリ変換、Knowledge Graph-Guided Retrievalの実装に使用しています。これにより、コストが発生する外部API呼び出しを最小限に抑えつつ、性能改善を試みています。",
            tags: ["Flutter", "Gemini API", "Python", "LangGraph", "RAG"],
        },
        crawler: {
            title: "学科電光掲示板専用のお知らせ自動クローラー",
            description: "学科の廊下にある掲示板に情報を表示させるためのクローリング機能を含むプログラム。学科サイトの情報を定期的に呼び出しJSON形式で保存した後、廊下を通る学生のために情報を表示。",
            tags: ["Python", "Selenium", "Web Crawler"],
        },
        wildfire: {
            title: "機械学習を活用した山火事数値計算機",
            description: "京畿道の山火事データセットを4層MLPモデル(Backpropagation, ReLU, SGD)に学習させたデータを基に、入力された天気条件に対する山火事予測値を表示するウェブアプリ。",
            tags: ["Python", "Flask", "TensorFlow", "Pandas", "Keras", "Scikit-Learn"],
        },
        flowers: {
            title: "Oxford Flowers DatasetをYOLO8で学習させた結果を活用した花画像検索サイト",
            description: "YOLOv8モデルをオックスフォード花データセット(Oxford Flowers Dataset)でカスタム学習させ、ユーザーがアップロードした画像から花の種類をリアルタイムで検知・識別するウェブ検索サービス。",
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
