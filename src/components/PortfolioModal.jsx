import React, { useState, useEffect, useCallback, useContext } from 'react';
import { PortfolioContext } from './PortfolioContext';

const PortfolioModal = () => {
  const { selectedItem, isModalOpen, closeModal } = useContext(PortfolioContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Reset image index when a new item is selected
  useEffect(() => {
    if (selectedItem) {
      setCurrentImageIndex(0);
      setIsLoading(true);
    }
  }, [selectedItem]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const nextImage = useCallback(() => {
    if (!selectedItem || !selectedItem.items) return;
    setIsLoading(true); // Set loading to true before changing the image
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedItem.items.length - 1 ? 0 : prevIndex + 1
    );
  }, [selectedItem]);

  const prevImage = useCallback(() => {
    if (!selectedItem || !selectedItem.items) return;
    setIsLoading(true); // Set loading to true before changing the image
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedItem.items.length - 1 : prevIndex - 1
    );
  }, [selectedItem]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [closeModal, nextImage, prevImage, isModalOpen]);

  // Don't render anything if modal is not open or no item is selected
  if (!isModalOpen || !selectedItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={closeModal}
    >
      <div
        className="relative bg-white max-w-4xl w-full max-h-90vh overflow-auto rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800 transition-colors"
          onClick={closeModal}
          aria-label="Fechar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">{selectedItem.titulo}</h2>
            <div className="flex flex-col sm:flex-row mt-2">
              <span className="mb-2 sm:mb-0 sm:mr-6">Cliente: <strong>{selectedItem.cliente}</strong></span>
              <span>Tipo: <strong>{selectedItem.tipo}</strong></span>
            </div>
          </div>

          <div className="modal-content">
            {selectedItem.items && selectedItem.items.length > 0 && (
              <div className="lightbox relative">
                <div className="lightbox-image mb-4 relative min-h-64 bg-gray-100">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                    </div>
                  )}
                  <img
                    src={selectedItem.items[currentImageIndex].foto}
                    alt={`${selectedItem.titulo} - Slide ${currentImageIndex + 1}`}
                    className={`w-full h-auto ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                    onLoad={handleImageLoad}
                  />
                </div>

                <div className="lightbox-text mb-4 prose max-w-none">
                  <p>{selectedItem.items[currentImageIndex].texto}</p>
                </div>

                {selectedItem.items.length > 1 && (
                  <div className="lightbox-controls flex justify-between items-center mt-4">
                    <button
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                      onClick={prevImage}
                      aria-label="Imagem anterior"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>

                    <div className="lightbox-counter">
                      {currentImageIndex + 1} / {selectedItem.items.length}
                    </div>

                    <button
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                      onClick={nextImage}
                      aria-label="Próxima imagem"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;