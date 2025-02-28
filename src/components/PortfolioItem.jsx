/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const PortfolioItem = memo(({ item, onClick }) => {
  return (
    <div 
      className="portfolio__item relative overflow-hidden cursor-pointer group"
      onClick={() => onClick(item)}
    >
      <div className="portfolio__image w-full h-full overflow-hidden">
        <img 
          src={item.thumb} 
          alt={item.titulo} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      
      <div className="portfolio__overlay absolute inset-0 bg-black  bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-center px-6 opacity-0 group-hover:opacity-80">
        <div className="portfolio__itemTipo transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.tipo}</div>
        <h3 className="portfolio__itemTitulo text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.titulo}</h3>
        <div className="portfolio__itemCliente transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">{item.cliente}</div>
        <div className="portfolio__itemLermais transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200"> Leia Mais <FontAwesomeIcon icon={faArrowRight} /></div>
      </div>
    </div>
  );
});

PortfolioItem.displayName = 'PortfolioItem';

export default PortfolioItem;