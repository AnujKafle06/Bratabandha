import { useEffect, useState } from 'react'

const PETALS = ['🌸', '🌺', '🏵️', '✿', '❀', '🌼', '🪷']

function createPetal() {
  return {
    id: Math.random(),
    emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
    left: `${Math.random() * 100}vw`,
    duration: `${5 + Math.random() * 8}s`,
    delay: `${Math.random() * 3}s`,
    size: `${0.7 + Math.random() * 1.1}rem`,
    opacity: 0.5 + Math.random() * 0.5,
  }
}

export default function Petals() {
  const [petals, setPetals] = useState(() => Array.from({ length: 12 }, createPetal))

  useEffect(() => {
    const interval = setInterval(() => {
      setPetals(prev => [...prev.slice(-22), createPetal()])
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {petals.map(p => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            top: '-2rem',
            fontSize: p.size,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </>
  )
}