import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Target,
  Search,
  Palette,
  PenTool,
  Share2,
  BarChart2,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    id: 'performance',
    icon: Target,
    number: '01',
    title: 'Performance Marketing',
    tagline: 'Pay for results, not clicks',
    description:
      'AI-driven paid media across Google, Meta, LinkedIn, and programmatic channels. We optimize for revenue, not vanity metrics — every dollar works harder.',
    features: [
      'Multi-platform campaign architecture',
      'AI bid optimization & audience sculpting',
      'Real-time creative testing (A/B/n)',
      'Attribution modeling & LTV tracking',
      'Cross-channel ROAS maximization',
    ],
    metric: '8.7x',
    metricLabel: 'Avg. ROAS',
    color: '#1A4A7A',
    gradient: 'linear-gradient(135deg, rgba(26,74,122,0.15), rgba(37,99,235,0.08))',
  },
  {
    id: 'seo',
    icon: Search,
    number: '02',
    title: 'SEO & Authority Building',
    tagline: 'Own your category online',
    description:
      'Technical SEO, content authority systems, and digital PR that compound over time. We build search moats that competitors can\'t buy their way past.',
    features: [
      'Technical site architecture audits',
      'Topical authority content systems',
      'High-DA link acquisition',
      'E-E-A-T optimization',
      'AI-assisted content scaling',
    ],
    metric: '+340%',
    metricLabel: 'Organic Traffic',
    color: '#2C6E49',
    gradient: 'linear-gradient(135deg, rgba(44,110,73,0.15), rgba(44,110,73,0.05))',
  },
  {
    id: 'brand',
    icon: Palette,
    number: '03',
    title: 'Brand Architecture',
    tagline: 'Brands that command premium',
    description:
      'From positioning strategy to visual identity systems — we build brand ecosystems that create category leadership and pricing power in competitive markets.',
    features: [
      'Brand strategy & positioning',
      'Visual identity & design systems',
      'Brand voice & messaging frameworks',
      'Category design & market positioning',
      'Brand audit & competitive analysis',
    ],
    metric: '3.2x',
    metricLabel: 'Brand Recall',
    color: '#1A4A7A',
    gradient: 'linear-gradient(135deg, rgba(26,74,122,0.15), rgba(26,74,122,0.05))',
  },
  {
    id: 'content',
    icon: PenTool,
    number: '04',
    title: 'Content Systems',
    tagline: 'Scale content without scaling headcount',
    description:
      'AI-amplified content operations that produce high-quality, high-volume content designed to rank, engage, and convert across every stage of the funnel.',
    features: [
      'AI-assisted content production',
      'Thought leadership programs',
      'Video & multimedia strategies',
      'Content distribution systems',
      'Performance content optimization',
    ],
    metric: '12M+',
    metricLabel: 'Monthly Impressions',
    color: '#2C6E49',
    gradient: 'linear-gradient(135deg, rgba(44,110,73,0.15), rgba(44,110,73,0.05))',
  },
  {
    id: 'social',
    icon: Share2,
    number: '05',
    title: 'Social Media Growth',
    tagline: 'Turn followers into revenue',
    description:
      'Data-driven social strategies that build community, drive engagement, and convert audiences into customers across Instagram, LinkedIn, TikTok, and X.',
    features: [
      'Platform-specific growth strategies',
      'Organic & paid social integration',
      'Creator & influencer networks',
      'Community building systems',
      'Social commerce optimization',
    ],
    metric: '+580%',
    metricLabel: 'Engagement Rate',
    color: '#1A4A7A',
    gradient: 'linear-gradient(135deg, rgba(26,74,122,0.15), rgba(26,74,122,0.05))',
  },
  {
    id: 'analytics',
    icon: BarChart2,
    number: '06',
    title: 'Growth Analytics',
    tagline: 'Clarity in every data point',
    description:
      'Custom analytics infrastructure, real-time dashboards, and business intelligence that gives leadership teams the clarity to make faster, better decisions.',
    features: [
      'Custom KPI dashboard builds',
      'Multi-touch attribution models',
      'Cohort & LTV analysis',
      'Predictive analytics systems',
      'Executive reporting automation',
    ],
    metric: '98%',
    metricLabel: 'Data Accuracy',
    color: '#2C6E49',
    gradient: 'linear-gradient(135deg, rgba(44,110,73,0.15), rgba(44,110,73,0.05))',
  },
]

function ServiceCard({ service, index, isActive, onClick }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl cursor-pointer group overflow-hidden"
      style={{
        background: isActive ? service.gradient : 'rgba(255,255,255,0.02)',
        border: `1px solid ${isActive ? service.color + '40' : 'rgba(255,255,255,0.05)'}`,
        transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      whileHover={{ y: isActive ? 0 : -3 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={{
                background: isActive ? `${service.color}25` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${isActive ? service.color + '35' : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              <Icon size={20} style={{ color: isActive ? service.color : 'rgba(255,255,255,0.4)' }} />
            </div>
            <div>
              <span
                className="font-mono text-xs block mb-0.5"
                style={{ color: isActive ? service.color : 'rgba(255,255,255,0.2)' }}
              >
                {service.number}
              </span>
              <h3
                className="font-display font-bold text-base transition-colors"
                style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.7)' }}
              >
                {service.title}
              </h3>
            </div>
          </div>
          <ChevronRight
            size={18}
            className="transition-transform duration-300 flex-shrink-0"
            style={{
              color: isActive ? service.color : 'rgba(255,255,255,0.15)',
              transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          />
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm leading-relaxed mb-5 pt-2"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm"
                    style={{ color: 'rgba(255,255,255,0.55)' }}>
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: service.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Metric + CTA */}
              <div className="flex items-center justify-between">
                <div
                  className="px-4 py-2 rounded-xl"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}25`,
                  }}
                >
                  <div className="font-display font-black text-xl" style={{ color: service.color }}>
                    {service.metric}
                  </div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    {service.metricLabel}
                  </div>
                </div>
                <Link
                  to="/capabilities"
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link"
                  style={{ color: service.color }}
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function ServicesOverview() {
  const [activeId, setActiveId] = useState('performance')
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
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              Core Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-black mb-6">
            Every service,
            <br />
            <span className="text-gradient">built to compound</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Six integrated disciplines working together as one growth system.
            Each service amplifies the others, creating compounding returns over time.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              isActive={activeId === service.id}
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(26,74,122,0.15)'
              e.currentTarget.style.borderColor = 'rgba(26,74,122,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
          >
            <span>Explore All Capabilities</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}