export default function SectionLabel({ label }) {
  return (
    <div
      className="
        inline-flex
        rounded-full
        border
        border-blue-100
        bg-blue-50
        px-4
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-wider
        text-blue-700
      "
    >
      {label}
    </div>
  )
}