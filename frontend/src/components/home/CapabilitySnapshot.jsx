import SectionLabel from '../common/SectionLabel'

import {
  snapshots,
} from '../../data/homeData'

export default function CapabilitySnapshot() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <SectionLabel label="Capability Snapshot" />

        <h2
          className="
            heading-lg
            mt-6
            max-w-4xl
            font-black
          "
        >
          Three system layers.
          One ecosystem.
        </h2>

        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {snapshots.map((item) => {

            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-slate-50
                  p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                    text-blue-700
                  "
                >
                  <Icon size={34} />
                </div>

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-black
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-6
                    leading-8
                    text-slate-600
                  "
                >
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}