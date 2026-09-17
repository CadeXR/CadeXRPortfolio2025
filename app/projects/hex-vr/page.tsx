'use client'

import FrameGrid from '@/components/FrameGrid'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function HexVRPage() {
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
            backgroundImage: 'url(/media/HexVR.png)',
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
              Hex
              <br />
              VR
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl text-fd-cream md:text-2xl"
            >
              Zero-gravity VR esport with tactical movement and competitive team play.
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
                Hex VR is a zero-gravity sports game that blends tactical movement with competitive team play. Despite being in alpha, it has already surpassed 50,000 downloads on the Meta Quest platform, powered purely by word of mouth and community interest.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Gameplay</h2>
              <p className="fd-body text-lg leading-relaxed">
                Players navigate in zero-gravity environments, using momentum and physics to outmaneuver opponents. The game emphasizes strategic positioning, team coordination, and mastery of the unique movement system.
              </p>
              <ul className="space-y-2 text-fd-cream">
                <li>• Zero-gravity movement mechanics</li>
                <li>• Tactical team-based gameplay</li>
                <li>• Competitive esports focus</li>
                <li>• Physics-driven interactions</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Development</h2>
              <p className="fd-body text-lg leading-relaxed">
                As the founder of Golden Gear Studios, I lead the development of Hex VR as a passion-driven, volunteer collective. We operate entirely as a team united by a shared love for VR and the belief that great gameplay can emerge from genuine collaboration.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Community Success</h2>
              <ul className="space-y-2 text-fd-cream">
                <li>• 50,000+ downloads on Meta Quest</li>
                <li>• Organic growth through word of mouth</li>
                <li>• Strong community engagement</li>
                <li>• Active player base despite alpha status</li>
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
                  <span className="font-semibold text-fd-gold">Type:</span> Competitive Esport
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
                <span className="border border-fd-gold-dim px-3 py-1 text-sm text-fd-muted">Physics</span>
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
                <p>• Studio Founder</p>
                <p>• Game Design</p>
                <p>• Programming</p>
                <p>• Community Management</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
