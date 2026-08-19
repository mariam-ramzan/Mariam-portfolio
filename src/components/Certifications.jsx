import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/certifications'
import Section, { Reveal } from './ui/Section'
import SectionHeading from './ui/SectionHeading'

const pending = (v) => !v || String(v).startsWith('TODO')

export default function Certifications() {
  return (
    <Section id="certifications" label="Certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        description="Courses and credentials completed, with verification links where they're available."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <article className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
              <span className="grid size-10 place-items-center rounded-lg border border-line bg-surface text-brand">
                <Award size={18} />
              </span>

              <h3
                className={`mt-4 text-[15px] leading-snug font-semibold ${
                  pending(cert.name) ? 'text-muted/60 italic' : ''
                }`}
              >
                {cert.name}
              </h3>
              <p className={`mt-1.5 text-sm ${pending(cert.issuer) ? 'text-muted/60 italic' : 'text-muted'}`}>
                {cert.issuer}
              </p>

              <div className="mt-auto space-y-1.5 pt-5">
                <p className={`font-mono text-[11px] ${pending(cert.date) ? 'text-muted/60 italic' : 'text-muted'}`}>
                  {cert.date}
                </p>
                <p className="font-mono text-[11px] text-muted">
                  ID:{' '}
                  <span className={pending(cert.credentialId) ? 'text-muted/60 italic' : ''}>
                    {pending(cert.credentialId) ? 'not published' : cert.credentialId}
                  </span>
                </p>
              </div>

              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-1.5 border-t border-line pt-4 text-sm font-medium text-brand hover:underline"
                >
                  View certificate
                  <ExternalLink size={14} />
                </a>
              ) : (
                <p className="mt-4 border-t border-line pt-4 font-mono text-[11px] text-muted">
                  Verification link coming soon
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
