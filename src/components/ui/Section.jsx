import { motion } from 'framer-motion'

/** Har section ka standard wrapper — consistent spacing aur width. */
export default function Section({ id, children, className = '', label }) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28 ${className}`}
    >
      {children}
    </section>
  )
}

/** Scroll par ek dafa reveal hone wala wrapper. */
export function Reveal({ children, delay = 0, y = 20, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
