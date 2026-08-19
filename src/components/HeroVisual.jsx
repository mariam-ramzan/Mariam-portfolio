import { motion } from 'framer-motion'

/**
 * Hero ka background visual — grid, ambient glow, aur neeche ek
 * full-width "data ribbon" (animated line chart). Jaan-boojh kar
 * subtle rakha gaya hai taake content ke saath compete na kare.
 */
export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-40 -right-32 size-[30rem] rounded-full bg-brand/12 blur-[120px]" />
      <div className="absolute top-1/4 -left-40 size-[24rem] rounded-full bg-iris/10 blur-[120px]" />

      {/* Grid */}
      <div className="grid-bg absolute inset-0 opacity-[0.32] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Data ribbon */}
      <svg
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-32 w-full opacity-60 [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)] sm:h-40"
      >
        <motion.path
          d="M0 130 C 120 118, 190 96, 300 104 S 470 74, 560 62 S 720 84, 830 54 S 1000 30, 1090 20 L 1200 12"
          fill="none"
          stroke="url(#ribbon)"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M0 148 C 140 142, 240 132, 360 136 S 540 118, 660 112 S 860 118, 980 96 S 1120 82, 1200 76"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          className="text-muted/40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        />

        {[[300, 104], [560, 62], [830, 54], [1090, 20]].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            className="fill-aqua"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: 1 }}
            transition={{
              opacity: { duration: 3, delay: 1.4 + i * 0.3, repeat: Infinity },
              scale: { duration: 0.4, delay: 1.4 + i * 0.3 },
            }}
          />
        ))}

        <defs>
          <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
