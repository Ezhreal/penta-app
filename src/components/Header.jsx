import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';



function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function slugify(str) {
  return removeAccents(str)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
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

    // Quando o menu está aberto, impedir o scroll da página
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#454545] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 z-50">
          <img src={logo} alt="Penta" className="h-8" />
        </div>

        {/* Botão Hambúrguer (Mobile) */}
        <button 
          className="sm:hidden z-50 w-10 h-10 relative flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#F8B033] transition-all duration-300 absolute ${
            menuOpen ? 'transform rotate-45' : 'transform translate-y-2'
          }`}></span>
          <span className={`block w-6 h-0.5 bg-[#F8B033] transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-[#F8B033] transition-all duration-300 absolute ${
            menuOpen ? 'transform -rotate-45' : 'transform -translate-y-2'
          }`}></span>
        </button>

        {/* Menu (Desktop) */}
        <nav className="hidden sm:flex items-center space-x-6">
        {['HOME', 'SOBRE NÓS', 'PORTFOLIO', 'CONTATO'].map((item, index) => (
          <Link
            key={index}
            to={slugify(item)} // Use 'to' em vez de 'href'
            smooth={true} // Ativa a rolagem suave
            duration={500} // Duração da animação em milissegundos
            offset={-80} // Ajuste o offset para compensar o header fixo
            className="text-[#F8B033] text-lg font-medium relative overflow-hidden group px-4 cursor-pointer" //cursor pointer para o desktop
            onClick={() => setMenuOpen(false)} //adicionado para o mobile
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8B033] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        </nav>

        {/* Menu Mobile (Fullscreen) */}
        <div 
          className={`fixed inset-0 bg-[#454545] z-40 flex items-center justify-center transition-all duration-500 ${
            menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col items-center space-y-8">
            {['HOME','SOBRE NÓS', 'PORTFOLIO', 'CONTATO'].map((item, index) => (
              <a
              key={index}
              href={`#${slugify(item)}`}
                className="text-[#F8B033] text-2xl font-medium relative overflow-hidden group"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8B033] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;