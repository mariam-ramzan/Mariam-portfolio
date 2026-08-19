import { CheckCircle2 } from 'lucide-react'
import Section, { Reveal } from './ui/Section'
import SectionHeading from './ui/SectionHeading'

const strengths = [
  'Analytical thinking',
  'Machine learning',
  'Data visualisation',
  'Statistical analysis',
  'Python programming',
  'Problem solving',
  'Business-oriented insight',
  'Clear communication',
]

const focusAreas = ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Data Analytics']

export default function About() {
  return (
    <Section id="about" label="About">
      <SectionHeading
        eyebrow="About"
        title="A data scientist who cares about the decision, not just the model."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div className="space-y-5 text-[15px] leading-relaxed text-muted">
          <Reveal>
            <p>
              I work at the intersection of data analysis, machine learning, and applied
              artificial intelligence. Most of my time goes into the unglamorous half of the
              job — understanding what a question is really asking, finding out whether the
              data can answer it, and cleaning that data until it can be trusted.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              From there I explore relationships visually, build a simple baseline before
              anything complex, and evaluate models against the cost of being wrong rather
              than against a single flattering number. Python, pandas, and scikit-learn are
              my daily tools; matplotlib and seaborn are how I check my own thinking.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              What I enjoy most is the last step: taking a result and explaining it to
              someone who has to make a decision with it. A model that nobody understands
              rarely gets used.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 pt-3 sm:grid-cols-2">
              {strengths.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-sm text-fg">
                  <CheckCircle2 size={15} className="shrink-0 text-brand" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <aside className="card sticky top-24 p-6">
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              Currently focused on
            </p>
            <ul className="mt-5 space-y-3">
              {focusAreas.map((area, i) => (
                <li key={area} className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium">{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs leading-relaxed text-muted">
                Actively looking for data science internships and freelance analysis work.
                The fastest way to reach me is the contact form below.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  )
}
