import Button from '../common/Button'

export default function HomeHero() {
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
            min-h-[92vh]
            items-center
            gap-20
            py-20
            lg:grid-cols-2
          "
        >
          <div>

            <h1
              className="
                heading-xl
                max-w-3xl
                font-black
                text-slate-950
              "
            >
              Systems Built for
              <br />

              Modern Business Growth
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-xl
                leading-10
                text-slate-600
              "
            >
              SYSTOLAB builds automation,
              visibility, and intelligence
              frameworks that reduce manual work
              and improve business performance.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Button>
                View Capabilities →
              </Button>

              <button
                className="
                  rounded-xl
                  border
                  border-slate-300
                  px-7
                  py-3.5
                  font-semibold
                  transition-all
                  hover:border-blue-200
                  hover:bg-blue-50
                "
              >
                Initiate Inquiry →
              </button>
            </div>

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-8
                text-sm
                text-slate-600
              "
            >
              <span>
                ○ Systems, not campaigns
              </span>

              <span>
                ○ No long-term lock-ins
              </span>

              <span>
                ○ Built for measurable growth
              </span>
            </div>
          </div>

          <div className="relative">

            <div
              className="
                relative
                mx-auto
                flex
                h-[550px]
                w-[550px]
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
                  relative
                  z-10
                  rounded-[2.5rem]
                  bg-white
                  p-10
                  shadow-[0_30px_80px_rgba(37,99,235,0.18)]
                "
              >
                <div
                  className="
                    blue-gradient
                    flex
                    h-40
                    w-40
                    items-center
                    justify-center
                    rounded-[2rem]
                    text-5xl
                    font-black
                    text-white
                  "
                >
                  S
                </div>
              </div>

              <div
                className="
                  absolute
                  left-0
                  top-20
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-xl
                "
              >
                <div className="h-24 w-32 rounded-xl bg-slate-100" />
              </div>

              <div
                className="
                  absolute
                  right-0
                  top-16
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-xl
                "
              >
                <div className="h-24 w-32 rounded-xl bg-slate-100" />
              </div>

              <div
                className="
                  absolute
                  bottom-16
                  right-10
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-xl
                "
              >
                <div className="h-24 w-32 rounded-xl bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}