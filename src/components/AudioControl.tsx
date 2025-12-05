import React, { useEffect, useRef, useState } from 'react';
import { ICONS } from '../constants';

interface AudioControlProps {
  src: string;
  isPlaying: boolean;
  onToggle: () => void;
}

const AudioControl: React.FC<AudioControlProps> = ({ src, isPlaying, onToggle }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
        // Simple promise handling for autoplay policies
        audioRef.current.play().catch(e => console.warn("Audio play failed (waiting for interaction):", e));
    } else if (audioRef.current) {
        audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src={src} loop />
      <button
        onClick={onToggle}
        className={`
          flex items-center justify-center w-12 h-12 rounded-full 
          backdrop-blur-md border border-white/20 shadow-lg 
          transition-all duration-300 hover:scale-110
          ${isPlaying ? 'bg-xmas-red/80 text-white' : 'bg-white/10 text-white/70'}
        `}
      >
        {isPlaying ? <ICONS.Music className="animate-pulse" size={20} /> : <div className="relative"><ICONS.Music size={20} /><div className="absolute top-1/2 left-0 w-full h-0.5 bg-current rotate-45 transform origin-center"></div></div>}
      </button>
    </div>
  );
};

export default AudioControl;