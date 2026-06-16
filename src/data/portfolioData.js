// ============================================================
// PORTFOLIO DATA — Harsh Raj Singh
// ============================================================

export const personalInfo = {
  name: "Harsh Raj Singh",
  title: "AI/ML & Software Engineer",
  roles: [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "RAG & NLP Specialist",
    "Open Source Builder",
    "SEO Content Strategist",
  ],
  tagline: "Building intelligent systems that scale.",
  bio: "B.Tech CSE student at GTB4CEC (GGSIPU), New Delhi with a CGPA of 9.4. I engineer AI-powered products and full-stack systems — from RAG chatbots at Govt. of India PSUs to deep-learning stock forecasters. I believe great software is invisible until it isn't.",
  email: "harshrs04012004@gmail.com",
  phone: "+91 7488672705",
  location: "New Delhi, India",
  cvLink: "https://drive.google.com/file/d/1HSRxqErKeOmsgHTUaKlN0aLo4UQLUoSz/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/harsh-raj-singh-16b53328a/",
  github: "https://github.com/HarshGRS",
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["Python", "JavaScript (ES6+)", "C", "C++", "Java"],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Three.js", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["Django", "FastAPI", "Node.js", "Express.js", "REST API", "JWT / OAuth2"],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    items: ["NLP", "RAG Architecture", "TensorFlow", "Keras", "NumPy", "LSTM Models", "pgvector"],
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "MySQL", "SQLite", "pgvector (Vector DB)"],
  },
  {
    category: "DevOps & Tools",
    icon: "Settings",
    items: ["Docker", "Git", "GitHub Actions", "Linux", "MATLAB", "Agile / SDLC"],
  },
];

export const skillBars = [
  { name: "Python / AI-ML Stack", level: 85 },
  { name: "React.js / Frontend", level: 78 },
  { name: "PostgreSQL / Databases", level: 88 },
  { name: "Django / FastAPI", level: 82 },
  { name: "JavaScript (ES6+)", level: 80 },
  { name: "DSA (C++ / Java)", level: 65 },
];

export const projects = [
  {
    id: 1,
    title: "HIDCAS — HUDCO AI Chatbot",
    subtitle: "Intelligent Document Search & Conversational AI",
    description:
      "AI-powered enterprise chatbot for HUDCO (Govt. of India) leveraging RAG workflows and semantic NLP embeddings to provide contextual document answers over a vector database. Secured with JWT + OAuth2 and containerized for production.",
    tags: ["FastAPI", "RAG", "pgvector", "Docker", "JWT", "NLP"],
    color: "#00d4ff",
    featured: true,
    category: "AI / ML",
  },
  {
    id: 2,
    title: "ONGC Digital Repository",
    subtitle: "Enterprise Project Management Platform",
    description:
      "Full-stack digital repository for ONGC (Maharatna PSU) enabling secure management of organizational projects. Includes RBAC, authentication, workflow automation, and audit trails. Deployed on Linux server.",
    tags: ["Django", "PostgreSQL", "Tailwind CSS", "Linux", "RBAC"],
    color: "#ffd700",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Stock Scope",
    subtitle: "LSTM-Based Stock Prediction System",
    description:
      "Deep learning pipeline using stacked LSTM networks trained on historical market data to forecast stock price trends. Includes full preprocessing with NumPy, training with TensorFlow/Keras, and analytical visualizations.",
    tags: ["TensorFlow", "Keras", "NumPy", "LSTM", "Python"],
    color: "#a78bfa",
    featured: false,
    category: "AI / ML",
  },
  {
    id: 4,
    title: "EduTrack",
    subtitle: "Student Performance Monitoring System",
    description:
      "Desktop application for academic record management with integrated Matplotlib dashboards, automated PDF reports via ReportLab, and a Flask backend — all within a polished Tkinter interface.",
    tags: ["Python", "Tkinter", "Flask", "SQLite", "Matplotlib", "ReportLab"],
    color: "#34d399",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Weatherly",
    subtitle: "Real-Time Weather Forecast App",
    description:
      "React.js weather application integrated with OpenWeatherMap API showing live conditions and forecasts for any global city. Features Redux state management and is deployed on Vercel.",
    tags: ["React.js", "Redux", "OpenWeatherMap API", "Vercel"],
    color: "#fb923c",
    featured: false,
    category: "Frontend",
  },
  {
    id: 6,
    title: "TaskMate",
    subtitle: "3D Enhanced To-Do Application",
    description:
      "Interactive task manager with a Three.js 3D particle background, priority levels, due date picker, and persistent localStorage. A visually immersive productivity tool deployed on Vercel.",
    tags: ["JavaScript", "Three.js", "CSS3", "LocalStorage", "Vercel"],
    color: "#f472b6",
    featured: false,
    category: "Frontend",
  },
  {
    id: 7,
    title: "SHUDDHAM",
    subtitle: "AI-Driven Sustainable Packaging Research",
    description:
      "Research work developing an innovative AI-driven biodegradable protein-based film solution. Conducted data analysis using MATLAB, ATLAS.ti, and MySQL with findings documented via Mendeley.",
    tags: ["MATLAB", "ATLAS.ti", "MySQL", "Research"],
    color: "#22d3ee",
    featured: false,
    category: "Research",
  },
];

