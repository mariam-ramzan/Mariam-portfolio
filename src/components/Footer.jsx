import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './ui/BrandIcons'
import { site } from '../data/site'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-brand to-iris font-mono text-sm font-bold text-white">
              MR
            </span>
            <div>
              <p className="text-sm font-semibold">{site.name}</p>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                {site.role}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-muted">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">Elsewhere</p>
          <div className="mt-4 flex gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand/40 hover:text-fg"
            >
              <Github size={17} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand/40 hover:text-fg"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Send an email"
              className="grid size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand/40 hover:text-fg"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8">
          <p className="font-mono text-[11px] text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}
