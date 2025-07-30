'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Target, Zap, Trophy, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

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

  const colors = ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b']

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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
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
        ctx.fillStyle = '#f2751f'
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link href="/activities">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="glass rounded-full p-3 text-white hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </motion.button>
        </Link>
      </motion.div>

      {/* Game UI */}
      <div className="fixed top-8 right-8 z-50">
        <div className="glass rounded-xl p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <Target size={20} className="text-primary-400" />
            <span className="text-white font-semibold">Score: {score}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy size={20} className="text-yellow-400" />
            <span className="text-white font-semibold">High Score: {highScore}</span>
          </div>
        </div>
      </div>

      {/* Game Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-4">
          {!gameActive ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="btn-primary flex items-center space-x-2"
            >
              <Zap size={20} />
              <span>Start Game</span>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={stopGame}
              className="btn-secondary flex items-center space-x-2"
            >
              <RotateCcw size={20} />
              <span>Stop Game</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Instructions */}
      {!gameActive && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-md">
            <h2 className="text-2xl font-conthrax text-white mb-4">Particle Attack</h2>
            <p className="text-gray-300 mb-6">
              Move your mouse to aim and click to shoot! Destroy the colorful particles to score points.
              The more particles you destroy, the higher your score!
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>• Move mouse to aim</p>
              <p>• Click to shoot</p>
              <p>• Destroy particles for points</p>
              <p>• Try to beat your high score!</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Game Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        style={{ background: 'transparent' }}
      />

      {/* Crosshair */}
      {gameActive && (
        <div
          className="fixed pointer-events-none z-30"
          style={{
            left: mousePos.x - 10,
            top: mousePos.y - 10,
            width: 20,
            height: 20
          }}
        >
          <div className="w-full h-full border-2 border-primary-400 rounded-full opacity-50" />
        </div>
      )}
    </div>
  )
} 