'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Zap, Target, Users, ExternalLink, Code, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function IntentionalLocomotionPage() {
  const features = [
    {
      icon: Brain,
      title: 'IMU-Based Detection',
      description: 'Micro-gesture detection using custom IMU hardware mounted on feet'
    },
    {
      icon: Zap,
      title: 'Room-Scale Navigation',
      description: 'Enables full VR movement while lying down or seated'
    },
    {
      icon: Target,
      title: 'Intent-Driven Movement',
      description: 'Translates subtle, intentional foot movements into virtual motion'
    },
    {
      icon: Users,
      title: 'Fatigue-Free Experience',
      description: 'Reduces physical exertion while maintaining immersion'
    }
  ]

  const sections = [
    {
      title: 'Overview',
      content: `This project explores a new approach to VR movement through IMU-based micro-gesture detection, creating a locomotion system that enables room-scale navigation while lying down. By translating subtle, intentional foot movements into virtual motion, the system offers a more intuitive and fatigue-free VR experience—especially when combined with BCI (Brain-Computer Interface) technology for hands-free interaction.`
    },
    {
      title: 'My Role',
      content: `I worked as the Project Manager and led Unity development for the prototype, building core systems such as:

• A custom XR rig and locomotion manager for IMU-driven movement
• A C++ to C# data pipeline bridging Unity with IMU hardware for real-time data processing
• Integration of micro-gesture detection, using data pre-processed by a teammate's algorithm`
    },
    {
      title: 'Project Details',
      content: `The prototype demonstrated how players can walk, turn, and navigate in VR using only small, deliberate gestures from IMUs mounted on the feet. The concept, referred to as intentional locomotion, addresses a long-standing challenge in VR: the disconnect between physical and virtual embodiment.

While most VR systems require full-body motion or rely on artificial joystick movement, this system focuses on subtle physical inputs—reducing fatigue while enhancing control and immersion. Though planned BCI functionality was removed due to hardware failure, the project showed the viability of gesture-based movement on its own.`
    },
    {
      title: 'Tools & Technologies',
      content: `• Unity 2022
• Custom IMU-based hardware (x2)
• C# & C++
• Blender
• Muse S BCI (not used in final demo)`
    },
    {
      title: 'Outcome',
      content: `Although the project did not win awards at MIT Reality Hack 2025, our team remains proud of the prototype. We believe this system represents a meaningful step toward a future where VR movement is driven by intent rather than physical exertion, opening doors to more accessible and immersive experiences for all users.`
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
      
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
                src="/media/IntentionalLocomotion.png" 
                alt="Intentional Locomotion" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Intentional</span> Locomotion
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              IMU-Based Micro-Gesture Detection for VR
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Completed</span>
              <span>MIT Reality Hack 2025</span>
              <span>Hackathon Project</span>
            </div>
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
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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

          {/* Technical Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Technical Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Core Systems Built</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Custom XR rig and locomotion manager</li>
                  <li>• C++ to C# data pipeline</li>
                  <li>• Real-time IMU data processing</li>
                  <li>• Micro-gesture detection integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Innovations</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Room-scale navigation while lying down</li>
                  <li>• Subtle foot movement detection</li>
                  <li>• Fatigue-free VR locomotion</li>
                  <li>• Intent-driven movement system</li>
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