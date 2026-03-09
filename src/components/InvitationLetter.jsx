import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const content = {
  ne: {
    title: 'शुभ ब्रतबन्ध निमन्त्रणा',
    subtitle: 'Shubha Bratabandha Invitation',
    mainText: 'हाम्रा आयुष्मान नातिद्वय श्री सफल अर्याल (सुपुत्र श्री सन्तोष अर्याल तथा गीता भट्टराई अर्याल) र श्री अनुज काफ्ले (सुपुत्र श्री कुमार काफ्ले तथा दुर्गा अर्याल) को शुभ ब्रतबन्धको सुखद् अवसरमा बटुकहरुलाई शुभ आशीर्वाद प्रदान गर्नको लागि यहाँको गरिमामय उपस्थितिको लागि हार्दिक निमन्त्रणा गर्दछौँ।',
    prarthiTitle: 'प्रार्थी',
    prarthiLines: [
      'हजुरबुवा श्री वासुदेव अर्याल',
      'हजुरआमा श्रीमती भवानी अर्याल',
    ],
    darshanaTitle: 'दर्शनाभिलषी',
    darshanaLines: [
      'श्रीमान् गोविन्द अर्याल / श्रीमती निता अर्याल',
      'श्रीमती उमा अर्याल',
      'श्रीमान् कुमार अर्याल / श्रीमती सोविता घिमिरे',
      'श्रीमान् दिपक भट्टराई / श्रीमती उषा भट्टराई',
      'श्रीमान् किशोर अर्याल / श्रीमती सुजाता दाहाल',
      'श्रीमान् सञ्जीव अर्याल / श्रीमती निशा सुवेदी',
      'अन्शु, दिवस, श्रीषा, कास्भी, सान्भी, असिम, सिवान्स, सार्थक',
      'तथा सम्पुर्ण अर्याल परिवार',
    ],
    eventTitle: 'कार्यक्रम विवरण',
    eventDate: 'मिती: २०८२/१२/१५ गते',
    events: [
      { title: 'भिक्षादान', time: 'बिहान ११:०० बजे', place: 'निजी निवास', icon: '🪔' },
      { title: 'भोज कार्यक्रम', time: 'दिउँसो ३:०० बजे', place: 'बी पी संग्रालय, बिपी चोक सुन्दरिजल', icon: '🌸' },
    ],
    contactText: 'सम्पर्क',
    footerText: 'यहाँको उपस्थितिले हामीलाई गौरवान्वित गर्नेछ',
    safal: 'सफल अर्याल',
    safalParent: 'सुपुत्र श्री सन्तोष अर्याल\nतथा गीता भट्टराई अर्याल',
    anuj: 'अनुज काफ्ले',
    anujParent: 'सुपुत्र श्री कुमार काफ्ले\nतथा दुर्गा अर्याल',
    ganesh: '॥ ॐ श्री गणेशाय नमः ॥',
    phone: '९८४१९९४१४८',
    closeLabel: 'बन्द गर्नुहोस्',
  },
  en: {
    title: 'Sacred Thread Ceremony',
    subtitle: 'Shubha Bratabandha Invitation',
    mainText: 'We cordially invite you to grace the auspicious occasion of the Bratabandha (Sacred Thread Ceremony) of our beloved grandsons, Safal Aryal (son of Mr. Santosh Aryal and Mrs. Geeta Bhattarai Aryal) and Anuj Kafle (son of Mr. Kumar Kafle and Mrs. Durga Aryal). We request your esteemed presence to bless the young boys as they embark upon this sacred journey.',
    prarthiTitle: 'With Best Compliments From',
    prarthiLines: [
      'Grandfather Mr. Basudev Aryal',
      'Grandmother Mrs. Bhawani Aryal',
    ],
    darshanaTitle: 'Well Wishers',
    darshanaLines: [
      'Mr. Govinda Aryal / Mrs. Nita Aryal',
      'Mrs. Uma Aryal',
      'Mr. Kumar Aryal / Mrs. Sovita Ghimire',
      'Mr. Deepak Bhattarai / Mrs. Usha Bhattarai',
      'Mr. Kishor Aryal / Mrs. Sujata Dahal',
      'Mr. Sanjeeb Aryal / Mrs. Nisha Subedi',
      'Anshu, Diwas, Shrisha, Kashvee, Sanvi, Asim, Siwans, Sarthak',
      'And the entire Aryal Family',
    ],
    eventTitle: 'Programme Details',
    eventDate: 'Date: 15th Chaitra, 2082 BS',
    events: [
      { title: 'Bhikshadan', time: '11:00 AM', place: 'Private Residence', icon: '🪔' },
      { title: 'Reception Feast', time: '3:00 PM', place: 'BP Museum, BP Chowk Sundarijal', icon: '🌸' },
    ],
    contactText: 'Contact',
    footerText: 'Your presence is our greatest honour',
    safal: 'Safal Aryal',
    safalParent: 'Son of Mr. Santosh Aryal\n& Mrs. Geeta Bhattarai Aryal',
    anuj: 'Anuj Kafle',
    anujParent: 'Son of Mr. Kumar Kafle\n& Mrs. Durga Aryal',
    ganesh: '॥ OM SHRI GANESHAYA NAMAH ॥',
    phone: '9841994148',
    closeLabel: 'Close',
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  }),
}

