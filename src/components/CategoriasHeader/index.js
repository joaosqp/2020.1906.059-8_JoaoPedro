import { Link } from 'react-router-dom'
import './header.css'
import Envio from '../../images/envio.png'

export const CategoriasHeader = (props) => {

  const filtrarPorCategoria = (categoriaName) => {
    props.filtrarPorCategoria(categoriaName);
  }

  return (
    <div>
      <div className='menu2'>
        <nav className='menu2' onClick={() => filtrarPorCategoria('masturbador')}>
          <Link className='link'>MASTURBADORES</Link>
        </nav>
        <span>|</span>
        <nav className='menu2'>
          <Link className='link' onClick={() => filtrarPorCategoria('vibrador')}>VIBRADORES</Link>
        </nav>
        <span>|</span> 
        <nav className='menu2'>
          <Link className='link' onClick={() => filtrarPorCategoria('cosmetico')}>COSMÉTICOS</Link>
        </nav>
      </div>
      <img src={Envio} alt='imagem de envio'/>
    </div>
  );
}