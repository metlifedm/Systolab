import { useEffect } from 'react'

import InfrastructureHero from '@/components/infrastructure/InfrastructureHero'
import PricingSection from '@/components/infrastructure/PricingSection'
import TechArchitecture from '@/components/infrastructure/TechArchitecture'
import SecuritySection from '@/components/infrastructure/SecuritySection'
import IntegrationsSection from '@/components/infrastructure/IntegrationsSection'
import ContactForm from '@/components/sections/ContactForm'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CTASection from '@/components/sections/CTASection'

const infraFAQs = [
  {
    q: 'What is included in each pricing tier?',
    a: 'Each tier includes a dedicated team, custom strategy, campaign management, creative production, reporting dashboards, and direct access to senior strategists. All plans include our core AI engine, weekly performance reports, and direct WhatsApp access to your strategist.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes. We review plan fit every quarter and can adjust your engagement based on current growth stage and market conditions. There are no lock-in contracts — you stay as long as we\'re delivering ROI.',
  },
  {
    q: 'What technology do you use to manage campaigns?',
    a: 'We operate on a proprietary AI growth stack built on top of best-in-class platforms including Google Cloud, BigQuery, and our custom intelligence engine that orchestrates decision-making across all channels.',
  },
  {
    q: 'How do you protect client data and confidentiality?',
    a: 'We are SOC 2 Type II certified and GDPR compliant. Every client operates in an isolated environment with AES-256 encryption for all data at rest and in transit. NDAs are standard with every engagement.',
  },
  {
    q: 'Do you integrate with our existing tech stack?',
    a: 'We integrate with 50+ platforms including CRM, analytics, marketing automation, and e-commerce systems. For tools not in our native library, our engineering team builds custom API connectors at no additional cost.',
  },
  {
    q: 'What\'s your refund policy?',
    a: 'We guarantee results. If we don\'t hit your agreed-upon KPIs in the first 90 days, we work for free until we do. No fine print. No excuses.',
  },
]

export default function Infrastructure() {

  useEffect(() => {

    document.title =
      'Infrastructure — APEX Digital | Pricing, Tech Stack & Security'

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Explore APEX Digital's growth infrastructure: transparent pricing, AI-powered technology stack, enterprise security, and seamless integrations."
      )
    }

    const metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    )

    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'pricing plans, AI infrastructure, enterprise security, growth stack, marketing integrations'
      )
    }

  }, [])

  return (
    <>
      <InfrastructureHero />
      <PricingSection />
      <TechArchitecture />
      <SecuritySection />
      <IntegrationsSection />

      {/* Custom Enterprise Section - Light Theme */}
      <section
        className="section-padding"
        style={{ background: '#F8F9FA' }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'rgba(26,74,122,0.08)',
                  border: '1px solid rgba(26,74,122,0.15)',
                }}
              >
                <span
                  className="font-mono text-xs tracking-widest uppercase font-semibold"
                  style={{ color: '#1A4A7A' }}
                >
                  Custom Pricing
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-display font-black text-[#1A1A1A] mb-6 leading-tight">
                Need a custom
                <span className="text-gradient">
                  {' '}enterprise solution?
                </span>
              </h2>

              <p
                className="text-lg leading-relaxed mb-8 text-[#5A5A5A]"
              >
                For enterprise brands with complex multi-channel,
                multi-market needs — we build fully custom
                infrastructure scoped to your exact requirements.
              </p>

              {/* Enterprise feature list */}
              <div className="space-y-3 mb-8">
                {[
                  'Custom team composition (6+ specialists)',
                  'Dedicated AI model training',
                  'White-glove concierge onboarding',
                  'Executive-level board reporting',
                  'SLA guarantees with penalty clauses',
                  'Multi-market, multi-currency operations',
                  'Custom integration engineering',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(44,110,73,0.1)',
                        border: '1px solid rgba(44,110,73,0.2)',
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#2C6E49' }}
                      />
                    </div>

                    <span
                      className="text-sm text-[#5A5A5A]"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust indicator */}
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E5E5',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(26,74,122,0.1)' }}
                  >
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#1A1A1A] text-sm">Trusted by enterprises</div>
                    <div className="text-xs text-[#8A8A8A]">Used by Fortune 500 companies and category leaders</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div
              className="rounded-3xl p-8"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E5E5',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <ContactForm
                title="Request Custom Pricing"
                subtitle="Describe your needs and we'll connect via WhatsApp with a custom proposal within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={infraFAQs}
        title="Infrastructure & Pricing FAQ"
      />

      <CTASection
        title="Deploy your growth infrastructure today"
        subtitle="Choose a plan, or let us design a custom solution around your specific growth goals."
        primaryLabel="View Pricing Plans"
        primaryPath="/infrastructure"
        secondaryLabel="Talk to a Strategist"
        secondaryPath="/initiate"
      />
    </>
  )
}