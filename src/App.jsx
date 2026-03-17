import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BratabandhaInvitation from './components/BratabandhaInvitation'
import Petals from './components/Petals'
import CanvasCard from './components/CanvasCard'

export default function App() {
  const [showCanvasCard, setShowCanvasCard] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/be35352a-80d3-49fd-8a24-9ed8e6dc6ff5.jpeg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60" />

      <Petals />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <BratabandhaInvitation />
      </div>

      {/* Download Button */}
      <button 
        onClick={() => setShowCanvasCard(true)}
        className="fixed bottom-6 right-6 z-30 bg-[#D4AF37] hover:bg-[#C9A227] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
        title="Download Card"
      >
        <span className="text-2xl">📥</span>
        <span className="absolute right-full mr-3 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Download Image Card
        </span>
      </button>

      {/* Canvas Card Modal */}
      {showCanvasCard && (
        <CanvasCard onClose={() => setShowCanvasCard(false)} />
      )}
    </div>
  )
}
