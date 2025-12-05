import React from 'react';
import { motion } from 'framer-motion';
import { WISHES, ICONS } from '../constants';

const Wishes: React.FC = () => {
  return (
    <section className="relative py-24 px-4 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center overflow-hidden group"
        >
          {/* Decorative Corner Effects */}
          <div className="absolute top-0 left-0 p-4 opacity-50">
             <ICONS.Snowflake className="text-ice-300 w-12 h-12" />
          </div>
          <div className="absolute bottom-0 right-0 p-4 opacity-50 transform rotate-180">
             <ICONS.Snowflake className="text-ice-300 w-12 h-12" />
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-ice-100 mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-ice-300/50"></span>
            Warmest Wishes
            <span className="h-px w-12 bg-ice-300/50"></span>
          </h3>

          <div className="space-y-6 font-sans text-lg md:text-xl text-ice-50 leading-relaxed">
            {WISHES.map((wish, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {wish}
              </motion.p>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <ICONS.Heart className="text-xmas-red animate-pulse" fill="currentColor" size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wishes;