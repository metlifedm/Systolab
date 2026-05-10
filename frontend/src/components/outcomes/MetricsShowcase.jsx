import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const metricsData = [
  { category: 'Paid Media', metrics: [{ label: 'Best ROAS', val: '12.4x' }, { label: 'Avg ROAS', val: '8.7x' }, { label: 'CAC Reduction', val: '-67%' }, { label: 'CTR Lift', val: '+340%' }], color: '#1A4A7A' },
  { category: 'SEO', metrics: [{ label: 'Organic Growth', val: '+340%' }, { label: 'Keywords #1', val: '1,200+' }, { label: 'Domain Authority', val: '+38pts' }, { label: 'Avg Position Gain', val: '+44' }], color: '#2C6E49' },
  { category: 'Brand', metrics: [{ label: 'Brand Recall', val: '3.2x' }, { label: 'NPS Lift', val: '+62pts' }, { label: 'Share of Voice', val: '+28%' }, { label: 'Premium Pricing', val: '+23%' }], color: '#1A4A7A' },
  { category: 'Content', metrics: [{ label: 'Monthly Impressions', val: '12M+' }, { label: 'Content Velocity', val: '8x' }, { label: 'Avg Engagement', val: '7.4%' }, { label: 'Content Revenue', val: '$4.2M' }], color: '#2C6E49' },
]

export default function MetricsShowcase() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#0A0A0F,#0D0D15,#0A0A0F)' }}>
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(26,74,122,0.12)', border: '1px solid rgba(26,74,122,0.25)' }}
          >
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#1A4A7A' }}>
              Performance Benchmarks
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            Best-in-class metrics
            <span className="text-gradient"> across every discipline</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {metricsData.map((m, i) => (
            <motion.div
              key={m.category}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl p-8 overflow-hidden group"
              style2={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div
                className="relative rounded-3xl p-8 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${m.color}10 0%, transparent 60%)` }} />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full" style={{ background: m.color }} />
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {m.category}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {m.metrics.map(({ label, val }) => (
                    <div
                      key={label}
                      className="p-4 rounded-2xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <div className="text-3xl font-display font-black mb-1" style={{ color: m.color }}>{val}</div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}