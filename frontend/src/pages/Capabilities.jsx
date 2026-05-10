import { useEffect } from 'react'

import CapabilitiesHero from '@/components/capabilities/CapabilitiesHero'
import CapabilitiesGrid from '@/components/capabilities/CapabilitiesGrid'
import CapabilityDeepDive from '@/components/capabilities/CapabilityDeepDive'
import ProcessTimeline from '@/components/capabilities/ProcessTimeline'
import ToolsSection from '@/components/capabilities/ToolsSection'
import ContactForm from '@/components/sections/ContactForm'
import CTASection from '@/components/sections/CTASection'
import FAQAccordion from '@/components/sections/FAQAccordion'

const capabilityFAQs = [
  {
    q: 'How do you select which services are right for my business?',
    a: 'We start every engagement with a comprehensive discovery audit. Our team conducts deep-dive interviews with your leadership, analyzes your existing data and marketing infrastructure, and performs competitive intelligence across your category. Within 5 days, we deliver a custom capability roadmap that prioritizes the exact services needed to achieve your growth targets—no more, no less.',
  },
  {
    q: 'Can I start with just one capability and add more later?',
    a: 'Absolutely. While our full-stack approach creates compounding returns across services, many clients start with a single capability based on their most urgent need. Whether it\'s performance marketing, SEO, or brand architecture, we build a foundation that makes it seamless to add additional capabilities as you scale.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Speed depends on the capability. Performance marketing campaigns launch within 2 weeks and deliver initial data by week 3. SEO typically shows movement in 60-90 days. Brand architecture deliverables are completed in 4-6 weeks. We provide weekly reporting from day one so you always know exactly where we stand against your KPIs.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'We operate on month-to-month agreements for most capabilities. The only exception is for brand architecture projects which run on fixed-scope engagements. We earn your business every single month through performance—not contracts.',
  },
  {
    q: 'What makes your AI capabilities different from other agencies?',
    a: 'Most agencies tack on AI as a buzzword. We built our entire engine around AI from day one—proprietary models trained on billions of data points across 40+ industries. Our AI doesn\'t just automate; it predicts, optimizes, and surfaces insights your competitors literally can\'t see.',
  },
  {
    q: 'How do you handle data security and privacy?',
    a: 'We are SOC 2 Type II compliant and GDPR ready. All client data is encrypted both in transit and at rest. We sign NDAs and data processing agreements before any work begins. Your strategies, creative assets, and performance data remain 100% confidential.',
  },
]

export default function Capabilities() {

  useEffect(() => {
    document.title =
      'Capabilities — APEX Digital | AI-Powered Marketing Services'

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Explore APEX Digital's full-stack marketing capabilities: performance marketing, SEO, brand strategy, content systems, social growth, and analytics — all AI-powered."
      )
    }

    const metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    )

    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'digital marketing services, SEO agency, performance marketing, brand strategy, content marketing, social media marketing'
      )
    }

  }, [])

  return (
    <>
      <CapabilitiesHero />
      <CapabilitiesGrid />
      <CapabilityDeepDive />
      <ProcessTimeline />
      <ToolsSection />

      {/* Contact Section - Light Theme */}
      <section
        className="section-padding"
        style={{ background: '#F8F9FA' }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-black mb-6 text-[#1A1A1A]">
                Ready to activate
                <br />
                <span className="text-gradient">
                  your growth engine?
                </span>
              </h2>

              <p
                className="text-lg leading-relaxed mb-8 text-[#5A5A5A]"
              >
                Tell us about your business and goals. Our team will analyze your needs and build a custom capability stack designed for your specific growth objectives.
              </p>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E5E5',
                  }}
                >
                  <div className="text-2xl font-display font-black text-[#1A4A7A] mb-1">&lt; 24h</div>
                  <div className="text-xs text-[#8A8A8A]">Response Time</div>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E5E5',
                  }}
                >
                  <div className="text-2xl font-display font-black text-[#2C6E49] mb-1">100%</div>
                  <div className="text-xs text-[#8A8A8A]">Confidentiality Guaranteed</div>
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
                title="Request a Capability Audit"
                subtitle="Fill out the form and we'll connect via WhatsApp within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={capabilityFAQs}
        title="Capability Questions Answered"
      />

      <CTASection
        title="Transform your marketing with AI"
        subtitle="Start with one capability or deploy the full stack."
        primaryLabel="Design My Strategy"
        secondaryLabel="See Case Studies"
        secondaryPath="/verified-outcomes"
      />
    </>
  )
}