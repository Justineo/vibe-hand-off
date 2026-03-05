import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { Grid3x3, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const states = [
  { name: 'Default', color: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400', icon: '✓' },
  { name: 'Loading', color: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400', icon: '◌' },
  { name: 'Empty', color: 'bg-slate-500/20', border: 'border-slate-500/30', text: 'text-slate-400', icon: '∅' },
  { name: 'Error', color: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-400', icon: '✕' },
  { name: 'Disabled', color: 'bg-gray-500/20', border: 'border-gray-500/30', text: 'text-gray-400', icon: '—' },
  { name: 'Overflow', color: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400', icon: '⋯' },
]

export default function SpatialVsTemporal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [protoIndex, setProtoIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goNext = useCallback(() => {
    setProtoIndex((i) => (i + 1) % states.length)
  }, [])

  const goPrev = useCallback(() => {
    setProtoIndex((i) => (i - 1 + states.length) % states.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(goNext, 2000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goNext])

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-medium text-emerald-400 tracking-widest uppercase">
            The Viewing Problem
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          Spatial vs. Temporal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-20 text-lg"
        >
          Figma shows all states at once. A prototype forces you to experience them one at a time,
          hiding the full state space.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Figma spatial view */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-figma-500/20 flex items-center justify-center">
                <Grid3x3 className="w-5 h-5 text-figma-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Spatial Layout</h3>
                <p className="text-sm text-figma-400">Everything visible at once</p>
              </div>
            </div>

            <div className="rounded-2xl border border-figma-500/20 bg-gradient-to-b from-figma-500/5 to-transparent p-6">
              <div className="grid grid-cols-3 gap-3">
                {states.map((state, i) => (
                  <motion.div
                    key={state.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className={`rounded-xl ${state.color} border ${state.border} p-3 flex flex-col items-center gap-2`}
                  >
                    <div className="w-full h-16 rounded-lg bg-white/[0.04] flex items-center justify-center">
                      <span className={`text-2xl ${state.text}`}>{state.icon}</span>
                    </div>
                    <span className={`text-xs font-medium ${state.text}`}>{state.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 text-center">
                <span className="text-xs text-slate-500">
                  All <span className="text-figma-400 font-medium">6 states</span> visible simultaneously — compare, discuss, review
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Prototype temporal view */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-proto-500/20 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-proto-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Temporal Browsing</h3>
                <p className="text-sm text-proto-400">One state at a time</p>
              </div>
            </div>

            <div className="rounded-2xl border border-proto-500/20 bg-gradient-to-b from-proto-500/5 to-transparent p-6">
              {/* Single state display */}
              <div className="relative h-[200px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={protoIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full max-w-[200px] rounded-xl ${states[protoIndex].color} border ${states[protoIndex].border} p-6 flex flex-col items-center gap-3`}
                  >
                    <div className="w-full h-20 rounded-lg bg-white/[0.04] flex items-center justify-center">
                      <span className={`text-4xl ${states[protoIndex].text}`}>
                        {states[protoIndex].icon}
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${states[protoIndex].text}`}>
                      {states[protoIndex].name}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={() => { goPrev(); setIsAutoPlaying(false) }}
                  className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                </button>

                <div className="flex gap-1.5">
                  {states.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setProtoIndex(i); setIsAutoPlaying(false) }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === protoIndex ? 'bg-proto-400 w-6' : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => { goNext(); setIsAutoPlaying(false) }}
                  className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
                >
                  {isAutoPlaying ? (
                    <Pause className="w-3 h-3 text-slate-400" />
                  ) : (
                    <Play className="w-3 h-3 text-slate-400" />
                  )}
                </button>
              </div>

              {/* Progress */}
              <div className="mt-4 pt-4 border-t border-white/5 text-center">
                <span className="text-xs text-slate-500">
                  Viewing <span className="text-proto-400 font-medium">{protoIndex + 1}</span> of {states.length} — must navigate sequentially
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-start gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <span className="text-2xl mt-0.5">💡</span>
            <p className="text-sm text-slate-400 text-left">
              <strong className="text-white">Cognitive cost:</strong> When discussing sibling states,
              serial browsing significantly increases the effort needed to compare and reason about
              the full state space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
