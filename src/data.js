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
    title:"Car Parking Booking System",
    tech:["React","HTML","CSS","JavaScript"],
    desc:"Responsive web-based parking booking app with user authentication, real-time slot availability updates, and interactive maps for seamless navigation.",
    demo:"https://joyful-cocada-4daf80.netlify.app/",
    github:"https://github.com/MohamedJaseen",
    color:"#00ff88",
    emoji:"🅿️",
    image: "/parking-app.jpg"
  },
  {
    title:"Comfortable Diet Planner",
    tech:["React"],
    desc:"Personalized diet planner generating meal plans based on health goals, with daily meal logging, calorie visualization, and interactive progress charts.",
    demo:"https://snazzy-chimera-3ba77f.netlify.app/",
    github:"https://github.com/MohamedJaseen",
    color:"#0ea5e9",
    emoji:"🥗",
    image: "/diet-planner.jpg"
  },
  {
    title:"Movie Review Sentiment Analyser",
    tech:["Python","NLP","Scikit-learn"],
    desc:"ML-based sentiment analysis system classifying movie reviews as positive or negative using text preprocessing, tokenization, and feature extraction.",
    demo:"https://movie-review-sentiment-analysis-yepmkeh8rwxwmldvix8we2.streamlit.app/",
    github:"https://github.com/MohamedJaseen",
    color:"#f59e0b",
    emoji:"🎬",
    image: "/sentiment-app.jpg"
  },
];

export const CERTS = [
  { name:"Python for Beginners", org:"Infosys Springboard", icon:"🐍", color:"#00ff88" },
  { name:"MongoDB Basics", org:"MongoDB University", icon:"🍃", color:"#0ea5e9" },
  { name:"Data Visualization", org:"Forage", icon:"📊", color:"#f59e0b" },
];
