'use client'

import { ArrowLeft, Target, Zap, Trophy, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import FrameGrid from '@/components/FrameGrid'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  active: boolean
}

interface Bullet {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  active: boolean
}

export default function ParticleAttackGame() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [bullets, setBullets] = useState<Bullet[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const bulletIdRef = useRef(0)

  const colors = ['#ba75ff', '#e8dcc4', '#9a8f78', '#c994ff', '#c41e3a']

  useEffect(() => {
    // Load high score from localStorage
    const saved = localStorage.getItem('particleAttackHighScore')
    if (saved) {
      setHighScore(parseInt(saved))
    }
  }, [])

  useEffect(() => {
    if (!gameActive) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(8, 8, 9, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw bullets
      setBullets(prev => prev.map(bullet => {
        if (!bullet.active) return bullet
        
        bullet.x += bullet.vx
        bullet.y += bullet.vy
        
        // Remove bullets that are off screen
        if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
          bullet.active = false
        }
        
        // Draw bullet
        ctx.beginPath()
        ctx.arc(bullet.x, bullet.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#ba75ff'
        ctx.fill()
        
        return bullet
      }).filter(bullet => bullet.active))

      // Update and draw particles
      setParticles(prev => prev.map(particle => {
        if (!particle.active) return particle
        
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Bounce off walls
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        
        // Check collision with bullets
        bullets.forEach(bullet => {
          if (bullet.active) {
            const distance = Math.sqrt(
              Math.pow(particle.x - bullet.x, 2) + Math.pow(particle.y - bullet.y, 2)
            )
            if (distance < particle.size + 3) {
              particle.active = false
              bullet.active = false
              setScore(prev => {
                const newScore = prev + 10
                if (newScore > highScore) {
                  setHighScore(newScore)
                  localStorage.setItem('particleAttackHighScore', newScore.toString())
                }
                return newScore
              })
            }
          }
        })
        
        return particle
      }).filter(particle => particle.active))

      // Spawn new particles
      if (Math.random() < 0.02) {
        const newParticle: Particle = {
          id: Date.now(),
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 10 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          active: true
        }
        setParticles(prev => [...prev, newParticle])
      }

      animationRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [gameActive, bullets, highScore])

  const startGame = () => {
    setScore(0)
    setParticles([])
    setBullets([])
    setGameActive(true)
  }

  const stopGame = () => {
    setGameActive(false)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!gameActive) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top
    
    // Calculate direction from mouse to click
    const dx = clickX - mousePos.x
    const dy = clickY - mousePos.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance > 0) {
      const speed = 10
      const newBullet: Bullet = {
        id: bulletIdRef.current++,
        x: mousePos.x,
        y: mousePos.y,
        vx: (dx / distance) * speed,
        vy: (dy / distance) * speed,
        active: true
      }
      setBullets(prev => [...prev, newBullet])
    }
  }

  return (
    <div className="fd-root min-h-screen overflow-hidden bg-fd-ground">
      <FrameGrid />

      <Link href="/activities" className="fd-back">
        <ArrowLeft size={16} strokeWidth={1.5} />
        <span>BACK</span>
      </Link>

      {/* Game UI */}
      <div className="fixed right-6 top-6 z-50">
        <div className="fd-panel space-y-2 p-4">
          <div className="flex items-center gap-2">
            <Target size={16} strokeWidth={1.5} className="text-fd-gold" />
            <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-fd-cream">
              Score: {score}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy size={16} strokeWidth={1.5} className="text-fd-gold" />
            <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-fd-cream">
              High Score: {highScore}
            </span>
          </div>
        </div>
      </div>

      {/* Game Controls */}
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex gap-3">
          {!gameActive ? (
            <button
              type="button"
              onClick={startGame}
              className="fd-btn-primary"
            >
              <Zap size={16} strokeWidth={1.5} />
              <span>Start Game</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={stopGame}
              className="fd-btn-quiet"
            >
              <RotateCcw size={16} strokeWidth={1.5} />
              <span>Stop Game</span>
            </button>
          )}
        </div>
      </div>

      {/* Instructions */}
      {!gameActive && (
        <div className="fixed left-1/2 top-1/2 z-40 max-w-md -translate-x-1/2 -translate-y-1/2 px-4 text-center">
          <section className="fd-panel p-6">
            <p className="fd-eyebrow mb-2">GAME</p>
            <h2 className="fd-panel-title mb-4">Particle Attack</h2>
            <p className="fd-body mb-6">
              Move your mouse to aim and click to shoot! Destroy the colorful particles to score points.
              The more particles you destroy, the higher your score!
            </p>
            <ul className="fd-steps text-left">
              <li>Move mouse to aim</li>
              <li>Click to shoot</li>
              <li>Destroy particles for points</li>
              <li>Try to beat your high score!</li>
            </ul>
          </section>
        </div>
      )}

      {/* Game Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-10 cursor-crosshair bg-fd-ground"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      />

      {/* Crosshair */}
      {gameActive && (
        <div
          className="pointer-events-none fixed z-30"
          style={{
            left: mousePos.x - 10,
            top: mousePos.y - 10,
            width: 20,
            height: 20
          }}
        >
          <div className="h-full w-full border border-fd-gold opacity-60" />
          <div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-fd-gold opacity-40"
          />
          <div
            className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-fd-gold opacity-40"
          />
        </div>
      )}
    </div>
  )
}
