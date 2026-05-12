import { useEffect } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import Hero from '../components/sections/Hero'
import DiscoverySystems from '../components/sections/DiscoverySystems'
import WorkflowAutomation from '../components/sections/WorkflowAutomation'
import BusinessIntelligence from '../components/sections/BusinessIntelligence'
import DeploymentProcess from '../components/sections/DeploymentProcess'
import CTA from '../components/sections/CTA'

export default function CapabilitiesPage() {

  useEffect(() => {
    document.title =
      'Capabilities | SYSTOLAB'

    const metaDescription =
      document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Frameworks designed to improve how businesses acquire, convert, and operate.'
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content =
        'Frameworks designed to improve how businesses acquire, convert, and operate.'
      document.head.appendChild(meta)
    }

    const canonical =
      document.querySelector('link[rel="canonical"]')

    if (!canonical) {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = window.location.href
      document.head.appendChild(link)
    }

  }, [])

  return (
    <main className="bg-white overflow-hidden">

      <Hero />

      <DiscoverySystems />

      <WorkflowAutomation />

      <BusinessIntelligence />

      <DeploymentProcess />

      <CTA />

    </main>
  )
}