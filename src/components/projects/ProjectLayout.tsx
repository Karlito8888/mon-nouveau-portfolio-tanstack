import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
}

interface ProjectLayoutProps {
  name: string
  description: string
  date: string
  demoLink: string
}

/**
 * ProjectLayout component - individual project card
 * Features stagger animation via parent container
 */
export function ProjectLayout({ name, description, date, demoLink }: ProjectLayoutProps) {
  return (
    <motion.a
      variants={item}
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card glass"
    >
      <div className="project-card-info">
        <h2 className="project-name">{name}</h2>
        <p className="project-description">{description}</p>
      </div>
      <div className="project-card-divider" />
      <p className="project-date">{new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
    </motion.a>
  )
}
