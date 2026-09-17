'use client'

import FrameGrid from '@/components/FrameGrid'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BattlegroundsPage() {
  return (
    <div className="fd-root">
      <FrameGrid />

      <Link href="/#portfolio" className="fd-back">
        <ArrowLeft size={16} strokeWidth={1.5} />
        <span>BACK</span>
      </Link>

      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-96 w-full overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/media/Battlegrounds.png)',
            backgroundPosition: 'center 20%',
          }}
        />
        <div className="absolute inset-0 bg-fd-ground/60" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="fd-title mb-4 text-5xl md:text-7xl"
            >
              Battlegrounds
              <br />
              VR
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl text-fd-cream md:text-2xl"
            >
              Fantasy multiplayer sandbox with immersive combat and social interaction.
            </motion.p>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Overview</h2>
              <p className="fd-body text-lg leading-relaxed">
                Battlegrounds VR is a free-to-play fantasy sandbox game set in a sprawling medieval world, where players can engage in real-time PvP sword fighting, explore open environments, and interact with a wide range of objects and systems. The game emphasizes player freedom, emergent gameplay, and social interaction—encouraging players to team up, go rogue, or create their own experiences.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">My Contribution</h2>
              <p className="fd-body text-lg leading-relaxed">
                I joined the project in its early days as one of the founding gameplay designers, spending 11 months helping shape the core systems and identity of the game. During my time on the project, Battlegrounds VR reached nearly 500,000 downloads, fueled by strong community engagement and an open-ended design philosophy.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Responsibilities</h2>
              <p className="fd-body text-lg leading-relaxed">
                My work included prototyping features, building levels and maps, writing design documentation, and helping define mechanics that supported the sandbox-style gameplay. I also served as the Community Manager, launching and growing the game&apos;s Discord server to over 10,000 active users, creating a strong player hub that supported the game&apos;s growth and player-driven culture.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Key Achievements</h2>
              <ul className="space-y-2 text-fd-cream">
                <li>• Helped grow the game to nearly 500,000 downloads</li>
                <li>• Built and managed a Discord community of 10,000+ active users</li>
                <li>• Designed core gameplay systems that emphasized player freedom</li>
                <li>• Created maps and environments that encouraged exploration and emergent gameplay</li>
              </ul>
            </motion.section>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="fd-panel"
            >
              <h3 className="fd-panel-title">Project Info</h3>
              <div className="space-y-3 text-fd-cream">
                <div>
                  <span className="font-semibold text-fd-gold">Category:</span> Game
                </div>
                <div>
                  <span className="font-semibold text-fd-gold">Status:</span>
                  <span className="ml-2 text-fd-success">Available</span>
                </div>
                <div>
                  <span className="font-semibold text-fd-gold">Type:</span> Multiplayer Sandbox
                </div>
                <div>
                  <span className="font-semibold text-fd-gold">Platform:</span> Meta Quest
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="fd-panel"
            >
              <h3 className="fd-panel-title">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="border border-fd-gold-dim px-3 py-1 text-sm text-fd-muted">Unity</span>
                <span className="border border-fd-gold-dim px-3 py-1 text-sm text-fd-muted">C#</span>
                <span className="border border-fd-gold-dim px-3 py-1 text-sm text-fd-muted">VR</span>
                <span className="border border-fd-gold-dim px-3 py-1 text-sm text-fd-muted">Multiplayer</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="fd-panel"
            >
              <h3 className="fd-panel-title">My Role</h3>
              <div className="space-y-2 text-fd-cream">
                <p>• Gameplay Design</p>
                <p>• Level Design</p>
                <p>• Community Management</p>
                <p>• Systems Design</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
