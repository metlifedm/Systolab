import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phases = ['Initializing...', 'Loading assets...', 'Calibrating...', 'Ready.']

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    let interval
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return Math.min(prev + (prev < 60 ? Math.random() * 8 + 3 : Math.random() * 4 + 1), 100)
      })
    }, 70)

    const timers = [0, 600, 1400, 2100].map((d, i) =>
      setTimeout(() => setPhase(i), d)
    )

    return () => {
      clearInterval(interval)
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: '#FFFFFF' }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(8px)',
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

          {/* Soft glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(26,74,122,0.06) 0%, transparent 70%)',
                top: '10%', left: '10%', transform: 'translate(-50%,-50%)',
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(44,110,73,0.05) 0%, transparent 70%)',
                bottom: '10%', right: '10%',
              }}
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-10 px-6">
            {/* Logo */}
            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
                    filter: 'blur(20px)',
                    opacity: 0.2,
                  }}
                  animate={{ opacity: [0.15, 0.35, 0.15] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <div
                  className="relative w-20 h-20 rounded-3xl flex items-center justify-center shadow-accent"
                  style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
                >
                  <span className="text-white font-display font-black text-4xl">A</span>
                </div>
              </div>
              <div className="text-center">
                <motion.h1
                  className="text-3xl font-display font-bold tracking-[0.3em] uppercase"
                  style={{ color: '#1A1A1A' }}
                  initial={{ opacity: 0, letterSpacing: '0.5em' }}
                  animate={{ opacity: 1, letterSpacing: '0.3em' }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  APEX
                </motion.h1>
                <motion.p
                  className="text-xs tracking-[0.5em] uppercase mt-1 font-mono"
                  style={{ color: '#8A8A8A' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Digital Agency
                </motion.p>
              </div>
            </motion.div>

            {/* Progress */}
            <motion.div
              className="w-64 flex flex-col gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div
                className="relative h-0.5 rounded-full overflow-hidden"
                style={{ background: '#E5E5E5' }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #1A4A7A, #2563EB, #2C6E49)' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>
              <div className="flex items-center justify-between">
                <motion.span
                  key={phase}
                  className="font-mono text-xs"
                  style={{ color: '#8A8A8A' }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {phases[phase]}
                </motion.span>
                <span className="font-mono text-xs" style={{ color: '#B0B0B0' }}>
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>

            {/* Dots */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#D0D0D0' }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}