import { motion } from 'framer-motion'
import {
  CheckCircle, Activity, GitBranch,
  Target, Server, Clock,
} from 'lucide-react'

const statusItems = [
  { icon: CheckCircle, label: 'SYSTEM STATUS', value: 'OPERATIONAL', color: '#2C6E49', dot: true },
  { icon: Activity, label: 'SIGNAL ROUTING', value: 'ACTIVE', color: '#1A4A7A', dot: false },
  { icon: GitBranch, label: 'SYNC NODES', value: '12', color: '#1A1A1A', dot: false },
  { icon: Target, label: 'RESPONSE COORDINATION', value: 'STABLE', color: '#1A1A1A', dot: false },
  { icon: Server, label: 'INFRASTRUCTURE HEALTH', value: '98.7%', color: '#2C6E49', dot: true },
  { icon: Clock, label: 'LAST SYNC', value: '2 min ago', color: '#5A5A5A', dot: false },
]

export default function ServicesStatusBar() {
  return (
    <div
      className="w-full border-b pt-20"
      style={{ background: '#FFFFFF', borderColor: '#E5E5E5' }}
    >
      {/* Timeline connector */}
      <div className="container-custom">
        <div className="relative flex items-center py-4 overflow-x-auto gap-0">
          {/* Horizontal line */}
          <div
            className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, #E5E5E5, #E5E5E5, transparent)' }}
          />

          {statusItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="relative flex flex-col items-center flex-1 min-w-[120px] px-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* Node dot on timeline */}
                <div
                  className="w-2.5 h-2.5 rounded-full mb-3 z-10"
                  style={{
                    background: item.color,
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 0 3px ${item.color}15`,
                  }}
                />

                <div className="flex items-center gap-1.5 mb-1">
                  <Icon size={11} style={{ color: '#8A8A8A' }} />
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase whitespace-nowrap"
                    style={{ color: '#8A8A8A' }}
                  >
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.dot && (
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: item.color }}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  <span
                    className="font-display font-bold text-sm whitespace-nowrap"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </span>
                </div>
              </motion.div>
            )
          })}

          {/* Center S icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-white text-lg shadow-accent"
              style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
            >
              A
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}