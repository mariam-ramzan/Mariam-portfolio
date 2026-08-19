import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { processSteps } from '../data/process'
import Section, { Reveal } from './ui/Section'
import SectionHeading from './ui/SectionHeading'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.55'],
  })
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '100%']), {
    stiffness: 90,
    damping: 26,
  })

  return (
    <Section id="process" label="Process">
      <SectionHeading
        eyebrow="Method"
        title="How I approach a data problem"
        description="The order matters more than the tools. Skipping a step earlier in this list is what makes results fall apart later."
      />

      <div ref={ref} className="relative">
        {/* Track */}
        <div className="absolute top-2 left-[15px] hidden h-full w-px bg-line sm:block" />
        <motion.div
          style={{ height }}
          className="absolute top-2 left-[15px] hidden w-px bg-gradient-to-b from-brand via-aqua to-iris sm:block"
        />

        <ol className="space-y-4 sm:space-y-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.04} y={14}>
              <li className="group relative sm:pl-14">
                <span className="absolute top-1 left-0 hidden size-8 place-items-center rounded-full border border-line bg-bg font-mono text-[11px] font-semibold text-muted transition-colors group-hover:border-brand/50 group-hover:text-brand sm:grid">
                  {s.step}
                </span>

                <div className="card p-5 transition-colors duration-300 group-hover:border-brand/30 sm:p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] font-semibold text-brand sm:hidden">
                      {s.step}
                    </span>
                    <h3 className="text-[15px] font-semibold sm:text-base">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted text-pretty">
                    {s.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}
