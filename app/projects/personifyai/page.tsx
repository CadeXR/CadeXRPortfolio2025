'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, MessageSquare, Zap, Shield, Settings, Code, Users } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

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
    <div className="fd-root">
      <FrameGrid />

      <Link href="/" className="fd-back">
        <ArrowLeft size={16} strokeWidth={1.5} />
        <span>BACK</span>
      </Link>

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="fd-media-frame w-32 h-32 mx-auto mb-8">
            <img
              src="/media/PersonifyAI.png"
              alt="PersonifyAI"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="fd-eyebrow">Solo Project</p>
          <h1 className="fd-title">PersonifyAI</h1>
          <p className="fd-lede mx-auto mb-4">No-Code Discord AI Bot</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm fd-muted mb-6">
            <span className="px-3 py-1 border border-[var(--fd-gold-dim)] text-[var(--fd-gold)] text-[11px] font-semibold uppercase tracking-wider">
              In Progress
            </span>
            <span>Solo Project</span>
            <span>Python Tool</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--fd-gold)] text-[var(--fd-gold)]">
            <Code size={16} strokeWidth={1.5} />
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Local-First AI Tool
            </span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
              className="fd-panel text-center"
              style={{ marginTop: 0 }}
            >
              <div className="fd-mark mx-auto mb-4">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="fd-panel-title text-base mb-2">{feature.title}</h3>
              <p className="fd-muted text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="fd-panel"
              style={{ marginTop: 0 }}
            >
              <h2 className="fd-panel-title">{section.title}</h2>
              <div className="fd-body whitespace-pre-line mb-0">{section.content}</div>
            </motion.section>
          ))}

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="fd-panel"
            style={{ marginTop: 0 }}
          >
            <h2 className="fd-panel-title">Technical Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="fd-panel-title text-base mb-3">Core Components</h3>
                <ul className="fd-body mb-0 space-y-2">
                  <li>• Python backend with Discord.py integration</li>
                  <li>• OpenAI API integration for AI responses</li>
                  <li>• Local storage for configuration and memory</li>
                  <li>• Wake word detection system</li>
                </ul>
              </div>
              <div>
                <h3 className="fd-panel-title text-base mb-3">Performance Features</h3>
                <ul className="fd-body mb-0 space-y-2">
                  <li>• Lightweight and low system impact</li>
                  <li>• Automatic memory clearing every hour</li>
                  <li>• Efficient resource management</li>
                  <li>• Local-first architecture for privacy</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fd-panel"
            style={{ marginTop: 0 }}
          >
            <h2 className="fd-panel-title">Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="fd-mark mx-auto mb-4">
                  <Users size={24} strokeWidth={1.5} />
                </div>
                <h3 className="fd-panel-title text-base mb-2">Personal Companions</h3>
                <p className="fd-muted text-sm">Create AI companions for personal Discord servers</p>
              </div>
              <div className="text-center">
                <div className="fd-mark mx-auto mb-4">
                  <MessageSquare size={24} strokeWidth={1.5} />
                </div>
                <h3 className="fd-panel-title text-base mb-2">Community Assistants</h3>
                <p className="fd-muted text-sm">Add AI assistance to community Discord servers</p>
              </div>
              <div className="text-center">
                <div className="fd-mark mx-auto mb-4">
                  <Settings size={24} strokeWidth={1.5} />
                </div>
                <h3 className="fd-panel-title text-base mb-2">Custom Personalities</h3>
                <p className="fd-muted text-sm">Tailor AI personalities for specific use cases</p>
              </div>
            </div>
          </motion.section>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-center mt-12"
        >
          <p className="fd-muted mb-4">Interested in this project or want to collaborate?</p>
          <Link href="/" className="fd-btn-primary">
            Get In Touch
          </Link>
        </motion.div>
      </main>
    </div>
  )
}
