import React, { useEffect, useState } from 'react';
import './descricao.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import { Header } from '../../components/Header'

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
    <div className='main'>
      <Header />
      <div className='imagem'>
        <img src={`${descricaoProduto.foto}`} alt={descricaoProduto.foto} />
        <div className='countainer'>
          <h1>{descricaoProduto.nome}</h1>
          <h2>R${descricaoProduto.valor}</h2>
        </div>
        <p>{descricaoProduto.descricao}</p>
      </div>
      <Link to={'/'}>
        Continue comprando
      </Link>
    </div>
  );
}
