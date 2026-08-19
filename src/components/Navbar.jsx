import { useEffect, useState } from 'react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './ui/BrandIcons'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X, FileText } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useLockBodyScroll(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-line bg-bg/70 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8"
        >
          {/* Identity */}
          <a href="#home" className="group flex shrink-0 items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-iris font-mono text-sm font-bold text-white">
              MR
            </span>
            <span className="hidden leading-tight whitespace-nowrap sm:block">
              <span className="block text-sm font-semibold">{site.name}</span>
              <span className="block font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                {site.role}
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-brand to-transparent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="hidden size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg sm:grid"
            >
              <Github size={17} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="hidden size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg sm:grid"
            >
              <Linkedin size={17} />
            </a>

            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="ml-1 hidden items-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 py-2 text-sm font-medium transition-colors hover:border-brand/50 hover:bg-elevated md:inline-flex"
            >
              <FileText size={15} />
              Resume
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg lg:hidden"
            >
              <Menu size={19} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="absolute inset-y-0 right-0 flex w-[min(20rem,85vw)] flex-col border-l border-line bg-bg"
            >
              <div className="flex h-16 items-center justify-between border-b border-line px-5">
                <span className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg"
                >
                  <X size={19} />
                </button>
              </div>

              <ul className="flex-1 overflow-y-auto p-3">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.035 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-[15px] transition-colors ${
                        active === link.href.slice(1)
                          ? 'bg-surface text-fg'
                          : 'text-muted hover:bg-surface hover:text-fg'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-3 border-t border-line p-5">
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white"
                >
                  <FileText size={15} />
                  Resume
                </a>
                <div className="flex justify-center gap-2">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub profile"
                    className="grid size-10 place-items-center rounded-lg border border-line text-muted hover:text-fg"
                  >
                    <Github size={17} />
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn profile"
                    className="grid size-10 place-items-center rounded-lg border border-line text-muted hover:text-fg"
                  >
                    <Linkedin size={17} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
