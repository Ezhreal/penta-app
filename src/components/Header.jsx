import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-colors duration-300 ${
        isScrolled ? 'bg-[#454545]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <img src={logo} alt="Penta" className="h-8" />
        </div>

        {/* Botão Hambúrguer (Mobile) */}
        <button className="sm:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Menu (Desktop) */}
        <nav
          className={`sm:flex items-center space-x-4 ${
            menuOpen
              ? 'flex flex-col mt-4 absolute right-0 bg-white p-4 rounded-md'
              : 'hidden'
          }`}
        >
          <a
            href="#sobre"
            className="text-[#F8B033] hover:text-orange-600 transition duration-300"
          >
            Sobre Nós
          </a>
          <a
            href="#portfolio"
            className="text-[#F8B033] hover:text-orange-600 transition duration-300"
          >
            Portfólio
          </a>
          <a
            href="#contato"
            className="text-[#F8B033] hover:text-orange-600 transition duration-300"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;