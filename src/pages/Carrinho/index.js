import React, { useState } from "react";
import { Header } from '../../components/Header'
import { getItem } from '../../services/LocalStorage'
import { BsFillCartDashFill } from 'react-icons/bs'



export const Carrinho = () => {
    const [products, setProducts] = useState(getItem('carrinhos') || [])

    const removeItem = (obj) => {
        const arrFilter = products.filter((products) => products.id !== obj.id)
        setProducts(arrFilter)
    }



    return (
        <div className='main'>
            <Header />
            <div className='gondula'>
                {products.map((product, key) => (
                    <div key={key} className='produtos'>
                        <img src={`${product.foto}`} alt={product.foto} />
                        <h1>{product.nome}</h1>
                        <h1>R${product.valor}</h1>
                        <button onClick={() => removeItem(product)}>

                            <BsFillCartDashFill />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
