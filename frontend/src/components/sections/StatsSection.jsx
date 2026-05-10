import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { TrendingUp, Users, Award, Zap } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: 847, suffix: '%', label: 'Average ROI', description: 'Delivered across client portfolios', color: '#1A4A7A' },
  { icon: Users, value: 200, suffix: '+', label: 'Elite Clients', description: 'Industry leaders served globally', color: '#2C6E49' },
  { icon: Award, value: 98, suffix: '%', label: 'Retention Rate', description: 'Clients who stay and scale', color: '#1A4A7A' },
  { icon: Zap, value: 5, suffix: 'B+', label: 'Revenue Generated', description: 'In verified client outcomes', color: '#2C6E49' },
]

export default function StatsSection({ className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className={`section-padding ${className}`}
      style={{ background: '#F8F9FA' }}
    >
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="tag-success mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Verified Numbers
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4" style={{ color: '#1A1A1A' }}>
            Results that <span className="text-gradient">speak volumes</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5A5A5A' }}>
            Every number is audited, verified, and backed by real client data from our portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="relative p-8 rounded-3xl group card-light text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                  style={{
                    background: `${stat.color}10`,
                    border: `1px solid ${stat.color}20`,
                  }}
                >
                  <Icon size={22} style={{ color: stat.color }} />
                </div>

                <div className="mb-2">
                  {inView && (
                    <span className="text-5xl font-display font-black" style={{ color: '#1A1A1A' }}>
                      <CountUp end={stat.value} duration={2.5} delay={i * 0.1} separator="," />
                      <span style={{ color: stat.color }}>{stat.suffix}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-base mb-1" style={{ color: '#1A1A1A' }}>
                  {stat.label}
                </h3>
                <p className="text-sm" style={{ color: '#8A8A8A' }}>{stat.description}</p>

                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.color}40, transparent)` }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}