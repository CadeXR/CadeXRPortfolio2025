'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Coffee, Heart, Github, Code, Users } from 'lucide-react'
import Link from 'next/link'

export default function SupportPage() {
  const features = [
    {
      icon: Code,
      title: 'Open Source Tools',
      description: 'Free, constantly updating tools for XR developers'
    },
    {
      icon: Github,
      title: 'Community Driven',
      description: 'Built for and with the XR development community'
    },
    {
      icon: Users,
      title: 'Accessible',
      description: 'Lowering barriers to entry for VR/AR development'
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
            >
              <Coffee size={40} className="text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              Support My <span className="text-gradient-primary">Open Source</span> Work
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Hi! If you've reached this page, that's because you were curious about one of my open source apps. 
              I distribute my open source applications for free, allowing other developers like myself to have access 
              to constantly updating tools that can further along their projects in the XR space.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass rounded-xl p-6 hover-lift"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-neon-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Support Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <div className="flex items-start space-x-4 mb-6">
              <Heart size={24} className="text-red-400 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h2 className="text-2xl font-semibold text-white mb-4">Why I Need Your Support</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I make these tools for myself internally, and over time build them up into fully-fledged applications 
                  that are scalable. These take a lot of time, and I want to keep making these tools.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If you feel like supporting me, and allowing me to continue to make tools like these, 
                  I would appreciate it if you donated to my Ko-fi! Even the smallest donations help me 
                  spend time making these tools!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ko-fi Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-12"
          >
            <motion.a
              href="https://ko-fi.com/cadexr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Coffee size={24} />
              <span>☕ Support on Ko-fi</span>
            </motion.a>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">My Open Source Philosophy</h3>
            <p className="text-gray-300 leading-relaxed">
              I believe in the power of open source software to drive innovation and collaboration in the XR space. 
              By keeping my tools free and accessible, I hope to lower the barrier to entry for developers and creators 
              who want to build amazing experiences in virtual and augmented reality. Every contribution, no matter how small, 
              helps me continue this mission and ensures that these tools remain available to everyone in the community.
            </p>
          </motion.div>

          {/* Thank You */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 text-center"
          >
            <p className="text-2xl font-conthrax text-white mb-2">Thank you so much!</p>
            <p className="text-gray-400">- CadeXR</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 