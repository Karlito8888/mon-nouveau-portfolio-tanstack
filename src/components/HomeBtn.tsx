import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

const MotionLink = motion.create(Link)

/**
 * HomeBtn component - floating home button for sub-pages
 * Appears with scale animation and provides navigation back to home
 */
export function HomeBtn() {
  return (
    <MotionLink
      to="/"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="home-btn glass"
      aria-label="Go to home page"
    >
      <span className="home-btn-inner">
        <Home className="home-btn-icon" strokeWidth={1.5} aria-hidden="true" />
        <span className="home-btn-overlay" />
        <span className="home-btn-tooltip">Home</span>
      </span>
      <span className="sr-only">Go to Home Page</span>
    </MotionLink>
  )
}
