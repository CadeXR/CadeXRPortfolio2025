'use client'

import { ArrowLeft, Download, Eye, EyeOff, FileDown, Lock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import FrameGrid from '@/components/FrameGrid'

const DRIVE_URL =
  'https://drive.google.com/drive/folders/1xMuViI9m5WZKNXLTL7xdhVIx9vtPDlx5?usp=sharing'

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
    <div className="fd-root">
      <FrameGrid />

      <Link href="/" className="fd-back">
        <ArrowLeft size={16} strokeWidth={1.5} />
        <span>BACK</span>
      </Link>

      <main className="fd-main fd-main-narrow">
        <header className="fd-header">
          <div className="fd-mark" aria-hidden="true">
            {isAuthenticated ? (
              <FileDown size={28} strokeWidth={1.5} />
            ) : (
              <Lock size={28} strokeWidth={1.5} />
            )}
          </div>
          <p className="fd-eyebrow">FILES</p>
          <h1 className="fd-title">Access</h1>
          <p className="fd-lede">
            {isAuthenticated
              ? 'Download available files.'
              : 'Enter password to access files.'}
          </p>
        </header>

        {!isAuthenticated ? (
          <section className="fd-panel">
            <form onSubmit={handlePasswordSubmit} className="fd-form">
              <div>
                <label htmlFor="password" className="fd-label">
                  Password
                </label>
                <div className="fd-field">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="fd-input"
                    style={{ paddingRight: '2.5rem' }}
                    placeholder="Enter password"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="fd-icon-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff size={16} strokeWidth={1.5} />
                    ) : (
                      <Eye size={16} strokeWidth={1.5} />
                    )}
                  </button>
                </div>
              </div>

              {error && <p className="fd-error">{error}</p>}

              <button type="submit" className="fd-btn-primary fd-btn-block">
                <Lock size={16} strokeWidth={1.5} />
                Access Files
              </button>
            </form>
          </section>
        ) : (
          <section className="fd-panel">
            <p className="fd-label">Payload</p>
            <h2 className="fd-panel-title">Yap CLOSED TEST</h2>
            <p className="fd-body">Click the button below to download the file.</p>
            <ol className="fd-steps">
              <li>Open the Drive folder.</li>
              <li>Download Yap CLOSED TEST.</li>
            </ol>
            <a
              href={DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="fd-btn-primary fd-btn-block"
            >
              <Download size={16} strokeWidth={1.5} />
              Access Yap CLOSED TEST
            </a>
          </section>
        )}
      </main>
    </div>
  )
}
