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
    title: 'Frontend Devloper/UI Designer',
    description: {
      lead: 'Digital Seat Media builds fan engagement',
      rest: ' and in venue digital experiences for sports and live events, and I helped design and ship front end features for those products.',
    },
    company: 'Digital Seat Media',
    highlights: [
      'Built interactive, customer-facing web platforms for live events used by 12K + active users across NFL, NBA, and NHL campaigns.',
      'Designed and shipped a voting web application for the 2024 Prefontaine Classic, deployed for live event use on a stadium jumbotron.',
      'Translated Figma prototypes into production-ready code, ensuring pixel-perfect design implementation and WCAG compliance.',
    ],
  },
  {
    id: 'exs',
    title: 'Software Support Specialist',
    description: {
      lead: 'ExamSoft supports institutions',
      rest: ' running high stakes exams, and I worked in software support to diagnose issues, document fixes, and escalate bugs.',
    },
    company: 'Examsoft',
    highlights: [
      'Tracked recurring issues and shared patterns with the team to improve documentation and reduce repeat tickets.',
      'Investigated and resolved support tickets by reproducing issues, collecting logs, and identifying root causes.',
      'Guided users through troubleshooting steps and workarounds with clear communication and calm problem solving.',
    ],
  },
];
