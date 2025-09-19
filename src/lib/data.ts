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
