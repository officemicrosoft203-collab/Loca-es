import React from 'react';
import './ProductList.css';
import bitorneiraImg from '../assets/images/Bitorneira_400L.webp';
import compactadorImg from '../assets/images/compactador_Solo.webp';
import marteleteImg from '../assets/images/martelo_demolidor_30kg.jpg';
import furadeiradeimpactoImg from '../assets/images/furadeira-de-impacto.jpg';
import AndaimesImg from '../assets/images/Andaimes_tubular_aço.webp';
import EscorasmetalicasImg from '../assets/images/Escoras_metalicas.webp';

const products = [
    {
        name: 'Furadeira de Impacto 1/2"',
        price: 'R$ 6,49',
        period: '/ Dia',
        image: furadeiradeimpactoImg,
        category: 'Furação e Demolição',
        description: 'Ideal para perfurações em concreto, alvenaria e madeira.',
        details: 'Potência de 700W, mandril de 1/2", rotação reversível.'
    },
    {
        name: 'Martelete Demolidor 30kg',
        price: 'R$ 27,49',
        period: '/ Dia',
        image: marteleteImg,
        category: 'Furação e Demolição',
        description: 'Alta performance para demolição de estruturas de concreto e alvenaria.',
        details: 'Peso de 30kg, potência de 2200W, encaixe hexagonal.'
    },
    {
        name: 'Andaimes Tubular 1x1m em Aço',
        price: 'R$ 15,33',
        period: '/ Dia',
        image: AndaimesImg,
        category: 'Estruturas e Acesso',
        description: 'Estrutura modular e segura para trabalhos em altura.',
        details: 'Fabricado em aço carbono, fácil montagem, capacidade de carga de 150kg/m².'
    },
    {
        name: 'Compactador de Solo tipo Sapo 6.5 HP Motor 4 tempos',
        price: 'Consulte',
        period: '/ Dia',
        image: compactadorImg,
        category: 'Compactação',
        description: 'Equipamento robusto para compactação de solos em obras civis.',
        details: 'Motor a gasolina 6.5 HP, 4 tempos, força de impacto de 15KN.'
    },
    {
        name: 'Betoneira 400 Litros',
        price: 'R$ 35,00',
        period: '/ Dia',
        image: bitorneiraImg,
        category: 'Mistura e Concreto',
        description: 'Ideal para preparo de concreto e argamassa em obras de médio porte.',
        details: 'Capacidade de 400 litros, motor elétrico, fácil transporte.'
    },
    {
        name: 'Escoras Metálicas',
        price: 'R$ 5,50',
        period: '/ Dia',
        image: EscorasmetalicasImg,
        category: 'Escoras',
        description: 'Ideal para segurar suas lages com segurança',
        details: 'Capacidade de 10kg por lajota.'
    }
];


function ProductList() {
    return (
        <section id="equipments" className="product-list">
            <div className="container">
                <div className="section-header">
                    <h2>Equipamentos em Destaque</h2>
                    <p>Confira nossos equipamentos mais solicitados e encontre a ferramenta ideal para sua obra.</p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            <div className="product-image-container">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="product-image"
                                    onError={(e) => {
                                        e.target.src = 'https://placehold.co/300x200/CCCCCC/999999?text=Imagem+Indisponível';
                                    }}
                                />
                                <div className="product-category">
                                    {product.category}
                                </div>
                            </div>

                            <div className="product-content">
                                <h3 className="product-title">
                                    Aluguel de<br />{product.name}
                                </h3>

                                <div className="product-price">
                                    {product.price === 'Consulte' ? (
                                        <div className="consult-price">
                                            <span className="price-label">Preço sob consulta</span>
                                        </div>
                                    ) : (
                                        <div className="normal-price">
                                            <span className="price-from">A partir de </span>
                                            <span className="price-value">{product.price}</span>
                                            <span className="price-period">{product.period}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="product-info">
                                    <p className="product-description">{product.description}</p>
                                    {product.details && <p className="product-details">{product.details}</p>}
                                </div>

                                <div className="product-actions">
                                    <button className="action-btn consult-btn">
                                        <span className="btn-icon">🏪</span>
                                        Consultar loja
                                    </button>
                                    <button className="action-btn quote-btn">
                                        <span className="btn-icon">📋</span>
                                        Orçamento pelo site
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductList;