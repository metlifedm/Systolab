import { useEffect, useRef, memo } from 'react'
import { motion } from 'framer-motion'

// Floating particles canvas
function ParticlesCanvas({ count = 50 }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      }))
    }

    const drawConnections = (particles) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 120

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(26, 74, 122, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    let frame = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      particlesRef.current.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const pulse = Math.sin(frame * p.pulseSpeed + p.pulseOffset)
        const currentOpacity = p.opacity * (0.7 + pulse * 0.3)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
        ctx.fill()
      })

      drawConnections(particlesRef.current)
      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    animate()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animationRef.current)
      resizeObserver.disconnect()
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  )
}

// Main animated background component
function AnimatedBackground({
  variant = 'default',
  showParticles = true,
  showGrid = true,
  showOrbs = true,
  particleCount = 40,
  className = '',
}) {
  const orbConfigs = {
    default: [
      { top: '10%', left: '20%', color: 'rgba(26, 74, 122, 0.25)', size: 600, delay: 0 },
      { top: '60%', right: '10%', color: 'rgba(44, 110, 73, 0.15)', size: 500, delay: 2 },
      { bottom: '20%', left: '50%', color: 'rgba(37, 99, 235, 0.1)', size: 400, delay: 1 },
    ],
    hero: [
      { top: '-10%', left: '-5%', color: 'rgba(26, 74, 122, 0.35)', size: 800, delay: 0 },
      { top: '20%', right: '-10%', color: 'rgba(44, 110, 73, 0.2)', size: 600, delay: 1.5 },
      { bottom: '-5%', left: '30%', color: 'rgba(37, 99, 235, 0.15)', size: 500, delay: 0.8 },
    ],
    minimal: [
      { top: '30%', left: '10%', color: 'rgba(26, 74, 122, 0.15)', size: 400, delay: 0 },
      { bottom: '20%', right: '10%', color: 'rgba(44, 110, 73, 0.1)', size: 350, delay: 1 },
    ],
    accent: [
      { top: '20%', right: '20%', color: 'rgba(26, 74, 122, 0.4)', size: 700, delay: 0 },
      { bottom: '10%', left: '10%', color: 'rgba(44, 110, 73, 0.25)', size: 500, delay: 1.2 },
      { top: '50%', left: '50%', color: 'rgba(37, 99, 235, 0.2)', size: 400, delay: 0.6 },
    ],
  }

  const orbs = orbConfigs[variant] || orbConfigs.default

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Grid pattern */}
      {showGrid && (
        <div className="absolute inset-0 grid-pattern opacity-40" />
      )}

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Ambient orbs */}
      {showOrbs && orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(1px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Particles */}
      {showParticles && <ParticlesCanvas count={particleCount} />}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 10, 15, 0.6) 100%)',
        }}
      />

      {/* Top fade */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: 'linear-gradient(to bottom, #0A0A0F, transparent)' }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(to top, #0A0A0F, transparent)' }}
      />
    </div>
  )
}

export default memo(AnimatedBackground)