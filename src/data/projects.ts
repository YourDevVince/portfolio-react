export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;        
  description?: string;   
  stack: string[];        
  highlights?: string[];  
  links: ProjectLink[];
  caseStudySlug?: string; 
};

export const projects: Project[] = [
  {
    id: "wtwr",
    title: "WTWR (What to Wear)",
    tagline: "Weather-based outfit recommendations with auth + saved items.",
    stack: ["React", "Node", "Express", "MongoDB", "Google Cloud"],
    highlights: [
      "Built JWT-based authentication with protected routes and token storage",
      "Designed REST API endpoints for clothing items and user profiles (CRUD",
      "Added centralized error handling + validation to improve API reliability",
    ],
    links: [
      { label: "Live", href: "https://wtwrrn.blinklab.com/" },
      { label: "GitHub", href: "https://github.com/YourDevVince/se_project_express" },
      // { label: "Case Study", href: "#", }, // later
    ],
    // caseStudySlug: "wtwr"
  },
  {
    id: "todo",
    title: "The Simple ToDo App",
    tagline: "Weather-based outfit recommendations with auth + saved items.",
    stack: ["JavaScript", "OOP", "UUID", "CSS3", "HTML5"],
    highlights: [
      "Built a responsive CRUD todo flow (add / complete / delete) with clean component structure",
      "Implemented client-side form validation and prevented empty/duplicate tasks",
      "Persisted tasks using localStorage so the list survives refresh",
    ],
    links: [
      { label: "Live", href: "https://yourdevvince.github.io/se_project_todo-app/" },
      { label: "GitHub", href: "https://github.com/YourDevVince/se_project_todo-app" },
      // { label: "Case Study", href: "#", }, // later
    ],
    // caseStudySlug: "wtwr"
  },
  {
    id: "anime",
    title: "The Anime quote generator",
    tagline: "Weather-based outfit recommendations with auth + saved items.",
    stack: ["React", "Tailwind", "REST API", "Vite"],
    highlights: [
      "Consumed a public quotes API and rendered results with proper loading + error handling",
      "Asynchronous Data Fetching - Uses async/await and the native fetch() API to retrieve and display quotes.",
      "Responsive UI - Built with React and styled for modern devices using Tailwind CSS.",
    ],
    links: [
      { label: "Live", href: "https://yourdevvince.github.io/anime-quote-gen/" },
      { label: "GitHub", href: "https://github.com/YourDevVince/anime-quote-gen" },
      // { label: "Case Study", href: "", }, // later
    ],
    // caseStudySlug: "wtwr"
  },
];