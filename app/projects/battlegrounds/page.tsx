'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export default function BattlegroundsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-yellow-800">
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
            backgroundImage: 'url(/media/Battlegrounds.png)',
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
              <span className="text-gradient-primary">Battlegrounds</span>
              <br />
              <span className="text-gradient">VR</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Fantasy multiplayer sandbox with immersive combat and social interaction.
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
                Battlegrounds VR is a free-to-play fantasy sandbox game set in a sprawling medieval world, where players can engage in real-time PvP sword fighting, explore open environments, and interact with a wide range of objects and systems. The game emphasizes player freedom, emergent gameplay, and social interaction—encouraging players to team up, go rogue, or create their own experiences.
              </p>
            </motion.section>

            {/* My Contribution */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                My Contribution
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                I joined the project in its early days as one of the founding gameplay designers, spending 11 months helping shape the core systems and identity of the game. During my time on the project, Battlegrounds VR reached nearly 500,000 downloads, fueled by strong community engagement and an open-ended design philosophy.
              </p>
            </motion.section>

            {/* Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                My work included prototyping features, building levels and maps, writing design documentation, and helping define mechanics that supported the sandbox-style gameplay. I also served as the Community Manager, launching and growing the game's Discord server to over 10,000 active users, creating a strong player hub that supported the game's growth and player-driven culture.
              </p>
            </motion.section>

            {/* Key Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                Key Achievements
              </h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Helped grow the game to nearly 500,000 downloads</li>
                <li>• Built and managed a Discord community of 10,000+ active users</li>
                <li>• Designed core gameplay systems that emphasized player freedom</li>
                <li>• Created maps and environments that encouraged exploration and emergent gameplay</li>
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
                  <span className="font-semibold text-white">Type:</span> Multiplayer Sandbox
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
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">Multiplayer</span>
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
                <p>• Gameplay Design</p>
                <p>• Level Design</p>
                <p>• Community Management</p>
                <p>• Systems Design</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 