import {
  Mail,
  Phone,
  MessageCircle,
  Lock,
} from 'lucide-react'

export default function ContactChannels() {

  const channels = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@systolab.com',
      subtext: 'We respond within 24 hours',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
    },

    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 7358 94 6767',
      subtext: 'Monitored within 24 hours',
      color: 'text-green-700',
      bg: 'bg-green-50',
    },

    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7358 94 6767',
      subtext: 'Mon - Sat • 10AM — 7PM IST',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
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
        A. Contact Channels
      </span>

      <h2
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
        "
      >
        Built for direct communication
      </h2>

      <div className="mt-10 space-y-8">

        {channels.map((item) => {

          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="flex gap-5"
            >
              <div
                className={`
                  ${item.bg}
                  ${item.color}

                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                `}
              >
                <Icon size={28} />
              </div>

              <div>

                <h3
                  className="
                    text-2xl
                    font-black
                  "
                >
                  {item.title}
                </h3>

                <p
                  className={`
                    ${item.color}

                    mt-2
                    text-lg
                    font-semibold
                  `}
                >
                  {item.value}
                </p>

                <span
                  className="
                    mt-2
                    block
                    text-sm
                    text-slate-500
                  "
                >
                  {item.subtext}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div
        className="
          mt-10
          flex
          gap-4
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-5
        "
      >
        <Lock
          size={20}
          className="
            mt-1
            text-slate-500
          "
        />

        <p
          className="
            text-sm
            leading-7
            text-slate-600
          "
        >
          Only active channels are shown.
          We do not monitor all channels 24/7.
        </p>
      </div>
    </div>
  )
}