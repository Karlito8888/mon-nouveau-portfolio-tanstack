/**
 * Navigation button list for the circular menu
 * Each button can be an internal route or external link
 */
export interface NavItem {
  label: string
  link: string
  icon: 'home' | 'about' | 'projects' | 'contact' | 'github' | 'linkedin' | 'twitter' | 'resume'
  newTab: boolean
}

export const navItems: NavItem[] = [
  { label: 'About', link: '/about', icon: 'about', newTab: false },
  { label: 'Projects', link: '/projects', icon: 'projects', newTab: false },
  { label: 'Contact', link: '/contact', icon: 'contact', newTab: false },
  {
    label: 'Github',
    link: 'https://github.com/Karlito8888',
    icon: 'github',
    newTab: true,
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/charles-bourgault-407694300/',
    icon: 'linkedin',
    newTab: true,
  },
  {
    label: 'Resume',
    link: '/resume.pdf',
    icon: 'resume',
    newTab: true,
  },
]

/**
 * Projects data for the projects page
 */
export interface Project {
  id: number
  name: string
  description: string
  date: string
  demoLink: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'EcoTracker',
    description: 'Track your carbon footprint',
    date: '2022-08-15',
    demoLink: 'https://ecotracker.example.com',
  },
  {
    id: 2,
    name: 'ArtGallery Online',
    description: 'Digital art showcase platform',
    date: '2022-06-20',
    demoLink: 'https://artgalleryonline.example.com',
  },
  {
    id: 3,
    name: 'BudgetPlanner',
    description: 'Plan and track expenses',
    date: '2022-09-10',
    demoLink: 'https://budgetplanner.example.com',
  },
  {
    id: 4,
    name: 'HealthBeat',
    description: 'Monitor heart rate zones',
    date: '2022-05-30',
    demoLink: 'https://healthbeat.example.com',
  },
  {
    id: 5,
    name: 'RecipeFinder',
    description: 'Discover new recipes',
    date: '2022-07-12',
    demoLink: 'https://recipefinder.example.com',
  },
  {
    id: 6,
    name: 'JourneyLogger',
    description: 'Log your travels',
    date: '2022-10-01',
    demoLink: 'https://journeylogger.example.com',
  },
]
