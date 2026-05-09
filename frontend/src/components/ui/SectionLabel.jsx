import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionLabel({ text, icon: Icon, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${className}`}
      style={{
        background: 'rgba(26, 74, 122, 0.12)',
        border: '1px solid rgba(26, 74, 122, 0.25)',
      }}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {Icon && <Icon size={14} style={{ color: '#1A4A7A' }} />}
      <span
        className="font-mono text-xs tracking-widest uppercase font-medium"
        style={{ color: 'rgba(26, 74, 122, 0.9)' }}
      >
        {text}
      </span>
    </motion.div>
  )
}