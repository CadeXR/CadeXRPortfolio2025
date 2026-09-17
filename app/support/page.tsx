'use client'

import { ArrowLeft, Coffee, Heart, Github, Code, Users } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

export default function SupportPage() {
  const features = [
    {
      icon: Code,
      title: 'Open Source Tools',
      description: 'Free, constantly updating tools for XR developers'
    },
    {
      icon: Github,
      title: 'Community Driven',
      description: 'Built for and with the XR development community'
    },
    {
      icon: Users,
      title: 'Accessible',
      description: 'Lowering barriers to entry for VR/AR development'
    }
  ]

  return (
    <div className="fd-root">
      <FrameGrid />

      <Link href="/" className="fd-back">
        <ArrowLeft size={16} strokeWidth={1.5} />
        <span>BACK</span>
      </Link>

      <main className="fd-main">
        <header className="fd-header text-center">
          <div className="fd-mark mx-auto mb-4" aria-hidden="true">
            <Coffee size={28} strokeWidth={1.5} />
          </div>
          <p className="fd-eyebrow">SUPPORT</p>
          <h1 className="fd-title">Support My Open Source Work</h1>
          <p className="fd-lede mx-auto max-w-2xl">
            Hi! If you've reached this page, that's because you were curious about one of my open source apps.
            I distribute my open source applications for free, allowing other developers like myself to have access
            to constantly updating tools that can further along their projects in the XR space.
          </p>
        </header>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <section key={feature.title} className="fd-panel text-center">
              <div className="fd-mark mx-auto mb-4" aria-hidden="true">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="fd-panel-title text-[15px]">{feature.title}</h3>
              <p className="fd-body text-[13px]">{feature.description}</p>
            </section>
          ))}
        </div>

        <section className="fd-panel">
          <div className="flex items-start gap-4">
            <Heart size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-fd-error" />
            <div>
              <h2 className="fd-panel-title">Why I Need Your Support</h2>
              <p className="fd-body mb-4">
                I make these tools for myself internally, and over time build them up into fully-fledged applications
                that are scalable. These take a lot of time, and I want to keep making these tools.
              </p>
              <p className="fd-body">
                If you feel like supporting me, and allowing me to continue to make tools like these,
                I would appreciate it if you donated to my Ko-fi! Even the smallest donations help me
                spend time making these tools!
              </p>
            </div>
          </div>
        </section>

        <div className="my-6 text-center">
          <a
            href="https://ko-fi.com/cadexr"
            target="_blank"
            rel="noopener noreferrer"
            className="fd-btn-primary"
          >
            <Coffee size={16} strokeWidth={1.5} />
            <span>☕ Support on Ko-fi</span>
          </a>
        </div>

        <section className="fd-panel">
          <h3 className="fd-panel-title">My Open Source Philosophy</h3>
          <p className="fd-body">
            I believe in the power of open source software to drive innovation and collaboration in the XR space.
            By keeping my tools free and accessible, I hope to lower the barrier to entry for developers and creators
            who want to build amazing experiences in virtual and augmented reality. Every contribution, no matter how small,
            helps me continue this mission and ensures that these tools remain available to everyone in the community.
          </p>
        </section>

        <div className="mt-8 text-center">
          <p className="mb-2 text-[18px] font-bold uppercase tracking-[0.12em] text-fd-gold">Thank you so much!</p>
          <p className="text-fd-muted">- CadeXR</p>
        </div>
      </main>
    </div>
  )
}
