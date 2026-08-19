import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { projectCategories, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <Section id="projects" label="Projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Featured projects"
        description="Each one starts with a real problem and ends with something someone can use. Open a case study to see the dataset, the modelling choices, and what I'd do differently next time."
      />

      {/* Filters */}
      <div role="tablist" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        <LayoutGroup id="project-filter">
          {projectCategories.map((cat) => {
            const active = filter === cat
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(cat)}
                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  active ? 'text-white' : 'text-muted hover:text-fg'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-lg bg-brand"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            )
          })}
        </LayoutGroup>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="rounded-xl border border-dashed border-line py-14 text-center text-sm text-muted">
          No projects in this category yet.
        </p>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
