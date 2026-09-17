'use client'

import FrameGrid from '@/components/FrameGrid'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function LightlessPage() {
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
            backgroundImage: 'url(/media/Lightless.png)',
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
              Lightless
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl text-fd-cream md:text-2xl"
            >
              Atmospheric VR horror game with strategic co-op gameplay.
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
                Lightless is an atmospheric VR horror game in development for the Meta Quest platform. Inspired by the Weeping Angels from Doctor Who, the game blends survival horror with strategic co-op gameplay in a dark sci-fi setting.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Concept</h2>
              <p className="fd-body text-lg leading-relaxed">
                Set in a universe where the stars have gone out, you and up to three friends play as scavengers eking out a living by draining energy from derelict spaceships and stations. But you&apos;re not alone. Lurking in the shadows are the Lightless—predatory, energy-feeding creatures that can only move when they&apos;re not being watched.
              </p>
              <p className="fd-body text-lg leading-relaxed">
                As you drain more energy, the lights aboard these ships grow dimmer—and the Lightless grow bolder. The core tension of Lightless revolves around managing visibility, coordinating movement, and making difficult choices as the environment becomes more hostile.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Gameplay</h2>
              <ul className="space-y-3 text-fd-cream">
                <li>• Cooperative survival horror for 1-4 players</li>
                <li>• Energy management and resource gathering</li>
                <li>• Strategic lighting and visibility mechanics</li>
                <li>• Every action brings you closer to your goal, but also closer to being hunted</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Development</h2>
              <p className="fd-body text-lg leading-relaxed">
                This is a solo-developed passion project, and I&apos;m handling all aspects of its creation, including design & narrative, programming, art direction, and platform optimization for Meta Quest VR hardware.
              </p>
              <p className="fd-body text-lg leading-relaxed">
                The project is currently in development with no set release date. As a long-term passion project, Lightless represents my interest in building deeply immersive, emotionally driven multiplayer experiences in VR.
              </p>
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
                  <span className="ml-2 text-fd-gold">In Progress</span>
                </div>
                <div>
                  <span className="font-semibold text-fd-gold">Type:</span> Horror Co-op
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
                <p>• Solo Developer</p>
                <p>• Game Design & Narrative</p>
                <p>• Programming & Systems</p>
                <p>• Art Direction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
