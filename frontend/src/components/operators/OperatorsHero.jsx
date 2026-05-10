import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Users, Award, Globe2, ArrowRight } from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const stats = [
  { icon: Users, val: '42', label: 'Elite Operators' },
  { icon: Award, val: '8+', label: 'Avg Years Experience' },
  { icon: Globe2, val: '14', label: 'Countries Represented' },
]

export default function OperatorsHero() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24"
      style={{ background: '#0A0A0F' }}
    >
      <AnimatedBackground variant="minimal" particleCount={30} />

      <div className="relative z-10 container-custom text-center" ref={ref}>
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{ background: 'rgba(26,74,122,0.12)', border: '1px solid rgba(26,74,122,0.25)' }}
          >
            <Users size={13} style={{ color: '#1A4A7A' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#1A4A7A' }}>
              The Team
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-tight tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-white">Specialists, not</span>
          <span className="block text-white">generalists.</span>
          <span className="block text-gradient">Elite, not average.</span>
        </motion.h1>

        <motion.p
          className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          APEX is built on the principle that great results require great people.
          Every operator on our team is a specialist with deep vertical expertise,
          proven track records, and an obsession with measurable outcomes.
        </motion.p>

        {/* Stat badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {stats.map(({ icon: Icon, val, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(26,74,122,0.15)', border: '1px solid rgba(26,74,122,0.25)' }}
              >
                <Icon size={16} style={{ color: '#1A4A7A' }} />
              </div>
              <div className="text-left">
                <div className="font-display font-black text-xl text-white">{val}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</div>
              </div>
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
            style={{ background: 'linear-gradient(135deg,#1A4A7A,#2563EB)', boxShadow: '0 20px 40px rgba(26,74,122,0.3)' }}
          >
            <span>Work With Our Team</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}