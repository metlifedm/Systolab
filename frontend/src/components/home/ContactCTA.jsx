import Button from '../common/Button'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="text-center">

          <h2
            className="
              heading-lg
              mx-auto
              max-w-4xl
              font-black
            "
          >
            Describe the bottleneck.
            We'll show you the system.
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
            "
          >
            Start a conversation.
            Get a system blueprint.
          </p>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {[
            {
              title: 'Email',
              value: 'hello@systolab.ai',
            },

            {
              title: 'WhatsApp',
              value: '+91 7358 94 6767',
            },

            {
              title: 'Call',
              value: '+91 7358 94 6767',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-[2rem]
                border
                border-slate-200
                p-8
              "
            >
              <h3
                className="
                  text-lg
                  font-black
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  text-xl
                  font-semibold
                  text-blue-700
                "
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button className="px-12 py-4">
            Initiate Inquiry →
          </Button>
        </div>
      </div>
    </section>
  )
}