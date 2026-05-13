import Button from '../common/Button'

export default function CTA() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">

        <div
          className="
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-200
            bg-white
            p-10
            lg:p-16
          "
        >
          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-2
            "
          >
            <div>
              <h2
                className="
                  heading-lg
                  max-w-2xl
                  font-black
                "
              >
                Ready to build systems that drive measurable operational results?
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-9
                  text-slate-600
                "
              >
                We build systems that capture inquiries,
                automate operations, and surface actionable intelligence.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <Button className="px-10 py-4">
                Start Assessment →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}