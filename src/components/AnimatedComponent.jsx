import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AnimatedComponent({ children, initial, animate, exit, scrollYPosition, elementPosition, direction = 'left' }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (scrollYPosition > elementPosition) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollYPosition, elementPosition]);

  const getExitAnimation = () => {
    if (direction === 'left') {
      return { x: -100, opacity: 0 };
    } else if (direction === 'right') {
      return { x: 100, opacity: 0 };
    } else if (direction === 'up') {
      return { y: -100, opacity: 0 };
    } else if (direction === 'down') {
      return { y: 100, opacity: 0 };
    } else {
      return { opacity: 0 }; // default
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={initial}
          animate={animate}
          exit={getExitAnimation()}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AnimatedComponent;