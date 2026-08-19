import { Reveal } from './Section'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'
  return (
    <header className={`mb-12 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <Reveal>
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-brand uppercase">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
            {description}
          </p>
        </Reveal>
      )}
    </header>
  )
}
