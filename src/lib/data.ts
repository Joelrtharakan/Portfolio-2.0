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
      icon: '/icons/48_stack.webp',
      title: 'Full-Stack Developer',
      text: 'Building end-to-end solutions with modern technologies.',
    },
    {
      icon: '/icons/94_bot.webp',
      title: 'AI Enthusiast',
      text: 'Integrating intelligent features into real-world applications.',
    },
    {
      icon: '/icons/94_thinking_face_2.webp',
      title: 'Problem Solver',
      text: 'Transforming complex challenges into elegant solutions.',
    },
    {
      icon: '/icons/70_external_Learning_creativity_stickers_pack_stickers_smashing_stocks.webp',
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
  { name: 'Python', icon: '/icons/python_python_original.svg', color: '#3776AB', description: 'Core language for AI/ML, data science, and backend development.', category: 'Programming' },
  { name: 'Java', icon: '/icons/java_java_original.svg', color: '#ED8B00', description: 'Object-oriented language for enterprise and Android development.', category: 'Programming' },
  { name: 'C', icon: '/icons/c_c_original.svg', color: '#A8B9CC', description: 'Low-level systems programming and algorithmic foundations.', category: 'Programming' },
  { name: 'JavaScript', icon: '/icons/javascript_javascript_original.svg', color: '#F7DF1E', description: 'Building interactive web applications and dynamic frontends.', category: 'Programming' },
  { name: 'Dart', icon: '/icons/dart_dart_original.svg', color: '#0175C2', description: 'Language for building cross-platform mobile apps with Flutter.', category: 'Programming' },
  { name: 'SQL', icon: '/icons/azuresqldatabase_azuresqldatabase_original.svg', color: '#CC2927', description: 'Querying and managing relational databases efficiently.', category: 'Programming' },

  // ─── AI & Machine Learning ───
  { name: 'Machine Learning', icon: '/icons/64_external_machine_learning_big_data_flaticons_flat_flat_icons.webp', color: '#9333EA', description: 'Building predictive models and intelligent systems.', category: 'AI & ML' },
  { name: 'Deep Learning', icon: '/icons/keras_keras_original.svg', color: '#7C3AED', description: 'Neural networks for complex pattern recognition.', category: 'AI & ML' },
  { name: 'NLP', icon: '/icons/48_ai_robot__v11.webp', color: '#8B5CF6', description: 'Processing and understanding human language with AI.', category: 'AI & ML' },
  { name: 'LLMs', icon: '/icons/96_artificial_intelligence.webp', color: '#A855F7', description: 'Large Language Models for text generation and reasoning.', category: 'AI & ML' },
  { name: 'Transformers', icon: '/icons/assets_huggingface_logo_noborder.svg', color: '#FFD21E', description: 'Attention-based architectures for NLP and vision.', category: 'AI & ML' },
  { name: 'LangGraph', icon: '/icons/graphql_graphql_plain.svg', color: '#06B6D4', description: 'Building stateful multi-agent AI workflows.', category: 'AI & ML' },
  { name: 'Prompt Engineering', icon: '/icons/48_chatbot.webp', color: '#F59E0B', description: 'Crafting effective prompts for optimal AI outputs.', category: 'AI & ML' },
  { name: 'RAG', icon: '/icons/48_overview_pages_2.webp', color: '#10B981', description: 'Retrieval-Augmented Generation for grounded AI.', category: 'AI & ML' },
  { name: 'PyTorch', icon: '/icons/pytorch_pytorch_original.svg', color: '#EE4C2C', description: 'Deep learning framework for research and production.', category: 'AI & ML' },
  { name: 'TensorFlow', icon: '/icons/tensorflow_tensorflow_original.svg', color: '#FF6F00', description: 'End-to-end platform for machine learning.', category: 'AI & ML' },
  { name: 'Scikit-learn', icon: '/icons/scikitlearn_scikitlearn_original.svg', color: '#F7931E', description: 'Classical ML algorithms and model evaluation tools.', category: 'AI & ML' },

  // ─── Data Analytics ───
  { name: 'Pandas', icon: '/icons/pandas_pandas_original.svg', color: '#150458', description: 'Data manipulation and analysis library for Python.', category: 'Data Analytics' },
  { name: 'NumPy', icon: '/icons/numpy_numpy_original.svg', color: '#013243', description: 'Numerical computing and array operations in Python.', category: 'Data Analytics' },
  { name: 'Data Visualization', icon: '/icons/plotly_plotly_original.svg', color: '#3B82F6', description: 'Creating insightful charts and visual representations.', category: 'Data Analytics' },
  { name: 'Tableau', icon: '/icons/48_tableau_software.webp', color: '#E97627', description: 'Interactive dashboards and business intelligence platform.', category: 'Data Analytics' },
  { name: 'EDA', icon: '/icons/jupyter_jupyter_original.svg', color: '#14B8A6', description: 'Exploratory Data Analysis for pattern discovery.', category: 'Data Analytics' },

  // ─── Web Development ───
  { name: 'Flask', icon: '/icons/flask_flask_original.svg', color: '#FFFFFF', description: 'Lightweight Python web framework for building REST APIs.', category: 'Web Development' },
  { name: 'FastAPI', icon: '/icons/fastapi_fastapi_original.svg', color: '#009688', description: 'Modern, fast Python web framework for APIs.', category: 'Web Development' },
  { name: 'React', icon: '/icons/react_react_original.svg', color: '#61DAFB', description: 'Component-based UI library for interactive web apps.', category: 'Web Development' },
  { name: 'Next.js', icon: '/icons/48_nextjs.webp', color: '#FFFFFF', description: 'Full-stack React framework with SSR and static generation.', category: 'Web Development' },
  { name: 'TailwindCSS', icon: '/icons/tailwindcss_tailwindcss_original.svg', color: '#06B6D4', description: 'Utility-first CSS framework for rapid, beautiful UI design.', category: 'Web Development' },
  { name: 'REST APIs', icon: '/icons/json_json_original.svg', color: '#6366F1', description: 'Designing and consuming RESTful web services.', category: 'Web Development' },
  { name: 'CSS3', icon: '/icons/css3_css3_original.svg', color: '#1572B6', description: 'Crafting modern, responsive layouts and stunning visuals.', category: 'Web Development' },

  // ─── Mobile Development ───
  { name: 'Flutter', icon: '/icons/flutter_flutter_original.svg', color: '#02569B', description: 'Cross-platform mobile development with beautiful UIs.', category: 'Mobile Development' },

  // ─── Databases ───
  { name: 'PostgreSQL', icon: '/icons/postgresql_postgresql_original.svg', color: '#4169E1', description: 'Advanced open-source relational database system.', category: 'Databases' },
  { name: 'MongoDB', icon: '/icons/mongodb_mongodb_original.svg', color: '#47A248', description: 'NoSQL document database for flexible schemas.', category: 'Databases' },
  { name: 'SQLite', icon: '/icons/sqlite_sqlite_original.svg', color: '#003B57', description: 'Lightweight embedded relational database engine.', category: 'Databases' },
  { name: 'ChromaDB', icon: '/icons/redis_redis_original.svg', color: '#FFD700', description: 'Vector database for AI embedding storage and retrieval.', category: 'Databases' },
  { name: 'Firebase', icon: '/icons/firebase_firebase_original.svg', color: '#FFCA28', description: 'Cloud platform for hosting, auth, and real-time databases.', category: 'Databases' },

  // ─── Tools ───
  { name: 'Git', icon: '/icons/git_git_original.svg', color: '#F05032', description: 'Version control for tracking changes and collaboration.', category: 'Tools' },
  { name: 'GitHub', icon: '/icons/github_github_original.svg', color: '#FFFFFF', description: 'Platform for hosting repos and open-source collaboration.', category: 'Tools' },
  { name: 'Docker', icon: '/icons/docker_docker_original.svg', color: '#2496ED', description: 'Containerization for consistent dev and deployment.', category: 'Tools' },
  { name: 'Linux', icon: '/icons/linux_linux_original.svg', color: '#FCC624', description: 'Open-source OS for development and server management.', category: 'Tools' },
  { name: 'VS Code', icon: '/icons/vscode_vscode_original.svg', color: '#007ACC', description: 'Feature-rich code editor with extensive plugin ecosystem.', category: 'Tools' },
  { name: 'Postman', icon: '/icons/postman_postman_original.svg', color: '#FF6C37', description: 'API testing and development platform.', category: 'Tools' },
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
    title: 'AI-Powered Boredom Breaker System',
    category: 'AI & Automation',
    image: 'project-boredom',
    tags: ['Flutter (Dart)', 'FastAPI', 'SQLite', 'ChromaDB'],
    description: 'An intelligent system that detects emotions and generates personalized activities to break boredom and improve mood.',
    liveLink: '#',
    githubLink: 'https://github.com/Joelrtharakan/AI-Powered-Boredom-Breaker-System-Using-Emotion-Detection-and-Personalized-Activity-Generation',
  },
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
