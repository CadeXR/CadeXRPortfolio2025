'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, MessageSquare, Zap, Shield, Settings, Code, Users } from 'lucide-react'
import Link from 'next/link'

export default function PersonifyAIPage() {
  const features = [
    {
      icon: Brain,
      title: 'No-Code Setup',
      description: 'Simple configuration with just API keys - no programming required'
    },
    {
      icon: MessageSquare,
      title: 'Custom Prompts',
      description: 'Personalize your AI\'s personality and behavior'
    },
    {
      icon: Shield,
      title: 'Wake Word Detection',
      description: 'Configure when your AI responds in busy Discord channels'
    },
    {
      icon: Zap,
      title: 'Efficient Memory',
      description: 'Optional context memory with automatic clearing to keep resource usage low'
    }
  ]

  const sections = [
    {
      title: 'Overview',
      content: `PersonifyAI is a lightweight, local-first tool that allows anyone to run a fully functional AI-powered Discord bot—without writing a single line of code. Designed for ease of use and low system impact, the tool is perfect for users who want a personal AI companion in Discord without diving into bot development or hosting services.

The setup is simple: users provide a Discord bot token and an OpenAI API key, and they're ready to go. The bot supports custom prompts, adjustable "wake words," and an optional memory system that gives it short-term conversational context. To stay efficient, memory is automatically cleared every hour to keep RAM and storage usage low.`
    },
    {
      title: 'My Role',
      content: `This is a solo project, designed and built entirely by me. I handled:

Programming: Built the full back end in Python, integrating with the Discord API and OpenAI
UX & Accessibility: Focused on no-code usability—users just drop in their keys and it runs
Memory System: Implemented an optional short-term memory loop that resets periodically to optimize performance
Customization Features: Added adjustable prompt tuning and wake-word controls`
    },
    {
      title: 'Technologies Used',
      content: `• Python
• Discord.py
• OpenAI API
• Local storage`
    },
    {
      title: 'Key Features',
      content: `No-Code Setup
Simple configuration with just API keys - no programming required

Custom Prompts
Personalize your AI's personality and behavior

Wake Word Detection
Configure when your AI responds in busy Discord channels

Efficient Memory
Optional context memory with automatic clearing to keep resource usage low`
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-900/20 via-black to-rose-900/20" />
      
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
                src="/media/PersonifyAI.png" 
                alt="PersonifyAI" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Personify</span>AI
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              No-Code Discord AI Bot
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">In Progress</span>
              <span>Solo Project</span>
              <span>Python Tool</span>
            </div>

            {/* Tool Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 px-4 py-2 rounded-full border border-pink-500/30"
            >
              <Code size={20} className="text-pink-400" />
              <span className="text-pink-400 font-semibold">Local-First AI Tool</span>
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
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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

          {/* Technical Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Technical Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Core Components</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Python backend with Discord.py integration</li>
                  <li>• OpenAI API integration for AI responses</li>
                  <li>• Local storage for configuration and memory</li>
                  <li>• Wake word detection system</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Performance Features</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Lightweight and low system impact</li>
                  <li>• Automatic memory clearing every hour</li>
                  <li>• Efficient resource management</li>
                  <li>• Local-first architecture for privacy</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Companions</h3>
                <p className="text-gray-300 text-sm">Create AI companions for personal Discord servers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Community Assistants</h3>
                <p className="text-gray-300 text-sm">Add AI assistance to community Discord servers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Custom Personalities</h3>
                <p className="text-gray-300 text-sm">Tailor AI personalities for specific use cases</p>
              </div>
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