import {
  Mail,
} from 'lucide-react'
import { FaLinkedin } from "react-icons/fa";

export default function TeamOperators() {
  return (
    <section className="pb-24 bg-white">

      <div className="container-custom">

        <div className="max-w-5xl">

          <span
            className="
              text-sm
              font-black
              uppercase
              tracking-wider
              text-blue-700
            "
          >
            C. Team / Operators
          </span>

          <h2
            className="
              mt-6
              heading-lg
              font-black
            "
          >
            Built by operators,
            not spectators.
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-xl
              leading-10
              text-slate-600
            "
          >
            We have deployed operational systems
            for service businesses,
            hospitality groups,
            and local enterprises.
          </p>
        </div>

        <div
          className="
            mt-16
            mx-auto
            max-w-4xl
            rounded-[2rem]
            border
            border-slate-200
            bg-slate-50
            p-8
            lg:p-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-center
            "
          >
            <div
              className="
                h-56
                w-56
                overflow-hidden
                rounded-full
                bg-slate-200
              "
            />

            <div className="flex-1">

              <h3
                className="
                  text-4xl
                  font-black
                "
              >
                Syed Zaid
              </h3>

              <p
                className="
                  mt-3
                  text-lg
                  font-semibold
                  text-blue-700
                "
              >
                Founder & Principal Operator
              </p>

              <div
                className="
                  mt-8
                  max-w-2xl
                  space-y-4
                  text-lg
                  leading-9
                  text-slate-600
                "
              >
                <p>
                  Previously deployed automation systems
                  for hospitality and real estate businesses.
                </p>

                <p>
                  Focuses on reducing manual work
                  through operational workflows.
                </p>
              </div>

              <div className="mt-10 flex gap-5">

                <button
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    transition-all
                    hover:border-blue-200
                    hover:bg-blue-50
                  "
                >
                  <Mail size={22} />
                </button>

                <button
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    transition-all
                    hover:border-blue-200
                    hover:bg-blue-50
                  "
                >
                  <FaLinkedin size={22} />
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}