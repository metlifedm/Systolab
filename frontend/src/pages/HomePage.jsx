import { useEffect } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import HomeHero from '../components/home/HomeHero'
import CoreOutcomes from '../components/home/CoreOutcomes'
import CapabilitySnapshot from '../components/home/CapabilitySnapshot'
import SelectedResults from '../components/home/SelectedResults'
import ExecutionPhilosophy from '../components/home/ExecutionPhilosophy'
import ResearchFramework from '../components/home/ResearchFramework'
import ContactCTA from '../components/home/ContactCTA'

export default function HomePage() {

  useEffect(() => {
    document.title = 'SYSTOLAB | Systems Built for Modern Business Growth'

    const metaDescription =
      document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Automation, visibility, and intelligence systems built for modern business growth.'
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content =
        'Automation, visibility, and intelligence systems built for modern business growth.'

      document.head.appendChild(meta)
    }
  }, [])

  return (
    <main className="bg-white overflow-hidden">

      <HomeHero />

      <CoreOutcomes />

      <CapabilitySnapshot />

      <SelectedResults />

      <ExecutionPhilosophy />

      <ResearchFramework />

      <ContactCTA />
    </main>
  )
}