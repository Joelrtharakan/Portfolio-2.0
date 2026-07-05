import { BrainCircuit, Code, Lightbulb, BookOpen, Layers, Puzzle, RefreshCw, Bot } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const aboutData = {
  bio: "A dedicated developer with a passion for building intelligent, user-focused digital solutions. I specialize in AI-powered applications, full-stack web development, and data-driven projects. Currently pursuing a B.Tech in Artificial Intelligence and Data Science, I believe in writing clean, efficient code and designing with purpose. Beyond development, I love exploring new frameworks, learning how AI is shaping our world, and contributing meaningfully to impactful projects.",
  highlights: [
    {
      icon: 'https://img.icons8.com/color/48/stack.png',
      title: 'Full-Stack Developer',
      text: 'Building end-to-end solutions with modern technologies.',
    },
    {
      icon: 'https://img.icons8.com/3d-fluency/94/bot.png',
      title: 'AI Enthusiast',
      text: 'Integrating intelligent features into real-world applications.',
    },
    {
      icon: 'https://img.icons8.com/3d-fluency/94/thinking-face-2.png',
      title: 'Problem Solver',
      text: 'Transforming complex challenges into elegant solutions.',
    },
    {
      icon: 'https://img.icons8.com/external-stickers-smashing-stocks/70/external-Learning-creativity-stickers-pack-stickers-smashing-stocks.png',
      title: 'Continuous Learner',
      text: 'Always exploring new technologies and best practices.',
    },
  ],
};

export interface SkillItem {
  name: string;
  icon: string;
  color: string;
  description: string;
  category: string;
}

