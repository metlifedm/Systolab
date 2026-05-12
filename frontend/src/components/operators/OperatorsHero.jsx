import SectionLabel from '../common/SectionLabel'

export default function OperatorsHero() {
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
            min-h-[78vh]
            items-center
            gap-20
            py-24
            lg:grid-cols-2
          "
        >
          <div>

            <SectionLabel
              label="Our Operators"
            />

            <h1
              className="
                heading-xl
                mt-8
                max-w-4xl
                font-black
                leading-[1.05]
                text-slate-950
              "
            >
              Human operators
              behind

              <span className="text-blue-700">
                {' '}
                intelligent systems
              </span>
            </h1>

            <div
              className="
                mt-8
                h-[2px]
                w-20
                rounded-full
                bg-blue-200
              "
            />

            <p
              className="
                mt-8
                max-w-2xl
                text-xl
                leading-10
                text-slate-600
              "
            >
              Built with restraint,
              clarity,
              and measurable implementation.
            </p>
          </div>

          <div className="relative">

            <div
              className="
                relative
                mx-auto
                flex
                h-[520px]
                w-[520px]
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
                  h-[82%]
                  w-[82%]
                  rounded-full
                  border
                  border-blue-100
                "
              />

              <div
                className="
                  absolute
                  h-[64%]
                  w-[64%]
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
                  rounded-[2.5rem]
                  text-5xl
                  font-black
                  text-white
                  shadow-[0_30px_70px_rgba(37,99,235,0.35)]
                "
              >
                S
              </div>

              {[
                '⚙',
                '🛡',
                '📊',
                '🏢',
                '🔗',
              ].map((item, index) => (
                <div
                  key={index}
                  className={`
                    absolute
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-2xl
                    shadow-xl

                    ${
                      index === 0
                        ? 'top-10 right-12'
                        : ''
                    }

                    ${
                      index === 1
                        ? 'bottom-20 right-0'
                        : ''
                    }

                    ${
                      index === 2
                        ? 'bottom-10 left-20'
                        : ''
                    }

                    ${
                      index === 3
                        ? 'top-24 left-0'
                        : ''
                    }

                    ${
                      index === 4
                        ? 'top-0 left-1/2'
                        : ''
                    }
                  `}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}