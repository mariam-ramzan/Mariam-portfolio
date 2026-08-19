import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { site } from '../data/site'
import HeroVisual from './HeroVisual'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pt-24 pb-16">
      <HeroVisual />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase backdrop-blur-sm sm:text-[11px]">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-aqua opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-aqua" />
              </span>
              Data Science • Machine Learning • AI
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.1rem] leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]"
          >
            Turning data into <span className="text-gradient">intelligent decisions</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted text-pretty sm:text-base"
          >
            I&rsquo;m {site.name}, a {site.role.toLowerCase()} who turns complex, messy data
            into insights, predictive models, and decisions people can actually act on.
            I work in Python across the full cycle — from cleaning raw data to
            evaluating models honestly and explaining what the results mean.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white shadow-[0_6px_28px_-8px_rgba(59,130,246,0.75)] transition-all hover:-translate-y-0.5 hover:bg-blue-500"
            >
              View my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:bg-elevated"
            >
              <Download size={16} />
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              <Mail size={16} />
              Let&rsquo;s connect
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} />
              {site.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              {site.availability}
            </span>
          </motion.p>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-[13.5rem] sm:max-w-[16rem] lg:order-2 lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[1.6rem] bg-gradient-to-br from-brand/25 via-aqua/10 to-iris/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
            <img
              src={site.profileImage}
              alt={`${site.name}, ${site.role}`}
              width="640"
              height="800"
              loading="eager"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 hidden items-center justify-between gap-3 border-t border-line bg-bg/80 px-4 py-3 backdrop-blur-md lg:flex">
              <span className="text-sm font-semibold">{site.name}</span>
              <span className="font-mono text-[10px] tracking-[0.14em] text-brand uppercase">
                {site.role}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
