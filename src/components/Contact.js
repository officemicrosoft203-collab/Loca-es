import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construindo os dados para enviar no formato que o Netlify espera
        const form = e.target;
        const data = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data).toString()
        })
            .then(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                setFormData({ name: '', email: '', phone: '', message: '' });
            })
            .catch(error => alert('Erro no envio: ' + error));

    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2>Fale Conosco</h2>
                    <p>Estamos à disposição para tirar suas dúvidas e orçar seu projeto</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">📞</div>
                            <div className="contact-details">
                                <h3>Telefone</h3>
                                <p>(19) 99999-9999</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <p>contato@casadoconstrutor.com.br</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div className="contact-details">
                                <h3>Endereço</h3>
                                <p>Rua Dona Aurora Franscisco de Camargo, 123</p>
                                <p>Panorama - SP</p>
                                <p>CEP: 17980-018</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">🕒</div>
                            <div className="contact-details">
                                <h3>Horário de Funcionamento</h3>
                                <p>Segunda a Sexta: 8h às 18h</p>
                                <p>Sábado: Fechado</p>
                                <p>Domingos: Fechado</p>
                            </div>
                        </div>
                    </div>

                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        className="contact-form"
                    >
                        {/* Campo oculto obrigatório para Netlify */}
                        <input type="hidden" name="form-name" value="contact" />

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu nome completo"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Seu melhor email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Seu telefone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Conte-nos sobre seu projeto ou dúvida..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
