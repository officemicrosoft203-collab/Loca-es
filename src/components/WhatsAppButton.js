import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5599999999999" // Substitua pelo seu número com DDD
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
}

export default WhatsAppButton;
