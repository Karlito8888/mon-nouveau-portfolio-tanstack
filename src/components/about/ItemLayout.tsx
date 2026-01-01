import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

interface ItemLayoutProps {
  children: ReactNode
  className?: string
}

/**
 * ItemLayout component - glass card with viewport animation
 * Used for stat cards and content sections on the about page
 */
export function ItemLayout({ children, className }: ItemLayoutProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx('item-layout glass', className)}
    >
      {children}
    </motion.div>
  )
}
