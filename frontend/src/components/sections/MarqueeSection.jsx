import { motion } from 'framer-motion'

const clients = [
  'TechFlow AI', 'NexusFinance', 'CloudCore', 'EliteCommerce',
  'DataVault', 'ScaleUp Pro', 'FusionBrand', 'PeakGrowth',
  'VortexSaaS', 'BridgeCapital', 'OmniReach', 'ApexCommerce',
]

const stats = [
  '847% Avg ROI', '200+ Clients', '$5B+ Generated', '98% Retention',
  '40+ Countries', '12M+ Leads', '99.9% Uptime', '5★ Rating',
]

export default function MarqueeSection({ className = '' }) {
  return (
    <div
      className={`py-8 overflow-hidden border-y ${className}`}
      style={{ borderColor: '#E5E5E5', background: '#F8F9FA' }}
    >
      {/* Row 1 */}
      <div className="relative mb-3">
        <div className="flex overflow-hidden">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="flex items-center gap-3 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(26,74,122,0.4)' }} />
                <span className="font-display font-semibold text-sm" style={{ color: '#B0B0B0' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, #F8F9FA, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, #F8F9FA, transparent)' }} />
      </div>

      {/* Row 2 */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="flex gap-14 whitespace-nowrap"
            style={{ animation: 'marquee 22s linear infinite reverse' }}>
            {[...stats, ...stats].map((s, i) => (
              <div key={i} className="flex items-center gap-2.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(44,110,73,0.4)' }} />
                <span className="font-mono text-xs tracking-widest" style={{ color: '#C0C0C0' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, #F8F9FA, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, #F8F9FA, transparent)' }} />
      </div>
    </div>
  )
}