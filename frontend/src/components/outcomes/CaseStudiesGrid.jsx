import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, DollarSign, Zap, Star } from 'lucide-react'

const filters = ['All', 'SaaS', 'E-Commerce', 'FinTech', 'Enterprise', 'Consumer']

const cases = [
  {
    client: 'TechFlow AI',
    industry: 'SaaS',
    logo: 'TF',
    service: 'Performance Marketing + SEO',
    headline: 'From $800K to $4.2M ARR in 6 months',
    description: 'Full-funnel paid acquisition overhaul combined with technical SEO authority build transformed TechFlow from stagnant to hyper-growth.',
    metrics: [
      { icon: TrendingUp, val: '+425%', label: 'ARR Growth' },
      { icon: DollarSign, val: '-67%', label: 'CAC' },
      { icon: Users, val: '3.2x', label: 'Lead Quality' },
      { icon: Zap, val: '6mo', label: 'Timeline' },
    ],
    color: '#1A4A7A',
    featured: true,
    rating: 5,
    quote: 'APEX didn\'t just run campaigns — they rebuilt our entire growth architecture.',
    author: 'Sarah Chen, CEO',
  },
  {
    client: 'EliteCommerce',
    industry: 'E-Commerce',
    logo: 'EC',
    service: 'Paid Media + SEO',
    headline: '8.7x ROAS and 40% organic revenue share',
    description: 'Restructured Meta and Google campaigns with AI-bidding while building organic search moat across 200+ commercial keywords.',
    metrics: [
      { icon: TrendingUp, val: '8.7x', label: 'ROAS' },
      { icon: DollarSign, val: '40%', label: 'Organic Share' },
      { icon: Users, val: '+280%', label: 'Traffic' },
      { icon: Zap, val: '$12M+', label: 'Revenue' },
    ],
    color: '#2C6E49',
    featured: false,
    rating: 5,
    quote: 'The ROAS improvement alone paid for APEX 40x over.',
    author: 'Marcus Rodriguez, Founder',
  },
  {
    client: 'Nexus Finance',
    industry: 'FinTech',
    logo: 'NF',
    service: 'Brand + Content + Social',
    headline: 'Zero to category leader with $40M Series B',
    description: 'Category design strategy, thought leadership content, and LinkedIn community building turned an unknown fintech into an investor magnet.',
    metrics: [
      { icon: TrendingUp, val: '58K+', label: 'LinkedIn Followers' },
      { icon: DollarSign, val: '+22%', label: 'Inbound Pipeline' },
      { icon: Users, val: '#1', label: 'Category Rank' },
      { icon: Zap, val: '$40M', label: 'Series B' },
    ],
    color: '#1A4A7A',
    featured: false,
    rating: 5,
    quote: 'Our Series B investors cited our thought leadership as a key signal.',
    author: 'Priya Sharma, CMO',
  },
  {
    client: 'CloudCore',
    industry: 'Enterprise',
    logo: 'CC',
    service: 'Full-Stack Growth',
    headline: '+340% pipeline growth across all channels',
    description: 'End-to-end growth system deployment: enterprise ABM on LinkedIn, technical SEO, content authority, and custom analytics infrastructure.',
    metrics: [
      { icon: TrendingUp, val: '+340%', label: 'Pipeline' },
      { icon: DollarSign, val: '2.1x', label: 'Deal Size' },
      { icon: Users, val: '-45%', label: 'Sales Cycle' },
      { icon: Zap, val: '$28M', label: 'New ARR' },
    ],
    color: '#2C6E49',
    featured: false,
    rating: 5,
    quote: 'Best ROI decision we made in three years of operations.',
    author: 'James Wright, VP Growth',
  },
  {
    client: 'VoxBrand',
    industry: 'Consumer',
    logo: 'VB',
    service: 'Social + Content',
    headline: '580% engagement growth and $3M social revenue',
    description: 'Platform-native content strategy and creator partnership network drove explosive social growth and converted audiences directly to revenue.',
    metrics: [
      { icon: TrendingUp, val: '+580%', label: 'Engagement' },
      { icon: DollarSign, val: '$3M+', label: 'Social Revenue' },
      { icon: Users, val: '220K+', label: 'New Followers' },
      { icon: Zap, val: '4mo', label: 'Timeline' },
    ],
    color: '#1A4A7A',
    featured: false,
    rating: 5,
    quote: 'Our social channels became our #1 revenue source. Remarkable.',
    author: 'Aisha Johnson, CMO',
  },
  {
    client: 'DataVault',
    industry: 'SaaS',
    logo: 'DV',
    service: 'SEO + Analytics',
    headline: 'From page 5 to #1 for 120 commercial keywords',
    description: 'Aggressive technical SEO and topical authority content build dominated enterprise data storage search category within 9 months.',
    metrics: [
      { icon: TrendingUp, val: '#1', label: 'Keyword Rankings' },
      { icon: DollarSign, val: '+190%', label: 'Organic Revenue' },
      { icon: Users, val: '120+', label: 'Keywords Won' },
      { icon: Zap, val: '9mo', label: 'Timeline' },
    ],
    color: '#2C6E49',
    featured: false,
    rating: 5,
    quote: 'We went from invisible to undeniable in our search category.',
    author: 'Ryan Park, Growth Lead',
  },
]

