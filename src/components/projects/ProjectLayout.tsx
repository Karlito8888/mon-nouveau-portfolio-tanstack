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
  image: string
}

/**
 * ProjectLayout component - individual project card
 * Features stagger animation via parent container
 */
export function ProjectLayout({ name, description, date, demoLink, image }: ProjectLayoutProps) {
  return (
    <motion.a
      variants={item}
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card glass"
    >
      <div className="project-card-top">
        <div className="project-card-header">
          <img src={image} alt={name} className="project-logo" loading="lazy" />
          <h2 className="project-name">{name}</h2>
        </div>
        <div className="project-card-divider" />
        <p className="project-date">{new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
      </div>
      <p className="project-description">{description}</p>
    </motion.a>
  )
}
