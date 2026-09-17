'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Zap, Target, Users, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

export default function ProjectDivePage() {
  const features = [
    {
      icon: Brain,
      title: 'Bio-Signal Detection',
      description: 'EKG and EIT systems detect imperceptible muscle contractions'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Proprietary algorithms analyze bio-signals instantly'
    },
    {
      icon: Target,
      title: 'Full Immersion',
      description: 'Complete VR control through intent and micro-movements'
    },
    {
      icon: Users,
      title: 'Universal Compatibility',
      description: 'Works with all immersive software like SteamVR'
    }
  ]

  const sections = [
    {
      title: 'Personal Story',
      content: `I am working on the designs that can lead to the first generation of a Nervegear-like device. We prototyped an early version at MIT just this January, and I even gave a talk on the prototype and idea at NYU not a few weeks later. I've had conversations with tons of industry professionals I've worked alongside who are interested in seeing a first generation of the device, as well as several large creators in the XR industry I'm already connected with, who would both love to see that prototype and are interested in the project as a whole.`
    },
    {
      title: 'The Concept',
      content: `The basic overview is a device that is intended to allow full immersion inside a VR device, 'jacking in' like in The Matrix or Sword Art Online. But instead of waiting 10 years for some sort of outrageously expensive BCI technology or Neuralink chip to somehow be cheap and widespread, the system I am designing uses EKG and EIT kits to detect imperceptible muscle contractions in the legs and arms. These contractions are fed through an algorithm that translates these movements into control inputs that are agnostic with all immersive software (like SteamVR). A lot of the design for this device is based around hardware developed at MIT, found in this research paper: EIT-Kit Research Paper.`
    },
    {
      title: 'How It Works',
      content: `The system works by detecting micro-movements in your muscles that you don't even notice you're making. When you think about walking, your leg muscles contract ever so slightly. When you think about grabbing something, your hand muscles respond. These imperceptible contractions are picked up by the EKG and EIT sensors, processed by our proprietary algorithms, and translated into VR control inputs in real-time.`
    },
    {
      title: 'How It Feels',
      content: `The best way to describe how the device would feel is imagine laying down in your bed, and very lightly moving the muscles you use to walk. Every time you engage each leg you take a step. Now imagine this across the body, barely flexing a muscle in your arm to lift it, or grabbing door handles by very lightly contracting the same muscle you use to grip. Tying this system with a cheap, basic focus BCI device and eye tracking, I think a fully accessible, completely immersive and futuristic control method is possible.`
    },
    {
      title: 'Intentional Locomotion',
      content: `We originally called this system 'Intentional Locomotion' as it's controlling an XR rig entirely out of intent, instead of clunky un-immersive modern control schemes. And a future with a device like this could vastly increase retention in the XR space, going from Meta's recent 'comfort zone' of 20-40 minutes in VR, to hours of perfectly immersive, comfortable VR.`
    },
    {
      title: 'The Future of VR',
      content: `Imagine a world where VR isn't just a gaming platform, but a true extension of human experience. Where you can work, socialize, create, and explore in virtual spaces that feel as natural as the physical world. This technology could revolutionize not just gaming, but remote work, education, therapy, and social interaction.`
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
              src="/media/ProjectDive.png"
              alt="Project Dive"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="fd-eyebrow">Research</p>
          <h1 className="fd-title">Project Dive</h1>
          <p className="fd-lede mx-auto mb-4">Next Generation VR Immersion</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm fd-muted">
            <span className="px-3 py-1 border border-[var(--fd-gold-dim)] text-[var(--fd-gold)] text-[11px] font-semibold uppercase tracking-wider">
              In Progress
            </span>
            <span>Research</span>
            <span>2025</span>
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
              <p className="fd-body mb-0">{section.content}</p>
            </motion.section>
          ))}

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fd-panel"
            style={{ marginTop: 0 }}
          >
            <h2 className="fd-panel-title">Development Status</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="fd-panel-title text-base mb-3">Current Progress</h3>
                <p className="fd-body mb-0">
                  After successfully prototyping at MIT in January 2024 and presenting at NYU shortly after,
                  we&apos;re currently working on the final design pipeline and sourcing hardware components for the next iteration.
                </p>
              </div>
              <div>
                <h3 className="fd-panel-title text-base mb-3">Next Steps</h3>
                <ul className="fd-body mb-0 space-y-2">
                  <li>• Finalize hardware component selection</li>
                  <li>• Optimize bio-signal processing algorithms</li>
                  <li>• Conduct user testing and feedback</li>
                  <li>• Prepare for next prototype iteration</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-12 text-center"
        >
          <a
            href="https://hcie.csail.mit.edu/research/eit-kit/eit-kit.html"
            target="_blank"
            rel="noopener noreferrer"
            className="fd-btn-quiet inline-flex items-center gap-2"
          >
            <ExternalLink size={16} strokeWidth={1.5} />
            <span>View EIT-Kit Research Paper</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
