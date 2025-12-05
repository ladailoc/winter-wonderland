import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimationZone: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Santa moves across the screen as you scroll
  const xSanta = useTransform(scrollYProgress, [0.1, 0.9], ["-100%", "150%"]);
  // Add a slight bobbing motion to the flight path
  const ySanta = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [20, -40, -20, -60]);

  return (
    <section className="relative h-[80vh] overflow-hidden pointer-events-none bg-gradient-to-b from-transparent via-ice-900/20 to-ice-950/80">
       {/* Moon */}
       <div className="absolute top-16 right-10 w-32 h-32 rounded-full bg-ice-50 blur-[2px] shadow-[0_0_80px_rgba(255,255,255,0.5)] opacity-90" />

      {/* Snowy Hills Background Layer */}
      <div className="absolute bottom-0 left-0 w-full h-64 z-0 opacity-40">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
           <path fill="#e0f2fe" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Snowy Hills Foreground Layer */}
      <div className="absolute -bottom-10 left-0 w-full h-48 z-0 opacity-80">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
           <path fill="#f0f9ff" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Flying Santa Container */}
      <motion.div 
        style={{ x: xSanta, y: ySanta }}
        className="absolute top-1/3 left-0 flex items-center z-10 scale-75 md:scale-100"
      >
        <div className="relative flex items-end">
             {/* Reindeers Group */}
             <div className="flex space-x-2 mr-4">
               {[0, 1, 2].map((i) => (
                 <motion.div 
                    key={i}
                    className="relative"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                 >
                    {/* Reindeer Silhouette */}
                    <svg width="60" height="40" viewBox="0 0 60 40" fill="white" className="opacity-90 drop-shadow-lg">
                       <path d="M10,25 Q12,15 20,15 L30,15 Q35,15 38,10 L40,2 L42,10 Q45,15 50,15 L52,15 L50,18 L45,18 Q40,18 40,25 L40,35 L35,35 L35,28 L25,28 L25,35 L20,35 L20,25 Z M10,25 L5,20" />
                       <path stroke="white" strokeWidth="2" d="M38,10 L35,5 M40,8 L45,2" />
                    </svg>
                 </motion.div>
               ))}
             </div>
             
             {/* Sleigh & Santa */}
             <motion.div 
               className="relative"
               animate={{ rotate: [-2, 2, -2] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             >
                <svg width="100" height="60" viewBox="0 0 100 60" fill="white" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                  {/* Runners */}
                  <path d="M10,50 C10,50 30,55 90,45" stroke="white" strokeWidth="3" fill="none" />
                  <path d="M20,50 L20,35 M70,48 L70,35" stroke="white" strokeWidth="3" />
                  {/* Body */}
                  <path d="M15,35 L80,35 Q90,35 95,25 L85,35 L15,35 Q5,35 10,25 L15,35" fill="white"/>
                  {/* Santa */}
                  <circle cx="50" cy="25" r="10" />
                  <path d="M40,35 L60,35 L55,15 L45,15 Z" />
                  {/* Hat */}
                  <path d="M45,18 L55,18 L50,5 Z" fill="#d42426" /> 
                </svg>
             </motion.div>

             {/* Magic Trail */}
             <motion.div 
                className="absolute right-full top-1/2 w-32 h-2 bg-gradient-to-l from-white to-transparent blur-md rounded-full"
                animate={{ opacity: [0.4, 0.8, 0.4], width: ["100px", "150px", "100px"] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
             />
        </div>
      </motion.div>
    </section>
  );
};

export default AnimationZone;