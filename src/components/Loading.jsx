import React from 'react';

const Loading = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-yellow-500"></div>
    </div>
  );
};

export default Loading;