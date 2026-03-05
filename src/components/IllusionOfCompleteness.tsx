import type { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ShieldAlert, ChevronDown } from 'lucide-react'

const risks = [
  {
    title: 'Samples, Not Systems',
    subtitle: 'Section 4.1',
    description: 'A prototype presents the happy path. The real product requires a vast combination of states — but missing states are invisible by default.',
    visual: 'sample',
  },
  {
    title: 'Adding Features at the Result Layer',
    subtitle: 'Section 4.5',
    description: 'Even with sidebar, pin, comment, reply, and dev panel added to the prototype, these are communication tools on top of rendered results — not semantic expression.',
    visual: 'layers',
  },
  {
    title: 'Realism Hides Incompleteness',
    subtitle: 'Section 4.4',
    description: 'Because the prototype is built on the actual product interface, it looks like the real product. Reviewers default to "this is the final spec" — overlooking unexpressed states and rules.',
    visual: 'mask',
  },
]

function SampleVisual() {
  return (
    <div className="flex items-end gap-1 h-20">
      <div className="w-8 bg-emerald-500/60 rounded-t-md h-full" />
      <div className="w-8 bg-slate-500/15 rounded-t-md h-[60%] border border-dashed border-slate-500/30" />
      <div className="w-8 bg-slate-500/15 rounded-t-md h-[80%] border border-dashed border-slate-500/30" />
      <div className="w-8 bg-slate-500/15 rounded-t-md h-[40%] border border-dashed border-slate-500/30" />
      <div className="w-8 bg-slate-500/15 rounded-t-md h-[70%] border border-dashed border-slate-500/30" />
    </div>
  )
}

function LayersVisual() {
  return (
    <div className="relative h-20 flex items-center justify-center">
      <div className="absolute w-32 h-12 rounded-lg bg-proto-500/20 border border-proto-500/30 flex items-center justify-center text-xs text-proto-400">
        Rendered Result
      </div>
      <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-slate-500">
        + comments
      </div>
      <div className="absolute -bottom-1 -left-1 px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-slate-500">
        + pins
      </div>
    </div>
  )
}

function MaskVisual() {
  return (
    <div className="relative h-20 flex items-center justify-center">
      <div className="w-36 h-14 rounded-lg bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
        <span className="text-xs text-emerald-400">Looks complete</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-0 text-[10px] text-red-400/60">Missing states hidden</div>
    </div>
  )
}

const visuals: Record<string, () => ReactNode> = {
  sample: SampleVisual,
  layers: LayersVisual,
  mask: MaskVisual,
}

export default function IllusionOfCompleteness() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-medium text-red-400 tracking-widest uppercase">
            Hidden Risks
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          The Illusion of Completeness
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          The more a prototype looks like a real product, the easier it becomes
          to mistake a demo for a spec.
        </motion.p>

        {/* Accordion risks */}
        <div className="space-y-4">
          {risks.map((risk, i) => {
            const Visual = visuals[risk.visual]
            return (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="rounded-2xl border border-red-500/10 bg-red-500/[0.03] overflow-hidden"
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <ShieldAlert className="w-5 h-5 text-red-400/60 shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {risk.title}
                      </h3>
                      <span className="text-xs text-slate-500">{risk.subtitle}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expanded === i ? 'auto' : 0,
                    opacity: expanded === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 flex flex-col md:flex-row gap-6 items-start">
                    <p className="text-sm text-slate-400 leading-relaxed flex-1">
                      {risk.description}
                    </p>
                    <div className="w-full md:w-48 shrink-0">
                      <Visual />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-500/5 to-proto-500/5 border border-white/[0.06]"
        >
          <p className="text-sm text-slate-400 text-center leading-relaxed">
            The critical issue for handoff is the{' '}
            <strong className="text-white">explicit expression of absent content</strong>:
            unstated states, unrendered rules, token semantics not exposed by DOM,
            and system constraints yet to be covered.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
