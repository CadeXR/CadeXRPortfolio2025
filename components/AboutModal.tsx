'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Github, Linkedin, Twitter, Youtube } from 'lucide-react'

interface AboutModalProps {
  onClose: () => void
  onOpenModal?: (modalName: string) => void
}

export default function AboutModal({ onClose, onOpenModal }: AboutModalProps) {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/cade-gilbert' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/cadexr' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/cade-xr' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@cade-xr' },
  ]

  const expertise = [
    { skill: 'UX Design', level: 95 },
    { skill: 'Game Design', level: 90 },
    { skill: 'Unity/Unreal Engine', level: 90 },
    { skill: 'Community Management', level: 85 },
    { skill: 'Hardware Prototyping', level: 80 },
  ]

  const focus = [
    'Immersive UX and gameplay design',
    'Community-driven game development',
    'Experimental XR prototyping',
    'Hackathon project development',
    'Meta Quest platform optimization',
  ]

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
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-fd-gold bg-fd-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative border-b border-fd-gold-dim p-8"
            style={{
              backgroundImage: 'url(/media/AboutBackround.png)',
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
              <p className="fd-eyebrow">Profile</p>
              <h2 className="fd-title">About Me</h2>
              <div className="fd-media-frame mt-4 inline-block w-28 h-28 md:w-36 md:h-36">
                <img
                  src="/media/headshotnew.jpg"
                  alt="Cade Gilbert"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <section>
                  <h3 className="fd-panel-title">My Journey</h3>
                  <p className="fd-body mb-0">
                    I&apos;m an XR community veteran and UX Designer with a focus on
                    immersive experiences. My passion lies in understanding what
                    drives XR forward—through networking, industry research, and
                    active participation in events where I stay on top of trends
                    and emerging technologies. Across the projects I&apos;ve
                    contributed to, my work has helped reach over half a million
                    installs on the Meta Quest platform.
                  </p>
                </section>
                <section>
                  <h3 className="fd-panel-title">Professional Experience</h3>
                  <p className="fd-body mb-0">
                    Most recently, I worked as a UX and Gameplay Design contractor
                    at Sinn Studio, creators of the PSVR best-seller Swordsman VR.
                    I joined their new project, Battlegrounds VR, in its early
                    days as one of the founding gameplay designers, spending a
                    year helping to shape its core systems and identity. During my
                    time on the project, Battlegrounds reached nearly 500,000
                    downloads—fueled by a strong community and an open-ended
                    design philosophy.
                  </p>
                </section>
                <section>
                  <h3 className="fd-panel-title">Golden Gear Studios</h3>
                  <p className="fd-body mb-0">
                    I also lead Golden Gear Studios, an indie team I founded to
                    pursue bold, experimental ideas in immersive design. We
                    operate entirely as a passion-driven, volunteer
                    collective—united by a shared love for VR and the belief that
                    great gameplay can emerge from genuine collaboration, not just
                    budgets. Our flagship project, Hex VR, is a zero-gravity
                    sports game that has already surpassed 50,000 downloads on the
                    Meta Quest platform.
                  </p>
                </section>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="fd-panel-title">Expertise</h3>
                  <div className="space-y-3">
                    {expertise.map((item) => (
                      <div key={item.skill}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="text-fd-cream">{item.skill}</span>
                          <span className="text-fd-gold">{item.level}%</span>
                        </div>
                        <div className="h-2 w-full border border-fd-gold-dim bg-fd-ground">
                          <div
                            className="h-full bg-fd-gold"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="fd-panel-title">Current Focus</h3>
                  <ul className="fd-list-plain">
                    {focus.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-fd-cream">
                        <span className="mt-1.5 h-2 w-2 shrink-0 bg-fd-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <hr className="fd-divider" />

            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="fd-label">Connect</p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fd-btn-quiet p-2"
                      aria-label={link.name}
                    >
                      <link.icon size={18} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenModal?.('social')
                }}
                className="fd-btn-primary"
              >
                <Mail size={16} strokeWidth={1.5} />
                Get In Touch
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
