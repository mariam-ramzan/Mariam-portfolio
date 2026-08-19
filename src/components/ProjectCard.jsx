import { useState } from 'react'
import { GithubIcon as Github } from './ui/BrandIcons'
import { motion } from 'framer-motion'
import { ArrowUpRight, ImageIcon, ExternalLink } from 'lucide-react'

/** Image na mile to graceful fallback — broken icon kabhi nahi dikhega. */
function Thumb({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div className="grid aspect-16/10 w-full place-items-center bg-gradient-to-br from-surface via-elevated to-surface">
        <div className="flex flex-col items-center gap-2 text-muted">
          <ImageIcon size={22} />
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase">
            Add project image
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-16/10 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
    />
  )
}

export default function ProjectCard({ project, onOpen }) {
  const allPending = project.metrics.every((m) => String(m.value).startsWith('TODO'))

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="card group flex flex-col overflow-hidden transition-colors duration-300 hover:border-brand/40"
    >
      <div className="relative overflow-hidden border-b border-line">
        <Thumb src={project.image} alt={`${project.title} preview`} />
        <span className="absolute top-3 left-3 rounded-full border border-line bg-bg/85 px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg leading-snug font-semibold text-balance">{project.title}</h3>
        <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted text-pretty">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10.5px] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        {allPending ? (
          <p className="mt-5 border-t border-line pt-5 font-mono text-[10.5px] text-muted">
            Results pending publication
          </p>
        ) : (
          <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-5">
            {project.metrics.map((m) => {
              const pending = String(m.value).startsWith('TODO')
              return (
                <div key={m.label}>
                  <dt className="font-mono text-[9.5px] tracking-wide text-muted uppercase">
                    {m.label}
                  </dt>
                  <dd
                    className={`mt-1 text-sm font-semibold ${pending ? 'text-muted/60 italic' : 'text-fg'}`}
                  >
                    {pending ? '—' : m.value}
                  </dd>
                </div>
              )
            })}
          </dl>
        )}

        <div className="mt-6 flex items-center gap-2 pt-1">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand/10 px-3.5 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Case study
            <ArrowUpRight size={15} />
          </button>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitHub`}
              className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand/40 hover:text-fg"
            >
              <Github size={16} />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} live demo`}
              className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand/40 hover:text-fg"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
