import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { value: 847, suffix: '%', label: 'Average Client ROI', sub: 'Across all active engagements', color: '#1A4A7A' },
  { value: 5, suffix: 'B+', prefix: '$', label: 'Revenue Generated', sub: 'For clients in 2023–2024', color: '#2C6E49' },
  { value: 98, suffix: '%', label: 'Client Retention Rate', sub: 'After the first 6 months', color: '#1A4A7A' },
  { value: 200, suffix: '+', label: 'Brands Scaled', sub: 'Across 14 industries', color: '#2C6E49' },
  { value: 340, suffix: '%', prefix: '+', label: 'Avg. Organic Growth', sub: 'In first 12 months', color: '#1A4A7A' },
  { value: 67, suffix: '%', prefix: '-', label: 'Avg. CAC Reduction', sub: 'Via AI-optimized funnels', color: '#2C6E49' },
]

export default function OutcomesStats() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A0F, #0D0D15, #0A0A0F)' }}
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="container-custom" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(26,74,122,0.12)', border: '1px solid rgba(26,74,122,0.25)' }}
          >
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#1A4A7A' }}>
              Aggregate Metrics
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            The numbers across
            <span className="text-gradient"> our entire portfolio</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="relative p-8 rounded-3xl text-center group overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                borderColor: `${s.color}35`,
                background: `${s.color}05`,
                y: -4,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 100%, ${s.color}10 0%, transparent 60%)`,
                }}
              />
              <div className="relative z-10">
                <div
                  className="text-5xl lg:text-6xl font-display font-black mb-3"
                  style={{ color: s.color }}
                >
                  {s.prefix || ''}
                  {inView && (
                    <CountUp end={s.value} duration={2.5} delay={i * 0.08} separator="," />
                  )}
                  {s.suffix}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-1">{s.label}</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}