import { useEffect } from 'react'

import OperatorsHero from '@/components/operators/OperatorsHero'
import TeamGrid from '@/components/operators/TeamGrid'
import ValuesSection from '@/components/operators/ValuesSection'
import CultureSection from '@/components/operators/CultureSection'
import HiringSection from '@/components/operators/HiringSection'
import CTASection from '@/components/sections/CTASection'

export default function Operators() {

  useEffect(() => {

    document.title =
      'Operators — APEX Digital | Meet the Elite Team'

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Meet the elite operators behind APEX Digital — senior strategists, AI engineers, and growth specialists who deliver world-class results for ambitious brands.'
      )
    }

    const metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    )

    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'digital marketing team, growth specialists, AI engineers, marketing strategists, agency operators'
      )
    }

  }, [])

  return (
    <>
      <OperatorsHero />
      <TeamGrid />
      <ValuesSection />
      <CultureSection />
      <HiringSection />

      <CTASection
        title="Work with the best operators in growth"
        subtitle="Partner with a team obsessed with your outcomes — not just their deliverables."
        primaryLabel="Start a Partnership"
        primaryPath="/initiate"
        secondaryLabel="See Our Results"
        secondaryPath="/verified-outcomes"
      />
    </>
  )
}