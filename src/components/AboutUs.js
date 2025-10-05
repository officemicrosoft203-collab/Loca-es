import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section id="about" className="about-us">
      <div className="container centralizado">
        <div className="about-text">
          <h2>Nossa Missão</h2>
          <p>
            Na Casa do Construtor, nossa missão é fornecer soluções completas e eficientes em aluguel de equipamentos para construção civil. Acreditamos que o acesso a máquinas e ferramentas de alta qualidade é fundamental para o sucesso de qualquer projeto, grande ou pequeno.
          </p>

          <h2>Nossos Valores</h2>
          <ul>
            <li><strong> Qualidade:</strong> Equipamentos modernos e revisados para sua segurança e produtividade.</li>
            <li><strong> Confiança:</strong> Transparência e honestidade em todas as nossas relações.</li>
            <li><strong> Suporte:</strong> Equipe especializada pronta para atender suas necessidades.</li>
            <li><strong> Inovação:</strong> Busca contínua por novas tecnologias e melhores práticas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
