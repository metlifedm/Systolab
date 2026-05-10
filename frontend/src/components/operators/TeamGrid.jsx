import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Twitter, ArrowRight } from 'lucide-react'

const team = [
  { name: 'Alex Morgan', role: 'Founder & Chief Growth Officer', initials: 'AM', specialty: 'Growth Strategy', exp: '12 years', color: '#1A4A7A', bio: 'Former Head of Growth at two unicorn startups. Led $500M+ in media spend. Author of the APEX Growth Framework used by 200+ brands.', skills: ['Growth Architecture', 'Enterprise Strategy', 'Fundraising Narrative'] },
  { name: 'Sarah Chen', role: 'Head of AI & Performance', initials: 'SC', specialty: 'AI Marketing', exp: '9 years', color: '#2C6E49', bio: 'PhD in Machine Learning from MIT. Built AI bidding systems managing $200M+ annual ad spend. Pioneer in AI-driven creative optimization.', skills: ['AI/ML Systems', 'Paid Media', 'Attribution Modeling'] },
  { name: 'Marcus Williams', role: 'Director of SEO & Content', initials: 'MW', specialty: 'SEO Authority', exp: '11 years', color: '#1A4A7A', bio: 'Ranked 500+ websites to page 1. Former SEO lead at G2 and Drift. Built content operations generating $50M+ in organic revenue.', skills: ['Technical SEO', 'Content Strategy', 'Digital PR'] },
  { name: 'Priya Sharma', role: 'Brand Strategy Director', initials: 'PS', specialty: 'Brand Architecture', exp: '8 years', color: '#2C6E49', bio: 'Former brand director at IDEO. Repositioned 40+ companies for category leadership. Expert in positioning strategy and visual identity systems.', skills: ['Category Design', 'Brand Positioning', 'Visual Identity'] },
  { name: 'James Wright', role: 'Head of Analytics & Data', initials: 'JW', specialty: 'Growth Analytics', exp: '10 years', color: '#1A4A7A', bio: 'Built analytics infrastructure for Fortune 500 companies. Expert in multi-touch attribution, predictive modeling, and custom BI systems.', skills: ['Data Architecture', 'Attribution', 'Predictive Analytics'] },
  { name: 'Aisha Johnson', role: 'Social & Content Lead', initials: 'AJ', specialty: 'Social Growth', exp: '7 years', color: '#2C6E49', bio: 'Grew brand accounts from 0 to 500K+ across Instagram, LinkedIn, and TikTok. Expert in creator partnerships and viral content engineering.', skills: ['Social Strategy', 'Creator Networks', 'Community Building'] },
  { name: 'Ryan Park', role: 'Paid Media Director', initials: 'RP', specialty: 'Paid Acquisition', exp: '9 years', color: '#1A4A7A', bio: 'Managed $150M+ in paid media across Google, Meta, and programmatic. Architect of APEX\'s proprietary Creative Intelligence System.', skills: ['Google Ads', 'Meta Campaigns', 'Programmatic'] },
  { name: 'Elena Torres', role: 'Client Success Director', initials: 'ET', specialty: 'Client Partnership', exp: '8 years', color: '#2C6E49', bio: 'Former VP of Customer Success at Salesforce. Maintains APEX\'s 98% client retention. Expert in growth-stage business operations and executive communication.', skills: ['Client Strategy', 'Growth Operations', 'Executive Communication'] },
]

function TeamCard({ member, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer perspective-1000"
      style={{ height: '360px' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-3xl p-7 backface-hidden overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 100% 0%, ${member.color}12 0%, transparent 60%)`,
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
          />
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl text-white"
                style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}80)` }}
              >
                {member.initials}
              </div>
              <div
                className="px-3 py-1 rounded-full text-xs font-mono"
                style={{ background: `${member.color}15`, color: member.color, border: `1px solid ${member.color}25` }}
              >
                {member.exp}
              </div>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-1">{member.name}</h3>
            <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{member.role}</p>
            <p className="text-xs font-mono mb-5" style={{ color: member.color }}>{member.specialty}</p>
            <div className="flex flex-wrap gap-1.5">
              {member.skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-full text-xs"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="absolute bottom-6 right-7 flex items-center gap-1 text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
              <span>Tap for bio</span>
              <ArrowRight size={11} />
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-3xl p-7 backface-hidden overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${member.color}15, rgba(255,255,255,0.01))`,
            border: `1px solid ${member.color}25`,
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <h3 className="font-display font-bold text-lg text-white mb-0.5">{member.name}</h3>
              <p className="text-xs font-mono" style={{ color: member.color }}>{member.specialty}</p>
            </div>
            <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {member.bio}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                onClick={(e) => e.stopPropagation()}>
                <Linkedin size={15} style={{ color: 'rgba(255,255,255,0.5)' }} />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                onClick={(e) => e.stopPropagation()}>
                <Twitter size={15} style={{ color: 'rgba(255,255,255,0.5)' }} />
              </a>
              <span className="text-xs ml-auto" style={{ color: 'rgba(255,255,255,0.2)' }}>Tap to flip back</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TeamGrid() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section-padding" style={{ background: '#0A0A0F' }}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(26,74,122,0.12)', border: '1px solid rgba(26,74,122,0.25)' }}
          >
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#1A4A7A' }}>
              Core Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            The operators behind
            <span className="text-gradient"> your growth</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Tap any card to read their full story and track record.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <TeamCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}