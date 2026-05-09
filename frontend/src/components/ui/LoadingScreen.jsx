import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = ['Initializing...', 'Loading assets...', 'Calibrating...', 'Ready.']

  useEffect(() => {
    let progressInterval
    let phaseTimeout

    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 600)
          return 100
        }
        const increment = prev < 60 ? Math.random() * 8 + 2 : Math.random() * 4 + 1
        return Math.min(prev + increment, 100)
      })
    }, 80)

    const phaseIntervals = [0, 600, 1400, 2200]
    phaseIntervals.forEach((delay, i) => {
      setTimeout(() => setPhase(i), delay)
    })

    return () => {
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#0A0A0F' }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background glows */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(26, 74, 122, 0.3) 0%, transparent 70%)',
                top: '30%',
                left: '30%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(44, 110, 73, 0.2) 0%, transparent 70%)',
                bottom: '30%',
                right: '30%',
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-12">
            {/* Logo */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Logo mark */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #1A4A7A, #2C6E49)',
                    filter: 'blur(20px)',
                    opacity: 0.6,
                  }}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
                >
                  <span className="text-white font-display font-black text-4xl">A</span>
                </div>
              </div>

              {/* Brand name */}
              <div className="text-center">
                <motion.h1
                  className="text-3xl font-display font-bold tracking-[0.3em] text-white uppercase"
                  initial={{ opacity: 0, letterSpacing: '0.5em' }}
                  animate={{ opacity: 1, letterSpacing: '0.3em' }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                >
                  APEX
                </motion.h1>
                <motion.p
                  className="text-xs tracking-[0.5em] text-white/40 uppercase mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Digital Agency
                </motion.p>
              </div>
            </motion.div>

            {/* Progress section */}
            <motion.div
              className="w-80 flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Progress bar track */}
              <div className="relative h-[1px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #1A4A7A, #2563EB, #2C6E49)',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeInOut' }}
                />
                {/* Shimmer on bar */}
                <motion.div
                  className="absolute inset-y-0 w-20"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    left: `${progress - 10}%`,
                  }}
                />
              </div>

              {/* Stats row */}
              <div className="flex items-center justify-between">
                <motion.span
                  className="font-mono text-xs text-white/30"
                  key={phase}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {phases[phase]}
                </motion.span>
                <span className="font-mono text-xs text-white/40">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>

            {/* Animated dots */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-white/30"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}