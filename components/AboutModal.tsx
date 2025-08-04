'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Github, Linkedin, Twitter, Youtube, Download } from 'lucide-react'

interface AboutModalProps {
  onClose: () => void
  onOpenModal?: (modalName: string) => void
}

export default function AboutModal({ onClose, onOpenModal }: AboutModalProps) {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/cade-gilbert', color: 'text-blue-400' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/cadexr', color: 'text-gray-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/cade-xr', color: 'text-blue-400' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@cade -xr', color: 'text-red-400' },
  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-8 border-b border-white/10" style={{
            backgroundImage: 'url(/media/AboutBackround.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </motion.button>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-conthrax text-white mb-4"
            >
              About Me
            </motion.h2>
            
            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <img 
                  src="/media/headshotnew.jpg" 
                  alt="Cade Gilbert" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-neon-blue rounded-full"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Story */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">My Journey</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm an XR community veteran and UX Designer with a focus on immersive experiences. My passion lies in understanding what drives XR forward—through networking, industry research, and active participation in events where I stay on top of trends and emerging technologies. Across the projects I've contributed to, my work has helped reach over half a million installs on the Meta Quest platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Professional Experience</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Most recently, I worked as a UX and Gameplay Design contractor at Sinn Studio, creators of the PSVR best-seller Swordsman VR. I joined their new project, Battlegrounds VR, in its early days as one of the founding gameplay designers, spending a year helping to shape its core systems and identity. During my time on the project, Battlegrounds reached nearly 500,000 downloads—fueled by a strong community and an open-ended design philosophy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Golden Gear Studios</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I also lead Golden Gear Studios, an indie team I founded to pursue bold, experimental ideas in immersive design. We operate entirely as a passion-driven, volunteer collective—united by a shared love for VR and the belief that great gameplay can emerge from genuine collaboration, not just budgets. Our flagship project, Hex VR, is a zero-gravity sports game that has already surpassed 50,000 downloads on the Meta Quest platform.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Skills & Experience */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Expertise</h3>
                  <div className="space-y-3">
                    {[
                      { skill: 'UX Design', level: 95 },
                      { skill: 'Game Design', level: 90 },
                      { skill: 'Unity/Unreal Engine', level: 90 },
                      { skill: 'Community Management', level: 85 },
                      { skill: 'Hardware Prototyping', level: 80 },
                    ].map((item, index) => (
                      <motion.div
                        key={item.skill}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{item.skill}</span>
                          <span className="text-primary-400">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.level}%` }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                            className="bg-gradient-to-r from-primary-500 to-neon-blue h-2 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Current Focus</h3>
                  <div className="space-y-3">
                    {[
                      'Immersive UX and gameplay design',
                      'Community-driven game development',
                      'Experimental XR prototyping',
                      'Hackathon project development',
                      'Meta Quest platform optimization'
                    ].map((focus, index) => (
                      <motion.div
                        key={focus}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-neon-blue rounded-full" />
                        <span className="text-gray-300">{focus}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`p-3 glass rounded-full ${link.color} hover:text-white transition-colors`}
                      >
                        <link.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onClose()
                    onOpenModal?.('social')
                  }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 