import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { AlertCircle, Clock, Eye, RefreshCw, ArrowRight } from 'lucide-react'

const problemMetrics = [
  {
    icon: AlertCircle,
    label: 'UNANSWERED INQUIRIES',
    value: '14',
    sub: 'needs attention',
    status: 'warn',
  },
  {
    icon: Clock,
    label: 'RESPONSE LATENCY',
    value: '18h 24m',
    sub: 'too high',
    status: 'warn',
  },
  {
    icon: Eye,
    label: 'VISIBILITY HEALTH',
    value: '64%',
    sub: 'degraded',
    status: 'error',
  },
  {
    icon: RefreshCw,
    label: 'WORKFLOW SYNC',
    value: '37%',
    sub: 'desynchronized',
    status: 'error',
  },
]

const statusColors = {
  warn: '#F59E0B',
  error: '#EF4444',
  ok: '#2C6E49',
}

function InfraGraphic() {
  const nodes = [
    { label: 'Interface', x: 50, y: 10, size: 'sm' },
    { label: 'Acquisition', x: 85, y: 28, size: 'sm' },
    { label: 'Workflow', x: 88, y: 52, size: 'sm' },
    { label: 'Intelligence', x: 80, y: 75, size: 'sm' },
    { label: 'Visibility', x: 30, y: 20, size: 'sm' },
    { label: 'Infrastructure', x: 50, y: 90, size: 'sm' },
  ]

  return (
    <div className="relative w-full h-80 lg:h-96">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 340" fill="none">
        {/* Connection lines */}
        {[
          [200, 170, 340, 95],
          [200, 170, 350, 175],
          [200, 170, 320, 255],
          [200, 170, 200, 34],
          [200, 170, 120, 68],
          [200, 170, 200, 306],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(26,74,122,0.15)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
          />
        ))}

        {/* Center cube (simplified) */}
        <motion.rect
          x="158" y="128" width="84" height="84" rx="16"
          fill="url(#cubeGrad)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        <defs>
          <linearGradient id="cubeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1A4A7A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        <text x="200" y="175" textAnchor="middle" fill="white" fontWeight="900" fontSize="28" fontFamily="Space Grotesk">A</text>

        {/* Satellite nodes */}
        {[
          { cx: 200, cy: 34, label: 'Interface' },
          { cx: 340, cy: 95, label: 'Acquisition' },
          { cx: 350, cy: 175, label: 'Workflow' },
          { cx: 320, cy: 255, label: 'Intelligence' },
          { cx: 120, cy: 68, label: 'Visibility' },
          { cx: 200, cy: 306, label: 'Infrastructure' },
        ].map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
          >
            <circle cx={node.cx} cy={node.cy} r="22" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
            <circle cx={node.cx} cy={node.cy} r="6" fill="#1A4A7A" />
            <text x={node.cx} y={node.cy + 36} textAnchor="middle" fill="#5A5A5A" fontSize="10" fontFamily="Inter">
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

export default function ServicesHero() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section-padding" style={{ background: '#FFFFFF' }} ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              className="tag-accent mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Operational Infrastructure Systems
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-display font-black leading-tight mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span style={{ color: '#1A1A1A' }}>We don't just deliver services.</span>
              <br />
              <span className="text-gradient">We stabilize how your business runs.</span>
            </motion.h1>

            <motion.p
              className="text-lg leading-relaxed mb-10"
              style={{ color: '#5A5A5A' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              APEX exposes hidden operational gaps, rebuilds broken connections,
              and brings every part of your business into a measurable, stable,
              and intelligently coordinated system.
            </motion.p>

            {/* Problem metrics grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {problemMetrics.map((m, i) => {
                const Icon = m.icon
                const color = statusColors[m.status]
                return (
                  <div
                    key={m.label}
                    className="p-4 rounded-2xl"
                    style={{
                      background: '#F8F9FA',
                      border: `1px solid ${m.status !== 'ok' ? color + '20' : '#E5E5E5'}`,
                    }}
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <Icon size={12} style={{ color }} />
                      <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: '#8A8A8A' }}>
                        {m.label}
                      </span>
                    </div>
                    <div className="font-display font-black text-2xl mb-0.5" style={{ color: '#1A1A1A' }}>
                      {m.value}
                    </div>
                    <div className="text-xs font-medium" style={{ color }}>
                      {m.sub}
                    </div>
                  </div>
                )
              })}
            </motion.div>

            {/* System status warning */}
            <motion.div
              className="flex items-center gap-2 p-3 rounded-xl"
              style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: '#EF4444' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm" style={{ color: '#EF4444' }}>
                <strong>System Status:</strong> Instability detected across multiple operational layers.
              </span>
            </motion.div>
          </div>

          {/* Right — infographic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InfraGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  )
}