import { useEffect } from 'react'

import InitiateHero from '@/components/initiate/InitiateHero'
import InitiateForm from '@/components/initiate/InitiateForm'
import ProcessSteps from '@/components/initiate/ProcessSteps'
import FAQAccordion from '@/components/sections/FAQAccordion'

const initiateFAQs = [
  {
    q: 'How quickly will you respond after I submit?',
    a: 'We respond to all inquiries within 2 business hours during weekdays.',
  },
  {
    q: 'What information should I include in my message?',
    a: 'The more context the better.',
  },
  {
    q: 'Is there a minimum project size?',
    a: 'Our minimum engagement starts at $5,000/month.',
  },
  {
    q: 'Do you offer a trial or discovery period?',
    a: 'Yes. Every engagement begins with a 30-day Rapid Deployment Phase.',
  },
  {
    q: 'Can we start with just one service?',
    a: 'Absolutely. Many clients start with their highest-priority channel.',
  },
]

export default function Initiate() {

  useEffect(() => {

    document.title =
      'Initiate — APEX Digital | Start Your Growth Journey'

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Start your growth journey with APEX Digital. Fill out our brief and connect via WhatsApp within minutes. Custom strategy, no obligation.'
      )
    }

    const metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    )

    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'growth strategy, digital marketing consultation, WhatsApp lead form, AI marketing agency, growth journey'
      )
    }

  }, [])

  return (
    <>
      <InitiateHero />
      <InitiateForm />
      <ProcessSteps />

      <FAQAccordion
        faqs={initiateFAQs}
        title="Before You Reach Out"
      />
    </>
  )
}