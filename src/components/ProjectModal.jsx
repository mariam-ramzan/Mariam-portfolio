import { useEffect, useRef } from 'react'
import { GithubIcon as Github } from './ui/BrandIcons'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

function Block({ title, children }) {
  return (
    <section className="border-t border-line pt-6">
      <h4 className="font-mono text-[10.5px] tracking-[0.16em] text-brand uppercase">{title}</h4>
      <div className="mt-3 text-[14px] leading-relaxed text-muted">{children}</div>
    </section>
  )
}

function List({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => {
        const pending = String(item).startsWith('TODO')
        return (
          <li key={i} className="flex gap-2.5">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-brand/70" />
            <span className={pending ? 'text-muted/60 italic' : ''}>{item}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  useLockBodyScroll(Boolean(project))

  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    panelRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.985 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-line bg-bg sm:max-h-[88vh] sm:rounded-2xl"
          >
            {/* Header */}
            <header className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.16em] text-brand uppercase">
                  {project.category}
                </p>
                <h3 id="project-modal-title" className="mt-1.5 text-xl font-bold text-balance">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="grid size-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-fg"
              >
                <X size={18} />
              </button>
            </header>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <p className="text-[15px] leading-relaxed">{project.summary}</p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                {project.metrics.map((m) => {
                  const pending = String(m.value).startsWith('TODO')
                  return (
                    <div key={m.label} className="rounded-lg border border-line bg-surface p-3">
                      <dt className="font-mono text-[9.5px] tracking-wide text-muted uppercase">
                        {m.label}
                      </dt>
                      <dd
                        className={`mt-1 text-sm font-semibold ${pending ? 'text-muted/60 italic' : ''}`}
                      >
                        {pending ? 'Not published' : m.value}
                      </dd>
                    </div>
                  )
                })}
              </dl>

              <div className="mt-8 space-y-6">
                <Block title="Problem">{project.detail.problem}</Block>
                <Block title="Solution">{project.detail.solution}</Block>
                <Block title="Dataset">
                  <span
                    className={
                      String(project.detail.dataset).startsWith('TODO')
                        ? 'text-muted/60 italic'
                        : ''
                    }
                  >
                    {project.detail.dataset}
                  </span>
                </Block>
                <Block title="Data preprocessing">
                  <List items={project.detail.preprocessing} />
                </Block>
                <Block title="Model">{project.detail.model}</Block>
                <Block title="Training">
                  <span
                    className={
                      String(project.detail.training).startsWith('TODO')
                        ? 'text-muted/60 italic'
                        : ''
                    }
                  >
                    {project.detail.training}
                  </span>
                </Block>
                <Block title="Evaluation">{project.detail.evaluation}</Block>
                <Block title="Results">
                  <List items={project.detail.results} />
                </Block>
                <Block title="Technologies">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[11px]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block title="Challenges">
                  <List items={project.detail.challenges} />
                </Block>
                <Block title="Future improvements">
                  <List items={project.detail.future} />
                </Block>
              </div>
            </div>

            {/* Footer */}
            <footer className="flex flex-wrap items-center gap-3 border-t border-line px-6 py-4">
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-brand/40"
                >
                  <Github size={15} />
                  Repository
                </a>
              ) : (
                <span className="font-mono text-[11px] text-muted">
                  Repository link not published yet
                </span>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
                >
                  <ExternalLink size={15} />
                  Live demo
                </a>
              )}
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
