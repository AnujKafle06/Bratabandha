import { useRef, useEffect } from 'react';

const CanvasCard = ({ onClose }) => {
  const canvasRef = useRef(null);

  const cardData = {
    ganeshMantra: '॥ श्री गणेशाय नमः ॥',
    shubhaBratabandha: 'शुभ ब्रतबन्ध',
    sadarNimantrana: 'सादर निमन्त्रणा',
    mainText: 'हाम्रा आयुष्मान नातिद्वय श्री सफल अर्याल (सुपुत्र श्री सन्तोष अर्याल तथा गीता भट्टराई अर्याल) र श्री अनुज काफ्ले (सुपुत्र श्री कुमार काफ्ले तथा दुर्गा अर्याल) को शुभ ब्रतबन्धको सुखद् अवसरमा बटुकहरुलाई शुभ आशीर्वाद प्रदान गर्नको लागि यहाँको गरिमामय उपस्थितिको लागि हार्दिक निमन्त्रणा गर्दछौँ।',
    prarthiTitle: 'प्रार्थी',
    prarthiLines: [
      'हजुरबुवा श्री वासुदेव अर्याल',
      'हजुरआमा श्रीमती भवानी अर्याल',
    ],
    darshanaTitle: 'दर्शनाभिलाषी',
    darshanaLines: [
      'श्रीमान् गोविन्द अर्याल/ श्रीमती निता अर्याल',
      'श्रीमती उमा अर्याल',
      'श्रीमान् कुमार अर्याल/श्रीमती सोविता घिमिरे',
      'श्रीमान् किशोर अर्याल/ श्रीमती सुजाता दाहाल',
      'श्रीमान् सञ्जीव अर्याल/श्रीमती निशा सुवेदी',
      'अन्सु, दिवस, श्रीषा, कास्भी, साञ्भी, असिम, सिवान्स, सार्थक',
      'तथा सम्पूर्ण अर्याल परिवार',
    ],
    phupu: 'फुपु/फुपाजु: श्रीमती उषा भट्टराई/श्रीमान् दिपक भट्टराई',
    programTitle: 'कार्यक्रमः',
    eventDate: 'मिति: २०८२ चैत १५ गते',
    events: [
      { label: 'भिक्षादान:', value: 'समय: ११:०० बजे, स्थान: निजी निवास' },
      { label: 'भोज कार्यक्रम:', value: 'समय: ३:०० बजे, स्थान: बी पी संग्रालय, बिपी चोक सुन्दरिजल' },
    ],
    contact: 'सम्पर्क: ९८४१९९४१४८'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = 1800; 
    const height = 2600;
    canvas.width = width;
    canvas.height = height;

    const drawCard = async () => {
      // 1. ROYAL MAROON SILK REFINED BACKGROUND
      drawUltraLuxuryBackground(ctx, width, height);

      // 2. TRIPLE-LAYER GOLDEN FILIGREE FRAME
      drawTripleGoldFrame(ctx, width, height);

      // 3. DIVINE TOP ARCH (Ganesha with Sunburst & Hanging Bells)
      drawGaneshaAuraSection(ctx, width);

      // 4. ROYAL 3D GOLD TYPOGRAPHY
      draw3DGoldHeaders(ctx, width);

      // 5. BODY TEXT WITH GOLDEN FLOURISHES
      let currentY = 880;
      drawOrnateBodySection(ctx, width, currentY);

      // 6. JEWELED SCHEDULE BOX
      currentY = 1200;
      drawJeweledEventBox(ctx, width, currentY);

      // 7. NAMES & RELATIONS
      currentY = 1580;
      drawPremiumNamesLayout(ctx, width, currentY);

      // 8. LUXURIOUS JEWELED PEACOCKS
      drawJeweledPeacocks(ctx, width, height);

      // 9. AMBIENT ATMOSPHERE (Golden dust, rose petals, bokeh)
      drawAmbientAesthetics(ctx, width, height);

      // 10. CONTACT FOOTER
      drawElegantFooter(ctx, width, height);
    };

    // --- ULTRA REFINEMENT HELPERS ---

    function drawUltraLuxuryBackground(ctx, w, h) {
      // Multi-stop Deep Crimson Gradient (Lighting Effect)
      const grad = ctx.createRadialGradient(w/2, h/3, 200, w/2, h/2, h);
      grad.addColorStop(0, '#7a0000'); // Lighter focus top-center
      grad.addColorStop(0.3, '#5e0000');
      grad.addColorStop(0.7, '#3d0202');
      grad.addColorStop(1, '#1a0101');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // 1. Faint Mandala Overlays
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = '#f9e27d';
      const mandalaCount = 6;
      for (let i = 0; i < mandalaCount; i++) {
        const x = (i % 2 === 0) ? 0 : w;
        const y = (i < 2) ? 0 : (i < 4) ? h/2 : h;
        drawMandala(ctx, x, y, 500);
      }
      ctx.restore();

      // 2. Silk Ripple Texture
      ctx.save();
      ctx.globalAlpha = 0.03;
      ctx.lineWidth = 1;
      for (let i = 0; i < h; i += 12) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.bezierCurveTo(w/3, i + 100, 2*w/3, i - 100, w, i);
        ctx.strokeStyle = '#fff';
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawMandala(ctx, x, y, radius) {
      ctx.beginPath();
      for (let i = 0; i < 360; i += 15) {
        const angle = i * Math.PI / 180;
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
        ctx.arc(x + Math.cos(angle) * radius/2, y + Math.sin(angle) * radius/2, radius/4, 0, Math.PI*2);
      }
      ctx.stroke();
    }

    function drawTripleGoldFrame(ctx, w, h) {
      const m = 60;
      ctx.save();
      
      // Layer 1: Thick Outer Beveled Gold
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 15;
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 12;
      ctx.strokeRect(m, m, w - m*2, h - m*2);
      
      // Layer 2: Repeating Floral Middle Border
      ctx.globalAlpha = 0.6;
      ctx.lineWidth = 2;
      for (let i = m + 20; i < w - m - 20; i += 40) {
        ctx.strokeRect(i, m + 15, 10, 10);
        ctx.strokeRect(i, h - m - 25, 10, 10);
      }

      // Layer 3: Thin Inner Filigree
      ctx.globalAlpha = 1.0;
      ctx.strokeStyle = '#f9e27d';
      ctx.lineWidth = 3;
      ctx.strokeRect(m + 35, m + 35, w - (m + 35)*2, h - (m + 35)*2);

      // Elaborate Corners
      ctx.fillStyle = '#D4AF37';
      const drawCorner = (x, y, r) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(r);
        ctx.font = '60px serif';
        ctx.fillText('⚜️', -30, 40);
        ctx.restore();
      };
      drawCorner(m+35, m+35, 0);
      drawCorner(w-m-35, m+35, Math.PI/2);
      drawCorner(m+35, h-m-35, -Math.PI/2);
      drawCorner(w-m-35, h-m-35, Math.PI);
      
      ctx.restore();
    }

    function drawGaneshaAuraSection(ctx, w) {
      const ay = 140;
      ctx.save();
      ctx.textAlign = 'center';

      // 1. Divine Sunburst (Aura)
      const auraGrad = ctx.createRadialGradient(w/2, ay + 150, 0, w/2, ay + 150, 300);
      auraGrad.addColorStop(0, 'rgba(255, 215, 0, 0.4)');
      auraGrad.addColorStop(1, 'rgba(255, 215, 0, 0)');
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(w/2, ay + 150, 300, 0, Math.PI*2);
      ctx.fill();

      // 2. Intricate Double Arch
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(w/2, ay + 160, 200, Math.PI, 0);
      ctx.stroke();
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(w/2, ay + 160, 220, Math.PI, 0);
      ctx.stroke();

      // 3. Hanging Bells (Procedural)
      const drawBell = (x, y) => {
        ctx.fillStyle = '#D4AF37';
        ctx.fillRect(x-2, ay, 4, y - ay); // String
        ctx.font = '40px serif';
        ctx.fillText('🔔', x, y);
      };
      drawBell(w/2 - 250, ay + 200);
      drawBell(w/2 + 250, ay + 200);

      // 4. Ganesha Idol (Embossed look)
      ctx.shadowColor = 'black';
      ctx.shadowBlur = 20;
      ctx.fillStyle = '#f9e27d';
      ctx.font = 'bold 180px serif';
      ctx.fillText('🕉️', w/2, ay + 280);

      // 5. Traditional Kalash
      ctx.shadowBlur = 10;
      ctx.font = '110px serif';
      ctx.fillText('🏺', w/2 - 450, ay + 500);
      ctx.fillText('🏺', w/2 + 450, ay + 500);
      ctx.font = 'bold 24px serif';
      ctx.fillText('ॐ', w/2 - 450, ay + 480);
      ctx.fillText('ॐ', w/2 + 450, ay + 480);

      ctx.restore();
    }

    function draw3DGoldHeaders(ctx, w) {
      ctx.textAlign = 'center';
      
      // ॥ श्री गणेशाय नमः ॥
      ctx.fillStyle = '#D4AF37';
      ctx.font = 'bold 42px "Noto Serif Devanagari"';
      ctx.fillText(cardData.ganeshMantra, w/2, 520);

      // Title: शुभ ब्रतबन्ध (3D Layered Gold)
      const tx = w/2;
      const ty = 700;
      ctx.font = 'bold 140px "Noto Serif Devanagari"';
      
      // Bottom Shadow
      ctx.fillStyle = '#3d0202';
      ctx.fillText(cardData.shubhaBratabandha, tx + 4, ty + 6);
      
      // Middle Antique Gold
      ctx.fillStyle = '#aa8a2e';
      ctx.fillText(cardData.shubhaBratabandha, tx + 2, ty + 2);
      
      // Top Radiant Gold
      const grad = ctx.createLinearGradient(0, ty-100, 0, ty);
      grad.addColorStop(0, '#fffacd');
      grad.addColorStop(0.5, '#FFD700');
      grad.addColorStop(1, '#B8860B');
      ctx.fillStyle = grad;
      ctx.fillText(cardData.shubhaBratabandha, tx, ty);

      // सादर निमन्त्रणा (Glow Effect)
      ctx.save();
      ctx.shadowColor = '#FFE500';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#FFE500';
      ctx.font = 'bold 75px "Noto Serif Devanagari"';
      ctx.fillText(cardData.sadarNimantrana, w/2, 800);
      ctx.restore();
    }

    function drawOrnateBodySection(ctx, w, y) {
      ctx.save();
      ctx.textAlign = 'center';
      
      // Decorative Flourishes around text
      ctx.fillStyle = '#D4AF37';
      ctx.font = '40px serif';
      ctx.fillText('❦', w/2 - 450, y + 60);
      ctx.fillText('❦', w/2 + 450, y + 60);

      ctx.fillStyle = '#FFFDD0';
      ctx.font = '38px "Noto Serif Devanagari"';
      wrapText(ctx, cardData.mainText, w/2, y + 20, 1200, 65);
      ctx.restore();
    }

    function drawJeweledEventBox(ctx, w, y) {
      const bw = 1100;
      const bh = 320;
      const bx = (w - bw) / 2;

      ctx.save();
      // Outer Shadow
      ctx.shadowColor = 'rgba(0,0,0,0.7)';
      ctx.shadowBlur = 30;
      
      // Scalloped White/Cream Box
      ctx.fillStyle = 'rgba(255, 253, 208, 0.15)';
      ctx.beginPath();
      ctx.roundRect(bx, y, bw, bh, 60);
      ctx.fill();

      // Gold Dotted Border
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 4;
      ctx.setLineDash([5, 10]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Content
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FFE500';
      ctx.font = 'bold 55px "Noto Serif Devanagari"';
      ctx.fillText('🪷 ' + cardData.programTitle + ' 🪷', w/2, y + 80);
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 42px "Noto Serif Devanagari"';
      ctx.fillText(cardData.eventDate, w/2, y + 150);
      
      ctx.font = '34px "Noto Serif Devanagari"';
      ctx.fillText(cardData.events[0].label + " " + cardData.events[0].value, w/2, y + 220);
      ctx.fillText(cardData.events[1].label + " " + cardData.events[1].value, w/2, y + 280);
      ctx.restore();
    }

    function drawPremiumNamesLayout(ctx, w, y) {
      let cy = y;
      ctx.save();
      ctx.textAlign = 'center';

      // Prarthi
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 50px "Noto Serif Devanagari"';
      ctx.fillText('─── ✿ ' + cardData.prarthiTitle + ' ✿ ───', w/2, cy);
      ctx.fillStyle = '#FFFDD0';
      ctx.font = 'bold 38px "Noto Serif Devanagari"';
      cardData.prarthiLines.forEach(l => { cy += 60; ctx.fillText(l, w/2, cy); });

      // Darshana
      cy += 120;
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 50px "Noto Serif Devanagari"';
      ctx.fillText('─── ✿ ' + cardData.darshanaTitle + ' ✿ ───', w/2, cy);
      ctx.fillStyle = '#FFFDD0';
      ctx.font = '30px "Noto Serif Devanagari"';
      cardData.darshanaLines.forEach(l => { 
        cy += 52; 
        if (l.includes('अन्सु')) ctx.fillStyle = '#FFE500';
        else ctx.fillStyle = '#FFFDD0';
        ctx.fillText(l, w/2, cy); 
      });

      // Phupu
      cy += 100;
      ctx.font = 'bold 36px "Noto Serif Devanagari"';
      ctx.fillStyle = '#FFD700';
      ctx.fillText(cardData.phupu, w/2, cy);
      ctx.restore();
    }

    function drawJeweledPeacocks(ctx, w, h) {
      ctx.save();
      ctx.font = '300px serif';
      ctx.shadowColor = '#00f';
      ctx.shadowBlur = 40;
      
      // Left Peacock
      ctx.fillText('🦚', 280, h - 350);
      
      // Right Peacock (Mirrored)
      ctx.save();
      ctx.translate(w - 280, h - 350);
      ctx.scale(-1, 1);
      ctx.fillText('🦚', 0, 0);
      ctx.restore();

      // Tail Ocelli Detail (Procedural glow points)
      ctx.fillStyle = 'rgba(0, 255, 255, 0.4)';
      for (let i = 0; i < 5; i++) {
        ctx.beginPath(); ctx.arc(350 + i*30, h-400, 10, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(w - (350 + i*30), h-400, 10, 0, Math.PI*2); ctx.fill();
      }
      ctx.restore();
    }

    function drawAmbientAesthetics(ctx, w, h) {
      ctx.save();
      const assets = ['🌸', '🕉️', '✨', '🍃'];
      for (let i = 0; i < 50; i++) {
        ctx.globalAlpha = 0.3;
        ctx.font = (15 + Math.random()*30) + 'px serif';
        ctx.fillText(assets[i % 4], Math.random() * w, Math.random() * h);
      }
      // Light ray from top
      const ray = ctx.createLinearGradient(w/2, 0, w/2, h/3);
      ray.addColorStop(0, 'rgba(255, 215, 0, 0.1)');
      ray.addColorStop(1, 'rgba(255, 215, 0, 0)');
      ctx.fillStyle = ray;
      ctx.fillRect(0, 0, w, h/3);
      ctx.restore();
    }

    function drawElegantFooter(ctx, w, h) {
      ctx.save();
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FFE500';
      ctx.font = 'bold 50px serif';
      ctx.shadowColor = 'black';
      ctx.shadowBlur = 10;
      ctx.fillText(cardData.contact, w/2, h - 140);
      
      ctx.font = 'italic 20px serif';
      ctx.fillStyle = '#D4AF37';
      ctx.globalAlpha = 0.6;
      ctx.fillText('✦ DIVINE HERITAGE COLLECTION | EXCLUSIVE ✦', w/2, h - 90);
      ctx.restore();
    }

    function wrapText(context, text, x, y, maxWidth, lineHeight) {
      const words = text.split(' ');
      let line = '';
      let testY = y;
      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line, x, testY);
          line = words[n] + ' ';
          testY += lineHeight;
        } else {
          line = testLine;
        }
      }
      context.fillText(line, x, testY);
    }

    document.fonts.ready.then(() => {
      drawCard();
    });
  }, []);

  const downloadCard = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'royal_heritage_bratabandha.jpg';
    link.href = canvas.toDataURL('image/jpeg', 1.0);
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/99 p-4 overflow-y-auto">
      <div className="relative max-w-full flex flex-col items-center">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#FFD700] transition-all"
        >
          <span className="text-4xl">✕</span>
        </button>
        
        <div className="bg-[#1a0202] p-1.5 rounded-2xl border-2 border-[#D4AF37]/50 shadow-[0_0_100px_rgba(0,0,0,0.9)] overflow-hidden">
          <canvas 
            ref={canvasRef} 
            className="max-w-full h-auto rounded-xl"
            style={{ maxHeight: '82vh' }}
          />
        </div>

        <button 
          onClick={downloadCard}
          className="mt-8 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] hover:scale-105 active:scale-95 text-red-950 font-black py-5 px-28 rounded-full shadow-[0_0_60px_rgba(255,215,0,0.3)] transition-all flex items-center gap-4 text-2xl uppercase tracking-[0.4em] border-2 border-white/20"
        >
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default CanvasCard;
