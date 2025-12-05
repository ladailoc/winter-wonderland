import React from 'react';
import { YEAR, RECIPIENT_NAME, ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 text-center text-white/40 font-sans z-10 bg-gradient-to-t from-black to-transparent">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg font-serif italic">
          "Thank you for being a part of my life."
        </p>
        <div className="flex items-center gap-2 text-sm uppercase tracking-widest opacity-60">
          <span>Christmas</span>
          <span className="w-1 h-1 rounded-full bg-current"></span>
          <span>{YEAR}</span>
        </div>
        <div className="flex items-center gap-1 text-xs mt-4">
          <span>Made with</span>
          <ICONS.Heart size={12} className="text-xmas-red" fill="currentColor" />
          <span>for {RECIPIENT_NAME}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;