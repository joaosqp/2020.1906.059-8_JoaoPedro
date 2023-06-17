import React from 'react';
import { Link } from 'react-router-dom';
import Erro404 from '../../images/error-404.jpg';
import './erro.css';

export function Erro() {
  const handleImageClick = () => {
    // Redirecionar para a página inicial (home)
    window.location.href = '/';
  };

  return (
    <div className="erro404">
      <Link to="/" onClick={handleImageClick}>
        <img src={Erro404} alt="Erro 404" />
      </Link>
    </div>
  );
}
