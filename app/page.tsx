'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from '@/components/AnimatedBackground'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import AboutModal from '@/components/AboutModal'
import PortfolioModal from '@/components/PortfolioModal'
import SocialModal from '@/components/SocialModal'
import ParticleSystem from '@/components/ParticleSystem'

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const openModal = (modalName: string) => {
    setActiveModal(modalName)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Particle System */}
      <ParticleSystem />

      {/* Navigation */}
      <Navigation onOpenModal={openModal} />

      {/* Hero Section */}
      <HeroSection onOpenModal={openModal} />

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'about' && (
          <AboutModal onClose={closeModal} onOpenModal={openModal} />
        )}
        {activeModal === 'portfolio' && (
          <PortfolioModal onClose={closeModal} />
        )}
        {activeModal === 'social' && (
          <SocialModal onClose={closeModal} />
        )}
      </AnimatePresence>

      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-conthrax text-white mb-2">CADEXR</h2>
              <p className="text-gray-400">Loading immersive experience...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
} 