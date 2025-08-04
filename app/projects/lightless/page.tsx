'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export default function LightlessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
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
            backgroundImage: 'url(/media/Lightless.png)',
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
              <span className="text-gradient-primary">Lightless</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Atmospheric VR horror game with strategic co-op gameplay.
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
                Lightless is an atmospheric VR horror game in development for the Meta Quest platform. Inspired by the Weeping Angels from Doctor Who, the game blends survival horror with strategic co-op gameplay in a dark sci-fi setting.
              </p>
            </motion.section>

            {/* Concept */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                Concept
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Set in a universe where the stars have gone out, you and up to three friends play as scavengers eking out a living by draining energy from derelict spaceships and stations. But you're not alone. Lurking in the shadows are the Lightless—predatory, energy-feeding creatures that can only move when they're not being watched.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                As you drain more energy, the lights aboard these ships grow dimmer—and the Lightless grow bolder. The core tension of Lightless revolves around managing visibility, coordinating movement, and making difficult choices as the environment becomes more hostile.
              </p>
            </motion.section>

            {/* Gameplay */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                Gameplay
              </h2>
              <ul className="text-gray-300 space-y-3">
                <li>• Cooperative survival horror for 1-4 players</li>
                <li>• Energy management and resource gathering</li>
                <li>• Strategic lighting and visibility mechanics</li>
                <li>• Every action brings you closer to your goal, but also closer to being hunted</li>
              </ul>
            </motion.section>

            {/* Development */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                Development
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                This is a solo-developed passion project, and I'm handling all aspects of its creation, including design & narrative, programming, art direction, and platform optimization for Meta Quest VR hardware.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                The project is currently in development with no set release date. As a long-term passion project, Lightless represents my interest in building deeply immersive, emotionally driven multiplayer experiences in VR.
              </p>
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
                  <span className="text-yellow-400 ml-2">In Progress</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Type:</span> Horror Co-op
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
                <p>• Solo Developer</p>
                <p>• Game Design & Narrative</p>
                <p>• Programming & Systems</p>
                <p>• Art Direction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 