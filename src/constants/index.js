import {
  chegg,
  gdsc,
  sqlbasic,
  sqlinter,
  gcsj,
  gdsc_certificate,
  deliotte,
  awscloud,
} from "../assets/images";
import {
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  movie,
  react,
  nextjs,
  reactnative,
  LivNSenseLogo,
  taskmanager,
  hcp,
  news,
  sorting,
  resume,
  tailwindcss,
  twitter,
  numpy,
  crawl4ai,
  sklearn,
  spacy,
  pandas,
  docker,
  aws,
  postman,
  sqlite,
  postgresql,
  vscode,
  mysql,
  bootstrap,
  kubernetes,
  nginx,
  gcp,
  flask,
  sql,
  python,
  cpp,
  c,
  googlecloud,
  moviereview,
  movierecomendation,
  resumeranking,
  wheather,
  kube,
  disaster,
  certificate,
  collegebuzz,
  ecommerce,
  chat,
  hobbylink,
  excel,
} from "../assets/icons";

// Organized Skills by Category
export const skillCategories = {
  programming: {
    title: "Programming Languages",
    skills: [
      { imageUrl: c, name: "C", type: "Programming Language" },
      { imageUrl: cpp, name: "C++", type: "Programming Language" },
      { imageUrl: python, name: "Python", type: "Programming Language" },
      { imageUrl: javascript, name: "JavaScript", type: "Frontend & Backend" },
      { imageUrl: sql, name: "SQL", type: "Database Query Language" },
    ],
  },
  frontend: {
    title: "Frontend Development",
    skills: [
      { imageUrl: react, name: "React.js", type: "Library" },
      { imageUrl: nextjs, name: "Next.js", type: "Library" },
      { imageUrl: reactnative, name: "React Native", type: "Library" },
      { imageUrl: html, name: "HTML", type: "Markup" },
      { imageUrl: css, name: "CSS", type: "Styling" },
      { imageUrl: javascript, name: "JavaScript", type: "Language" },
      { imageUrl: tailwindcss, name: "TailwindCSS", type: "Framework" },

      { imageUrl: bootstrap, name: "Bootstrap", type: "Framework" },
    ],
  },
  backend: {
    title: "Backend Development",
    skills: [
      { imageUrl: nodejs, name: "Node JS", type: "Framework" },
      { imageUrl: express, name: "Express JS", type: "REST API" },
      { imageUrl: flask, name: "Flask", type: "Framework" },
    ],
  },
  database: {
    title: "Data Management Systems",
    skills: [
      { imageUrl: mongodb, name: "MongoDB", type: "No SQL" },
      { imageUrl: postgresql, name: "PostgreSQL", type: "SQL Database" },
      // { imageUrl: mysql, name: "MySQL", type: "SQL Database" },
      { imageUrl: sqlite, name: "SQLite", type: "SQL Database" },
    ],
  },
  clouddevops: {
    title: "Cloud & DevOps",
    skills: [
      { imageUrl: gcp, name: "Google Cloud Platform", type: "Cloud Provider" },
      { imageUrl: aws, name: "AWS", type: "Cloud Provider" },
      { imageUrl: docker, name: "Docker", type: "Containerization" },
      // {
      //   imageUrl: kubernetes,
      //   name: "Kubernetes",
      //   type: "Container Orchestration",
      // },
      { imageUrl: nginx, name: "Nginx", type: "Web Server / Reverse Proxy" },
    ],
  },
  tools: {
    title: "Tools & Platforms",
    skills: [
      { imageUrl: git, name: "Git", type: "Version Control" },
      { imageUrl: github, name: "GitHub", type: "Code Hosting" },
      { imageUrl: vscode, name: "VS Code", type: "IDE" },
      { imageUrl: postman, name: "Postman", type: "API Testing" },
    ],
  },

  libraries: {
    title: "Frameworks & Libraries",
    skills: [
      { imageUrl: pandas, name: "Pandas", type: "Data Analysis" },
      { imageUrl: numpy, name: "NumPy", type: "Scientific Computing" },
      { imageUrl: sklearn, name: "Scikit-learn", type: "Machine Learning" },
      { imageUrl: spacy, name: "SpaCy", type: "Natural Language Processing" },
      { imageUrl: crawl4ai, name: "Crawl4AI", type: "Web Scraping Framework" },
    ],
  },
};

