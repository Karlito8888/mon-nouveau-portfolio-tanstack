/**
 * Navigation button list for the circular menu
 * Each button can be an internal route or external link
 */
export interface NavItem {
  label: string;
  link: string;
  icon:
    | "home"
    | "about"
    | "projects"
    | "contact"
    | "github"
    | "linkedin"
    | "twitter"
    | "resume";
  newTab: boolean;
}

export const navItems: NavItem[] = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Karlito8888",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/charles-bourgault-407694300/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume",
    icon: "resume",
    newTab: false,
  },
];

/**
 * Projects data for the projects page
 */
export interface Project {
  id: number;
  name: string;
  description: string;
  date: string;
  demoLink: string;
  image: string;
}

/**
 * Resume/Parcours data for the timeline
 */
export interface ResumeItem {
  id: number;
  title: string;
  organization: string;
  location?: string;
  period: string;
  type: "education" | "work";
  description?: string;
  skills?: string[];
}

export const resumeData: ResumeItem[] = [
  {
    id: 1,
    title: "Freelance Web & Mobile Developer",
    organization: "Self-Employed",
    location: "France & Philippines",
    period: "2024 - Present",
    type: "work",
    description: "Building modern web and mobile applications",
    skills: [
      "Freelance development for web and mobile apps",
      "AI integration and prompt engineering",
      "Continuous learning on cutting-edge technologies",
      "React, React Native, TypeScript, Node.js ecosystem",
    ],
  },
  {
    id: 2,
    title: "Web Integrator Training",
    organization: "OpenClassRooms",
    location: "Paris (Remote)",
    period: "2024",
    type: "education",
    description:
      "Professional Certificate in IT Development\n(Associate Degree)",
    skills: [
      "Front-end application development (React / Redux)",
      "Site development planning, Debugging, Unit testing",
      "API integration, Responsive Design",
      "Professional project implementation",
    ],
  },
  {
    id: 3,
    title: "Python Training",
    organization: "Docstring",
    location: "Online course, non-certified",
    period: "2024",
    type: "education",
    skills: [
      "Database management with Django / Flask / PostgreSQL",
      "Stripe payment integration",
      "Deployment on Nginx / Gunicorn server",
      "Web scraping and task automation",
    ],
  },
  {
    id: 4,
    title: "Initial Web Development Training",
    organization: "fromscratch.podia.com & apprendre-a-coder.com",
    period: "2023",
    type: "education",
    skills: [
      "Self-taught learning",
      "Strong foundations in HTML, CSS, JavaScript, jQuery and PHP",
      "Modern front-end focused training with SASS and React",
      "MERN stack basics, Git and GitHub, etc...",
    ],
  },
  {
    id: 5,
    title: "Head Bartender",
    organization: "La KAV",
    location: "Saint-Sébastien-sur-Loire, France",
    period: "2021 - 2022",
    type: "work",
  },
  {
    id: 6,
    title: "Co-Manager\n& Truck Driver",
    organization: "3BS / TransAlliance / Sopitra",
    location: "Brittany and Loire Valley, France",
    period: "2004 - 2021",
    type: "work",
  },
  {
    id: 7,
    title: "Kitchen Assistant",
    organization: "Hôtel de France",
    location: "Nantes, France",
    period: "2003 - 2004",
    type: "work",
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    name: "MyGGV APP",
    description:
      "Community app for Garden Grove Village with chat, forums, marketplace, and local services",
    date: "2026-01",
    demoLink: "https://myggv.com/",
    image: "/projects/myggv-app.png",
  },
  {
    id: 2,
    name: "MyGGV-GPS",
    description:
      "Smart GPS navigation app for Garden Grove Village with MapLibre GL and real-time routing",
    date: "2025-11",
    demoLink: "https://myggv-gps.netlify.app/",
    image: "/projects/myggv-gps.png",
  },
  {
    id: 3,
    name: "Abaddon",
    description:
      "Professional pest control services website for FDA-licensed company in Philippines",
    date: "2024-10",
    demoLink: "https://abaddonpestcontrol.netlify.app/",
    image: "/projects/abaddon.png",
  },
  {
    id: 4,
    name: "Creative Vision",
    description:
      "Minimalist event management app with MERN stack following KISS philosophy",
    date: "2024-09",
    demoLink: "https://creative-vision-project.netlify.app/",
    image: "/projects/creative-vision.png",
  },
  {
    id: 5,
    name: "Kasa",
    description:
      "Modern apartment rental app with React, dynamic photo gallery and responsive design",
    date: "2024-08",
    demoLink: "https://charles-bourgault-ocr-kasa.netlify.app/",
    image: "/projects/kasa.png",
  },
  {
    id: 6,
    name: "OhMyFood",
    description:
      "Online meal ordering app with CSS-only animations and mobile-first approach",
    date: "2024-07",
    demoLink: "https://karlito8888.github.io/OCR-OhMyFood/",
    image: "/projects/ohmyfood.png",
  },
  {
    id: 7,
    name: "Booki",
    description:
      "Travel agency homepage with responsive design for mobile, tablet and desktop",
    date: "2024-07",
    demoLink: "https://karlito8888.github.io/OCR-BOOKI/",
    image: "/projects/booki.png",
  },
  {
    id: 8,
    name: "Le Resto",
    description:
      "Restaurant website with elegant styling using HTML, CSS and SCSS",
    date: "2024-05",
    demoLink:
      "https://karlito8888.github.io/chabouchabou.github.io/assets/projects/le-resto/index.html",
    image: "/projects/le-resto.png",
  },
  {
    id: 9,
    name: "Gaming Campus",
    description: "Gaming school landing page with modern CSS/SCSS design",
    date: "2024-05",
    demoLink:
      "https://karlito8888.github.io/chabouchabou.github.io/assets/projects/gaming-campus/index.html",
    image: "/projects/gaming-campus.png",
  },
  {
    id: 10,
    name: "Watch Tower",
    description:
      "Cryptocurrency market monitoring dashboard with CoinGecko API integration",
    date: "2024-03",
    demoLink: "https://karlito8888.github.io/watch-tower/",
    image: "/projects/watch-tower.png",
  },
];
