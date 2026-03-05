import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ScanSearch, Paintbrush } from 'lucide-react'

type ViewMode = 'runtime' | 'semantic'

const inspectPairs = [
  {
    property: 'Background',
    runtime: { label: 'background-color', value: '#7c3aed' },
    semantic: { label: 'fill', value: 'brand/primary-500', alias: '→ purple-600 → #7c3aed' },
  },
  {
    property: 'Font Size',
    runtime: { label: 'font-size', value: '14px' },
    semantic: { label: 'typography', value: 'label/medium', alias: '→ 14px / 500 / 1.4' },
  },
  {
    property: 'Padding',
    runtime: { label: 'padding', value: '8px 16px' },
    semantic: { label: 'spacing', value: 'space-200 space-400', alias: '→ 8px 16px' },
  },
  {
    property: 'Border Radius',
    runtime: { label: 'border-radius', value: '6px' },
    semantic: { label: 'radius', value: 'radius/sm', alias: '→ 6px' },
  },
  {
    property: 'Shadow',
    runtime: { label: 'box-shadow', value: '0 1px 3px rgba(0,0,0,.1)' },
    semantic: { label: 'elevation', value: 'shadow/sm', alias: '→ 0 1px 3px ...' },
  },
  {
    property: 'Identity',
    runtime: { label: 'class', value: 'css-1a2b3c' },
    semantic: { label: 'component', value: 'Button / Primary / Medium', alias: '' },
  },
]

export default function SemanticGap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [viewMode, setViewMode] = useState<ViewMode>('runtime')
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-medium text-rose-400 tracking-widest uppercase">
            The Inspector Problem
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          Rendered Value ≠ Design Semantic
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          A browser inspector shows you <em>what</em> was rendered.
          A design tool shows you <em>why</em> it was rendered that way.
        </motion.p>

        {/* Interactive button element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Inspect this element</div>
          <motion.div
            animate={{
              boxShadow: viewMode === 'runtime'
                ? '0 0 0 2px rgba(245, 158, 11, 0.5), 0 0 20px rgba(245, 158, 11, 0.1)'
                : '0 0 0 2px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.1)',
            }}
            transition={{ duration: 0.5 }}
            className="px-8 py-3 bg-figma-600 text-white rounded-lg font-medium text-sm cursor-default"
          >
            Submit Order
          </motion.div>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex p-1 rounded-xl bg-white/[0.05] border border-white/[0.08]">
            <button
              onClick={() => setViewMode('runtime')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'runtime'
                  ? 'bg-proto-500/20 text-proto-400 border border-proto-500/30'
                  : 'text-slate-500 hover:text-slate-300 border border-transparent'
              }`}
            >
              <ScanSearch className="w-4 h-4" />
              Browser Inspector
            </button>
            <button
              onClick={() => setViewMode('semantic')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'semantic'
                  ? 'bg-figma-500/20 text-figma-400 border border-figma-500/30'
                  : 'text-slate-500 hover:text-slate-300 border border-transparent'
              }`}
            >
              <Paintbrush className="w-4 h-4" />
              Design Inspector
            </button>
          </div>
        </motion.div>

        {/* Inspector panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`rounded-2xl border transition-colors duration-500 ${
            viewMode === 'runtime'
              ? 'border-proto-500/20 bg-gradient-to-b from-proto-500/5 to-transparent'
              : 'border-figma-500/20 bg-gradient-to-b from-figma-500/5 to-transparent'
          } p-6 max-w-2xl mx-auto`}
        >
          {/* Panel header */}
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/[0.06]">
            <div className={`w-3 h-3 rounded-full ${
              viewMode === 'runtime' ? 'bg-proto-500/60' : 'bg-figma-500/60'
            }`} />
            <span className="text-xs text-slate-400 font-mono">
              {viewMode === 'runtime' ? 'Computed Styles' : 'Design Specifications'}
            </span>
          </div>

          {/* Rows */}
          <div className="space-y-1">
            {inspectPairs.map((pair, i) => (
              <motion.div
                key={pair.property}
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
                animate={{
                  backgroundColor: hoveredRow === i
                    ? viewMode === 'runtime'
                      ? 'rgba(245, 158, 11, 0.05)'
                      : 'rgba(139, 92, 246, 0.05)'
                    : 'rgba(0,0,0,0)',
                }}
                className="flex items-start justify-between py-3 px-3 rounded-lg font-mono text-sm cursor-default"
              >
                <span className="text-slate-500 w-32 shrink-0">
                  {viewMode === 'runtime' ? pair.runtime.label : pair.semantic.label}
                </span>
                <div className="text-right">
                  <motion.span
                    key={viewMode}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={viewMode === 'runtime' ? 'text-proto-400' : 'text-figma-400'}
                  >
                    {viewMode === 'runtime' ? pair.runtime.value : pair.semantic.value}
                  </motion.span>
                  {viewMode === 'semantic' && pair.semantic.alias && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs text-slate-600 mt-1"
                    >
                      {pair.semantic.alias}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-start gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <span className="text-2xl mt-0.5">🔍</span>
            <p className="text-sm text-slate-400 text-left">
              <strong className="text-white">The missing link:</strong> Without explicit CSS variables
              or design tokens, engineers see only absolute values or final colors —
              with no way to trace back to the design system's intent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
