import { useEffect } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import InitiateHero from '../components/initiate/InitiateHero'
import ContactChannels from '../components/initiate/ContactChannels'
import InquiryForm from '../components/initiate/InquiryForm'
import ResponseExpectations from '../components/initiate/ResponseExpectations'
import PrivacyAssurance from '../components/initiate/PrivacyAssurance'

export default function InitiatePage() {

  useEffect(() => {

    document.title =
      'Initiate Inquiry | SYSTOLAB'

    const metaDescription =
      document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Initiate an engagement with SYSTOLAB. Describe your operational issue and receive a diagnostic assessment.'
      )
    } else {

      const meta = document.createElement('meta')

      meta.name = 'description'

      meta.content =
        'Initiate an engagement with SYSTOLAB. Describe your operational issue and receive a diagnostic assessment.'

      document.head.appendChild(meta)
    }

  }, [])

  return (
    <main className="bg-slate-50 overflow-hidden">

      <InitiateHero />

      <section className="pb-24">

        <div className="container-custom">

          <div
            className="
              grid
              gap-8
              xl:grid-cols-[380px_1fr]
            "
          >
            <div className="space-y-8">
              <ContactChannels />

              <ResponseExpectations />
            </div>

            <InquiryForm />
          </div>

          <PrivacyAssurance />
        </div>
      </section>

    </main>
  )
}