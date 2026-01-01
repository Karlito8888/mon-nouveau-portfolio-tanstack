import { motion } from 'framer-motion'
import { navItems } from '../../data'
import { useScreenSize } from '../../hooks/useScreenSize'
import { NavButton } from './NavButton'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

export function Navigation() {
  const size = useScreenSize()
  const angleIncrement = 360 / navItems.length

  // Responsive radius calculation
  const isLarge = size >= 1024
  const isMedium = size >= 768
  const isSmall = size >= 480

  // Calculate responsive radius - always circular, smaller on mobile
  const radius = isLarge
    ? 'calc(20vw - 1rem)'
    : isMedium
      ? 'calc(30vw - 1rem)'
      : isSmall
        ? 'calc(40vw - 1rem)'
        : 'calc(38vw - 0.5rem)' // Extra small screens

  return (
    <nav className="navigation-container" aria-label="Main navigation">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="navigation-circle"
      >
        {navItems.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180
          const x = `calc(${radius} * ${Math.cos(angleRad)})`
          const y = `calc(${radius} * ${Math.sin(angleRad)})`

          return <NavButton key={btn.label} x={x} y={y} {...btn} />
        })}
      </motion.div>
    </nav>
  )
}