export const experience = [
  {
    role: "AI/ML & Software Development Intern",
    org: "HUDCO — Housing & Urban Development Corporation Ltd.",
    badge: "Navratna CPSE, Govt. of India",
    period: "Feb 2026 – Mar 2026",
    location: "New Delhi",
    points: [
      "Developed an AI-powered chatbot 'HIDCAS' using RAG for semantic document search and contextual NLP responses.",
      "Built a scalable FastAPI REST backend with vector search via PostgreSQL + pgvector.",
      "Implemented JWT authentication and OAuth2 security; containerized with Docker.",
    ],
    color: "#00d4ff",
    certLink: null,
  },
  {
    role: "Software Development Intern",
    org: "ONGC — Oil and Natural Gas Corporation Ltd.",
    badge: "Maharatna CPSE, Govt. of India",
    period: "Jul 2025 – Aug 2025",
    location: "New Delhi",
    points: [
      "Developed a full-stack Digital Repository using Django (MVT) with authentication, RBAC, and secure workflow management.",
      "Built a responsive UI, integrated PostgreSQL, and deployed on Linux following SDLC practices.",
    ],
    color: "#ffd700",
    certLink:
      "https://drive.google.com/file/d/1FTxKKAkfOWRY9IaZwU7mXrP8T4O6NsDO/view?usp=drivesdk",
  },
  {
    role: "Student Head Coordinator",
    org: "Training & Placement Cell — GTB4CEC",
    badge: "Leadership Role",
    period: "Jul 2025 – Present",
    location: "New Delhi",
    points: [
      "Coordinating campus recruitment operations and student database management.",
      "Managed company onboarding, scheduling, and placement drive execution.",
    ],
    color: "#a78bfa",
    certLink: null,
  },
  {
    role: "Secretary",
    org: "IEEE Student Branch — GTB4CEC",
    badge: "Technical Society",
    period: "Apr 2025 – Nov 2025",
    location: "New Delhi",
    points: [
      "Led establishment of the IEEE Student Branch and managed technical initiatives.",
      "Organized workshops and seminars promoting innovation and professional development.",
    ],
    color: "#34d399",
    certLink: null,
  },
  {
    role: "Mentor & Head",
    org: "The Empirical Society — GTB4CEC",
    badge: "108-Member Tech Community",
    period: "Jul 2024 – Present",
    location: "New Delhi",
    points: [
      "Led and mentored a 108-member technical community with events, workshops, and tech fests.",
      "Managed cross-team coordination, event planning, and operational workflows.",
    ],
    color: "#fb923c",
    certLink: null,
  },
];

export const certifications = [
  {
    title: "AI/ML for Geodata Analysis",
    issuer: "IIRS, Dehradun (Under ISRO)",
    year: "2024",
    link: "https://drive.google.com/file/d/15D5X0VUJa-ohSf0sUgsDp7wF7kk1gB_/view?usp=drivesdk",
  },
  {
    title: "Build a Computer Vision App with Azure Cognitive Services",
    issuer: "Microsoft (via Coursera)",
    year: "2024",
    link: "https://drive.google.com/file/d/1LY_bf8nD2L4Z0ePVFDLKK6ds9vYj29GQ/view?usp=sharing",
  },
  {
    title: "Search Engine Optimization (SEO) with Squarespace",
    issuer: "Coursera",
    year: "2024",
    link: "https://drive.google.com/file/d/1efyVU5fss5zxMBxuR0775FyIH588RGof/view?usp=drivesdk",
  },
  {
    title: "Soroban Accelerated Bootcamp",
    issuer: "Rise In × Stellar",
    year: "2024",
    link: "https://drive.google.com/file/d/1YmXwcHR9zLwGO_wPTUzeuB__ViLOhQLA/view?usp=drivesdk",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Guru Tegh Bahadur 4th Centenary Engineering College (GGSIPU)",
    location: "New Delhi, India",
    period: "2023 – 2027",
    score: "CGPA: 9.4",
  },
  {
    degree: "Higher Secondary — Science + Maths (CBSE)",
    school: "PM SHRI KV No. 2, Delhi Cantt",
    location: "New Delhi, India",
    period: "2022",
    score: "94%",
  },
  {
    degree: "Secondary Education (CBSE)",
    school: "PM SHRI KV, Vayu Sena Nagar",
    location: "Nagpur, Maharashtra",
    period: "2020",
    score: "91%",
  },
];

export const stats = [
  { value: 9, suffix: ".4", label: "CGPA", description: "B.Tech CSE" },
  { value: 6, suffix: "+", label: "Projects", description: "Shipped to Production" },
  { value: 2, suffix: "", label: "PSU Internships", description: "Govt. of India" },
  { value: 108, suffix: "+", label: "Members Led", description: "The Empirical Society" },
];
