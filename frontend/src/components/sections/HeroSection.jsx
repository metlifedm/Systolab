import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Play, Zap, TrendingUp, Shield, Star } from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const words = ['Dominate.', 'Scale.', 'Convert.', 'Grow.', 'Win.']

function TypewriterWord() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout

    if (paused) {
      timeout = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1))
        }, 80)
      } else {
        setPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 45)
      } else {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, paused])

  return (
    <span
      className="inline-block min-w-[3ch]"
      style={{
        background: 'linear-gradient(135deg, #1A4A7A, #2563EB, #2C6E49)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {displayed}
      <span
        className="inline-block w-[3px] h-[0.85em] ml-1 align-middle rounded-full"
        style={{
          background: '#1A4A7A',
          animation: 'blink 1s step-end infinite',
          verticalAlign: 'middle',
          display: 'inline-block',
        }}
      />
    </span>
  )
}

function FloatingBadge({ children, className, delay = 0, style = {} }) {
  return (
    <motion.div
      className={`absolute hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl ${className}`}
      style={{
        background: 'rgba(22, 22, 30, 0.9)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5 + delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -3 }}
    >
      {children}
    </motion.div>
  )
}

function HeroVisual() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      t += 0.005

      // Animated rings
      const rings = [
        { r: 120, speed: 0.8, color: 'rgba(26,74,122,0.15)', dash: [8, 16] },
        { r: 160, speed: -0.5, color: 'rgba(44,110,73,0.1)', dash: [4, 20] },
        { r: 200, speed: 0.3, color: 'rgba(37,99,235,0.08)', dash: [12, 8] },
        { r: 240, speed: -0.2, color: 'rgba(26,74,122,0.06)', dash: [20, 10] },
      ]

      const cx = w / 2
      const cy = h / 2

      rings.forEach(({ r, speed, color, dash }) => {
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(t * speed)
        ctx.beginPath()
        ctx.setLineDash(dash)
        ctx.arc(0, 0, r, 0, Math.PI * 2)
        ctx.strokeStyle = color
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      })

      // Center glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 100)
      gradient.addColorStop(0, 'rgba(26,74,122,0.2)')
      gradient.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(cx, cy, 100, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Data points on rings
      rings.forEach(({ r, speed }, idx) => {
        const angle = t * speed + (idx * Math.PI) / 2
        const px = cx + Math.cos(angle) * r
        const py = cy + Math.sin(angle) * r
        ctx.beginPath()
        ctx.arc(px, py, 3, 0, Math.PI * 2)
        ctx.fillStyle = idx % 2 === 0 ? 'rgba(26,74,122,0.8)' : 'rgba(44,110,73,0.8)'
        ctx.fill()

        // Connection line
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(px, py)
        ctx.strokeStyle = idx % 2 === 0 ? 'rgba(26,74,122,0.08)' : 'rgba(44,110,73,0.06)'
        ctx.lineWidth = 0.5
        ctx.setLineDash([])
        ctx.stroke()
      })

      // Graph line (animated waveform)
      ctx.beginPath()
      const graphPoints = 60
      const graphW = w * 0.7
      const graphX = cx - graphW / 2
      const graphY = cy + 20

      for (let i = 0; i <= graphPoints; i++) {
        const x = graphX + (i / graphPoints) * graphW
        const wave = Math.sin(i * 0.2 + t * 3) * 12
        const trend = (i / graphPoints) * 30
        const y = graphY - wave - trend
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }

      const lineGrad = ctx.createLinearGradient(graphX, 0, graphX + graphW, 0)
      lineGrad.addColorStop(0, 'rgba(26,74,122,0.2)')
      lineGrad.addColorStop(0.5, 'rgba(37,99,235,0.6)')
      lineGrad.addColorStop(1, 'rgba(44,110,73,0.8)')
      ctx.strokeStyle = lineGrad
      ctx.lineWidth = 1.5
      ctx.setLineDash([])
      ctx.stroke()

      animId = requestAnimationFrame(draw)
    }

    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ opacity: 0.6 }}
    />
  )
}

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.96])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0F' }}
      aria-label="Hero section"
    >
      {/* Layered animated background */}
      <AnimatedBackground variant="hero" particleCount={60} />

      {/* Extra hero glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-center glow */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(26,74,122,0.25) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        {/* Bottom accent */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(44,110,73,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 container-custom pt-32 pb-20"
        style={{ y: smoothY, opacity, scale }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* LEFT — Text content */}
          <div className="flex flex-col items-start">

            {/* Top badge */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(44,110,73,0.12)',
                  border: '1px solid rgba(44,110,73,0.25)',
                }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'rgba(44,110,73,0.9)' }}
                >
                  Now Accepting Clients
                </span>
              </div>
              <div
                className="flex items-center gap-1 px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={10} fill="#D4AF37" style={{ color: '#D4AF37' }} />
                ))}
                <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>5.0</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <div className="mb-8">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block text-white">
                  We Make
                </span>
                <span className="block text-white">
                  Brands
                </span>
                <span className="block">
                  <TypewriterWord />
                </span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              className="text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Elite AI-powered digital marketing for ambitious brands. We combine
              proprietary growth systems, elite operators, and verified data to
              deliver outcomes that industry leaders trust.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/initiate"
                className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
                  boxShadow: '0 20px 40px rgba(26,74,122,0.35)',
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #1A4A7A)' }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Zap size={18} className="relative z-10" />
                <span className="relative z-10">Start Growing Today</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </Link>

              <Link
                to="/verified-outcomes"
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(26,74,122,0.2)', border: '1px solid rgba(26,74,122,0.3)' }}
                >
                  <Play size={12} fill="currentColor" style={{ color: '#1A4A7A', marginLeft: 2 }} />
                </div>
                <span>See Verified Outcomes</span>
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {[
                { icon: Shield, text: 'SOC 2 Compliant' },
                { icon: TrendingUp, text: '847% Avg ROI' },
                { icon: Zap, text: 'AI-Native Since 2020' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} style={{ color: 'rgba(26,74,122,0.8)' }} />
                  <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Visual */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main visual container */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(26,74,122,0.15) 0%, transparent 70%)',
                  animation: 'pulseGlow 4s ease-in-out infinite',
                }}
              />

              {/* Canvas visual */}
              <div
                className="absolute inset-8 rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <HeroVisual />
              </div>

              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-24 h-24 rounded-3xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
                    boxShadow: '0 0 60px rgba(26,74,122,0.5), 0 0 120px rgba(26,74,122,0.2)',
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 40px rgba(26,74,122,0.4), 0 0 80px rgba(26,74,122,0.15)',
                      '0 0 60px rgba(26,74,122,0.6), 0 0 120px rgba(26,74,122,0.25)',
                      '0 0 40px rgba(26,74,122,0.4), 0 0 80px rgba(26,74,122,0.15)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-white font-display font-black text-5xl">A</span>
                </motion.div>
              </div>

              {/* Floating badges */}
              <FloatingBadge
                className="top-4 -left-12"
                delay={0}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(44,110,73,0.2)' }}>
                  <TrendingUp size={14} style={{ color: '#2C6E49' }} />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">+847%</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Avg. ROI</div>
                </div>
              </FloatingBadge>

              <FloatingBadge
                className="bottom-8 -right-10"
                delay={0.15}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <div className="font-display font-bold text-sm text-white">200+ Clients</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Globally trusted</div>
                </div>
              </FloatingBadge>

              <FloatingBadge
                className="-bottom-2 left-4"
                delay={0.3}
              >
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={10} fill="#D4AF37" style={{ color: '#D4AF37' }} />
                  ))}
                </div>
                <span className="text-sm font-medium text-white">5.0 Rating</span>
              </FloatingBadge>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            Scroll to explore
          </span>
          <motion.div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="w-1 h-2.5 rounded-full"
              style={{ background: 'rgba(26,74,122,0.8)' }}
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}