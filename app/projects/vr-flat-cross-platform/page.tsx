'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Cpu, Users, Globe, Eye } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

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
              src="/media/FlatandVR.png"
              alt="VR Flat Cross Platform"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="fd-eyebrow">Cross-Platform</p>
          <h1 className="fd-title">
            VR - Flat Cross Platform
            <br />
            Interaction System
          </h1>
          <p className="fd-lede mx-auto mb-4">Prototype Interaction System</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm fd-muted">
            <span className="px-3 py-1 border border-[var(--fd-gold-dim)] text-[var(--fd-gold)] text-[11px] font-semibold uppercase tracking-wider">
              Experiment
            </span>
            <span>One Day Prototype</span>
            <span>Cross-Platform</span>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="fd-panel mb-12"
          style={{ marginTop: 0 }}
        >
          <h2 className="fd-panel-title text-center">Demo Video</h2>
          <div className="fd-media-frame aspect-square max-w-2xl mx-auto">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/media/FlatandVR.png"
            >
              <source src="/media/FlatvsVR.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
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
              transition={{ duration: 0.5, delay: 0.25 + index * 0.05 }}
              className="fd-panel"
              style={{ marginTop: 0 }}
            >
              <h2 className="fd-panel-title">{section.title}</h2>
              <div className="fd-body whitespace-pre-line mb-0">{section.content}</div>
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  )
}
