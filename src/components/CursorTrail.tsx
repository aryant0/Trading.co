import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', () => setIsVisible(false));
    window.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', () => setIsVisible(false));
      window.removeEventListener('mouseenter', () => setIsVisible(true));
    };
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-orange-500/30 mix-blend-screen"
          animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        />
      )}
    </>
  );
};

export default CursorTrail;