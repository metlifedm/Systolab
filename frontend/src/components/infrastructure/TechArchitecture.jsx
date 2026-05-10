import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Database, BarChart3, Layers, Cpu, GitBranch } from 'lucide-react'

const layers = [
  {
    layer: 'Intelligence Layer',
    icon: Brain,
    color: '#1A4A7A',
    desc: 'Proprietary AI engine that processes campaign data, audience signals, and creative performance to make real-time optimization decisions across all channels.',
    components: ['Custom Bid Algorithms', 'Audience Intelligence AI', 'Creative Performance Scorer', 'Predictive Budget Allocator'],
  },
  {
    layer: 'Data Layer',
    icon: Database,
    color: '#2C6E49',
    desc: 'Unified data infrastructure that aggregates first-party, third-party, and behavioral data into a single source of truth with real-time pipeline processing.',
    components: ['Data Warehouse (BigQuery)', 'Real-Time Event Streaming', 'First-Party Data Hub', 'Clean Room Architecture'],
  },
  {
    layer: 'Analytics Layer',
    icon: BarChart3,
    color: '#1A4A7A',
    desc: 'Custom reporting and attribution infrastructure that gives complete visibility into cross-channel performance with multi-touch attribution and LTV modeling.',
    components: ['Multi-Touch Attribution', 'LTV & Cohort Modeling', 'Custom KPI Dashboards', 'Automated Reporting Engine'],
  },
  {
    layer: 'Integration Layer',
    icon: Layers,
    color: '#2C6E49',
    desc: 'Seamless connectivity with 50+ platforms in your existing stack via native integrations, APIs, and custom connectors built by our engineering team.',
    components: ['50+ Native Integrations', 'Custom API Connectors', 'Webhook Infrastructure', 'CRM Sync Engine'],
  },
  {
    layer: 'Automation Layer',
    icon: Cpu,
    color: '#1A4A7A',
    desc: 'End-to-end marketing automation that handles campaign management, creative rotation, audience updates, and performance alerts with minimal human intervention.',
    components: ['Campaign Auto-Optimization', 'Dynamic Creative Assembly', 'Audience Auto-Refresh', 'Performance Alert System'],
  },
  {
    layer: 'Workflow Layer',
    icon: GitBranch,
    color: '#2C6E49',
    desc: 'Client-facing project management and communication infrastructure ensuring complete transparency, accountability, and speed of execution at every stage.',
    components: ['Sprint-Based Delivery', 'Real-Time Slack Updates', 'Weekly Sync Cadence', 'Strategy Wiki Access'],
  },
]

export default function TechArchitecture() {
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
              Tech Architecture
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            Six layers of
            <span className="text-gradient"> growth infrastructure</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Our proprietary stack is what separates APEX from traditional agencies.
            Each layer is purpose-built to maximize performance and minimize waste.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {layers.map((l, i) => {
            const Icon = l.icon
            return (
              <motion.div
                key={l.layer}
                className="relative p-7 rounded-3xl group overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, borderColor: `${l.color}30`, background: `${l.color}05` }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${l.color}12 0%, transparent 60%)` }}
                />
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${l.color}15`, border: `1px solid ${l.color}25` }}
                  >
                    <Icon size={22} style={{ color: l.color }} />
                  </div>
                  <h3 className="font-display font-bold text-white">{l.layer}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {l.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {l.components.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{ background: `${l.color}10`, border: `1px solid ${l.color}20`, color: l.color }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}