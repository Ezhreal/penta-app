/* eslint-disable no-unused-vars */
import React from 'react';
import PortfolioList from './PortfolioList';
import PortfolioModal from './PortfolioModal';
import { PortfolioProvider } from './PortfolioContext';
import portfolioData from '../data/portfolioData';
import { AnimateOnScroll } from './AnimateOnScroll'; // Importe o componente de animação

const Portfolio = () => {
  return (
    <section id='portfolio' className="portfolio">
      <div className="container mx-auto">
        <div className="title title--second">
          <div className="title__content">
            <div className="">
              <AnimateOnScroll direction="left" delay={0.2}>
                <div className="title__number mb-3">02</div>
                <div className="title__spacer"></div>
                <h2 className="title__text">
                  POR
                  <br className="hidden md:block" /> 
                  TFO
                  <br className="hidden md:block" /> 
                  LIO
                </h2>
              </AnimateOnScroll>
            </div>
          </div>

          <div className="portfolio__group">
            <div className="portfolio__title md:flex flex-col md:flex-row justify-between md:items-center gap-6">
              <AnimateOnScroll direction="left" delay={0.4}>
                <div className="portfolio__header">
                  <h3 className="text-2xl font-bold">A Penta transforma o aprendizado</h3>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="right" delay={0.6}>
                <div className="portfolio__text">
                  <p>
                    Conheça alguns dos projetos que realizamos e como ajudamos
                    empresas a transformar a educação corporativa.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
        
        <div className="portfolio__content">
          <PortfolioProvider data={portfolioData}>
            <PortfolioList />
            <PortfolioModal />
          </PortfolioProvider>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;