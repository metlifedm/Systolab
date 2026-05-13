export default function Button({
  children,
  className = '',
}) {
  return (
    <button
      className={`
        group
        relative
        overflow-hidden
        rounded-xl
        bg-[#1447E6]
        px-6
        py-3
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-xl
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      <div
        className="
          absolute
          inset-0
          translate-y-full
          bg-black/10
          transition-transform
          duration-300
          group-hover:translate-y-0
        "
      />
    </button>
  )
}