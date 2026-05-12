export default function ResultsHero() {
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
          <h1
            className="
              heading-lg
              font-black
              text-slate-950
            "
          >
            Measured proof from
            real-world deployments
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
            Every deployment below represents
            a real business system,
            a real operational intervention,
            and a measurable outcome.
          </p>
        </div>
      </div>
    </section>
  )
}