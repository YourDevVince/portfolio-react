export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  image?: string;
  stack: string[];
  highlights?: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: 'tutoring',
    title: 'Tutoring Management Center',
    tagline:
      'Full-stack dashboard for session tracking, credit management, and role-based student workflows — shipped in a 6-week team sprint.',
    image: '/images/TMC.png',
    stack: [
      'Next.js',
      'TypeScript',
      'Java Spring Boot',
      'Supabase',
      'Tailwind',
    ],
    highlights: [
      'Delivered a production-ready dashboard within a 6-week sprint on a team of 6, covering session tracking, credit management, and performance summaries.',
      'Integrated a Next.js frontend with a Java Spring Boot backend and Supabase — demonstrating cross-stack API integration across three distinct technology layers.',
      'Implemented role-based views and dynamic routing for admin, tutor, and parent personas so each user sees only what they need.',
    ],
    links: [],
  },
  {
    id: 'uhd',
    title: 'UHD ACM RAG Chatbot (Team Project, In Progress)',
    tagline:
      'Team-built RAG chatbot using LangChain, ChromaDB, and Gemini for the UHD ACM website.',
    image: '/images/ACM.png',
    stack: ['TypeScript', 'LangChain', 'Node', 'ChromaDB', 'Gemini API'],
    highlights: [
      'Shipped a working RAG chatbot within a 4-week team sprint, covering document ingestion, chunking, embeddings, and semantic retrieval end-to-end.',
      'Engineered fault-tolerant API key rotation for Gemini — when token limits are hit, the system recovers automatically instead of failing the user.',
      'Contributed across the full stack: response generation, unit testing, backend API design, and cross-team code reviews.',
    ],
    links: [],
  },
  {
    id: 'wtwr',
    title: 'WTWR (What to Wear)',
    tagline:
      'Full-stack app that recommends clothing based on live weather data, with JWT auth and a personal wardrobe.',
    image: '/images/WTWR.png',
    stack: ['React', 'Node', 'Express', 'MongoDB', 'Google Cloud'],
    highlights: [
      'Secured the app end-to-end with JWT auth — unauthenticated requests are blocked at the route level and sessions persist across page loads.',
      'Built a full REST API for wardrobe items and user profiles with consistent CRUD operations and structured response shapes across all endpoints.',
      'Centralized error handling so every endpoint returns predictable, structured errors — eliminated ambiguous failures that previously required client-side guessing.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/YourDevVince/se_project_react/',
      },
    ],
  },
  {
    id: 'todo',
    title: 'The Simple ToDo App',
    tagline:
      'Vanilla JS todo app with client-side validation, duplicate prevention, and localStorage persistence.',
    image: '/images/TODO.png',
    stack: ['JavaScript', 'OOP', 'UUID', 'CSS3', 'HTML5'],
    highlights: [
      'Delivered a complete CRUD task flow — add, complete, and delete — with a clean component structure that separates concerns from the start.',
      'Validation blocks empty submissions and duplicate entries before they reach state — zero invalid tasks can be added.',
      'Persisted tasks with localStorage so the list survives refresh without a backend dependency.',
    ],
    links: [
      {
        label: 'Live',
        href: 'https://yourdevvince.github.io/se_project_todo-app/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/YourDevVince/se_project_todo-app',
      },
    ],
  },
  {
    id: 'anime',
    title: 'The Anime quote generator',
    tagline:
      'React app that fetches and displays random anime quotes from a public API, with async error handling.',
    image: '/images/AQG.png',
    stack: ['React', 'Tailwind', 'REST API', 'Vite'],
    highlights: [
      'Integrated a public REST API with full async error handling — loading and error states prevent blank or broken UI under any network condition.',
      'Mobile-first responsive layout built with Tailwind — adapts cleanly from 320px up without media query hacks.',
    ],
    links: [
      {
        label: 'Live',
        href: 'https://yourdevvince.github.io/anime-quote-gen/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/YourDevVince/anime-quote-gen',
      },
    ],
  },
];
