import { motion } from 'framer-motion'
import { BarChart3, BrainCircuit, Database } from 'lucide-react'

export default function App() {
  return (
    <main className="min-h-screen bg-ink-950 text-white flex flex-col items-center justify-center gap-8 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-brand-400 via-cyan-glow to-violet-glow bg-clip-text text-transparent"
      >
        Setup Complete
      </motion.h1>

      <div className="flex gap-6 text-cyan-glow">
        <Database size={32} />
        <BrainCircuit size={32} />
        <BarChart3 size={32} />
      </div>

      <img
        src="/assets/mariam-profile.png"
        alt="Mariam Ramzan"
        className="w-28 h-28 rounded-full object-cover ring-2 ring-brand-500/60"
      />
    </main>
  )
}
