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
    <div className={`py-10 overflow-hidden border-y ${className}`}
      style={{
        borderColor: 'rgba(255,255,255,0.04)',
        background: 'rgba(255,255,255,0.01)',
      }}>

      {/* Row 1: Clients */}
      <div className="relative mb-4">
        <div className="flex overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="flex items-center gap-4 flex-shrink-0">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'rgba(26, 74, 122, 0.6)' }}
                />
                <span
                  className="font-display font-semibold text-sm tracking-wide"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, #0A0A0F, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, #0A0A0F, transparent)' }}
        />
      </div>

      {/* Row 2: Stats (reverse) */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex gap-16 whitespace-nowrap"
            style={{ animation: 'marquee 20s linear infinite reverse' }}
          >
            {[...stats, ...stats].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 flex-shrink-0">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'rgba(44, 110, 73, 0.6)' }}
                />
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, #0A0A0F, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, #0A0A0F, transparent)' }}
        />
      </div>
    </div>
  )
}