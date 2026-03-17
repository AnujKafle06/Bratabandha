import React from 'react';
import { motion } from 'framer-motion';

const PremiumInvitationCard = () => {
  const downloadCard = () => {
    window.print();
  };

  const SectionDivider = () => (
    <div className="flex items-center justify-center w-full h-6 my-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#DAA520]" />
      <div className="mx-4 text-[#DAA520]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2L14.5,9H22L16,14L18.5,21L12,17L5.5,21L8,14L2,9H9.5L12,2Z" />
        </svg>
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#DAA520]" />
    </div>
  );

  const DiyaIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFE500" className="inline-block mr-2 drop-shadow-sm">
      <path d="M12,2C12,2 8,6 8,8.5C8,10.43 9.79,12 12,12C14.21,12 16,10.43 16,8.5C16,6 12,2 12,2M12,22C6.48,22 2,17.52 2,12C2,12 2,11.39 2.12,10.79C3.07,11.55 4.41,12 6,12C8.21,12 10,10.21 10,8C10,6.41 9.55,5.07 8.79,4.12C9.39,4 10,4 10,4C10,4 12,8 12,8C12,8 14,4 14,4C14,4 14.61,4 15.21,4.12C14.45,5.07 14,6.41 14,8C14,10.21 15.79,12 18,12C19.59,12 20.93,11.55 21.88,10.79C22,11.39 22,12 22,12C22,17.52 17.52,22 12,22Z" />
    </svg>
  );

  return (
    <div className="flex justify-center items-center py-12 px-4 min-h-screen bg-[#0f0404]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;700&display=swap');
          
          @keyframes borderPulse {
            0%, 100% { box-shadow: 0 0 20px rgba(218,165,32,0.3), inset 0 0 15px rgba(218,165,32,0.2); }
            50% { box-shadow: 0 0 40px rgba(218,165,32,0.5), inset 0 0 25px rgba(218,165,32,0.4); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes petalDrift {
            0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { transform: translate(100px, 100vh) rotate(360deg); opacity: 0; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          .animate-petal {
            position: absolute;
            pointer-events: none;
            animation: petalDrift linear infinite;
          }

          .mughal-arch {
            clip-path: ellipse(50% 100% at 50% 100%);
          }

          .scalloped-schedule {
            clip-path: polygon(0% 15%, 5% 10%, 10% 5%, 15% 2%, 20% 0%, 80% 0%, 85% 2%, 90% 5%, 95% 10%, 100% 15%, 100% 100%, 0% 100%);
          }

          .text-3d-gold {
            color: #FFD700;
            text-shadow: 2px 2px 0 #8B0000, 0 0 30px #FFD700, 0 0 60px #FFA500;
            background: linear-gradient(90deg, #FFD700, #FFF0A0, #DAA520, #FFD700);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shimmer 4s linear infinite;
          }

          .card-perspective {
            filter: drop-shadow(0 30px 80px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(218,165,32,0.3));
          }

          .noise-overlay {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.05;
          }

          @media print {
            .no-print { display: none; }
            body { background: white; }
          }
        `}
      </style>

      {/* Main Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-[520px] bg-[#8B0000] card-perspective rounded-sm p-3 overflow-hidden text-center animate-border-glow"
        style={{ 
          fontFamily: "'Noto Serif Devanagari', serif",
          background: 'radial-gradient(circle at center, #C41230 0%, #7A0018 50%, #4A0010 100%)',
          lineHeight: '1.9'
        }}
      >
        {/* Background Patterns & Textures */}
        <div className="absolute inset-0 noise-overlay pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.12] pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c16.568 0 30 13.432 30 30S46.568 60 30 60 0 46.568 0 30 13.432 0 30 0zm0 5C16.193 5 5 16.193 5 30s11.193 25 25 25 25-11.193 25-25S43.807 5 30 5zm0 10c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15z' fill='%23DAA520' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} 
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.7)]" />

        {/* Scattered Om Watermarks */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="absolute text-[#DAA520] opacity-[0.05] text-4xl pointer-events-none"
            style={{ 
              top: `${Math.random() * 90}%`, 
              left: `${Math.random() * 90}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            ॐ
          </div>
        ))}

        {/* Floating Petals */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="animate-petal"
            style={{
              top: `-${Math.random() * 20}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${15 + Math.random() * 15}px`
            }}
          >
            {i % 2 === 0 ? '🌸' : '🏵️'}
          </div>
        ))}

        {/* Triple Border System */}
        <div className="relative border-[4px] border-[#DAA520] h-full w-full p-2 animate-borderPulse">
           <div className="absolute inset-0 border-[1px] border-[#FFD700] m-1 opacity-40" />
           <div className="border-[2px] border-[#FFD700] h-full w-full relative p-6 bg-black/5">
              
              {/* Corner Ornaments - Massive Filigree */}
              <div className="absolute -top-4 -left-4 w-20 h-20 text-[#DAA520] z-20">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 Q50,0 50,50 Q0,50 0,100 Q0,50 50,50 Q50,0 100,0 L0,0 Z" />
                </svg>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 text-[#DAA520] z-20 rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 Q50,0 50,50 Q0,50 0,100 Q0,50 50,50 Q50,0 100,0 L0,0 Z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 text-[#DAA520] z-20 -rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 Q50,0 50,50 Q0,50 0,100 Q0,50 50,50 Q50,0 100,0 L0,0 Z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 text-[#DAA520] z-20 rotate-180">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 Q50,0 50,50 Q0,50 0,100 Q0,50 50,50 Q50,0 100,0 L0,0 Z" />
                </svg>
              </div>

              {/* Side borders - Repeating Lotus */}
              <div className="absolute left-1 top-20 bottom-20 flex flex-col justify-around text-[#DAA520]/20 text-[10px] py-4">
                {[...Array(12)].map((_, i) => <span key={i}>🪷</span>)}
              </div>
              <div className="absolute right-1 top-20 bottom-20 flex flex-col justify-around text-[#DAA520]/20 text-[10px] py-4">
                {[...Array(12)].map((_, i) => <span key={i}>🪷</span>)}
              </div>

              {/* Top Section Redesign */}
              <div className="relative mb-10 pt-6">
                 {/* Mughal Arch SVG */}
                 <div className="mx-auto w-64 h-72 relative">
                    <svg viewBox="0 0 200 240" className="absolute inset-0 w-full h-full drop-shadow-2xl">
                       <path 
                         d="M100,10 C40,10 10,60 10,120 L10,230 L190,230 L190,120 C190,60 160,10 100,10 Z" 
                         fill="#2a0005" 
                         stroke="#DAA520" 
                         strokeWidth="4"
                       />
                       <path d="M10,120 Q10,100 30,80 Q60,60 100,60 Q140,60 170,80 Q190,100 190,120" fill="none" stroke="#DAA520" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>
                    
                    {/* Flower Garland SVG Proxy */}
                    <div className="absolute -top-4 left-0 right-0 flex justify-center gap-1">
                       {[...Array(9)].map((_, i) => <span key={i} className="text-orange-500 text-xl drop-shadow-md">🌼</span>)}
                    </div>

                    {/* Golden Ganesha Illustration */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                       <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-32 h-32 text-[#FFD700]">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                             <path d="M12,2C10.89,2 10,2.89 10,4C10,5.11 10.89,6 12,6C13.11,6 14,5.11 14,4C14,2.89 13.11,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7M12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15M12,18C8.13,18 5,21.13 5,25H19C19,21.13 15.87,18 12,18Z" />
                          </svg>
                       </motion.div>
                       <p className="text-[#DAA520] font-bold italic mt-4 text-xl tracking-wider">॥ श्री गणेशाय नमः ॥</p>
                    </div>

                    {/* Hanging Temple Bells */}
                    <motion.div animate={{ rotate: [5, -5, 5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-10 top-20 text-[#DAA520]">
                       <div className="w-0.5 h-16 bg-[#DAA520] mx-auto" />
                       <span className="text-4xl">🔔</span>
                    </motion.div>
                    <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-10 top-20 text-[#DAA520]">
                       <div className="w-0.5 h-16 bg-[#DAA520] mx-auto" />
                       <span className="text-4xl">🔔</span>
                    </motion.div>
                 </div>

                 {/* Corner Deity Silhouettes */}
                 <div className="absolute top-0 left-4 text-[#DAA520]/60 text-6xl">🕉️</div>
                 <div className="absolute top-0 right-4 text-[#DAA520]/60 text-6xl">🕉️</div>
                 
                 {/* Sparkles */}
                 <div className="absolute top-10 left-1/4 animate-pulse text-[#FFD700]">✦</div>
                 <div className="absolute top-40 right-1/4 animate-pulse text-[#FFD700] delay-700">✦</div>
              </div>

              {/* Title Section */}
              <div className="relative mt-4 mb-2">
                <span className="text-[#FFD700] text-2xl mr-4">✦</span>
                <h1 className="text-6xl font-black text-3d-gold inline-block tracking-wide py-4 px-2">
                  शुभ ब्रतबन्ध
                </h1>
                <span className="text-[#FFD700] text-2xl ml-4">✦</span>
              </div>

              <div className="flex flex-col items-center">
                 <h2 className="text-3xl font-bold text-[#FFE500] gold-outline tracking-[0.05em] mb-2">सादर निमन्त्रणा</h2>
                 <div className="w-48 h-4 text-[#DAA520] mb-6">
                    <svg viewBox="0 0 200 20" className="w-full h-full"><path d="M0,10 Q50,0 100,10 Q150,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="100" cy="10" r="4" fill="currentColor"/></svg>
                 </div>
              </div>

              {/* Body Text */}
              <p className="text-[#FFFDD0] text-[17px] mb-10 px-4 font-medium tracking-[0.02em]">
                हाम्रा आयुष्मान नातिद्वय श्री <span className="text-[#FFE500] font-bold">सफल अर्याल</span> (सुपुत्र श्री सन्तोष अर्याल तथा गीता भट्टराई अर्याल) र श्री <span className="text-[#FFE500] font-bold">अनुज काफ्ले</span> (सुपुत्र श्री कुमार काफ्ले तथा दुर्गा अर्याल) को शुभ ब्रतबन्धको सुखद् अवसरमा बटुकहरुलाई शुभ आशीर्वाद प्रदान गर्नको लागि यहाँको गरिमामय उपस्थितिको लागि हार्दिक निमन्त्रणा गर्दछौँ।
              </p>

              <SectionDivider />

              {/* Schedule Box - Scalloped */}
              <div className="scalloped-schedule bg-gradient-to-br from-[#8B0000]/80 to-[#500000]/90 backdrop-blur-md border-2 border-gold p-10 mb-10 relative shadow-2xl">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#DAA520] w-10 h-10">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M12,6L14.5,11H20L16,14.5L17.5,20L12,17L6.5,20L8,14.5L4,11H9.5L12,6Z"/></svg>
                 </div>
                 <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#DAA520] w-10 h-10">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M12,6L14.5,11H20L16,14.5L17.5,20L12,17L6.5,20L8,14.5L4,11H9.5L12,6Z"/></svg>
                 </div>
                 
                 <h3 className="text-[#DAA520] text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                   🪷 कार्यक्रम: 🪷
                 </h3>
                 <div className="space-y-5">
                    <p className="text-[#FFE500] text-2xl font-bold border-b border-[#DAA520]/30 pb-3">मिति: २०८२ चैत १५ गते</p>
                    <div className="text-white space-y-3 text-lg">
                       <p><span className="text-[#DAA520] font-bold">भिक्षादान:</span> समय: ११:०० बजे, स्थान: निजी निवास</p>
                       <div className="h-px w-32 bg-[#DAA520]/20 mx-auto" />
                       <p><span className="text-[#DAA520] font-bold">भोज कार्यक्रम:</span> समय: ३:०० बजे, स्थान: बी पी संग्रालय, बिपी चोक सुन्दरिजल</p>
                    </div>
                 </div>
              </div>

              {/* Prarthi Section */}
              <div className="mb-10 bg-black/20 p-6 rounded-lg border-l-4 border-[#DAA520] shadow-inner text-left">
                <h3 className="text-[#DAA520] text-2xl font-bold mb-4">प्राथीं</h3>
                <div className="text-[#FFFDD0] space-y-3 text-lg">
                   <p className="flex items-center"><DiyaIcon /> हजुरबुवा श्री वासुदेव अर्याल</p>
                   <p className="flex items-center"><DiyaIcon /> हजुरआमा श्रीमती भवानी अर्याल</p>
                </div>
              </div>

              <SectionDivider />

              {/* Darshanabhilashi Section */}
              <div className="mb-10 bg-black/20 p-6 rounded-lg border-l-4 border-[#DAA520] shadow-inner text-left">
                <h3 className="text-[#DAA520] text-2xl font-bold mb-4">दर्शनाभिलाषी</h3>
                <div className="text-[#FFFDD0] space-y-3 text-[16px] leading-[2.0]">
                   <p className="flex items-center"><DiyaIcon /> श्रीमान् गोविन्द अर्याल/ श्रीमती निता अर्याल</p>
                   <p className="flex items-center"><DiyaIcon /> श्रीमती उमा अर्याल</p>
                   <p className="flex items-center"><DiyaIcon /> श्रीमान् कुमार अर्याल/श्रीमती सोविता घिमिरे</p>
                   <p className="flex items-center"><DiyaIcon /> श्रीमान् किशोर अर्याल/ श्रीमती सुजाता दाहाल</p>
                   <p className="flex items-center"><DiyaIcon /> श्रीमान् सञ्जीव अर्याल/श्रीमती निशा सुवेदी</p>
                   <p className="text-[#FFE500] font-bold py-1 bg-[#8B0000]/40 px-3 rounded italic">अन्सु, दिवस, श्रीषा, कास्भी, साञ्भी, असिम, सिवान्स, सार्थक</p>
                   <p className="text-[#DAA520] font-black text-xl mt-2 tracking-wide text-center">तथा सम्पूर्ण अर्याल परिवार</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[#DAA520] italic text-xl border-t border-b border-[#DAA520]/30 py-3 font-bold">
                  फुपु/फुपाजु: श्रीमती उषा भट्टराई/श्रीमान् दिपक भट्टराई
                </p>
              </div>

              {/* Peacocks & Footer */}
              <div className="relative mt-16 pb-12">
                 <div className="absolute inset-x-0 top-0 flex items-center justify-center">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#DAA520]/40" />
                    <span className="mx-4 text-[#DAA520]">🪷</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#DAA520]/40" />
                 </div>
                 
                 {/* Peacocks Integrated */}
                 <motion.div 
                   whileHover={{ scale: 1.1, rotate: -5 }}
                   className="absolute -left-12 -bottom-4 text-[160px] z-30 drop-shadow-[0_15px_30px_rgba(218,165,32,0.4)] pointer-events-auto cursor-pointer"
                 >
                    🦚
                    <div className="absolute inset-0 bg-gradient-to-t from-[#DAA520]/30 to-transparent blur-2xl -z-10 rounded-full" />
                 </motion.div>
                 
                 <div className="relative z-20 mt-12 bg-gradient-to-r from-transparent via-[#DAA520]/10 to-transparent p-6 rounded-2xl border border-[#DAA520]/30 backdrop-blur-sm">
                    <p className="text-[#DAA520] text-sm tracking-[0.3em] uppercase mb-2 font-bold">Contact For Support</p>
                    <p className="text-[#FFE500] font-black text-3xl flex items-center justify-center gap-4 drop-shadow-[0_0_15px_#FFD700]">
                       🪔 ९८४९९४१४८ 🪔
                    </p>
                 </div>

                 <motion.div 
                   whileHover={{ scale: 1.1, rotate: 5 }}
                   className="absolute -right-12 -bottom-4 text-[160px] z-30 -scale-x-100 drop-shadow-[0_15px_30px_rgba(218,165,32,0.4)] pointer-events-auto cursor-pointer"
                 >
                    🦚
                    <div className="absolute inset-0 bg-gradient-to-t from-[#DAA520]/30 to-transparent blur-2xl -z-10 rounded-full" />
                 </motion.div>
              </div>
           </div>
        </div>

        {/* Action Button */}
        <div className="no-print flex gap-4 mt-8 mb-4">
          <button 
            onClick={downloadCard}
            className="flex-1 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] text-[#330000] font-black py-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-[0.2em] text-lg border-b-4 border-[#8B4513]"
          >
            Download
          </button>
        </div>
        
        <p className="no-print text-[#DAA520]/60 text-[10px] uppercase tracking-[0.5em] mb-4">
          © Royal Hindu Heritage Collection
        </p>
      </motion.div>
    </div>
  );
};

export default PremiumInvitationCard;
