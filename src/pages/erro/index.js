import { Link } from "react-router-dom"
import "./erro.css";
import React from 'react'

export function Erro() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Veja os produtos aqui</Link>
    </div>
  );
}
