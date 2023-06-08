import { Link } from 'react-router-dom'
import './header.css'
import Envio from './images/envio.png'

export const Header = () => {
  return (
    <header>
      <div className='label'>
        <label htmlFor='Sagrado'>
          <Link to={'/'} className='nomeSagrado'>
            Sagrado Prazer
          </Link>
        </label>
        <input className='pesquisar' type='text' name='Sagrado' placeholder='Digite oque você procura...' />
      </div>
      <div>
      <img src="" alt='Imagem ilustrativa de envio' />
      </div>
    </header>
  )
}
