import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'expression-shift', label: 'Core Insight' },
  { id: 'iceberg', label: 'Iceberg' },
  { id: 'spatial-temporal', label: 'Spatial vs Temporal' },
  { id: 'semantic-gap', label: 'Semantic Gap' },
  { id: 'comparison', label: 'Comparison' },
  { id: 'illusion', label: 'Risks' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'recommendation', label: 'Way Forward' },
  { id: 'conclusion', label: 'Verdict' },
]

export default function Navigation() {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setVisible(latest > 0.03)
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-figma-500 via-ocean-500 to-proto-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Side navigation dots */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group flex items-center gap-2"
          >
            <span
              className={`text-[10px] transition-all duration-200 ${
                activeSection === section.id
                  ? 'opacity-100 text-white translate-x-0'
                  : 'opacity-0 text-slate-400 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {section.label}
            </span>
            <div
              className={`rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'w-3 h-3 bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                  : 'w-2 h-2 bg-slate-600 group-hover:bg-slate-400'
              }`}
            />
          </button>
        ))}
      </motion.nav>
    </>
  )
}
