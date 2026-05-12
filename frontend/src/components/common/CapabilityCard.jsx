export default function CapabilityCard({
  item,
}) {
  const Icon = item.icon

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-2xl
      "
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-blue-50
          to-white
        "
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-50
              text-blue-700
            "
          >
            <Icon size={26} />
          </div>

          <span
            className="
              text-sm
              font-semibold
              text-slate-400
            "
          >
            {item.number}
          </span>
        </div>

        <h3
          className="
            mb-4
            text-lg
            font-bold
            leading-snug
            text-slate-900
          "
        >
          {item.title}
        </h3>

        <p
          className="
            text-sm
            leading-7
            text-slate-600
          "
        >
          {item.description}
        </p>
      </div>
    </div>
  )
}