import SectionLabel from '../common/SectionLabel'

import {
  results,
} from '../../data/homeData'

export default function SelectedResults() {
  return (
    <section className="section-padding bg-slate-50">

      <div className="container-custom">

        <SectionLabel label="Selected Results" />

        <h2
          className="
            heading-lg
            mt-6
            max-w-4xl
            font-black
          "
        >
          Measured performance over theoretical promises.
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
          {results.map((item) => {

            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  p-8
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-green-50
                    text-green-700
                  "
                >
                  <Icon size={28} />
                </div>

                <h3
                  className="
                    mt-8
                    text-5xl
                    font-black
                    text-green-700
                  "
                >
                  {item.value}
                </h3>

                <h4
                  className="
                    mt-5
                    text-xl
                    font-bold
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-slate-600
                  "
                >
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        <p
          className="
            mt-10
            text-center
            text-sm
            text-slate-500
          "
        >
          All results are verified from real deployments.
        </p>
      </div>
    </section>
  )
}