import { useEffect } from 'react'

import OutcomesHero from '@/components/outcomes/OutcomesHero'
import OutcomesStats from '@/components/outcomes/OutcomesStats'
import CaseStudiesGrid from '@/components/outcomes/CaseStudiesGrid'
import MetricsShowcase from '@/components/outcomes/MetricsShowcase'
import ClientLogos from '@/components/outcomes/ClientLogos'
import TestimonialSlider from '@/components/sections/TestimonialSlider'
import CTASection from '@/components/sections/CTASection'

export default function VerifiedOutcomes() {

  useEffect(() => {

    document.title =
      'Verified Outcomes — APEX Digital | Proven Client Results'

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Real, audited results from 200+ client engagements. See how APEX Digital delivers 847% average ROI, 8.7x ROAS, and measurable revenue growth.'
      )
    }

    const metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    )

    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'digital marketing results, case studies, ROI, marketing agency results, verified outcomes'
      )
    }

  }, [])

  return (
    <>
      <OutcomesHero />
      <OutcomesStats />
      <CaseStudiesGrid />
      <MetricsShowcase />
      <ClientLogos />
      <TestimonialSlider />

      <CTASection
        title="Your results start here"
        subtitle="Join 200+ brands who've transformed their growth with verified, measurable outcomes."
        primaryLabel="Start Your Journey"
        primaryPath="/initiate"
        secondaryLabel="Explore Capabilities"
        secondaryPath="/capabilities"
      />
    </>
  )
}