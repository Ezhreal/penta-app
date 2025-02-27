import React from 'react';
import PortfolioList from './PortfolioList';
import PortfolioModal from './PortfolioModal';
import { PortfolioProvider } from './PortfolioContext';
import portfolioData from '../data/portfolioData'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container mx-auto">
        <div className="title title--second">
          <div className="title__content">
            <div className="">
              <div className="title__number mb-3">02</div>
              <div className="title__spacer"></div>
              <h2 className="title__text">
                POR
                <br className="hidden md:block" /> 
                TFO
                <br className="hidden md:block" /> 
                LIO
              </h2>
            </div>
          </div>

          <div className="portfolio__group">
            <div className="portfolio__title md\:flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div className="portfolio__header">
                <h3 className="text-2xl font-bold">A Penta transforma o aprendizado</h3>
              </div>

              <div className="portfolio__text">
                <p>
                  Conheça alguns dos projetos que realizamos e como ajudamos
                  empresas a transformar a educação corporativa.
                </p>
              </div>
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