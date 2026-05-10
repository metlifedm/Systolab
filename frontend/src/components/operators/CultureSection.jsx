import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const perks = [
  { emoji: '🌍', label: '100% Remote', desc: 'Work from anywhere in the world' },
  { emoji: '📈', label: 'Profit Share', desc: 'Everyone benefits when clients win' },
  { emoji: '🎓', label: '$5K Learning Budget', desc: 'Annual personal development fund' },
  { emoji: '⏱️', label: 'Async-First', desc: 'Flexible hours, results-oriented' },
  { emoji: '🏖️', label: 'Unlimited PTO', desc: 'Take the time you need to recharge' },
  { emoji: '💻', label: 'Full Tech Stack', desc: 'Best-in-class tools provided' },
]

export default function CultureSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(26,74,122,0.08)', border: '1px solid rgba(26,74,122,0.15)' }}
            >
              <span className="font-mono text-xs tracking-widest uppercase font-semibold" style={{ color: '#1A4A7A' }}>
                Life at APEX
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-black mb-6 leading-tight text-[#1A1A1A]">
              A culture built for
              <span className="text-gradient"> exceptional people</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-[#5A5A5A]">
              We've intentionally designed an environment where elite specialists can do their best work —
              with the autonomy, resources, and collaboration they need to produce world-class results.
            </p>
            <p className="text-lg leading-relaxed text-[#5A5A5A]">
              Remote since day one. Async-first by design. Results-obsessed always.
              We hire the best and trust them to deliver — because great people don't need micromanagement.
            </p>
          </motion.div>

          {/* Right: Perks */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {perks.map((p, i) => (
              <motion.div
                key={p.label}
                className="p-5 rounded-2xl group transition-all duration-300"
                style={{
                  background: '#F8F9FA',
                  border: '1px solid #E5E5E5',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                whileHover={{
                  background: `${p.label === '100% Remote' ? '#1A4A7A' : '#2C6E49'}04`,
                  borderColor: `${p.label === '100% Remote' ? '#1A4A7A' : '#2C6E49'}20`,
                  y: -3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div className="text-3xl mb-3">{p.emoji}</div>
                <div className="font-display font-bold text-[#1A1A1A] text-sm mb-1">{p.label}</div>
                <div className="text-xs text-[#8A8A8A]">{p.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}