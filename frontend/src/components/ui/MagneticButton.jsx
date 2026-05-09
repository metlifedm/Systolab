import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
  type = 'button',
  ...props
}) {
  const ref = useRef(null)
  const innerRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    const inner = innerRef.current
    if (!el || !inner) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transition = 'transform 0.1s ease'
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    inner.style.transform = `translate(${x * strength * 0.5}px, ${y * strength * 0.5}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    const inner = innerRef.current
    if (el) {
      el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
      el.style.transform = 'translate(0px, 0px)'
    }
    if (inner) {
      inner.style.transform = 'translate(0px, 0px)'
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button
        ref={innerRef}
        type={type}
        className={className}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}