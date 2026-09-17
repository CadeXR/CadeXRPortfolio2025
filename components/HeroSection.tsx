'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDown, Play, Download } from 'lucide-react'

interface HeroSectionProps {
  onOpenModal: (modalName: string) => void
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = [
    'XR Community Veteran',
    'UX Designer',
    'Game Designer',
    'Hackathon Creator',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="relative z-20 flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto w-full max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0.001, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="fd-media-frame mx-auto mb-8 inline-block w-56 h-56 md:w-72 md:h-72 bg-fd-panel p-3">
            <img
              src="/media/VR_Knight_Transparent.png"
              alt="VR Knight"
              className="h-full w-full object-contain"
            />
          </div>

          <p className="fd-eyebrow mb-2">Portfolio</p>
          <h1 className="fd-brand mb-4 text-4xl md:text-5xl tracking-[0.22em]">
            CADEXR
          </h1>

          <div className="mb-6 flex h-8 items-center justify-center">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="text-fd-muted text-sm uppercase tracking-[0.16em]"
            >
              {texts[currentTextIndex]}
            </motion.p>
          </div>

          <p className="fd-lede mx-auto text-fd-cream">
            XR community veteran and UX designer creating immersive experiences
            that reach over half a million users. From Meta Quest games to
            experimental prototypes, pushing the boundaries of what&apos;s
            possible in VR.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            type="button"
            onClick={() => onOpenModal('portfolio')}
            className="fd-btn-primary"
          >
            <Play size={16} strokeWidth={1.5} />
            View My Work
          </button>
          <button
            type="button"
            onClick={() => onOpenModal('about')}
            className="fd-btn-quiet"
          >
            <Download size={16} strokeWidth={1.5} />
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fd-muted"
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  )
}
