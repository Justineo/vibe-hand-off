import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-figma-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-proto-500/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ocean-600/5 blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-slate-400"
        >
          <span className="w-2 h-2 rounded-full bg-figma-500 animate-pulse" />
          An Interactive Exploration
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          <span className="text-white">The Prototype</span>
          <br />
          <span className="bg-gradient-to-r from-figma-400 via-ocean-400 to-proto-400 bg-clip-text text-transparent">
            Handoff Dilemma
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6"
        >
          When AI-generated interactive prototypes look like the real product,
          should they become the primary design handoff?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed"
        >
          An exploration of why{' '}
          <span className="text-proto-400">runtime results</span> and{' '}
          <span className="text-figma-400">design intent</span> are not
          the same thing.
        </motion.p>
      </motion.div>

      {/* Two floating cards representing the two worlds */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 mt-16 flex gap-8 md:gap-16"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-32 h-20 md:w-40 md:h-24 rounded-xl border border-figma-500/30 bg-figma-500/5 backdrop-blur-sm flex flex-col items-center justify-center gap-1"
        >
          <div className="flex gap-1">
            <div className="w-6 h-4 rounded-sm bg-figma-500/30" />
            <div className="w-6 h-4 rounded-sm bg-figma-500/20" />
            <div className="w-6 h-4 rounded-sm bg-figma-500/30" />
          </div>
          <div className="flex gap-1">
            <div className="w-6 h-4 rounded-sm bg-figma-500/20" />
            <div className="w-6 h-4 rounded-sm bg-figma-500/30" />
            <div className="w-6 h-4 rounded-sm bg-figma-500/20" />
          </div>
          <span className="text-[10px] text-figma-400 mt-1">Intent Model</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="w-32 h-20 md:w-40 md:h-24 rounded-xl border border-proto-500/30 bg-proto-500/5 backdrop-blur-sm flex flex-col items-center justify-center gap-2"
        >
          <div className="w-20 h-12 rounded-md bg-proto-500/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-proto-500/40" />
          </div>
          <span className="text-[10px] text-proto-400">Runtime Result</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
