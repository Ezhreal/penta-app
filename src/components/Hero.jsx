import './Hero.css'; // Ou use Styled Components

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>SOLUÇÕES PARA EDUCAÇÃO CORPORATIVA</h1>
        <p>Texto da chamada principal.</p>
        <button>Saiba Mais</button>
      </div>
      <div className="hero-image">
        {/* Imagem de fundo */}
      </div>
    </section>
  );
}

export default Hero;