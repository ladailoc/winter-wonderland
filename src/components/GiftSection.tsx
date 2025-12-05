import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { GIFT_MESSAGE, ICONS } from '../constants';

const GiftSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // Trigger confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#d42426', '#fbbf24', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#d42426', '#fbbf24', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative">
      
      {!isOpen && (
        <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <h2 className="font-serif text-3xl text-white mb-4">A Surprise for You</h2>
            <p className="text-ice-200">Tap the box to open</p>
        </motion.div>
      )}

      <div className="relative w-64 h-64 flex items-center justify-center cursor-pointer" onClick={handleOpen}>
        <AnimatePresence>
          {!isOpen ? (
            <motion.div
              key="box"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0, rotate: 20 }}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              className="relative w-48 h-48"
            >
              {/* Box Body */}
              <div className="absolute bottom-0 w-full h-40 bg-xmas-red rounded-lg shadow-[0_0_50px_rgba(212,36,38,0.4)] overflow-hidden">
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full bg-xmas-gold/90"></div>
              </div>
              {/* Box Lid */}
              <motion.div 
                className="absolute top-4 -left-2 w-[110%] h-12 bg-red-600 rounded-md shadow-lg z-10 flex justify-center items-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                  <div className="w-10 h-full bg-xmas-gold/90"></div>
              </motion.div>
              {/* Bow */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xmas-gold z-20">
                  <ICONS.Gift size={48} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="card"
              initial={{ scale: 0, rotateX: 90 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100 }}
              className="relative w-full max-w-md bg-white text-slate-800 p-8 rounded-lg shadow-[0_0_60px_rgba(255,255,255,0.5)] flex flex-col items-center text-center border-4 border-xmas-gold/50"
            >
              <div className="absolute -top-6 bg-xmas-red text-white p-3 rounded-full shadow-lg">
                <ICONS.Heart fill="white" size={24} />
              </div>
              
              <h3 className="font-script text-4xl text-xmas-red mb-4 mt-2">Merry Christmas!</h3>
              <p className="font-serif text-lg leading-relaxed text-slate-600">
                {GIFT_MESSAGE}
              </p>
              
              <div className="mt-6 flex gap-2 justify-center">
                <ICONS.Star className="text-xmas-gold" fill="currentColor" size={20}/>
                <ICONS.Star className="text-xmas-gold" fill="currentColor" size={20}/>
                <ICONS.Star className="text-xmas-gold" fill="currentColor" size={20}/>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isOpen && (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1 }}
            className="mt-12"
        >
            <p className="text-ice-200/50 text-sm">Scroll down one last time...</p>
        </motion.div>
      )}
    </section>
  );
};

export default GiftSection;