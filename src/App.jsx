import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Snowfall from "./components/Snowfall";
import AudioControl from "./components/AudioControl";
import Hero from "./components/Hero";
import Wishes from "./components/Wishes";
import AnimationZone from "./components/AnimationZone";
import GiftSection from "./components/GiftSection";
import Footer from "./components/Footer";
import { MUSIC_URL } from "./constants";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const wishesRef = useRef(null);

  const toggleAudio = () => setIsPlaying(!isPlaying);

  const handleEnter = () => {
    setIsPlaying(true);
    wishesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-ice-950 via-ice-900 to-ice-950 text-white overflow-hidden selection:bg-xmas-red selection:text-white">
      {/* Dynamic Background Overlay */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ice-800/20 via-transparent to-transparent pointer-events-none"
      />

      <Snowfall />

      <AudioControl
        src={MUSIC_URL}
        isPlaying={isPlaying}
        onToggle={toggleAudio}
      />

      <Hero onEnter={handleEnter} />

      <div ref={wishesRef}>
        <Wishes />
      </div>

      <AnimationZone />

      <GiftSection />

      <Footer />

      {/* Global Snow Ground Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 w-full h-24 z-0 pointer-events-none opacity-20 bg-gradient-to-t from-white/30 to-transparent blur-xl" />
      <div className="fixed bottom-0 left-0 w-full h-8 z-0 pointer-events-none bg-gradient-to-t from-ice-100/10 to-transparent blur-md" />
    </main>
  );
};

export default App;
