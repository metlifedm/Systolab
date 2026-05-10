import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Search,
  Lightbulb,
  Rocket,
  BarChart3,
  RefreshCw,
  ArrowDown,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Audit',
    duration: 'Week 1',
    description:
      'Deep-dive into your business, market position, competitive landscape, and growth blockers. We leave no stone unturned in understanding exactly where you are and where you need to go.',
    deliverables: ['Market analysis report', 'Competitor intelligence brief', 'Growth opportunity map', 'KPI baseline audit'],
    color: '#1A4A7A',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy Architecture',
    duration: 'Week 2',
    description:
      'We build a custom growth blueprint using our AI-powered strategy engine. Every channel, tactic, and budget allocation is data-validated before a single dollar is spent.',
    deliverables: ['90-day growth roadmap', 'Channel prioritization matrix', 'Budget allocation model', 'OKR framework setup'],
    color: '#2C6E49',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Rapid Deployment',
    duration: 'Week 3–4',
    description:
      'Lightning-fast campaign launch across all approved channels simultaneously. Our team executes with military precision — coordinated, sequenced, and optimized from day one.',
    deliverables: ['Campaign infrastructure live', 'Creative assets deployed', 'Tracking & analytics configured', 'Baseline performance data'],
    color: '#1A4A7A',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Performance Optimization',
    duration: 'Ongoing',
    description:
      'Continuous AI-driven optimization cycles that improve performance week over week. We identify winning patterns and scale them ruthlessly while eliminating wasteful spend.',
    deliverables: ['Weekly performance reports', 'A/B test results', 'Budget reallocation', 'Creative refreshes'],
    color: '#2C6E49',
  },
  {
    number: '05',
    icon: RefreshCw,
    title: 'Scale & Compound',
    duration: 'Month 2+',
    description:
      'Once we\'ve proven what works, we pour fuel on the fire. Winning strategies get scaled aggressively while we simultaneously build new growth vectors for sustained momentum.',
    deliverables: ['Scale plan execution', 'New channel expansion', 'Advanced automation build', 'Quarterly strategy review'],
    color: '#1A4A7A',
  },
]

function StepCard({ step, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const Icon = step.icon
  const isEven = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Content - alternates sides */}
      <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${step.color}10`,
              border: `1px solid ${step.color}20`,
            }}
          >
            <Icon size={24} style={{ color: step.color }} />
          </div>
          <div>
            <span
              className="font-mono text-xs tracking-widest font-medium"
              style={{ color: step.color }}
            >
              {step.number} — {step.duration}
            </span>
            <h3 className="text-2xl font-display font-bold text-[#1A1A1A] mt-0.5">
              {step.title}
            </h3>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-6 text-[#5A5A5A]">
          {step.description}
        </p>

        {/* Deliverables */}
        <div>
          <span
            className="font-mono text-xs tracking-widest uppercase mb-3 block text-[#8A8A8A]"
          >
            Deliverables
          </span>
          <div className="grid grid-cols-2 gap-2">
            {step.deliverables.map((d) => (
              <div
                key={d}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                style={{
                  background: '#F8F9FA',
                  border: '1px solid #E5E5E5',
                  color: '#5A5A5A',
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: step.color }}
                />
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual card */}
      <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
        <motion.div
          className="relative w-full max-w-md"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${step.color}06, #FFFFFF)`,
              border: `1px solid ${step.color}20`,
              boxShadow: '0 4px 16px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)',
            }}
          >
            {/* Grid pattern inside card */}
            <div className="absolute inset-0 grid-pattern opacity-10 rounded-3xl" />

            {/* Large number */}
            <div
              className="absolute -top-4 -right-4 font-display font-black text-[8rem] leading-none select-none pointer-events-none"
              style={{ color: `${step.color}06` }}
            >
              {step.number}
            </div>

            {/* Icon centered */}
            <div className="relative z-10 flex flex-col items-center text-center py-8">
              <motion.div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)`,
                  border: `1px solid ${step.color}20`,
                  boxShadow: `0 8px 20px ${step.color}08`,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
              >
                <Icon size={36} style={{ color: step.color }} />
              </motion.div>

              <h4 className="text-xl font-display font-bold text-[#1A1A1A] mb-2">
                {step.title}
              </h4>
              <div
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full"
                style={{
                  background: `${step.color}08`,
                  border: `1px solid ${step.color}15`,
                }}
              >
                <span className="font-mono text-sm font-medium" style={{ color: step.color }}>
                  {step.duration}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Connector arrow (not on last) */}
      {index < steps.length - 1 && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} style={{ color: '#C0C0C0' }} />
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

export default function ProcessSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: '#FFFFFF',
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(26,74,122,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-48 bottom-48 -translate-x-1/2 w-px hidden lg:block">
        <motion.div
          className="h-full w-full"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(26,74,122,0.25), rgba(44,110,73,0.25), transparent)',
          }}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              Our Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-black mb-6 text-[#1A1A1A]">
            From zero to
            <br />
            <span className="text-gradient">market dominance</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#5A5A5A]">
            A proven 5-phase system refined across 200+ engagements.
            Predictable, repeatable, and designed to compound results over time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-28">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}