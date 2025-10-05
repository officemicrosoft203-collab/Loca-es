import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import './PageOrcamento.css';

const PageOrcamento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    equipamento: '',
    quantidade: '',
    prazo: '',
    local: '',
    observacoes: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validarCampos = () => {
    const { nome, email, telefone, equipamento, quantidade } = formData;
    return nome && email && telefone && equipamento && quantidade;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarCampos()) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Aqui poderia integrar com API, e-mail, etc.
    console.log("Orçamento enviado:", formData);
    setEnviado(true);

    // Resetar formulário depois de enviar
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      equipamento: '',
      quantidade: '',
      prazo: '',
      local: '',
      observacoes: ''
    });
  };

  return (
    <div className="orcamento-container">
      <h1>Solicitar Orçamento</h1>
      <p>Preencha o formulário abaixo para um orçamento personalizado.</p>

      {enviado && (
        <div className="mensagem-sucesso">
          ✅ Orçamento enviado com sucesso!
        </div>
      )}

      <form className="orcamento-form" onSubmit={handleSubmit}>
        <label>Nome*:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <label>Email*:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Telefone*:</label>
        <IMaskInput
            mask="(00) 00000-0000"
            name="telefone"
            value={formData.telefone}
            onAccept={(value) =>
                setFormData((prev) => ({ ...prev, telefone: value }))
            }
            required
        />


        <label>Equipamento ou Serviço*:</label>
        <input type="text" name="equipamento" value={formData.equipamento} onChange={handleChange} required />

        <label>Quantidade*:</label>
        <input type="number" name="quantidade" value={formData.quantidade} onChange={handleChange} required />

        <label>Prazo de Locação (dias):</label>
        <input type="number" name="prazo" value={formData.prazo} onChange={handleChange} />

        <label>Local da Obra:</label>
        <input type="text" name="local" value={formData.local} onChange={handleChange} />

        <label>Observações:</label>
        <textarea name="observacoes" value={formData.observacoes} onChange={handleChange} rows="4" />

        <button type="submit">Enviar Orçamento</button>
      </form>
    </div>
  );
};

export default PageOrcamento;
