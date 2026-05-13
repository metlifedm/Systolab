import {
  ArrowRight,
  Send,
} from 'lucide-react'

import Button from '../common/Button'

export default function OperatorsCTA() {
  return (
    <section className="pb-24 bg-white">

      <div className="container-custom">

        <div
          className="
            flex
            flex-col
            gap-10
            rounded-[2rem]
            border
            border-slate-200
            bg-slate-50
            p-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:p-12
          "
        >
          <div className="flex items-center gap-6">

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-blue-100
                bg-white
                text-blue-700
              "
            >
              <Send size={34} />
            </div>

            <div>

              <h3
                className="
                  text-3xl
                  font-black
                "
              >
                Interested in what systems
                can do for your business?
              </h3>
            </div>
          </div>

          <Button className="px-10 py-4">
            Start the assessment
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}