import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Building2, Mail, Phone, MessageSquare, Send, CheckCircle, ArrowRight } from 'lucide-react'
import { useWhatsApp } from '@/hooks/useWhatsApp'

function FormField({ label, icon: Icon, error, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" style={{ color: '#5A5A5A' }}>{label}</label>
      <div className="relative">
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: focused ? '#1A4A7A' : '#C0C0C0' }}
        >
          <Icon size={16} />
        </div>
        <input
          {...props}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e) }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e) }}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
          style={{
            background: '#FFFFFF',
            border: `1.5px solid ${focused ? '#1A4A7A' : error ? '#EF4444' : '#E5E5E5'}`,
            color: '#1A1A1A',
            boxShadow: focused ? '0 0 0 3px rgba(26,74,122,0.08)' : 'none',
          }}
        />
      </div>
      {error && (
        <motion.p className="text-xs" style={{ color: '#EF4444' }}
          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}>
          {error}
        </motion.p>
      )}
    </div>
  )
}

export default function ContactForm({
  title = 'Start your growth journey',
  subtitle = "Fill out the form and we'll connect on WhatsApp within minutes.",
  compact = false,
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const { openWhatsApp } = useWhatsApp()
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.business.trim()) e.business = 'Business name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Please add more detail (min 20 chars)'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
    setTimeout(() => openWhatsApp(form), 700)
  }

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center text-center py-14"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
          style={{ background: 'rgba(44,110,73,0.1)', border: '1px solid rgba(44,110,73,0.2)' }}
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <CheckCircle size={36} style={{ color: '#2C6E49' }} />
        </motion.div>
        <h3 className="text-2xl font-display font-bold mb-2" style={{ color: '#1A1A1A' }}>
          Opening WhatsApp...
        </h3>
        <p style={{ color: '#8A8A8A' }}>Your message is prefilled. We'll respond within minutes.</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {!compact && (
        <div className="mb-7">
          <h3 className="text-2xl lg:text-3xl font-display font-bold mb-2" style={{ color: '#1A1A1A' }}>
            {title}
          </h3>
          <p className="text-sm" style={{ color: '#8A8A8A' }}>{subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Your Name *" icon={User} type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" error={errors.name} autoComplete="name" />
          <FormField label="Business Name *" icon={Building2} type="text" name="business" value={form.business} onChange={handleChange} placeholder="Company Inc." error={errors.business} autoComplete="organization" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Email Address *" icon={Mail} type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" error={errors.email} autoComplete="email" />
          <FormField label="Phone Number *" icon={Phone} type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" error={errors.phone} autoComplete="tel" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium" style={{ color: '#5A5A5A' }}>Your Message *</label>
          <div className="relative">
            <MessageSquare size={16} className="absolute left-4 top-4 pointer-events-none" style={{ color: '#C0C0C0' }} />
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Tell us about your business goals and what you want to achieve..."
              rows={5}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none resize-none transition-all duration-200"
              style={{
                background: '#FFFFFF',
                border: `1.5px solid ${errors.message ? '#EF4444' : '#E5E5E5'}`,
                color: '#1A1A1A',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#1A4A7A'
                e.target.style.boxShadow = '0 0 0 3px rgba(26,74,122,0.08)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.message ? '#EF4444' : '#E5E5E5'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>
          {errors.message && (
            <motion.p className="text-xs" style={{ color: '#EF4444' }}
              initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}>
              {errors.message}
            </motion.p>
          )}
        </div>

        <motion.button
          type="submit"
          className="btn-primary w-full justify-center py-4 text-base"
          style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Send size={18} />
          <span>Send via WhatsApp</span>
          <ArrowRight size={18} />
        </motion.button>

        <p className="text-center text-xs" style={{ color: '#C0C0C0' }}>
          Your data is private & secure. We'll connect via WhatsApp only.
        </p>
      </form>
    </motion.div>
  )
}