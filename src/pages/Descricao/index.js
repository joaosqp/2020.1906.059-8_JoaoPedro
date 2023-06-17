import React, { useEffect, useState } from 'react';
import './descricao.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Descricao = () => {
  const [descricaoProduto, setDescricaoProduto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/joaosqp/apiShop/main/produtos.json')
      .then((response) => {
        const produto = response.data.find((product) => product.id === id);
        setDescricaoProduto(produto);
      }).catch((error) => {
        console.log('Falha', error);
      })
  }, [id]);

  return (
    <div className='imagem'>
      <img src={`${descricaoProduto.foto}`} alt={descricaoProduto.foto} />
      <div className='descricao'>
        <h1>{descricaoProduto.nome}</h1>
        <h1>{descricaoProduto.valor}</h1>
      </div>
      <p>{descricaoProduto.descricao}</p>
    </div>
  );
}
