import {
  CheckCircle2,
  UserSearch,
  Clock3,
  ClipboardCheck,
} from 'lucide-react'

export default function ResponseExpectations() {

  const steps = [
    {
      icon: CheckCircle2,
      title: 'Inquiry Received',
      description:
        'We receive your inquiry and confirm receipt via email.',
    },

    {
      icon: UserSearch,
      title: 'Human Review',
      description:
        'A systems operator reviews your information and challenge.',
    },

    {
      icon: Clock3,
      title: 'Initial Response',
      description:
        'We respond within one business day with next steps.',
    },

    {
      icon: ClipboardCheck,
      title: 'Diagnostic Assessment',
      description:
        'If aligned, we begin a systems assessment and mapping.',
    },
  ]

  return (
    <div
      className="
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        p-8
      "
    >
      <span
        className="
          text-sm
          font-black
          uppercase
          tracking-wider
          text-blue-700
        "
      >
        C. Response Expectations
      </span>

      <h2
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
        "
      >
        What happens
        after you submit
      </h2>

      <div className="mt-10 space-y-8">

        {steps.map((item, index) => {

          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="flex gap-5"
            >
              <div className="relative">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-700
                    text-white
                  "
                >
                  <Icon size={24} />
                </div>

                {index !== steps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-1/2
                      top-14
                      h-14
                      w-[2px]
                      -translate-x-1/2
                      bg-slate-200
                    "
                  />
                )}
              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-black
                  "
                >
                  {index + 1}. {item.title}
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

      <div
        className="
          mt-10
          rounded-2xl
          border
          border-blue-100
          bg-blue-50
          p-5
        "
      >
        <p
          className="
            text-sm
            font-medium
            leading-7
            text-blue-800
          "
        >
          Response time:
          within one business day
          (Mon - Sat, excluding public holidays)
        </p>
      </div>
    </div>
  )
}