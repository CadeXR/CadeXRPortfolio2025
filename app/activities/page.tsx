'use client'

import { ArrowLeft, Gamepad2, ExternalLink, Zap, Target, Users } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

export default function ActivitiesPage() {
  const games = [
    {
      title: 'Hex VR',
      description: 'A VR Esport designed around zero gravity movement for VR. My role: Project Manager/Game Director',
      link: 'https://www.meta.com/en-gb/experiences/hex-vr/7202337956544173/?srsltid=AfmBOooht_Qp_t4-_CTaj1WibBjmEkEM3FUKdZYWf9Rdgm7kzyo6CqQh',
      status: 'Available',
      icon: Target,
    },
    {
      title: 'Battlegrounds',
      description: 'A fantasy multiplayer sandbox game for VR. My role: Game Designer/Community Manager',
      link: 'https://www.meta.com/en-gb/experiences/battlegrounds/24783420087971207/',
      status: 'Available',
      icon: Users,
    },
    {
      title: 'Particle Attack',
      description: 'Shoot particles for a high score! This game was just for fun, and runs right on this website :)',
      link: '/activities/attack',
      status: 'Available',
      icon: Zap,
    }
  ]

  return (
    <div className="fd-root">
      <FrameGrid />

      <Link href="/" className="fd-back">
        <ArrowLeft size={16} strokeWidth={1.5} />
        <span>BACK</span>
      </Link>

      <main className="fd-main max-w-6xl">
        <header className="fd-header text-center">
          <div className="fd-mark mx-auto mb-4" aria-hidden="true">
            <Gamepad2 size={28} strokeWidth={1.5} />
          </div>
          <p className="fd-eyebrow">ACTIVITIES</p>
          <h1 className="fd-title">Games & Activities</h1>
          <p className="fd-lede mx-auto max-w-2xl">
            Experience my work through interactive games and VR experiences.
            From competitive VR esports to casual web games, there's something for everyone.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <Link key={game.title} href={game.link} className="group block h-full">
              <section className="fd-panel flex h-full flex-col transition-colors hover:border-fd-gold">
                <div className="mb-4 flex items-center justify-between">
                  <div className="fd-mark" aria-hidden="true">
                    <game.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="border border-fd-gold px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] text-fd-gold">
                    {game.status}
                  </span>
                </div>

                <h3 className="mb-2 text-[16px] font-bold text-fd-cream group-hover:text-fd-gold">
                  {game.title}
                </h3>

                <p className="fd-body mb-4 flex-1 text-[13px]">
                  {game.description}
                </p>

                <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-fd-gold">
                  <span>Play Now</span>
                  <ExternalLink size={14} strokeWidth={1.5} />
                </div>
              </section>
            </Link>
          ))}
        </div>

        <section className="fd-panel mt-8 text-center">
          <h2 className="fd-panel-title">More Coming Soon</h2>
          <p className="fd-body mb-6">
            I'm constantly working on new games and interactive experiences.
            Follow me on social media to stay updated on the latest releases!
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <span className="border border-fd-gold-dim px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] text-fd-muted">
              Little Dude Game
            </span>
            <span className="border border-fd-gold-dim px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] text-fd-muted">
              VR Demos
            </span>
            <span className="border border-fd-gold-dim px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] text-fd-muted">
              Interactive Tools
            </span>
          </div>
        </section>

        <div className="mt-8 text-center">
          <p className="mb-4 text-fd-muted">Want to collaborate on a game project?</p>
          <Link href="/" className="fd-btn-primary">
            Get In Touch
          </Link>
        </div>
      </main>
    </div>
  )
}
