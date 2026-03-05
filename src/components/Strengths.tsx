import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Users, Lightbulb, Rocket } from 'lucide-react'

const strengths = [
  {
    icon: Sparkles,
    title: 'High-Fidelity Validation',
    description: 'Quickly judge whether a solution works under real information density, scroll behavior, animations, and task flows.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Users,
    title: 'Cross-Role Communication',
    description: 'More persuasive for PMs, stakeholders, and executives. The "feels like the real thing" quality bridges the imagination gap.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Designer Self-Verification',
    description: 'Designers can touch runnable behavior earlier, discovering interaction logic issues, data dependencies, and implementation friction.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: Rocket,
    title: 'Concept Selling & Vision',
    description: 'During exploration or proposal phases, these prototypes are ideal for aligning direction and selling a vision.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
]

export default function Strengths() {
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
          <span className="text-sm font-medium text-emerald-400 tracking-widest uppercase">
            Where Prototypes Shine
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          Real Advantages
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          The question isn't whether to use AI-generated prototypes.
          It's whether to elevate them to be the <em>primary handoff deliverable</em>.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {strengths.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`rounded-2xl ${item.bg} border ${item.border} p-6 group cursor-default`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 max-w-lg mx-auto italic">
            "The structural problem is not <em>whether</em> to use AI-generated prototypes,
            but whether they should be upgraded to serve as the primary handoff deliverable."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
