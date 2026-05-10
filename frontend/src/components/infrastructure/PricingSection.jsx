import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Check, Zap, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Accelerate',
    price: { monthly: 5000, annual: 4200 },
    description: 'For growth-stage companies ready to build their first serious marketing engine.',
    color: '#1A4A7A',
    features: [
      '2 core service channels',
      'Dedicated growth strategist',
      'Weekly performance reports',
      'Custom analytics dashboard',
      'AI-assisted campaign optimization',
      'Monthly strategy review',
      'WhatsApp direct access',
      'Up to $50K ad spend managed',
    ],
    highlight: false,
    cta: 'Start Accelerating',
  },
  {
    name: 'Dominate',
    price: { monthly: 12000, annual: 10000 },
    description: 'For scaling companies deploying multiple channels in a unified growth system.',
    color: '#1A4A7A',
    features: [
      'Up to 4 core service channels',
      'Senior strategist + specialist team',
      'Real-time performance dashboard',
      'Advanced attribution modeling',
      'AI creative testing suite',
      'Bi-weekly strategy sessions',
      'Priority response (< 1hr)',
      'Up to $250K ad spend managed',
      'Competitor intelligence reports',
      'Quarterly executive briefing',
    ],
    highlight: true,
    cta: 'Start Dominating',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    description: 'For market leaders who need a fully integrated, AI-powered growth department.',
    color: '#2C6E49',
    features: [
      'All 6 service capabilities',
      'Dedicated senior team (6+ specialists)',
      'Custom AI model training',
      'White-label reporting available',
      'Multi-market, multi-currency ops',
      'Daily standups available',
      'Dedicated account director',
      'Unlimited ad spend managed',
      'SLA guarantees',
      'Custom integration engineering',
      'Board-level reporting',
    ],
    highlight: false,
    cta: 'Request Custom Quote',
  },
]

export default function PricingSection() {
  const [annual, setAnnual] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section-padding" style={{ background: '#FFFFFF' }}>
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
            style={{ background: 'rgba(26,74,122,0.08)', border: '1px solid rgba(26,74,122,0.15)' }}
          >
            <span className="font-mono text-xs tracking-widest uppercase font-semibold" style={{ color: '#1A4A7A' }}>
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4 text-[#1A1A1A]">
            Simple, honest
            <span className="text-gradient"> pricing</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-10 text-[#5A5A5A]">
            No hidden fees. No confusing tiers. Just the right plan for your stage and goals.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm" style={{ color: annual ? '#8A8A8A' : '#1A1A1A' }}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 rounded-full transition-all duration-300"
              style={{ background: annual ? 'linear-gradient(135deg,#1A4A7A,#2563EB)' : '#E5E5E5' }}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 rounded-full bg-white"
                animate={{ left: annual ? '2.25rem' : '0.25rem' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className="text-sm" style={{ color: annual ? '#1A1A1A' : '#8A8A8A' }}>
              Annual
              <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-mono font-medium" style={{ background: 'rgba(44,110,73,0.1)', color: '#2C6E49' }}>
                Save 16%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl overflow-hidden flex flex-col ${plan.highlight ? 'md:-mt-4 md:-mb-4' : ''}`}
              style={{
                background: plan.highlight
                  ? 'linear-gradient(135deg, rgba(26,74,122,0.04), rgba(37,99,235,0.02))'
                  : '#FFFFFF',
                border: `1px solid ${plan.highlight ? 'rgba(26,74,122,0.3)' : '#E5E5E5'}`,
                boxShadow: plan.highlight ? '0 20px 40px rgba(26,74,122,0.1)' : '0 1px 3px rgba(0,0,0,0.04)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
            >
              {plan.badge && (
                <div
                  className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-mono font-bold text-white"
                  style={{ background: 'linear-gradient(135deg,#1A4A7A,#2563EB)' }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-8 flex-1">
                {/* Header */}
                <div className="mb-6">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4"
                    style={{ background: `${plan.color}10`, border: `1px solid ${plan.color}20` }}
                  >
                    <Zap size={12} style={{ color: plan.color }} />
                    <span className="font-mono text-xs font-medium" style={{ color: plan.color }}>{plan.name}</span>
                  </div>

                  <div className="mb-3">
                    {plan.price.monthly ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-display font-black text-[#1A1A1A]">
                          ${annual ? plan.price.annual.toLocaleString() : plan.price.monthly.toLocaleString()}
                        </span>
                        <span className="text-sm text-[#8A8A8A]">/mo</span>
                      </div>
                    ) : (
                      <div className="text-3xl font-display font-black text-[#1A1A1A]">Custom</div>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-[#5A5A5A]">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${plan.color}15` }}
                      >
                        <Check size={11} style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-[#5A5A5A]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-8 pt-0">
                <Link
                  to="/initiate"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all duration-300"
                  style={{
                    background: plan.highlight
                      ? 'linear-gradient(135deg,#1A4A7A,#2563EB)'
                      : '#F8F9FA',
                    border: plan.highlight ? 'none' : '1px solid #E5E5E5',
                    color: plan.highlight ? 'white' : '#1A1A1A',
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.highlight) {
                      e.currentTarget.style.background = `${plan.color}10`
                      e.currentTarget.style.borderColor = `${plan.color}30`
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlight) {
                      e.currentTarget.style.background = '#F8F9FA'
                      e.currentTarget.style.borderColor = '#E5E5E5'
                    }
                  }}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}