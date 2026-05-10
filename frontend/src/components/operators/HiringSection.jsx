import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const openRoles = [
  { title: 'Senior Paid Media Strategist', type: 'Full-time', location: 'Remote', color: '#1A4A7A' },
  { title: 'AI Content Operations Lead', type: 'Full-time', location: 'Remote', color: '#2C6E49' },
  { title: 'Technical SEO Specialist', type: 'Full-time', location: 'Remote', color: '#1A4A7A' },
  { title: 'Growth Analytics Engineer', type: 'Full-time', location: 'Remote', color: '#2C6E49' },
]

export default function HiringSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(180deg,#0A0A0F,#0D0D15,#0A0A0F)' }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(44,110,73,0.12)', border: '1px solid rgba(44,110,73,0.25)' }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#2C6E49' }}>
                We're Hiring
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-black mb-6 leading-tight">
              Join the team building the
              <span className="text-gradient"> future of growth</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              We're selective about who joins APEX. If you're world-class at what you do,
              obsessed with results, and thrive in an async remote environment —
              we want to talk.
            </p>
            <Link
              to="/initiate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg,#1A4A7A,#2563EB)',
                boxShadow: '0 15px 30px rgba(26,74,122,0.3)',
              }}
            >
              <span>Apply to Join APEX</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="flex flex-col gap-3">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                className="flex items-center justify-between p-6 rounded-2xl group cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{
                  background: `${role.color}08`,
                  borderColor: `${role.color}25`,
                  x: 4,
                }}
              >
                <div>
                  <h3 className="font-display font-bold text-white mb-1">{role.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                      style={{ background: `${role.color}15`, color: role.color }}>
                      {role.type}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{role.location}</span>
                  </div>
                </div>
                <ArrowRight size={18} style={{ color: role.color }}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}