'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Users, Target, Award, Gamepad2, MessageSquare, Zap, Heart } from 'lucide-react'
import Link from 'next/link'

export default function HexVRPage() {
  const features = [
    {
      icon: Zap,
      title: 'Zero-Gravity VR',
      description: 'Exploring zero-gravity mechanics in virtual reality'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Created as a new home for the Echo VR community'
    },
    {
      icon: Target,
      title: 'VR Esports Focus',
      description: 'Contributing to the growth of VR esports space'
    },
    {
      icon: Heart,
      title: 'Passion Project',
      description: 'Small team of passionate developers working in free time'
    }
  ]

  const sections = [
    {
      title: 'Overview',
      content: `Hex VR is an indie development project focused on exploring zero-gravity mechanics in virtual reality, with the goal of contributing to the growth of the VR esports space.`
    },
    {
      title: 'Origin Story',
      content: `In January 2023, Meta and Ready At Dawn announced the shutdown of servers for their hit VR title, Echo VR. Echo had cultivated a large, passionate community and was a cornerstone of the VR esports scene. In response to the shutdown, a few of us from the community formed a small development team to create a new zero-gravity VR title—one that would give the Echo VR community a new home and ensure it wouldn't be left behind.`
    },
    {
      title: 'Development Progress',
      content: `Over the past year, we've released several tech demos as proof-of-concept builds. These demos have collectively earned over 50,000 downloads and have received strong support from the community.

The game is currently in an early access state, with a growing and dedicated player base. Our development team operates under the name Golden Gear Studios—a small group of passionate developers working on the project in our free time.`
    },
    {
      title: 'My Role',
      content: `I serve as the Creative Director, Community Manager, and one of the Programmers on the team, helping to guide the vision and development of the project.`
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20" />
      
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
                src="/media/HexVR.png" 
                alt="Hex VR" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Hex</span> VR
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              Zero-Gravity VR Esport
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">Available</span>
              <span>Golden Gear Studios</span>
              <span>Indie Project</span>
            </div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30"
            >
              <Award size={20} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">50,000+ Downloads</span>
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
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                <h3 className="text-lg font-semibold text-white mb-3">My Roles</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Creative Director</li>
                  <li>• Community Manager</li>
                  <li>• Programmer</li>
                  <li>• Vision & Development Guide</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Development Status</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Early Access State</li>
                  <li>• Growing Player Base</li>
                  <li>• Multiple Tech Demos Released</li>
                  <li>• Community-Driven Development</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Try Hex VR Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Try Hex VR</h2>
            <p className="text-gray-300 mb-6">
              Hex VR is available on Meta Quest. You can download it from the Meta Store.
            </p>
            <motion.a
              href="https://www.meta.com/en-gb/experiences/hex-vr/7202337956544173/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Gamepad2 size={20} />
              <span>Download on Meta Store</span>
            </motion.a>
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