import SectionLabel from '../common/SectionLabel'

export default function InitiateHero() {
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
            mx-auto
            max-w-5xl
            py-28
            text-center
          "
        >
          <div className="flex justify-center">
            <SectionLabel
              label="Initiate an Engagement"
            />
          </div>

          <h1
            className="
              heading-lg
              mt-8
              font-black
              text-slate-950
            "
          >
            Every engagement
            begins with a diagnostic
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-xl
              leading-10
              text-slate-600
            "
          >
            Describe the operational issue
            affecting your business.

            <br />

            We will respond within
            one business day.
          </p>
        </div>
      </div>
    </section>
  )
}