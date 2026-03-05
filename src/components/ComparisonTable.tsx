import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

type Row = {
  dimension: string
  figma: string
  proto: string
}

const rows: Row[] = [
  {
    dimension: 'Primary Expression',
    figma: 'Design intent, state space, variant relationships, review context',
    proto: 'Runtime results, interaction paths, local implementation effects',
  },
  {
    dimension: 'State Display',
    figma: 'Flat layout, side-by-side comparison, component variants browsing',
    proto: 'Typically serial (temporal) browsing, hard to compare states',
  },
  {
    dimension: 'Inspect Semantics',
    figma: 'Frame, component, variant, token, annotation layer',
    proto: 'DOM, computed style, local rendered result',
  },
  {
    dimension: 'Default Mindset',
    figma: '"This is a design system expression to be implemented"',
    proto: '"This looks like a nearly runnable product"',
  },
  {
    dimension: 'Primary Risk',
    figma: 'Without Dev Mode, developer reading efficiency drops',
    proto: 'Easy to mistake demo for spec; missing states stay hidden',
  },
  {
    dimension: 'Best Role',
    figma: 'Handoff body, state documentation, review discussion, design system mapping',
    proto: 'Solution validation, motion assessment, path demo, concept proof',
  },
]

export default function ComparisonTable() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
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
          <span className="text-sm font-medium text-slate-400 tracking-widest uppercase">
            Side by Side
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          Two Worlds Compared
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          The fundamental differences between design spec tools and interactive prototypes.
        </motion.p>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] bg-white/[0.03]">
            <div className="p-4 text-sm font-medium text-slate-500 border-b border-r border-white/[0.06]">
              Dimension
            </div>
            <div className="p-4 text-sm font-medium text-figma-400 border-b border-r border-white/[0.06] flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-figma-500/50" />
              Figma / Design Spec
            </div>
            <div className="p-4 text-sm font-medium text-proto-400 border-b border-white/[0.06] flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-proto-500/50" />
              AI Prototype
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`grid grid-cols-[1fr_1.5fr_1.5fr] transition-colors duration-200 ${
                hoveredRow === i ? 'bg-white/[0.03]' : ''
              } ${i < rows.length - 1 ? 'border-b border-white/[0.04]' : ''}`}
            >
              <div className="p-4 text-sm font-medium text-white border-r border-white/[0.06]">
                {row.dimension}
              </div>
              <div className="p-4 text-sm text-slate-400 border-r border-white/[0.06] leading-relaxed">
                {row.figma}
              </div>
              <div className="p-4 text-sm text-slate-400 leading-relaxed">
                {row.proto}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
