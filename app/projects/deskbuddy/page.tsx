'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Users, Brain, Award, Cpu, Eye, MessageSquare, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function DeskBuddyPage() {
  const features = [
    {
      icon: Users,
      title: 'Personalized Assistant',
      description: 'Holographic companion that lives on your desk through AR'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Powered by Google Gemini for dynamic personality and real-time responses'
    },
    {
      icon: Eye,
      title: 'AR Integration',
      description: 'Built using Snap Spectacles and Snap Lens platform'
    },
    {
      icon: MessageSquare,
      title: 'Intent Detection',
      description: 'Smart system that detects when you\'re addressing Desk Buddy'
    }
  ]

  const sections = [
    {
      title: 'Overview',
      content: `Desk Buddy is a personalized, holographic assistant designed to live on your desk through augmented reality. Inspired by nostalgic digital companions like Clippy and Bonzi Buddy (but without the malware), Desk Buddy offers a friendly presence that can assist with simple tasks, provide ideas, and keep you company during your workday.`
    },
    {
      title: 'How It Works',
      content: `Built using Snap Spectacles and the Snap Lens platform, Desk Buddy is projected into your real-world space, allowing you to place him anywhere on your desk. The assistant is powered by Google Gemini, giving it a dynamic personality and the ability to respond to your needs in real-time. The virtual environment Desk Buddy inhabits was partially generated using Meshy, adding to its unique charm.

One of the key challenges we addressed was integrating a personalized AI response system that operates in near real-time on the Spectacles. To achieve this, we developed an external server that communicates with the Spectacles and built a system capable of detecting user intent—determining whether you're addressing Desk Buddy or not.`
    },
    {
      title: 'My Role',
      content: `I contributed to the project by:

• Rigging the Desk Buddy avatar and designing its environment.
• Developing aspects of the AI logic for personality-based prompting.
• Assisting in the overall design and user experience of the application.`
    },
    {
      title: 'Technologies Used',
      content: `• Snap Spectacles & Snap Lens Studio
• Google Gemini API
• Blender
• Meshy
• Mixamo
• Python
• TypeScript`
    },
    {
      title: 'Outcome',
      content: `Desk Buddy was awarded the Intelligent Immersion Track Winner at ImmerseGT 2025, recognizing its innovative approach to creating a personalized, AR-based assistant that enhances user interaction and productivity.`
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
      
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
                src="/media/DeskBuddy.jpg" 
                alt="DeskBuddy" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Desk</span> Buddy
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              Holographic AR Assistant for Your Workspace
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Completed</span>
              <span>ImmerseGT 2025</span>
              <span>Hackathon Project</span>
            </div>

            {/* Award Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30"
            >
              <Award size={20} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Intelligent Immersion Track Winner</span>
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                <h3 className="text-lg font-semibold text-white mb-3">Core Features</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Real-time AI responses via Google Gemini</li>
                  <li>• AR projection using Snap Spectacles</li>
                  <li>• User intent detection system</li>
                  <li>• Personalized avatar and environment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Development Challenges</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Near real-time AI processing on Spectacles</li>
                  <li>• External server communication</li>
                  <li>• User intent detection algorithms</li>
                  <li>• AR environment optimization</li>
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