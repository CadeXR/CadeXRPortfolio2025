'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Coffee,
  Heart,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import { useState } from 'react'

interface SocialModalProps {
  onClose: () => void
}

export default function SocialModal({ onClose }: SocialModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setFormStatus('error')
      return
    }

    setFormStatus('sending')

    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:xr.cadeg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    try {
      window.location.href = mailtoLink
      setTimeout(() => {
        window.open(mailtoLink, '_blank')
      }, 100)

      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/cade-gilbert',
      description: 'Professional network and updates',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/cadexr',
      description: 'Open source projects and code',
    },
    {
      name: 'Twitter/X',
      icon: Twitter,
      url: 'https://twitter.com/cade-xr',
      description: 'Thoughts and industry insights',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@cade-xr',
      description: 'VR Storytelling and Thoughts',
    },
  ]

  const contactMethods = [
    {
      name: 'Email',
      icon: Mail,
      value: 'xr.cadeg@gmail.com',
      action: 'mailto:xr.cadeg@gmail.com',
    },
    {
      name: 'Ko-fi Support',
      icon: Coffee,
      value: 'Support my open source work',
      action: 'https://ko-fi.com/cadexr',
    },
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
              backgroundImage: 'url(/media/MountainClouds.png)',
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
              <p className="fd-eyebrow">Contact</p>
              <h2 className="fd-title mb-0">Let&apos;s Connect</h2>
            </div>
          </div>

          <div className="p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="fd-panel-title">Follow My Journey</h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fd-panel flex items-center gap-4 transition-colors hover:border-fd-gold"
                    >
                      <div className="fd-mark mb-0 h-10 w-10">
                        <link.icon size={18} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-fd-cream font-semibold">{link.name}</h4>
                        <p className="text-sm text-fd-muted">{link.description}</p>
                      </div>
                      <ExternalLink size={14} className="text-fd-muted" strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="fd-panel-title">Get In Touch</h3>
                <div className="space-y-3">
                  {contactMethods.map((method) => (
                    <a
                      key={method.name}
                      href={method.action}
                      target={method.name === 'Ko-fi Support' ? '_blank' : undefined}
                      rel={
                        method.name === 'Ko-fi Support'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="fd-panel flex items-center gap-4 transition-colors hover:border-fd-gold"
                    >
                      <div className="fd-mark mb-0 h-10 w-10">
                        <method.icon size={18} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-fd-cream font-semibold">{method.name}</h4>
                        <p className="text-sm text-fd-muted">{method.value}</p>
                      </div>
                      {method.name === 'Ko-fi Support' && (
                        <ExternalLink size={14} className="text-fd-muted" strokeWidth={1.5} />
                      )}
                    </a>
                  ))}
                </div>

                <div className="fd-panel mt-4 flex items-start gap-3">
                  <Heart size={18} className="mt-0.5 shrink-0 text-fd-error" strokeWidth={1.5} />
                  <div>
                    <h4 className="mb-2 font-semibold text-fd-cream">
                      Support My Open Source Work
                    </h4>
                    <p className="text-sm text-fd-muted leading-relaxed">
                      I distribute my open source applications for free, allowing
                      other developers to have access to constantly updating tools
                      that can further their projects in the XR space. If you feel
                      like supporting me and allowing me to continue making these
                      tools, I would appreciate any donation to my Ko-fi!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="fd-divider" />

            <h3 className="fd-panel-title text-center">Send Me a Message</h3>
            <p className="mb-6 text-center text-sm text-fd-muted">
              Fill out the form below and I&apos;ll open your email client with a
              pre-filled message. If your email client doesn&apos;t open
              automatically, you can also email me directly.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="fd-input flex-1"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="fd-input flex-1"
                  required
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                rows={4}
                className="fd-input fd-textarea"
                required
              />

              {formStatus === 'error' && (
                <p className="fd-error flex items-center gap-2">
                  <AlertCircle size={14} strokeWidth={1.5} />
                  Please fill in all fields
                </p>
              )}

              {formStatus === 'success' && (
                <div className="fd-panel border-fd-success">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-fd-success"
                      strokeWidth={1.5}
                    />
                    <div className="text-sm">
                      <p className="mb-1 font-semibold text-fd-success">
                        Email client should open!
                      </p>
                      <p className="text-fd-muted">
                        If your email client didn&apos;t open, email{' '}
                        <a
                          href="mailto:xr.cadeg@gmail.com"
                          className="text-fd-gold underline"
                        >
                          xr.cadeg@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`fd-btn-primary fd-btn-block ${
                  formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send size={16} strokeWidth={1.5} />
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
