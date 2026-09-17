'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Users, Brain, Award, Eye, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

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
              src="/media/DeskBuddy.jpg"
              alt="DeskBuddy"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="fd-eyebrow">Hackathon Project</p>
          <h1 className="fd-title">Desk Buddy</h1>
          <p className="fd-lede mx-auto mb-4">
            Holographic AR Assistant for Your Workspace
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm fd-muted mb-6">
            <span className="px-3 py-1 border border-[var(--fd-gold-dim)] text-[var(--fd-gold)] text-[11px] font-semibold uppercase tracking-wider">
              Completed
            </span>
            <span>ImmerseGT 2025</span>
            <span>Hackathon Project</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--fd-gold)] text-[var(--fd-gold)]">
            <Award size={16} strokeWidth={1.5} />
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Intelligent Immersion Track Winner
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
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fd-panel"
            style={{ marginTop: 0 }}
          >
            <h2 className="fd-panel-title">Technical Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="fd-panel-title text-base mb-3">Core Features</h3>
                <ul className="fd-body mb-0 space-y-2">
                  <li>• Real-time AI responses via Google Gemini</li>
                  <li>• AR projection using Snap Spectacles</li>
                  <li>• User intent detection system</li>
                  <li>• Personalized avatar and environment</li>
                </ul>
              </div>
              <div>
                <h3 className="fd-panel-title text-base mb-3">Development Challenges</h3>
                <ul className="fd-body mb-0 space-y-2">
                  <li>• Near real-time AI processing on Spectacles</li>
                  <li>• External server communication</li>
                  <li>• User intent detection algorithms</li>
                  <li>• AR environment optimization</li>
                </ul>
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
