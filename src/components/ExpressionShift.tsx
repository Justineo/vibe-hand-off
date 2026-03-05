import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Layers, Monitor, ArrowRight } from 'lucide-react'

const intentLayers = [
  { label: 'Design Tokens', color: 'bg-figma-500/40', desc: 'brand/primary, spacing/200, radius/sm' },
  { label: 'Component Identity', color: 'bg-figma-400/35', desc: 'Button/Primary/Medium variant' },
  { label: 'State Space', color: 'bg-purple-500/30', desc: 'default, hover, focus, disabled, loading' },
  { label: 'Constraints & Rules', color: 'bg-indigo-500/25', desc: 'min-width: 120px, max 2 lines' },
  { label: 'Responsive Behavior', color: 'bg-blue-500/20', desc: 'stack below 768px, hide label on mobile' },
  { label: 'Edge Cases', color: 'bg-cyan-500/15', desc: 'empty, error, overflow, permission denied' },
]

const runtimeValues = [
  { label: 'background-color', value: '#7c3aed' },
  { label: 'font-size', value: '14px' },
  { label: 'padding', value: '8px 16px' },
  { label: 'border-radius', value: '6px' },
  { label: 'color', value: '#ffffff' },
  { label: 'font-weight', value: '500' },
]

export default function ExpressionShift() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [activeLayer, setActiveLayer] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-medium text-figma-400 tracking-widest uppercase">The Core Problem</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          The Expression Level Shift
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-20 text-lg"
        >
          When deliverables shift from intent models to rendered results,
          engineers must reverse-engineer design rules from runtime output.
        </motion.p>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Intent Model */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-figma-500/20 flex items-center justify-center">
                <Layers className="w-5 h-5 text-figma-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Intent Model</h3>
                <p className="text-sm text-figma-400">What Figma expresses</p>
              </div>
            </div>

            <div className="relative rounded-2xl border border-figma-500/20 bg-gradient-to-b from-figma-500/5 to-transparent p-6 space-y-3">
              {intentLayers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  onMouseEnter={() => setActiveLayer(i)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`relative rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                    activeLayer === i
                      ? 'bg-figma-500/15 border border-figma-500/40 scale-[1.02]'
                      : 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${layer.color}`} />
                    <span className="text-sm font-medium text-white">{layer.label}</span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeLayer === i ? 'auto' : 0,
                      opacity: activeLayer === i ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-slate-400 mt-2 pl-6">{layer.desc}</p>
                  </motion.div>
                </motion.div>
              ))}

              <p className="text-xs text-slate-500 text-center mt-4 pt-3 border-t border-white/5">
                All layers visible simultaneously, structured for handoff
              </p>
            </div>
          </motion.div>

          {/* Right: Runtime Result */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-proto-500/20 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-proto-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Runtime Result</h3>
                <p className="text-sm text-proto-400">What a prototype shows</p>
              </div>
            </div>

            <div className="relative rounded-2xl border border-proto-500/20 bg-gradient-to-b from-proto-500/5 to-transparent p-6">
              {/* Mock rendered button */}
              <div className="mb-6 flex flex-col items-center gap-4">
                <div className="text-xs text-slate-500 uppercase tracking-wider">Rendered Output</div>
                <div className="px-6 py-3 bg-figma-600 text-white rounded-lg font-medium text-sm shadow-lg shadow-figma-600/20">
                  Submit Order
                </div>
                <div className="text-xs text-slate-500">A single rendered state of a single path</div>
              </div>

              {/* Inspector panel */}
              <div className="rounded-xl bg-navy-900/80 border border-white/[0.06] p-4">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.06]">
                  <div className="w-3 h-3 rounded-full bg-proto-500/40" />
                  <span className="text-xs text-slate-400 font-mono">Computed Styles</span>
                </div>
                <div className="space-y-2">
                  {runtimeValues.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className="flex items-center justify-between text-xs font-mono"
                    >
                      <span className="text-slate-500">{item.label}:</span>
                      <span className="text-proto-400">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 text-center mt-4 pt-3 border-t border-white/5">
                  Only final computed values, no semantic origin
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Arrow and key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-figma-400" />
              <span className="text-sm text-figma-400 font-medium">6 semantic layers</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600" />
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-proto-400" />
              <span className="text-sm text-proto-400 font-medium">1 flat output</span>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center max-w-md">
            This is not a tooling gap. It's a fundamental change in what
            the deliverable <em>expresses</em>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
