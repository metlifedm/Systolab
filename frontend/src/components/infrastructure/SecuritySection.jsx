import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Lock, Eye, FileCheck, Globe2, Server } from 'lucide-react'

const certs = [
  { icon: Shield, title: 'SOC 2 Type II', desc: 'Annual third-party security audits covering availability, confidentiality, and processing integrity.', color: '#1A4A7A' },
  { icon: Globe2, title: 'GDPR Compliant', desc: 'Full GDPR compliance across all EU client data processing, storage, and transfer operations.', color: '#2C6E49' },
  { icon: Lock, title: 'AES-256 Encryption', desc: 'Military-grade encryption for all data at rest and in transit across our entire infrastructure.', color: '#1A4A7A' },
  { icon: Eye, title: 'Isolated Environments', desc: 'Each client operates in a fully isolated data environment. Cross-account data access is architecturally impossible.', color: '#2C6E49' },
  { icon: FileCheck, title: 'NDA Standard', desc: 'Comprehensive NDAs signed with every engagement. Your strategies, data, and IP remain exclusively yours.', color: '#1A4A7A' },
  { icon: Server, title: '99.9% Uptime SLA', desc: 'Enterprise-grade infrastructure with redundant systems, automated failovers, and guaranteed uptime commitments.', color: '#2C6E49' },
]

export default function SecuritySection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section-padding" style={{ background: '#0A0A0F' }}>
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
            style={{ background: 'rgba(44,110,73,0.12)', border: '1px solid rgba(44,110,73,0.25)' }}
          >
            <Shield size={13} style={{ color: '#2C6E49' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#2C6E49' }}>
              Security & Compliance
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            Enterprise-grade
            <span className="text-gradient"> security by default</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Your data, strategies, and intellectual property are protected by the
            highest security standards in the industry — with zero compromises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                className="p-7 rounded-3xl group"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, borderColor: `${c.color}25`, background: `${c.color}04` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}
                >
                  <Icon size={22} style={{ color: c.color }} />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{c.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}