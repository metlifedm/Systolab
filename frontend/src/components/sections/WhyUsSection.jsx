import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Brain,
  BarChart3,
  Layers,
  Globe2,
  Lock,
  Rocket,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const pillars = [
  {
    icon: Brain,
    title: 'AI-Native Intelligence',
    description:
      'Every campaign, content piece, and strategy is built on our proprietary AI engine — trained on billions of data points across 40+ industries.',
    color: '#1A4A7A',
    tag: 'Proprietary Tech',
  },
  {
    icon: BarChart3,
    title: 'Verified Performance',
    description:
      'No vanity metrics. We track revenue impact, LTV, CAC, and pipeline velocity. Every result is third-party audited and verifiable.',
    color: '#2C6E49',
    tag: 'Data-Driven',
  },
  {
    icon: Layers,
    title: 'Full-Stack Growth',
    description:
      'From brand architecture to conversion systems, SEO to paid media — we operate as an integrated growth department, not a siloed vendor.',
    color: '#1A4A7A',
    tag: 'End-to-End',
  },
  {
    icon: Globe2,
    title: 'Global Reach, Local Precision',
    description:
      'Active in 40+ countries with hyper-local audience intelligence. We build campaigns that resonate across cultures and convert at every touchpoint.',
    color: '#2C6E49',
    tag: 'Global Scale',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description:
      'SOC 2 compliant, GDPR ready, and built for brands that can\'t afford mistakes. Your data and strategies remain 100% confidential.',
    color: '#1A4A7A',
    tag: 'SOC 2 Certified',
  },
  {
    icon: Rocket,
    title: 'Speed to Results',
    description:
      'We launch in days, not months. Our battle-tested playbooks compress years of trial-and-error into a predictable growth machine from day one.',
    color: '#2C6E49',
    tag: '30-Day Launch',
  },
]

function PillarCard({ pillar, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const Icon = pillar.icon

  return (
    <motion.div
      ref={ref}
      className="relative p-8 rounded-3xl group cursor-default overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E5E5E5',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        borderColor: `${pillar.color}40`,
        background: '#FFFFFF',
        boxShadow: '0 12px 32px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
        transition: { duration: 0.3 },
      }}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${pillar.color}08 0%, transparent 60%)`,
        }}
      />

      {/* Tag */}
      <div
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-6"
        style={{
          background: `${pillar.color}10`,
          border: `1px solid ${pillar.color}20`,
        }}
      >
        <span className="font-mono text-xs font-medium" style={{ color: pillar.color }}>
          {pillar.tag}
        </span>
      </div>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${pillar.color}08`,
          border: `1px solid ${pillar.color}15`,
        }}
      >
        <Icon size={26} style={{ color: pillar.color }} />
      </div>

      <h3 className="text-xl font-display font-bold text-[#1A1A1A] mb-3">
        {pillar.title}
      </h3>
      <p className="text-sm leading-relaxed text-[#5A5A5A]">
        {pillar.description}
      </p>

      {/* Bottom line accent */}
      <motion.div
        className="absolute bottom-0 left-8 right-8 h-[1px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${pillar.color}30, transparent)`,
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 + index * 0.08 }}
      />
    </motion.div>
  )
}

export default function WhyUsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section-padding" style={{ background: '#F8F9FA' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            ref={ref}
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
              <span className="font-mono text-xs tracking-widest uppercase font-semibold" style={{ color: '#1A4A7A' }}>
                Why APEX
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-black leading-tight text-[#1A1A1A]">
              Built different.
              <br />
              <span className="text-gradient">Built to win.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg leading-relaxed mb-8 text-[#5A5A5A]">
              Most agencies sell deliverables. We sell outcomes. Our obsessive focus
              on measurable revenue impact, combined with AI-native infrastructure,
              creates an unfair advantage for every client we partner with.
            </p>
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200 group"
              style={{ color: '#1A4A7A' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#2563EB' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#1A4A7A' }}
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}