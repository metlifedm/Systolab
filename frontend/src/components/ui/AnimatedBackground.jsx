import { useEffect, useRef, memo } from 'react'
import { motion } from 'framer-motion'

function ParticlesCanvas({ count = 40 }) {
  const canvasRef = useRef(null)
  const stateRef = useRef({ animId: null, particles: [] })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      init()
    }

    const init = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      stateRef.current.particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.08,
        pulse: Math.random() * 0.015 + 0.004,
        offset: Math.random() * Math.PI * 2,
      }))
    }

    let frame = 0
    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      frame++

      const ps = stateRef.current.particles
      ps.forEach((p) => {
        p.x = (p.x + p.vx + w) % w
        p.y = (p.y + p.vy + h) % h
        const op = p.opacity * (0.6 + Math.sin(frame * p.pulse + p.offset) * 0.4)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(26,74,122,${op})`
        ctx.fill()
      })

      // Connections
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x
          const dy = ps[i].y - ps[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(ps[i].x, ps[i].y)
            ctx.lineTo(ps[j].x, ps[j].y)
            ctx.strokeStyle = `rgba(26,74,122,${(1 - d / 110) * 0.08})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      stateRef.current.animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    return () => {
      cancelAnimationFrame(stateRef.current.animId)
      ro.disconnect()
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.5 }}
      aria-hidden="true"
    />
  )
}

const orbConfigs = {
  default: [
    { top: '5%', left: '15%', color: 'rgba(26,74,122,0.06)', size: 600, delay: 0 },
    { bottom: '10%', right: '10%', color: 'rgba(44,110,73,0.05)', size: 450, delay: 2 },
    { top: '50%', left: '60%', color: 'rgba(37,99,235,0.04)', size: 380, delay: 1 },
  ],
  hero: [
    { top: '-5%', right: '5%', color: 'rgba(26,74,122,0.08)', size: 700, delay: 0 },
    { bottom: '0%', left: '5%', color: 'rgba(44,110,73,0.06)', size: 550, delay: 1.5 },
    { top: '40%', left: '40%', color: 'rgba(37,99,235,0.05)', size: 450, delay: 0.8 },
  ],
  minimal: [
    { top: '20%', left: '5%', color: 'rgba(26,74,122,0.05)', size: 350, delay: 0 },
    { bottom: '15%', right: '5%', color: 'rgba(44,110,73,0.04)', size: 300, delay: 1 },
  ],
  accent: [
    { top: '10%', right: '10%', color: 'rgba(26,74,122,0.09)', size: 650, delay: 0 },
    { bottom: '5%', left: '5%', color: 'rgba(44,110,73,0.06)', size: 500, delay: 1 },
    { top: '50%', left: '40%', color: 'rgba(37,99,235,0.05)', size: 380, delay: 0.5 },
  ],
}

function AnimatedBackground({
  variant = 'default',
  showParticles = true,
  showGrid = true,
  showOrbs = true,
  particleCount = 35,
  className = '',
}) {
  const orbs = orbConfigs[variant] || orbConfigs.default

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {showGrid && <div className="absolute inset-0 grid-pattern" />}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {showOrbs && orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom,
            width: orb.size, height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(2px)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
        />
      ))}

      {showParticles && <ParticlesCanvas count={particleCount} />}

      {/* Edge fades — white */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{ background: 'linear-gradient(to bottom, #FFFFFF, transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(to top, #FFFFFF, transparent)' }}
      />
    </div>
  )
}

export default memo(AnimatedBackground)