import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Conclusion() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block mb-8">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-figma-500/50 to-transparent mx-auto" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-8"
          >
            The Verdict
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6 mb-12"
          >
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              AI-generated prototypes are a{' '}
              <span className="text-proto-400 font-medium">powerful new tool</span> for
              exploration, validation, and demonstration.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              But when elevated to the{' '}
              <span className="text-white font-medium">primary handoff medium</span>,
              their fundamental limitation is exposed:
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="py-8 px-6 rounded-2xl bg-gradient-to-r from-figma-500/10 via-ocean-500/10 to-proto-500/10 border border-white/[0.08]"
            >
              <p className="text-xl md:text-2xl font-display font-semibold text-white leading-relaxed">
                They express{' '}
                <span className="text-proto-400">runtime results</span>,
                not{' '}
                <span className="text-figma-400">design semantics</span>.
              </p>
              <p className="text-xl md:text-2xl font-display font-semibold text-white leading-relaxed mt-2">
                They show{' '}
                <span className="text-proto-400">a single state</span>,
                not{' '}
                <span className="text-figma-400">the state space</span>.
              </p>
              <p className="text-xl md:text-2xl font-display font-semibold text-white leading-relaxed mt-2">
                They reveal{' '}
                <span className="text-proto-400">rendered values</span>,
                not{' '}
                <span className="text-figma-400">design rules</span>.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="text-base text-slate-400 leading-relaxed max-w-xl mx-auto pt-4"
            >
              The prototype is best as a{' '}
              <strong className="text-white">validator of real behavior</strong>,
              not the{' '}
              <strong className="text-white">sole source of design truth</strong>.
            </motion.p>
          </motion.div>

          {/* Visual separator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-16 mb-8"
          >
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-figma-500/40" />
                <span className="text-xs text-figma-400">Design Intent</span>
              </div>
              <span className="text-slate-600">+</span>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-proto-500/40" />
                <span className="text-xs text-proto-400">Runtime Validation</span>
              </div>
              <span className="text-slate-600">=</span>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-ocean-500/40" />
                <span className="text-xs text-ocean-400">Complete Handoff</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="mt-24 text-center border-t border-white/5 pt-8"
      >
        <p className="text-xs text-slate-600">
          Based on the evaluation report: "Assessment of Using Claude Code to Output Interactive Prototypes for Designer Handoff"
        </p>
        <p className="text-xs text-slate-700 mt-2">
          Interactive visualization built with React, Framer Motion & Tailwind CSS
        </p>
      </motion.div>
    </section>
  )
}
