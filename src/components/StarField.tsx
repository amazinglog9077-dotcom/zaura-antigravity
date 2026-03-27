/* eslint-disable react-hooks/purity */
import { useMemo } from 'react';
import { motion } from 'motion/react';

export const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 350 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      driftX: Math.random() * 60 - 30,
      driftY: Math.random() * 60 - 30,
    }));
  }, []);

  const orbs = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `orb-${i}`,
      size: Math.random() * 300 + 100,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      x: [0, Math.random() * 100 - 50, 0],
      y: [0, Math.random() * 100 - 50, 0],
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#02050e]">
      {/* Deep Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#010a18] to-[#000000] opacity-80" />

      {/* Floating Orbs (Nebulae) */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-[80px] opacity-20"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: `radial-gradient(circle, rgba(0,242,255,0.8) 0%, rgba(138,43,226,0.3) 100%)`,
          }}
          animate={{
            x: orb.x,
            y: orb.y,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Star Field */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-40 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1],
            x: [0, star.driftX],
            y: [0, star.driftY],
          }}
          transition={{
            duration: star.duration * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: star.delay,
          }}
        />
      ))}
      
      {/* Central Nebula Highlight */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,242,255,0.1)_0%,transparent_60%)]"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
