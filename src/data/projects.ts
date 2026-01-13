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
    stack: ["React", "TypeScript", "Node", "Express", "MongoDB"],
    highlights: [
      "Built JWT auth + protected routes",
      "Implemented CRUD for clothing items",
      "Deployed full-stack app",
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
    stack: ["React", "TypeScript", "Node", "Express", "MongoDB"],
    highlights: [
      "Built JWT auth + protected routes",
      "Implemented CRUD for clothing items",
      "Deployed full-stack app",
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
    stack: ["React", "TypeScript", "Node", "Express", "MongoDB"],
    highlights: [
      "Built JWT auth + protected routes",
      "Implemented CRUD for clothing items",
      "Deployed full-stack app",
    ],
    links: [
      { label: "Live", href: "https://yourdevvince.github.io/anime-quote-gen/" },
      { label: "GitHub", href: "https://github.com/YourDevVince/anime-quote-gen" },
      // { label: "Case Study", href: "#", }, // later
    ],
    // caseStudySlug: "wtwr"
  },
];