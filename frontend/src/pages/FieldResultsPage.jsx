import { useEffect } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import ResultsHero from '../components/results/ResultsHero'
import DeploymentCases from '../components/results/DeploymentCases'
import ResultsCTA from '../components/results/ResultsCTA'

export default function FieldResultsPage() {

  useEffect(() => {

    document.title =
      'Field Results | SYSTOLAB'

    const metaDescription =
      document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Measured proof from real-world deployments and operational systems.'
      )
    } else {

      const meta = document.createElement('meta')

      meta.name = 'description'

      meta.content =
        'Measured proof from real-world deployments and operational systems.'

      document.head.appendChild(meta)
    }
  }, [])

  return (
    <main className="bg-slate-50 overflow-hidden">

      <ResultsHero />

      <DeploymentCases />

      <ResultsCTA />

    </main>
  )
}