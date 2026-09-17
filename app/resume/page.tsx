'use client'

import { ArrowLeft, Download, ExternalLink, FileText, Calendar, MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'
import FrameGrid from '@/components/FrameGrid'

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
    <div className="fd-root">
      <FrameGrid />

      <Link href="/" className="fd-back">
        <ArrowLeft size={16} strokeWidth={1.5} />
        <span>BACK</span>
      </Link>

      <main className="fd-main">
        <header className="fd-header text-center">
          <div className="fd-mark mx-auto mb-4" aria-hidden="true">
            <FileText size={28} strokeWidth={1.5} />
          </div>
          <p className="fd-eyebrow">RESUME</p>
          <h1 className="fd-title">Resume</h1>
          <p className="fd-lede mx-auto max-w-2xl">
            Cade Gilbert - XR Community Veteran, UX Designer, and Game Designer
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/media/CadeGilbertResume-July.pdf"
              download
              className="fd-btn-primary"
            >
              <Download size={16} strokeWidth={1.5} />
              <span>Download PDF</span>
            </a>
            <a
              href="/media/CadeGilbertResume-July.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="fd-btn-quiet"
            >
              <ExternalLink size={16} strokeWidth={1.5} />
              <span>Open in New Tab</span>
            </a>
          </div>
        </header>

        <section className="fd-panel">
          <h2 className="fd-panel-title">Professional Summary</h2>
          <p className="fd-body mb-6">
            XR community veteran and UX designer with expertise in creating immersive experiences,
            game design, and community management. My work has helped reach over half a million installs
            on the Meta Quest platform, with projects ranging from commercial games to experimental prototypes.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-fd-gold-dim bg-fd-ground p-4 text-center">
              <div className="text-2xl font-bold text-fd-gold">2+</div>
              <div className="text-fd-muted text-[13px]">Years Experience</div>
            </div>
            <div className="border border-fd-gold-dim bg-fd-ground p-4 text-center">
              <div className="text-2xl font-bold text-fd-gold">10+</div>
              <div className="text-fd-muted text-[13px]">Projects</div>
            </div>
            <div className="border border-fd-gold-dim bg-fd-ground p-4 text-center">
              <div className="text-2xl font-bold text-fd-gold">2</div>
              <div className="text-fd-muted text-[13px]">Published Games</div>
            </div>
          </div>
        </section>

        <section className="fd-panel">
          <h2 className="fd-panel-title flex items-center gap-2">
            <Briefcase size={20} strokeWidth={1.5} className="text-fd-gold" />
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-fd-gold pl-5"
              >
                <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-fd-cream text-[15px] font-bold">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-[12px] text-fd-muted">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} strokeWidth={1.5} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} strokeWidth={1.5} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="mb-2 font-medium text-fd-gold">{exp.company}</div>
                <p className="fd-body">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="fd-panel">
          <h2 className="fd-panel-title">Technical Skills</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="mb-3 text-[14px] font-bold text-fd-cream">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="border border-fd-gold-dim px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] text-fd-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 text-center">
          <p className="mb-4 text-fd-muted">Interested in working together?</p>
          <Link href="/" className="fd-btn-primary">
            Get In Touch
          </Link>
        </div>
      </main>
    </div>
  )
}
