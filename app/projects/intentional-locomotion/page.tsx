'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Zap, Target, Users } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

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
              src="/media/IntentionalLocomotion.png"
              alt="Intentional Locomotion"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="fd-eyebrow">Hackathon Project</p>
          <h1 className="fd-title">Intentional Locomotion</h1>
          <p className="fd-lede mx-auto mb-4">
            IMU-Based Micro-Gesture Detection for VR
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm fd-muted">
            <span className="px-3 py-1 border border-[var(--fd-gold-dim)] text-[var(--fd-gold)] text-[11px] font-semibold uppercase tracking-wider">
              Completed
            </span>
            <span>MIT Reality Hack 2025</span>
            <span>Hackathon Project</span>
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
                <h3 className="fd-panel-title text-base mb-3">Core Systems Built</h3>
                <ul className="fd-body mb-0 space-y-2">
                  <li>• Custom XR rig and locomotion manager</li>
                  <li>• C++ to C# data pipeline</li>
                  <li>• Real-time IMU data processing</li>
                  <li>• Micro-gesture detection integration</li>
                </ul>
              </div>
              <div>
                <h3 className="fd-panel-title text-base mb-3">Key Innovations</h3>
                <ul className="fd-body mb-0 space-y-2">
                  <li>• Room-scale navigation while lying down</li>
                  <li>• Subtle foot movement detection</li>
                  <li>• Fatigue-free VR locomotion</li>
                  <li>• Intent-driven movement system</li>
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
