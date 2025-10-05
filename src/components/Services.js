import React from "react";
import './Services.css'; // Importe o CSS para esta seção

function Services() {
  const items = [
    { 
      name: "Betoneiras", 
      desc: "Equipamentos modernos e seguros para preparo de concreto, garantindo a homogeneidade e resistência da sua mistura.",
      icon: "⚙️" // Ícone para o serviço
    },
    { 
      name: "Andaimes", 
      desc: "Estruturas resistentes e certificadas para obras em diferentes alturas, proporcionando segurança e praticidade.",
      icon: "🪜"
    },
    { 
      name: "Compactadores", 
      desc: "Aluguel de compactadores de solo potentes e confiáveis, ideais para preparar terrenos e garantir a estabilidade da fundação.",
      icon: "🚜"
    },
    { 
      name: "Ferramentas Elétricas", 
      desc: "Diversas ferramentas elétricas de alta performance para otimizar o trabalho, desde furadeiras a serras e lixadeiras.",
      icon: "⚡"
    },
    { 
      name: "Geradores de Energia", 
      desc: "Garanta energia contínua para sua obra com nossos geradores robustos e eficientes, disponíveis em diversas potências.",
      icon: "💡"
    },
    { 
      name: "Equipamentos de Jardinagem", 
      desc: "Para paisagismo e manutenção, oferecemos roçadeiras, cortadores de grama e outros equipamentos de jardinagem.",
      icon: "🌳"
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços e Categorias</h2>
          <p>Oferecemos uma ampla gama de equipamentos para atender todas as fases da sua construção.</p>
        </div>
        <div className="services-grid">
          {items.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <a href="#equipments" className="service-btn">Ver Equipamentos</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;