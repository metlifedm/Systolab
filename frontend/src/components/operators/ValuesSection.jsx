import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Flame, Shield, Zap, Heart } from 'lucide-react'

const values = [
  { icon: Target, title: 'Outcomes Over Activities', description: 'We measure ourselves by revenue generated, not reports delivered. Every action must connect to a measurable result.', color: '#1A4A7A' },
  { icon: Eye, title: 'Radical Transparency', description: 'No hidden metrics, no spin. We tell clients exactly what\'s working, what isn\'t, and precisely why — even when it\'s uncomfortable.', color: '#2C6E49' },
  { icon: Flame, title: 'Relentless Iteration', description: 'Markets move fast. We move faster. Continuous testing, learning, and optimization is built into every engagement, not offered as an add-on.', color: '#1A4A7A' },
  { icon: Shield, title: 'Client Data Integrity', description: 'Your data, strategies, and IP are sacred. SOC 2 compliant infrastructure, strict NDAs, and ethical data practices protect everything we touch.', color: '#2C6E49' },
  { icon: Zap, title: 'Speed as Strategy', description: 'In digital, speed is a competitive advantage. We move with urgency at every stage — without sacrificing quality or strategic thinking.', color: '#1A4A7A' },
  { icon: Heart, title: 'Partnership, Not Vendor', description: 'We don\'t have clients. We have partners. When you win, we win. This shared stake model drives everything from how we structure fees to how we celebrate results.', color: '#2C6E49' },
]

export default function ValuesSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(180deg,#0A0A0F,#0D0D15,#0A0A0F)' }}
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(26,74,122,0.12)', border: '1px solid rgba(26,74,122,0.25)' }}
          >
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#1A4A7A' }}>
              Our Values
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            The principles we operate by
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            These aren't aspirational wall posters. They're the operating system every decision, hire, and client interaction runs on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                className="relative p-8 rounded-3xl group overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -5,
                  borderColor: `${v.color}30`,
                  background: `${v.color}05`,
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${v.color}12 0%, transparent 60%)` }}
                />
                <div
                  className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${v.color}15`, border: `1px solid ${v.color}25` }}
                >
                  <Icon size={24} style={{ color: v.color }} />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {v.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}