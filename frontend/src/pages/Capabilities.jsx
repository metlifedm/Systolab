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
    a: 'We start every engagement with a comprehensive discovery audit.',
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

      <section
        className="section-padding"
        style={{ background: '#0A0A0F' }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Ready to activate
                <br />
                <span className="text-gradient">
                  your growth engine?
                </span>
              </h2>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                Tell us about your business and goals.
              </p>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <ContactForm
                title="Request a Capability Audit"
                subtitle="Fill out the form and we'll connect via WhatsApp."
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