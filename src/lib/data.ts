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
      icon: Layers,
      title: 'Full-Stack Developer',
      text: 'Building end-to-end solutions with modern technologies.',
    },
    {
      icon: Bot,
      title: 'AI Enthusiast',
      text: 'Integrating intelligent features into real-world applications.',
    },
    {
      icon: Puzzle,
      title: 'Problem Solver',
      text: 'Transforming complex challenges into elegant solutions.',
    },
    {
      icon: BookOpen,
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
  // Languages
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', description: 'Core language for AI/ML, data science, and backend development.', category: 'Languages' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', description: 'Building interactive web applications and dynamic frontends.', category: 'Languages' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26', description: 'Structuring semantic, accessible web content.', category: 'Languages' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6', description: 'Crafting modern, responsive layouts and stunning visuals.', category: 'Languages' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg', color: '#CC2927', description: 'Querying and managing relational databases efficiently.', category: 'Languages' },
  // Frameworks
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', color: '#FFFFFF', description: 'Lightweight Python web framework for building REST APIs.', category: 'Frameworks' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', description: 'Component-based UI library for interactive web apps.', category: 'Frameworks' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#FFFFFF', description: 'Full-stack React framework with SSR and static generation.', category: 'Frameworks' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4', description: 'Utility-first CSS framework for rapid, beautiful UI design.', category: 'Frameworks' },
  // Databases
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1', description: 'Advanced open-source relational database system.', category: 'Databases' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg', color: '#FFCA28', description: 'Cloud platform for hosting, auth, and real-time databases.', category: 'Databases' },
  // AI & Data Science
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458', description: 'Data manipulation and analysis library for Python.', category: 'AI & Data Science' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: '#013243', description: 'Numerical computing and array operations in Python.', category: 'AI & Data Science' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', description: 'End-to-end platform for machine learning and deep learning.', category: 'AI & Data Science' },
  // Tools
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', description: 'Version control for tracking changes and collaboration.', category: 'Tools' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#FFFFFF', description: 'Platform for hosting repos and open-source collaboration.', category: 'Tools' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC', description: 'Feature-rich code editor with extensive plugin ecosystem.', category: 'Tools' },
];

// Keep backward compat for anything else that imports the old shape
export const skillsData = {
  languages: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  frameworks: ['Flask', 'React', 'TailwindCSS'],
  databases: ['PostgreSQL'],
  ai: ['Machine Learning', 'Deep Learning', 'NLP', 'Data Analysis', 'Data Visualization', 'Pandas', 'NumPy', 'Ollama (llama3.2)', 'NLU Chatbot'],
  tools: ['Git & GitHub', 'Jira API', 'WeasyPrint', 'Joblib', 'Chart.js', 'Gmail API', 'OAuth2', 'VS Code', 'Cloudinary'],
};

export const projectsData = [
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
  {
    title: 'Web-Based Support Ticket System',
    category: 'Full-Stack',
    image: 'project-support-web',
    tags: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'File Uploads'],
    description: 'A foundational web application for managing support tickets, featuring user authentication, ticket tracking, and file uploads.',
    liveLink: '#',
    githubLink: 'https://github.com/Joelrtharakan/Support-Ticket-Webpage.git',
  },
];

export const experienceData = [
  {
    date: 'Summer 2025',
    title: 'AI Development & Software Integration Intern',
    company: 'LQMS Software Solutions LLC, Dubai (Onsite)',
    description: 'Developed an AI-powered support ticketing system, integrated with Jira, and built a chatbot using Ollama’s LLaMA 3.2.',
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
