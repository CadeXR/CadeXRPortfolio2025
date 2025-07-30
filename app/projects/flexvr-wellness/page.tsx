'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Zap, Users, Heart, Award, Cpu, Eye, Brain } from 'lucide-react'
import Link from 'next/link'

export default function FlexVRWellnessPage() {
  const features = [
    {
      icon: Heart,
      title: 'Stress Reduction',
      description: 'VR environments designed to reduce patient stress during therapy'
    },
    {
      icon: Users,
      title: 'Remote Therapy',
      description: 'Therapists can communicate and control sessions remotely via AR'
    },
    {
      icon: Zap,
      title: 'Electro-Stimulation',
      description: 'Integrated e-stim therapy with programmable StimDuino device'
    },
    {
      icon: Eye,
      title: 'AR Integration',
      description: 'Snapdragon Spaces AR for enhanced therapeutic experience'
    }
  ]

  const sections = [
    {
      title: 'Synopsis',
      content: `FlexVR Wellness is an ecosystem developed to facilitate electro-stimulation therapy over XR environments, aiming to reduce patient stress. The system allows therapists to use AR headsets to communicate with and remotely control therapy sessions in calming VR environments.

This system was created in 60 hours at MIT Reality Hack and won the award "Hardware: Creative Inputs/Outputs." It was created by Cade Gilbert, Shane Mckelvey, James Higdon, Peter He, Ty Lindell, and mentored by Rina Kim.`
    },
    {
      title: 'Understanding The Problem',
      content: `When we started working on this project, we had a question we wanted to answer: How can we make a patient's experience, in any field, more comfortable, without making the professional's job harder? We understood that VR scenes could be used to visually stimulate patients in a calmer environment while a professional was at work and decided to build on that idea.

For our demo, we used a programmable device called a StimDuino, an open-source Arduino-based board to allow us to fine control electrodes using code, as well as integrating it with a suite of XR devices using OSC and Unity.`
    },
    {
      title: 'The Patient Experience',
      content: `VR Scene
A scene built in Unity 2022 with distracting colors and visuals, allowing for the patient to be immersed and not focused on the fear that can come from electro-stimulation therapy.

E-Stim Device
A small form factor device that can be clipped onto the belt or pants of the patient, with two electrodes running to set positions on the user's arm.`
    },
    {
      title: 'The Therapist Experience',
      content: `Workplace Scene
Built in Unity 2021, featuring patient info, 3D overlay of electrode placement, and heartrate monitor integration. The scene includes a 3D avatar of the patient for enhanced presence.

Snapdragon Spaces Integration
Utilizing augmented reality, hand tracking, and Dual Render Fusion for an enhanced therapeutic experience.`
    },
    {
      title: 'Future Development',
      content: `• Specialized E-Stim controller with mobile phone connectivity
• Enhanced therapist workflow integration
• AI-powered 3D environment generation based on patient preferences
• Improved data visualization and control systems`
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-900/20 via-black to-teal-900/20" />
      
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
                src="/media/FlexWellness.png" 
                alt="FlexVR Wellness" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">FlexVR</span> Wellness
            </h1>
            
            <p className="text-2xl text-gray-300 mb-4">
              Electro-Stimulation Therapy in XR Environments
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Completed</span>
              <span>MIT Reality Hack 2024</span>
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
              <span className="text-yellow-400 font-semibold">Hardware: Creative Inputs/Outputs Winner</span>
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Team Members</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Cade Gilbert</li>
                  <li>• Shane Mckelvey</li>
                  <li>• James Higdon</li>
                  <li>• Peter He</li>
                  <li>• Ty Lindell</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Mentor</h3>
                <p className="text-gray-300">Rina Kim</p>
                
                <h3 className="text-lg font-semibold text-white mb-3 mt-6">Technologies</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Unity 2021/2022</li>
                  <li>• StimDuino (Arduino-based)</li>
                  <li>• OSC Protocol</li>
                  <li>• Snapdragon Spaces AR</li>
                  <li>• C# Programming</li>
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