function GoldDivider({ symbol = '✦' }) {
  return (
    <div className="flex items-center gap-3 my-3">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A227]/60" />
      <span className="text-[#C9A227]/80 text-[10px]">{symbol}</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A227]/60" />
    </div>
  )
}

function PhotoSlot({ src, name, parentLine, isNepali }) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      {/* Photo frame */}
      <div className="relative">
        {/* Outer decorative ring */}
        <div
          className="absolute -inset-2 rounded-md"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.5) 0%, rgba(212,175,55,0.1) 50%, rgba(212,175,55,0.5) 100%)',
            padding: 1,
          }}
        >
          <div className="w-full h-full rounded-md" style={{ background: 'rgba(255,253,208,0.05)' }} />
        </div>
        <div
          className="relative overflow-hidden shadow-lg"
          style={{
            width: 120,
            height: 152,
            borderRadius: 6,
            border: '2px solid rgba(212,175,55,0.5)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          <img
            src={src}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
          {/* Photo overlay sheen */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 40%, rgba(0,0,0,0.2) 100%)',
          }} />
        </div>
        {/* Corner accents */}
        {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
          <span key={i} className={`absolute ${pos} text-[#D4AF37] text-[8px] leading-none`}
            style={{ transform: i === 0 ? 'translate(-2px,-2px)' : i === 1 ? 'translate(2px,-2px)' : i === 2 ? 'translate(-2px,2px)' : 'translate(2px,2px)' }}>
            ✦
          </span>
        ))}
      </div>

      <div className="text-center px-1">
        <p className={`font-bold text-[#8B0000] text-sm leading-tight ${isNepali ? 'font-devanagari' : 'font-cinzel'}`}>
          {name}
        </p>
        <p className={`text-[#5c1a1a]/60 text-[10px] leading-snug mt-0.5 whitespace-pre-line ${isNepali ? 'font-devanagari' : 'font-cinzel tracking-wider'}`}>
          {parentLine}
        </p>
      </div>
    </div>
  )
}

function EventCard({ event, isNepali }) {
  return (
    <div
      className="relative overflow-hidden rounded-lg p-3.5 flex items-start gap-3"
      style={{
        background: 'linear-gradient(135deg, rgba(139,0,0,0.06) 0%, rgba(212,175,55,0.04) 100%)',
        border: '1px solid rgba(212,175,55,0.3)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4)',
      }}
    >
      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/60 to-transparent rounded-l-lg" />

      <span className="text-xl mt-0.5 flex-shrink-0">{event.icon}</span>
      <div className="min-w-0">
        <p className={`font-bold text-[#8B0000] text-sm leading-tight ${isNepali ? 'font-devanagari' : 'font-cinzel'}`}>
          {event.title}
        </p>
        <p className={`text-[#4a1a1a]/70 text-xs mt-1 ${isNepali ? 'font-devanagari' : 'font-cinzel tracking-wide'}`}>
          🕐 {event.time}
        </p>
        <p className={`text-[#4a1a1a]/65 text-xs leading-snug mt-0.5 ${isNepali ? 'font-devanagari' : 'font-cinzel tracking-wide'}`}>
          📍 {event.place}
        </p>
      </div>
    </div>
  )
}

