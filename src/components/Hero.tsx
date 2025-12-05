import React from "react";
import { motion } from "framer-motion";
import { RECIPIENT_NAME, ICONS } from "../constants";

interface HeroProps {
  onEnter: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnter }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10"
      >
        <motion.div
          className="mb-6 inline-block"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <ICONS.Snowflake size={64} className="text-ice-200 opacity-80" />
        </motion.div>

        <h1 className="font-script text-6xl md:text-8xl text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          Merry Christmas
        </h1>

        <h2 className="font-serif text-3xl md:text-5xl text-ice-200 mb-12 tracking-wider"></h2>

        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-sans text-lg tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Enter Wonderland
            <ICONS.Sparkles size={16} className="group-hover:animate-spin" />
          </span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
