import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Server, Shield, Zap, ArrowRight } from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function InfrastructureHero() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24"
      style={{ background: '#FFFFFF' }}
    >
      <AnimatedBackground variant="accent" particleCount={30} />

      {/* Decorative tech grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px"
            style={{
              left: `${(i + 1) * 11.5}%`,
              top: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, transparent, rgba(26,74,122,0.06), transparent)',
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 container-custom text-center" ref={ref}>
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{ background: 'rgba(26,74,122,0.08)', border: '1px solid rgba(26,74,122,0.15)' }}
          >
            <Server size={13} style={{ color: '#1A4A7A' }} />
            <span className="font-mono text-xs tracking-widest uppercase font-semibold" style={{ color: '#1A4A7A' }}>
              Growth Infrastructure
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-tight tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-[#1A1A1A]">Pricing, tech,</span>
          <span className="block text-[#1A1A1A]">and the systems</span>
          <span className="block text-gradient">powering your growth.</span>
        </motion.h1>

        <motion.p
          className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-[#5A5A5A]"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Transparent pricing. Enterprise-grade infrastructure. AI-native tooling.
          Everything behind how we deliver results at scale — without complexity.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-5 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: Shield, text: 'SOC 2 Certified' },
            { icon: Zap, text: 'AI-Native Stack' },
            { icon: Server, text: '99.9% Uptime SLA' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full"
              style={{ background: '#F8F9FA', border: '1px solid #E5E5E5' }}
            >
              <Icon size={14} style={{ color: '#1A4A7A' }} />
              <span className="text-sm text-[#5A5A5A]">{text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="/initiate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white"
            style={{ background: 'linear-gradient(135deg,#1A4A7A,#2563EB)', boxShadow: '0 8px 20px rgba(26,74,122,0.2)' }}
          >
            <span>Get Custom Pricing</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}