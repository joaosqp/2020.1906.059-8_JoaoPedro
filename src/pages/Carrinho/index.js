import React, { useState } from "react";
import { getItem, setItem } from '../../services/LocalStorage';
import { BsFillCartDashFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { Appbar } from "../../components/Appbar";



export const Carrinho = () => {
    const [products, setProducts] = useState(getItem('carrinhos') || [])

    const removeItem = (obj) => {
        const arrFilter = products.filter((products) => products.id !== obj.id)
        setProducts(arrFilter)
        setItem('carrinhos',arrFilter)
    }


    return (
        <div className='main'>
        <Appbar />
            <div className='productList'>
                {products.map((product, key) => (
                    <div key={key} className='produtos'>
                        <img src={`${product.foto}`} alt={product.foto} />
                        <h1>{product.nome}</h1>
                        <h1>R${product.valor}</h1>
                        <button onClick={() => removeItem(product)} className="button">
                            Remover do Carrinho
                            <BsFillCartDashFill />
                        </button>
                    </div>
                ))}
            </div>
            <Link to={'/'} className='linkCC'>
                Continue Comprando
            </Link>
        </div>
    );
};
