import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const visibleItems = [
  'Happy path UI',
  'Primary interaction flow',
  'Visual styling (as rendered)',
  'Basic animations & transitions',
]

const hiddenItems = [
  { label: 'Empty states', depth: 1 },
  { label: 'Loading skeletons', depth: 1 },
  { label: 'Error states', depth: 1 },
  { label: 'Permission variations', depth: 2 },
  { label: 'Edge cases & overflow', depth: 2 },
  { label: 'Responsive breakpoints', depth: 2 },
  { label: 'Design token semantics', depth: 3 },
  { label: 'Token alias chains', depth: 3 },
  { label: 'Component variant matrix', depth: 3 },
  { label: 'Mode mappings (dark/light)', depth: 4 },
  { label: 'Internationalization', depth: 4 },
  { label: 'Accessibility states', depth: 4 },
  { label: 'System-level constraints', depth: 5 },
  { label: 'Intended behavior specs', depth: 5 },
  { label: 'Abnormal network conditions', depth: 5 },
]

export default function Iceberg() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const waterY = useTransform(scrollYProgress, [0.2, 0.5], [0, -20])

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background water effect */}
      <motion.div
        style={{ y: waterY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[45%] left-0 right-0 bottom-0 bg-gradient-to-b from-ocean-600/8 via-ocean-800/12 to-ocean-900/20" />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-medium text-ocean-400 tracking-widest uppercase">
            What You Don't See
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          The Iceberg of Design
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-20 text-lg"
        >
          A prototype shows the tip. The real specification lies beneath the surface.
        </motion.p>

        {/* Iceberg visualization */}
        <div className="relative">
          {/* Above water - Visible */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mb-0"
          >
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-4 h-4 text-proto-400" />
              <span className="text-sm font-medium text-proto-400">What the prototype shows</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-8">
              {visibleItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="px-4 py-3 rounded-xl bg-proto-500/10 border border-proto-500/20 text-sm text-proto-400 text-center"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Water line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative h-px mb-0 origin-left"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ocean-400/60 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-navy-950 text-xs text-ocean-400 tracking-widest uppercase whitespace-nowrap">
              waterline
            </div>
          </motion.div>

          {/* Below water - Hidden */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <EyeOff className="w-4 h-4 text-ocean-400" />
              <span className="text-sm font-medium text-ocean-400">What's hidden beneath</span>
            </div>

            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((depth) => {
                const items = hiddenItems.filter((item) => item.depth === depth)
                return (
                  <motion.div
                    key={depth}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + depth * 0.15 }}
                    className="flex flex-wrap gap-2 justify-center"
                    style={{ paddingLeft: `${depth * 8}px`, paddingRight: `${depth * 8}px` }}
                  >
                    {items.map((item) => (
                      <div
                        key={item.label}
                        className="px-3 py-2 rounded-lg text-sm border transition-colors duration-300 hover:bg-ocean-500/15 cursor-default"
                        style={{
                          borderColor: `rgba(14, 165, 233, ${0.25 - depth * 0.03})`,
                          color: `rgba(56, 189, 248, ${1 - depth * 0.12})`,
                          backgroundColor: `rgba(14, 165, 233, ${0.06 - depth * 0.008})`,
                        }}
                      >
                        {item.label}
                      </div>
                    ))}
                  </motion.div>
                )
              })}
            </div>

            {/* Depth indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-slate-500 italic max-w-lg mx-auto">
                "A prototype typically presents the happy path. The real product consists of
                a vast combination of states — empty, loading, error, permission, edge cases,
                responsive breakpoints, i18n, abnormal network conditions..."
              </p>
            </motion.div>
          </motion.div>

          {/* Ratio indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2 }}
            className="mt-12 flex justify-center gap-12"
          >
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-proto-400">4</div>
              <div className="text-xs text-slate-500 mt-1">visible items</div>
            </div>
            <div className="text-center text-2xl text-slate-600 self-center">vs</div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-ocean-400">15+</div>
              <div className="text-xs text-slate-500 mt-1">hidden concerns</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
