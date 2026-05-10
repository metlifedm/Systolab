import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  Target,
  Search,
  Palette,
  PenTool,
  Share2,
  BarChart2,
  ArrowRight,
  Zap,
} from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const serviceIcons = [Target, Search, Palette, PenTool, Share2, BarChart2]

export default function CapabilitiesHero() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24"
      style={{ background: '#0A0A0F' }}
    >
      <AnimatedBackground variant="hero" particleCount={40} />

      {/* Orbiting icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {serviceIcons.map((Icon, i) => {
          const angle = (i / serviceIcons.length) * Math.PI * 2
          const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 260
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={i}
              className="absolute w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: 'rgba(26,74,122,0.12)',
                border: '1px solid rgba(26,74,122,0.2)',
                x,
                y,
              }}
              animate={{
                rotate: [0, 360],
                x: [
                  Math.cos(angle) * radius,
                  Math.cos(angle + Math.PI * 2) * radius,
                ],
                y: [
                  Math.sin(angle) * radius,
                  Math.sin(angle + Math.PI * 2) * radius,
                ],
              }}
              transition={{
                duration: 25 + i * 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Icon size={18} style={{ color: 'rgba(26,74,122,0.8)' }} />
            </motion.div>
          )
        })}
      </div>

      <div className="relative z-10 container-custom text-center" ref={ref}>
        {/* Eyebrow */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              background: 'rgba(26,74,122,0.12)',
              border: '1px solid rgba(26,74,122,0.25)',
            }}
          >
            <Zap size={13} style={{ color: '#1A4A7A' }} />
            <span className="font-mono text-xs tracking-widest uppercase"
              style={{ color: '#1A4A7A' }}>
              Full-Stack Capabilities
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
          <span className="block text-white">Six disciplines.</span>
          <span className="block text-white">One unified</span>
          <span className="block text-gradient">growth engine.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Every capability we offer is designed to work in isolation — and amplify
          every other service when combined. This is what integrated growth looks like.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/initiate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
              boxShadow: '0 20px 40px rgba(26,74,122,0.3)',
            }}
          >
            <span>Build My Capability Stack</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/verified-outcomes"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium"
            style={{
              color: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <span>View Results</span>
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2 mx-auto"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="w-1 h-2.5 rounded-full"
              style={{ background: 'rgba(26,74,122,0.8)' }}
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}