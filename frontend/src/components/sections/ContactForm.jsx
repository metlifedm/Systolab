import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  User,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const WHATSAPP_NUMBER = '15550000000' // Replace with actual number

function formatWhatsAppMessage(data) {
  return encodeURIComponent(
    `🚀 *New Project Inquiry — APEX Digital*\n\n` +
    `👤 *Name:* ${data.name}\n` +
    `🏢 *Business:* ${data.business}\n` +
    `📧 *Email:* ${data.email}\n` +
    `📞 *Phone:* ${data.phone}\n\n` +
    `💬 *Message:*\n${data.message}\n\n` +
    `---\n` +
    `_Sent via APEX Digital website_`
  )
}

const inputStyles = {
  base: `w-full px-4 py-3.5 rounded-xl text-white text-sm transition-all duration-200 outline-none`,
  style: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
  },
}

function FormField({ label, icon: Icon, error, ...props }) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {label}
      </label>
      <div className="relative">
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2"
          style={{ color: focused ? '#1A4A7A' : 'rgba(255,255,255,0.2)' }}
        >
          <Icon size={16} />
        </div>
        <input
          {...props}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e) }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e) }}
          className={`${inputStyles.base} pl-11`}
          style={{
            ...inputStyles.style,
            borderColor: focused
              ? 'rgba(26, 74, 122, 0.5)'
              : error
              ? 'rgba(239, 68, 68, 0.5)'
              : 'rgba(255, 255, 255, 0.08)',
            boxShadow: focused ? '0 0 0 3px rgba(26, 74, 122, 0.1)' : 'none',
          }}
        />
      </div>
      {error && (
        <motion.p
          className="text-xs"
          style={{ color: 'rgba(239, 68, 68, 0.8)' }}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export default function ContactForm({
  title = "Start your growth journey",
  subtitle = "Fill out the form and we'll connect on WhatsApp within minutes.",
  className = '',
  compact = false,
}) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.business.trim()) newErrors.business = 'Business name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 20) newErrors.message = 'Please provide more detail (min 20 chars)'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const message = formatWhatsAppMessage(formData)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

    setSubmitted(true)
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }, 800)
  }

  if (submitted) {
    return (
      <motion.div
        className={`flex flex-col items-center justify-center text-center py-20 ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(44, 110, 73, 0.15)', border: '1px solid rgba(44, 110, 73, 0.3)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <CheckCircle size={36} style={{ color: '#2C6E49' }} />
        </motion.div>
        <h3 className="text-2xl font-display font-bold text-white mb-3">
          Opening WhatsApp...
        </h3>
        <p className="text-base" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Your message is prefilled. We'll respond within minutes.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {!compact && (
        <div className="mb-8">
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {subtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            label="Your Name *"
            icon={User}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            error={errors.name}
            autoComplete="name"
          />
          <FormField
            label="Business Name *"
            icon={Building2}
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
            placeholder="Company Inc."
            error={errors.business}
            autoComplete="organization"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            label="Email Address *"
            icon={Mail}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            error={errors.email}
            autoComplete="email"
          />
          <FormField
            label="Phone Number *"
            icon={Phone}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            error={errors.phone}
            autoComplete="tel"
          />
        </div>

        {/* Message textarea */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Your Message *
          </label>
          <div className="relative">
            <MessageSquare
              size={16}
              className="absolute left-4 top-4"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business goals, current challenges, and what you're looking to achieve..."
              rows={5}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm transition-all duration-200 outline-none resize-none"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${errors.message ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(26, 74, 122, 0.5)'
                e.target.style.boxShadow = '0 0 0 3px rgba(26, 74, 122, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.message ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.08)'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>
          {errors.message && (
            <motion.p
              className="text-xs"
              style={{ color: 'rgba(239, 68, 68, 0.8)' }}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden group"
          style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #2563EB, #1A4A7A)' }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center gap-3">
            <Send size={18} />
            <span>Send via WhatsApp</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>

        <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          By submitting, you agree to be contacted via WhatsApp. No spam, ever.
        </p>
      </form>
    </motion.div>
  )
}