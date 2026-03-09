import { motion } from 'framer-motion'

// Mandala SVG for background decoration
function MandalaRing({ size, opacity, rotate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`absolute ${rotate ? 'spin-slow' : ''}`}
      style={{ opacity }}
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <ellipse cx="50" cy="20" rx="4" ry="10" fill="none" stroke="#D4AF37" strokeWidth="0.6" />
          <circle cx="50" cy="12" r="2" fill="#D4AF37" />
        </g>
      ))}
      <circle cx="50" cy="50" r="18" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="26" fill="none" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="2 4" />
    </svg>
  )
}

// Corner ornament component
function CornerOrnament({ className }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className={`absolute ${className}`} style={{ opacity: 0.7 }}>
      <path d="M2 38 L2 8 Q2 2 8 2 L38 2" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 38 L2 22 Q2 8 8 8 L22 8" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="2" cy="2" r="2.5" fill="#D4AF37" />
      <circle cx="8" cy="8" r="1.5" fill="#D4AF37" opacity="0.6" />
    </svg>
  )
}

export default function EnvelopeScene({ isOpen, onClick }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Ambient glow behind everything */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(212,175,55,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: -22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        className="text-center relative z-10"
      >
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[#D4AF37] text-[10px] tracking-[0.5em] font-cinzel uppercase">Sacred</span>
          <span className="text-[#D4AF37]/60 text-xs">✦</span>
          <span className="text-[#D4AF37] text-[10px] tracking-[0.5em] font-cinzel uppercase">Ceremony</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
        <h1 className="font-devanagari text-2xl md:text-3xl font-bold text-[#FFFDD0] drop-shadow-lg leading-tight">
          शुभ ब्रतबन्ध
        </h1>
        <h2 className="font-devanagari text-base md:text-lg text-[#FFFDD0]/80 leading-tight mt-0.5">
          निमन्त्रणा
        </h2>
        <p className="font-cinzel text-[9px] md:text-[10px] tracking-[0.4em] text-[#D4AF37]/70 uppercase mt-1.5">
          Bratabandha Invitation
        </p>
      </motion.div>

      {/* Envelope wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.34, 1.08, 0.64, 1], delay: 0.3 }}
        className="w-full cursor-pointer select-none relative z-10"
        style={{ perspective: '1200px' }}
        onClick={onClick}
        id="envelope-click-target"
      >
        <div className="relative w-full" style={{ paddingBottom: '68%' }}>

          {/* ── Envelope shadow ── */}
          <div
            className="absolute inset-x-4 bottom-0 top-4 rounded-xl pointer-events-none"
            style={{
              boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.08)',
              zIndex: 0,
            }}
          />

          {/* ── Envelope body ── */}
          <div className="absolute inset-0 rounded-xl overflow-hidden envelope-paper border border-[#D4AF37]/40" style={{ zIndex: 1 }}>
            {/* Deep vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

            {/* Inner border double frame */}
            <div className="absolute inset-0 m-2 border border-[#D4AF37]/30 rounded-lg pointer-events-none z-10" />
            <div className="absolute inset-0 m-3.5 border border-[#D4AF37]/15 rounded-lg pointer-events-none z-10" />

            {/* Corner ornaments */}
            <CornerOrnament className="top-1.5 left-1.5" />
            <CornerOrnament className="top-1.5 right-1.5" style={{ transform: 'scaleX(-1)' }} />
            <div className="absolute bottom-1.5 left-1.5 z-10" style={{ transform: 'scale(-1,-1)' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" style={{ opacity: 0.7 }}>
                <path d="M2 38 L2 8 Q2 2 8 2 L38 2" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="2" cy="2" r="2.5" fill="#D4AF37" />
              </svg>
            </div>
            <div className="absolute bottom-1.5 right-1.5 z-10" style={{ transform: 'scale(1,-1)' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" style={{ opacity: 0.7 }}>
                <path d="M38 38 L38 8 Q38 2 32 2 L2 2" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="38" cy="2" r="2.5" fill="#D4AF37" />
              </svg>
            </div>

            {/* Mandala background rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <MandalaRing size={160} opacity={0.08} rotate />
                <div className="absolute" style={{ width: 100, height: 100 }}>
                  <MandalaRing size={100} opacity={0.12} />
                </div>
              </div>
            </div>

            {/* Wax seal */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div
                animate={{ scale: isOpen ? 0.3 : 1, opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col items-center gap-1"
              >
                {/* Seal ring */}
                <div
                  className="relative om-pulse"
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.05) 60%, transparent 100%)',
                    border: '1.5px solid rgba(212,175,55,0.5)',
                    boxShadow: '0 0 20px rgba(212,175,55,0.2), inset 0 0 20px rgba(212,175,55,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="/unnamed.jpg"
                    alt="Kalash Seal"
                    className="w-20 h-20 object-cover rounded-full"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <span
                  className="font-cinzel text-[#D4AF37] text-[9px] tracking-[0.25em] uppercase"
                  style={{ textShadow: '0 0 10px rgba(212,175,55,0.5)' }}
                >
                  ✦ Click to Open ✦
                </span>
              </motion.div>
            </div>

            {/* Bottom verse */}
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-4 left-0 right-0 text-center z-10 pointer-events-none"
            >
              <p className="font-devanagari text-[#D4AF37]/70 text-[11px]">॥ शुभम् भवतु ॥</p>
            </motion.div>
          </div>

          {/* ── Top flap ── */}
          <motion.div
            className="absolute left-0 right-0 top-0 overflow-hidden"
            style={{
              height: '50%',
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
              zIndex: isOpen ? 20 : 4,
            }}
            animate={{ rotateX: isOpen ? -178 : 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Flap body */}
            <div
              className="absolute inset-0 envelope-paper"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />
            {/* Flap gradient sheen */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(165deg, rgba(212,175,55,0.3) 0%, rgba(212,175,55,0.05) 50%, transparent 70%)',
              }}
            />
            {/* Flap shadow edge */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.3) 100%)',
              }}
            />
            {/* Flap border */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                border: '1px solid rgba(212,175,55,0.4)',
              }}
            />
            {/* Flap text */}
            <div
              className="absolute inset-0 flex items-start justify-center pt-2.5 z-20"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            >
              <div className="text-center">
                <p className="font-cinzel text-[#D4AF37] text-[9px] md:text-[11px] tracking-widest drop-shadow">ॐ</p>
                <p className="font-cinzel text-[#D4AF37]/80 text-[8px] md:text-[9px] tracking-wider leading-relaxed mt-0.5">
                  Sacred Thread<br />Ceremony
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Envelope side folds (decorative) ── */}
          <div
            className="absolute inset-0 pointer-events-none z-2"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.15) 100%)',
            }}
          />
        </div>
      </motion.div>

      {/* CTA pulse */}
      <motion.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="text-center pointer-events-none relative z-10 -mt-1"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <p className="font-devanagari text-[#D4AF37] text-sm md:text-base">
            ✉ खोल्न यहाँ थिच्नुहोस्
          </p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-[#D4AF37]/40" />
            <p className="text-[#FFFDD0]/45 text-[10px] font-cinzel tracking-[0.3em] uppercase">
              Tap to Open
            </p>
            <div className="w-6 h-px bg-[#D4AF37]/40" />
          </div>
        </motion.div>
      </motion.div>

      {/* Date footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="flex items-center gap-3 text-[#D4AF37]/60 relative z-10"
      >
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
        <span className="font-cinzel tracking-[0.2em] text-[10px]">वि.सं. २०८२ / १२ / १५</span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
      </motion.div>
    </div>
  )
}