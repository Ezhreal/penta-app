// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule um carregamento (substitua por sua lógica de carregamento real)
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 segundos
  }, []);

  return (
    <div className="App">
      <Loading isLoading={isLoading} />
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;