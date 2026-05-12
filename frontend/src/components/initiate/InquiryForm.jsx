import {
  Send,
  User,
  Building2,
  Globe,
} from 'lucide-react'

export default function InquiryForm() {
  return (
    <div
      className="
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        p-8
        lg:p-12
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
        B. Inquiry Form
      </span>

      <h2
        className="
          mt-6
          text-5xl
          font-black
          leading-tight
        "
      >
        Describe the
        system friction
      </h2>

      <div
        className="
          mt-6
          h-[2px]
          w-20
          rounded-full
          bg-blue-200
        "
      />

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-slate-600
        "
      >
        More operational detail
        produces a more accurate assessment.
      </p>

      <form className="mt-12 space-y-8">

        <div>
          <label
            className="
              mb-3
              block
              text-sm
              font-bold
              text-slate-700
            "
          >
            Name *
          </label>

          <div className="relative">

            <User
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Your full name"
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                pl-14
                pr-5
                text-base
                outline-none
                transition-all
                focus:border-blue-500
              "
            />
          </div>
        </div>

        <div>
          <label
            className="
              mb-3
              block
              text-sm
              font-bold
              text-slate-700
            "
          >
            Business Name *
          </label>

          <div className="relative">

            <Building2
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Your business or practice name"
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                pl-14
                pr-5
                text-base
                outline-none
                transition-all
                focus:border-blue-500
              "
            />
          </div>
        </div>

        <div>
          <label
            className="
              mb-3
              block
              text-sm
              font-bold
              text-slate-700
            "
          >
            Website URL
            <span className="font-normal">
              {' '}
              (optional)
            </span>
          </label>

          <div className="relative">

            <Globe
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="https://yourwebsite.com"
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                pl-14
                pr-5
                text-base
                outline-none
                transition-all
                focus:border-blue-500
              "
            />
          </div>
        </div>

        <div>
          <label
            className="
              mb-3
              block
              text-sm
              font-bold
              text-slate-700
            "
          >
            Operational Challenge *
          </label>

          <textarea
            rows="6"
            placeholder="
What operational process is slowing your business down?
What manual work is consuming unnecessary time?
            "
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              bg-white
              p-5
              text-base
              leading-8
              outline-none
              transition-all
              focus:border-blue-500
            "
          />
        </div>

        <div>
          <label
            className="
              mb-3
              block
              text-sm
              font-bold
              text-slate-700
            "
          >
            Preferred Contact Method *
          </label>

          <select
            className="
              h-16
              w-full
              rounded-2xl
              border
              border-slate-300
              bg-white
              px-5
              text-base
              outline-none
              transition-all
              focus:border-blue-500
            "
          >
            <option>
              Select your preferred contact method
            </option>

            <option>
              Email
            </option>

            <option>
              WhatsApp
            </option>

            <option>
              Phone
            </option>
          </select>
        </div>

        <div>

          <label
            className="
              mb-3
              block
              text-sm
              font-bold
              text-slate-700
            "
          >
            website_confirm
          </label>

          <input
            type="text"
            className="
              h-16
              w-full
              rounded-2xl
              border
              border-slate-300
              bg-white
              px-5
              outline-none
            "
          />

          <p
            className="
              mt-3
              text-sm
              leading-7
              text-slate-500
            "
          >
            Please leave this field empty.
            <br />
            (Helps us prevent spam submissions)
          </p>
        </div>

        <button
          type="submit"
          className="
            flex
            h-16
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            blue-gradient
            text-lg
            font-bold
            text-white
            transition-all
            hover:scale-[1.01]
            hover:shadow-2xl
          "
        >
          <Send size={22} />

          Send Inquiry
        </button>

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
            text-sm
            text-slate-500
          "
        >
          <span>🔒</span>

          Every inquiry is reviewed
          by a human operator.
        </div>
      </form>
    </div>
  )
}