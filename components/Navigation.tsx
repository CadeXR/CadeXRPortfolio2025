'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Home, User, Briefcase, MessageCircle, FileText } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

interface NavigationProps {
  onOpenModal: (modalName: string) => void
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', icon: User, action: () => onOpenModal('about') },
    { name: 'Work', icon: Briefcase, action: () => onOpenModal('portfolio') },
    { name: 'Resume', icon: FileText, action: () => window.location.href = '/resume' },
    { name: 'Connect', icon: MessageCircle, action: () => onOpenModal('social') },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:flex fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-8"
      >
        <div className="glass rounded-full px-8 py-4 flex items-center space-x-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-conthrax text-white neon-glow"
          >
            CADEXR
          </motion.div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={item.action}
                className="flex items-center space-x-2 text-white hover:text-primary-400 transition-colors duration-300"
              >
                <item.icon size={18} />
                <span className="font-medium">{item.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 p-4"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-conthrax text-white neon-glow"
          >
            CADEXR
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="glass rounded-full p-3"
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl mt-4 p-6"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      item.action()
                      setIsMenuOpen(false)
                    }}
                    className="flex items-center space-x-3 text-white hover:text-primary-400 transition-colors duration-300 py-3"
                  >
                    <item.icon size={20} />
                    <span className="font-medium text-lg">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
} 