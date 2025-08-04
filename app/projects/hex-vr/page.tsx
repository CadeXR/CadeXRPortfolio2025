'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export default function HexVRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-cyan-800 to-pink-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/media/HexVR.png)',
            backgroundPosition: 'center 20%'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-conthrax mb-4"
            >
              <span className="text-gradient-primary">Hex</span>
              <br />
              <span className="text-gradient">VR</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Zero-gravity VR esport with tactical movement and competitive team play.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-8 left-8 z-20"
      >
        <Link href="/#portfolio" className="btn-secondary flex items-center space-x-2">
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Hex VR is a zero-gravity sports game that blends tactical movement with competitive team play. Despite being in alpha, it has already surpassed 50,000 downloads on the Meta Quest platform, powered purely by word of mouth and community interest.
              </p>
            </motion.section>

            {/* Gameplay */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                Gameplay
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Players navigate in zero-gravity environments, using momentum and physics to outmaneuver opponents. The game emphasizes strategic positioning, team coordination, and mastery of the unique movement system.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Zero-gravity movement mechanics</li>
                <li>• Tactical team-based gameplay</li>
                <li>• Competitive esports focus</li>
                <li>• Physics-driven interactions</li>
              </ul>
            </motion.section>

            {/* Development */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                Development
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                As the founder of Golden Gear Studios, I lead the development of Hex VR as a passion-driven, volunteer collective. We operate entirely as a team united by a shared love for VR and the belief that great gameplay can emerge from genuine collaboration.
              </p>
            </motion.section>

            {/* Community */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                Community Success
              </h2>
              <ul className="text-gray-300 space-y-2">
                <li>• 50,000+ downloads on Meta Quest</li>
                <li>• Organic growth through word of mouth</li>
                <li>• Strong community engagement</li>
                <li>• Active player base despite alpha status</li>
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-conthrax text-white mb-4">Project Info</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <span className="font-semibold text-white">Category:</span> Game
                </div>
                <div>
                  <span className="font-semibold text-white">Status:</span> 
                  <span className="text-green-400 ml-2">Available</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Type:</span> Competitive Esport
                </div>
                <div>
                  <span className="font-semibold text-white">Platform:</span> Meta Quest
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-conthrax text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">Unity</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">C#</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">VR</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">Physics</span>
              </div>
            </motion.div>

            {/* My Role */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-conthrax text-white mb-4">My Role</h3>
              <div className="text-gray-300 space-y-2">
                <p>• Studio Founder</p>
                <p>• Game Design</p>
                <p>• Programming</p>
                <p>• Community Management</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 