export const skillsDataFlat: SkillItem[] = [
  // ─── Programming Languages ───
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', description: 'Core language for AI/ML, data science, and backend development.', category: 'Programming' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#ED8B00', description: 'Object-oriented language for enterprise and Android development.', category: 'Programming' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: '#A8B9CC', description: 'Low-level systems programming and algorithmic foundations.', category: 'Programming' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', description: 'Building interactive web applications and dynamic frontends.', category: 'Programming' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', color: '#0175C2', description: 'Language for building cross-platform mobile apps with Flutter.', category: 'Programming' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg', color: '#CC2927', description: 'Querying and managing relational databases efficiently.', category: 'Programming' },

  // ─── AI & Machine Learning ───
  { name: 'Machine Learning', icon: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-machine-learning-big-data-flaticons-flat-flat-icons.png', color: '#9333EA', description: 'Building predictive models and intelligent systems.', category: 'AI & ML' },
  { name: 'Deep Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg', color: '#7C3AED', description: 'Neural networks for complex pattern recognition.', category: 'AI & ML' },
  { name: 'NLP', icon: 'https://img.icons8.com/color/48/ai-robot--v11.png', color: '#8B5CF6', description: 'Processing and understanding human language with AI.', category: 'AI & ML' },
  { name: 'LLMs', icon: 'https://img.icons8.com/fluency/96/artificial-intelligence.png', color: '#A855F7', description: 'Large Language Models for text generation and reasoning.', category: 'AI & ML' },
  { name: 'Transformers', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', color: '#FFD21E', description: 'Attention-based architectures for NLP and vision.', category: 'AI & ML' },
  { name: 'LangGraph', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#06B6D4', description: 'Building stateful multi-agent AI workflows.', category: 'AI & ML' },
  { name: 'Prompt Engineering', icon: 'https://img.icons8.com/fluency/48/chatbot.png', color: '#F59E0B', description: 'Crafting effective prompts for optimal AI outputs.', category: 'AI & ML' },
  { name: 'RAG', icon: 'https://img.icons8.com/color/48/overview-pages-2.png', color: '#10B981', description: 'Retrieval-Augmented Generation for grounded AI.', category: 'AI & ML' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C', description: 'Deep learning framework for research and production.', category: 'AI & ML' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', description: 'End-to-end platform for machine learning.', category: 'AI & ML' },
  { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', color: '#F7931E', description: 'Classical ML algorithms and model evaluation tools.', category: 'AI & ML' },

  // ─── Data Analytics ───
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458', description: 'Data manipulation and analysis library for Python.', category: 'Data Analytics' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: '#013243', description: 'Numerical computing and array operations in Python.', category: 'Data Analytics' },
  { name: 'Data Visualization', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg', color: '#3B82F6', description: 'Creating insightful charts and visual representations.', category: 'Data Analytics' },
  { name: 'Tableau', icon: 'https://img.icons8.com/color/48/tableau-software.png', color: '#E97627', description: 'Interactive dashboards and business intelligence platform.', category: 'Data Analytics' },
  { name: 'EDA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', color: '#14B8A6', description: 'Exploratory Data Analysis for pattern discovery.', category: 'Data Analytics' },

  // ─── Web Development ───
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', color: '#FFFFFF', description: 'Lightweight Python web framework for building REST APIs.', category: 'Web Development' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: '#009688', description: 'Modern, fast Python web framework for APIs.', category: 'Web Development' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', description: 'Component-based UI library for interactive web apps.', category: 'Web Development' },
  { name: 'Next.js', icon: 'https://img.icons8.com/color/48/nextjs.png', color: '#FFFFFF', description: 'Full-stack React framework with SSR and static generation.', category: 'Web Development' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4', description: 'Utility-first CSS framework for rapid, beautiful UI design.', category: 'Web Development' },
  { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg', color: '#6366F1', description: 'Designing and consuming RESTful web services.', category: 'Web Development' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6', description: 'Crafting modern, responsive layouts and stunning visuals.', category: 'Web Development' },

  // ─── Mobile Development ───
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B', description: 'Cross-platform mobile development with beautiful UIs.', category: 'Mobile Development' },

  // ─── Databases ───
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1', description: 'Advanced open-source relational database system.', category: 'Databases' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', description: 'NoSQL document database for flexible schemas.', category: 'Databases' },
  { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', color: '#003B57', description: 'Lightweight embedded relational database engine.', category: 'Databases' },
  { name: 'ChromaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#FFD700', description: 'Vector database for AI embedding storage and retrieval.', category: 'Databases' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg', color: '#FFCA28', description: 'Cloud platform for hosting, auth, and real-time databases.', category: 'Databases' },

  // ─── Tools ───
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', description: 'Version control for tracking changes and collaboration.', category: 'Tools' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#FFFFFF', description: 'Platform for hosting repos and open-source collaboration.', category: 'Tools' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', description: 'Containerization for consistent dev and deployment.', category: 'Tools' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: '#FCC624', description: 'Open-source OS for development and server management.', category: 'Tools' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC', description: 'Feature-rich code editor with extensive plugin ecosystem.', category: 'Tools' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: '#FF6C37', description: 'API testing and development platform.', category: 'Tools' },
];

// Keep backward compat for anything else that imports the old shape
export const skillsData = {
  languages: ['Python', 'Java', 'C', 'JavaScript', 'Dart', 'HTML5', 'CSS3', 'SQL'],
  frameworks: ['Flask', 'FastAPI', 'React', 'Next.js', 'TailwindCSS', 'Flutter'],
  databases: ['PostgreSQL', 'MongoDB', 'SQLite', 'ChromaDB', 'Firebase'],
  ai: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'Transformers', 'LangGraph', 'Prompt Engineering', 'RAG', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Visualization', 'Tableau', 'EDA'],
  tools: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Postman'],
};

export const projectsData = [
  {
    title: 'Cybersecurity Threat Intelligence Analyzer 2.0',
    category: 'Cybersecurity',
    image: 'project-cybersecurity',
    tags: ['HTML', 'Python', 'CSS', 'MongoDB'],
    description: 'A robust analyzer tool that fetches, aggregates, and visualizes cybersecurity threat intelligence effectively.',
    liveLink: '#',
    githubLink: 'https://github.com/Joelrtharakan/Cybersecurity-Threat-Intelligence-Analyzer-2.0',
  },
  {
    title: 'Online Learning Hub',
    category: 'Full-Stack',
    image: 'project-cway',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Material UI'],
    description: 'A comprehensive MERN stack learning management system with interactive quizzes, live discussions, certificates, and an analytics dashboard.',
    liveLink: '#',
    githubLink: 'https://github.com/Joelrtharakan/Cway-Academy-Online-Learning-Hub.git',
  },
  {
    title: 'AI-Powered Boredom Breaker System',
    category: 'AI & Automation',
    image: 'project-boredom',
    tags: ['Flutter (Dart)', 'FastAPI', 'SQLite', 'ChromaDB'],
    description: 'An intelligent system that detects emotions and generates personalized activities to break boredom and improve mood.',
    liveLink: '#',
    githubLink: 'https://github.com/Joelrtharakan/AI-Powered-Boredom-Breaker-System-Using-Emotion-Detection-and-Personalized-Activity-Generation',
  },
  {
    title: 'SmartBill AI – Invoice & Analytics Platform',
    category: 'Full-Stack',
    image: 'project-smartbill',
    tags: ['Flask', 'SQL Server', 'TailwindCSS', 'Chart.js', 'WeasyPrint', 'NLU Chatbot'],
    description: 'A comprehensive platform for invoice management and business analytics, featuring an AI-powered chatbot for natural language queries.',
    liveLink: '#',
    githubLink: 'https://github.com/Joelrtharakan/SmartBill-AI-ChatBot.git',
  },
  {
    title: 'AI-Powered Support Ticketing System',
    category: 'AI & Automation',
    image: 'project-ticketing',
    tags: ['Flask', 'Ollama llama3.2', 'Jira API', 'Python', 'AI Chatbot'],
    description: 'An intelligent system that uses AI to analyze, categorize, and respond to support tickets, integrating seamlessly with Jira.',
    liveLink: '#',
    githubLink: 'https://github.com/Joelrtharakan/Support-Chat-Bot.git',
  },
  {
    title: 'Automated Email-to-Jira System',
    category: 'Automation',
    image: 'project-email-jira',
    tags: ['Python', 'Gmail API', 'Jira API', 'OAuth2', 'Email Automation'],
    description: 'An automation tool that parses incoming support emails and creates corresponding Jira tickets automatically, streamlining workflow.',
    liveLink: '#',
    githubLink: 'https://github.com/Joelrtharakan/Email-ticket-Project.git',
  },
];

export const experienceData = [
  {
    date: 'May 2026 – Present',
    title: 'Lead Full Stack Developer Intern',
    company: 'ARTnTEQ Business Solution Pvt. Ltd. (ARTnTEQ Digital) (Remote)',
    description: 'Developed a scalable LMS platform (CWAY Academy) using full stack architecture. Designed REST APIs using Node.js, Express.js, and PostgreSQL, and built a secure authentication system with JWT and RBAC.',
    link: 'https://cwayacademy.com/',
  },
  {
    date: 'Summer 2025',
    title: 'AI Development & Software Integration Intern',
    company: 'LQMS Software Solutions LLC, Dubai (Onsite)',
    description: "Developed an AI-powered support ticketing system, integrated with Jira, and built a chatbot using Ollama's LLaMA 3.2.",
  },
  {
    date: 'Summer 2024',
    title: 'Data Science & Analytics Intern',
    company: 'Innovate (Remote)',
    description: 'Applied machine learning techniques for a fake news detection project, involving data preprocessing, model training, and evaluation.',
  },
  {
    date: 'Apr–Jul 2023',
    title: 'Omni Sports Leader',
    company: 'Decathlon Sports India, Bangalore',
    description: 'Managed sales, product displays, and customer relations in a fast-paced retail environment, enhancing customer experience.',
  },
]
