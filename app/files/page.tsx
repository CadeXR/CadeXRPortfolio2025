'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Download, FileDown, Lock, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function FilesPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === '1Qaz2Wsx') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password')
      setPassword('')
    }
  }
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
      
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="glass rounded-full p-3 text-white hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </motion.button>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-neon-blue rounded-full flex items-center justify-center"
            >
              {isAuthenticated ? <FileDown size={40} className="text-white" /> : <Lock size={40} className="text-white" />}
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-conthrax text-white mb-6">
              <span className="text-gradient-primary">Files</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {isAuthenticated ? 'Download available files' : 'Enter password to access files'}
            </p>
          </motion.div>

          {!isAuthenticated ? (
            /* Password Form */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass rounded-2xl p-8"
            >
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                
                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Lock size={20} />
                  <span>Access Files</span>
                </motion.button>
              </form>
            </motion.div>
          ) : (
            /* Download Section */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Yap CLOSED TEST</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Click the button below to download the file.
              </p>
              
              <motion.a
                href="https://drive.google.com/drive/folders/1xMuViI9m5WZKNXLTL7xdhVIx9vtPDlx5?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 mx-auto w-fit"
              >
                <Download size={20} />
                <span>Access Yap CLOSED TEST</span>
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

