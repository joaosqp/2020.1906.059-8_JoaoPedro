import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './store.css'


export const Store = () => {
  const [products, setProducts] = useState([]);
  const [carregando, setCarregando] = useState(true);


  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/joaosqp/apiShop/main/produtos.json')
      .then((response) => {
        setProducts(response.data);
        setTimeout(setCarregando(false), 3000);
      })
      .catch((error) => {
        console.log('Falha', error);
      });
  }, []);

  if (carregando) {
    return (
      <div className='loading'>
        <h1> CARREGANDO...</h1>
      </div>
    )
  }

  return (
    <div className='gondula'>
      {products.map((product, key) => (
        <Link to={`/descricao/${product.id}`} key={key} className='produtos'>
          <img src={`${product.foto}`} alt={product.foto} />
          <h1>{product.nome}</h1>
          <h1>R${product.valor}</h1>
        </Link>
      ))}
    </div>
  );
};
