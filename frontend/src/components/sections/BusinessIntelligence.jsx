import CapabilityCard from '../common/CapabilityCard'
import SectionLabel from '../common/SectionLabel'

import {
  businessIntelligence,
} from '../../data/capabilitiesData'

export default function BusinessIntelligence() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">

        <SectionLabel label="Business Intelligence" />

        <div
          className="
            mt-8
            grid
            gap-10
            lg:grid-cols-2
          "
        >
          <div>
            <h2
              className="
                heading-lg
                max-w-2xl
                font-black
              "
            >
              Visibility into the systems behind business performance.
            </h2>
          </div>

          <p
            className="
              text-lg
              leading-9
              text-slate-600
            "
          >
            Dashboards and reporting systems that surface operational patterns,
            missed opportunities, and performance metrics.
          </p>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {businessIntelligence.map((item) => (
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