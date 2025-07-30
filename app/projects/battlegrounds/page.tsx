'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Users, Target, Award, Gamepad2, MessageSquare, MapPin, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function BattlegroundsPage() {
  const features = [
    {
      icon: Users,
      title: 'Community Management',
      description: 'Launched and grew Discord server to 10,000+ active users'
    },
    {
      icon: Target,
      title: 'Core Systems Design',
      description: 'Helped shape core gameplay systems and game identity'
    },
    {
      icon: MapPin,
      title: 'Level Design',
      description: 'Built levels and maps that encouraged exploration'
    },
    {
      icon: TrendingUp,
      title: 'Growth Achievement',
      description: 'Helped grow game to nearly 500,000 downloads'
    }
  ]

  const sections = [
    {
      title: 'Overview',
      content: `Battlegrounds VR is a free-to-play fantasy sandbox game set in a sprawling medieval world, where players can engage in real-time PvP sword fighting, explore open environments, and interact with a wide range of objects and systems. The game emphasizes player freedom, emergent gameplay, and social interaction—encouraging players to team up, go rogue, or create their own experiences.`
    },
    {
      title: 'My Contribution',
      content: `I joined the project in its early days as one of the founding gameplay designers, spending 11 months helping shape the core systems and identity of the game. During my time on the project, Battlegrounds VR reached nearly 500,000 downloads, fueled by strong community engagement and an open-ended design philosophy.`
    },
    {
      title: 'Responsibilities',
      content: `My work included prototyping features, building levels and maps, writing design documentation, and helping define mechanics that supported the sandbox-style gameplay. I also served as the Community Manager, launching and growing the game's Discord server to over 10,000 active users, creating a strong player hub that supported the game's growth and player-driven culture.`
    },
    {
      title: 'Key Achievements',
      content: `• Helped grow the game to nearly 500,000 downloads
• Built and managed a Discord community of 10,000+ active users
• Designed core gameplay systems that emphasized player freedom
• Created maps and environments that encouraged exploration and emergent gameplay`
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20" />
      
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="glass rounded-full p-3 text-white hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </motion.button>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden"
            >
              <img 
                src="/media/Battlegrounds.png" 
                alt="Battlegrounds VR" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Battlegrounds</span> VR
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              Fantasy Sandbox VR Game
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Available</span>
              <span>Sinn Studio</span>
              <span>Commercial Project</span>
            </div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-green-500/30"
            >
              <Award size={20} className="text-green-400" />
              <span className="text-green-400 font-semibold">500,000+ Downloads</span>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-6">{section.title}</h2>
                <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Project Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Role & Duration</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Founding Gameplay Designer</li>
                  <li>• Community Manager</li>
                  <li>• 11 months on project</li>
                  <li>• Early development through launch</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Game Features</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Real-time PvP sword fighting</li>
                  <li>• Open world exploration</li>
                  <li>• Sandbox-style gameplay</li>
                  <li>• Social interaction systems</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-4">Interested in this project or want to collaborate?</p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 