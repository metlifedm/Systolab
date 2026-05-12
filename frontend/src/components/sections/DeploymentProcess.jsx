const process = [
  {
    number: '01',
    title: 'Audit',
    description:
      'Assess current systems and identify operational friction points.',
  },

  {
    number: '02',
    title: 'Architecture',
    description:
      'Design the implementation framework and deployment structure.',
  },

  {
    number: '03',
    title: 'Deployment',
    description:
      'Build, integrate, and test systems into your environment.',
  },

  {
    number: '04',
    title: 'Monitoring',
    description:
      'Track system performance and operational improvements.',
  },
]

export default function DeploymentProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <div className="mb-16">
          <span
            className="
              text-sm
              font-bold
              uppercase
              tracking-wider
              text-blue-700
            "
          >
            Deployment Process
          </span>

          <h2
            className="
              mt-4
              heading-lg
              max-w-3xl
              font-black
            "
          >
            From audit to continuity.
          </h2>
        </div>

        <div
          className="
            grid
            gap-8
            lg:grid-cols-4
          "
        >
          {process.map((item) => (
            <div
              key={item.number}
              className="
                relative
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-8
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-600
                  text-lg
                  font-black
                  text-white
                "
              >
                {item.number}
              </div>

              <h3
                className="
                  text-2xl
                  font-black
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-8
                  text-slate-600
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}