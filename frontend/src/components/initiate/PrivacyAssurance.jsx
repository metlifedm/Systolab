import {
  ShieldCheck,
  Database,
  Shield,
} from 'lucide-react'

export default function PrivacyAssurance() {

  const points = [
    {
      icon: ShieldCheck,

      title:
        'We do not sell or share your information.',

      description:
        'Your data is used only to assess your inquiry.',
    },

    {
      icon: Database,

      title:
        'Encrypted & secure handling.',

      description:
        'All submissions are encrypted and stored securely.',
    },

    {
      icon: Shield,

      title:
        'No marketing. No spam.',

      description:
        'We reach out only if we can help.',
    },
  ]

  return (
    <div
      className="
        mt-8
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200
        bg-white
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
        <div className="p-8 lg:p-12">

          <span
            className="
              text-sm
              font-black
              uppercase
              tracking-wider
              text-blue-700
            "
          >
            D. System & Privacy Assurance
          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              leading-tight
            "
          >
            Your information is secure
            and used only for assessment.
          </h2>

          <div className="mt-10 space-y-8">

            {points.map((item) => {

              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="flex gap-5"
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                      text-blue-700
                    "
                  >
                    <Icon size={26} />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-black
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-base
                        leading-8
                        text-slate-600
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className="
            relative
            flex
            min-h-[520px]
            items-center
            justify-center
            bg-slate-50
          "
        >
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
              text-white
              shadow-[0_30px_70px_rgba(37,99,235,0.35)]
            "
          >
            <ShieldCheck size={90} />
          </div>

          <div
            className="
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              border
              border-blue-100
            "
          />

          <div
            className="
              absolute
              h-[320px]
              w-[320px]
              rounded-full
              border
              border-blue-100
            "
          />

          <div
            className="
              absolute
              left-16
              top-16
              h-28
              w-40
              rounded-2xl
              border
              border-slate-200
              bg-white
            "
          />

          <div
            className="
              absolute
              bottom-16
              right-16
              h-28
              w-40
              rounded-2xl
              border
              border-slate-200
              bg-white
            "
          />
        </div>
      </div>
    </div>
  )
}