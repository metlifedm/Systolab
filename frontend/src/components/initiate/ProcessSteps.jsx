import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Search, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  { icon: MessageCircle, number: '01', title: 'Submit Your Brief', desc: 'Fill out the form above with as much detail as possible about your business, goals, and challenges.', color: '#1A4A7A', time: '5 minutes' },
  { icon: Search, number: '02', title: 'We Diagnose', desc: 'A senior strategist reviews your brief, analyzes your market, and prepares a custom growth assessment.', color: '#2C6E49', time: 'Within 2 hours' },
  { icon: Rocket, number: '03', title: 'Strategy Session', desc: 'We connect on WhatsApp or a video call to walk you through our diagnosis and proposed growth system.', color: '#1A4A7A', time: 'Day 1–3' },
  { icon: TrendingUp, number: '04', title: 'Launch & Grow', desc: 'Once aligned, we deploy your custom growth engine and begin generating measurable results within 30 days.', color: '#2C6E49', time: 'Day 22–30' },
]

export default function ProcessSteps() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      className="py-24"
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
          <h2 className="text-3xl lg:text-4xl font-display font-black mb-4">
            What happens after
            <span className="text-gradient"> you submit</span>
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
            A transparent, predictable process from hello to results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.number}
                className="relative p-7 rounded-3xl text-center"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, borderColor: `${s.color}30`, background: `${s.color}05` }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
                >
                  <Icon size={26} style={{ color: s.color }} />
                </motion.div>
                <div className="font-mono text-xs mb-2" style={{ color: s.color }}>{s.number} — {s.time}</div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}