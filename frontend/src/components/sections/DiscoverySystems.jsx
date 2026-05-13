import CapabilityCard from '../common/CapabilityCard'
import SectionLabel from '../common/SectionLabel'

import {
  discoverySystems,
} from '../../data/capabilitiesData'

export default function DiscoverySystems() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">

        <SectionLabel label="Discovery Systems" />

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
              Systems that connect business data to visibility and inquiry channels.
            </h2>
          </div>

          <p
            className="
              text-lg
              leading-9
              text-slate-600
            "
          >
            SYSTOLAB builds discovery systems that connect local search,
            reputation data, and visibility signals into a coherent business system.
          </p>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {discoverySystems.map((item) => (
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