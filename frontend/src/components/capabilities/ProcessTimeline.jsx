import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ClipboardList,
  Lightbulb,
  Code2,
  FlaskConical,
  BarChart3,
  Repeat2,
} from 'lucide-react'

const timeline = [
  {
    phase: 'Discover',
    duration: 'Days 1–5',
    icon: ClipboardList,
    color: '#1A4A7A',
    tasks: ['Business deep-dive', 'Market & competitor analysis', 'Data & tracking audit', 'Opportunity scoring'],
  },
  {
    phase: 'Strategize',
    duration: 'Days 6–10',
    icon: Lightbulb,
    color: '#2C6E49',
    tasks: ['Custom growth roadmap', 'Channel selection matrix', 'Budget architecture', 'OKR framework'],
  },
  {
    phase: 'Build',
    duration: 'Days 11–21',
    icon: Code2,
    color: '#1A4A7A',
    tasks: ['Campaign structure build', 'Creative production', 'Tracking implementation', 'Dashboard setup'],
  },
  {
    phase: 'Launch',
    duration: 'Day 22–30',
    icon: FlaskConical,
    color: '#2C6E49',
    tasks: ['Soft launch & QA', 'Initial performance data', 'First optimization round', 'Weekly cadence start'],
  },
  {
    phase: 'Optimize',
    duration: 'Month 2–3',
    icon: BarChart3,
    color: '#1A4A7A',
    tasks: ['A/B test cycles', 'Budget reallocation', 'Creative refreshes', 'Audience expansion'],
  },
  {
    phase: 'Scale',
    duration: 'Month 4+',
    icon: Repeat2,
    color: '#2C6E49',
    tasks: ['Scale winning channels', 'New channel expansion', 'Advanced automation', 'Quarterly strategy review'],
  },
]

export default function ProcessTimeline() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      className="section-padding overflow-hidden"
      style={{ background: '#F8F9FA' }}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(26,74,122,0.08)',
              border: '1px solid rgba(26,74,122,0.15)',
            }}
          >
            <span className="font-mono text-xs tracking-widest uppercase font-semibold"
              style={{ color: '#1A4A7A' }}>
              Engagement Timeline
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4 text-[#1A1A1A]">
            From sign-off to
            <span className="text-gradient"> scale in 30 days</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#5A5A5A]">
            A precise timeline engineered for speed without sacrificing strategy.
            Here's exactly what happens when you partner with APEX.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line connector on desktop */}
          <div className="absolute top-16 left-0 right-0 h-px hidden lg:block"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(26,74,122,0.15), rgba(44,110,73,0.15), transparent)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {timeline.map((phase, i) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.phase}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Phase icon */}
                  <motion.div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-4 z-10 bg-white"
                    style={{
                      background: '#FFFFFF',
                      border: `1px solid ${phase.color}30`,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                    whileHover={{
                      background: `${phase.color}04`,
                      borderColor: `${phase.color}40`,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={24} style={{ color: phase.color }} />
                  </motion.div>

                  {/* Phase label */}
                  <div
                    className="inline-flex items-center justify-center px-3 py-1 rounded-full mb-3"
                    style={{
                      background: `${phase.color}08`,
                      border: `1px solid ${phase.color}15`,
                    }}
                  >
                    <span className="font-mono text-xs font-medium" style={{ color: phase.color }}>
                      {phase.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-[#1A1A1A] mb-3">
                    {phase.phase}
                  </h3>

                  {/* Tasks */}
                  <ul className="flex flex-col gap-1.5">
                    {phase.tasks.map((task) => (
                      <li key={task} className="text-xs text-[#8A8A8A]">
                        {task}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}