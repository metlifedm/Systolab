<<<<<<< HEAD
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Clock, Shield, Zap } from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const trust = [
  { icon: Clock, text: '< 2hr Response' },
  { icon: Shield, text: 'No Obligation' },
  { icon: Zap, text: 'Same-Day Strategy' },
]

export default function InitiateHero() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-12"
      style={{ background: '#FFFFFF' }}
    >
      <AnimatedBackground variant="minimal" particleCount={25} />

      <div className="relative z-10 container-custom text-center" ref={ref}>
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{ background: 'rgba(44,110,73,0.08)', border: '1px solid rgba(44,110,73,0.2)' }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase font-semibold" style={{ color: '#2C6E49' }}>
              Currently Accepting Clients
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-black leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-[#1A1A1A]">Let's build your</span>
          <span className="block text-gradient">growth engine.</span>
        </motion.h1>

        <motion.p
          className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-[#5A5A5A]"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Fill out the brief below. We'll review your business and connect directly on WhatsApp
          with a custom growth strategy — no generic proposals, no wasted meetings.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {trust.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={15} style={{ color: '#2C6E49' }} />
              <span className="text-sm text-[#8A8A8A]">{text}</span>
            </div>
          ))}
        </motion.div>
=======
import SectionLabel from '../common/SectionLabel'

export default function InitiateHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-slate-200
        bg-white
      "
    >
      <div
        className="
          absolute
          inset-0
          grid-lines
          opacity-40
        "
      />

      <div className="container-custom relative z-10">

        <div
          className="
            mx-auto
            max-w-5xl
            py-28
            text-center
          "
        >
          <div className="flex justify-center">
            <SectionLabel
              label="Initiate an Engagement"
            />
          </div>

          <h1
            className="
              heading-lg
              mt-8
              font-black
              text-slate-950
            "
          >
            Every engagement
            begins with a diagnostic
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-xl
              leading-10
              text-slate-600
            "
          >
            Describe the operational issue
            affecting your business.

            <br />

            We will respond within
            one business day.
          </p>
        </div>
>>>>>>> 3d107c19fb3dc36207c067ebbff8996db537e0ae
      </div>
    </section>
  )
}