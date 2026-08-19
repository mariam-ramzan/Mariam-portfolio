import { useState } from 'react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './ui/BrandIcons'
import { Check, Copy, Mail, Send } from 'lucide-react'
import { site } from '../data/site'
import Section, { Reveal } from './ui/Section'
import SectionHeading from './ui/SectionHeading'

const emptyForm = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name'
  else if (values.name.trim().length < 2) errors.name = 'Name looks too short'

  if (!values.email.trim()) errors.email = 'Enter your email'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'That email address is not valid'

  if (!values.subject.trim()) errors.subject = 'Add a subject'
  if (!values.message.trim()) errors.message = 'Write a message'
  else if (values.message.trim().length < 20)
    errors.message = 'A little more detail helps — 20 characters minimum'

  return errors
}

function Field({ label, name, value, error, onChange, type = 'text', rows }) {
  const Tag = rows ? 'textarea' : 'input'
  const id = `contact-${name}`
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-medium">
        {label}
      </label>
      <Tag
        id={id}
        name={name}
        type={rows ? undefined : type}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full min-w-0 rounded-lg border bg-surface px-3.5 py-2.5 text-sm transition-colors outline-none placeholder:text-muted/60 focus:border-brand ${
          error ? 'border-red-500/70' : 'border-line'
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | ready
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('idle')
      return
    }
    setStatus('ready')
  }

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    values.subject
  )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Section id="contact" label="Contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something intelligent."
        description="Have a project, an opportunity, or a question about any of the work above? Send it across."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        {/* Form */}
        <Reveal>
          <form onSubmit={handleSubmit} noValidate className="card space-y-5 p-6 sm:p-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={values.name} error={errors.name} onChange={handleChange} />
              <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={handleChange} />
            </div>
            <Field label="Subject" name="subject" value={values.subject} error={errors.subject} onChange={handleChange} />
            <Field label="Message" name="message" rows={5} value={values.message} error={errors.message} onChange={handleChange} />

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 sm:w-auto"
            >
              <Send size={15} />
              Send message
            </button>

            {status === 'ready' && (
              <div role="status" className="rounded-lg border border-brand/40 bg-brand/10 p-4">
                <p className="text-sm font-medium">Your message is ready to send.</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  This form has no mail server connected yet, so nothing has been sent.
                  Open it in your email app to deliver it.
                </p>
                <a
                  href={mailtoHref}
                  className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
                >
                  <Mail size={15} />
                  Open in email app
                </a>
              </div>
            )}

            <p className="font-mono text-[10.5px] leading-relaxed text-muted">
              Note: no backend is connected — the form validates your details and hands them
              to your email client.
            </p>
          </form>
        </Reveal>

        {/* Direct channels */}
        <Reveal delay={0.08}>
          <div className="space-y-3">
            <div className="card flex items-center gap-4 p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface text-brand">
                <Mail size={17} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">Email</p>
                <p className="truncate text-sm">{site.email}</p>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="grid size-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand/40 hover:text-fg"
              >
                {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              </button>
            </div>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="card flex items-center gap-4 p-5 transition-colors hover:border-brand/40"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface text-brand">
                <Linkedin size={17} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">LinkedIn</p>
                <p className="truncate text-sm">Connect professionally</p>
              </div>
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              className="card flex items-center gap-4 p-5 transition-colors hover:border-brand/40"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface text-brand">
                <Github size={17} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">GitHub</p>
                <p className="truncate text-sm">Browse the code</p>
              </div>
            </a>

            <div className="card p-5">
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                Availability
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                {site.availability}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                Based in {site.location}. Comfortable working remotely across time zones.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
