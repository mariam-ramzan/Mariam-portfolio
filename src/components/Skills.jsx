import { BarChart3, BrainCircuit, Circle, Code2, Sparkles, Table2, Wrench } from 'lucide-react'

import { levelMeta, skillGroups } from '../data/skills'
import Section, { Reveal } from './ui/Section'
import SectionHeading from './ui/SectionHeading'

// data/skills.js ki `icon` string yahan map hoti hai.
// Naya icon chahiye to upar import karein aur yahan add kar dein.
const iconMap = { Code2, Table2, BrainCircuit, BarChart3, Sparkles, Wrench }

const levelStyle = {
  core: 'border-brand/40 bg-brand/10 text-brand',
  working: 'border-aqua/35 bg-aqua/10 text-aqua',
  learning: 'border-line bg-surface text-muted',
}

export default function Skills() {
  return (
    <Section id="skills" label="Skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Technologies I work with"
        description="Grouped by what they're for, and labelled honestly by how deeply I use them — no percentage bars, because they don't mean anything in an interview."
      />

      {/* Legend */}
      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2.5">
          {Object.entries(levelMeta).map(([key, meta]) => (
            <span
              key={key}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10.5px] ${levelStyle[key]}`}
            >
              {meta.label}
              <span className="opacity-70">— {meta.hint}</span>
            </span>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Circle
          return (
            <Reveal key={group.id} delay={i * 0.06}>
              <article className="card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface text-brand transition-colors group-hover:border-brand/40">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>

                <p className="mt-3 text-[13px] leading-relaxed text-muted">{group.blurb}</p>

                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{item.name}</p>
                        <p className="truncate text-xs text-muted">{item.note}</p>
                      </div>
                      <span
                        className={`mt-0.5 shrink-0 rounded border px-1.5 py-0.5 font-mono text-[9.5px] tracking-wide uppercase ${levelStyle[item.level]}`}
                        title={levelMeta[item.level].hint}
                      >
                        {levelMeta[item.level].label}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
