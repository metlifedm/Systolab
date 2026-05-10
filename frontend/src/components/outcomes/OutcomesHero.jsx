import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight, CheckCircle } from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const verifications = [
  'Third-party audited data',
  'Real client businesses',
  'No cherry-picked metrics',
  'Full attribution transparency',
]

export default function OutcomesHero() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24"
      style={{ background: '#FFFFFF' }}
    >
      <AnimatedBackground variant="accent" particleCount={35} />

      {/* Decorative number grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {['847%', '8.7x', '$5B+', '200+', '98%', '+340%'].map((n, i) => (
          <motion.div
            key={i}
            className="absolute font-display font-black select-none"
            style={{
              fontSize: `${Math.random() * 60 + 40}px`,
              color: i % 2 === 0 ? 'rgba(26,74,122,0.06)' : 'rgba(44,110,73,0.06)',
              left: `${(i % 3) * 33 + Math.random() * 10}%`,
              top: `${Math.floor(i / 3) * 40 + 10 + Math.random() * 20}%`,
            }}
            animate={{ opacity: [0.03, 0.07, 0.03] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          >
            {n}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container-custom text-center" ref={ref}>
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              background: 'rgba(44,110,73,0.08)',
              border: '1px solid rgba(44,110,73,0.2)',
            }}
          >
            <Shield size={13} style={{ color: '#2C6E49' }} />
            <span className="font-mono text-xs tracking-widest uppercase font-semibold" style={{ color: '#2C6E49' }}>
              100% Verified Data
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-tight tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-[#1A1A1A]">Numbers that</span>
          <span className="block text-[#1A1A1A]">don't lie.</span>
          <span className="block text-gradient">Results that last.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-[#5A5A5A]"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Every metric you see on this page is sourced from real client accounts,
          independently audited, and verified against third-party attribution platforms.
          No projections. No hypotheticals.
        </motion.p>

        {/* Verification list */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {verifications.map((v) => (
            <div key={v} className="flex items-center gap-2">
              <CheckCircle size={14} style={{ color: '#2C6E49' }} />
              <span className="text-sm text-[#8A8A8A]">{v}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="/initiate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
              boxShadow: '0 8px 20px rgba(26,74,122,0.2)',
            }}
          >
            <span>Get These Results</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}