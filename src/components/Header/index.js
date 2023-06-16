import { Link } from 'react-router-dom'
import './header.css'
import Envio from '../../images/envio.png'

export const Header = () => {
  return (
    <header>
      <div className='menu1'>
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
      </div>
      <div className='menu2'>
        <nav className='menu2'>
          <Link className='link' to="/">MASTURBADORES</Link>
        </nav>
        <span>|</span>
        <nav className='menu2'>
          <Link className='link' to="/">VIBRADORES</Link>
        </nav>
        <span>|</span> 
        <nav className='menu2'>
          <Link className='link' to="/">COSMÉTICOS</Link>
        </nav>
      </div>
      <img src={Envio} alt='teste'/>
    </header>
  )
}