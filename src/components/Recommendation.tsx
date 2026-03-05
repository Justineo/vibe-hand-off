import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X, ArrowRight } from 'lucide-react'

const protoResponsibilities = [
  'Behavior validation',
  'Animation & motion assessment',
  'Task flow demonstration',
  'Concept alignment & selling',
]

const figmaResponsibilities = [
  'State space documentation',
  'Edge case coverage',
  'Token & component relationships',
  'Design intent & constraints',
  'Review & change tracking',
]

const minRequirements = [
  { label: 'State View', desc: 'Side-by-side display of all key states, not just serial browsing' },
  { label: 'Semantic Tracing', desc: 'Token origins, aliases, component & variant identity, raw overrides' },
  { label: 'Spec View', desc: 'Trigger conditions, exception paths, design constraints, intended behavior' },
  { label: 'Change Management', desc: 'What changed, why it changed, whether it\'s ready for dev' },
  { label: 'Collaboration Quality', desc: 'Comments, replies, location, filtering, shareable links, async review' },
]

export default function Recommendation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-medium text-ocean-400 tracking-widest uppercase">
            The Way Forward
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          The Balanced Approach
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Each tool does what it does best. Together, they cover what neither can alone.
        </motion.p>

        {/* Not recommended */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
              <X className="w-4 h-4 text-red-400" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Not Recommended</h3>
          </div>
          <p className="text-sm text-slate-400 pl-11">
            Using AI-generated interactive prototypes as the sole or primary handoff deliverable,
            expecting engineering teams to understand and reproduce designs from it alone.
            This shifts state modeling, semantic identification, and boundary condition inference
            into the implementation phase.
          </p>
        </motion.div>

        {/* Recommended split */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Prototype responsibilities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-proto-500/20 bg-proto-500/5 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-proto-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-proto-400" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">Prototype Handles</h3>
            </div>
            <ul className="space-y-3 pl-11">
              {protoResponsibilities.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-proto-400 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Figma responsibilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-figma-500/20 bg-figma-500/5 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-figma-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-figma-400" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">Design Spec Handles</h3>
            </div>
            <ul className="space-y-3 pl-11">
              {figmaResponsibilities.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-figma-400 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* If going code-first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="rounded-2xl border border-ocean-500/20 bg-ocean-500/5 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-ocean-500/20 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-ocean-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                If Going Code-First Anyway...
              </h3>
              <p className="text-xs text-ocean-400">Minimum capabilities to bridge the gap</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {minRequirements.map((req, i) => (
              <motion.div
                key={req.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-ocean-500/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-ocean-400 mb-1">{req.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{req.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-slate-500 text-center mt-6 italic">
            In other words, to truly approach Figma's role in handoff,
            a team would need to build not just a prototype, but a design delivery system.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
