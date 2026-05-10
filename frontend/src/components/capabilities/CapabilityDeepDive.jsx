import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, TrendingUp, Users, DollarSign, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    client: 'TechFlow AI',
    industry: 'B2B SaaS',
    service: 'Performance Marketing',
    challenge: 'Stagnant growth at $800K ARR with high CAC and poor quality leads from existing paid campaigns.',
    solution: 'Complete paid media overhaul using our AI audience intelligence engine, multi-variant creative testing, and LinkedIn ABM targeting for enterprise accounts.',
    result: 'Scaled to $4.2M ARR in 6 months with 67% lower CAC and 3.2x higher lead quality score.',
    metrics: [
      { icon: TrendingUp, label: 'ARR Growth', value: '+425%' },
      { icon: DollarSign, label: 'CAC Reduction', value: '-67%' },
      { icon: Users, label: 'Lead Quality', value: '+3.2x' },
      { icon: Zap, label: 'Time to Value', value: '6 Months' },
    ],
    color: '#1A4A7A',
  },
  {
    client: 'EliteCommerce',
    industry: 'E-Commerce',
    service: 'SEO & Performance',
    challenge: 'Zero organic presence and 100% dependence on paid traffic with ROAS declining to 1.8x.',
    solution: 'Built complete SEO authority in core product categories while simultaneously restructuring Meta and Google campaigns with AI bidding and creative automation.',
    result: 'Organic traffic became #1 acquisition channel (40% of revenue) and paid ROAS scaled to 8.7x.',
    metrics: [
      { icon: TrendingUp, label: 'ROAS', value: '8.7x' },
      { icon: DollarSign, label: 'Organic Revenue Share', value: '40%' },
      { icon: Users, label: 'Traffic Growth', value: '+280%' },
      { icon: Zap, label: 'Revenue Impact', value: '$12M+' },
    ],
    color: '#2C6E49',
  },
  {
    client: 'Nexus Finance',
    industry: 'FinTech',
    service: 'Brand + Content + Social',
    challenge: 'Unknown brand in a crowded market with poor content strategy and near-zero social presence.',
    solution: 'Category design strategy positioning them as the "founder-first fintech," paired with a 12-month thought leadership content program and LinkedIn community building.',
    result: 'Became recognized category leader with 58K LinkedIn followers, 22% inbound pipeline increase, and Series B raise attributing APEX brand work as key investor pull.',
    metrics: [
      { icon: TrendingUp, label: 'LinkedIn Followers', value: '58K+' },
      { icon: DollarSign, label: 'Inbound Pipeline', value: '+22%' },
      { icon: Users, label: 'Brand Recognition', value: '#1 Category' },
      { icon: Zap, label: 'Series B Raised', value: '$40M' },
    ],
    color: '#1A4A7A',
  },
]

function CaseStudyCard({ study, isActive, onClick }) {
  return (
    <button
      className="w-full text-left p-5 rounded-2xl transition-all duration-300"
      style={{
        background: isActive ? `${study.color}08` : '#FFFFFF',
        border: `1px solid ${isActive ? study.color + '25' : '#E5E5E5'}`,
        boxShadow: isActive ? `0 2px 8px ${study.color}08` : '0 1px 2px rgba(0,0,0,0.02)',
      }}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-sm text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}80)` }}
        >
          {study.client[0]}
        </div>
        <div className="text-left">
          <div className="font-display font-bold text-sm text-[#1A1A1A]">{study.client}</div>
          <div className="text-xs text-[#8A8A8A]">
            {study.industry} · {study.service}
          </div>
        </div>
      </div>
    </button>
  )
}

export default function CapabilityDeepDive() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const study = caseStudies[activeIndex]

  return (
    <section
      className="section-padding"
      style={{
        background: '#FFFFFF',
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
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
              Capability in Action
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4 text-[#1A1A1A]">
            Real results from
            <span className="text-gradient"> real campaigns</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto text-[#5A5A5A]">
            Not projections. Not promises. Verified outcomes from active client engagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar: case study selector */}
          <div className="flex flex-col gap-3">
            {caseStudies.map((s, i) => (
              <CaseStudyCard
                key={s.client}
                study={s}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* Main: case study detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl overflow-hidden h-full"
                style={{
                  background: `linear-gradient(135deg, ${study.color}04, #FFFFFF)`,
                  border: `1px solid ${study.color}15`,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                <div className="p-8 lg:p-10">
                  {/* Client header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-2xl text-white"
                      style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}80)` }}
                    >
                      {study.client[0]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-[#1A1A1A]">{study.client}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                          style={{ background: `${study.color}10`, color: study.color }}
                        >
                          {study.industry}
                        </span>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-mono"
                          style={{
                            background: '#F8F9FA',
                            border: '1px solid #E5E5E5',
                            color: '#8A8A8A',
                          }}
                        >
                          {study.service}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Challenge / Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <span
                        className="font-mono text-xs tracking-widest uppercase mb-3 block text-[#8A8A8A]"
                      >
                        Challenge
                      </span>
                      <p className="text-sm leading-relaxed text-[#5A5A5A]">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <span
                        className="font-mono text-xs tracking-widest uppercase mb-3 block text-[#8A8A8A]"
                      >
                        Our Solution
                      </span>
                      <p className="text-sm leading-relaxed text-[#5A5A5A]">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Result headline */}
                  <div
                    className="p-5 rounded-2xl mb-8"
                    style={{
                      background: `${study.color}06`,
                      border: `1px solid ${study.color}12`,
                    }}
                  >
                    <span
                      className="font-mono text-xs tracking-widest uppercase mb-2 block font-medium"
                      style={{ color: study.color }}
                    >
                      Outcome
                    </span>
                    <p className="text-base font-display font-semibold text-[#1A1A1A] leading-relaxed">
                      {study.result}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {study.metrics.map(({ icon: MIcon, label, value }) => (
                      <div
                        key={label}
                        className="text-center p-4 rounded-2xl"
                        style={{
                          background: '#F8F9FA',
                          border: '1px solid #E5E5E5',
                        }}
                      >
                        <div
                          className="font-display font-black text-2xl mb-1"
                          style={{ color: study.color }}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-[#8A8A8A]">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/verified-outcomes"
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group"
                    style={{ color: study.color }}
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}