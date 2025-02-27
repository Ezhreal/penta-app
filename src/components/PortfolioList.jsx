import React, { useCallback, useContext } from 'react';
import PortfolioItem from './PortfolioItem';
import { PortfolioContext } from './PortfolioContext';

const PortfolioList = () => {
  const { portfolioData, openModal } = useContext(PortfolioContext);
  
  const handleItemClick = useCallback((item) => {
    openModal(item);
  }, [openModal]);

  return (
    <div className="portfolio__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {portfolioData && portfolioData.map((item, index) => (
        <PortfolioItem 
          key={`portfolio-${item.titulo}-${index}`} 
          item={item} 
          onClick={handleItemClick} 
        />
      ))}
    </div>
  );
};

export default PortfolioList;