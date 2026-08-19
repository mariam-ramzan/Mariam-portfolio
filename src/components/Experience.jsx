import { Briefcase, Clock } from 'lucide-react'
import { experience } from '../data/experience'
import Section, { Reveal } from './ui/Section'
import SectionHeading from './ui/SectionHeading'

export default function Experience() {
  const hasEntries = experience.length > 0

  return (
    <Section id="experience" label="Experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've applied this"
        description="Internships, freelance work, and applied research."
      />

      {!hasEntries ? (
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-line px-6 py-16 text-center">
            <span className="grid size-11 place-items-center rounded-xl border border-line bg-surface text-brand">
              <Clock size={19} />
            </span>
            <p className="text-base font-medium">Experience details coming soon</p>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              I&rsquo;m currently building experience through independent projects — those are
              in the projects section above, with full write-ups of the approach and results.
            </p>
            <a
              href="#projects"
              className="mt-1 text-sm font-medium text-brand hover:underline"
            >
              See the project work
            </a>
          </div>
        </Reveal>
      ) : (
        <ol className="relative space-y-8 border-l border-line pl-8">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.08}>
              <li className="relative">
                <span className="absolute -left-[2.3rem] top-1.5 grid size-6 place-items-center rounded-full border border-line bg-bg text-brand">
                  <Briefcase size={12} />
                </span>

                <div className="card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold">{job.role}</h3>
                    <span className="font-mono text-[11px] text-muted">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-brand">
                    {job.company}
                    {job.location && <span className="text-muted"> · {job.location}</span>}
                    {job.type && <span className="text-muted"> · {job.type}</span>}
                  </p>

                  {job.description && (
                    <p className="mt-4 text-[14px] leading-relaxed text-muted">
                      {job.description}
                    </p>
                  )}

                  {job.responsibilities?.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {job.responsibilities.map((r, j) => (
                        <li key={j} className="flex gap-2.5 text-[14px] text-muted">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-brand/70" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.tech?.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
                      {job.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10.5px] text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      )}
    </Section>
  )
}
