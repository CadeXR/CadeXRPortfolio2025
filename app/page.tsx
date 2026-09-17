'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import FrameGrid from '@/components/FrameGrid'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import AboutModal from '@/components/AboutModal'
import PortfolioModal from '@/components/PortfolioModal'
import SocialModal from '@/components/SocialModal'

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalName: string) => {
    setActiveModal(modalName)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <main className="fd-root">
      <FrameGrid />

      <Navigation onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />

      <AnimatePresence>
        {activeModal === 'about' && (
          <AboutModal onClose={closeModal} onOpenModal={openModal} />
        )}
        {activeModal === 'portfolio' && (
          <PortfolioModal onClose={closeModal} />
        )}
        {activeModal === 'social' && <SocialModal onClose={closeModal} />}
      </AnimatePresence>
    </main>
  )
}
