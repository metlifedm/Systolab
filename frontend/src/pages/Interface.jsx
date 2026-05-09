import { useEffect } from 'react'

import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialSlider from '@/components/sections/TestimonialSlider'
import CTASection from '@/components/sections/CTASection'
import FAQAccordion from '@/components/sections/FAQAccordion'
import TechStackSection from '@/components/sections/TechStackSection'
import WhyUsSection from '@/components/sections/WhyUsSection'

export default function Interface() {
  useEffect(() => {
    document.title = 'APEX Digital — Elite AI-Powered Growth Agency'

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Transform your brand with AI-powered digital marketing strategies that deliver measurable, verified results.'
      )
    }

    const metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    )

    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'digital marketing agency, AI marketing, growth agency, SEO, paid media'
      )
    }
  }, [])

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <WhyUsSection />
      <ServicesOverview />
      <ProcessSection />
      <TechStackSection />
      <TestimonialSlider />
      <FAQAccordion />
      <CTASection />
    </main>
  )
}