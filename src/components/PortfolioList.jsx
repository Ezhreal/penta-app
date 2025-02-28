/* eslint-disable no-unused-vars */
import React, { useCallback, useContext } from 'react';
import PortfolioItem from './PortfolioItem';
import { PortfolioContext } from './PortfolioContext';
import { motion } from 'framer-motion'; // Importe apenas motion

const PortfolioList = () => {
  const { portfolioData, openModal } = useContext(PortfolioContext);
  
  const handleItemClick = useCallback((item) => {
    openModal(item);
  }, [openModal]);

  // Manter a animação simples apenas com motion
  return (
    <div className="portfolio__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {portfolioData && portfolioData.map((item, index) => (
        <motion.div
          key={`portfolio-${item.titulo}-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1, // Atraso baseado no índice para criar efeito cascata
            ease: "easeOut" 
          }}
        >
          <PortfolioItem 
            item={item} 
            onClick={handleItemClick} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioList;