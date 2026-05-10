import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  User, Building2, Mail, Phone, MessageSquare,
  Send, CheckCircle, ArrowRight, DollarSign,
  Target, ChevronDown,
} from 'lucide-react'

const WHATSAPP_NUMBER = '15550000000'

function formatWhatsAppMessage(data) {
  return encodeURIComponent(
    `🚀 *New Project Brief — APEX Digital*\n\n` +
    `👤 *Name:* ${data.name}\n` +
    `🏢 *Business:* ${data.business}\n` +
    `📧 *Email:* ${data.email}\n` +
    `📞 *Phone:* ${data.phone}\n` +
    `💰 *Monthly Revenue:* ${data.revenue}\n` +
    `🎯 *Primary Goal:* ${data.goal}\n` +
    `📋 *Services Interested In:* ${data.services.join(', ')}\n\n` +
    `💬 *Project Details:*\n${data.message}\n\n` +
    `---\n_Sent via APEX Digital — Initiate Page_`
  )
}

const serviceOptions = [
  'Performance Marketing',
  'SEO & Authority Building',
  'Brand Architecture',
  'Content Systems',
  'Social Media Growth',
  'Growth Analytics',
  'Full-Stack Growth',
]

const revenueOptions = [
  'Pre-revenue / Early Stage',
  '$10K – $50K/month',
  '$50K – $250K/month',
  '$250K – $1M/month',
  '$1M+/month',
]

const goalOptions = [
  'Increase Revenue',
  'Reduce Customer Acquisition Cost',
  'Build Brand Awareness',
  'Improve Organic Traffic',
  'Scale Paid Media',
  'Launch New Product',
  'Enter New Market',
]

function SelectField({ label, icon: Icon, value, onChange, options, name, error }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: focused ? '#1A4A7A' : 'rgba(255,255,255,0.2)' }}>
          <Icon size={16} />
        </div>
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pl-11 pr-10 py-3.5 rounded-xl text-sm appearance-none outline-none transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${focused ? 'rgba(26,74,122,0.5)' : error ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'}`,
            color: value ? 'white' : 'rgba(255,255,255,0.3)',
            boxShadow: focused ? '0 0 0 3px rgba(26,74,122,0.1)' : 'none',
          }}
        >
          <option value="" disabled style={{ background: '#111118' }}>Select an option</option>
          {options.map((o) => (
            <option key={o} value={o} style={{ background: '#111118', color: 'white' }}>{o}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} />
        </div>
      </div>
      {error && <p className="text-xs" style={{ color: 'rgba(239,68,68,0.8)' }}>{error}</p>}
    </div>
  )
}

function InputField({ label, icon: Icon, error, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: focused ? '#1A4A7A' : 'rgba(255,255,255,0.2)' }}>
          <Icon size={16} />
        </div>
        <input
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${focused ? 'rgba(26,74,122,0.5)' : error ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'}`,
            boxShadow: focused ? '0 0 0 3px rgba(26,74,122,0.1)' : 'none',
          }}
        />
      </div>
      {error && <motion.p className="text-xs" style={{ color: 'rgba(239,68,68,0.8)' }} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>{error}</motion.p>}
    </div>
  )
}

export default function InitiateForm() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '',
    revenue: '', goal: '', services: [], message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const toggleService = (s) => {
    setForm((p) => ({
      ...p,
      services: p.services.includes(s) ? p.services.filter((x) => x !== s) : [...p.services, s],
    }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.business.trim()) e.business = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.revenue) e.revenue = 'Please select your revenue range'
    if (!form.goal) e.goal = 'Please select your primary goal'
    if (form.services.length === 0) e.services = 'Select at least one service'
    if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Please describe your project (min 20 chars)'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
    const msg = formatWhatsAppMessage(form)
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
    }, 800)
  }

  if (submitted) {
    return (
      <section className="section-padding" style={{ background: '#0A0A0F' }}>
        <div className="container-custom">
          <motion.div
            className="max-w-xl mx-auto text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{ background: 'rgba(44,110,73,0.15)', border: '1px solid rgba(44,110,73,0.3)' }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle size={44} style={{ color: '#2C6E49' }} />
            </motion.div>
            <h2 className="text-3xl font-display font-black text-white mb-4">Opening WhatsApp...</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>
              Your project brief is prefilled. A senior strategist will respond within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding" style={{ background: '#0A0A0F' }} ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left sidebar info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: 'rgba(26,74,122,0.12)', border: '1px solid rgba(26,74,122,0.25)' }}
              >
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#1A4A7A' }}>
                  Start Here
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-4 leading-tight">
                Tell us about your business
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                The more detail you share, the more specific and valuable our response will be.
                No generic replies. No templates. Just a real strategy, built for you.
              </p>
            </div>

            {/* What happens next */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <h4 className="font-display font-bold text-white mb-4">What happens next</h4>
              {[
                { step: '01', text: 'We review your brief within 2 hours' },
                { step: '02', text: 'Senior strategist connects on WhatsApp' },
                { step: '03', text: 'We share a custom growth diagnosis' },
                { step: '04', text: 'You decide if we\'re the right fit' },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-3 mb-3 last:mb-0">
                  <span className="font-mono text-xs flex-shrink-0 mt-0.5" style={{ color: '#1A4A7A' }}>{step}</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Trust */}
            <div className="flex flex-col gap-2">
              {['No long-term contracts required', 'Results guaranteed or we work for free', '200+ brands successfully scaled', 'Senior strategists only — no juniors'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle size={14} style={{ color: '#2C6E49' }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-3xl p-8 lg:p-10"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Your Name *" icon={User} type="text" name="name" value={form.name} onChange={handleChange} placeholder="Alex Johnson" error={errors.name} autoComplete="name" />
                  <InputField label="Business Name *" icon={Building2} type="text" name="business" value={form.business} onChange={handleChange} placeholder="Acme Corp" error={errors.business} autoComplete="organization" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Email Address *" icon={Mail} type="email" name="email" value={form.email} onChange={handleChange} placeholder="alex@acme.com" error={errors.email} autoComplete="email" />
                  <InputField label="Phone / WhatsApp *" icon={Phone} type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" error={errors.phone} autoComplete="tel" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <SelectField label="Monthly Revenue *" icon={DollarSign} name="revenue" value={form.revenue} onChange={handleChange} options={revenueOptions} error={errors.revenue} />
                  <SelectField label="Primary Goal *" icon={Target} name="goal" value={form.goal} onChange={handleChange} options={goalOptions} error={errors.goal} />
                </div>

                {/* Service checkboxes */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Services Interested In *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => {
                      const active = form.services.includes(s)
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                          style={{
                            background: active ? 'linear-gradient(135deg,#1A4A7A,#2563EB)' : 'rgba(255,255,255,0.04)',
                            border: `1px solid ${active ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
                            color: active ? 'white' : 'rgba(255,255,255,0.45)',
                          }}
                        >
                          {s}
                        </button>
                      )
                    })}
                  </div>
                  {errors.services && (
                    <p className="text-xs" style={{ color: 'rgba(239,68,68,0.8)' }}>{errors.services}</p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Project Details *
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-4 top-4" style={{ color: 'rgba(255,255,255,0.2)' }} />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your current situation, biggest growth challenges, what you've tried before, and what success looks like for your business..."
                      rows={5}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm outline-none resize-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: `1px solid ${errors.message ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'}`,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(26,74,122,0.5)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(26,74,122,0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.message ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  {errors.message && (
                    <motion.p className="text-xs" style={{ color: 'rgba(239,68,68,0.8)' }} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-white relative overflow-hidden group"
                  style={{ background: 'linear-gradient(135deg,#1A4A7A,#2563EB)' }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg,#2563EB,#1A4A7A)' }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <Send size={18} />
                    <span>Send Brief via WhatsApp</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  Your details are secure. We'll connect via WhatsApp to discuss your project.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}