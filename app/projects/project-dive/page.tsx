'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Zap, Target, Users, ExternalLink } from 'lucide-react'
import Link from 'next/link'

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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      
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
                src="/media/ProjectDive.png" 
                alt="Project Dive" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Project Dive</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              Next Generation VR Immersion
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">In Progress</span>
              <span>MIT Research</span>
              <span>2024</span>
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Development Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Development Status</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Current Progress</h3>
                <p className="text-gray-300 leading-relaxed">
                  After successfully prototyping at MIT in January 2024 and presenting at NYU shortly after, 
                  we're currently working on the final design pipeline and sourcing hardware components for the next iteration.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Next Steps</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Finalize hardware component selection</li>
                  <li>• Optimize bio-signal processing algorithms</li>
                  <li>• Conduct user testing and feedback</li>
                  <li>• Prepare for next prototype iteration</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Research Paper Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="https://hcie.csail.mit.edu/research/eit-kit/eit-kit.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon inline-flex items-center space-x-2"
            >
              <ExternalLink size={20} />
              <span>View EIT-Kit Research Paper</span>
            </motion.a>
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