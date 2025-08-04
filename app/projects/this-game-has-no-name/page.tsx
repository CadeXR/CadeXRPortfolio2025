'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export default function ThisGameHasNoNamePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#020A19' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/media/Nameless.png)',
            backgroundPosition: 'center 20%'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-conthrax mb-4"
            >
              <span className="text-gradient-primary">This Game</span>
              <br />
              <span className="text-gradient">Has No Name</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              An abandoned region. A rusting research bus. Friends. Monsters. Chaos.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-8 left-8 z-20"
      >
        <Link href="/#portfolio" className="btn-secondary flex items-center space-x-2">
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
                             <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                 Overview
               </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                This Game Has No Name is a cooperative, open-world horror exploration game set in the forgotten corners of West Virginia. Players step into the worn-out boots of amateur researchers, rolling into an off-limits region steeped in cryptid lore, government secrets, and supernatural phenomena.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                Your goal is simple: explore the abandoned world, recover lost research, upgrade your ramshackle bus, and uncover what happened — if the local wildlife and stranger things don't stop you first.
              </p>
            </motion.section>

            {/* The Bus */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="glass p-8 rounded-2xl"
            >
                             <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                 The Bus
               </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Your base of operations is a barely-functioning research vehicle, converted from an old electric school bus. Strapped with solar panels, jury-rigged sensors, and falling apart at the seams, the bus is your mobile lifeline.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Upgradeable with scavenged parts (radar, shielding, lights, equipment racks)</li>
                <li>• Electric-powered, solar-recharged, and prone to chaos</li>
                <li>• Enemies can physically interact with it — including picking it up and throwing it</li>
              </ul>
            </motion.section>

            {/* Multiplayer Exploration */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="glass p-8 rounded-2xl"
            >
                             <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                 Multiplayer Exploration
               </h2>
              <ul className="text-gray-300 space-y-3">
                <li>• Designed for 1–4 player co-op</li>
                <li>• Drop in, split up, or stick together — every decision carries risk</li>
                <li>• Coordinate exploration, defense, and upgrades while navigating a world that actively resists you</li>
                <li>• Discover strange technology, encrypted hard drives, abandoned research sites, and things that were never supposed to be found</li>
              </ul>
            </motion.section>

            {/* The Setting */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass p-8 rounded-2xl"
            >
                             <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                 The Setting
               </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                A fictionalized slice of Appalachia, inspired by cryptid legends and Cold War-era paranoia.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Entire towns left to rot, full of flickering lights and signs of recent movement</li>
                <li>• Military facilities sealed and silent — or still humming with hidden energy</li>
                <li>• A once-functioning electrical grid, now long dormant, waiting to be reactivated</li>
                <li>• Creatures in the woods and skies that do not want to be studied</li>
              </ul>
            </motion.section>

            {/* The Threats */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="glass p-8 rounded-2xl"
            >
                             <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                 The Threats
               </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                The world pushes back. Exploring isn't safe.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Mothman</strong> — flies from the treetops to grab players and vehicles, launching them across the map</li>
                <li>• <strong>Wendigos</strong> — fast, hungry, and sound-sensitive, chasing anything that breaks the silence</li>
                <li>• Rogue AI drones, mutated wildlife, glitching buildings — all part of something stranger</li>
                <li>• Danger escalates the longer you stay alive and the deeper you explore</li>
              </ul>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="glass p-8 rounded-2xl"
            >
                             <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                 Key Features
               </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                                         <h3 className="text-xl font-semibold text-white mb-2">Open World, Freeform Exploration</h3>
                    <p className="text-gray-300">No checkpoints or levels — just a vast, interconnected region waiting to be picked apart.</p>
                  </div>
                  <div>
                                         <h3 className="text-xl font-semibold text-white mb-2">Bus-Based Progression</h3>
                    <p className="text-gray-300">Upgrade your vehicle to access new areas, store gear, and survive longer runs.</p>
                  </div>
                  <div>
                                         <h3 className="text-xl font-semibold text-white mb-2">Research and Recovery Loop</h3>
                    <p className="text-gray-300">Find hard drives and scientific data scattered throughout abandoned labs and outposts.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                                         <h3 className="text-xl font-semibold text-white mb-2">Dynamic Systems and Physics-Driven Encounters</h3>
                    <p className="text-gray-300">Enemies don't just attack — they interact. Pickups, knockdowns, physical chaos.</p>
                  </div>
                  <div>
                                         <h3 className="text-xl font-semibold text-white mb-2">Horrifying and Hilarious</h3>
                    <p className="text-gray-300">Whether you're sprinting from a wendigo or watching your bus get launched off a cliff, the line between horror and humor constantly blurs.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Current Development */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="glass p-8 rounded-2xl"
            >
                             <h2 className="text-3xl font-conthrax text-white mb-6 flex items-center">
                 Current Development
               </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                The project is in prototype development, with current focus on:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Core AI behavior systems (flying enemy pickup, reactive threats)</li>
                <li>• Bus movement, upgrading, and damage</li>
                <li>• Environmental systems (abandoned grid power, area scanning)</li>
                <li>• Multiplayer infrastructure and item transport systems</li>
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-conthrax text-white mb-4">Project Info</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <span className="font-semibold text-white">Category:</span> Game
                </div>
                <div>
                  <span className="font-semibold text-white">Status:</span> 
                  <span className="text-yellow-400 ml-2">In Progress</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Type:</span> Multiplayer Co-op
                </div>
                <div>
                  <span className="font-semibold text-white">Platform:</span> PC
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-conthrax text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">Unity</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">C#</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">Multiplayer</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">Physics</span>
              </div>
            </motion.div>

            {/* My Role */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-conthrax text-white mb-4">My Role</h3>
              <div className="text-gray-300 space-y-2">
                <p>• Game Design & Systems</p>
                <p>• Programming & AI</p>
                <p>• Multiplayer Architecture</p>
                <p>• Environmental Design</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 