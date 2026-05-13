import {
  executionPhilosophy,
} from '../../data/operatorsData'

export default function ExecutionFramework() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div
          className="
            rounded-[2rem]
            border
            border-slate-200
            bg-slate-50
            p-10
            lg:p-14
          "
        >
          <span
            className="
              text-sm
              font-black
              uppercase
              tracking-wider
              text-blue-700
            "
          >
            B. Execution Philosophy
          </span>

          <h2
            className="
              mt-6
              heading-lg
              font-black
            "
          >
            Execution before narrative.
          </h2>

          <div
            className="
              mt-16
              grid
              gap-10
              md:grid-cols-2
            "
          >
            {executionPhilosophy.map((item) => {

              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="
                    flex
                    gap-6
                    border-b
                    border-slate-200
                    pb-10
                  "
                >
                  <div
                    className="
                      flex
                      h-24
                      w-24
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-100
                      bg-white
                      text-blue-700
                    "
                  >
                    <Icon size={38} />
                  </div>

                  <div>

                    <h3
                      className="
                        text-3xl
                        font-black
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-md
                        text-lg
                        leading-9
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
      </div>
    </section>
  )
}