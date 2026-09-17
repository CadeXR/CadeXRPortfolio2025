'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Zap, Users, Heart, Award, Eye } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

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
              src="/media/FlexWellness.png"
              alt="FlexVR Wellness"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="fd-eyebrow">Hackathon Project</p>
          <h1 className="fd-title">FlexVR Wellness</h1>
          <p className="fd-lede mx-auto mb-4">
            Electro-Stimulation Therapy in XR Environments
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm fd-muted mb-6">
            <span className="px-3 py-1 border border-[var(--fd-gold-dim)] text-[var(--fd-gold)] text-[11px] font-semibold uppercase tracking-wider">
              Completed
            </span>
            <span>MIT Reality Hack 2024</span>
            <span>Hackathon Project</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--fd-gold)] text-[var(--fd-gold)]">
            <Award size={16} strokeWidth={1.5} />
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Hardware: Creative Inputs/Outputs Winner
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
            <h2 className="fd-panel-title">Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="fd-panel-title text-base mb-3">Team Members</h3>
                <ul className="fd-body mb-0 space-y-2">
                  <li>• Cade Gilbert</li>
                  <li>• Shane Mckelvey</li>
                  <li>• James Higdon</li>
                  <li>• Peter He</li>
                  <li>• Ty Lindell</li>
                </ul>
              </div>
              <div>
                <h3 className="fd-panel-title text-base mb-3">Mentor</h3>
                <p className="fd-body mb-0">Rina Kim</p>

                <h3 className="fd-panel-title text-base mb-3 mt-6">Technologies</h3>
                <ul className="fd-body mb-0 space-y-2">
                  <li>• Unity 2021/2022</li>
                  <li>• StimDuino (Arduino-based)</li>
                  <li>• OSC Protocol</li>
                  <li>• Snapdragon Spaces AR</li>
                  <li>• C# Programming</li>
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
