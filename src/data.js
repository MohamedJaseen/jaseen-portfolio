export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export const SKILLS = {
  "Languages": [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "⚡" },
    { name: "SQL", icon: "🗄️" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
  ],
  "Frameworks & Tools": [
    { name: "React.js", icon: "⚛️" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TensorFlow / Keras", icon: "🧠" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "SQLite", icon: "💾" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "🌿" },
  ],
  "Concepts & Architecture": [
    { name: "RESTful APIs", icon: "🔗" },
    { name: "Spring Security & JWT", icon: "🔒" },
    { name: "NLP & NLTK (TF-IDF)", icon: "📊" },
    { name: "Explainable AI (SHAP)", icon: "🔍" },
    { name: "Data Visualization (Recharts)", icon: "📈" },
    { name: "Spring Data JPA / Hibernate", icon: "🗃️" },
    { name: "System Architecture", icon: "🏗️" },
  ],
};

export const EXPERIENCE = [
  {
    role: "Backend Developer Intern",
    company: "Ethical Intelligent Technologies LLP",
    period: "Feb 2026 – Present",
    tag: "Current",
    points: [
      "Engineered scalable RESTful APIs with clean system architecture and efficient data flow.",
      "Optimized PostgreSQL database schemas with Spring Data JPA complex queries and backend functions.",
      "Built secure user authentication modules with Spring Security and JWT, ensuring high performance.",
    ],
    accent: "#00ff88",
    icon: "⚙️",
  },
  {
    role: "AI Azure Intern",
    company: "AICTE Collaboration (Virtual)",
    period: "May 2025 – Jun 2025",
    tag: "2025",
    points: [
      "Developed event scheduling and user registration modules for symposium systems.",
      "Implemented real-time data updates using Firebase for accurate information delivery.",
      "Improved UI design and cross-browser compatibility across team deliverables.",
    ],
    accent: "#0ea5e9",
    icon: "☁️",
  },
  {
    role: "Intern",
    company: "Live Wire Private Limited",
    period: "Jun 2024 – Jul 2024",
    tag: "2024",
    points: [
      "Designed secure responsive login interfaces using modern web technologies.",
      "Assisted in code reviews analyzing logic flow and best coding practices.",
      "Conducted functional and UI testing to identify bugs and improve performance.",
    ],
    accent: "#a78bfa",
    icon: "💡",
  },
];

export const PROJECTS = [
  {
    title: "Comfortable Diet Planner",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Spring Boot", "Java 21", "PostgreSQL", "Spring Security", "JWT", "Recharts"],
    desc: "Full-stack diet planning web app powered by Spring Boot 3.3.0 and React with JWT authentication and real-time nutrition analytics.",
    demo: "https://comfortable-diet-planner-v2.vercel.app/",
    github: "https://github.com/MohamedJaseen/Comfortable-Diet-Planner.git",
    color: "#0ea5e9",
    emoji: "🥗",
    image: "/diet-planner.jpg"
  },
  {
    title: "Credit Risk Assessment Tool (CreditIQ)",
    tech: ["Python", "FastAPI", "SQLite", "TensorFlow", "Keras", "CNN-LSTM", "SHAP", "ReportLab", "Streamlit", "Docker"],
    desc: "AI-powered credit risk assessment system predicting loan default probability using hybrid CNN-LSTM models, Explainable AI (SHAP), and automated PDF reporting.",
    demo: "https://credit-risk-static-ui.onrender.com/",
    github: "https://github.com/MohamedJaseen/Credit-Risk-Assesment-.git",
    color: "#4f8cff",
    emoji: "💳",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%2307111f'/%3E%3Crect x='90' y='100' width='1020' height='600' rx='32' fill='%23111e2b'/%3E%3Cpath d='M180 560C240 480 310 430 400 470C480 500 560 360 650 320C740 280 840 300 940 220' stroke='%234f8cff' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M180 560C250 500 330 460 400 480C480 510 560 380 650 340C740 300 820 320 940 240' stroke='%232dd4bf' stroke-width='6' fill='none' stroke-linecap='round' opacity='0.9'/%3E%3Crect x='170' y='170' width='180' height='90' rx='18' fill='%23222c3c'/%3E%3Crect x='380' y='170' width='180' height='90' rx='18' fill='%23222c3c'/%3E%3Crect x='590' y='170' width='180' height='90' rx='18' fill='%23222c3c'/%3E%3Crect x='800' y='170' width='180' height='90' rx='18' fill='%23222c3c'/%3E%3Crect x='180' y='340' width='260' height='140' rx='20' fill='%231f2937'/%3E%3Crect x='470' y='340' width='260' height='140' rx='20' fill='%231f2937'/%3E%3Crect x='760' y='340' width='220' height='140' rx='20' fill='%231f2937'/%3E%3Ccircle cx='220' cy='220' r='44' fill='%234f8cff' fill-opacity='.2'/%3E%3Cpath d='M205 220l15 15 35-40' stroke='%232dd4bf' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
  },
  {
    title: "Movie Review Sentiment Analyzer",
    tech: ["React.js", "TypeScript", "Python", "FastAPI", "NLTK", "TF-IDF", "Scikit-learn", "SQLite", "JWT", "ReportLab"],
    desc: "NLP sentiment analysis platform classifying reviews with NLTK & TF-IDF, featuring a FastAPI backend, JWT authentication, and interactive analytics reporting.",
    demo: "https://movie-review-sentiment-analyser-1.onrender.com/",
    github: "https://github.com/MohamedJaseen/Movie_review_sentiment_analyser.git",
    color: "#f59e0b",
    emoji: "🎬",
    image: "/sentiment-app.jpg"
  },
  {
    title: "Smart Parking System (QuickPark)",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Spring Boot", "Java 17", "PostgreSQL", "Spring Security", "JWT", "ZXing QR"],
    desc: "Full-stack parking reservation platform with Spring Security, JWT authentication, PostgreSQL, dynamic slot updates, and automated QR code generation.",
    demo: "https://smart-parking-system-zeta-eight.vercel.app/",
    github: "https://github.com/MohamedJaseen/smart-parking-system.git",
    color: "#00ff88",
    emoji: "🅿️",
    image: "/parking-app.jpg"
  },
];

export const CERTS = [
  { name: "Java (Basic)", org: "HackerRank", color: "#4f8cff" },
  { name: "SQL (Intermediate)", org: "HackerRank", color: "#2dd4bf" },
  { name: "REST API (Intermediate)", org: "HackerRank", color: "#f59e0b" },
  { name: "Python for Beginners", org: "Infosys Springboard", color: "#00ff88" },
  { name: "MongoDB Basics", org: "MongoDB University", color: "#0ea5e9" },
  { name: "Data Visualization", org: "Forage", color: "#a78bfa" },
];
