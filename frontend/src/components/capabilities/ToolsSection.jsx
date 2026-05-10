import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const toolRows = [
  {
    label: 'Analytics',
    tools: ['Google Analytics 4', 'Mixpanel', 'Amplitude', 'Heap', 'Segment', 'Looker', 'Tableau', 'BigQuery'],
    color: '#1A4A7A',
    speed: 28,
  },
  {
    label: 'Paid Media',
    tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Pinterest', 'Snapchat', 'DV360', 'The Trade Desk', 'Amazon DSP'],
    color: '#2C6E49',
    speed: 22,
    reverse: true,
  },
  {
    label: 'AI & Automation',
    tools: ['OpenAI GPT-4o', 'Claude 3.5', 'Gemini', 'Jasper AI', 'Copy.ai', 'Zapier', 'Make', 'HubSpot', 'Salesforce'],
    color: '#1A4A7A',
    speed: 32,
  },
]

export default function ToolsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      className="section-padding overflow-hidden"
      style={{
        background: '#FFFFFF',
      }}
    >
      <div className="container-custom mb-16">
        <motion.div
          ref={ref}
          className="text-center"
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
              Our Tech Stack
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4 text-[#1A1A1A]">
            Powered by
            <span className="text-gradient"> elite tooling</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto text-[#5A5A5A]">
            30+ premium platforms integrated into a unified intelligence layer.
          </p>
        </motion.div>
      </div>

      {/* Scrolling tool rows */}
      <div className="flex flex-col gap-6">
        {toolRows.map((row, rowIndex) => (
          <motion.div
            key={row.label}
            className="relative"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: rowIndex * 0.15 }}
          >
            {/* Row label */}
            <div className="container-custom mb-3">
              <span className="font-mono text-xs tracking-widest uppercase text-[#B0B0B0]">
                — {row.label}
              </span>
            </div>

            {/* Scrolling pills */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 whitespace-nowrap"
                style={{
                  animation: `marquee ${row.speed}s linear infinite ${row.reverse ? 'reverse' : ''}`,
                }}
              >
                {[...row.tools, ...row.tools, ...row.tools].map((tool, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl"
                    style={{
                      background: '#F8F9FA',
                      border: '1px solid #E5E5E5',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: row.color }}
                    />
                    <span className="text-sm font-medium text-[#5A5A5A]">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fade edges */}
            <div
              className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"
              style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }}
            />
            <div
              className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"
              style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom capability count */}
      <motion.div
        className="container-custom mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: '30+', label: 'Integrated Platforms' },
            { n: '6', label: 'Core Capabilities' },
            { n: '200+', label: 'Clients Served' },
            { n: '5B+', label: 'Revenue Influenced' },
          ].map(({ n, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl"
              style={{
                background: '#F8F9FA',
                border: '1px solid #E5E5E5',
              }}
            >
              <div className="text-3xl font-display font-black text-[#1A1A1A] mb-1">{n}</div>
              <div className="text-xs font-mono text-[#8A8A8A]">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}