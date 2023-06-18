import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import  axios  from 'axios';
import './store.css'
import { BsFillCartCheckFill, BsCartPlusFill } from 'react-icons/bs'
import { getItem  , setItem } from '../../services/LocalStorage'

import { Header } from '../../components/Header'


export const Store = () => {
  const [products, setProducts] = useState([]);
  const [carrinho, setCarrinho] = useState(getItem('carrinhos') || []);
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
  const handleClick = (obj) => {
    const element = carrinho.find((product) => product.id === obj.id);
    if (element) {
      const arrFilter = carrinho.filter((product) => product.id !== obj.id);
      setCarrinho(arrFilter);
      setItem('carrinhos', arrFilter)
    } else {
      setCarrinho(([...carrinho, obj]))
      setItem('carrinhos',[...carrinho, obj])
    }
  }

  return (
    <div className='main'>
      <Header />
      <div className='gondula'>
        {products.map((product, key) => (
          <div key={key} className='produtos'>
          <Link to={`/descricao/${product.id}`} key={key} className='linkDescricao'>
            <img src={`${product.foto}`} alt={product.foto} />
            <h1>{product.nome}</h1>
            <h1>R${product.valor}</h1>
            </Link>
            <button onClick={() => handleClick(product)}>
              {
                carrinho.some((itemCarrinho) => itemCarrinho.id === product.id) ? (
                  <BsFillCartCheckFill />
                ) : (
                  <BsCartPlusFill />
                )
              }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
