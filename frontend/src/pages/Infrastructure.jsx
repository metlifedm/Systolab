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
    a: 'Each tier includes a dedicated team, custom strategy, campaign management, creative production, reporting dashboards, and direct access to senior strategists.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes. We review plan fit every quarter.',
  },
  {
    q: 'What technology do you use to manage campaigns?',
    a: 'We operate on a proprietary AI growth stack built on top of best-in-class platforms.',
  },
  {
    q: 'How do you protect client data and confidentiality?',
    a: 'We are SOC 2 Type II certified and GDPR compliant.',
  },
  {
    q: 'Do you integrate with our existing tech stack?',
    a: 'We integrate with 50+ platforms including CRM and analytics systems.',
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

      <section
        className="section-padding"
        style={{ background: '#0A0A0F' }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'rgba(26,74,122,0.12)',
                  border: '1px solid rgba(26,74,122,0.25)',
                }}
              >
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: '#1A4A7A' }}
                >
                  Custom Pricing
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Need a custom
                <span className="text-gradient">
                  {' '}enterprise solution?
                </span>
              </h2>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                For enterprise brands with complex multi-channel,
                multi-market needs — we build fully custom
                infrastructure scoped to your exact requirements.
              </p>

              {[
                'Custom team composition',
                'Dedicated AI model training',
                'White-glove onboarding',
                'Executive-level reporting',
                'SLA guarantees available',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 mb-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(44,110,73,0.15)',
                      border: '1px solid rgba(44,110,73,0.3)',
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#2C6E49' }}
                    />
                  </div>

                  <span
                    className="text-sm"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="rounded-3xl p-8"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <ContactForm
                title="Request Custom Pricing"
                subtitle="Describe your needs and we'll connect via WhatsApp with a custom proposal."
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