export const professionalExperience = [
  {
    title: "Software Engineer Intern",
    company_name: "LivNSense GreenOps Pvt. Ltd.",
    icon: LivNSenseLogo,
    iconBg: "#ffffff",
    date: "November 2025 - July 2026",
    points: [
      "Developed full-stack enterprise applications using React.js, Next.js, Node.js, Express.js, and PostgreSQL.",
      "Built REST APIs, authentication modules, HRMS features, and AI-powered industrial safety solutions.",
      "Optimized backend performance with Redis caching and collaborated in Agile development teams.",
    ],
  },
];

export const leadershipExperience = [
  {
    title: "GDSC Lead",
    company_name: "Google Developer Student Clubs",
    icon: gdsc,
    iconBg: "#ffffff",
    date: "July 2023 - August 2024",
    points: [
      "Led the Google Developer Student Club at Central Institute of Technology Kokrajhar.",
      "Organized workshops, hackathons, and technical events.",
      "Mentored students and built collaborations with developer communities.",
    ],
  },
];

export const otherExperience = [
  {
    title: "Subject Matter Expert",
    company_name: "Chegg",
    icon: chegg,
    iconBg: "#ffffff",
    date: "December 2021 - January 2023",
    points: [
      "Provided accurate solutions to Computer Science and Engineering questions.",
      "Strengthened analytical thinking and written communication through academic mentoring.",
      "Maintained high-quality responses while meeting strict quality standards.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/panjyar",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/pradip-panjiyar/",
  },
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://twitter.com/pradipPanjiyar2",
  },
];

export const projectCategories = [
  { id: "all", label: "All", emoji: "📁" },
  { id: "aiml", label: "AI Powered Application", emoji: "🤖" },
  { id: "fullstack", label: "Full-stack", emoji: "🧠" },
  { id: "cloud", label: "Cloud-Ops", emoji: "☁️" },
  { id: "frontend", label: "Front-end", emoji: "🎨" },
];

