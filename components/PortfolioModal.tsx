'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, ArrowRight, Gamepad2, Cpu, Brain, Zap } from 'lucide-react'
import { useState } from 'react'

interface PortfolioModalProps {
  onClose: () => void
}

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  status: 'In Progress' | 'Available' | 'Completed'
  category: 'Hackathon' | 'Game' | 'Tool' | 'Hardware'
  icon: any
  color: string
  image?: string
  link?: string
}

export default function PortfolioModal({ onClose }: PortfolioModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: 'project-dive',
      title: 'Project Dive',
      subtitle: 'Next Generation VR Immersion',
      description: 'A Nervegear-like device using EKG and EIT kits to detect imperceptible muscle contractions for full VR immersion.',
      status: 'In Progress',
      category: 'Hardware',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      image: '/media/ProjectDive.png',
      link: '/projects/project-dive'
    },
    {
      id: 'battlegrounds',
      title: 'Battlegrounds',
      subtitle: 'Fantasy Multiplayer Sandbox',
      description: 'A fantasy multiplayer sandbox game for VR with immersive combat and social interaction.',
      status: 'Available',
      category: 'Game',
      icon: Gamepad2,
      color: 'from-red-500 to-orange-500',
      image: '/media/Battlegrounds.png',
      link: '/projects/battlegrounds'
    },
    {
      id: 'flexvr-wellness',
      title: 'FlexVR Wellness',
      subtitle: 'RH24 - Health & Wellness',
      description: 'VR-based wellness and health application designed for therapeutic and fitness purposes.',
      status: 'Completed',
      category: 'Hackathon',
      icon: Zap,
      color: 'from-green-500 to-teal-500',
      image: '/media/FlexWellness.png',
      link: '/projects/flexvr-wellness'
    },
    {
      id: 'deskbuddy',
      title: 'DeskBuddy',
      subtitle: 'ImmerseGT - Productivity Tool',
      description: 'An immersive productivity tool designed to enhance workspace efficiency and organization.',
      status: 'Completed',
      category: 'Hackathon',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      image: '/media/DeskBuddy.jpg',
      link: '/projects/deskbuddy'
    },
    {
      id: 'intentional-locomotion',
      title: 'Intentional Locomotion',
      subtitle: 'RH25 - IMU-Based Micro-Gesture Detection',
      description: 'A new approach to VR movement through IMU-based micro-gesture detection, enabling room-scale navigation while lying down. Translates subtle foot movements into virtual motion for fatigue-free VR experience.',
      status: 'Completed',
      category: 'Hackathon',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      image: '/media/IntentionalLocomotion.png',
      link: '/projects/intentional-locomotion'
    },
    {
      id: 'hex-vr',
      title: 'Hex VR',
      subtitle: 'Zero Gravity VR Esport',
      description: 'A VR esport designed around zero gravity movement, featuring competitive gameplay and innovative mechanics.',
      status: 'Available',
      category: 'Game',
      icon: Gamepad2,
      color: 'from-yellow-500 to-orange-500',
      image: '/media/HexVR.png',
      link: '/projects/hex-vr'
    },
    {
      id: 'lightless',
      title: 'Lightless',
      subtitle: 'Immersive Horror Experience',
      description: 'A unique horror VR experience that challenges perception and creates intense atmospheric immersion.',
      status: 'In Progress',
      category: 'Game',
      icon: Gamepad2,
      color: 'from-gray-600 to-gray-800',
      image: '/media/Lightless.png',
      link: '/projects/lightless'
    },
    {
      id: 'personifyai',
      title: 'PersonifyAI',
      subtitle: 'No-Code Discord AI Bot',
      description: 'A lightweight, local-first tool that allows anyone to run a fully functional AI-powered Discord bot without writing a single line of code. Features custom prompts, wake words, and optional memory system.',
      status: 'In Progress',
      category: 'Tool',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
      image: '/media/PersonifyAI.png',
      link: '/projects/personifyai'
    }
  ]

  const categories = ['All', 'Hackathon', 'Game', 'Tool', 'Hardware']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="glass rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-8 border-b border-white/10" style={{
            backgroundImage: 'url(/media/Working.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </motion.button>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-conthrax text-white mb-4"
            >
              My Work
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-neon-blue rounded-full"
            />
          </div>

          {/* Category Filter */}
          <div className="p-8 pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div 
                    onClick={() => {
                      if (project.link) {
                        if (project.link.startsWith('http')) {
                          window.open(project.link, '_blank')
                        } else {
                          window.location.href = project.link
                        }
                      }
                    }}
                    className="glass rounded-xl p-6 h-full hover-lift cursor-pointer"
                  >
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative mb-4 h-32 rounded-lg overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    )}

                    {/* Project Icon and Arrow */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                        <project.icon size={24} className="text-white" />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0,
                          x: hoveredProject === project.id ? 0 : 20
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={20} className="text-primary-400" />
                      </motion.div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-primary-400 font-medium">{project.subtitle}</p>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Status Badge */}
                      <div className="flex items-center justify-between pt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                          project.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                        
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No projects found in this category.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 