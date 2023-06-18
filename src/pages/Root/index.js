import React, { useState } from 'react';
import './root.css';
import { Header } from '../../components/Header'

function Root() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [foto, setFoto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    /*const item = {
      nome,
      categoria,
      foto,
      descricao,
      valor
    };*/

    setNome('');
    setCategoria('');
    setFoto('');
    setDescricao('');
    setValor('');
  };

  return (
    <div>
      < Header />
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="MASTURBADORES">Masturbadores</option>
            <option value="VIBRADORES">Vibradores</option>
            <option value="COSMÉTICOS">Cosméticos</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="foto">Foto (link):</label>
          <input
            type="text"
            id="foto"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="valor">Valor (R$):</label>
          <input
            type="text"
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar Item</button>
      </form>
    </div>
  );
}

export default Root;