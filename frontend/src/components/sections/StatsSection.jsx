import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { TrendingUp, Users, Award, Zap } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: 847,
    suffix: '%',
    label: 'Average ROI',
    description: 'Delivered across client portfolios',
    color: '#1A4A7A',
  },
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: 'Elite Clients',
    description: 'Industry leaders served globally',
    color: '#2C6E49',
  },
  {
    icon: Award,
    value: 98,
    suffix: '%',
    label: 'Retention Rate',
    description: 'Clients who stay and scale',
    color: '#1A4A7A',
  },
  {
    icon: Zap,
    value: 5,
    suffix: 'B+',
    label: 'Revenue Generated',
    description: 'In verified client outcomes',
    color: '#2C6E49',
  },
]

export default function StatsSection({ className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} className={`section-padding ${className}`}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(26, 74, 122, 0.12)',
              border: '1px solid rgba(26, 74, 122, 0.25)',
            }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#2C6E49' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#2C6E49' }}>
              Verified Numbers
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Results that <span className="text-gradient">speak volumes</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Every number is audited, verified, and backed by real client data from our portfolio.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative p-8 rounded-2xl group hover-lift"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
                whileHover={{
                  borderColor: 'rgba(26, 74, 122, 0.3)',
                  background: 'rgba(26, 74, 122, 0.05)',
                }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${stat.color}10 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${stat.color}15`,
                    border: `1px solid ${stat.color}25`,
                  }}
                >
                  <Icon size={22} style={{ color: stat.color }} />
                </div>

                {/* Counter */}
                <div className="mb-2">
                  {inView && (
                    <span className="text-5xl font-display font-black text-white">
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        delay={i * 0.1}
                        separator=","
                      />
                      <span style={{ color: stat.color }}>{stat.suffix}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {stat.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.color}60, transparent)` }}
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