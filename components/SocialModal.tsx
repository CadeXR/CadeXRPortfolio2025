'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Github, Linkedin, Twitter, Youtube, Coffee, Heart, ExternalLink, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

interface SocialModalProps {
  onClose: () => void
}

export default function SocialModal({ onClose }: SocialModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error')
      return
    }

    setFormStatus('sending')

    // Create email content
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    
    // Try to open email client
    const mailtoLink = `mailto:xr.cadeg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    try {
      // Try to open in the same window first
      window.location.href = mailtoLink
      
      // If that doesn't work, try opening in a new window
      setTimeout(() => {
        window.open(mailtoLink, '_blank')
      }, 100)
      
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/cadegilbert',
      color: 'text-blue-400',
      description: 'Professional network and updates'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/cadexr',
      color: 'text-gray-400',
      description: 'Open source projects and code'
    },
    {
      name: 'Twitter/X',
      icon: Twitter,
      url: 'https://twitter.com/cadexr',
      color: 'text-blue-400',
      description: 'Thoughts and industry insights'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@cadexr',
      color: 'text-red-400',
      description: 'VR demos and tutorials'
    }
  ]

  const contactMethods = [
    {
      name: 'Email',
      icon: Mail,
      value: 'xr.cadeg@gmail.com',
      action: 'mailto:xr.cadeg@gmail.com',
      color: 'text-green-400'
    },
    {
      name: 'Ko-fi Support',
      icon: Coffee,
      value: 'Support my open source work',
      action: 'https://ko-fi.com/cadexr',
      color: 'text-orange-400'
    }
  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-8 border-b border-white/10" style={{
            backgroundImage: 'url(/media/MountainClouds.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </motion.button>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-conthrax text-white mb-4"
            >
              Let's Connect
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-neon-blue rounded-full"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Follow My Journey</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="glass rounded-xl p-4 flex items-center space-x-4 group cursor-pointer"
                    >
                      <div className={`p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors ${link.color}`}>
                        <link.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{link.name}</h4>
                        <p className="text-gray-400 text-sm">{link.description}</p>
                      </div>
                      <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Contact & Support */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.name}
                      href={method.action}
                      target={method.name === 'Ko-fi Support' ? '_blank' : undefined}
                      rel={method.name === 'Ko-fi Support' ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: -5 }}
                      className="glass rounded-xl p-4 flex items-center space-x-4 group cursor-pointer"
                    >
                      <div className={`p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors ${method.color}`}>
                        <method.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{method.name}</h4>
                        <p className="text-gray-400 text-sm">{method.value}</p>
                      </div>
                      {method.name === 'Ko-fi Support' && (
                        <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                      )}
                    </motion.a>
                  ))}
                </div>

                {/* Support Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="glass rounded-xl p-6 mt-8"
                >
                  <div className="flex items-start space-x-3">
                    <Heart size={20} className="text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Support My Open Source Work</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        I distribute my open source applications for free, allowing other developers to have access 
                        to constantly updating tools that can further their projects in the XR space. If you feel 
                        like supporting me and allowing me to continue making these tools, I would appreciate any 
                        donation to my Ko-fi!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Send Me a Message</h3>
              
              <p className="text-gray-400 text-sm text-center mb-6 max-w-md mx-auto">
                Fill out the form below and I'll open your email client with a pre-filled message. 
                If your email client doesn't open automatically, you can also email me directly.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                    required
                  />
                </div>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  required
                />
                
                {/* Status Messages */}
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    <span>Please fill in all fields</span>
                  </motion.div>
                )}
                
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-lg p-4 border border-green-500/30"
                  >
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-green-400 text-sm">
                        <p className="font-semibold mb-1">Email client should open!</p>
                        <p className="text-gray-300">
                          If your email client didn't open, you can also email me directly at{' '}
                          <a 
                            href="mailto:xr.cadeg@gmail.com" 
                            className="text-primary-400 hover:text-primary-300 underline"
                          >
                            xr.cadeg@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 