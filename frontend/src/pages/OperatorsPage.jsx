import { useEffect } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import OperatorsHero from '../components/operators/OperatorsHero'
import MissionStatement from '../components/operators/MissionStatement'
import ExecutionFramework from '../components/operators/ExecutionFramework'
import TeamOperators from '../components/operators/TeamOperators'
import EcosystemLayer from '../components/operators/EcosystemLayer'
import OperatorsCTA from '../components/operators/OperatorsCTA'

export default function OperatorsPage() {

  useEffect(() => {

    document.title =
      'Operators | SYSTOLAB'

    const metaDescription =
      document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Human operators behind intelligent systems and operational infrastructure.'
      )
    } else {

      const meta = document.createElement('meta')

      meta.name = 'description'

      meta.content =
        'Human operators behind intelligent systems and operational infrastructure.'

      document.head.appendChild(meta)
    }

  }, [])

  return (
    <main className="bg-white overflow-hidden">

      <OperatorsHero />

      <MissionStatement />

      <ExecutionFramework />

      <TeamOperators />

      <EcosystemLayer />

      <OperatorsCTA />

    </main>
  )
}