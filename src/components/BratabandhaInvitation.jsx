import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EnvelopeScene from './EnvelopeScene'
import InvitationLetter from './InvitationLetter'

export default function BratabandhaInvitation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  const handleOpen = () => {
    if (isOpen) return
    setIsOpen(true)
    setTimeout(() => setShowLetter(true), 1100)
  }

  const handleClose = () => {
    setShowLetter(false)
    setTimeout(() => setIsOpen(false), 500)
  }

  return (
    <div className="relative w-full max-w-sm md:max-w-md">
      <AnimatePresence mode="wait">
        {!showLetter ? (
          <motion.div
            key="envelope"
            exit={{ scale: 0.85, opacity: 0, y: -30 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 1, 1] }}
          >
            <EnvelopeScene isOpen={isOpen} onClick={handleOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ scale: 0.4, opacity: 0, y: 60, rotateX: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.4, opacity: 0, y: 60 }}
            transition={{ type: 'spring', stiffness: 110, damping: 20, mass: 0.8 }}
            className="w-full"
            style={{ transformPerspective: 1000 }}
          >
            <InvitationLetter onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}