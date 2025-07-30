'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Users, Gamepad2, Eye, Zap, Brain, Target, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function LightlessPage() {
  const features = [
    {
      icon: Users,
      title: 'Co-op Horror',
      description: 'Survival horror with strategic co-op gameplay for up to 4 players'
    },
    {
      icon: Eye,
      title: 'Weeping Angels',
      description: 'Inspired by Doctor Who\'s Weeping Angels - creatures that move when not watched'
    },
    {
      icon: Zap,
      title: 'Energy Management',
      description: 'Drain energy from derelict ships while managing visibility and safety'
    },
    {
      icon: Target,
      title: 'Strategic Gameplay',
      description: 'Every action brings you closer to your goal but also to being hunted'
    }
  ]

  const sections = [
    {
      title: 'Overview',
      content: `Lightless is an atmospheric VR horror game in development for the Meta Quest platform. Inspired by the Weeping Angels from Doctor Who, the game blends survival horror with strategic co-op gameplay in a dark sci-fi setting.`
    },
    {
      title: 'Concept',
      content: `Set in a universe where the stars have gone out, you and up to three friends play as scavengers eking out a living by draining energy from derelict spaceships and stations. But you're not alone. Lurking in the shadows are the Lightless—predatory, energy-feeding creatures that can only move when they're not being watched. As you drain more energy, the lights aboard these ships grow dimmer—and the Lightless grow bolder.

The core tension of Lightless revolves around managing visibility, coordinating movement, and making difficult choices as the environment becomes more hostile. Every action—every light switch flipped, every unit of energy harvested—brings you closer to your goal, but also closer to being hunted.`
    },
    {
      title: 'My Role',
      content: `This is a solo-developed passion project, and I'm handling all aspects of its creation, including:

Design & Narrative
Crafting the game's world, mechanics, and lore

Programming
Developing the core systems in Unity 2022, including multiplayer logic, AI behavior, and environmental interactions

Art Direction
Establishing the tone and visual atmosphere through lighting and environmental design

Platform Targeting
Optimizing the game for Meta Quest VR hardware`
    },
    {
      title: 'Technologies Used',
      content: `• Unity 2022
• Meta XR SDK
• C#
• VR multiplayer frameworks (custom setup)`
    },
    {
      title: 'Status',
      content: `The project is currently in development with no set release date. As a long-term passion project, Lightless represents my interest in building deeply immersive, emotionally driven multiplayer experiences in VR.`
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-800/20" />
      
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
                src="/media/Lightless.png" 
                alt="Lightless" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Lightless</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              Atmospheric VR Horror Game
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">In Development</span>
              <span>Meta Quest Platform</span>
              <span>Solo Project</span>
            </div>

            {/* Development Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full border border-orange-500/30"
            >
              <AlertTriangle size={20} className="text-orange-400" />
              <span className="text-orange-400 font-semibold">Passion Project - Long-term Development</span>
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
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
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

          {/* Game Mechanics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Game Mechanics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Core Systems</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Energy harvesting from derelict ships</li>
                  <li>• Dynamic lighting and visibility management</li>
                  <li>• Lightless AI behavior and movement</li>
                  <li>• Multiplayer coordination mechanics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Atmosphere & Tension</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Dark sci-fi setting with dimming lights</li>
                  <li>• Strategic resource management</li>
                  <li>• Risk vs. reward decision making</li>
                  <li>• Cooperative survival mechanics</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Development Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Development Focus</h2>
            <div className="text-gray-300 leading-relaxed text-lg">
              <p className="mb-4">
                As a solo passion project, Lightless represents my commitment to creating deeply immersive, 
                emotionally driven multiplayer experiences in VR. The game focuses on building tension 
                through environmental storytelling, strategic gameplay, and cooperative mechanics that 
                require players to work together while managing their own survival.
              </p>
              <p>
                The project serves as a platform for exploring advanced VR multiplayer systems, 
                atmospheric horror design, and the unique challenges of creating engaging cooperative 
                experiences in virtual reality.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
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