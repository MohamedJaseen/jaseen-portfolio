export const NAV_LINKS = ["About","Skills","Experience","Projects","Education","Contact"];

export const SKILLS = {
  "Languages": [
    { name:"Python", icon:"🐍" },
    { name:"JavaScript", icon:"⚡" },
    { name:"Java", icon:"☕" },
    { name:"SQL", icon:"🗄️" },
    { name:"HTML5", icon:"🌐" },
    { name:"CSS3", icon:"🎨" },
  ],
  "Frameworks & Tools": [
    { name:"React", icon:"⚛️" },
    { name:"Node.js", icon:"🟢" },
    { name:"Firebase", icon:"🔥" },
    { name:"Spring Boot", icon:"☕" },
    { name:"PostgreSQL", icon:"🐘" },
    { name:"MySQL", icon:"💾" },
    { name:"Git", icon:"🌿" },
  ],
  "Concepts": [
    { name:"REST APIs", icon:"🔗" },
    { name:"System Architecture", icon:"🏗️" },
    { name:"Database-Driven Development", icon:"🗄️" },
    { name:"DB-Driven Framework Architecture", icon:"⚙️" },
    { name:"Responsive Design", icon:"📱" },
    { name:"UI/UX Principles", icon:"✏️" },
    { name:"NLP Basics", icon:"🤖" },
    { name:"Version Control", icon:"📦" },
  ],
};

export const EXPERIENCE = [
  {
    role:"Backend Developer Intern",
    company:"Ethical Intelligent Technologies LLP",
    period:"Feb 2026 – Present",
    tag:"Current",
    points:[
      "Engineered scalable RESTful APIs with clean system architecture and efficient data flow",
      "Optimized PostgreSQL database schemas with complex queries and backend functions",
      "Built secure user authentication and management modules ensuring high performance",
    ],
    accent:"#00ff88",
    icon:"⚙️",
  },
  {
    role:"AI Azure Intern",
    company:"AICTE Collaboration (Virtual)",
    period:"May 2025 – Jun 2025",
    tag:"2025",
    points:[
      "Developed event scheduling and user registration modules for symposium systems",
      "Implemented real-time data updates using Firebase for accurate information delivery",
      "Improved UI design and cross-browser compatibility across team deliverables",
    ],
    accent:"#0ea5e9",
    icon:"☁️",
  },
  {
    role:"Intern",
    company:"Live Wire Private Limited",
    period:"Jun 2024 – Jul 2024",
    tag:"2024",
    points:[
      "Designed secure responsive login interfaces using modern web technologies",
      "Assisted in code reviews analyzing logic flow and best coding practices",
      "Conducted functional and UI testing to identify bugs and improve performance",
    ],
    accent:"#a78bfa",
    icon:"💡",
  },
];

export const PROJECTS = [
  {
    title:"Credit Risk Assessment Tool",
    tech:["Python","TensorFlow","Keras","CNN","LSTM","SMOTE","Streamlit","Machine Learning","Deep Learning"],
    desc:"AI-powered credit risk assessment system that predicts loan default probability using a hybrid CNN-LSTM model for faster, data-driven lending decisions.",
    demo:"https://credit-risk-assesment-4.onrender.com/",
    github:"https://github.com/MohamedJaseen/Credit-Risk-Assesment-.git",
    color:"#4f8cff",
    emoji:"💳",
    image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%2307111f'/%3E%3Crect x='90' y='100' width='1020' height='600' rx='32' fill='%23111e2b'/%3E%3Cpath d='M180 560C240 480 310 430 400 470C480 500 560 360 650 320C740 280 840 300 940 220' stroke='%234f8cff' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M180 560C250 500 330 460 400 480C480 510 560 380 650 340C740 300 820 320 940 240' stroke='%232dd4bf' stroke-width='6' fill='none' stroke-linecap='round' opacity='0.9'/%3E%3Crect x='170' y='170' width='180' height='90' rx='18' fill='%23222c3c'/%3E%3Crect x='380' y='170' width='180' height='90' rx='18' fill='%23222c3c'/%3E%3Crect x='590' y='170' width='180' height='90' rx='18' fill='%23222c3c'/%3E%3Crect x='800' y='170' width='180' height='90' rx='18' fill='%23222c3c'/%3E%3Crect x='180' y='340' width='260' height='140' rx='20' fill='%231f2937'/%3E%3Crect x='470' y='340' width='260' height='140' rx='20' fill='%231f2937'/%3E%3Crect x='760' y='340' width='220' height='140' rx='20' fill='%231f2937'/%3E%3Ccircle cx='220' cy='220' r='44' fill='%234f8cff' fill-opacity='.2'/%3E%3Cpath d='M205 220l15 15 35-40' stroke='%232dd4bf' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
  },
  {
    title:"Movie Review Sentiment Analyser",
    tech:["Python","NLP","Scikit-learn"],
    desc:"NLP-based sentiment analysis system that classifies movie reviews accurately using text preprocessing, tokenization, and feature extraction.",
    demo:"https://movie-review-sentiment-analysis-yepmkeh8rwxwmldvix8we2.streamlit.app/",
    github:"https://github.com/MohamedJaseen",
    color:"#f59e0b",
    emoji:"🎬",
    image: "/sentiment-app.jpg"
  },
  {
    title:"Comfortable Diet Planner",
    tech:["React"],
    desc:"Personalized diet planning web app that helps users track meals, calories, and nutrition goals through clear visual progress and daily logging.",
    demo:"https://snazzy-chimera-3ba77f.netlify.app/",
    github:"https://github.com/MohamedJaseen",
    color:"#0ea5e9",
    emoji:"🥗",
    image: "/diet-planner.jpg"
  },
  {
    title:"Car Parking Booking System",
    tech:["React","HTML","CSS","JavaScript"],
    desc:"Responsive parking booking platform with authentication, live slot updates, and intuitive maps that improve reservation workflows and user convenience.",
    demo:"https://joyful-cocada-4daf80.netlify.app/",
    github:"https://github.com/MohamedJaseen",
    color:"#00ff88",
    emoji:"🅿️",
    image: "/parking-app.jpg"
  },
];

export const CERTS = [
  { name:"Java (Basic)", org:"HackerRank", color:"#4f8cff" },
  { name:"SQL (Intermediate)", org:"HackerRank", color:"#2dd4bf" },
  { name:"REST API (Intermediate)", org:"HackerRank", color:"#f59e0b" },
  { name:"Python for Beginners", org:"Infosys Springboard", color:"#00ff88" },
  { name:"MongoDB Basics", org:"MongoDB University", color:"#0ea5e9" },
  { name:"Data Visualization", org:"Forage", color:"#a78bfa" },
];
