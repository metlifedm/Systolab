import { useRef } from 'react'

export function useMagneticEffect(strength = 0.3) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transition = 'transform 0.1s ease'
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    el.style.transform = 'translate(0px, 0px)'
  }

  return { ref, handleMouseMove, handleMouseLeave }
}