export default function InvitationLetter({ onClose }) {
  const scrollRef = useRef(null)
  const [lang, setLang] = useState('ne')
  const t = content[lang]
  const isNepali = lang === 'ne'

  return (
    <div className="relative w-full rounded-2xl overflow-hidden"
      style={{
        boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,175,55,0.3)',
      }}
    >
      {/* Paper background */}
      <div className="letter-paper absolute inset-0" />
      <div className="absolute inset-0 bg-[#FFF8DC]/88" />
      {/* Texture vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,253,208,0) 40%, rgba(200,160,40,0.06) 100%)',
        }}
      />

      {/* Decorative border system */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none z-20"
        style={{ border: '1px solid rgba(212,175,55,0.5)' }} />
      <div className="absolute inset-[5px] rounded-xl pointer-events-none z-20"
        style={{ border: '1px solid rgba(212,175,55,0.25)' }} />

      {/* Top band */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20"
        style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }} />

      {/* Corner ornaments on letter */}
      {[
        'top-2 left-2',
        'top-2 right-2 scale-x-[-1]',
        'bottom-2 left-2 scale-y-[-1]',
        'bottom-2 right-2 scale-[-1]',
      ].map((cls, i) => (
        <div key={i} className={`absolute ${cls} z-20 pointer-events-none`}>
          <svg width="28" height="28" viewBox="0 0 28 28" style={{ opacity: 0.5 }}>
            <path d="M2 26 L2 6 Q2 2 6 2 L26 2" fill="none" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="2" cy="2" r="1.8" fill="#D4AF37" />
          </svg>
        </div>
      ))}

      {/* Language toggle */}
      <button
        onClick={() => setLang(l => l === 'ne' ? 'en' : 'ne')}
        className="absolute top-3 left-3 z-30 px-3 py-1 rounded font-cinzel text-[10px] font-bold tracking-widest transition-all"
        style={{
          background: 'rgba(255,253,208,0.9)',
          border: '1px solid rgba(212,175,55,0.5)',
          color: '#8B0000',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        {isNepali ? 'EN' : 'NE'}
      </button>

      {/* Close button */}
      <button
        id="close-invitation-btn"
        onClick={onClose}
        className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
        style={{
          background: '#8B0000',
          color: '#FFFDD0',
          boxShadow: '0 2px 12px rgba(139,0,0,0.5)',
        }}
      >
        ✕
      </button>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="relative z-10 max-h-[88vh] overflow-y-auto invitation-scroll"
        id="invitation-letter-content"
        style={{ padding: '20px 18px 28px' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >

            {/* ── Header ── */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.05}
              className="text-center mb-3 pt-4"
            >
              {/* Kalash image */}
              <div className="flex justify-center mb-2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)', transform: 'scale(1.4)' }} />
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center"
                    style={{
                      border: '1.5px solid rgba(212,175,55,0.6)',
                      boxShadow: '0 4px 16px rgba(212,175,55,0.2)',
                    }}
                  >
                    <img src="/unnamed.jpg" alt="Kalash" className="w-full h-full object-cover"
                      style={{ mixBlendMode: 'darken' }} />
                  </div>
                </div>
              </div>

              {/* Ganesh mantra */}
              <p className={`font-semibold tracking-widest mb-1 ${isNepali ? 'font-devanagari text-xs' : 'font-cinzel text-[9px]'}`}
                style={{ color: '#C9A227' }}>
                {t.ganesh}
              </p>

              {/* Title */}
              <h1 className={`font-bold leading-tight mb-0.5 ${isNepali ? 'font-devanagari text-xl' : 'font-cinzel text-base tracking-wide'}`}
                style={{ color: '#8B0000' }}>
                {t.title}
              </h1>
              <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase"
                style={{ color: '#C9A227' }}>
                {t.subtitle}
              </p>
            </motion.div>

            <GoldDivider symbol="🌸" />

            {/* ── Photos ── */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.15}
              className="flex justify-center gap-4 mb-1 px-2"
            >
              <PhotoSlot src="/persons/safal.jpg" name={t.safal} parentLine={t.safalParent} isNepali={isNepali} />
              <div className="flex flex-col items-center justify-center gap-1 self-center">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
                <span className="text-[#D4AF37]/70 text-sm">✦</span>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
              </div>
              <PhotoSlot src="/persons/anuj.jpg" name={t.anuj} parentLine={t.anujParent} isNepali={isNepali} />
            </motion.div>

            <GoldDivider />

            {/* ── Main text ── */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.3}
              className={`text-center leading-relaxed mb-1 px-1 ${isNepali ? 'font-devanagari text-sm' : 'font-cinzel text-[11px] tracking-wide'}`}
              style={{ color: '#3d1010' }}
            >
              {t.mainText}
            </motion.div>

            <GoldDivider />

            {/* ── Prarthi ── */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.45}
              className="text-center mb-1"
            >
              <div className="inline-block mb-1.5">
                <p className={`font-bold text-xs tracking-widest uppercase ${isNepali ? 'font-devanagari' : 'font-cinzel'}`}
                  style={{ color: '#C9A227' }}>
                  {t.prarthiTitle}
                </p>
                <div className="h-px mt-0.5" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }} />
              </div>
              {t.prarthiLines.map((line, i) => (
                <p key={i} className={`font-semibold leading-snug ${isNepali ? 'font-devanagari text-sm' : 'font-cinzel text-[11px] tracking-wide py-0.5'}`}
                  style={{ color: '#3d1010' }}>
                  {line}
                </p>
              ))}
            </motion.div>

            <GoldDivider />

            {/* ── Darshana ── */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.6}
              className="text-center mb-1"
            >
              <div className="inline-block mb-1.5">
                <p className={`font-bold text-xs tracking-widest uppercase ${isNepali ? 'font-devanagari' : 'font-cinzel'}`}
                  style={{ color: '#C9A227' }}>
                  {t.darshanaTitle}
                </p>
                <div className="h-px mt-0.5" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }} />
              </div>
              <div className="space-y-0.5">
                {t.darshanaLines.map((line, i) => (
                  <p key={i} className={`leading-snug ${isNepali ? 'font-devanagari text-[13px]' : 'font-cinzel text-[10px] tracking-wide py-0.5'}`}
                    style={{ color: i < t.darshanaLines.length - 1 ? '#3d1010' : '#5c3030/80' }}>
                    {i === t.darshanaLines.length - 2 || i === t.darshanaLines.length - 1
                      ? <span style={{ color: '#5c3030', opacity: 0.75 }}>{line}</span>
                      : line
                    }
                  </p>
                ))}
              </div>
            </motion.div>

            <GoldDivider symbol="🌸" />

            {/* ── Events ── */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.75}
              className="mb-1"
            >
              <div className="text-center mb-3">
                <p className={`font-bold text-xs tracking-widest uppercase ${isNepali ? 'font-devanagari' : 'font-cinzel'}`}
                  style={{ color: '#C9A227' }}>
                  {t.eventTitle}
                </p>
                <p className={`text-xs mt-0.5 ${isNepali ? 'font-devanagari' : 'font-cinzel tracking-wide'}`}
                  style={{ color: '#8B0000' }}>
                  {t.eventDate}
                </p>
                <div className="h-px mt-1 mx-8" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }} />
              </div>
              <div className="flex flex-col gap-2.5 mx-2">
                {t.events.map((event, i) => (
                  <EventCard key={i} event={event} isNepali={isNepali} />
                ))}
              </div>
            </motion.div>

            <GoldDivider />

            {/* ── Contact ── */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.9}
              className="text-center mb-1"
            >
              <p className={`text-xs mb-1 ${isNepali ? 'font-devanagari' : 'font-cinzel tracking-widest uppercase'}`}
                style={{ color: '#5c3030', opacity: 0.7 }}>
                {t.contactText}
              </p>
              <a href="tel:9841994148"
                className={`font-bold text-base tracking-widest transition-colors hover:opacity-80 ${isNepali ? 'font-cinzel' : 'font-cinzel'}`}
                style={{ color: '#8B0000' }}
              >
                {t.phone}
              </a>
            </motion.div>

            {/* ── Footer ── */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1.0}
              className="text-center pt-3 pb-2"
            >
              <div className="h-px mb-2 mx-4"
                style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.6), transparent)' }} />
              <p className="font-cinzel text-[9px] tracking-[0.3em] mb-1"
                style={{ color: '#C9A227' }}>
                ✦ JAI MAHA GANAPATI ✦
              </p>
              <p className={`text-[11px] ${isNepali ? 'font-devanagari' : 'font-cinzel tracking-wide'}`}
                style={{ color: '#5c3030', opacity: 0.6 }}>
                {t.footerText}
              </p>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}