import SectionLabel from '../common/SectionLabel'
import CapabilityCard from '../common/CapabilityCard'

import {
  coreOutcomes,
} from '../../data/homeData'

export default function CoreOutcomes() {
  return (
    <section className="section-padding bg-slate-50">

      <div className="container-custom">

        <SectionLabel label="Core Outcomes" />

        <h2
          className="
            heading-lg
            mt-6
            max-w-3xl
            font-black
          "
        >
          Every deployment solves a bottleneck.
        </h2>

        <div
          className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-5
          "
        >
          {coreOutcomes.map((item) => (
            <CapabilityCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}