import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  { name: 'Sarah Chen', title: 'CEO, TechFlow AI', avatar: 'SC', rating: 5, text: 'APEX Digital transformed our entire growth operation. In 6 months, we scaled from $800K to $4.2M ARR. Their AI-powered strategy is unlike anything we\'d seen before.', metric: '+425% ARR', industry: 'B2B SaaS', color: '#1A4A7A' },
  { name: 'Marcus Rodriguez', title: 'Founder, EliteCommerce', avatar: 'MR', rating: 5, text: 'We tried 3 agencies before APEX. The difference is night and day. They think like scientists — every decision is data-backed. Our ROAS went from 2.1x to 8.7x.', metric: '8.7x ROAS', industry: 'E-Commerce', color: '#2C6E49' },
  { name: 'Priya Sharma', title: 'CMO, Nexus Finance', avatar: 'PS', rating: 5, text: 'Within 90 days, our cost-per-acquisition dropped 67% while lead quality skyrocketed. I recommend APEX to every growth-stage company I advise.', metric: '-67% CPA', industry: 'FinTech', color: '#1A4A7A' },
  { name: 'James Wright', title: 'VP Growth, CloudCore', avatar: 'JW', rating: 5, text: 'Pipeline grew 340% year-over-year. Best decision we\'ve made in 3 years.', metric: '+340% Pipeline', industry: 'Enterprise SaaS', color: '#2C6E49' },
]

export default function TestimonialSlider({ className = '' }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((p) => (p + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const t = testimonials[current]

  const variants = {
    enter: (d) => ({ x: d > 0 ? 50 : -50, opacity: 0, filter: 'blur(4px)' }),
    center: { x: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: (d) => ({ x: d > 0 ? -50 : 50, opacity: 0, filter: 'blur(4px)', transition: { duration: 0.3 } }),
  }

  return (
    <section
      ref={ref}
      className={`section-padding ${className}`}
      style={{ background: '#F8F9FA' }}
    >
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="tag-accent mb-6">
            <Star size={12} fill="#F59E0B" style={{ color: '#F59E0B' }} />
            Client Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4" style={{ color: '#1A1A1A' }}>
            Trusted by <span className="text-gradient">industry leaders</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative rounded-3xl p-8 lg:p-12 overflow-hidden"
            style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
          >
            <Quote size={72} className="absolute top-8 right-8 opacity-5" style={{ color: '#1A4A7A' }} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
              >
                <div className="flex gap-1 mb-6">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" style={{ color: '#F59E0B' }} />
                  ))}
                </div>

                <blockquote
                  className="text-xl lg:text-2xl font-display font-medium leading-relaxed mb-8"
                  style={{ color: '#1A1A1A' }}
                >
                  "{t.text}"
                </blockquote>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-lg text-white"
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-display font-semibold" style={{ color: '#1A1A1A' }}>{t.name}</div>
                      <div className="text-sm" style={{ color: '#8A8A8A' }}>{t.title}</div>
                      <div className="text-xs font-mono mt-0.5" style={{ color: t.color }}>{t.industry}</div>
                    </div>
                  </div>
                  <div
                    className="px-5 py-3 rounded-2xl"
                    style={{ background: `${t.color}08`, border: `1px solid ${t.color}15` }}
                  >
                    <div className="font-display font-black text-2xl" style={{ color: t.color }}>{t.metric}</div>
                    <div className="text-xs" style={{ color: '#8A8A8A' }}>Growth Achieved</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-7">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current ? 'linear-gradient(90deg,#1A4A7A,#2563EB)' : '#E5E5E5',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ background: '#F1F3F5', border: '1px solid #E5E5E5' }}
                aria-label="Previous"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(26,74,122,0.08)'; e.currentTarget.style.borderColor = 'rgba(26,74,122,0.2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#F1F3F5'; e.currentTarget.style.borderColor = '#E5E5E5' }}
              >
                <ChevronLeft size={18} style={{ color: '#5A5A5A' }} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ background: 'linear-gradient(135deg,#1A4A7A,#2563EB)' }}
                aria-label="Next"
              >
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}