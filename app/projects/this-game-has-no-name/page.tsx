'use client'

import FrameGrid from '@/components/FrameGrid'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ThisGameHasNoNamePage() {
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
            backgroundImage: 'url(/media/Nameless.png)',
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
              This Game
              <br />
              Has No Name
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl text-fd-cream md:text-2xl"
            >
              An abandoned region. A rusting research bus. Friends. Monsters. Chaos.
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
                This Game Has No Name is a cooperative, open-world horror exploration game set in the forgotten corners of West Virginia. Players step into the worn-out boots of amateur researchers, rolling into an off-limits region steeped in cryptid lore, government secrets, and supernatural phenomena.
              </p>
              <p className="fd-body text-lg leading-relaxed">
                Your goal is simple: explore the abandoned world, recover lost research, upgrade your ramshackle bus, and uncover what happened — if the local wildlife and stranger things don&apos;t stop you first.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">The Bus</h2>
              <p className="fd-body text-lg leading-relaxed">
                Your base of operations is a barely-functioning research vehicle, converted from an old electric school bus. Strapped with solar panels, jury-rigged sensors, and falling apart at the seams, the bus is your mobile lifeline.
              </p>
              <ul className="space-y-2 text-fd-cream">
                <li>• Upgradeable with scavenged parts (radar, shielding, lights, equipment racks)</li>
                <li>• Electric-powered, solar-recharged, and prone to chaos</li>
                <li>• Enemies can physically interact with it — including picking it up and throwing it</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Multiplayer Exploration</h2>
              <ul className="space-y-3 text-fd-cream">
                <li>• Designed for 1–4 player co-op</li>
                <li>• Drop in, split up, or stick together — every decision carries risk</li>
                <li>• Coordinate exploration, defense, and upgrades while navigating a world that actively resists you</li>
                <li>• Discover strange technology, encrypted hard drives, abandoned research sites, and things that were never supposed to be found</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">The Setting</h2>
              <p className="fd-body text-lg leading-relaxed">
                A fictionalized slice of Appalachia, inspired by cryptid legends and Cold War-era paranoia.
              </p>
              <ul className="space-y-2 text-fd-cream">
                <li>• Entire towns left to rot, full of flickering lights and signs of recent movement</li>
                <li>• Military facilities sealed and silent — or still humming with hidden energy</li>
                <li>• A once-functioning electrical grid, now long dormant, waiting to be reactivated</li>
                <li>• Creatures in the woods and skies that do not want to be studied</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">The Threats</h2>
              <p className="fd-body text-lg leading-relaxed">
                The world pushes back. Exploring isn&apos;t safe.
              </p>
              <ul className="space-y-2 text-fd-cream">
                <li>• <strong className="text-fd-gold">Mothman</strong> — flies from the treetops to grab players and vehicles, launching them across the map</li>
                <li>• <strong className="text-fd-gold">Wendigos</strong> — fast, hungry, and sound-sensitive, chasing anything that breaks the silence</li>
                <li>• Rogue AI drones, mutated wildlife, glitching buildings — all part of something stranger</li>
                <li>• Danger escalates the longer you stay alive and the deeper you explore</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Key Features</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="fd-panel-title mb-2 text-base">Open World, Freeform Exploration</h3>
                    <p className="text-fd-cream">No checkpoints or levels — just a vast, interconnected region waiting to be picked apart.</p>
                  </div>
                  <div>
                    <h3 className="fd-panel-title mb-2 text-base">Bus-Based Progression</h3>
                    <p className="text-fd-cream">Upgrade your vehicle to access new areas, store gear, and survive longer runs.</p>
                  </div>
                  <div>
                    <h3 className="fd-panel-title mb-2 text-base">Research and Recovery Loop</h3>
                    <p className="text-fd-cream">Find hard drives and scientific data scattered throughout abandoned labs and outposts.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="fd-panel-title mb-2 text-base">Dynamic Systems and Physics-Driven Encounters</h3>
                    <p className="text-fd-cream">Enemies don&apos;t just attack — they interact. Pickups, knockdowns, physical chaos.</p>
                  </div>
                  <div>
                    <h3 className="fd-panel-title mb-2 text-base">Horrifying and Hilarious</h3>
                    <p className="text-fd-cream">Whether you&apos;re sprinting from a wendigo or watching your bus get launched off a cliff, the line between horror and humor constantly blurs.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="fd-panel"
            >
              <h2 className="fd-panel-title">Current Development</h2>
              <p className="fd-body text-lg leading-relaxed">
                The project is in prototype development, with current focus on:
              </p>
              <ul className="space-y-2 text-fd-cream">
                <li>• Core AI behavior systems (flying enemy pickup, reactive threats)</li>
                <li>• Bus movement, upgrading, and damage</li>
                <li>• Environmental systems (abandoned grid power, area scanning)</li>
                <li>• Multiplayer infrastructure and item transport systems</li>
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
                  <span className="ml-2 text-fd-gold">In Progress</span>
                </div>
                <div>
                  <span className="font-semibold text-fd-gold">Type:</span> Multiplayer Co-op
                </div>
                <div>
                  <span className="font-semibold text-fd-gold">Platform:</span> PC
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
                <span className="border border-fd-gold-dim px-3 py-1 text-sm text-fd-muted">Multiplayer</span>
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
