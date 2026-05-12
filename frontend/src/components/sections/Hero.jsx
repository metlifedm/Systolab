import Button from '../common/Button'
import SectionLabel from '../common/SectionLabel'

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-slate-200
        bg-white
      "
    >
      <div
        className="
          absolute
          inset-0
          grid-lines
          opacity-40
        "
      />

      <div className="container-custom relative z-10">
        <div
          className="
            grid
            min-h-[90vh]
            items-center
            gap-20
            py-20
            lg:grid-cols-2
          "
        >
          <div>
            <SectionLabel
              label="Our Capabilities"
            />

            <h1
              className="
                heading-xl
                mt-8
                max-w-3xl
                font-black
                text-slate-950
              "
            >
              Frameworks designed to improve how businesses{' '}
              <span className="text-blue-700">
                acquire, convert,
                and operate
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-slate-600
              "
            >
              Operational systems that connect discovery,
              automate workflows, and deliver intelligence
              for measurable business performance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Start Assessment
              </Button>

              <button
                className="
                  rounded-xl
                  border
                  border-slate-300
                  px-6
                  py-3
                  font-semibold
                  transition-all
                  hover:border-blue-200
                  hover:bg-blue-50
                "
              >
                Explore Systems
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className="
                relative
                mx-auto
                flex
                h-[500px]
                w-[500px]
                items-center
                justify-center
              "
            >
              <div
                className="
                  absolute
                  h-full
                  w-full
                  rounded-full
                  border
                  border-blue-100
                "
              />

              <div
                className="
                  absolute
                  h-[80%]
                  w-[80%]
                  rounded-full
                  border
                  border-blue-100
                "
              />

              <div
                className="
                  absolute
                  h-[60%]
                  w-[60%]
                  rounded-full
                  border
                  border-blue-100
                "
              />

              <div
                className="
                  blue-gradient
                  relative
                  z-10
                  flex
                  h-44
                  w-44
                  items-center
                  justify-center
                  rounded-[2rem]
                  text-5xl
                  font-black
                  text-white
                  shadow-2xl
                "
              >
                S
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}