import { motion } from "framer-motion";
import { ProjectLayout } from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

interface Project {
  name: string;
  description: string;
  date: string;
  demoLink: string;
  image: string;
}

interface ProjectListProps {
  projects: Project[];
}

/**
 * ProjectList component - staggered container for project cards
 * Features delayed stagger animation for child ProjectLayout components
 */
export function ProjectList({ projects }: ProjectListProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="project-list"
    >
      {projects.map((project, index) => (
        <ProjectLayout key={index} {...project} />
      ))}
    </motion.div>
  );
}
