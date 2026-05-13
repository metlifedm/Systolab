import Button from '../common/Button'

export default function ResultsCTA() {
  return (
    <section className="pb-24 bg-slate-50">

      <div className="container-custom">

        <div
          className="
            rounded-[2rem]
            border
            border-slate-200
            bg-white
            p-10
            lg:p-14
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>

              <h2
                className="
                  text-4xl
                  font-black
                "
              >
                Systems.
                Implemented.
                Measured.
                Proven.
              </h2>

              <p
                className="
                  mt-5
                  text-lg
                  text-slate-600
                "
              >
                We publish only real deployments
                with verified outcomes.
              </p>
            </div>

            <Button className="px-10 py-4">
              Discuss Your Systems →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}