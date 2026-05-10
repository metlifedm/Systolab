import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'

export default function CTASection({
  title = 'Ready to grow beyond limits?',
  subtitle = "Join 200+ elite brands scaling with APEX Digital's AI-powered growth systems.",
  primaryLabel = 'Start Your Project',
  primaryPath = '/initiate',
  secondaryLabel = 'View Case Studies',
  secondaryPath = '/verified-outcomes',
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} className={`section-padding ${className}`} style={{ background: '#FFFFFF' }}>
      <div className="container-custom">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center"
          style={{
            background: 'linear-gradient(135deg, #F0F5FF 0%, #EFF8F3 50%, #F0F5FF 100%)',
            border: '1px solid rgba(26,74,122,0.12)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(26,74,122,0.06) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(44,110,73,0.1)', border: '1px solid rgba(44,110,73,0.2)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#2C6E49' }}>
                Limited Spots Available
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-display font-black mb-6 leading-tight"
              style={{ color: '#1A1A1A' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {title.split(' ').slice(0, Math.ceil(title.split(' ').length / 2)).join(' ')}{' '}
              <span className="text-gradient">
                {title.split(' ').slice(Math.ceil(title.split(' ').length / 2)).join(' ')}
              </span>
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto"
              style={{ color: '#5A5A5A' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Link to={primaryPath} className="btn-primary text-base px-8 py-4">
                <Zap size={18} /><span>{primaryLabel}</span><ArrowRight size={18} />
              </Link>
              <Link to={secondaryPath} className="btn-secondary text-base px-8 py-4">
                {secondaryLabel}
              </Link>
            </motion.div>

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
                  <Icon size={15} style={{ color: '#1A4A7A' }} />
                  <span className="text-sm" style={{ color: '#8A8A8A' }}>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}