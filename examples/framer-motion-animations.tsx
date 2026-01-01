/**
 * Example: Framer Motion Animation Patterns
 *
 * This file demonstrates animation patterns from the source project.
 *
 * Source: /home/charles/Bureau/Next.js-Creative-Portfolio-Website-main/src/components/
 */

import { motion, type Variants } from 'framer-motion'

/**
 * Pattern 1: Staggered Container Animation
 * Used for lists where children animate in sequence
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
}

// Usage example:
export function StaggeredList({ items }: { items: string[] }) {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {items.map((item, i) => (
        <motion.li key={i} variants={staggerItem}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}

/**
 * Pattern 2: Scale In Animation
 * Used for elements that scale from 0 to 1
 */
export const scaleIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  },
}

/**
 * Pattern 3: Viewport-Triggered Animation
 * Elements animate when they enter the viewport
 */
export function ViewportAnimated({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Pattern 4: Delayed Entrance
 * Used for elements that should appear after a delay (like HomeBtn)
 */
export function DelayedEntrance({
  children,
  delay = 1
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Pattern 5: Project Card Animation (from projects list)
 */
export const projectCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
}
