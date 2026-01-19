'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Keyboard, Mic, Zap, Eye, Globe, MessageSquare, Brain, ExternalLink, Shield, Code } from 'lucide-react'
import Link from 'next/link'

export default function YapVRDictationKeyboardPage() {
  const features = [
    {
      icon: Mic,
      title: '100+ Languages',
      description: 'Dictation supports 100+ languages with Whisper-based recognition'
    },
    {
      icon: Globe,
      title: '40+ Translation',
      description: 'Built-in translation supporting 40+ languages in real-time'
    },
    {
      icon: Shield,
      title: 'Local Processing',
      description: 'All dictation and translation run locally for privacy and speed'
    },
    {
      icon: Code,
      title: 'YAPyOVR Engine',
      description: 'Custom Python OpenVR library for high-speed, easy integration'
    }
  ]

  const sections = [
    {
      title: 'Overview',
      content: `Yap is a speech-to-text application built specifically for VR that replaces clunky virtual keyboards with fast, natural voice dictation. It works in any PC application while you're in VR, providing a seamless text input experience that doesn't break immersion.

Yap was designed to be simple and plug right into your VR setup for ease of use. All dictation and translation processing happens locally on your machine, ensuring privacy and low latency. The application includes a built-in OpenVR overlay accessible directly from your controllers, making it easy to use without leaving your VR experience.`
    },
    {
      title: 'The Problem',
      content: `Text input in VR has always been a challenge:

• Physical keyboards are difficult to use while wearing a headset
• Virtual keyboards require precise hand tracking and can be slow
• Existing voice solutions often lack proper integration with VR applications
• Users need a solution that feels natural and doesn't break immersion

Yap addresses these issues by providing a dedicated, well-integrated voice input system designed specifically for VR environments.`
    },
    {
      title: 'The Solution',
      content: `Yap combines Whisper-based speech recognition with a custom-built OpenVR overlay system to create a seamless text input experience:

• Whisper-based dictation supporting 100+ languages
• Local processing for privacy and speed (no cloud dependency)
• Built-in translation supporting 40+ languages in real-time
• OpenVR overlay interface accessible from VR controllers
• Works across all PC applications
• Controller-accessible keybinds for Copy, Paste, Select, Enter, and Delete
• Background operation that doesn't interrupt gameplay or immersion
• Two performance modes optimized for mid-range and low-end systems

The result is a utility that makes text input in VR as natural as speaking, with all processing happening locally on your machine.`
    },
    {
      title: 'Key Features',
      content: `• Real-time speech recognition designed for VR use
• Whisper-based dictation supporting 100+ languages
• Built-in translation supporting 40+ languages
• All processing runs locally (no cloud dependency)
• Two performance modes optimized for different system specs
• Controller-accessible keybinds for Copy, Paste, Select, Enter, and Delete
• Works across all PC applications
• VR overlay interface accessible directly from controllers
• High-accuracy voice recognition
• Background operation that doesn't interrupt gameplay or immersion
• Simple setup that plugs right into your VR configuration`
    },
    {
      title: 'Technical Implementation',
      content: `Yap is built on a custom Python OpenVR library called YAPyOVR, designed for high speeds and easy integration. The technical architecture includes:

• Whisper-based speech recognition engine for accurate, local transcription
• YAPyOVR: Custom Python OpenVR library for high-performance VR overlay integration
• Local processing pipeline ensuring privacy and low latency
• OpenVR overlay system for seamless VR integration
• Real-time translation engine supporting 40+ languages
• Controller input system with configurable keybinds
• Background operation that doesn't interfere with VR applications
• Two performance modes to optimize for different hardware capabilities

The system is designed to be lightweight, efficient, and simple to set up - it plugs right into your VR setup without complex configuration.`
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-indigo-900/20" />
      
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
                src="/media/MainCapsule.png" 
                alt="Yap VR Dictation Keyboard" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Yap</span>
              <br />
              <span className="text-gradient">The VR Dictation Keyboard</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              Voice-to-Text Input for VR
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Available</span>
              <span>VR Utility</span>
              <span>Tool</span>
            </div>

            {/* Steam Store Link */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <motion.a
                href="https://store.steampowered.com/app/4100470?snr=5000_5100__"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-6 py-3 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <span>View on Steam</span>
                <ExternalLink size={20} />
              </motion.a>
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
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
