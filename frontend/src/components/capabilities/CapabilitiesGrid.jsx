import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  Target,
  Search,
  Palette,
  PenTool,
  Share2,
  BarChart2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const capabilities = [
  {
    icon: Target,
    title: 'Performance Marketing',
    tagline: 'Revenue-first paid media',
    description:
      'AI-optimized campaigns across Google, Meta, LinkedIn, TikTok, and programmatic channels. We engineer paid systems that acquire customers profitably and scale without diminishing returns.',
    highlights: [
      'Google Ads & Shopping',
      'Meta / Instagram Campaigns',
      'LinkedIn B2B Programs',
      'Programmatic Display',
      'Native & Sponsored Content',
      'YouTube & Video Ads',
    ],
    kpis: ['ROAS', 'CPA', 'CAC', 'LTV:CAC'],
    featured: true,
    size: 'large',
    color: '#1A4A7A',
    gradient: 'linear-gradient(135deg, rgba(26,74,122,0.2) 0%, rgba(37,99,235,0.08) 100%)',
    result: '8.7x Average ROAS',
  },
  {
    icon: Search,
    title: 'SEO & Authority',
    tagline: 'Own your search category',
    description:
      'Technical SEO infrastructure, content authority programs, and high-DA link acquisition that compound into dominant search positions across commercial keywords.',
    highlights: [
      'Technical SEO Audits',
      'Content Cluster Strategy',
      'Link Building & Digital PR',
      'Core Web Vitals',
      'International SEO',
      'E-E-A-T Optimization',
    ],
    kpis: ['Rankings', 'Organic Traffic', 'Share of Voice', 'Authority Score'],
    featured: false,
    size: 'medium',
    color: '#2C6E49',
    gradient: 'linear-gradient(135deg, rgba(44,110,73,0.2) 0%, rgba(44,110,73,0.05) 100%)',
    result: '+340% Organic Traffic',
  },
  {
    icon: Palette,
    title: 'Brand Architecture',
    tagline: 'Commands attention. Demands premium.',
    description:
      'Positioning strategy, visual identity, and messaging systems that create category leadership and unlock pricing power in competitive markets.',
    highlights: [
      'Brand Strategy & Positioning',
      'Visual Identity Systems',
      'Brand Voice & Messaging',
      'Category Design',
      'Brand Audit',
      'Launch Playbooks',
    ],
    kpis: ['Brand Recall', 'NPS Score', 'Share of Voice', 'Premium Pricing Index'],
    featured: false,
    size: 'medium',
    color: '#1A4A7A',
    gradient: 'linear-gradient(135deg, rgba(26,74,122,0.15) 0%, rgba(26,74,122,0.03) 100%)',
    result: '3.2x Brand Recall',
  },
  {
    icon: PenTool,
    title: 'Content Systems',
    tagline: 'Scale quality without scaling cost',
    description:
      'AI-amplified content operations that produce high-quality, strategic content at the velocity needed to dominate search and social simultaneously.',
    highlights: [
      'AI-Assisted Production',
      'Thought Leadership Programs',
      'Video & Multimedia',
      'Content Distribution',
      'Repurposing Systems',
      'Performance Content',
    ],
    kpis: ['Content Velocity', 'Engagement Rate', 'Content-Sourced Revenue', 'Time-on-Page'],
    featured: false,
    size: 'medium',
    color: '#2C6E49',
    gradient: 'linear-gradient(135deg, rgba(44,110,73,0.15) 0%, rgba(44,110,73,0.03) 100%)',
    result: '12M+ Monthly Impressions',
  },
  {
    icon: Share2,
    title: 'Social Media Growth',
    tagline: 'Build audiences that convert',
    description:
      'Platform-native social strategies that grow engaged communities, build brand equity, and generate measurable pipeline through organic and paid social.',
    highlights: [
      'Instagram & TikTok Growth',
      'LinkedIn B2B Strategy',
      'Creator Partnerships',
      'Community Management',
      'Social Commerce',
      'Viral Content Systems',
    ],
    kpis: ['Follower Growth', 'Engagement Rate', 'Social Revenue', 'Community Health Score'],
    featured: false,
    size: 'medium',
    color: '#1A4A7A',
    gradient: 'linear-gradient(135deg, rgba(26,74,122,0.15) 0%, rgba(26,74,122,0.03) 100%)',
    result: '+580% Engagement Rate',
  },
  {
    icon: BarChart2,
    title: 'Growth Analytics',
    tagline: 'Clarity in every data point',
    description:
      'Custom analytics infrastructure, real-time dashboards, and AI-powered business intelligence that turns data into decisive action and competitive advantage.',
    highlights: [
      'Custom Dashboard Builds',
      'Multi-Touch Attribution',
      'Cohort & LTV Analysis',
      'Predictive Analytics',
      'Funnel Intelligence',
      'Automated Reporting',
    ],
    kpis: ['Attribution Accuracy', 'Revenue Visibility', 'Decision Speed', 'Data Coverage'],
    featured: true,
    size: 'large',
    color: '#2C6E49',
    gradient: 'linear-gradient(135deg, rgba(44,110,73,0.2) 0%, rgba(44,110,73,0.06) 100%)',
    result: '98% Data Accuracy',
  },
]

function CapabilityCard({ cap, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [hovered, setHovered] = useState(false)
  const Icon = cap.icon

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-3xl overflow-hidden group ${
        cap.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      style={{
        background: hovered ? cap.gradient : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? cap.color + '35' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full"
        style={{
          background: `radial-gradient(circle, ${cap.color}12 0%, transparent 70%)`,
        }}
        animate={hovered ? { scale: 1.5, opacity: 1 } : { scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.4 }}
      />

      <div className={`relative z-10 p-8 ${cap.size === 'large' ? 'lg:p-10' : ''}`}>
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${cap.color}20`,
              border: `1px solid ${cap.color}30`,
            }}
          >
            <Icon size={26} style={{ color: cap.color }} />
          </div>
          <div
            className="px-3 py-1.5 rounded-full"
            style={{
              background: `${cap.color}12`,
              border: `1px solid ${cap.color}20`,
            }}
          >
            <span className="font-mono text-xs" style={{ color: cap.color }}>
              {cap.result}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: cap.color }}>
          {cap.tagline}
        </p>
        <h3 className="text-2xl font-display font-bold text-white mb-3">
          {cap.title}
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {cap.description}
        </p>

        {/* Highlights grid */}
        <div className={`grid gap-2 mb-6 ${cap.size === 'large' ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2'}`}>
          {cap.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2">
              <CheckCircle2 size={13} style={{ color: cap.color, flexShrink: 0 }} />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{h}</span>
            </div>
          ))}
        </div>

        {/* KPI tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cap.kpis.map((kpi) => (
            <span
              key={kpi}
              className="px-3 py-1 rounded-full text-xs font-mono"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              {kpi}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          to="/initiate"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link"
          style={{ color: cap.color }}
        >
          <span>Start with {cap.title}</span>
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function CapabilitiesGrid() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section-padding" style={{ background: '#0A0A0F' }}>
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
              background: 'rgba(26,74,122,0.12)',
              border: '1px solid rgba(26,74,122,0.25)',
            }}
          >
            <span className="font-mono text-xs tracking-widest uppercase"
              style={{ color: '#1A4A7A' }}>
              All Capabilities
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-6">
            The complete
            <span className="text-gradient"> growth arsenal</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Every service is designed to generate measurable returns.
            Deploy one, deploy all — each amplifies the others.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}