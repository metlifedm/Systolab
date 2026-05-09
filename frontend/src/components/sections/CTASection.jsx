import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'

export default function CTASection({
  title = "Ready to grow beyond limits?",
  subtitle = "Join 200+ elite brands scaling with APEX Digital's AI-powered growth systems.",
  primaryLabel = "Start Your Project",
  primaryPath = "/initiate",
  secondaryLabel = "View Case Studies",
  secondaryPath = "/verified-outcomes",
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className={`section-padding ${className}`}
    >
      <div className="container-custom">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'linear-gradient(135deg, rgba(26, 74, 122, 0.2) 0%, rgba(44, 110, 73, 0.15) 50%, rgba(26, 74, 122, 0.1) 100%)',
            border: '1px solid rgba(26, 74, 122, 0.3)',
          }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(26, 74, 122, 0.3) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(44, 110, 73, 0.2) 0%, transparent 70%)',
              }}
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(44, 110, 73, 0.15)',
                border: '1px solid rgba(44, 110, 73, 0.3)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase"
                style={{ color: 'rgba(44, 110, 73, 0.9)' }}>
                Limited Spots Available
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {title.split(' ').map((word, i) => (
                <span
                  key={i}
                  className={i >= Math.floor(title.split(' ').length / 2) ? 'text-gradient' : ''}
                >
                  {word}{' '}
                </span>
              ))}
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to={primaryPath}
                className="btn-primary flex items-center gap-2 px-8 py-4 text-base"
              >
                <Zap size={18} />
                <span>{primaryLabel}</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to={secondaryPath}
                className="btn-secondary flex items-center gap-2 px-8 py-4 text-base"
              >
                <span>{secondaryLabel}</span>
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Shield, text: 'No long-term contracts' },
                { icon: Clock, text: 'Results in 30 days' },
                { icon: Zap, text: 'AI-powered from day 1' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={16} style={{ color: 'rgba(26, 74, 122, 0.8)' }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}