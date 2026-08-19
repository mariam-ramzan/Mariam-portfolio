import { ExternalLink, GitBranch } from 'lucide-react'
import { GithubIcon as Github } from './ui/BrandIcons'
import { activity } from '../data/activity'
import { site } from '../data/site'
import Section, { Reveal } from './ui/Section'
import SectionHeading from './ui/SectionHeading'

const barColor = ['bg-brand', 'bg-aqua', 'bg-iris', 'bg-muted/50']
const pending = (v) => !v || String(v).startsWith('TODO')

export default function Activity() {
  return (
    <Section id="activity" label="Technical activity">
      <SectionHeading
        eyebrow="Activity"
        title="What I'm building"
        description="A snapshot of where my code time goes. These figures are maintained by hand rather than pulled live from GitHub — the repository links below are the source of truth."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.1fr]">
        {/* Highlights + languages */}
        <Reveal>
          <div className="card h-full p-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Github size={16} className="text-brand" />
                Snapshot
              </span>
              <span className={`font-mono text-[10.5px] ${pending(activity.lastUpdated) ? 'text-muted/60 italic' : 'text-muted'}`}>
                Updated {activity.lastUpdated}
              </span>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4">
              {activity.highlights.map((h) => (
                <div key={h.label} className="rounded-lg border border-line bg-surface p-3.5">
                  <dt className="font-mono text-[9.5px] tracking-wide text-muted uppercase">
                    {h.label}
                  </dt>
                  <dd className={`mt-1.5 text-sm font-semibold ${pending(h.value) ? 'text-muted/60 italic' : ''}`}>
                    {pending(h.value) ? 'not set' : h.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 border-t border-line pt-6">
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                Language mix
              </p>
              <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-surface">
                {activity.languages.map((l, i) => (
                  <div
                    key={l.name}
                    className={barColor[i % barColor.length]}
                    style={{ width: `${l.share}%` }}
                    title={`${l.name} ${l.share}%`}
                  />
                ))}
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {activity.languages.map((l, i) => (
                  <li key={l.name} className="flex items-center gap-2 text-xs text-muted">
                    <span className={`size-2 rounded-full ${barColor[i % barColor.length]}`} />
                    {l.name}
                    <span className="font-mono opacity-70">{l.share}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Recent repos */}
        <Reveal delay={0.08}>
          <div className="card flex h-full flex-col p-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              <GitBranch size={16} className="text-brand" />
              Recent repositories
            </span>

            <ul className="mt-5 flex-1 divide-y divide-line">
              {activity.recent.map((r, i) => (
                <li key={i} className="flex items-start justify-between gap-4 py-4 first:pt-0">
                  <div className="min-w-0">
                    <p className={`font-mono text-sm ${pending(r.name) ? 'text-muted/60 italic' : ''}`}>
                      {r.name}
                    </p>
                    <p className={`mt-1 text-[13px] text-muted ${pending(r.description) ? 'italic opacity-60' : ''}`}>
                      {r.description}
                    </p>
                  </div>
                  {r.url && (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open ${r.name}`}
                      className="mt-0.5 shrink-0 text-muted hover:text-brand"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 self-start rounded-lg border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-brand/40"
            >
              <Github size={15} />
              View GitHub profile
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
