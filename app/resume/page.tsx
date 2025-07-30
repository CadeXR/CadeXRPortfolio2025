'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Download, ExternalLink, FileText, Calendar, MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
  const experiences = [
    {
      title: 'UX Game Designer',
      company: 'Sinn Studio',
      period: 'June 2024 - June 2025',
      location: 'Remote (contract)',
      description: 'UX Game Designer on Battlegrounds VR, helping drive the game to Top 25 on Meta Quest with over 500,000 players. Owned core gameplay systems, created UX documentation, and managed community feedback integration.'
    },
    {
      title: 'Golden Gear Studios - Founder',
      company: 'Hex VR',
      period: 'January 2023 - Current',
      location: 'Remote',
      description: 'Founded and led an independent studio focused on competitive VR experiences. Directed development of Hex VR, a zero-gravity multiplayer title for Meta Quest, designing core systems and managing community growth.'
    },
    {
      title: 'MIT Reality Hack Organization Team',
      company: 'Reality Hack, Inc',
      period: 'March 2024 - Current',
      location: 'MIT',
      description: 'Support team organizing large-scale XR events at MIT. Secure sponsors by coordinating with companies like Meta and Qualcomm. Apply communication and organizational skills to execute event logistics. Help design event elements tailored to attendees. Assemble hardware material kits for participants.'
    },
    {
      title: 'XR/IT Technician',
      company: 'Sector X',
      period: 'May 2023 - August 2024',
      location: 'Cherry Hill, NJ',
      description: 'Provided IT support for XR systems, hardware, and software. Operated AV equipment for events and live broadcasts. Diagnosed and maintained the Xist VR arena and proprietary systems. Coordinated with partners to ensure hardware functionality. Delivered real-time support for guests to ensure smooth VR experiences. Hosted and live-commentated VR streams on Twitch. Organized LAN gaming events and created promotional content with DaVinci Resolve.'
    }
  ]

  const skills = [
    { category: 'Game Development', items: ['Unity', 'Unreal Engine', 'Meta Quest SDK', 'SteamVR', 'Oculus SDK'] },
    { category: 'Programming', items: ['C#', 'C++', 'Python', 'JavaScript', 'TypeScript'] },
    { category: 'Design Tools', items: ['Blender', 'DaVinci Resolve', 'Adobe Creative Suite', 'Figma'] },
    { category: 'XR Prototyping', items: ['Hardware Prototyping', 'Community Management', 'Event Organization', 'Hackathon Projects'] }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
      
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-neon-blue rounded-full flex items-center justify-center"
            >
              <FileText size={40} className="text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Resume</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Cade Gilbert - XR Community Veteran, UX Designer, and Game Designer
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/media/CadeGilbertResume-July.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download PDF</span>
              </motion.a>
              
              <motion.a
                href="/media/CadeGilbertResume-July.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
              >
                <ExternalLink size={20} />
                <span>Open in New Tab</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              XR community veteran and UX designer with expertise in creating immersive experiences, 
              game design, and community management. My work has helped reach over half a million installs 
              on the Meta Quest platform, with projects ranging from commercial games to experimental prototypes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">10+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">3</div>
                <div className="text-gray-400">Published Games</div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Briefcase size={24} className="mr-3 text-primary-400" />
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="border-l-4 border-primary-500 pl-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-primary-400 font-medium mb-2">{exp.company}</div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Interested in working together?</p>
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