function CaseCard({ c, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-3xl overflow-hidden group ${c.featured ? 'md:col-span-2' : ''}`}
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${c.color}10, rgba(255,255,255,0.01))`
          : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? c.color + '30' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Glow blob */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${c.color}15 0%, transparent 70%)`,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className={`relative z-10 p-8 ${c.featured ? 'lg:p-10' : ''}`}>
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-white text-lg"
              style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}80)` }}
            >
              {c.logo}
            </div>
            <div>
              <div className="font-display font-bold text-white">{c.client}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{ background: `${c.color}15`, color: c.color }}
                >
                  {c.industry}
                </span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{c.service}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            {Array(c.rating).fill(0).map((_, i) => (
              <Star key={i} size={12} fill="#D4AF37" style={{ color: '#D4AF37' }} />
            ))}
          </div>
        </div>

        {/* Headline */}
        <h3 className={`font-display font-bold text-white mb-3 leading-tight ${c.featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
          {c.headline}
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {c.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {c.metrics.map(({ icon: MIcon, val, label }) => (
            <div
              key={label}
              className="p-3 rounded-xl text-center"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div className="font-display font-black text-lg mb-0.5" style={{ color: c.color }}>
                {val}
              </div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          className="p-4 rounded-2xl mb-6 italic"
          style={{
            background: `${c.color}08`,
            border: `1px solid ${c.color}15`,
          }}
        >
          <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>"{c.quote}"</p>
          <span className="text-xs font-mono" style={{ color: c.color }}>— {c.author}</span>
        </div>

        <Link
          to="/initiate"
          className="inline-flex items-center gap-2 text-sm font-semibold group/link"
          style={{ color: c.color }}
        >
          <span>Get Similar Results</span>
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function CaseStudiesGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const filtered = activeFilter === 'All'
    ? cases
    : cases.filter((c) => c.industry === activeFilter)

  return (
    <section className="section-padding" style={{ background: '#0A0A0F' }}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(26,74,122,0.12)', border: '1px solid rgba(26,74,122,0.25)' }}
          >
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#1A4A7A' }}>
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            Every industry.
            <span className="text-gradient"> Every outcome.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Deep-dive into verified client transformations across multiple industries and growth stages.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: activeFilter === f ? 'linear-gradient(135deg,#1A4A7A,#2563EB)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${activeFilter === f ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
                  color: activeFilter === f ? 'white' : 'rgba(255,255,255,0.5)',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((c, i) => (
              <CaseCard key={c.client} c={c} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}