export const projects = [
  // Full Stack Projects
  {
    category: "fullstack",
    iconUrl: sorting,
    theme: "btn-back-green",
    name: "CollegeBuzz",
    shortDescription:
      "Academic news aggregator from 100+ AICTE colleges with intelligent archival system.",
    fullDescription:
      "This is a full-stack web application that aggregates academic news and events from over 100 AICTE-approved college websites. Built using Flask for the backend with Crawl4AI for web scraping, MongoDB for data storage, and React.js for the frontend. Features include a scalable data pipeline, RESTful API, dynamic search functionality, multi-criteria sorting, and automated archival system for older content. Used github actions CI/CD to automate deployment. The backend is deployed on GCP using Gunicorn and Nginx, with DuckDNS for domain management and Let's Encrypt SSL for secure HTTPS access. The frontend is hosted on Netlify, and the database is managed on NeonDB for high availability and performance.",
    technologies: ["Flask", "Crawl4AI", "MongoDB", "React", "GCP", "Python"],
    deployment:
      "Backend on GCP with Gunicorn, Nginx, DuckDNS; Frontend on Netlify; Database on NeonDB",
    liveLink: "https://college-buzz.vercel.app/",
    githubLink: "https://github.com/panjyar/CollegeBuzz.git",
    preview: collegebuzz,
    features: [
      "Aggregates data from 100+ colleges",
      "RESTful API with Flask",
      "Dynamic search and sorting",
      "Automated archival system",
    ],
  },
  {
    category: "fullstack",
    iconUrl: news,
    theme: "btn-back-green",
    name: "Real-time Chat Application",
    shortDescription:
      "WebSocket-based chat system with AI assistant and delivery receipts.",
    fullDescription:
      "A real-time messaging application built with React, Node.js, Express, and PostgreSQL. Features include JWT-based authentication, Socket.IO for real-time communication, typing indicators, delivery receipts, and an AI auto-reply assistant. The application is containerized using Docker and uses Prisma ORM for database management.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Socket.IO",
      "Docker",
      "Prisma",
    ],
    deployment: "Dockerized deployment",
    liveLink: "https://whatapp-chat-app-client.onrender.com/",
    githubLink: "https://github.com/panjyar/whatApp-Chat-App",
    preview: chat,
    features: [
      "Real-time messaging with Socket.IO",
      "Typing indicators and receipts",
      "AI auto-reply assistant",
      "Dockerized architecture",
    ],
  },
  {
    category: "fullstack",
    iconUrl: estate,
    theme: "btn-back-green",
    name: "E-Commerce Platform",
    shortDescription:
      "Full-featured MERN e-commerce application with payment gateway integration.",
    fullDescription:
      "A comprehensive e-commerce platform built using the MERN stack. Features include JWT-based authentication with CORS policy enforcement, Razorpay payment gateway integration for secure transactions, shopping cart and wishlist functionality, order management system, and advanced product filtering. The application implements secure API access patterns and real-time payment validation.",
    technologies: ["MERN", "JWT", "Razorpay", "REST API", "Node.js", "Express"],
    deployment: "Full-stack MERN deployment",
    liveLink: "https://e-commerce-1lac.onrender.com/",
    githubLink: "https://github.com/panjyar/E-Commerce-.git",
    preview: ecommerce,
    features: [
      "JWT authentication with CORS",
      "Razorpay payment integration",
      "Cart and wishlist management",
      "Advanced product filtering",
    ],
  },

  // Cloud & DevOps Projects
  {
    category: "cloud",
    iconUrl: sorting,
    theme: "btn-back-blue",
    name: "Kube-Credential Platform",
    shortDescription:
      "Cloud-native credential issuance and verification system deployed on GKE with microservices architecture.",
    fullDescription:
      "This is a cloud-native credential issuance and verification platform built using Node.js microservices architecture. The system is deployed on Google Kubernetes Engine (GKE) with auto-scaling using HPA, persistent storage with StatefulSets, and secure internal service communication. Features include JWT-based authentication, automatic token refresh, and role-based access control.",
    technologies: [
      "Node.js",
      "React",
      "TypeScript",
      "Kubernetes",
      "Docker",
      "GCP",
    ],
    deployment: "Deployed on GKE with CI/CD using Cloud Build",
    liveLink: "http://kubecredential.duckdns.org/",
    githubLink:
      "https://github.com/panjyar/Credential-Issuance-Verification-Platform.git",
    preview: kube,
    features: [
      "Microservices architecture with auto-scaling",
      "JWT authentication with token refresh",
      "Persistent storage using StatefulSets",
      "Internal service mesh communication",
    ],
  },
  {
    category: "cloud",
    iconUrl: sorting,
    theme: "btn-back-blue",
    name: "Certificate Generator for Google Cloud Study Jam 2023",
    shortDescription:
      "Client-side certificate generator containerized with Docker and deployed on Cloud Run.",
    fullDescription:
      "This is a client-side certificate generator built using HTML, CSS, and JavaScript with jsPDF library. The application is containerized using Docker with Nginx as the web server and deployed on Google Cloud Run. Features automated CI/CD pipeline with Cloud Build for seamless deployment. Successfully distributed certificates to 300+ participants.",
    technologies: ["HTML", "CSS", "JS", "jsPDF", "Docker", "Nginx", "GCP"],
    deployment: "Cloud Run with automated CI/CD via Cloud Build",
    liveLink: "https://google-cloud-certificate-gdsccitk.netlify.app/",
    githubLink: "https://github.com/panjyar/gdsccitkcloud.git",
    preview: certificate,
    features: [
      "Dynamic PDF generation using jsPDF",
      "Email-based certificate retrieval",
      "Dockerized deployment on Cloud Run",
      "Automated CI/CD pipeline",
    ],
  },
  {
    category: "cloud",
    iconUrl: news,
    theme: "btn-back-blue",
    name: "Weather Application",
    shortDescription:
      "Containerized Flask weather application with CI/CD deployment on Google Cloud Run.",
    fullDescription:
      "A full-stack weather application built with Flask and deployed on Google Cloud Run. The application uses OpenWeather API for real-time weather data. Features include Docker containerization, automated builds via Cloud Build, and deployment to Cloud Run with automatic SSL certificates.",
    technologies: [
      "Flask",
      "Python",
      "Docker",
      "GCP",
      "Cloud Run",
      "Cloud Build",
    ],
    deployment: "Google Cloud Run with Cloud Build CI/CD",
    liveLink: "https://weather-container-1030325322639.asia-south1.run.app/",
    githubLink: "https://github.com/panjyar/Weather-App.git",
    preview: wheather,
    features: [
      "Real-time weather data integration",
      "Dockerized Flask application",
      "Automated CI/CD with Cloud Build",
      "Serverless deployment on Cloud Run",
    ],
  },

  // AI/ML Projects
  {
    category: "aiml",
    iconUrl: news,
    theme: "btn-back-purple",
    name: "AI-First HCP CRM",
    shortDescription:
      "AI-powered CRM using LangGraph agents to automate healthcare professional interaction logging and follow-up management.",

    fullDescription:
      "An AI-first healthcare CRM that enables medical representatives to manage Healthcare Professional (HCP) interactions through natural language conversations. Built with FastAPI, LangGraph, PostgreSQL, and Groq LLMs, the system intelligently selects CRM tools to log interactions, edit records, search HCPs, retrieve history, and schedule follow-ups while automatically updating a read-only CRM interface.",

    technologies: [
      "FastAPI",
      "LangGraph",
      "Groq LLM",
      "PostgreSQL",
      "React",
      "Docker",
      "Python",
    ],

    deployment: "Dockerized FastAPI backend with PostgreSQL",

    liveLink: "https://ai-first-hcp-crm-frontend.onrender.com/",

    githubLink: "https://github.com/panjyar/AI-First-HCP-CRM",

    preview: hcp,

    features: [
      "LangGraph AI agent with multiple CRM tools",
      "Natural language interaction logging",
      "Automated HCP search and follow-up scheduling",
      "Real-time CRM form updates using AI responses",
    ],
  },
  {
    category: "aiml",
    iconUrl: news,
    theme: "btn-back-purple",
    name: "AI Assistance Task Manager",

    shortDescription:
      "Full-stack task management platform with AI-powered task generation and intelligent productivity assistance.",

    fullDescription:
      "A modern full-stack task management application featuring secure authentication, drag-and-drop task organization, and AI-assisted task creation. Google Gemini generates task descriptions and priority levels from simple prompts, while the Node.js backend securely handles AI requests through REST APIs with MongoDB for persistent task management.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
      "Tailwind CSS",
      "JWT",
    ],

    deployment: "Node.js REST API with MongoDB",

    liveLink: "https://ai-assistance-todo-frontend.onrender.com/",

    githubLink: "https://github.com/panjyar/AI-Assistance-ToDo",

    preview: taskmanager,

    features: [
      "AI-generated task descriptions and priorities",
      "Drag-and-drop task management",
      "JWT authentication with REST APIs",
      "Responsive full-stack productivity dashboard",
    ],
  },
  {
    category: "aiml",
    iconUrl: resume,
    theme: "btn-back-purple",
    name: "Resume Parsing & Ranking System ",
    shortDescription:
      "NLP-powered resume parser with intelligent ranking algorithm for candidate evaluation.",
    fullDescription:
      "This is an AI-powered resume parsing and ranking system built using Python and SpaCy NLP. The system extracts structured data (skills, education, experience) from PDF resumes using Named Entity Recognition. Features include an intelligent ranking algorithm that matches resumes against job descriptions with 85% accuracy using keyword weighting and domain scoring. Includes Google OAuth for secure authentication and MongoDB for data management.",
    technologies: ["Python", "Flask", "MongoDB", "SpaCy", "NLP", "OAuth"],
    deployment: "Flask server with MongoDB Atlas",
    liveLink: "https://www.youtube.com/watch?v=ujUgUUOB0T8",
    githubLink: "https://github.com/panjyar/Resume_Ranking_System.git",
    preview: resumeranking,
    features: [
      "NER-based data extraction from PDFs",
      "Intelligent ranking with 85% accuracy",
      "Google OAuth authentication",
      "Recruiter dashboard for management",
    ],
  },
  {
    category: "aiml",
    iconUrl: movie,
    theme: "btn-back-purple",
    name: "Movie Recommendation System",
    shortDescription:
      "Content-based recommendation engine using cosine similarity on movie metadata.",
    fullDescription:
      "A content-based movie recommendation system built using machine learning algorithms. The system analyzes movie metadata including genre, cast, directors, and keywords to compute similarity scores using cosine similarity. Features an interactive Flask web UI for users to input preferences and receive personalized movie recommendations.",
    technologies: ["Python", "Flask", "Pandas", "Scikit-learn", "NumPy"],
    deployment: "Flask application",
    liveLink: "https://github.com/panjyar/Movie_Recommendation_System.git",
    githubLink: "https://github.com/panjyar/Movie_Recommendation_System.git",
    preview: movierecomendation,
    features: [
      "Cosine similarity-based recommendations",
      "Interactive web interface",
      "Feature extraction pipeline",
      "Personalized movie suggestions",
    ],
  },
  {
    category: "fullstack",
    iconUrl: news,
    theme: "btn-back-purple",
    name: "Disaster Response Platform",
    shortDescription:
      "AI-assisted disaster management system with real-time coordination and geospatial mapping.",
    fullDescription:
      "A comprehensive disaster response coordination platform built with MERN stack and integrated with Google Gemini API for AI-assisted decision support. Features include real-time disaster reporting, geospatial queries using Supabase, social media API integration for crowd-sourced data, and AI-powered insights for response coordination.",
    technologies: [
      "MERN",
      "Google Gemini API",
      "Supabase",
      "Social APIs",
      "Geospatial",
    ],
    deployment: "Full-stack deployment with cloud integration",
    liveLink: "https://disaster-management-system-client.onrender.com/",
    githubLink: "https://github.com/panjyar/Disaster-Management-System.git",
    preview: disaster,
    features: [
      "AI-assisted decision support",
      "Real-time geospatial mapping",
      "Social media integration",
      "Coordinated response management",
    ],
  },
  {
    category: "fullstack",
    iconUrl: news,
    theme: "btn-back-green",
    name: "HobbyLink App",
    shortDescription:
      "Social hobby network to connect users with shared interests and activities.",
    fullDescription:
      "HobbyLink is a full-stack social networking platform where users can connect with others who share similar hobbies. Built using the MERN stack, it features secure JWT authentication, hobby-based user recommendations, and a modern UI powered by React Flow for relationship visualization. The backend manages all data persistence, user interactions, and API logic with Express and MongoDB. The app enables users to follow, explore, and build networks based on common interests in real-time.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "React Flow",
    ],
    deployment: "Full-stack MERN deployment on Render",
    liveLink: "https://hobbylink-app.onrender.com/",
    githubLink: "https://github.com/panjyar/hobbylink-app.git",
    preview: hobbylink,
    features: [
      "JWT-based authentication",
      "Hobby-based user discovery",
      "Real-time relationship visualization",
      "Modern responsive UI with React Flow",
    ],
  },
  {
    category: "fullstack",
    iconUrl: excel,
    theme: "btn-back-blue",
    name: "Excel Data Aggregator",
    shortDescription:
      "MERN stack web app that imports Excel files, aggregates data, and provides real-time filtering and insights.",
    fullDescription:
      "Excel Data Aggregator is a full-stack MERN application that allows users to upload Excel (.xlsx) files, import them into MongoDB, and perform real-time data aggregation with advanced filtering options. It uses Node.js, Express, and Mongoose for backend data handling and aggregation pipelines, while the React-based frontend provides a smooth and responsive experience for uploading, filtering, and visualizing results. The system automatically merges identical records, sums quantities, and updates data instantly, making it ideal for managing large datasets efficiently.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Axios",
      "Multer",
      "XLSX",
    ],
    deployment: "Local and cloud-ready MERN stack setup",
    liveLink: "https://excel-data-aggregator-client.onrender.com/",
    githubLink: "https://github.com/panjyar/Excel-Data-Aggregator.git",
    preview: excel,
    features: [
      "Excel file upload and automatic MongoDB import",
      "Advanced multi-field filtering (category, branch, supplier, fabric, concept)",
      "Data aggregation using MongoDB pipelines",
      "Responsive and modern UI with real-time updates",
      "Automatic record merging and quantity summation",
    ],
  },
  // Frontend Projects
  {
    category: "frontend",
    iconUrl: sorting,
    theme: "btn-back-pink",
    name: "Certificate Generator",
    shortDescription:
      "Lightweight client-side PDF certificate generator with jsPDF.",
    fullDescription:
      "A lightweight client-side application for generating and downloading personalized PDF certificates using jsPDF library. Built with HTML, CSS, and JavaScript, the application allows participants to download their certificates by entering their email ID. Successfully distributed to 300+ participants, eliminating manual processing.",
    technologies: ["HTML", "CSS", "JavaScript", "jsPDF"],
    deployment: "Static site on Netlify",
    liveLink: "https://google-cloud-certificate-gdsccitk.netlify.app/",
    githubLink: "https://github.com/panjyar/gdsccitkcloud.git",
    preview: certificate,
    features: [
      "Client-side PDF generation",
      "Email-based retrieval",
      "No server required",
      "300+ certificates distributed",
    ],
  },
  {
    category: "frontend",
    iconUrl: sorting,
    theme: "btn-back-pink",
    name: "Google Cloud Study Jam  Leaderboard",
    shortDescription:
      "Interactive leaderboard for tracking GDSC member activities and rankings.",
    fullDescription:
      "An interactive leaderboard web application for tracking Google Developer Student Club member activities and participant rankings. Built with HTML, CSS, and JavaScript, the application features dynamic updates, real-time score calculations, and responsive design for mobile and desktop viewing.",
    technologies: ["HTML", "CSS", "JavaScript"],
    deployment: "Static site deployment",
    liveLink: "https://gdsccitkcloud.netlify.app/",
    githubLink: "https://github.com/panjyar/gdsccitkcloud.git",
    preview: googlecloud,
    features: [
      "Real-time score tracking",
      "Participant rankings",
      "Responsive design",
      "Dynamic updates",
    ],
  },
];

