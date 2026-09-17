'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Mic, Zap, Globe, Shield, Code, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

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
              src="/media/MainCapsule.png"
              alt="Yap VR Dictation Keyboard"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="fd-eyebrow">VR Utility</p>
          <h1 className="fd-title">
            Yap
            <br />
            The VR Dictation Keyboard
          </h1>
          <p className="fd-lede mx-auto mb-4">Voice-to-Text Input for VR</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm fd-muted mb-6">
            <span className="px-3 py-1 border border-[var(--fd-gold-dim)] text-[var(--fd-gold)] text-[11px] font-semibold uppercase tracking-wider">
              Available
            </span>
            <span>VR Utility</span>
            <span>Tool</span>
          </div>

          <a
            href="https://store.steampowered.com/app/4100470?snr=5000_5100__"
            target="_blank"
            rel="noopener noreferrer"
            className="fd-btn-primary inline-flex items-center gap-2"
          >
            <span>View on Steam</span>
            <ExternalLink size={16} strokeWidth={1.5} />
          </a>
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
