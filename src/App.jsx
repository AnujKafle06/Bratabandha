import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BratabandhaInvitation from './components/BratabandhaInvitation'
import Petals from './components/Petals'

export default function App() {
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
    </div>
  )
}
