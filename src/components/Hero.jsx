/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



import "./Hero.css"; // Importe seu CSS

function Hero() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (    
    <section id="home" className="hero">
      <div className="hero__background hero__background--layer1"></div>
      <motion.div 
      className="hero__background hero__background--layer2 px-4 py-3 flex items-center justify-between">

        <div className="container mx-auto">
          <div className="hero__content">
            <div className="hero__title">
              <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
                }}
              >
                SOLUÇÕES PARA <span><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></span>
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
                }}
              >
                EDUCAÇÃO
              
              </motion.h1>

              <motion.h3
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
                  }}
                >
                  CORPORATIVA
                </motion.h3>
            </div>
            <a className="hero__anchor">Saiba Mais</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
