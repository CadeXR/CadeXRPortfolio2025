'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, ArrowRight, Gamepad2, Cpu, Brain, Zap, Keyboard } from 'lucide-react'
import { useState } from 'react'

interface PortfolioModalProps {
  onClose: () => void
}

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  status: 'In Progress' | 'Available' | 'Completed' | 'Experiment'
  category: 'Hackathon' | 'Game' | 'Tool' | 'Hardware' | 'Prototypes'
  icon: any
  image?: string
  link?: string
}

export default function PortfolioModal({ onClose }: PortfolioModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: 'yap-vr-dictation-keyboard',
      title: 'Yap, The VR Dictation Keyboard',
      subtitle: 'Voice-to-Text Input for VR',
      description:
        'A VR dictation keyboard utility that enables natural voice-to-text input in virtual reality environments.',
      status: 'Available',
      category: 'Tool',
      icon: Keyboard,
      image: '/media/MainCapsule.png',
      link: '/projects/yap-vr-dictation-keyboard',
    },
    {
      id: 'project-dive',
      title: 'Project Dive',
      subtitle: 'Next Generation VR Immersion',
      description:
        'A Nervegear-like device using EKG and EIT kits to detect imperceptible muscle contractions for full VR immersion.',
      status: 'In Progress',
      category: 'Hardware',
      icon: Brain,
      image: '/media/ProjectDive.png',
      link: '/projects/project-dive',
    },
    {
      id: 'battlegrounds',
      title: 'Battlegrounds',
      subtitle: 'Fantasy Multiplayer Sandbox',
      description:
        'A fantasy multiplayer sandbox game for VR with immersive combat and social interaction.',
      status: 'Available',
      category: 'Game',
      icon: Gamepad2,
      image: '/media/Battlegrounds.png',
      link: '/projects/battlegrounds',
    },
    {
      id: 'this-game-has-no-name',
      title: 'This Game Has No Name',
      subtitle: 'Cooperative Horror Exploration',
      description:
        'A cooperative, open-world horror exploration game set in the forgotten corners of West Virginia. Players explore abandoned regions, upgrade their research bus, and uncover supernatural mysteries.',
      status: 'In Progress',
      category: 'Game',
      icon: Gamepad2,
      image: '/media/Nameless.png',
      link: '/projects/this-game-has-no-name',
    },
    {
      id: 'flexvr-wellness',
      title: 'FlexVR Wellness',
      subtitle: 'RH24 - Health & Wellness',
      description:
        'VR-based wellness and health application designed for therapeutic and fitness purposes.',
      status: 'Completed',
      category: 'Hackathon',
      icon: Zap,
      image: '/media/FlexWellness.png',
      link: '/projects/flexvr-wellness',
    },
    {
      id: 'deskbuddy',
      title: 'DeskBuddy',
      subtitle: 'ImmerseGT - Productivity Tool',
      description:
        'An immersive productivity tool designed to enhance workspace efficiency and organization.',
      status: 'Completed',
      category: 'Hackathon',
      icon: Cpu,
      image: '/media/DeskBuddy.jpg',
      link: '/projects/deskbuddy',
    },
    {
      id: 'intentional-locomotion',
      title: 'Intentional Locomotion',
      subtitle: 'RH25 - IMU-Based Micro-Gesture Detection',
      description:
        'A new approach to VR movement through IMU-based micro-gesture detection, enabling room-scale navigation while lying down. Translates subtle foot movements into virtual motion for fatigue-free VR experience.',
      status: 'Completed',
      category: 'Hackathon',
      icon: Brain,
      image: '/media/IntentionalLocomotion.png',
      link: '/projects/intentional-locomotion',
    },
    {
      id: 'hex-vr',
      title: 'Hex VR',
      subtitle: 'Zero Gravity VR Esport',
      description:
        'A VR esport designed around zero gravity movement, featuring competitive gameplay and innovative mechanics.',
      status: 'Available',
      category: 'Game',
      icon: Gamepad2,
      image: '/media/HexVR.png',
      link: '/projects/hex-vr',
    },
    {
      id: 'lightless',
      title: 'Lightless',
      subtitle: 'Immersive Horror Experience',
      description:
        'A unique horror VR experience that challenges perception and creates intense atmospheric immersion.',
      status: 'In Progress',
      category: 'Game',
      icon: Gamepad2,
      image: '/media/Lightless.png',
      link: '/projects/lightless',
    },
    {
      id: 'personifyai',
      title: 'PersonifyAI',
      subtitle: 'No-Code Discord AI Bot',
      description:
        'A lightweight, local-first tool that allows anyone to run a fully functional AI-powered Discord bot without writing a single line of code. Features custom prompts, wake words, and optional memory system.',
      status: 'In Progress',
      category: 'Tool',
      icon: Brain,
      image: '/media/PersonifyAI.png',
      link: '/projects/personifyai',
    },
    {
      id: 'vr-flat-cross-platform',
      title: 'VR - Flat Cross Platform Interaction System',
      subtitle: 'Bridging the Gap Between Flat Screen and VR Gaming',
      description:
        'A one-day prototype exploring unified gameplay systems that work seamlessly across both VR and flat screen platforms, with full feature parity and natural interaction.',
      status: 'Experiment',
      category: 'Prototypes',
      icon: Cpu,
      image: '/media/FlatandVR.png',
      link: '/projects/vr-flat-cross-platform',
    },
  ]

  const categories = ['All', 'Hackathon', 'Game', 'Tool', 'Hardware', 'Prototypes']

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  const statusClass = (status: Project['status']) => {
    if (status === 'Available') return 'text-fd-success border-fd-success'
    if (status === 'In Progress') return 'text-fd-gold border-fd-gold'
    if (status === 'Experiment') return 'text-fd-muted border-fd-gold-dim'
    return 'text-fd-cream border-fd-gold-dim'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-fd-ground/95 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto border border-fd-gold bg-fd-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative border-b border-fd-gold-dim p-8"
            style={{
              backgroundImage: 'url(/media/Working.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-fd-ground/75" />
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 fd-btn-quiet p-2"
              aria-label="Close"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
            <div className="relative z-10">
              <p className="fd-eyebrow">Portfolio</p>
              <h2 className="fd-title mb-0">My Work</h2>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`fd-tab ${selectedCategory === category ? 'fd-tab-active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => {
                    if (!project.link) return
                    if (project.link.startsWith('http')) {
                      window.open(project.link, '_blank')
                    } else {
                      window.location.href = project.link
                    }
                  }}
                  className="fd-panel cursor-pointer transition-colors hover:border-fd-gold"
                >
                  {project.image && (
                    <div className="fd-media-frame mb-4 h-32">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="mb-3 flex items-center justify-between">
                    <div className="fd-mark mb-0 h-10 w-10">
                      <project.icon size={18} strokeWidth={1.5} />
                    </div>
                    {hoveredProject === project.id && (
                      <ArrowRight size={16} className="text-fd-gold" strokeWidth={1.5} />
                    )}
                  </div>

                  <h3 className="fd-panel-title mb-1">{project.title}</h3>
                  <p className="mb-2 text-sm text-fd-gold">{project.subtitle}</p>
                  <p className="mb-4 text-sm text-fd-muted line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className={`border px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] ${statusClass(project.status)}`}
                    >
                      {project.status}
                    </span>
                    {project.link && (
                      <ExternalLink size={14} className="text-fd-gold" strokeWidth={1.5} />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <p className="py-12 text-center text-fd-muted">
                No projects found in this category.
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
