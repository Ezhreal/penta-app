// PortfolioContext.jsx
import React, { createContext, useState, useCallback } from 'react';

// Criando o contexto com um valor default
const PortfolioContext = createContext({
  portfolioData: [],
  selectedItem: null,
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {}
});

// Componente Provider separado
const PortfolioProvider = ({ children, data }) => {
  const [portfolioData] = useState(data || []);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => setSelectedItem(null), 300);
  }, []);

  const value = {
    portfolioData, 
    selectedItem, 
    isModalOpen, 
    openModal, 
    closeModal 
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };