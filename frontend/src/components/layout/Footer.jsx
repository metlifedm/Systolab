export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-200
        bg-white
        py-16
      "
    >
      <div className="container-custom">

        <div
          className="
            grid
            gap-10
            lg:grid-cols-4
          "
        >
          <div>
            <h2
              className="
                text-3xl
                font-black
              "
            >
              SYSTOLAB
            </h2>

            <p
              className="
                mt-6
                max-w-sm
                leading-8
                text-slate-600
              "
            >
              Systems that capture, automate,
              analyze, and scale operational performance.
            </p>
          </div>

          {[
            'Interface',
            'Capabilities',
            'Infrastructure',
            'Initiate',
          ].map((section) => (
            <div key={section}>
              <h3
                className="
                  text-lg
                  font-bold
                "
              >
                {section}
              </h3>

              <ul className="mt-6 space-y-4">
                <li className="text-slate-600">
                  Overview
                </li>

                <li className="text-slate-600">
                  Systems
                </li>

                <li className="text-slate-600">
                  Architecture
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div
          className="
            mt-16
            border-t
            border-slate-200
            pt-8
            text-sm
            text-slate-500
          "
        >
          © 2026 SYSTOLAB. All rights reserved.
        </div>
      </div>
    </footer>
  )
}