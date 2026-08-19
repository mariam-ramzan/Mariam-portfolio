import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'
import Section, { Reveal } from './ui/Section'
import SectionHeading from './ui/SectionHeading'

const pending = (v) => String(v).startsWith('TODO')

export default function Education() {
  return (
    <Section id="education" label="Education">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <ol className="relative space-y-8 border-l border-line pl-8">
        {education.map((item, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <li className="relative">
              <span className="absolute -left-[2.3rem] top-1.5 grid size-6 place-items-center rounded-full border border-line bg-bg text-brand">
                <GraduationCap size={12} />
              </span>

              <div className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className={`text-base font-semibold ${pending(item.degree) ? 'text-muted/60 italic' : ''}`}>
                    {item.degree}
                  </h3>
                  <span className={`font-mono text-[11px] ${pending(item.period) ? 'text-muted/60 italic' : 'text-muted'}`}>
                    {item.period}
                  </span>
                </div>

                <p className="mt-1 text-sm">
                  <span className={pending(item.institution) ? 'text-muted/60 italic' : 'text-brand'}>
                    {item.institution}
                  </span>
                  {item.location && (
                    <span className={pending(item.location) ? 'text-muted/60 italic' : 'text-muted'}>
                      {' · '}
                      {item.location}
                    </span>
                  )}
                </p>

                {item.status && (
                  <span className="mt-3 inline-block rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10.5px] text-muted">
                    {item.status}
                  </span>
                )}

                {item.coursework?.length > 0 && (
                  <div className="mt-5 border-t border-line pt-5">
                    <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                      Relevant coursework
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {item.coursework.map((c, j) => (
                        <li
                          key={j}
                          className={`rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10.5px] ${
                            pending(c) ? 'text-muted/60 italic' : 'text-muted'
                          }`}
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.achievements?.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((a, j) => (
                      <li key={j} className="flex gap-2.5 text-[14px] text-muted">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-brand/70" />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
