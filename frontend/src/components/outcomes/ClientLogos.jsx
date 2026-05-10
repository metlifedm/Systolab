import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const clients = [
  { name: 'TechFlow AI', abbr: 'TF', color: '#1A4A7A' },
  { name: 'EliteCommerce', abbr: 'EC', color: '#2C6E49' },
  { name: 'Nexus Finance', abbr: 'NF', color: '#1A4A7A' },
  { name: 'CloudCore', abbr: 'CC', color: '#2C6E49' },
  { name: 'VoxBrand', abbr: 'VB', color: '#1A4A7A' },
  { name: 'DataVault', abbr: 'DV', color: '#2C6E49' },
  { name: 'ScaleUp Pro', abbr: 'SP', color: '#1A4A7A' },
  { name: 'FusionBrand', abbr: 'FB', color: '#2C6E49' },
  { name: 'PeakGrowth', abbr: 'PG', color: '#1A4A7A' },
  { name: 'VortexSaaS', abbr: 'VS', color: '#2C6E49' },
  { name: 'BridgeCap', abbr: 'BC', color: '#1A4A7A' },
  { name: 'OmniReach', abbr: 'OR', color: '#2C6E49' },
]

export default function ClientLogos() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-4 text-[#B0B0B0]">
            Trusted by 200+ brands worldwide
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-black text-[#1A1A1A]">
            Industry leaders choose
            <span className="text-gradient"> APEX</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl group cursor-default transition-all duration-300"
              style={{
                background: '#F8F9FA',
                border: '1px solid #E5E5E5',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{
                background: `${c.color}04`,
                borderColor: `${c.color}25`,
                y: -3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-sm text-white"
                style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}80)` }}
              >
                {c.abbr}
              </div>
              <span className="text-xs text-center leading-tight text-[#8A8A8A]">
                {c.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}