export const blogs = [
  {
    title: "How I Built a MongoDB Archiving System for Crawled Data",
    platform: "DEV.to",
    date: "October 2025",
    description:
      "A comprehensive guide on building an efficient MongoDB archiving system for managing crawled data at scale, including implementation strategies and best practices.",
    link: "https://dev.to/pradippanjiyar/how-i-built-a-mongodb-archiving-system-for-crawled-data-30o7",
    tags: ["MongoDB", "Python", "Data Management", "Backend"],
  },
  {
    title: "Handling 100+ Website Scrapers with Python's asyncio",
    platform: "DEV.to",
    date: "October 2025",
    description:
      "A comprehensive guide on building an efficient MongoDB archiving system for managing crawled data at scale, including implementation strategies and best practices.",
    link: "https://dev.to/pradippanjiyar/handling-100-website-scrapers-with-pythons-asyncio-4905",
    tags: ["Python", "Web Scraping", "crawl4AI"],
  },
];

export const certificates = [
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services (via Credly)",
    image: awscloud,
    link: "https://www.credly.com/badges/f37d4d27-2115-467c-bcf0-280d55f24efa/public_url",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    image: sqlbasic,
    link: "https://www.hackerrank.com/certificates/iframe/bc998b0e8e53",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    image: sqlinter,
    link: "https://www.hackerrank.com/certificates/iframe/15494cf61275",
  },

  {
    title: "Deloitte Virtual Job Simulation",
    issuer: "Deloitte (Forage)",
    image: deliotte,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_8XmhjHg37Kw4pgv2f_1750878676062_completion_certificate.pdf",
  },
  {
    title: "GDSC Lead",
    issuer: "Google Developer Student Clubs",
    image: gdsc_certificate,
    link: "https://drive.google.com/file/d/1A1tb0wNLp7xMXT8NlamstJX83Ypqs6e1/view?usp=sharing",
  },
  {
    title: "Google Cloud Study Jam",
    issuer: "Google Developer Student Clubs CITK",
    image: gdsc_certificate,
    link: "https://drive.google.com/file/d/14NrXf-U5lC3SNm4NIVsyrmR1YZuZ-wg1/view?usp=sharing",
  },
];
