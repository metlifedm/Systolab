import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const techCategories = [
  {
    title: 'Analytics & Data',
    color: '#1A4A7A',
    tools: [
      { name: 'Google Analytics 4', abbr: 'GA4' },
      { name: 'Mixpanel', abbr: 'MX' },
      { name: 'Amplitude', abbr: 'AMP' },
      { name: 'Segment', abbr: 'SEG' },
      { name: 'Looker Studio', abbr: 'LS' },
      { name: 'Tableau', abbr: 'TAB' },
    ],
  },
  {
    title: 'Paid Media',
    color: '#2C6E49',
    tools: [
      { name: 'Google Ads', abbr: 'GAD' },
      { name: 'Meta Ads', abbr: 'META' },
      { name: 'LinkedIn Ads', abbr: 'LI' },
      { name: 'TikTok Ads', abbr: 'TT' },
      { name: 'DV360', abbr: 'DV' },
      { name: 'The Trade Desk', abbr: 'TTD' },
    ],
  },
  {
    title: 'AI & Automation',
    color: '#1A4A7A',
    tools: [
      { name: 'OpenAI GPT-4', abbr: 'GPT' },
      { name: 'Anthropic Claude', abbr: 'ANT' },
      { name: 'Jasper AI', abbr: 'JAS' },
      { name: 'Make.com', abbr: 'MK' },
      { name: 'Zapier', abbr: 'ZAP' },
      { name: 'HubSpot', abbr: 'HS' },
    ],
  },
  {
    title: 'SEO & Content',
    color: '#2C6E49',
    tools: [
      { name: 'Ahrefs', abbr: 'AHR' },
      { name: 'SEMrush', abbr: 'SEM' },
      { name: 'Surfer SEO', abbr: 'SRF' },
      { name: 'Screaming Frog', abbr: 'SF' },
      { name: 'Clearscope', abbr: 'CS' },
      { name: 'Frase', abbr: 'FRS' },
    ],
  },
]

function TechCard({ category, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="relative p-6 rounded-2xl overflow-hidden group"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E5E5E5',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        borderColor: `${category.color}30`,
        background: `${category.color}02`,
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: category.color }}
        />
        <span
          className="font-mono text-xs tracking-widest uppercase font-medium"
          style={{ color: '#8A8A8A' }}
        >
          {category.title}
        </span>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-3 gap-2">
        {category.tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            className="flex flex-col items-center justify-center p-3 rounded-xl text-center group/tool transition-all duration-200 cursor-default"
            style={{
              background: '#F8F9FA',
              border: '1px solid #E5E5E5',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.04 }}
            whileHover={{
              background: `${category.color}08`,
              borderColor: `${category.color}20`,
              y: -2,
            }}
            title={tool.name}
          >
            <span
              className="font-mono font-bold text-xs mb-1"
              style={{ color: category.color }}
            >
              {tool.abbr}
            </span>
            <span
              className="text-[10px] leading-tight"
              style={{ color: '#8A8A8A' }}
            >
              {tool.name.split(' ')[0]}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function TechStackSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      className="section-padding"
      style={{
        background: '#F8F9FA',
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
              Tech Infrastructure
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-6 text-[#1A1A1A]">
            Powered by the
            <br />
            <span className="text-gradient">world's best tools</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#5A5A5A]">
            Our technology stack combines 24+ best-in-class platforms orchestrated
            by our proprietary AI layer for maximum performance.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {techCategories.map((cat, i) => (
            <TechCard key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { label: '24+', sub: 'Premium Tools' },
            { label: '99.9%', sub: 'Platform Uptime' },
            { label: '< 24h', sub: 'Campaign Launch' },
            { label: 'Real-Time', sub: 'Performance Data' },
          ].map(({ label, sub }) => (
            <div
              key={sub}
              className="text-center p-5 rounded-2xl"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E5E5',
                boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
              }}
            >
              <div className="text-2xl font-display font-black text-[#1A1A1A] mb-1">{label}</div>
              <div className="text-xs font-mono text-[#8A8A8A]">{sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}