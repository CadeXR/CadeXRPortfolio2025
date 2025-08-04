'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Cpu, Users, Globe, Zap, Eye, Brain, Award } from 'lucide-react'
import Link from 'next/link'

export default function VRFlatCrossPlatformPage() {
  const features = [
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'Unified gameplay system across VR and flat screen'
    },
    {
      icon: Users,
      title: 'Natural Interaction',
      description: 'Pick up, use, and interact with objects seamlessly'
    },
    {
      icon: Cpu,
      title: 'One Day Prototype',
      description: 'Rapid development demonstrating concept viability'
    },
    {
      icon: Eye,
      title: 'Design Parity',
      description: 'No compromises - full feature parity across platforms'
    }
  ]

  const sections = [
    {
      title: 'Overview',
      content: `I've always been fascinated by the unique strengths of both traditional flat screen games and immersive VR experiences. But the more I explored, the more I realized just how different — and often incompatible — their user experiences are. It's no wonder so few games support both natively.

So I challenged myself: What would it take to design a unified gameplay system that works seamlessly across both platforms?

In just one day of rapid prototyping, I built a fully functional item interaction system — one that allows players to pick up, use, and interact with game objects naturally, whether they're on a flat screen or in VR. No compromises. One system, two interfaces, full parity.

This project is an exploration of cross-platform design — not just supporting multiple platforms, but designing for them simultaneously.`
    },
    {
      title: 'The Challenge',
      content: `Traditional flat screen games and VR experiences have fundamentally different interaction paradigms:

• Flat screen: Mouse clicks, keyboard input, 2D UI elements
• VR: Controller tracking, spatial interaction, 3D manipulation

Most games either choose one platform or create separate versions with different features. This project explores what happens when you design a single system that works naturally on both.`
    },
    {
      title: 'The Solution',
      content: `The prototype demonstrates a unified item interaction system that:

• Uses the same underlying logic for both platforms
• Adapts input methods automatically based on platform
• Maintains consistent gameplay mechanics
• Provides natural interaction regardless of interface

Players can pick up objects, examine them, and use them in exactly the same way whether they're using a mouse or VR controllers.`
    },
    {
      title: 'Technical Implementation',
      content: `• Unity-based system with platform detection
• Abstracted input layer that maps to appropriate controls
• Shared object interaction logic
• Cross-platform asset compatibility
• Single codebase for both VR and flat screen builds

The system automatically detects whether it's running in VR or flat screen mode and adjusts the interface accordingly while maintaining identical functionality.`
    },
    {
      title: 'Design Philosophy',
      content: `This experiment challenges the common approach of "VR-first" or "flat screen-first" design. Instead, it asks: What if we designed for both simultaneously from the ground up?

The result is a system that doesn't compromise on either platform — players get the full experience regardless of how they choose to play. This approach could open up new possibilities for cross-platform gaming that doesn't feel like a watered-down version of either experience.`
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-teal-900/20" />
      
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
                 src="/media/FlatandVR.png" 
                 alt="VR Flat Cross Platform" 
                 className="w-full h-full object-cover"
               />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">VR - Flat Cross Platform</span>
              <br />
              <span className="text-gradient">Interaction System</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              Prototype Interaction System
            </p>
            
                         <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
               <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Experiment</span>
               <span>One Day Prototype</span>
               <span>Cross-Platform</span>
             </div>
          </motion.div>

          {/* Video Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">Demo Video</h2>
                             <div className="relative aspect-square rounded-xl overflow-hidden max-w-2xl mx-auto">
                 <video 
                   className="w-full h-full object-cover"
                   controls
                   poster="/media/FlatandVR.png"
                 >
                   <source src="/media/FlatvsVR.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
               </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-6">{section.title}</h2>
                <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  )
} 