export type Role = {
  id: string;
  title: string;
  description: {
    lead: string;
    rest: string;
  };
  company: string;
  highlights?: string[];
};

export const roles: Role[] = [
  {
    id: 'dsm',
    title: 'Frontend Developer',
    description: {
      lead: 'Digital Seat Media builds fan engagement',
      rest: ' and in-venue digital experiences for live sports events. I built and maintained customer-facing React/Next.js applications serving NFL, NBA, and NHL campaigns.',
    },
    company: 'Digital Seat Media',
    highlights: [
      'Built and maintained React/Next.js web applications serving 100,000+ active users across NFL, NBA, and NHL campaigns under peak event-night load.',
      'Architected custom hooks and reusable component libraries that standardized state management patterns and reduced feature delivery time across the team.',
      'Developed a responsive admin dashboard in Next.js with role-based views, dynamic routing, and strict WCAG accessibility compliance.',
      'Translated Figma prototypes into pixel-perfect production code, bridging design and engineering across tight Agile sprint cycles.',
    ],
  },
  {
    id: 'exs',
    title: 'Software Support Specialist',
    description: {
      lead: 'ExamSoft supports institutions',
      rest: ' running high stakes exams, and I worked in software support to diagnose issues, document fixes, and escalate bugs.',
    },
    company: 'ExamSoft',
    highlights: [
      'Tracked recurring issues and shared patterns with the team to improve documentation and reduce repeat tickets.',
      'Investigated and resolved support tickets by reproducing issues, collecting logs, and identifying root causes.',
      'Guided users through troubleshooting steps and workarounds with clear communication and calm problem solving.',
    ],
  },
];
