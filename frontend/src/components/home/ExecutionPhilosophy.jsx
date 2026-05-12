import SectionLabel from '../common/SectionLabel'

import {
  philosophy,
} from '../../data/homeData'

export default function ExecutionPhilosophy() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <SectionLabel label="Execution Philosophy" />

        <h2
          className="
            heading-lg
            mt-6
            font-black
          "
        >
          Systems over noise.
        </h2>

        <div
          className="
            mt-16
            grid
            gap-10
            lg:grid-cols-4
          "
        >
          {philosophy.map((item) => {

            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="
                  flex
                  gap-5
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-200
                    text-blue-700
                  "
                >
                  <Icon size={28} />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-black
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}