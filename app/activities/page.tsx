'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Gamepad2, ExternalLink, Zap, Target, Users } from 'lucide-react'
import Link from 'next/link'

export default function ActivitiesPage() {
  const games = [
    {
      title: 'Hex VR',
      description: 'A VR Esport designed around zero gravity movement for VR. My role: Project Manager/Game Director',
      link: 'https://www.meta.com/en-gb/experiences/hex-vr/7202337956544173/?srsltid=AfmBOooht_Qp_t4-_CTaj1WibBjmEkEM3FUKdZYWf9Rdgm7kzyo6CqQh',
      status: 'Available',
      icon: Target,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Battlegrounds',
      description: 'A fantasy multiplayer sandbox game for VR. My role: Game Designer/Community Manager',
      link: 'https://www.meta.com/en-gb/experiences/battlegrounds/24783420087971207/',
      status: 'Available',
      icon: Users,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Particle Attack',
      description: 'Shoot particles for a high score! This game was just for fun, and runs right on this website :)',
      link: '/activities/attack',
      status: 'Available',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20" />
      
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
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-neon-blue rounded-full flex items-center justify-center"
            >
              <Gamepad2 size={40} className="text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Games</span> & Activities
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience my work through interactive games and VR experiences. 
              From competitive VR esports to casual web games, there's something for everyone.
            </p>
          </motion.div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={game.link}>
                  <div className="glass rounded-2xl p-6 h-full hover-lift cursor-pointer">
                    {/* Game Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${game.color} flex items-center justify-center`}>
                        <game.icon size={32} className="text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        game.status === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {game.status}
                      </span>
                    </div>

                    {/* Game Info */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {game.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {game.description}
                      </p>

                      {/* Play Button */}
                      <div className="flex items-center space-x-2 text-primary-400 group-hover:text-primary-300 transition-colors">
                        <span className="font-medium">Play Now</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">More Coming Soon</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm constantly working on new games and interactive experiences. 
                Follow me on social media to stay updated on the latest releases!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                  Little Dude Game
                </span>
                <span className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                  VR Demos
                </span>
                <span className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                  Interactive Tools
                </span>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Want to collaborate on a game project?</p>
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