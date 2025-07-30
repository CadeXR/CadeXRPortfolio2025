'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDown, Play, Download } from 'lucide-react'

interface HeroSectionProps {
  onOpenModal: (modalName: string) => void
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const texts = [
    "XR Community Veteran",
    "UX Designer", 
    "Game Designer",
    "Hackathon Creator"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="min-h-screen flex items-center justify-center relative z-20 px-4">
      <div className="text-center max-w-6xl mx-auto">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          {/* VR Knight Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="relative mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0, 212, 255, 0.3)",
                    "0 0 40px rgba(0, 212, 255, 0.6)",
                    "0 0 20px rgba(0, 212, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <img 
                  src="/media/VR_Knight_Transparent.png" 
                  alt="VR Knight" 
                  className="w-full h-full object-contain"
                />
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(0, 212, 255, 0.3)",
                      "0 0 40px rgba(0, 212, 255, 0.6)",
                      "0 0 20px rgba(0, 212, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full pointer-events-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-5xl md:text-7xl font-conthrax text-white mb-6"
          >
            <span className="text-gradient-primary">CADE</span>
            <span className="text-gradient">XR</span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="h-12 md:h-16 flex items-center justify-center mb-8"
          >
            <motion.h2
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-light text-gray-300"
            >
              {texts[currentTextIndex]}
              {isTyping && <span className="animate-pulse">|</span>}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            XR community veteran and UX designer creating immersive experiences that reach over half a million users. 
            From Meta Quest games to experimental prototypes, pushing the boundaries of what's possible in VR.
          </motion.p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenModal('portfolio')}
            className="btn-primary flex items-center space-x-2"
          >
            <Play size={20} />
            <span>View My Work</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenModal('about')}
            className="btn-secondary flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Learn More</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 2 + i * 0.2 }}
            className="absolute w-2 h-2 bg-neon-blue rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
} 