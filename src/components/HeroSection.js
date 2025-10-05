import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Aluguel de Equipamentos para Construção</h1>
        <p>Sua obra com a qualidade e eficiência que você precisa. Alugue as melhores ferramentas e máquinas conosco!</p>
        <div className="hero-buttons">
          <a href="#equipments" className="btn-primary">Ver Equipamentos</a>
          <a href="#contact" className="btn-secondary">Fale Conosco</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;