import { Link } from 'react-router-dom'
import './header.css'
import Envio from '../../images/envio.png'

export const Header = () => {
  return (
    <header>
      <div className='titulo'>
        <label htmlFor='Sagrado'>
          <Link to={'/'} className='nomeSagrado'>
            Sagrado Prazer
          </Link>
        </label>
      </div>
      <div>
        <input className='pesquisar' type='text' name='Sagrado' placeholder='Digite oque você procura...' />
      </div>
      <div className='sacola'>
        <img src="Envio" alt='Imagem ilustrativa de envio' />
      </div>
    </header>
  )
}