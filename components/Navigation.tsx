'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, User, Briefcase, MessageCircle, FileText } from 'lucide-react'

interface NavigationProps {
  onOpenModal: (modalName: string) => void
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', icon: User, action: () => onOpenModal('about') },
    { name: 'Work', icon: Briefcase, action: () => onOpenModal('portfolio') },
    { name: 'Resume', icon: FileText, action: () => { window.location.href = '/resume' } },
    { name: 'Connect', icon: MessageCircle, action: () => onOpenModal('social') },
  ]

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6"
      >
        <div className="flex items-center gap-8 border border-fd-gold bg-fd-panel px-6 py-3">
          <div className="fd-brand text-base">CADEXR</div>
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={item.action}
                className="fd-tab border-transparent hover:border-fd-gold"
              >
                <item.icon size={14} strokeWidth={1.5} />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 p-4"
      >
        <div className="flex justify-between items-center">
          <div className="fd-brand text-sm">CADEXR</div>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="fd-btn-quiet p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fd-panel mt-3"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      item.action()
                      setIsMenuOpen(false)
                    }}
                    className="fd-tab w-full justify-start border-transparent hover:border-fd-gold"
                  >
                    <item.icon size={16} strokeWidth={1.5} />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
