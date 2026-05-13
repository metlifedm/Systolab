import {
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'

import {
  deployments,
} from '../../data/resultsData'

export default function DeploymentCases() {
  return (
    <section className="section-padding bg-slate-50">

      <div className="container-custom">

        <div className="space-y-10">

          {deployments.map((item) => (
            <div
              key={item.category}
              className="
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                lg:p-10
              "
            >
              <div
                className="
                  grid
                  gap-14
                  lg:grid-cols-2
                "
              >
                <div>

                  <div
                    className="
                      inline-flex
                      rounded-full
                      bg-blue-50
                      px-5
                      py-2
                      text-sm
                      font-bold
                      text-blue-700
                    "
                  >
                    {item.category}
                  </div>

                  <h2
                    className="
                      mt-8
                      text-4xl
                      font-black
                      leading-tight
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      mt-6
                      leading-9
                      text-slate-600
                    "
                  >
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-8
                      text-sm
                    "
                  >
                    <span>
                      Deployment Window:
                      <strong className="ml-2">
                        {item.deploymentWindow}
                      </strong>
                    </span>

                    <span>
                      Status:
                      <strong className="ml-2 text-green-700">
                        {item.status}
                      </strong>
                    </span>
                  </div>

                  <div className="mt-12">

                    <h3
                      className="
                        text-2xl
                        font-black
                      "
                    >
                      Systems deployed
                      with measurable intent
                    </h3>

                    <div
                      className="
                        mt-8
                        grid
                        gap-4
                        sm:grid-cols-2
                      "
                    >
                      {item.systems.map((system) => (
                        <div
                          key={system}
                          className="
                            flex
                            items-start
                            gap-3
                            rounded-2xl
                            border
                            border-slate-200
                            p-4
                          "
                        >
                          <CheckCircle2
                            size={18}
                            className="
                              mt-1
                              text-blue-700
                            "
                          />

                          <span
                            className="
                              text-sm
                              font-medium
                              text-slate-700
                            "
                          >
                            {system}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="
                      mt-10
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-6
                    "
                  >
                    <p
                      className="
                        text-lg
                        leading-8
                        text-slate-700
                      "
                    >
                      "{item.quote}"
                    </p>

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div>
                        <h4 className="font-bold">
                          {item.author}
                        </h4>

                        <p
                          className="
                            text-sm
                            text-slate-500
                          "
                        >
                          {item.role}
                        </p>
                      </div>

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          border
                          border-blue-100
                          bg-white
                          px-4
                          py-3
                        "
                      >
                        <ShieldCheck
                          size={20}
                          className="text-blue-700"
                        />

                        <span
                          className="
                            text-sm
                            font-semibold
                          "
                        >
                          Verified Deployment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <h3
                      className="
                        text-3xl
                        font-black
                      "
                    >
                      Measurable
                      operational outcome
                    </h3>

                    <div
                      className="
                        rounded-full
                        bg-green-50
                        px-5
                        py-2
                        text-sm
                        font-bold
                        text-green-700
                      "
                    >
                      Active Deployment
                    </div>
                  </div>

                  <div
                    className="
                      mt-10
                      grid
                      gap-5
                      sm:grid-cols-2
                    "
                  >
                    {item.metrics.map((metric) => (
                      <div
                        key={metric.title}
                        className="
                          rounded-2xl
                          border
                          border-slate-200
                          bg-slate-50
                          p-6
                        "
                      >
                        <h4
                          className="
                            text-5xl
                            font-black
                            text-green-700
                          "
                        >
                          {metric.value}
                        </h4>

                        <p
                          className="
                            mt-4
                            leading-7
                            text-slate-600
                          "
                        >
                          {metric.title}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">

                    <h3
                      className="
                        text-2xl
                        font-black
                      "
                    >
                      Operational evidence
                    </h3>

                    <div
                      className="
                        mt-8
                        grid
                        gap-4
                        sm:grid-cols-3
                      "
                    >
                      {[1, 2, 3].map((box) => (
                        <div
                          key={box}
                          className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                          "
                        >
                          <div
                            className="
                              h-32
                              bg-slate-100
                            "
                          />

                          <div className="p-4">
                            <p
                              className="
                                text-sm
                                font-semibold
                              "
                            >
                              System Evidence
                            </p>

                            <span
                              className="
                                text-xs
                                text-slate-500
                              "
                            >
                              Real deployment
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}