import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '../data/stats'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ value, suffix, label, inView, delay }) {
  const count = useCountUp(value, { start: inView, duration: 1500 + delay })
  return (
    <div className="px-4 py-6 text-center sm:py-7">
      <p className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
        {count}
        <span className="text-brand">{suffix}</span>
      </p>
      <p className="mt-2 text-xs text-muted sm:text-sm">{label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div className="grid grid-cols-2 divide-x divide-y divide-line rounded-2xl border border-line bg-surface/60 backdrop-blur-sm sm:grid-cols-4 sm:divide-y-0">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} inView={inView} delay={i * 120} />
        ))}
      </div>
    </div>
  )
}
