import { Download, FileText } from 'lucide-react'
import { site } from '../data/site'
import { Reveal } from './ui/Section'

export default function Resume() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand/12 blur-[90px]" />
          <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Interested in working together?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted text-pretty">
              My resume covers the technical skills, projects, education, and coursework
              behind everything on this page.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={site.resume}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white shadow-[0_6px_28px_-8px_rgba(59,130,246,0.75)] transition-all hover:-translate-y-0.5 hover:bg-blue-500"
              >
                <Download size={16} />
                Download resume
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-elevated px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-brand/50"
              >
                <FileText size={16} />
                View in browser
              </a>
            </div>

            <p className="mt-6 font-mono text-[10.5px] text-muted">
              PDF · place the file at <span className="text-fg">public{site.resume}</span>
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
